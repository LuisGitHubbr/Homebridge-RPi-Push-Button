import { API } from 'homebridge';

import { ACCESSORY_NAME } from './settings';
import { SwitchAccessory } from './switchAccessory';

export = (api: API) => {
  api.registerPlatform(ACCESSORY_NAME, SwitchAccessory);
};
