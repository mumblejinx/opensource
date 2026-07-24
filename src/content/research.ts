import { ContentEntry } from '../types';

const BASE = import.meta.env.BASE_URL;

export const RESEARCH: ContentEntry[] = [
  {
    id: 'modulations',
    title: 'Modulations',
    description:
      'An investigation into color, music, and time. Every color is a frequency and every note is a frequency — carry a musical note up octave by octave and it becomes light. This follows that mapping across the twelve chromatic pitches, where eleven land in the visible spectrum and the twelfth, the tritone, falls just past the edge of sight. Held as an ongoing investigation, not a finished theory.',
    descriptionJp:
      'すべての色は周波数であり、すべての音も周波数である。ある音をオクターブごとに上げていくと、やがて光になる。',
    image: `${BASE}research/modulations/cover.jpg`,
    liveUrl: `${BASE}research/modulations/`,
    downloads: [{ label: 'Full paper (PDF)', pdfFilename: 'modulations.pdf' }],
    tags: ['color', 'music', 'perception'],
    version: 'v4.3 · 2026',
    license: 'Free to use. Part of Open Source.',
  },
  {
    id: 'open-standard',
    title: 'The Open Standard',
    description:
      'A school of art. A method anyone can run — not a look anyone should copy. A fixed seven-step operation with open slots you fill with your own material: layer inherited sources past the point of recognition until something unattributable surfaces, dilate on it, then feed it back in as new material. The loop is the claim.',
    descriptionJp:
      '誰でも走らせられる方法 — 誰も真似すべきでない「見た目」ではなく。固定された七つの操作と、あなた自身の素材で埋める開かれたスロットからなる。',
    image: `${BASE}research/open-standard/cover.jpg`,
    liveUrl: `${BASE}research/open-standard/`,
    downloads: [
      { label: 'Full text (PDF)', pdfFilename: 'open-standard.pdf' },
      { label: '日本語版 (PDF)', pdfFilename: 'open-standard-ja.pdf' },
    ],
    tags: ['method', 'process', 'art'],
    version: '2026',
    license: 'Free to use. Part of Open Source.',
  },
  {
    id: 'dtg-color-guide',
    title: 'DTG Field Guide',
    description:
      'A field guide to direct-to-garment printing. Direct-to-garment printing puts water-based pigment ink directly into fabric — that one fact generates every rule in this guide, about color, durability, file prep, and the real cost of making things bright.',
    descriptionJp:
      'ダイレクト・トゥ・ガーメント（DTG）プリントのフィールドガイド。',
    image: `${BASE}research/dtg-color-guide/cover.jpg`,
    liveUrl: `${BASE}research/dtg-color-guide/`,
    downloads: [{ label: 'Field guide (PDF)', pdfFilename: 'dtg-field-guide.pdf' }],
    tags: ['printing', 'color', 'guide'],
    version: '2026',
    license: 'Creative Commons CC BY 4.0 — free to use, including commercially, with attribution.',
    disclaimer:
      'This is researched, not tested. I gathered the best information I could find on DTG printing and tried to be careful with it, but I have not been able to verify these results on my own equipment. Your inks, garments, pretreatment, and printer will differ from whatever a given source assumed — so verify anything that costs money against your own setup, and test on scrap before a full run. Corrections are welcome.',
  },
];
