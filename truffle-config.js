require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember collect harvest local bottom subject'; 
let testAccounts = [
"0x4ad5d188dd041c5f3584dc0cba902088e9cc200a879d4fb9d2fdeb4d349aa78e",
"0x0836c6526c03de3ce8f1abc708b7e5f72d1d22e6a95849ce45e14a3725991c2b",
"0xfc25b53aa1817faa299334156f44484d22f8569547df5fb2cba7ee079d544ebc",
"0x760c71d15b7e5874968072e764b74e3aa5cf5b44c9247edaf60673737582a4a4",
"0xb890f39984b08b2fd5cb699faddaccdbc7bb0c78c02f6fb4b3287909d6ad128c",
"0x410b826676d8a832889217cad0841e6ceee8034997106a02f7749e2efea842e4",
"0x1c47978a04ed9ff35842fdf25e823978dce76bf8dcf8ad4854f10b02ff6aef2a",
"0x388810995ddd3182a4e1efbd132126bf888c12c538094fb9f1ca7425161f0667",
"0x9f772eb1ca66113b0b13adaaf6dd23a1cbc4e91a427b6d944e40c924614a438c",
"0x5815e3167f338560d51b658449c43416d348bd93c849838e47b809b7f24ec653"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
