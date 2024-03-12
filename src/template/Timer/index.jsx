import { defineComponent } from 'strve-js';

const Timer = () => {
  return defineComponent(({ setData }) => {
    const data = {
      duration: 15 * 1000,
      elapsed: 0,
    };

    const lastTime = performance.now();

    function progressRate() {
      return Math.min(data.elapsed / data.duration, 1);
    }

    let handle = null;
    function update() {
      setData(() => {
        data.elapsed = performance.now() - lastTime;
        if (data.elapsed >= data.duration) {
          cancelAnimationFrame(handle);
        } else {
          handle = requestAnimationFrame(update);
        }
      });
    }

    update();

    return () => (
      <fragment>
        <label>
          <span>Elapsed Time:</span>
          <progress value={progressRate()}></progress>
        </label>
        <div>
          <span>{(data.elapsed / 1000).toFixed(1)}</span>
          <span>s</span>
        </div>
      </fragment>
    );
  });
};

export default Timer;
