// @ts-check
import * as R from 'ramda';
import { createPositionedBandAnnotations } from './createPositionedBandAnnotations';
import { createPositionedPointAnnotations } from './createPositionedPointAnnotations';

/**
 * @param {{
 * data: {
 *   series: {
 *     code: string;
 *     data: { value: string }[]
 *   }[];
 *   categories: { code: string }[];
 *   areCategoriesDates: boolean;
 * };
 * annotations: import('./annotation').Annotation[];
 * categoriesFrequency: {
 *   tryParse: (str: string) => Date | false;
 *   getMiddle: (date: Date, step: number) => Date;
 * } | null;
 * chartType: import('../../constants/chart').chartTypes;
 * }} options
 * @return {{
 * positionedBandAnnotations: import('./annotation').PositionedBandAnnotation[] | null;
 * positionedPointAnnotations: import('./annotation').PositionedPointAnnotation[] | null;
 * }}
 */
export const createPositionedAnnotations = ({
  data,
  annotations,
  categoriesFrequency,
  chartType,
}) => {
  if (data.series.length === 0) {
    return {
      positionedBandAnnotations: [],
      positionedPointAnnotations: [],
    };
  }

  // Add an index so that the numbering of the reference symbols
  // is equal in plot and footer.
  const referencedAnnotations = annotations.filter(
    (annotation) => !annotation.showLabelInline,
  );
  const indexedAnnotations = annotations.map((annotation) => ({
    ...annotation,
    referenceIndex: referencedAnnotations.indexOf(annotation),
  }));
  console.log('indexedAnnotations', indexedAnnotations);

  const groupedAnnotations = R.groupBy(R.prop('type'), indexedAnnotations);
  const { band, point } = groupedAnnotations;

  const positionedBandAnnotations = band
    ? createPositionedBandAnnotations({
        annotations: band,
        categories: data.categories,
        areCategoriesDates: data.areCategoriesDates,
        categoriesFrequency,
      })
    : null;

  const positionedPointAnnotations = point
    ? createPositionedPointAnnotations({
        annotations: point,
        data,
        categoriesFrequency,
        areCategoriesDates: data.areCategoriesDates,
        chartType,
      })
    : null;

  return { positionedBandAnnotations, positionedPointAnnotations };
};
