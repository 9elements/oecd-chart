// @ts-check

/**
 * @typedef {{
 * type: 'point';
 * seriesCode: string;
 * categoryCode: string;
 * label: string;
 * showLabelInline?: boolean;
 * color?: string;
 * }} PointAnnotation
 */

/**
 * @typedef {{
 * type: 'band';
 * fromCategoryCode: string;
 * toCategoryCode: string;
 * label: string;
 * showLabelInline: boolean;
 * color?: string;
 * }} BandAnnotation
 */

/**
 * @typedef { BandAnnotation & {
 * from: number;
 * to: number;
 * index: number;
 * referenceSymbol: string;
 * }} PositionedBandAnnotation
*/

/**
 * @typedef { PointAnnotation & {
 * x: number;
 * y: number;
 * xAxis: 0;
 * yAxis: 0;
 * index: number;
 * referenceSymbol: string;
 * }} PositionedPointAnnotation
 */

/**
 * @typedef {BandAnnotation | PointAnnotation } Annotation
 */

/**
 * @typedef { PositionedBandAnnotation | PositionedPointAnnotation } PositionedAnnotation
 */

// Empty export so TypeScript recognizes the file as a module
export {};
