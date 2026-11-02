# CFSL Case Forwarding Checklist feature patch

## Included
- `src/app/services/case-forwarding-checklist/page.tsx`: new checklist route and ZIP download UI.
- `src/data/site-content.ts`: adds Services dropdown entries for Services Overview and Case Forwarding Checklist.
- `src/app/globals.css`: your supplied CSS preserved, with the checklist styles appended.
- `public/documents/case-forwarding/`: the four demo Word files extracted from your ZIP and given URL-safe filenames.

## Apply
1. Copy these files into the matching paths in your Next.js project. Merge/replace the supplied `site-content.ts` and `globals.css` with these patched versions (they are based on the versions you uploaded).
2. Install JSZip: `npm install jszip` (or `pnpm add jszip` / `yarn add jszip`).
3. Restart the Next.js development server. Open `/services/case-forwarding-checklist`.

## Current behavior
- Documents are listed as demo items and are initially unchecked.
- Select individual files or use Select all.
- Download Selected creates a ZIP containing the selected DOCX files and a text checklist.
- The category selector currently contains only General case forwarding. The supplied demo files do not establish discipline-specific requirements, so no unsupported case-specific mappings are invented. Add confirmed categories and their document mappings in the `caseTypes`/`documents` configuration when ready.

## Note
This patch does not include `package.json` because it was not supplied; install JSZip in your existing project as described above.
