# Project Conventions

## Content Layer

- Components should not import directly from `data/`.
- All CMS-managed content should be accessed through `lib/content`.
- `lib/content` acts as the application's content API and will later switch from static data to Sanity.

## Data Fetching

The default approach is:

- Fetch page-level content in the page component.
- Fetch reusable collections as close as practical to where they are first consumed.
- Avoid prop drilling through more than two component levels when the intermediate components do not use the data.
- If multiple sibling components require the same data, lift the fetch to their nearest common parent.

## Component Responsibilities

- Server components assemble data.
- Presentational components render data.
- Client components handle interaction and local UI state.