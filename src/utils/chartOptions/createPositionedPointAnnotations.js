// @ts-check
import * as R from 'ramda';
import { chartTypes } from '../../constants/chart';

/**
 * @template T
 * @param {T[][]} lists
 * @returns {T[][]}
 */
const zip = (lists) => {
  const length = Math.min(...lists.map((list) => list.length));
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(lists.map((list) => list[i]));
  }
  return result;
};

/**
 * @param {{
 * annotations: (import('./annotation').PointAnnotation & { index: number })[];
 * data: {
 *   series: {
 *     code: string;
 *     data: { value: number }[]
 *   }[];
 *   categories: { code: string }[];
 * };
 * categoriesFrequency: {
 *   tryParse: (str: string) => Date | false;
 * } | null;
 * areCategoriesDates: boolean;
 * chartType: import('../../constants/chart').chartTypes;
 * }} options
 * @returns {import('./annotation').PositionedPointAnnotation[]}
 */
export const createPositionedPointAnnotations = ({
  annotations,
  data,
  categoriesFrequency,
  areCategoriesDates,
  chartType,
}) => {
  const points = R.pluck('data', data.series);
  const zippedPoints = zip(points);
  const maxValuePerIndex = zippedPoints.map((tuple) =>
    Math.max(...R.pluck('value', tuple)),
  );

  const positionedAnnotations = annotations
    .map((annotation) => {
      const categoryIndex = data.categories.findIndex(
        (category) => category.code === annotation.categoryCode,
      );
      if (categoryIndex === -1) return;

      const seriesForAnnotation = data.series.find(
        (series) => series.code == annotation.seriesCode,
      );
      if (!seriesForAnnotation) return;

      const yValue =
        chartType === chartTypes.bar
          ? maxValuePerIndex[categoryIndex]
          : seriesForAnnotation.data[categoryIndex].value;

      const category = data.categories[categoryIndex];
      const timestamp =
        areCategoriesDates && categoriesFrequency
          ? categoriesFrequency.tryParse(category.code)
          : null;
      if (areCategoriesDates && !timestamp) return;

      const xValue =
        areCategoriesDates && timestamp ? timestamp.getTime() : categoryIndex;

      return { ...annotation, x: xValue, y: yValue };
    })
    .filter(R.isNotNil);

  return positionedAnnotations;
};
