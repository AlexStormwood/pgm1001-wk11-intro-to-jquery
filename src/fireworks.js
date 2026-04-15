import { Fireworks } from 'https://esm.run/fireworks-js';

let container = document.querySelector('body');

let options = {
  gravity: 1.4,
  opacity: 0.4,
  autoresize: false,
  acceleration: 1.00,
};

let fireworks = new Fireworks(container, options);

fireworks.start();