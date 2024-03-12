import { defineComponent } from 'strve-js';
import router from './router/index';
import './styles/app';

defineComponent(
  {
    mount: '#app',
  },
  () => () => <component $is={router.view()}></component>
);
