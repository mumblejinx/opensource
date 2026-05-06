const BASE = import.meta.env.BASE_URL;

export interface ArtworkFile {
  label: string;
  pdfFilename: string;
  pngFilename: string;
  preview?: string;
}

export interface ArtworkZip {
  label: string;
  filename: string;
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  descriptionJp: string;
  image: string;
  files: ArtworkFile[];
  zips: ArtworkZip[];
}

export const ARTWORKS: Artwork[] = [

 {
    id: 'seattle-stickers',
    title: "Early stickers from Seattle",
    description: `Some of the first stickers I did while starting out in Seattle. 
	Download individual pages or the complete collection. The complete collection is only 
	available for pngs with this collection due to size constraints.`,
    descriptionJp: "14ページのぬりえブック。個別のページまたは全ページをダウンロードできます。",
    image: `${BASE}seattle-stickers/mumblej.jpg`,
    files: [
      {
        label: "Proto MumbleJinx sticker",
        pdfFilename: "mumblej.pdf",
        pngFilename: "mumblej.png",
        preview: `${BASE}seattle-stickers/mumblej.jpg`
      },
      {
        label: "Proto MumbleJinx sticker sheet",
        pdfFilename: "mumblej-sheet.pdf",
        pngFilename: "mumblej-sheet.png",
        preview: `${BASE}seattle-stickers/mumblej-sheet.jpg`
      },
      {
        label: "The Queen Meme",
        pdfFilename: "queenmeme.pdf",
        pngFilename: "queenmeme.png",
        preview: `${BASE}seattle-stickers/queenmeme.jpg`
      },
      {
        label: "The Queen Meme clean",
        pdfFilename: "queenmeme-clean.pdf",
        pngFilename: "queenmeme-clean.png",
        preview: `${BASE}seattle-stickers/queenmeme-clean.jpg`
      },
      {
        label: "The Queen Meme sheet",
        pdfFilename: "queenmeme-sheet.pdf",
        pngFilename: "queenmeme-sheet.png",
        preview: `${BASE}seattle-stickers/queenmeme-sheet.jpg`
      },
      {
        label: "Chase the Queen",
        pdfFilename: "chasetq.pdf",
        pngFilename: "chasetq.png",
        preview: `${BASE}seattle-stickers/chasetq.jpg`
      },
      {
        label: "Chase the Queen sheet",
        pdfFilename: "chasetq-sheet.pdf",
        pngFilename: "chasetq-sheet.png",
        preview: `${BASE}seattle-stickers/chasetq-sheet.jpg`
      },
      {
        label: "Proto Yume Sueno",
        pdfFilename: "mumble.pdf",
        pngFilename: "mumble.png",
        preview: `${BASE}seattle-stickers/mumble.jpg`
      },
      {
        label: "Proto Yume Sueno sheet",
        pdfFilename: "mumble-sheet.pdf",
        pngFilename: "mumble-sheet.png",
        preview: `${BASE}seattle-stickers/mumble-sheet.jpg`
      },
      {
        label: "Honey Dripper",
        pdfFilename: "queenmb.pdf",
        pngFilename: "queenmb.png",
        preview: `${BASE}seattle-stickers/queenmb.jpg`
      },
      {
        label: "Honey Dripper sheet",
        pdfFilename: "queenmb-sheet.pdf",
        pngFilename: "queenmb-sheet.png",
        preview: `${BASE}seattle-stickers/queenmb-sheet.jpg`
      },
      {
        label: "The Problem with Sue Storm",
        pdfFilename: "invisible.pdf",
        pngFilename: "invisible.png",
        preview: `${BASE}seattle-stickers/invisible.jpg`
      },
      {
        label: "Wild Style",
        pdfFilename: "wildstyle.pdf",
        pngFilename: "wildstyle.png",
        preview: `${BASE}seattle-stickers/wildstyle.jpg`
      },
      {
        label: "Always Wanted to B-Boy sheet",
        pdfFilename: "bboy-sheet.pdf",
        pngFilename: "bboy-sheet.png",
        preview: `${BASE}seattle-stickers/bboy-sheet.jpg`
      }
    ],
    zips: [
      { label: "PNG Bundle", filename: "seattle-stickers-pngs.zip" }
    ]
  },

  {
    id: 'tv-week',
    title: "Turn Off TV Week",
    description: "Anti-television propaganda art. Available as a standard print, a clean version, a color version, and sticker sheets.",
    descriptionJp: "テレビ反対のプロパガンダアート。通常版、クリーン版、カラー版、ステッカーシートとして個人利用できます。",
    image: `${BASE}tv-week/tv-week.jpg`,
    files: [
      {
        label: "Standard Print",
        pdfFilename: "tv-week.pdf",
        pngFilename: "tv-week.png",
        preview: `${BASE}tv-week/tv-week.jpg`
      },
      {
        label: "Sticker Sheet",
        pdfFilename: "tv-week-sheet.pdf",
        pngFilename: "tv-week-sheet.png",
        preview: `${BASE}tv-week/tv-week-sheet.jpg`
      },
      {
        label: "Clean Version",
        pdfFilename: "tv-clean.pdf",
        pngFilename: "tv-clean.png",
        preview: `${BASE}tv-week/tv-clean.jpg`
      },
      {
        label: "Color Version",
        pdfFilename: "tv_color.pdf",
        pngFilename: "tv_color.png",
        preview: `${BASE}tv-week/tv_color.jpg`
      },
      {
        label: "Color Sticker Sheet",
        pdfFilename: "tv_color-sheet.pdf",
        pngFilename: "tv_color-sheet.png",
        preview: `${BASE}tv-week/tv_color-sheet.jpg`
      }
    ],
    zips: [
      { label: "PDF Bundle", filename: "tv-week-pdfs.zip" },
      { label: "PNG Bundle", filename: "tv-week-pngs.zip" }
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
        pdfFilename: "manic-art.pdf",
        pngFilename: "manic-art.png",
        preview: `${BASE}manic-art/manic-art.jpg`
      },
      {
        label: "Sticker Sheet",
        pdfFilename: "manic-art-sheet.pdf",
        pngFilename: "manic-art-sheet.png",
        preview: `${BASE}manic-art/manic-art-sheet.jpg`
      },
      {
        label: "Second Print",
        pdfFilename: "manic-art02.pdf",
        pngFilename: "manic-art02.png",
        preview: `${BASE}manic-art/manic-art02.jpg`
      },
      {
        label: "Second Print Clean",
        pdfFilename: "manic-art02-clean.pdf",
        pngFilename: "manic-art02-clean.png",
        preview: `${BASE}manic-art/manic-art02-clean.jpg`
      }
    ],
    zips: [
      { label: "PDF Bundle", filename: "manic-art-pdfs.zip" },
      { label: "PNG Bundle", filename: "manic-art-pngs.zip" }
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
        pdfFilename: "outkast.pdf",
        pngFilename: "outkast.png",
        preview: `${BASE}outkast/outkast.jpg`
      },
      {
        label: "Color Version",
        pdfFilename: "outkast-color.pdf",
        pngFilename: "outkast-color.png",
        preview: `${BASE}outkast/outkast-color.jpg`
      },
      {
        label: "Mumble Dark Print",
        pdfFilename: "outkast-mumbledark.pdf",
        pngFilename: "outkast-mumbledark.png",
        preview: `${BASE}outkast/outkast-mumbledark.jpg`
      },
      {
        label: "Mumble Dark Sheet",
        pdfFilename: "outkast-mumbledark-sheet.pdf",
        pngFilename: "outkast-mumbledark-sheet.png",
        preview: `${BASE}outkast/outkast-mumbledark-sheet.jpg`
      },
      {
        label: "Mumble Light Print",
        pdfFilename: "outkast-mumblelight.pdf",
        pngFilename: "outkast-mumblelight.png",
        preview: `${BASE}outkast/outkast-mumblelight.jpg`
      },
      {
        label: "Mumble Light Sheet",
        pdfFilename: "outkast-mumblelight-sheet.pdf",
        pngFilename: "outkast-mumblelight-sheet.png",
        preview: `${BASE}outkast/outkast-mumblelight-sheet.jpg`
      }
    ],
    zips: [
      { label: "PDF Bundle", filename: "outkast-pdfs.zip" },
      { label: "PNG Bundle", filename: "outkast-pngs.zip" }
    ]
  },
  {
    id: 'bookking',
    title: "Bookmark",
    description: "Available as a standard print and a sheet of bookmarks.",
    descriptionJp: "通常版とステッカーシートとして個人利用できます。",
    image: `${BASE}bookking/bookking.jpg`,
    files: [
      {
        label: "Standard Print",
        pdfFilename: "bookking.pdf",
        pngFilename: "bookking.png",
        preview: `${BASE}bookking/bookking.jpg`
      },
      {
        label: "Drawing",
        pdfFilename: "bookking-clean.pdf",
        pngFilename: "bookking-clean.png",
        preview: `${BASE}bookking/bookking-clean.jpg`
      },
      {
        label: "Standard Print Bookmarks",
        pdfFilename: "bookking-sheet.pdf",
        pngFilename: "bookking-sheet.png",
        preview: `${BASE}bookking/bookking-sheet.jpg`
      }

    ],
    zips: [
      { label: "PDF Bundle", filename: "bookking-pdfs.zip" },
      { label: "PNG Bundle", filename: "bookking-pngs.zip" }
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
        pdfFilename: "coloring-1.pdf",
        pngFilename: "coloring-1.png",
        preview: `${BASE}coloring-book/coloring-1.jpg`
      },
      {
        label: "Page 2",
        pdfFilename: "coloring-2.pdf",
        pngFilename: "coloring-2.png",
        preview: `${BASE}coloring-book/coloring-2.jpg`
      },
      {
        label: "Page 3",
        pdfFilename: "coloring-3.pdf",
        pngFilename: "coloring-3.png",
        preview: `${BASE}coloring-book/coloring-3.jpg`
      },
      {
        label: "Page 4",
        pdfFilename: "coloring-4.pdf",
        pngFilename: "coloring-4.png",
        preview: `${BASE}coloring-book/coloring-4.jpg`
      },
      {
        label: "Page 5",
        pdfFilename: "coloring-5.pdf",
        pngFilename: "coloring-5.png",
        preview: `${BASE}coloring-book/coloring-5.jpg`
      },
      {
        label: "Page 6",
        pdfFilename: "coloring-6.pdf",
        pngFilename: "coloring-6.png",
        preview: `${BASE}coloring-book/coloring-6.jpg`
      },
      {
        label: "Page 7",
        pdfFilename: "coloring-7.pdf",
        pngFilename: "coloring-7.png",
        preview: `${BASE}coloring-book/coloring-7.jpg`
      },
      {
        label: "Page 8",
        pdfFilename: "coloring-8.pdf",
        pngFilename: "coloring-8.png",
        preview: `${BASE}coloring-book/coloring-8.jpg`
      },
      {
        label: "Page 9",
        pdfFilename: "coloring-9.pdf",
        pngFilename: "coloring-9.png",
        preview: `${BASE}coloring-book/coloring-9.jpg`
      },
      {
        label: "Page 10",
        pdfFilename: "coloring-10.pdf",
        pngFilename: "coloring-10.png",
        preview: `${BASE}coloring-book/coloring-10.jpg`
      },
      {
        label: "Page 11",
        pdfFilename: "coloring-11.pdf",
        pngFilename: "coloring-11.png",
        preview: `${BASE}coloring-book/coloring-11.jpg`
      },
      {
        label: "Page 12",
        pdfFilename: "coloring-12.pdf",
        pngFilename: "coloring-12.png",
        preview: `${BASE}coloring-book/coloring-12.jpg`
      },
      {
        label: "Page 13",
        pdfFilename: "coloring-13.pdf",
        pngFilename: "coloring-13.png",
        preview: `${BASE}coloring-book/coloring-13.jpg`
      },
      {
        label: "Page 14",
        pdfFilename: "coloring-14.pdf",
        pngFilename: "coloring-14.png",
        preview: `${BASE}coloring-book/coloring-14.jpg`
      }
    ],
    zips: [
      { label: "PDF Bundle", filename: "coloring-pdfs.zip" },
      { label: "PNG Bundle", filename: "coloring-pngs.zip" }
    ]
  }
];
