const BASE = import.meta.env.BASE_URL;

// ─── Art (existing — unchanged) ──────────────────────────────────────────────

export type { Artwork, ArtworkFile, ArtworkZip } from './constants';

// ─── Research & Projects (new) ───────────────────────────────────────────────

export interface ContentDownload {
  label: string;
  /** Filename inside the entry's asset folder, e.g. 'modulations.pdf' */
  pdfFilename: string;
}

/**
 * Shared shape for Research and Projects entries.
 * RULE: every entry must have at least one of `liveUrl` or `downloads`.
 * (Enforced by hand / in CONTENT.md, not by the type system.)
 */
export interface ContentEntry {
  id: string;
  title: string;
  description: string;
  descriptionJp?: string;
  /** Card + detail cover image (usually rendered from PDF page 1). */
  image: string;
  /** If present, the detail page shows an "Enter" button linking here. */
  liveUrl?: string;
  /** If present, the detail page shows a downloads section. */
  downloads?: ContentDownload[];
  tags?: string[];
  version?: string;
  /** License line shown on the detail page. */
  license?: string;
  /** Optional disclaimer callout shown on the detail page (VCE, DTG). */
  disclaimer?: string;
}

// re-export BASE for content files that want it
export { BASE };
