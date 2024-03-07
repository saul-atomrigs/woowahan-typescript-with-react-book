# woowahan-typescript-with-react-book
- [With Styled-Components](https://github.com/saul-atomrigs/woowahan-typescript-with-react-book?tab=readme-ov-file#with-styled-components)
- [useState hook](https://github.com/saul-atomrigs/woowahan-typescript-with-react-book?tab=readme-ov-file#usestate-hook)
- [useEffect hook](https://github.com/saul-atomrigs/woowahan-typescript-with-react-book/edit/main/README.md#useeffect-hook)

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
// Type Definition
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> =
  S | ((prevState: S) => S); // 상태 타입 S 또는 이전 상태값을 받아 새로운 상태를 반환하는 함수 (prevState: S => S)

// Definition
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

## `useEffect` hook
```ts
// types
type EffectCallback = () => void | Destructor; // Destructor는 컴포넌트 언마운트 될 때 실행되는 함수('클린업함수')이다
type DependencyList = ReadonlyArray<any>;

// Definition
function useEffect(
  effect: EffectCallback, // () => void | Destructor;
  deps?: DependencyList // ReadonlyArray<any>;
): void; // Promise를 반환하지 않으므로 useEffect의 콜백함수에는 비동기함수가 들어갈 수 없다

// use case
const objectA = {
  property1: ''
}
useEffect(() => {
  // ...
}, [objectA]) ❌ deps는 얉은 비교로 판단되기 때문에 실제 객체값이 바뀌지 않았더라도 객체의 참조값이 바뀌면 실행됨
}, [objectA.property1]) ✅ 원치않는 렌더링을 방지하기 위해서 이렇게 실제로 사용하는 값을 deps에서 사용해야 한다
```
