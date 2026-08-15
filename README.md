# TechTimeline Core

Huvudprojektet för TechTimeline.

## Produkt

**TechTimeline är en interaktiv tidslinje över uppfinningar och teknik.**

Tidslinjen är själva huvudprodukten. Användaren ska kunna se teknikens utveckling år för år och sedan öppna en uppfinning för att upptäcka:

> **Vad behövde finnas innan detta kunde uppfinnas?**

Användaren kan följa tidigare uppfinningar, vetenskaplig kunskap, material, processer, verktyg och möjliggörande teknik bakåt i tiden. Viktiga relationer ska kunna granskas mot källor.

## Primär målgrupp

- Studenter och lärare
- Universitet och högre utbildning
- Forskare och teknik-/vetenskapshistoriker
- Läromedelsförlag
- Museer och science centers

## Produktens huvudlägen

- **Tidslinje** — huvudvyn över uppfinningar år för år.
- **Uppfinning** — detaljsida med år, beskrivning och bakgrund.
- **Vad behövdes innan?** — visar tidigare uppfinningar och möjliggörande samband.
- **Forskningsvy** — relationer, källor, evidensstatus och osäkerhet.
- **Jämför** — jämför teknikvägar och gemensamma beroenden.
- **Från naturen** — sekundär vy som fortsätter bakåt mot material, processer, energi och naturresurser när datan stödjer det.

## Relationstyper

- `requires`
- `enables`
- `scientific_foundation`
- `material_dependency`
- `process_dependency`
- `tool_dependency`
- `influence`
- `alternative_path`

Teknisk nödvändighet och historiskt inflytande ska aldrig blandas ihop.

## Källor och evidens

Källor hör till specifika påståenden och relationer, inte bara till en hel nod. Ett årtal i en källa är inte automatiskt bevis för att en teknisk relation är nödvändig.

Varje viktig relation ska därför kunna bära:

- förklaring/rationale
- `source_ids`
- evidensstatus
- confidence
- granskningsdatum

## Datum

Tidslinjen ska kunna hantera exakta år, intervall och ungefärliga perioder. Osäkra datum ska inte visas som exakta.

## Användarupplevelse

Målet är **smidigt och enkelt för studier**, men tillräckligt detaljerat för forskning. Användaren ska kunna växla mellan översikt och djup utan att gå vilse i ett separat system.

## Kommersiellt mål

Kunden ska få en komplett, sammanhängande tidslinje som kan användas direkt — inte en samling isolerade dataposter. Värdet ligger i kombinationen av:

1. kuraterad tidslinje
2. strukturerade relationer
3. källor och evidens
4. enkel interaktiv navigering

## Status

Detta repository är huvudprojektet. `TechTimeline-Demo` används inte som separat produkt. Vidare utveckling ska ske här.