import { defineComponent } from 'strve-js';
import './index.less';

function clone(circles) {
  return circles.map((c) => ({ ...c }));
}

const CircleDrawer = () => {
  return defineComponent(({ setData }) => {
    const data = {
      history: [[]],
      index: 0,
      circles: [],
      selected: null,
      adjusting: false,
    };

    function onClick({ clientX: x, clientY: y }) {
      if (data.adjusting) {
        data.adjusting = false;
        data.selected = null;
        push();
        return;
      }

      data.selected = [...data.circles].reverse().find(({ cx, cy, r }) => {
        const dx = cx - x;
        const dy = cy - y;
        return Math.sqrt(dx * dx + dy * dy) <= r;
      });

      if (!data.selected) {
        data.circles.push({
          cx: x,
          cy: y,
          r: 50,
        });
        push();
      }
    }

    function push() {
      setData(() => {
        data.history.length = ++data.index;
        data.history.push(clone(data.circles));
      });
    }

    return () => (
      <fragment>
        <svg onClick={onClick}>
          {data.circles.map((circle, index) => (
            <circle key={index} cx={circle.cx} cy={circle.cy} r={circle.r}></circle>
          ))}
        </svg>
      </fragment>
    );
  });
};

export default CircleDrawer;
