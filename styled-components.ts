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

type FontSize = keyof Theme['fontSize'];
type Color = keyof Theme['color'];

// use case:
interface SelectStyleProps {
  color: Color;
  fontSize: FontSize;
}

const StyledSelect = styled.select<SelectStyleProps>`
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
  color: ${({ color }) => theme.color[color]};
`;
