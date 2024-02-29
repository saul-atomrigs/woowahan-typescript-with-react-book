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

## `useState` hook
```ts
// Definition
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S); // 상태 타입 S 또는 이전 상태값을 받아 새로운 상태를 반환하는 함수 (prevState: S => S)

function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>]; // useState가 반환하는 튜플 [state, setState]

// use case:
type Member = {
  name: string;
  age: number;
};
const [count, setCount] = useState<Member[]>([]);
```
