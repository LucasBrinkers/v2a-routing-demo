import { Router } from '@vaadin/router';

console.log(import.meta.env.MODE);

const outlet = document.querySelector('#output');
const router = new Router(outlet);

export { router };