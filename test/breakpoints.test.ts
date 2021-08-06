import { breakpoints } from '../src';

describe('breakpoints', () => {
  it('works', () => {
    expect(
      breakpoints('width', 'vw', {
        1600: 40,
        1400: 40,
        1280: 60,
        992: 60,
        768: 80,
      })
    ).toStrictEqual([
      `
    @media screen and (max-width: 1600px) {
      width: 40vw;
    }
    @media screen and (max-width: 1400px) {
      width: 40vw;
    }
    @media screen and (max-width: 1280px) {
      width: 60vw;
    }
    @media screen and (max-width: 992px) {
      width: 60vw;
    }
    @media screen and (max-width: 768px) {
      width: 80vw;
    }`,
    ]);
  });
});
