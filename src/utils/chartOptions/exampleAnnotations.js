// @ts-check

/**
 * @type {import("./annotation").Annotation[]}
 */
export const exampleAnnotations = [
  // Point Annotations
  {
    type: 'point',
    seriesCode: 'Hans',
    categoryCode: 'Bananas',
    label: 'Hans / Bananas',
    showLabelInline: false,
  },
  // {
  //   type: 'point',
  //   seriesCode: 'Franz',
  //   categoryCode: 'Apples',
  //   label: 'Franz / Apples',
  //   showLabelInline: false,
  // },
  // {
  //   type: 'point',
  //   seriesCode: 'Gustav Gans',
  //   categoryCode: 'Oranges',
  //   label: 'Drei',
  //   showLabelInline: false,
  // },
  {
    type: 'point',
    seriesCode: 'Hans',
    categoryCode: 'Mango',
    label: 'Gustav Gans / Mango',
    showLabelInline: false,
  },
  {
    type: 'point',
    seriesCode: 'Hans',
    categoryCode: 'Avocado',
    label: 'Gustac Gans / Avocado',
    showLabelInline: false,
  },
  // Ordinal scale (discrete categories)
  {
    type: 'band',
    fromCategoryCode: 'Bananas',
    toCategoryCode: 'Oranges',
    label: 'Banana ↔ Oranges The quick brown fox jumps over the lazy dog.',
    showLabelInline: false,
  },
  // {
  //   type: 'band',
  //   fromCategoryCode: 'Grapes',
  //   toCategoryCode: 'Pineapple',
  //   label:
  //     'Grapes ↔ Pineapple Quand un pingouin prend un goûter, les autres pingouins prennent un goûter, et ça fait beaucoup de goûters pour les pingouins.',
  //   showLabelInline: false,
  // },
  {
    type: 'band',
    fromCategoryCode: 'Avocado',
    toCategoryCode: 'Avocado',
    label:
      'Avocado ↔ Avocado Quand un pingouin prend un goûter, les autres pingouins prennent un goûter, et ça fait beaucoup de goûters pour les pingouins.',
    showLabelInline: false,
  },
  // // Time: yearly
  // {
  //   type: 'band',
  //   fromCategoryCode: '2011',
  //   toCategoryCode: '2012',
  //   label: '2011 ↔ 2012 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // {
  //   type: 'band',
  //   fromCategoryCode: '2021',
  //   toCategoryCode: '2022',
  //   label: '2021 ↔ 2022 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // {
  //   type: 'band',
  //   fromCategoryCode: '2024',
  //   toCategoryCode: '2052',
  //   label: '2024 ↔ 2052 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // // Time: monthly
  // {
  //   type: 'band',
  //   fromCategoryCode: '2010-05',
  //   toCategoryCode: '2010-06',
  //   label: '2010-05 ↔ 2010-06 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // {
  //   type: 'band',
  //   fromCategoryCode: '2020-05',
  //   toCategoryCode: '2020-06',
  //   label: '2020-05 ↔ 2020-06 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // // Time: quarterly
  // {
  //   type: 'band',
  //   fromCategoryCode: '2011-Q2',
  //   toCategoryCode: '2012-Q3',
  //   label: '2011-Q2 ↔ 2012-Q3 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // {
  //   type: 'band',
  //   fromCategoryCode: '2021-Q2',
  //   toCategoryCode: '2022-Q3',
  //   label: '2021-Q2 ↔ 2022-Q3 The quick brown fox jumps over the lazy dog.',
  //   showLabelInline: false,
  // },
  // Time: quinquennial
  /*
  {
    type: 'band',
    fromCategoryCode: '2000',
    toCategoryCode: '2005',
    label:
      '2000 ↔ 2005 The quick brown fox jumps over the lazy dog.',
    showLabelInline: true,
  },
  {
    type: 'band',
    fromCategoryCode: '2015',
    toCategoryCode: '2020',
    label:
      '2015 ↔ 2020 The quick brown fox jumps over the lazy dog.',
    showLabelInline: true,
  },
  */
];
