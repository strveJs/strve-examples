import { defineComponent } from 'strve-js';
import './index.less';

const BlackWhiteGum = () => {
  return defineComponent(({ setData }) => {
    const data = {
      gridSize: 6400,
      grid: [],
    };

    function generateGrid() {
      setData(() => {
        for (let i = 0; i < data.gridSize; i++) {
          data.grid.push({
            color: getRandomColor(),
            id: new Date().getTime(),
          });
        }
      });
    }

    function getRandomColor() {
      const isBlack = Math.random() >= 0.5;
      return isBlack ? 'black' : 'white';
    }

    function update() {
      setData(() => {
        for (let i = 0; i < data.grid.length; i += 10) {
          data.grid[i].color = getRandomColor();
        }

        data.grid = data.grid.slice();
      });
    }

    function startTimer() {
      setInterval(update, 5000);
    }

    generateGrid();
    startTimer();

    return () => (
      <div class='grid'>
        {data.grid.map((item) => (
          <div key={item.id} class='grid-item' style={`background-color:${item.color}`}></div>
        ))}
      </div>
    );
  });
};

export default BlackWhiteGum;
