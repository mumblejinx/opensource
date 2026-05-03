const BASE = import.meta.env.BASE_URL;

export interface ArtworkFile {
  label: string;
  filename: string;
  type: 'pdf' | 'jpg' | 'zip' | 'png';
  preview?: string;
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  descriptionJp: string;
  image: string;
  files: ArtworkFile[];
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'tv-week',
    title: "Turn Off TV Week",
    description: "Anti-television propaganda art. Download for personal use as prints, stickers, or bookmarks.",
    descriptionJp: "テレビ反対のプロパガンダアート。プリント、ステッカー、ブックマークとして個人利用できます。",
    image: `${BASE}tv-week/tv-week.jpg`,
    files: [
      {
        label: "8x10 Print",
        filename: "tv-week-8x10.pdf",
        type: "pdf",
        preview: `${BASE}tv-week/tv-week.jpg`
      },
      {
        label: "All Files (ZIP)",
        filename: "tv-week.zip",
        type: "zip"
      }
    ]
  }
];
