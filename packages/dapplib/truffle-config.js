require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rifle pave pumpkin grace brick equal gesture'; 
let testAccounts = [
"0xd59b74d975025564062ed80b9a709d7e9c27e701a89533082d76821741d44e15",
"0xfcaa6c57f904ca4762f953fa88f9fa107ab27d62a711e26d4954321fa529930d",
"0xe38b9bdad5763db96e2c55b0fe10db8c0170b75e13e5507ea4e4c83d8a21a1f0",
"0xadbdd5b56b0712afe8744b3488c33e56ecbf034cc0ebd0df7b5523422b4e0901",
"0x9457077d560e374f78719d7f01a7835cad0d9559f329a808caf33a660b8d7374",
"0xa757c16b2ba7f023b8c3bbba35ccdd986426e8ee74113ab43c3124538d0d9d70",
"0x049d1d6c9231711181bf4c9b034e29b04f10576b728ba6d5f326a0f99cfc01e2",
"0xf199e5de5c4a657cd6c7879f5b3debc1c0be928af9e5daa0984778812f58f04c",
"0xc767a7d2230e8aee6c17dd598f1799e8c296bd508452367c00055cec93796cfb",
"0xc1cec7584b0ba2af8fe7990b2936ab7543933720e149bfd2f8225714ccac8b13"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


