const MAX_SAFE_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);

function asNonNegativeBigInt(value, name) {
  if (typeof value !== 'bigint' || value < 0n) {
    throw new TypeError(`${name} must be a non-negative bigint`);
  }
  return value;
}

/** Calculate a percentage fee with integer basis points (10_000 = 100%). */
export function calculateFee({ amount, basisPoints, fixedFee = 0n, minFee = 0n, maxFee = null }) {
  asNonNegativeBigInt(amount, 'amount');
  asNonNegativeBigInt(fixedFee, 'fixedFee');
  asNonNegativeBigInt(minFee, 'minFee');
  if (!Number.isSafeInteger(basisPoints) || basisPoints < 0 || basisPoints > 10_000) {
    throw new RangeError('basisPoints must be an integer from 0 to 10000');
  }
  if (maxFee !== null) asNonNegativeBigInt(maxFee, 'maxFee');
  if (maxFee !== null && minFee > maxFee) throw new RangeError('minFee cannot exceed maxFee');

  let fee = (amount * BigInt(basisPoints)) / 10_000n + fixedFee;
  if (fee < minFee) fee = minFee;
  if (maxFee !== null && fee > maxFee) fee = maxFee;
  return fee;
}

/** Serialize integer units without converting through floating point. */
export function toSafeJsonInteger(value) {
  asNonNegativeBigInt(value, 'value');
  if (value > MAX_SAFE_BIGINT) return value.toString();
  return Number(value);
}
