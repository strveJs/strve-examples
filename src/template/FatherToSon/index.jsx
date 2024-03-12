import { defineComponent } from 'strve-js';

const Son = () => {
  return defineComponent(({ setData, content }) => {
    const props = {
      list: [],
    };

    content.getList = function (val) {
      setData(() => {
        props.list = val;
      });
    };

    return () => (
      <fragment>
        <ul>
          {props.list.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      </fragment>
    );
  });
};

const Father = () => {
  return defineComponent(() => {
    const list = [
      {
        id: new Date().getTime(),
      },
    ];

    const son = Son();
    son.getList(list);

    function add() {
      list.unshift({
        id: new Date().getTime(),
      });
      son.getList(list);
    }

    return () => (
      <fragment>
        <button onClick={add}>add</button>
        <component $is={son} />
      </fragment>
    );
  });
};

export default Father;
