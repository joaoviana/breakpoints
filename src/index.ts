import { css, FlattenSimpleInterpolation } from 'styled-components';
import { CSSProperties } from './types/css-properties';

// TODO: move these types to appropriate file
type CSSPropUnits = 'px' | 'rem' | 'em' | '%' | 'vw' | 'vh';

type CSSMediaQueries = 'max-width' | 'min-width' | 'max-height' | 'min-height';

type Breakpoints = (
  rule: keyof CSSProperties,
  unit: CSSPropUnits,
  values: Record<number, number | string>[],
  mediaQueryType?: CSSMediaQueries,
  important?: boolean
) => FlattenSimpleInterpolation;

// TODO: documentation
export const breakpoints: Breakpoints = (
  rule = 'padding',
  unit = 'px',
  values: Record<number, number | string>[],
  mediaQueryType = 'max-width'
) =>
  // FIXME: find a way to fix CSSObject error
  // @ts-expect-error
  css([
    values.reduce((mediaQueries, value) => {
      const [breakpointValue, ruleValue] = Object.entries(value);
      return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${breakpointValue}px) {
      ${rule}: ${ruleValue}${unit};
    }
    `);
    }, ''),
  ]);
