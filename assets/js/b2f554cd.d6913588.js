"use strict";(self.webpackChunkmetron_project_github_io=self.webpackChunkmetron_project_github_io||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"metron-tagger-1-6-4","metadata":{"permalink":"/blog/metron-tagger-1-6-4","source":"@site/blog/2023-10-29-metrontagger-164/index.md","title":"Metron-Tagger v1.6.4","description":"Metron-Tagger v1.6.4","date":"2023-10-29T13:24:00.000Z","formattedDate":"October 29, 2023","tags":[{"label":"comic","permalink":"/blog/tags/comic"},{"label":"database","permalink":"/blog/tags/database"},{"label":"metron","permalink":"/blog/tags/metron"},{"label":"metrontagger","permalink":"/blog/tags/metrontagger"}],"readingTime":0.045,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"metron-tagger-1-6-4","title":"Metron-Tagger v1.6.4","date":"2023-10-29T13:24","authors":["bpepple"],"tags":["comic","database","metron","metrontagger"]},"nextItem":{"title":"October 2023 Update","permalink":"/blog/october-2023-update"}},"content":"## Metron-Tagger v1.6.4\\n\\nJust released a new version of"},{"id":"october-2023-update","metadata":{"permalink":"/blog/october-2023-update","source":"@site/blog/2023-10-29-october-update/index.md","title":"October 2023 Update","description":"New Indexed Issues Milestone","date":"2023-10-29T10:04:00.000Z","formattedDate":"October 29, 2023","tags":[{"label":"comic","permalink":"/blog/tags/comic"},{"label":"database","permalink":"/blog/tags/database"},{"label":"metron","permalink":"/blog/tags/metron"},{"label":"metrontagger","permalink":"/blog/tags/metrontagger"},{"label":"comictagger","permalink":"/blog/tags/comictagger"}],"readingTime":1.595,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"october-2023-update","title":"October 2023 Update","date":"2023-10-29T10:04","authors":["bpepple"],"tags":["comic","database","metron","metrontagger","comictagger"]},"prevItem":{"title":"Metron-Tagger v1.6.4","permalink":"/blog/metron-tagger-1-6-4"},"nextItem":{"title":"Latest Happenings","permalink":"/blog/latest-happenings"}},"content":"## New Indexed Issues Milestone\\n\\nThe [Metron Project](https://metron.cloud/) reached a milestone this by having more than 77,000 issues added to its\\ndatabase. I wish to give big thanks to everyone who has helped with the project. Thanks!\\n\\n## Metron-Tagger v1.6.4\\n\\n### Duplicate Page Removal\\n\\nJust released a new version of [Metron-Tagger](https://github.com/Metron-Project/metron-tagger), which adds a new\\nexperimental feature of finding / removing duplicate pages in a directory of comics. The feature will get the hashes for\\nall the pages of the comics in a directory, and then ask the user if the image should be removed from the comics. This\\nis done by using the user\'s system image viewer to display the duplicate image. Once the user has reviewed all the\\nduplicated images it will ask the user whether to write the changes to the comics and then prompt them if they also want\\nto update the [ComicInfo.xml](https://anansi-project.github.io/docs/comicinfo/intro) (if it exists) for the page\\nchanges.\\n\\nThis feature most likely will work best when running on a weekly basis, instead of on a ***whole*** comic collection,\\nsince it\'s asking the user to review all the duplicate images *before* writing the changes. I\'m planning on reworking\\nthis to make it more feasible to use on a large comic collection, but that is pretty far down on my TODO list (but if\\nsomeone wants to work on this I\'m more than willing to review a Pull Request).\\n\\n**Note**: I\'ve been using this for the last month and haven\'t had any issues, but if you plan on using this I would\\nsuggest backing up any files when using this initially, and verifying it works correctly for you since once the changes\\nare written they can\'t be undone! \ud83d\udca3\\n\\n### Miscellaneous Maintenance\\n\\nThe rest of v1.6.4 changes are primarily developer-side changes updating the toolsets for Metron-Tagger.\\n\\n## Comic-Tagger\\n\\n[Comic-Tagger](https://github.com/comictagger/comictagger) recently released\\ntheir [Metron-Talker](https://github.com/comictagger/metron_talker) plugin which adds support for tagging any comic with\\nmetadata from [Metron](https://metron.cloud/)."},{"id":"latest-happenings","metadata":{"permalink":"/blog/latest-happenings","source":"@site/blog/2023-05-23-latest-happenings/index.md","title":"Latest Happenings","description":"New Indexed Issues Milestone","date":"2023-05-24T13:24:00.000Z","formattedDate":"May 24, 2023","tags":[{"label":"comic","permalink":"/blog/tags/comic"},{"label":"database","permalink":"/blog/tags/database"},{"label":"series","permalink":"/blog/tags/series"},{"label":"api","permalink":"/blog/tags/api"},{"label":"comicvine","permalink":"/blog/tags/comicvine"},{"label":"comictagger","permalink":"/blog/tags/comictagger"}],"readingTime":0.88,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"latest-happenings","title":"Latest Happenings","date":"2023-05-24T13:24","authors":["bpepple"],"tags":["comic","database","series","api","comicvine","comictagger"]},"prevItem":{"title":"October 2023 Update","permalink":"/blog/october-2023-update"},"nextItem":{"title":"Limited Series Type","permalink":"/blog/series-type-change"}},"content":"## New Indexed Issues Milestone\\n\\nThe [Metron Project](https://metron.cloud/) reached a milestone today by having 65,000 issues added to its database. I wish to give big thanks to everyone who has helped with the project. Thanks!\\n\\n## POST API\\n\\nBeen spending the last few months working on a POST API to make it easier to add/update information on Metron. Currently it\'s only available to users with Adminstrators permissions, but later this year I\'ll look at the feasability of making it more readily available.\\n\\n## Comic Vine ID\'s\\n\\nAnother project I\'ve been working on is adding [Comic Vine](https://comicvine.gamespot.com/) identification numbers to the various resource items. This should help users match items between the two data sources. Currently, about 40% of the issues have been updated with this information and with any luck the majority of issues will be finished by the end of the month.\\n\\n## ComicTagger\\n\\nOne of the developers of [Comic Tagger](https://github.com/comictagger/comictagger) has been working on adding support for tagging digital comics with data from Metron, and hopefully in the next couple of months that merged."},{"id":"series-type-change","metadata":{"permalink":"/blog/series-type-change","source":"@site/blog/2022-12-04-series-type/index.md","title":"Limited Series Type","description":"Made a minor change to the series types available by consolidating mini & maxi-series to the new Limited Series type. There isn\'t a real definite value for mini and maxi series, and really it makes more sense to not bother differentiating them. So, I\'ve gone ahead and migrated the existing data for this change, and users should see this change. If you have any questions or thoughts, don\'t hesitate to contact me.","date":"2022-12-04T16:51:00.000Z","formattedDate":"December 4, 2022","tags":[{"label":"comic","permalink":"/blog/tags/comic"},{"label":"database","permalink":"/blog/tags/database"},{"label":"series","permalink":"/blog/tags/series"}],"readingTime":0.36,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"series-type-change","title":"Limited Series Type","date":"2022-12-04T16:51","authors":["bpepple"],"tags":["comic","database","series"]},"prevItem":{"title":"Latest Happenings","permalink":"/blog/latest-happenings"},"nextItem":{"title":"Using Podman to Run GCD Database Locally","permalink":"/blog/podman-gcd"}},"content":"Made a minor change to the ***series types*** available by consolidating ***mini & maxi-series*** to the new ***Limited Series*** type. There isn\'t a real definite value for mini and maxi series, and really it makes more sense to not bother differentiating them. So, I\'ve gone ahead and migrated the existing data for this change, and users should see this change. If you have any questions or thoughts, don\'t hesitate to contact [me](mailto:bpepple@metron.cloud)."},{"id":"podman-gcd","metadata":{"permalink":"/blog/podman-gcd","source":"@site/blog/2022-10-08-podman/index.md","title":"Using Podman to Run GCD Database Locally","description":"I\'ve had a few users ask me how to run a local copy of the Grand Comics Database, so I figured I\'d do a short write-up on how I do it.","date":"2022-10-08T11:35:00.000Z","formattedDate":"October 8, 2022","tags":[{"label":"comic","permalink":"/blog/tags/comic"},{"label":"database","permalink":"/blog/tags/database"},{"label":"podman","permalink":"/blog/tags/podman"},{"label":"mysql","permalink":"/blog/tags/mysql"},{"label":"gcd","permalink":"/blog/tags/gcd"},{"label":"grandcomicdatabase","permalink":"/blog/tags/grandcomicdatabase"}],"readingTime":5.065,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"podman-gcd","title":"Using Podman to Run GCD Database Locally","date":"2022-10-08T11:35","authors":["bpepple"],"tags":["comic","database","podman","mysql","gcd","grandcomicdatabase"]},"prevItem":{"title":"Limited Series Type","permalink":"/blog/series-type-change"},"nextItem":{"title":"OS Upgrade","permalink":"/blog/ubuntu-2204-lts"}},"content":"I\'ve had a few users ask me how to run a local copy of the [Grand Comics Database](https://www.comics.org/), so I figured I\'d do a short write-up on how I do it.\\n\\nI use [Podman](https://podman.io/) for containers instead of [Docker](https://www.docker.com/), but the differences between them is fairly minimal and this should give you a good idea of how to do it. Anyway, let\'s get started!\\n\\nFirst off, you\'ll want to download the most recent database dump from GCD which can be found [here](https://www.comics.org/download/). Once it\'s finished downloading, unzip the file:\\n\\n```\\nunzip current.zip -d /tmp/\\n```\\nYou should see output similar to this:\\n\\n```\\nArchive:  current.zip\\n  inflating: /tmp/2022-10-01.sql   \\n```\\n\\nOk, now that we\'ve got the data from gcd, let\'s create a [MySQL](https://www.mysql.com/) container. We need to first pull a MySQL image, which can be done by running:\\n\\n```\\npodman pull docker.io/library/mysql:5.7\\n```\\n\\nAfter it\'s done downloading the image, you can confirm:\\n\\n```\\npodman images\\n```\\n\\nwhich should return output similar to this:\\n\\n```\\nbpepple@frodo ~ $ podman images mysql\\nREPOSITORY               TAG         IMAGE ID      CREATED       SIZE\\ndocker.io/library/mysql  5.7         eb175b0743cc  19 hours ago  448 MB\\n```\\n\\nNow we need to create the container. You\'ll want to replace user and mysql credentials with your own values. The `volume` flag is where on your filesystem you want to save the database. The `Z` suffix is used for systems, primarily [Red Hat](https://www.redhat.com/en/topics/linux/what-is-selinux)-based, that use [SELinux](https://www.redhat.com/en/topics/linux/what-is-selinux). If you don\'t use SELinux that can be dropped:\\n\\n```\\npodman run -d --name mysql -p 3306:3306 -e MYSQL_USER=bpepple -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=gcd -e MYSQL_ROOT_PASSWORD=567890 --volume /home/bpepple/Storage/pods/mysql/:/var/lib/mysql:Z mysql:5.7\\n```\\n\\nNow let\'s verify that the container was created and is running by using the following:\\n\\n```\\npodman ps\\n```\\n\\nYou should see output similar to this:\\n\\n```\\nbpepple@frodo ~ $ podman ps\\nCONTAINER ID  IMAGE                       COMMAND CREATED       STATUS           PORTS                  NAMES\\n400c957ae25d  docker.io/library/mysql:5.7 mysqld  7 seconds ago Up 7 seconds ago 0.0.0.0:3306->3306/tcp mysql\\n```\\nNow we just need to dump the data from GCD into the database. We can do this by running:\\n\\n```\\ncat /tmp/2022-10-01.sql | podman exec -i mysql /usr/bin/mysql -u root --password=567890 gcd\\n```\\nDepending on the specs of your machine, this might be a good time to grab some coffee, since the SQL dump is **very** large and will take awhile to finish. Once it\'s done, we can start using the database by attaching to the container:\\n\\n```\\npodman exec -it mysql mysql -ubpepple -p gcd\\n```\\n\\nThis command will prompt you for your password, and then you\'ll see the MySQL prompt where you can run a simple SQL statement like so:\\n```\\n DESCRIBE gcd_issue;\\n```\\nWhich should produce output similar to this:\\n```\\n+----------------------------+---------------+------+-----+---------------------+----------------+\\n| Field                      | Type          | Null | Key | Default             | Extra          |\\n+----------------------------+---------------+------+-----+---------------------+----------------+\\n| id                         | int(11)       | NO   | PRI | NULL                | auto_increment |\\n| number                     | varchar(50)   | NO   | MUL | NULL                |                |\\n| volume                     | varchar(50)   | NO   | MUL |                     |                |\\n| no_volume                  | tinyint(1)    | NO   | MUL | 0                   |                |\\n| display_volume_with_number | tinyint(1)    | NO   | MUL | 0                   |                |\\n| series_id                  | int(11)       | NO   | MUL | NULL                |                |\\n| indicia_publisher_id       | int(11)       | YES  | MUL | NULL                |                |\\n| indicia_pub_not_printed    | tinyint(1)    | NO   |     | NULL                |                |\\n| brand_id                   | int(11)       | YES  | MUL | NULL                |                |\\n| no_brand                   | tinyint(1)    | NO   | MUL | NULL                |                |\\n| publication_date           | varchar(255)  | NO   |     | NULL                |                |\\n| key_date                   | varchar(10)   | NO   | MUL | NULL                |                |\\n| sort_code                  | int(11)       | NO   | MUL | NULL                |                |\\n| price                      | varchar(255)  | NO   |     | NULL                |                |\\n| page_count                 | decimal(10,3) | YES  |     | NULL                |                |\\n| page_count_uncertain       | tinyint(1)    | NO   |     | 0                   |                |\\n| indicia_frequency          | varchar(255)  | NO   |     |                     |                |\\n| no_indicia_frequency       | tinyint(1)    | NO   | MUL | 0                   |                |\\n| editing                    | longtext      | NO   |     | NULL                |                |\\n| no_editing                 | tinyint(1)    | NO   | MUL | 0                   |                |\\n| notes                      | longtext      | NO   |     | NULL                |                |\\n| created                    | datetime      | NO   |     | 1901-01-01 00:00:00 |                |\\n| modified                   | datetime      | NO   | MUL | 1901-01-01 00:00:00 |                |\\n| deleted                    | tinyint(1)    | NO   | MUL | 0                   |                |\\n| is_indexed                 | tinyint(1)    | NO   | MUL | 0                   |                |\\n| isbn                       | varchar(32)   | NO   | MUL |                     |                |\\n| valid_isbn                 | varchar(13)   | NO   | MUL |                     |                |\\n| no_isbn                    | tinyint(1)    | NO   | MUL | 0                   |                |\\n| variant_of_id              | int(11)       | YES  | MUL | NULL                |                |\\n| variant_name               | varchar(255)  | NO   |     |                     |                |\\n| barcode                    | varchar(38)   | NO   | MUL |                     |                |\\n| no_barcode                 | tinyint(1)    | NO   |     | 0                   |                |\\n| title                      | varchar(255)  | NO   | MUL |                     |                |\\n| no_title                   | tinyint(1)    | NO   | MUL | 0                   |                |\\n| on_sale_date               | varchar(10)   | NO   | MUL | NULL                |                |\\n| on_sale_date_uncertain     | tinyint(1)    | NO   |     | 0                   |                |\\n| rating                     | varchar(255)  | NO   | MUL | NULL                |                |\\n| no_rating                  | tinyint(1)    | NO   | MUL | NULL                |                |\\n| volume_not_printed         | tinyint(1)    | NO   |     | NULL                |                |\\n| no_indicia_printer         | tinyint(1)    | NO   |     | NULL                |                |\\n+----------------------------+---------------+------+-----+---------------------+----------------+\\n40 rows in set (0.00 sec)\\n\\n```\\nGreat, we\'ve got the database up and running! To logout from the container just type:\\n\\n```\\n\\\\q\\n```\\n\\nTo stop the container, you would just use the following:\\n\\n```\\npodman stop mysql\\n```\\n\\nAnd that\'s it! Podman has tons of niceties (like auto-updating images, using [systemd](https://systemd.io/) for container start-ups, etc.) and I\'d encourage you to read up on using some its many features. If it get some free time, I\'ll do a follow-up article about using [Python](https://www.python.org/) to query the database and using that data for things like writing metadata to comic archives."},{"id":"ubuntu-2204-lts","metadata":{"permalink":"/blog/ubuntu-2204-lts","source":"@site/blog/2022-08-26-ubuntu-22-04/index.md","title":"OS Upgrade","description":"Finally got around to upgrading the OS for Metron to Ubuntu 22.04.1 LTS, which overall, was fairly painless. Tests didn\'t find anything obviously broken, but if you do run across something that is, please open a bug for it. Thx!","date":"2022-08-27T14:32:00.000Z","formattedDate":"August 27, 2022","tags":[{"label":"server","permalink":"/blog/tags/server"},{"label":"ubuntu","permalink":"/blog/tags/ubuntu"}],"readingTime":0.2,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"ubuntu-2204-lts","title":"OS Upgrade","date":"2022-08-27T14:32","authors":["bpepple"],"tags":["server","ubuntu"]},"prevItem":{"title":"Using Podman to Run GCD Database Locally","permalink":"/blog/podman-gcd"},"nextItem":{"title":"Esak-1.3.2","permalink":"/blog/esak-132"}},"content":"Finally got around to upgrading the OS for Metron to [Ubuntu 22.04.1 LTS](https://releases.ubuntu.com/22.04.1/), which overall, was fairly painless. Tests didn\'t find anything obviously broken, but if you do run across something that is, please open a [bug](https://github.com/bpepple/metron/issues/new/choose) for it. Thx!"},{"id":"esak-132","metadata":{"permalink":"/blog/esak-132","source":"@site/blog/2022-08-23-esak-1-3-2/index.md","title":"Esak-1.3.2","description":"Did a quick release this morning of the python wrapper for the Marvel API, Esak, which adds an option to have the cache results expire after a user-defined number of days. To update to the latest version just run the following command:","date":"2022-08-23T10:35:00.000Z","formattedDate":"August 23, 2022","tags":[{"label":"comic","permalink":"/blog/tags/comic"},{"label":"marvel","permalink":"/blog/tags/marvel"},{"label":"api","permalink":"/blog/tags/api"},{"label":"python","permalink":"/blog/tags/python"}],"readingTime":0.245,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"esak-132","title":"Esak-1.3.2","date":"2022-08-23T10:35","authors":["bpepple"],"tags":["comic","marvel","api","python"]},"prevItem":{"title":"OS Upgrade","permalink":"/blog/ubuntu-2204-lts"},"nextItem":{"title":"Darkseid-1.3.3","permalink":"/blog/darkseid-133"}},"content":"Did a quick release this morning of the python wrapper for the Marvel API, [Esak](https://github.com/Metron-Project/esak), which adds an option to have the cache results expire after a user-defined number of days. To update to the latest version just run the following command:\\n\\n```\\npip3 install -U --user esak\\n```"},{"id":"darkseid-133","metadata":{"permalink":"/blog/darkseid-133","source":"@site/blog/2022-07-26-darkseid-1-3-3/index.md","title":"Darkseid-1.3.3","description":"Did a quick release today of Darkseid that fixes a bug which prevented exporting rar (.cbr) comics to zip files (.cbz). If you use Metron-Tagger and export rar files, it would be worthwhile to update Darkseid which can be done with the following command:","date":"2022-07-26T12:35:00.000Z","formattedDate":"July 26, 2022","tags":[{"label":"cbz","permalink":"/blog/tags/cbz"},{"label":"cbr","permalink":"/blog/tags/cbr"},{"label":"comic","permalink":"/blog/tags/comic"},{"label":"tagging","permalink":"/blog/tags/tagging"}],"readingTime":0.33,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"darkseid-133","title":"Darkseid-1.3.3","date":"2022-07-26T12:35","authors":["bpepple"],"tags":["cbz","cbr","comic","tagging"]},"prevItem":{"title":"Esak-1.3.2","permalink":"/blog/esak-132"},"nextItem":{"title":"Trade Paperback / Collections Support","permalink":"/blog/trade-paperback-collections-support"}},"content":"Did a quick release today of [Darkseid](https://github.com/Metron-Project/darkseid) that fixes a bug which prevented exporting rar (.cbr) comics to zip files (.cbz). If you use [Metron-Tagger](https://github.com/Metron-Project/metron-tagger) and export rar files, it would be worthwhile to update Darkseid which can be done with the following command:\\n\\n```\\npip3 install -U --user darkseid\\n```\\n\\nAs always if you run into any problems, don\'t hesitate to contact us on [Matrix](https://matrix.to/#/#metrondb:matrix.org)."},{"id":"trade-paperback-collections-support","metadata":{"permalink":"/blog/trade-paperback-collections-support","source":"@site/blog/2022-07-23-collections/index.md","title":"Trade Paperback / Collections Support","description":"Marvel Masterworks Cover","date":"2022-07-23T15:35:00.000Z","formattedDate":"July 23, 2022","tags":[{"label":"metron","permalink":"/blog/tags/metron"},{"label":"comic","permalink":"/blog/tags/comic"},{"label":"marvel","permalink":"/blog/tags/marvel"},{"label":"masterworks","permalink":"/blog/tags/masterworks"},{"label":"x-men","permalink":"/blog/tags/x-men"},{"label":"tpb","permalink":"/blog/tags/tpb"},{"label":"collections","permalink":"/blog/tags/collections"}],"readingTime":0.935,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"trade-paperback-collections-support","title":"Trade Paperback / Collections Support","date":"2022-07-23T15:35","authors":["bpepple"],"tags":["metron","comic","marvel","masterworks","x-men","tpb","collections"]},"prevItem":{"title":"Darkseid-1.3.3","permalink":"/blog/darkseid-133"},"nextItem":{"title":"50,000 issues indexed","permalink":"/blog/50000-issues"}},"content":"![Marvel Masterworks Cover](./marvel-masterworks-uncanny-xmen-1.jpg)\\n\\nA user contacted me about adding [Marvel Masterworks: The Uncanny X-Men](https://metron.cloud/series/marvel-masterworks-the-uncanny-x-men-2003/) series to [Metron](https://metron.cloud) since we have recently added support for trade paperbacks/collected editions. I figured this would be useful exercise since it would show me what parts of the process could be improved to make it easier.\\n\\nCurrently, the process requires the editor to add ***all*** creators, characters, teams, etc. manually for the reprinted issues associate with the collection, much like a regular issue. One obvious way to simplify this is to automatically ***add*** any characters, team, story titles, etc. for the issues being reprinted. Currently, I\'ve written an [admin action](https://github.com/bpepple/metron/blob/0d6268f92709ef886e49ffe2a134a0b6af3672f7/comicsdb/admin/issue.py#L145) to do this, but sometime in the future I need to expose this functionality so that ***anyone*** adding a Trade Paperback/Collection can save some time.\\n\\nWhen I was creating Metron one of the choices I made was to add creators at an issue-level, and not at a story-level, since I wanted the process for adding an issue to be fairly simple. The downside to this approach is that adding information to a collection from an issue with multiple stories isn\'t really possible.\ud83d\ude22"},{"id":"50000-issues","metadata":{"permalink":"/blog/50000-issues","source":"@site/blog/2022-07-17-50000/index.md","title":"50,000 issues indexed","description":"The Metron Project reached a milestone today by having 50,000 issues added to its database. I wish to give big thanks to everyone who has helped with the project. Thanks!","date":"2022-07-17T11:00:00.000Z","formattedDate":"July 17, 2022","tags":[{"label":"metron","permalink":"/blog/tags/metron"},{"label":"comic","permalink":"/blog/tags/comic"},{"label":"database","permalink":"/blog/tags/database"},{"label":"api","permalink":"/blog/tags/api"}],"readingTime":0.15,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"50000-issues","title":"50,000 issues indexed","date":"2022-07-17T11:00","authors":["bpepple"],"tags":["metron","comic","database","api"]},"prevItem":{"title":"Trade Paperback / Collections Support","permalink":"/blog/trade-paperback-collections-support"},"nextItem":{"title":"MetronInfo.xml","permalink":"/blog/welcome-metroninfo"}},"content":"The Metron Project reached a milestone today by having 50,000 issues added to its database. I wish to give big thanks to everyone who has helped with the project. Thanks!"},{"id":"welcome-metroninfo","metadata":{"permalink":"/blog/welcome-metroninfo","source":"@site/blog/2022-07-13-metroninfo/index.md","title":"MetronInfo.xml","description":"So, one of the new projects I\'ve been working on in my spare time is a new comic book xml schema called MetronInfo.","date":"2022-07-13T00:00:00.000Z","formattedDate":"July 13, 2022","tags":[{"label":"metron","permalink":"/blog/tags/metron"},{"label":"comic","permalink":"/blog/tags/comic"},{"label":"metadata","permalink":"/blog/tags/metadata"},{"label":"tagging","permalink":"/blog/tags/tagging"},{"label":"comicvine","permalink":"/blog/tags/comicvine"},{"label":"comic-tagger","permalink":"/blog/tags/comic-tagger"},{"label":"anansi-project","permalink":"/blog/tags/anansi-project"}],"readingTime":1.75,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"welcome-metroninfo","title":"MetronInfo.xml","authors":["bpepple"],"tags":["metron","comic","metadata","tagging","comicvine","comic-tagger","anansi-project"]},"prevItem":{"title":"50,000 issues indexed","permalink":"/blog/50000-issues"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"So, one of the new projects I\'ve been working on in my spare time is a new comic book xml schema called [MetronInfo](https://github.com/Metron-Project/metroninfo).\\n\\nCurrently, most applications use [ComicInfo](https://github.com/anansi-project/comicinfo) which originated from the [ComicRack](https://comicrack.en.softonic.com/) application, but due to it\'s history this format has some limitations like:\\n\\n- **Poor handling of data.** For example, cover date information that is split into separate integer types, instead of just using a date type.\\n- **Limited types metadata stored.** For example, when tagging a comic book archive with an application like [ComicTagger](https://github.com/comictagger/comictagger) it would be useful to know where the metadata information was retrieved from (i.e. Comic Vine, GCD, Metron, etc.) and the resources identification number.\\n- **Lack of documentation.** The [Anansi Project](https://anansi-project.github.io/) ***is*** working on improving this, tho.\\n\\nFor now, the Anansi Project is working on documenting and extending (non-breaking changes) the ComicInfo schema, but in my opinion that time spent would be better spent on creating a new format not tied to a dead application. Due to the fairly unstructured nature of comic book archives it\'s trivial to tag one with the existing ComicInfo format **and** also a new format. That way users who use applications that only support ComicInfo.xml can still use them, but also gives them the option to use applications that could support the MetronInfo format.\\n\\nMy goals for MetronInfo.xml are:\\n\\n- Fix some of the deficiencies of the ComicInfo format.\\n- Add information to make it easier for Plex-like application to identify data (series, character, etc/) when importing comics into their application.\\n- Document the elements clearly so their use is not ambiguous.\\n\\nCurrently I\'m working right now on finalizing the new format, and would appreciate any help or feedback from the comic book community in this. Feel free to leave suggestions either at the [Discussions Page](https://github.com/Metron-Project/metroninfo/discussions) or contact use over on [Matrix](https://matrix.to/#/#metrondb:matrix.org).\\n\\nOnce the new format is finalized I plan on writing a tool that will create a MetronInfo.xml file for any existing comic book archive that was tagged with ComicTagger or [Metron-Tagger](https://github.com/Metron-Project/metron-tagger), and also retrieve any missing data from the source of information (Metron or Comic Vine)."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2022-07-06-welcome/index.md","title":"Welcome","description":"Welcome to the Metron Project! We\'ll be using this site to add some documentation and information about new project initiatives here.","date":"2022-07-06T00:00:00.000Z","formattedDate":"July 6, 2022","tags":[{"label":"metron","permalink":"/blog/tags/metron"},{"label":"comic","permalink":"/blog/tags/comic"}],"readingTime":0.165,"hasTruncateMarker":false,"authors":[{"name":"Brian Pepple","title":"Founder of the Metron Project / Code Monkey","url":"https://github.com/bpepple","imageURL":"https://github.com/bpepple.png","key":"bpepple"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["bpepple"],"tags":["metron","comic"]},"prevItem":{"title":"MetronInfo.xml","permalink":"/blog/welcome-metroninfo"}},"content":"Welcome to the Metron Project! We\'ll be using this site to add some documentation and information about new project initiatives here.\\nIf you have any questions, don\'t hesitate to contact us on [Matrix](https://matrix.to/#/#metrondb:matrix.org)."}]}')}}]);