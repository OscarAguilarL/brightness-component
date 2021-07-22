import '../css/BrightnessInput.css';
import '../css/Fonts.css';

const wrapper = document.querySelector('.wrapper');
const body = document.body;
let brightInput;

const BrightnessInput = () => {
  const html = `
    <form>
    <i class="icon-sun"></i>
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
  brightInput.addEventListener('input', () => {
    body.style.backgroundColor = `hsl(248, 22%, ${brightInput.value}%)`;
  });
};

const init = () => {
  BrightnessInput();
  events();
};

export { init };
