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

// Container for multiple Transactions, with link to previous block
class Block {
  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts = Date.now()
  ) {}

  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash('SH256');
    hash.update(str).end();
    return hash.digest('hex');
  }

}


class Chain {

}

class Wallet {

}