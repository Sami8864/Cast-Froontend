// outside of a Vue file
import { Notify } from 'quasar'

const notify = (message, color = 'primary', icon = false, position = 'top-right', avatar = false) => {
  Notify.create({
    message,
    icon,
    color,
    position,
    avatar,
    actions: [
      { icon: 'cancel', color: 'white', handler: () => { /* ... */ } }
    ],
  });
};
export default notify;