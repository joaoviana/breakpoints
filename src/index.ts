import { css, FlattenSimpleInterpolation } from 'styled-components';
import type { CSSMediaQueries } from './types/css-media-queries';
import type { CSSPropUnits } from './types/css-prop-units';
import type { CSSProperties } from './types/css-properties';

export type Breakpoints = (
  rule: keyof CSSProperties,
  unit: CSSPropUnits,
  values: Record<number, number | string>,
  mediaQueryType?: CSSMediaQueries,
) => FlattenSimpleInterpolation;

/**
 * Generate CSS media queries compatible with your Styled Component.
 * @param rule - css rule you're applying: e.g. padding, margin-top
 * @param unit - unit: px, rem, em, vh, %
 * @param values - value: '100' 50 
 * @param mediaQueryType - media query: max-width, min-width
 * @returns 
 */
export const breakpoints: Breakpoints = (
  rule = 'padding',
  unit = 'px',
  values,
  mediaQueryType = 'max-width'
) =>
  css(([
    Object.entries(values).reduce(
      (mediaQueries, [breakpointValue, ruleValue]) =>
        (mediaQueries += `
        @media screen and (${mediaQueryType}: ${breakpointValue}px) {
          ${rule}: ${ruleValue}${unit};
        }`),
      ''
    ),
  ] as unknown) as TemplateStringsArray);

export {CSSMediaQueries, CSSPropUnits, CSSProperties} 