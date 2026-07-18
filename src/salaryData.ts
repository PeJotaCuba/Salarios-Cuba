/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SalaryGroup } from "./types";

export const DEFAULT_MIN_44 = 3210;
export const DEFAULT_MIN_40 = 2920;

export const BASE_SALARY_SCALE: SalaryGroup[] = [
  { id: "I", antes44: 2100, antes40: 1910, despues44: 3210, despues40: 2920 },
  { id: "II", antes44: 2200, antes40: 2000, despues44: 3365, despues40: 3060 },
  { id: "III", antes44: 2300, antes40: 2090, despues44: 3515, despues40: 3195 },
  { id: "IV", antes44: 2420, antes40: 2200, despues44: 3700, despues40: 3365 },
  { id: "V", antes44: 2540, antes40: 2310, despues44: 3885, despues40: 3530 },
  { id: "VI", antes44: 2660, antes40: 2415, despues44: 4065, despues40: 3695 },
  { id: "VII", antes44: 2810, antes40: 2555, despues44: 4295, despues40: 3905 },
  { id: "VIII", antes44: 2960, antes40: 2690, despues44: 4525, despues40: 4115 },
  { id: "IX", antes44: 3110, antes40: 2825, despues44: 4755, despues40: 4325 },
  { id: "X", antes44: 3260, antes40: 2965, despues44: 4985, despues40: 4535 },
  { id: "XI", antes44: 3410, antes40: 3100, despues44: 5210, despues40: 4735 },
  { id: "XII", antes44: 3610, antes40: 3280, despues44: 5520, despues40: 5020 },
  { id: "XIII", antes44: 3810, antes40: 3465, despues44: 5825, despues40: 5295 },
  { id: "XIV", antes44: 4010, antes40: 3645, despues44: 6130, despues40: 5575 },
  { id: "XV", antes44: 4210, antes40: 3825, despues44: 6435, despues40: 5850 },
  { id: "XVI", antes44: 4410, antes40: 4010, despues44: 6740, despues40: 6130 },
  { id: "XVII", antes44: 4610, antes40: 4190, despues44: 7045, despues40: 6405 },
  { id: "XVIII", antes44: 4810, antes40: 4375, despues44: 7350, despues40: 6685 },
  { id: "XIX", antes44: 5060, antes40: 4600, despues44: 7735, despues40: 7035 },
  { id: "XX", antes44: 5310, antes40: 4825, despues44: 8115, despues40: 7380 },
  { id: "XXI", antes44: 5560, antes40: 5055, despues44: 8500, despues40: 7730 },
  { id: "XXII", antes44: 5810, antes40: 5285, despues44: 8880, despues40: 8075 },
  { id: "XXIII", antes44: 6060, antes40: 5510, despues44: 9265, despues40: 8425 },
  { id: "XXIV", antes44: 6310, antes40: 5735, despues44: 9645, despues40: 8770 },
  { id: "XXV", antes44: 6610, antes40: 6010, despues44: 10105, despues40: 9190 },
  { id: "XXVI", antes44: 6960, antes40: 6325, despues44: 10640, despues40: 9675 },
  { id: "XXVII", antes44: 7310, antes40: 6645, despues44: 11175, despues40: 10160 },
  { id: "XXVIII", antes44: 7660, antes40: 6965, despues44: 11710, despues40: 10645 },
  { id: "XXIX", antes44: 8010, antes40: 7285, despues44: 12245, despues40: 11135 },
  { id: "XXX", antes44: 8510, antes40: 7735, despues44: 13010, despues40: 11830 },
  { id: "XXXI", antes44: 9010, antes40: 8190, despues44: 13770, despues40: 12520 },
  { id: "XXXII", antes44: 9510, antes40: 8645, despues44: 14535, despues40: 13215 }
];
