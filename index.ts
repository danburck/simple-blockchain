import * as crypto from 'crypto';

// Transfer funds from one user to another user in one tranaction
class Transaction {
  constructor(
    public amount: number,
    public payer: string,
    public payee: string
  ) {}

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