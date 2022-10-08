---
slug: podman-gcd
title: Using Podman to Run GCD Database Locally
date: 2022-10-08T11:35
authors: [bpepple]
tags: [comic, database, podman, mysql, gcd, grandcomicdatabase]
---
I've had a few users ask me how to run a local copy of the [Grand Comics Database](https://www.comics.org/), so I figured I'd do a short write-up on how I do it.

I use [Podman](https://podman.io/) for containers instead of [Docker](https://www.docker.com/), but the differences between them is fairly minimal and this should give you a good idea of how to do it. Anyway, let's get started!

First off, you'll want to download the most recent database dump from GCD which can be found [here](https://www.comics.org/download/). Once it's finished downloading, unzip the file:

```
unzip current.zip -d /tmp/
```
You should see output similar to this:

```
Archive:  current.zip
  inflating: /tmp/2022-10-01.sql   
```

Ok, now that we've got the data from gcd, let's create a [MySQL](https://www.mysql.com/) container. We need to first pull a MySQL image, which can be done by running:

```
podman pull docker.io/library/mysql:5.7
```

After it's done downloading the image, you can confirm:

```
podman images
```

which should return output similar to this:

```
bpepple@frodo ~ $ podman images mysql
REPOSITORY               TAG         IMAGE ID      CREATED       SIZE
docker.io/library/mysql  5.7         eb175b0743cc  19 hours ago  448 MB
```

Now we need to create the container. You'll want to replace user and mysql credentials with your own values. The `volume` flag is where on your filesystem you want to save the database. The `Z` suffix is used for systems, primarily [Red Hat](https://www.redhat.com/en/topics/linux/what-is-selinux)-based, that use [SELinux](https://www.redhat.com/en/topics/linux/what-is-selinux). If you don't use SELinux that can be dropped:

```
podman run -d --name mysql -p 3306:3306 -e MYSQL_USER=bpepple -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=gcd -e MYSQL_ROOT_PASSWORD=567890 --volume /home/bpepple/Storage/pods/mysql/:/var/lib/mysql:Z mysql:5.7
```

Now let's verify that the container was created and is running by using the following:

```
podman ps
```

You should see output similar to this:

```
bpepple@frodo ~ $ podman ps
CONTAINER ID  IMAGE                       COMMAND CREATED       STATUS           PORTS                  NAMES
400c957ae25d  docker.io/library/mysql:5.7 mysqld  7 seconds ago Up 7 seconds ago 0.0.0.0:3306->3306/tcp mysql
```
Now we just need to dump the data from GCD into the database. We can do this by running:

```
cat /tmp/2022-10-01.sql | podman exec -i mysql /usr/bin/mysql -u root --password=567890 gcd
```
Depending on the specs of your machine, this might be a good time to grab some coffee, since the SQL dump is **very** large and will take awhile to finish. Once it's done, we can start using the database by attaching to the container:

```
podman exec -it mysql mysql -ubpepple -p gcd
```

This command will prompt you for your password, and then you'll see the MySQL prompt where you can run a simple SQL statement like so:
```
 DESCRIBE gcd_issue;
```
Which should produce output similar to this:
```
+----------------------------+---------------+------+-----+---------------------+----------------+
| Field                      | Type          | Null | Key | Default             | Extra          |
+----------------------------+---------------+------+-----+---------------------+----------------+
| id                         | int(11)       | NO   | PRI | NULL                | auto_increment |
| number                     | varchar(50)   | NO   | MUL | NULL                |                |
| volume                     | varchar(50)   | NO   | MUL |                     |                |
| no_volume                  | tinyint(1)    | NO   | MUL | 0                   |                |
| display_volume_with_number | tinyint(1)    | NO   | MUL | 0                   |                |
| series_id                  | int(11)       | NO   | MUL | NULL                |                |
| indicia_publisher_id       | int(11)       | YES  | MUL | NULL                |                |
| indicia_pub_not_printed    | tinyint(1)    | NO   |     | NULL                |                |
| brand_id                   | int(11)       | YES  | MUL | NULL                |                |
| no_brand                   | tinyint(1)    | NO   | MUL | NULL                |                |
| publication_date           | varchar(255)  | NO   |     | NULL                |                |
| key_date                   | varchar(10)   | NO   | MUL | NULL                |                |
| sort_code                  | int(11)       | NO   | MUL | NULL                |                |
| price                      | varchar(255)  | NO   |     | NULL                |                |
| page_count                 | decimal(10,3) | YES  |     | NULL                |                |
| page_count_uncertain       | tinyint(1)    | NO   |     | 0                   |                |
| indicia_frequency          | varchar(255)  | NO   |     |                     |                |
| no_indicia_frequency       | tinyint(1)    | NO   | MUL | 0                   |                |
| editing                    | longtext      | NO   |     | NULL                |                |
| no_editing                 | tinyint(1)    | NO   | MUL | 0                   |                |
| notes                      | longtext      | NO   |     | NULL                |                |
| created                    | datetime      | NO   |     | 1901-01-01 00:00:00 |                |
| modified                   | datetime      | NO   | MUL | 1901-01-01 00:00:00 |                |
| deleted                    | tinyint(1)    | NO   | MUL | 0                   |                |
| is_indexed                 | tinyint(1)    | NO   | MUL | 0                   |                |
| isbn                       | varchar(32)   | NO   | MUL |                     |                |
| valid_isbn                 | varchar(13)   | NO   | MUL |                     |                |
| no_isbn                    | tinyint(1)    | NO   | MUL | 0                   |                |
| variant_of_id              | int(11)       | YES  | MUL | NULL                |                |
| variant_name               | varchar(255)  | NO   |     |                     |                |
| barcode                    | varchar(38)   | NO   | MUL |                     |                |
| no_barcode                 | tinyint(1)    | NO   |     | 0                   |                |
| title                      | varchar(255)  | NO   | MUL |                     |                |
| no_title                   | tinyint(1)    | NO   | MUL | 0                   |                |
| on_sale_date               | varchar(10)   | NO   | MUL | NULL                |                |
| on_sale_date_uncertain     | tinyint(1)    | NO   |     | 0                   |                |
| rating                     | varchar(255)  | NO   | MUL | NULL                |                |
| no_rating                  | tinyint(1)    | NO   | MUL | NULL                |                |
| volume_not_printed         | tinyint(1)    | NO   |     | NULL                |                |
| no_indicia_printer         | tinyint(1)    | NO   |     | NULL                |                |
+----------------------------+---------------+------+-----+---------------------+----------------+
40 rows in set (0.00 sec)

```
Great, we've got the database up and running! To logout from the container just type:

```
\q
```

To stop the container, you would just use the following:

```
podman stop mysql
```

And that's it! Podman has tons of niceties (like auto-updating images, using [systemd](https://systemd.io/) for container start-ups, etc.) and I'd encourage you to read up on using some its many features. If it get some free time, I'll do a follow-up article about using [Python](https://www.python.org/) to query the database and using that data for things like writing metadata to comic archives.