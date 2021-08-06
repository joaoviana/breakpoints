import { css, FlattenSimpleInterpolation } from 'styled-components';
import { CSSProperties } from './types/css-properties';

// TODO: move these types to appropriate file
type CSSPropUnits = 'px' | 'rem' | 'em' | '%' | 'vw' | 'vh';

type CSSMediaQueries = 'max-width' | 'min-width' | 'max-height' | 'min-height';

type Breakpoints = (
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
