import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateFee, toSafeJsonInteger } from '../packages/payment-core/money.js';
import { PaymentStatus as S, transitionPayment } from '../packages/payment-core/state-machine.js';

 test('calculates fees using integer units without floating point', () => {
  assert.equal(calculateFee({ amount: 10_000n, basisPoints: 100 }), 100n);
  assert.equal(calculateFee({ amount: 1n, basisPoints: 1 }), 0n);
  assert.equal(calculateFee({ amount: 10n, basisPoints: 100, fixedFee: 2n, minFee: 5n }), 5n);
  assert.equal(calculateFee({ amount: 10_000n, basisPoints: 2_000, maxFee: 50n }), 50n);
});

test('rejects invalid money configuration', () => {
  assert.throws(() => calculateFee({ amount: 1, basisPoints: 100 }), /bigint/);
  assert.throws(() => calculateFee({ amount: 1n, basisPoints: 10_001 }), /basisPoints/);
  assert.throws(() => calculateFee({ amount: 1n, basisPoints: 1, minFee: 2n, maxFee: 1n }), /minFee/);
});

test('serializes large integer amounts as strings', () => {
  assert.equal(toSafeJsonInteger(12n), 12);
  assert.equal(toSafeJsonInteger(9_007_199_254_740_992n), '9007199254740992');
});

test('payment completion requires explicit provider verification', () => {
  const pending = { id: 'local-ref', status: S.PENDING };
  assert.equal(transitionPayment(pending, S.APPROVED).status, S.APPROVED);
  assert.throws(() => transitionPayment({ ...pending, status: S.APPROVED }, S.COMPLETED), /server-side/);
  assert.equal(transitionPayment({ ...pending, status: S.APPROVED }, S.COMPLETED, { verifiedByProvider: true }).status, S.COMPLETED);
  assert.throws(() => transitionPayment({ ...pending, status: S.FAILED }, S.COMPLETED, { verifiedByProvider: true }), /Invalid/);
});
