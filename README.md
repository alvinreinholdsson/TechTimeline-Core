# TechTimeline Core

Privat huvudprojekt för TechTimeline.

## Idé
TechTimeline ska inte bara visa *när* något uppfanns. Kärnan ska svara på:

> **Vad behövde finnas först för att detta skulle bli möjligt?**

En användare ska kunna välja en modern teknik, till exempel en smartphone, och arbeta bakåt genom:

`produkt → delsystem → komponent → material → process → verktyg → kunskap → råmaterial`

## Principer

1. **Teknisk nödvändighet och historiskt inflytande hålls isär.**
2. **Varje beroenderelation ska kunna motiveras.**
3. **Källor hör till påståenden och relationer, inte bara till hela noder.**
4. **Ungefärliga datum ska märkas som ungefärliga.**
5. **Alternativa tekniska vägar ska kunna modelleras.**
6. **Byggrecept ska vara separata från historisk kausalitet.**
7. **Produkten ska fungera även när databasen växer kraftigt.**

## Huvudlägen

- **Tidslinje** — vad fanns och när?
- **Bygg** — vad krävs för att nå ett mål?
- **Från naturen** — arbeta bakåt mot råmaterial och grundläggande processer.
- **Teknologiskt DNA** — visa beroendena för en specifik nod.
- **Jämför** — jämför teknikvägar, epoker eller alternativa lösningar.
- **Källor** — se evidens per påstående och relation.

## Datamodell

Noder och relationer ska lagras separat. En relation ska ha minst:

- `from_id`
- `to_id`
- `relation_type`
- `dependency_strength`
- `evidence_status`
- `source_ids`
- `rationale`

En nod ska kunna ha:

- namn
- år/intervall
- datumtyp
- kategori
- beskrivning
- material
- verktyg
- energi
- process
- kunskap
- svårighetsgrad
- evidensnivå
- källor

## Status

Detta repo är privat och är huvudbasen. Den publika `TechTimeline`-sidan är separat demo.
