# TechTimeline Core app

This is the first real product-engine build, not the public demo.

## Current capabilities

- Target technology selection
- Backward dependency traversal
- Typed relationships: `requires`, `enables`, `alternative_support`
- Confidence per relationship
- Per-node explanation and source list
- Search
- "Från naturen" research view
- Explicit separation between technical dependency and historical influence

## Run locally

From the repository root:

```bash
python3 -m http.server 8000 --directory app
```

Then open `http://localhost:8000`.

The app intentionally uses `fetch('data.json')`, so it should be served over HTTP rather than opened as a `file://` URL.
