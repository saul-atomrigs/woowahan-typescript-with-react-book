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
