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

// Linked list of Blocks
class Chain {
  public static instance = new Chain();

  chain: Block[];

  constructor() {
    this.chain = [new Block(null, new Transaction(100, 'genesis', 'danburck'))];
  }

  get lastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(transaction: Transaction, senderPublicKey: string, signature: string) {
    const newBlock = new Block
  }

}

class Wallet {

}