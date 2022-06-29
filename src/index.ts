import { API } from 'homebridge';

import { ACCESSORY_NAME } from './settings';
import { SwitchAccessory } from './switchAccessory';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(ACCESSORY_NAME, SwitchAccessory);
};
