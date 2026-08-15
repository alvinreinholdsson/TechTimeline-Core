# TechTimeline Core — Product Architecture

## 1. The core question

The product answers a practical question:

**If I choose a technology, what had to exist before it could be built?**

The answer is a dependency graph, not a simple list of dates.

## 2. Example

Target: `Smartphone`

Possible dependency layers:

`Smartphone`
→ `mobile SoC`
→ `integrated circuit`
→ `transistor`
→ `semiconductor process`
→ `high-purity silicon`
→ `chemical purification`
→ `industrial equipment`
→ `raw materials`

Each edge must expose why it exists and what evidence supports it.

## 3. Relationship types

- `technical_prerequisite` — the target cannot practically be built using the target approach without the prerequisite.
- `enabling_technology` — makes the target substantially easier or more practical, but is not logically mandatory.
- `historical_influence` — influenced development historically.
- `material_input` — a physical material or chemical input.
- `process_input` — a process required to produce another item.
- `tool_input` — a tool or machine required by a recipe.
- `energy_input` — an energy source or energy infrastructure requirement.
- `knowledge_input` — scientific or engineering knowledge.
- `alternative_path` — another route to the same functional goal.

These must never be collapsed into one generic edge.

## 4. User flow

### A. Choose a target
Search or select a technology.

### B. See the build map
The interface shows a layered path from target to prerequisites.

### C. Inspect a node
The node panel shows:
- what it is
- why it is needed
- date or interval
- materials
- tools
- process
- energy
- knowledge
- evidence
- sources

### D. Go backward
A single action moves one level deeper in the dependency graph.

### E. Start from nature
The system follows the graph until it reaches primitive raw materials, basic energy sources, simple processes, and foundational tools.

### F. Compare alternatives
Users can switch between different technical paths and see what changes.

## 5. Evidence model

Evidence is per claim and per edge.

A node can be well sourced while a particular edge remains uncertain.

Evidence statuses:
- `verified`
- `supported`
- `candidate`
- `unverified`
- `disputed`

Every public-facing result should expose uncertainty clearly.

## 6. Build recipes

A build recipe is not the same thing as a historical dependency graph.

A recipe can include:
- materials
- tools
- energy
- steps
- outputs
- hazards/constraints
- alternatives
- difficulty

The UI should keep the historical and practical layers visibly separate.
