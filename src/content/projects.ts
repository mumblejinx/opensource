import { ContentEntry } from '../types';

const BASE = import.meta.env.BASE_URL;

export const PROJECTS: ContentEntry[] = [
  {
    id: 'vce',
    title: 'The Volta Confluence Engine',
    description:
      'A conceptual art project: the design for a DJ mixer that needs no electricity — a two-channel phonograph mixer run entirely on human power. Presented as a complete set of plans, drawings, and documentation for a machine that has never been built. The work is the concept and its documentation, not a verified engineering deliverable.',
    descriptionJp:
      '電気を必要としないDJミキサー — 人力で駆動する二チャンネル・フォノグラフ・ミキサーの構想。まだ一度も作られていない機械の、完全な設計図と資料として提示される概念芸術プロジェクト。',
    image: `${BASE}projects/vce/cover.jpg`,
    liveUrl: `${BASE}projects/vce/`,
    tags: ['conceptual', 'design', 'sound'],
    version: '2026',
    license: 'Creative Commons Attribution–NonCommercial (CC BY-NC). Personal and non-profit use.',
    disclaimer:
      'This is presented as a conceptual art project, not scientific blueprints. It was conceived by an artist, not an engineer. It has been documented with discipline — every figure is labelled Confirmed, Calculated, or Estimated — but it has never been built, and the author cannot check the engineering the way a qualified engineer can. Treat the plans as an artist\u2019s honest reasoning offered for scrutiny, not a proven design. It involves high-voltage electronics and precision machining; anyone building any part of it does so at their own risk.',
  },
];
