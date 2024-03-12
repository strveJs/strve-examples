import { defineComponent } from 'strve-js';
import store from './store.js';

const Son = () => {
  return defineComponent(({ content, setData }) => {
    function send() {
      console.log(store.state.count);
    }

    content.update = function () {
      setData(() => {});
    };

    return () => (
      <fragment>
        <button onClick={send}>send</button>
        <p>{store.state.count}</p>
      </fragment>
    );
  });
};

const Store = () => {
  return defineComponent(({ setData }) => {
    const son = Son();

    function getUserInfo() {
      setData(() => {
        store.dispatch('fetchUser').then(() => {
          console.log(store.state.user); // { name: 'John Doe', age: 30 }
        });
      });
    }

    function add() {
      setData(() => {
        store.commit('increment');
        son.update();
      });
    }

    return () => (
      <fragment>
        <h1 onClick={getUserInfo}>getUserInfo</h1>
        <button onClick={add}>Add</button>
        <h1>{store.state.count}</h1>
        <component $is={son} />
      </fragment>
    );
  });
};

export default Store;
