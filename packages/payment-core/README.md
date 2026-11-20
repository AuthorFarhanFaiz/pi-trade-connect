# Payment domain arithmetic

All money values in this module are integer units supplied by the caller. It deliberately does not assume Pi's supported decimal precision; that must be verified against current official documentation before production integration. JavaScript `Number` floating-point is not used for financial calculations.

`calculateFee` uses `BigInt` inputs and integer basis points. A fee rounds down to the smallest supplied unit. Configuration validation and merchant-specific persistence remain future work.
