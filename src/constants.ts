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
    description: "Anti-television propaganda art. Available as a standard print, a clean version, a color version, and sticker sheets.",
    descriptionJp: "テレビ反対のプロパガンダアート。通常版、クリーン版、カラー版、ステッカーシートとして個人利用できます。",
    image: `${BASE}tv-week/tv-week.jpg`,
    files: [
      {
        label: "Standard Print",
        filename: "tv-week.pdf",
        type: "pdf",
        preview: `${BASE}tv-week/tv-week.jpg`
      },
      {
        label: "Sticker Sheet",
        filename: "tv-week-sheet.pdf",
        type: "pdf",
        preview: `${BASE}tv-week/tv-week-sheet.jpg`
      },
      {
        label: "Clean Version",
        filename: "tv-clean.pdf",
        type: "pdf",
        preview: `${BASE}tv-week/tv-clean.jpg`
      },
      {
        label: "Color Version",
        filename: "tv_color.pdf",
        type: "pdf",
        preview: `${BASE}tv-week/tv_color.jpg`
      },
      {
        label: "Color Sticker Sheet",
        filename: "tv_color-sheet.pdf",
        type: "pdf",
        preview: `${BASE}tv-week/tv_color-sheet.jpg`
      },
      {
        label: "All Files (ZIP)",
        filename: "tv-week.zip",
        type: "zip"
      }
    ]
  },
  {
    id: 'manic-art',
    title: "Manic Art",
    description: "Available as a standard print and a sticker sheet.",
    descriptionJp: "通常版とステッカーシートとして個人利用できます。",
    image: `${BASE}manic-art/manic-art.jpg`,
    files: [
      {
        label: "Standard Print",
        filename: "manic-art.pdf",
        type: "pdf",
        preview: `${BASE}manic-art/manic-art.jpg`
      },
      {
        label: "Sticker Sheet",
        filename: "manic-art-sheet.pdf",
        type: "pdf",
        preview: `${BASE}manic-art/manic-art-sheet.jpg`
      },
      {
        label: "All Files (ZIP)",
        filename: "manic-art.zip",
        type: "zip"
      }
    ]
  },
  {
    id: 'outkast',
    title: "Outkast",
    description: "Available in multiple colorways as prints and sticker sheets.",
    descriptionJp: "複数のカラーバリエーションでプリントとステッカーシートとして個人利用できます。",
    image: `${BASE}outkast/outkast.jpg`,
    files: [
      {
        label: "Standard Print",
        filename: "outkast.pdf",
        type: "pdf",
        preview: `${BASE}outkast/outkast.jpg`
      },
      {
        label: "Color Version",
        filename: "outkast-color.pdf",
        type: "pdf",
        preview: `${BASE}outkast/outkast-color.jpg`
      },
      {
        label: "Mumble Dark Print",
        filename: "outkast-mumbledark.pdf",
        type: "pdf",
        preview: `${BASE}outkast/outkast-mumbledark.jpg`
      },
      {
        label: "Mumble Dark Sheet",
        filename: "outkast-mumbledark-sheet.pdf",
        type: "pdf",
        preview: `${BASE}outkast/outkast-mumbledark-sheet.jpg`
      },
      {
        label: "Mumble Light Print",
        filename: "outkast-mumblelight.pdf",
        type: "pdf",
        preview: `${BASE}outkast/outkast-mumblelight.jpg`
      },
      {
        label: "Mumble Light Sheet",
        filename: "outkast-mumblelight-sheet.pdf",
        type: "pdf",
        preview: `${BASE}outkast/outkast-mumblelight-sheet.jpg`
      },
      {
        label: "All Files (ZIP)",
        filename: "outkast.zip",
        type: "zip"
      }
    ]
  },
  {
    id: 'coloring-book',
    title: "Coloring Book",
    description: "A 14-page coloring book. Download individual pages or the complete collection.",
    descriptionJp: "14ページのぬりえブック。個別のページまたは全ページをダウンロードできます。",
    image: `${BASE}coloring-book/coloring.jpg`,
    files: [
      {
        label: "Page 1",
        filename: "coloring-1.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-1.jpg`
      },
      {
        label: "Page 2",
        filename: "coloring-2.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-2.jpg`
      },
      {
        label: "Page 3",
        filename: "coloring-3.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-3.jpg`
      },
      {
        label: "Page 4",
        filename: "coloring-4.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-4.jpg`
      },
      {
        label: "Page 5",
        filename: "coloring-5.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-5.jpg`
      },
      {
        label: "Page 6",
        filename: "coloring-6.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-6.jpg`
      },
      {
        label: "Page 7",
        filename: "coloring-7.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-7.jpg`
      },
      {
        label: "Page 8",
        filename: "coloring-8.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-8.jpg`
      },
      {
        label: "Page 9",
        filename: "coloring-9.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-9.jpg`
      },
      {
        label: "Page 10",
        filename: "coloring-10.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-10.jpg`
      },
      {
        label: "Page 11",
        filename: "coloring-11.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-11.jpg`
      },
      {
        label: "Page 12",
        filename: "coloring-12.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-12.jpg`
      },
      {
        label: "Page 13",
        filename: "coloring-13.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-13.jpg`
      },
      {
        label: "Page 14",
        filename: "coloring-14.pdf",
        type: "pdf",
        preview: `${BASE}coloring-book/coloring-14.jpg`
      },
      {
        label: "All Pages (ZIP)",
        filename: "coloring.zip",
        type: "zip"
      }
    ]
  }
];
