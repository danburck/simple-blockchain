"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Transfer funds from one user to another user in one tranaction
class Transaction {
    constructor(amount, payer, payee) {
        this.amount = amount;
        this.payer = payer;
        this.payee = payee;
    }
    toString() {
        return JSON.stringify(this);
    }
}
class Block {
}
class Chain {
}
class Wallet {
}
