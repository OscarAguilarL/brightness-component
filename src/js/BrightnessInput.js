import '../css/BrightnessInput.css';

const wrapper = document.querySelector('.wrapper');
const body = document.body;
let brightInput;

const BrightnessInput = () => {
  const html = `
    <form>
      <input
        type="range"
        name="brightness"
        id="brightness"
        value="0"
        min="0"
        max="100"
        step="1"
      />
    </form>
  `;

  const div = document.createElement('div');
  div.innerHTML = html;
  wrapper.appendChild(div.firstElementChild);

  brightInput = document.querySelector('#brightness');
};

const events = () => {
  brightInput.addEventListener('input', (event) => {
    body.style.backgroundColor = `hsl(248, 22%, ${brightInput.value}%)`;
  });
};

const init = () => {
  BrightnessInput();
  events();
};

export { init };
