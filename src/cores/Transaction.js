import * as bitcoin from 'bitcoinjs-lib';
class Transaction {
    constructor(props) {

    }
    //ins:[{txId,vout}]
    //outs [{address,satoshi}]
    //tips:outs amout is already caculated
    buildBitCoinTransaction(ins, outs, keypairs) {
        let tx = new bitcoin.TransactionBuilder();
        let inputs = [];
        let outputs = [];

        ins.forEach((unspent, index) => {
            tx.addInput(unspent.txId, unspent.vout);
        });
        outs.forEach((out, index) => {
            tx.addOutput(out.address, out.satoshi);
        });
        keypairs.forEach((keypair, index) => {
            tx.sign(index, keypair);
        });
/*        console.log(tx);
        console.log(tx.build());
        console.log(tx.build().toHex());*/
        return tx.build().toHex();
    }
}
export { Transaction }
