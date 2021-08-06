## Breakpoints util for Styled Components

[NPM](https://www.npmjs.com/package/sc-breakpoints)

[Sandbox example](https://codesandbox.io/s/react-typescript-styled-components-forked-doz0r?file=/src/index.tsx)

A util for setting breakpoints in your Styled Components (built with TypeScript).

## Install

`npm i sc-breakpoints`
`yarn add sc-breakpoints`

## Example of usage

```tsx
const Heading = styled.h1`
  text-align: center;
  color: white;
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
  ${breakpoints('font-size', 'px', {
    600: 50,
    500: 40,
    400: 20,
    300: 10,
    200: 5,
  })}
  ${breakpoints('width', 'vw', {
    1600: 80,
    1400: 70,
    1280: 50,
    992: 40,
    768: 30,
  })};
`;
```
