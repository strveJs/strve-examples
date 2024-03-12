import { resetView } from 'strve-js';
import { initRouter } from 'strve-router';

import TwoWay from '../template/TwoWay';
import FatherToSon from '../template/FatherToSon';
import SonToFather from '../template/SonToFather';
import Timer from '../template/Timer';
import CircleDrawer from '../template/CircleDrawer';
import NestedComponents from '../template/NestedComponents';
import Store from '../template/Store';
import Slot from '../template/Slot';
import BlackWhiteGum from '../template/BlackWhiteGum';

const router = initRouter(
  [
    {
      path: '/',
      template: TwoWay,
    },
  ],
  resetView
);

export default router;
