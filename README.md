# woowahan-typescript-with-react-book

## With Styled-Components
```ts
const theme = {
  fontSize: {
    default: '16px',
    large: '24px',
    small: '12px',
  },
  color: {
    primary: '#f00',
    secondary: '#0f0',
  },
};

type Theme = typeof theme;
// type Theme = {
//   fontSize: {
//       default: string;
//       large: string;
//       small: string;
//   };
//   color: {
//       primary: string;
//       secondary: string;
//   };
// }

type FontSize = keyof Theme['fontSize']; // 'default' | 'large' | 'small'
type Color = keyof Theme['color']; // 'primary' | 'secondary'

// use case:
interface SelectStyleProps {
  fontSize: FontSize; // 'default' | 'large' | 'small'
  color: Color; // 'primary' | 'secondary'
}

const StyledSelect = styled.select<SelectStyleProps>`
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
  color: ${({ color }) => theme.color[color]};
`;

```
