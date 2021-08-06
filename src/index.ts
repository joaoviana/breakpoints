import { css, FlattenSimpleInterpolation } from 'styled-components';
import type { CSSMediaQueries } from './types/css-media-queries';
import type { CSSPropUnits } from './types/css-prop-units';
import type { CSSProperties } from './types/css-properties';

export type Breakpoints = (
  rule: keyof CSSProperties,
  unit: CSSPropUnits,
  values: Record<number, number | string>,
  mediaQueryType?: CSSMediaQueries,
  important?: boolean
) => FlattenSimpleInterpolation;

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