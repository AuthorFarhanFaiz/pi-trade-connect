export const PaymentStatus = Object.freeze({
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  REFUND_PENDING: 'REFUND_PENDING',
  REFUNDED: 'REFUNDED',
  DISPUTED: 'DISPUTED',
});

const transitions = new Map([
  [PaymentStatus.PENDING, new Set([PaymentStatus.APPROVED, PaymentStatus.FAILED, PaymentStatus.CANCELLED, PaymentStatus.EXPIRED])],
  [PaymentStatus.APPROVED, new Set([PaymentStatus.COMPLETED, PaymentStatus.FAILED, PaymentStatus.CANCELLED, PaymentStatus.EXPIRED])],
  [PaymentStatus.COMPLETED, new Set([PaymentStatus.REFUND_PENDING, PaymentStatus.DISPUTED])],
  [PaymentStatus.REFUND_PENDING, new Set([PaymentStatus.REFUNDED, PaymentStatus.DISPUTED])],
  [PaymentStatus.DISPUTED, new Set([PaymentStatus.REFUND_PENDING, PaymentStatus.REFUNDED])],
  [PaymentStatus.FAILED, new Set()],
  [PaymentStatus.CANCELLED, new Set()],
  [PaymentStatus.EXPIRED, new Set()],
  [PaymentStatus.REFUNDED, new Set()],
]);

export function canTransition(from, to) {
  return transitions.get(from)?.has(to) ?? false;
}

export function transitionPayment(payment, nextStatus, { verifiedByProvider = false } = {}) {
  if (!payment || typeof payment !== 'object') throw new TypeError('payment is required');
  if (!canTransition(payment.status, nextStatus)) {
    throw new Error(`Invalid payment state transition: ${payment.status} -> ${nextStatus}`);
  }
  if (nextStatus === PaymentStatus.COMPLETED && verifiedByProvider !== true) {
    throw new Error('A payment can only complete after server-side provider verification');
  }
  return { ...payment, status: nextStatus };
}
