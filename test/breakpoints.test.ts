import { breakpoints } from '../src';

describe('breakpoints', () => {
  it('works', () => {
    expect(
      breakpoints('width', 'vw', [
        { 1600: 40 },
        { 1400: 40 },
        { 1400: 40 },
        { 1280: 60 },
        { 992: 60 },
        { 768: 80 },
      ])
    ).toStrictEqual([
      '\n' +
        '    @media screen and (max-width: 1600px) {\n' +
        '      width: 40vw ;\n' +
        '    }\n' +
        '    \n' +
        '    @media screen and (max-width: 1400px) {\n' +
        '      width: 40vw ;\n' +
        '    }\n' +
        '    \n' +
        '    @media screen and (max-width: 1400px) {\n' +
        '      width: 40vw ;\n' +
        '    }\n' +
        '    \n' +
        '    @media screen and (max-width: 1280px) {\n' +
        '      width: 60vw ;\n' +
        '    }\n' +
        '    \n' +
        '    @media screen and (max-width: 992px) {\n' +
        '      width: 60vw ;\n' +
        '    }\n' +
        '    \n' +
        '    @media screen and (max-width: 768px) {\n' +
        '      width: 80vw ;\n' +
        '    }\n' +
        '    ',
    ]);
  });
});
