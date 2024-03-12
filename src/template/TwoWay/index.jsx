import { defineComponent } from 'strve-js';

const TwoWay = () => {
  return defineComponent(({ setData }) => {
    let value = '';
    function useInput(e) {
      setData(() => {
        value = e.target.value;
      });
    }

    return () => (
      <fragment>
        <input onInput={useInput} value={value}></input>
        <p>{value}</p>
      </fragment>
    );
  });
};

export default TwoWay;
