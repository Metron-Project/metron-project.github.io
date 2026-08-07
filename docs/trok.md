---
sidebar_position: 47
label: Trok
---
# Trok

## What is it?

Trok is a .NET library for reading and writing `MetronInfo.xml` files, the comic/manga metadata format described by MetronInfo.xsd, targeting .NET 10.

## Installation

Not yet published to NuGet.org. Once released:

```bash
dotnet add package MetronInfo.Xml
```

## Example Usage

### Reading

```csharp
using MetronInfo.Xml;

MetronInfo.Xml.Models.MetronInfo info = MetronInfoXml.Read("MetronInfo.xml");

Console.WriteLine(info.Series.Name);
Console.WriteLine(info.Number);
```

### Writing

```csharp
var info = new MetronInfo.Xml.Models.MetronInfo
{
    Series = new SeriesType { Name = "Sandman", Volume = 1, StartYear = 1989 },
    Number = "1",
    AgeRating = AgeRatingType.Mature,
};

MetronInfoXml.Write(info, "MetronInfo.xml");
```

### Validating

```csharp
IReadOnlyList<string> errors = MetronInfoXml.Validate("MetronInfo.xml");

if (errors.Count > 0)
{
    foreach (var error in errors)
    {
        Console.WriteLine(error);
    }
}
```

`Validate` checks the document against the embedded copy of `MetronInfo.xsd`, and also enforces the "at most one `primary=\"true\"`" rules on `IDS/ID` and `URLs/URL` that the schema expresses as XSD 1.1 `xs:assert` rules.

## Code

The projects code can be found at [GitHub](https://github.com/Metron-Project/trok).

## Bugs / Feature Requests

Any bugs or feature requests can be filed [here](https://github.com/Metron-Project/trok/issues).
