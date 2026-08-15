# TechTimeline data model

## Node
A timeline item represents an invention, technology, component, material, process, scientific knowledge, tool, capability, energy source or natural resource.

```json
{
  "id": "transistor",
  "name": "Transistor",
  "node_type": "invention",
  "date": {"type":"exact_year","year":1947},
  "description": "Short original description",
  "categories": ["electronics"],
  "materials": [],
  "tools": [],
  "processes": [],
  "energy": [],
  "knowledge": [],
  "evidence_status": "partial",
  "source_ids": []
}
```

## Relation
Relations are first-class evidence-bearing records.

```json
{
  "id": "rel_ic_transistor",
  "from_id": "integrated_circuit",
  "to_id": "transistor",
  "relation_type": "requires",
  "rationale": "Why this relation is claimed",
  "confidence": "high",
  "evidence_status": "verified",
  "source_ids": ["source-1"]
}
```

## Relation types

- `requires` — technical necessity for the stated implementation
- `enables` — materially enabled/practically supported development without claiming strict necessity
- `scientific_foundation` — scientific knowledge supporting the invention
- `material_dependency` — material required by the implementation
- `process_dependency` — manufacturing/process dependency
- `tool_dependency` — tool or capability dependency
- `influence` — historical influence without claiming strict technical necessity
- `alternative_path` — alternative route to the same capability

## Source

```json
{
  "id": "source-1",
  "title": "Source title",
  "publisher": "Institution",
  "year": 2020,
  "url": "https://...",
  "source_type": "institutional",
  "notes": "What this source supports"
}
```

## Claim
Claims are the smallest evidence-bearing units.

```json
{
  "id": "claim_123",
  "node_id": "transistor",
  "field": "year",
  "statement": "...",
  "source_ids": ["source-1"],
  "evidence_status": "verified",
  "notes": "..."
}
```

## Date precision
Supported date types:
- `exact_year`
- `year_range`
- `approximate_period`
- `century`
- `before`
- `after`

Approximate dates must never be displayed as exact years.

## Graph rules

- No self-relations.
- No duplicate relation IDs.
- Technical dependency edges used for prerequisite traversal should form an acyclic graph for the selected implementation path.
- `influence` may form cycles and must never be silently treated as a hard prerequisite.
- `alternative_path` must not appear as a normal prerequisite.
- A source supporting an invention date does not automatically prove a dependency relation.
