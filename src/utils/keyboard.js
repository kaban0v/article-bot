import { BUTTON_LABEL, BUTTON_COMMAND } from '../constants/messages.js';

export const getMainKeyboard = () =>
  JSON.stringify({
    one_time: false,
    buttons: [
      [
        {
          action: {
            type: 'text',
            label: BUTTON_LABEL,
            payload: JSON.stringify({ command: BUTTON_COMMAND })
          },
          color: 'primary'
        }
      ]
    ]
  });
