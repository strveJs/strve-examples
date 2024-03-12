import { defineComponent } from 'strve-js';

const NestedComponents = () => {
  const subComponent = defineComponent(({ setData }) => {
    let count = 0;

    function add() {
      setData(() => {
        count++;
      });
    }
    return () => <h2 onClick={add}>{count}</h2>;
  });

  return defineComponent(() => {
    return () => (
      <fragment>
        <h1>nestedComponents</h1>
        <component $is={subComponent} />
      </fragment>
    );
  });
};

export default NestedComponents;
