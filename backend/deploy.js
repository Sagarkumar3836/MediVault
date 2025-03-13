const fs = require('fs');
const Web3 = require('web3');

// const abi = JSON.parse(fs.readFileSync("/Users/virajchandra/Developer/Projects/MediVault/backend/contracts/Cruds.abi"));
// const bytecode = fs.readFileSync("/Users/virajchandra/Developer/Projects/MediVault/backend/contracts/Cruds.bin").toString();

const abi = JSON.parse(fs.readFileSync("C:\\Users\\Ayush Sagar\\Desktop\\MediVault\\backend\\contracts\\Cruds.abi"));
const bytecode = fs.readFileSync("C:\\Users\\Ayush Sagar\\Desktop\\MediVault\\backend\\contracts\\Cruds.bin").toString();

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

async function deploy() {
    // const w3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi);
    contract = contract.deploy({data: bytecode});

    const deployContract = await contract.send({
        from: "0x27720f155CE3aB7d214D2c9b1c795D44D36fE5F0",
        gas: "6721975",
    })
    console.log(deployContract.options.address);
}

deploy();
