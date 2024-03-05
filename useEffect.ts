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
