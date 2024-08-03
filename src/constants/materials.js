import ChromeSatinRoyalBlue from '../assets/svgs/colors/chrome-satin-royal-blue.svg';
import ChromeSatinOliveGreen from '../assets/svgs/colors/chrome-satin-olive-green.svg';
import ChromeSatinBurntOrange from '../assets/svgs/colors/chrome-satin-burnt-orange.svg';
import ChromeSatinCherryRed from '../assets/svgs/colors/chrome-satin-cherry-red.svg';
import ChromeSatinMidnightBlack from '../assets/svgs/colors/chrome-satin-midnight-black.svg';
import ChromeSatinAluminum from '../assets/svgs/colors/chrome-satin-aluminum.svg';

import ChromeAluminum from '../assets/svgs/colors/chrome-aluminum.svg';
import ChromeMidnightBlack from '../assets/svgs/colors/chrome-midnight-black.svg';
import ChromeCherryRed from '../assets/svgs/colors/chrome-cherry-red.svg';
import ChromeRoyalBlue from '../assets/svgs/colors/chrome-royal-blue.svg';


export const colorsMapping = {
  body: [
    { name: 'Chrome Satin Royal Blue', value: '01 CHROME SATIN ROYAL BLUE', background: ChromeSatinRoyalBlue },
    { name: 'Chrome Satin Olive Green', value: '02 CHROME SATIN OLIVE GREEN', background: ChromeSatinOliveGreen },
    { name: 'Chrome Satin Burnt Orange', value: '03 CHROME SATIN BURNT ORANGE', background: ChromeSatinBurntOrange },
    { name: 'Chrome Satin Cherry Red', value: '04 CHROME SATIN CHERRY RED', background: ChromeSatinCherryRed },
    { name: 'Chrome Satin Midnight Black', value: '05 CHROME SATIN MIDNIGHT BLACK', background: ChromeSatinMidnightBlack },
    { name: 'Chrome Satin Aluminum', value: '06 CHROME SATIN ALUMINUM', background: ChromeSatinAluminum }
  ],
  handles: [
    { name: 'Chrome Aluminum', value: 'Chrome ALUMINIUM', background: ChromeAluminum },
    { name: 'Chrome Midnight Black', value: 'Chrome MIDNIGHT BLACK', background: ChromeMidnightBlack },
    { name: 'Chrome Cherry Red', value: 'Chrome CHERRY RED', background: ChromeCherryRed },
    { name: 'Chrome Royal Blue', value: 'Chrome ROYAL BLUE', background: ChromeRoyalBlue },
    { name: 'Chrome Satin Burnt Orange', value: 'Chrome SATIN BURNT ORANGE', background: ChromeSatinBurntOrange },
    { name: 'Chrome Satin Olive Green', value: 'Chrome SATIN OLIVE GREEN', background: ChromeSatinOliveGreen }
  ],
  corners: [
    { name: 'Chrome Aluminum', value: 'Chrome ALUMINIUM', background: ChromeAluminum },
    { name: 'Chrome Midnight Black', value: 'Chrome MIDNIGHT BLACK', background: ChromeMidnightBlack },
    { name: 'Chrome Cherry Red', value: 'Chrome CHERRY RED', background: ChromeCherryRed },
    { name: 'Chrome Royal Blue', value: 'Chrome ROYAL BLUE', background: ChromeRoyalBlue },
    { name: 'Chrome Satin Burnt Orange', value: 'Chrome SATIN BURNT ORANGE', background: ChromeSatinBurntOrange },
    { name: 'Chrome Satin Olive Green', value: 'Chrome SATIN OLIVE GREEN', background: ChromeSatinOliveGreen }
  ],
  wheels: [
    { name: 'Chrome Aluminum', value: 'Chrome ALUMINIUM', background: ChromeAluminum },
    { name: 'Chrome Midnight Black', value: 'Chrome MIDNIGHT BLACK', background: ChromeMidnightBlack },
    { name: 'Chrome Cherry Red', value: 'Chrome CHERRY RED', background: ChromeCherryRed },
    { name: 'Chrome Royal Blue', value: 'Chrome ROYAL BLUE', background: ChromeRoyalBlue },
    { name: 'Chrome Satin Burnt Orange', value: 'Chrome SATIN BURNT ORANGE', background: ChromeSatinBurntOrange },
    { name: 'Chrome Satin Olive Green', value: 'Chrome SATIN OLIVE GREEN', background: ChromeSatinOliveGreen }
  ]
};

export const partsMapping = {
  body: ['Body_metal_base', 'Body_metal_cover'],
  corners: ['Corners_base', 'Corners_cover'],
  handles: ['Handle_base1', 'Handle_metal-1', 'Handle_telescope-1'],
  wheels: [
    'Wheels_base', 'Wheels_base_cover',
    'Wheels_front_right_base', 'Wheels_front_left_base',
    'Wheels_back_right_base', 'Wheels_back_left_base',
    'Wheels_front_right_center', 'Wheels_front_left_center',
    'Wheels_back_right_center', 'Wheels_back_left_center'
  ]
};

export const cameraMapping = {
  body: ['camera_body', 'camera_body_mobile'],
  corners: ['camera_corners', 'camera_corners_mobile'],
  handles: ['camera_handle', 'camera_handle_mobile'],
  wheels: ['camera_wheels', 'camera_wheels_mobile']
};