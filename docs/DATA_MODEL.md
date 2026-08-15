# Data Model

## Node

```json
{
  "id": "smartphone",
  "name": "Smartphone",
  "year": 2007,
  "date_type": "documented",
  "category": "communication",
  "description": "...",
  "materials": [],
  "tools": [],
  "processes": [],
  "energy": [],
  "knowledge": [],
  "evidence_status": "supported",
  "source_ids": [],
  "confidence": "medium"
}
```

## Relation

```json
{
  "id": "rel_ic_transistor",
  "from_id": "transistor",
  "to_id": "integrated_circuit",
  "relation_type": "technical_prerequisite",
  "dependency_strength": "strong",
  "rationale": "...",
  "source_ids": [],
  "evidence_status": "supported"
}
```

## Claim

Claims are the smallest evidence-bearing units.

```json
{
  "id": "claim_123",
  "node_id": "transistor",
  "field": "year",
  "value": 1947,
  "source_ids": [],
  "evidence_status": "verified",
  "notes": "..."
}
```

## Recipe

```json
{
  "node_id": "example",
  "difficulty": "4/5",
  "materials": [],
  "tools": [],
  "energy": [],
  "actions": [],
  "output": "...",
  "alternatives": []
}
```

## Graph rules

- No self-relations.
- No duplicate relation IDs.
- Technical prerequisite edges should form a directed acyclic graph for a selected target path.
- Historical influence edges may form cycles and must not be used as hard build prerequisites.
- A build path must never silently cross from `historical_influence` to `technical_prerequisite`.
