import { defineComponent } from 'strve-js';

const Son = () => {
  return defineComponent(({ content }) => {
    function send() {
      content.getMsg('Hello!');
    }

    return () => (
      <fragment>
        <button onClick={send}>sendMsg</button>
      </fragment>
    );
  });
};

const Father = () => {
  return defineComponent(({ setData }) => {
    let msg = '';
    const son = Son();

    son.getMsg = function (val) {
      setData(() => {
        msg = val;
      });
    };

    return () => (
      <fragment>
        <component $is={son} />
        <h3>{msg}</h3>
      </fragment>
    );
  });
};

export default Father;
