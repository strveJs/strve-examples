import { defineComponent } from 'strve-js';

const Son = () => {
  return defineComponent(({ setData, content }) => {
    let slotHtm;
    content.slot = function (slots) {
      setData(() => {
        slotHtm = slots;
      });
    };

    return () => (
      <fragment>
        <h2>Son</h2>
        <fragment>{slotHtm}</fragment>
      </fragment>
    );
  });
};

const Slot = () => {
  const son = Son();

  return defineComponent(() => {
    let count = 3;
    let slots;

    // slots
    function add() {
      count++;
      son.slot(slots());
    }
    slots = () => (
      <fragment>
        <p>{count}</p>
        <button onClick={add}>add</button>
        <h3>Hello! slots</h3>
      </fragment>
    );
    son.slot(slots());

    return () => (
      <fragment>
        <h1>Slot</h1>
        <component $is={son} />
      </fragment>
    );
  });
};

export default Slot;
