// @ts-chec

import * as R from 'ramda';

export const normalizeAnnotationCodes = (annotations, parsedData) => {
  const getLowercaseCode = R.compose(R.toLower, R.prop('code'));
  
  /** @param {{ label: string; code: string }} s */
  const getCodeAndLabelLowercase = (s) => [
    R.toLower(s.label),
    R.toLower(s.code),
  ];

  const seriesCodes = new Set(R.map(getLowercaseCode, parsedData.series));
  const seriesCodesByLabel = new Map(
    R.map(getCodeAndLabelLowercase, parsedData.series),
  );
  const categoryCodes = new Set(
    R.map(getLowercaseCode, parsedData.categories),
  );
  const categoryCodesByLabel = new Map(
    R.map(getCodeAndLabelLowercase, parsedData.categories),
  );

  return annotations.map((annotation) => {
    /** @type import('../../utils/chartOptions/annotation').Annotation */
    let annotationWithCodes;

    if (annotation.type === 'point') {
      const { seriesCode, categoryCode, ...restAnnotation } = annotation;

      const rawSeries = seriesCode.toLowerCase().trim();
      const rawCategory = categoryCode.toLowerCase().trim();

      let normalizedSeriesCode;
      let normalizedCategoryCode;

      // Series
      // Is it a series code?
      if (seriesCodes.has(rawSeries)) {
        normalizedSeriesCode = rawSeries;
      } else {
        // Is it a series label? (Or a mapping?)
        const seriesCodeFromLabel = seriesCodesByLabel.get(rawSeries);
        if (seriesCodeFromLabel) {
          normalizedSeriesCode = seriesCodeFromLabel;
        }
      }

      // Code
      // Is it a category code?
      if (categoryCodes.has(rawCategory)) {
        normalizedCategoryCode = rawCategory;
      } else {
        // Is it a category label? (Or a mapping?)
        const categoryCodeFromLabel = categoryCodesByLabel.get(rawCategory);
        if (categoryCodeFromLabel) {
          normalizedCategoryCode = categoryCodeFromLabel;
        }
      }

      /** @type {import('../../utils/chartOptions/annotation').PointAnnotation} */
      annotationWithCodes = {
        ...restAnnotation,
        seriesCode: normalizedSeriesCode,
        categoryCode: normalizedCategoryCode,
      };

    // Band Annotations
    } else if (annotation.type === 'band') {

      const { toCategoryCode, fromCategoryCode, ...restAnnotation } = annotation;

      const rawToCategory = toCategoryCode.toLowerCase();
      const rawFromCategory = fromCategoryCode.toLowerCase();

      let normalizedToCategoryCode, normalizedFromCategoryCode;

      if (categoryCodes.has(rawToCategory)) {
        normalizedToCategoryCode = rawToCategory;
      } else {
        const categoryCodeFromLabel = categoryCodesByLabel.get(rawToCategory);
        if (categoryCodeFromLabel) {
          normalizedToCategoryCode = categoryCodeFromLabel;
        }
      }

      if (categoryCodes.has(rawFromCategory)) {
        normalizedFromCategoryCode = rawFromCategory;
      } else {
        const categoryCodeFromLabel = categoryCodesByLabel.get(rawFromCategory);
        if (categoryCodeFromLabel) {
          normalizedFromCategoryCode = categoryCodeFromLabel;
        }
      }

      annotationWithCodes = {
        ...restAnnotation,
        fromCategoryCode: normalizedFromCategoryCode,
        toCategoryCode: normalizedToCategoryCode
      };
    }

    return annotationWithCodes;
  });
}