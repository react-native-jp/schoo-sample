import {
  COLORS,
} from '../constants';
import {
  deepFreeze,
} from '../utils';

const COLORSCHEME = {
  HEADER: {
    BACKGROUND: COLORS.LIGHTGRAY,
    SHADOW: COLORS.GRAY,
    TITLE: COLORS.BLACK,
  },
  SCREEN: COLORS.WHITE,
  BUTTON: COLORS.BLACK,
  LABEL: COLORS.BLACK,
};

deepFreeze(COLORSCHEME);

export default COLORSCHEME;
