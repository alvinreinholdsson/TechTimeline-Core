# TechTimeline 1.0 — product specification

## Product definition
TechTimeline is an interactive year-by-year timeline of inventions and technologies. The primary experience is the timeline itself. When a user opens an invention, TechTimeline shows which earlier inventions, scientific knowledge, materials, processes and enabling technologies made it possible, with sources attached to important claims and relations.

## Primary audience
- Students and teachers
- Universities and higher education
- Researchers and science/technology historians
- Educational publishers
- Museums and science centres

## Main user flow
1. Open the timeline.
2. Search or navigate to an invention.
3. Open the invention card.
4. Read a concise description and date.
5. Select **What was needed before?**.
6. Inspect predecessor/enabling relations.
7. Open a relation to see rationale, relation type, evidence level and sources.
8. Follow a predecessor to continue backwards through the technology tree.
9. Return to the timeline without losing the current position.

## Main product modes
### Timeline
The default view. Year is the main axis. Users can search, filter by category/type, jump to a year, and navigate the full dataset.

### Invention detail
Shows name, date/date range, short description, category, major context and the action **What was needed before?**.

### Dependency view
Shows earlier nodes grouped by relation type. The graph must distinguish technical necessity from enabling technology and historical influence.

### Research view
Adds source, claim, relation type, confidence/evidence status, date precision and alternative interpretations where available.

### Compare
Optional secondary feature for comparing two inventions or technology paths. It must never obscure the main timeline.

## Node types
- invention
- technology
- component
- material
- process
- scientific_knowledge
- tool
- capability
- energy_source
- natural_resource

## Relation types
- requires — a technical dependency that is necessary for the stated implementation
- enables — a technology/process/knowledge that materially made development practical
- scientific_foundation — scientific knowledge supporting the invention
- material_dependency — a material required by the implementation
- process_dependency — a manufacturing/process dependency
- tool_dependency — a tool or manufacturing capability required
- influence — historical influence without claiming strict technical necessity
- alternative_path — an alternative route to the same capability

## Evidence model
Every important relation should have:
- rationale: concise explanation of why the relation exists
- source_ids: one or more supporting sources
- evidence_status: verified / partial / needs_review
- confidence: high / medium / low
- reviewed_at: optional timestamp

A source supporting an invention date does not automatically prove a dependency relation. Relation evidence must be assessed separately.

## Date model
Dates must include precision:
- exact_year
- year_range
- approximate_period
- century
- before/after markers when necessary

Do not present approximate dates as exact dates.

## Timeline interaction requirements
- Responsive on desktop/tablet/mobile
- Horizontal navigation without forcing users to zoom excessively
- Search always accessible
- Filter by category/type
- Jump to year
- Selecting a timeline item opens detail without losing the timeline context
- Back navigation returns to the prior timeline position

## Trust and research requirements
- Original short descriptions written for TechTimeline
- Clear source attribution
- No claim of complete verification until the verification queue is cleared
- Conflicting/uncertain historical interpretations must remain visible rather than silently collapsed

## Commercial product promise
A customer should receive a ready-to-use, coherent timeline dataset and interface rather than a collection of disconnected pages. The product value is the combination of:
1. curated timeline
2. structured relationships
3. evidence/provenance
4. simple exploration UX

## Product boundary
The product is not primarily a "build a smartphone from nature" simulator. **From Nature** is a secondary exploration path that extends the dependency graph toward materials, energy, processes and natural resources when the data supports it.
