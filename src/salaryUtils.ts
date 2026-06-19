/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SalaryGroup, TaxBreakdown } from "./types";
import { BASE_SALARY_SCALE, DEFAULT_MIN_44 } from "./salaryData";

/**
 * Generates the dynamically scaled salary scale table based on a new minimum salary (which overrides Group I, 44h).
 */
export function generateScaledScale(newMin44: number): SalaryGroup[] {
  const factor = newMin44 / DEFAULT_MIN_44;
  return BASE_SALARY_SCALE.map((group) => {
    return {
      ...group,
      despues44: Math.round(group.despues44 * factor),
      despues40: Math.round(group.despues40 * factor),
    };
  });
}

/**
 * Calculates the net salary and tax details based on the total salary (base + extras) according to the Cuban tax system rules:
 * 1. 5% social security deduction on total salary.
 * 2. Deduct 3260 CUP (minimum tax-exempt baseline) from the post-5% result.
 * 3. On the taxable balance:
 *    - If balance > 9310 CUP, apply 5% personal income tax rate.
 *    - If balance <= 9310 CUP, apply 3% personal income tax rate.
 * 4. Deduct the personal income tax from the post-5% amount to get the final net take-home salary.
 */
export function calculateTaxes(totalAmount: number): TaxBreakdown {
  const discount5 = totalAmount * 0.05;
  const after5Percent = totalAmount - discount5;
  
  // If the nominal salary before taxes is <= 3260, there is no personal income tax (0%), only 5% deduction
  if (totalAmount <= 3260) {
    return {
      totalSalaryPlusExtras: totalAmount,
      discount5,
      after5Percent,
      minus3260: 0,
      taxRate: 0,
      taxAmount: 0,
      finalNet: after5Percent,
    };
  }

  const minus3260 = after5Percent - 3260;
  const taxableIncome = Math.max(0, minus3260);
  
  // Tax rate trigger is based on whether taxable base exceeds 9510 CUP
  const taxRate = taxableIncome > 9510 ? 0.05 : 0.03;
  const taxAmount = taxableIncome * taxRate;
  const finalNet = after5Percent - taxAmount;

  return {
    totalSalaryPlusExtras: totalAmount,
    discount5,
    after5Percent,
    minus3260: taxableIncome, // show the actual taxable base (0 if negative)
    taxRate,
    taxAmount,
    finalNet,
  };
}
