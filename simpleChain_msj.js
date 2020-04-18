/*

	To use this code:
	1) Run 'node' in terminal
	2) Copy-paste code into terminal (You may want to remove comments before doing so)
	3) Add block by instantiating blockchain, then adding blocks to it:

			// Instantiating new BlockChain
			blockchain = new BlockChain()

			// Need to instantiate new Block when adding to a BlockChain
			blockchain.addBlock(new Block('Whatever goes in here'))

			// To view
			blockchain.chain

*/

// Including crypto-js so that we can get hash values
const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ==============================
|  Class with a constructor for block 			   |
|  ===============================================*/

class Block {
	constructor(data){
		// Add your Block properties
		// Example: this.hash = "";
		this.hash = "",
		this.height = 0,
		this.body = data,
		this.time = 0,
		this.previousBlockHash = ""
	}
}

/* ===== Block Class ==============================
|  Class with a constructor for new blockchain	   |
|  ===============================================*/

class Blockchain{
	constructor(){
		this.chain = []; // Array where blocks wil be stored (i.e. the data in the BlockChain)

		/*
			Creating genesis block and ensuring that it is always
		*/
		this.addBlock(new Block("First block in the chain - Genesis block"));
	}

	addBlock(newBlock){
		// Creating hash first
		newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();

		/* 
			Creating reference to previous block
			Checking for previous hash values and add if exists
		*/
		if(this.chain.length  > 0){
			newBlock.previousBlockHash = this.chain[this.chain.length-1].hash;
		}
		this.chain.push(newBlock);
	}
}

module.exports.Block = Block;