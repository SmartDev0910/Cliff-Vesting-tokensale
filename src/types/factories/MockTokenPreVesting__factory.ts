/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTokenPreVesting,
  MockTokenPreVestingInterface,
} from "../MockTokenPreVesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Revoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "VestingScheduleCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "allIncomingDepositsFinalised",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "computeNextVestingScheduleIdForHolder",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "computeReleasableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "computeVestingScheduleIdForAddressAndIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_slicePeriodSeconds",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_revocable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tge",
        type: "uint256",
      },
    ],
    name: "createVestingSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_beneficiaries",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_cliffs",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_durations",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_slicePeriodSeconds",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "_revocables",
        type: "bool[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_tges",
        type: "uint256[]",
      },
    ],
    name: "createVestingSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "getLastVestingScheduleForHolder",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "tge",
            type: "uint256",
          },
        ],
        internalType: "struct TokenPreVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingIdAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "getVestingSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "tge",
            type: "uint256",
          },
        ],
        internalType: "struct TokenPreVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingScheduleByAddressAndIndex",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cliff",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slicePeriodSeconds",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "tge",
            type: "uint256",
          },
        ],
        internalType: "struct TokenPreVesting.VestingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVestingSchedulesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "getVestingSchedulesCountByBeneficiary",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVestingSchedulesTotalAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWithdrawableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "vestingScheduleId",
        type: "bytes32",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setCurrentTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timePeriodInSeconds",
        type: "uint256",
      },
    ],
    name: "setTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timestampSet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405260006009553480156200001657600080fd5b50604051620027da380380620027da83398101604081905262000039916200011a565b806200004533620000ca565b600180556001600160a01b038116620000b35760405162461bcd60e51b815260206004820152602660248201527f546f6b656e50726556657374696e673a20746f6b656e2061646472657373206960448201526573207a65726f60d01b606482015260840160405180910390fd5b426003556001600160a01b0316608052506200014c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200012d57600080fd5b81516001600160a01b03811681146200014557600080fd5b9392505050565b60805161265d6200017d600039600081816101d70152818161062901528181610f77015261116e015261265d6000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80638da5cb5b116100f9578063d1f3c24d11610097578063f2fde38b11610071578063f2fde38b146103cc578063f51321d7146103df578063f7c469f0146103f2578063f9079b371461045a57600080fd5b8063d1f3c24d1461039d578063d6d14171146103b0578063ea1bb3d5146103b957600080fd5b80639ef346b4116100d35780639ef346b41461035b578063a0a2b5731461036e578063b75c7dc614610381578063be9a65551461039457600080fd5b80638da5cb5b1461033057806390be10cc146103415780639b69279a1461034957600080fd5b8063530ff4e51161016657806366afd8ef1161014057806366afd8ef146102a0578063715018a6146102b35780637e913dc6146102bb5780638af104da146102db57600080fd5b8063530ff4e51461024757806355ce38661461025a5780635a7bb69a1461027757600080fd5b806329cb924d1161019757806329cb924d146102245780632e1a7d4d1461022c57806348deb4711461023f57600080fd5b806313083617146101be57806321df0da7146101d557806322f8e5661461020f575b600080fd5b6005545b6040519081526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020016101cc565b61022261021d3660046120cc565b600955565b005b6009546101c2565b61022261023a3660046120cc565b61046d565b6006546101c2565b61022261025536600461210f565b610657565b6002546102679060ff1681565b60405190151581526020016101cc565b6101c2610285366004612175565b6001600160a01b031660009081526008602052604090205490565b6102226102ae366004612190565b610c03565b610222610fac565b6102ce6102c9366004612175565b611012565b6040516101cc91906121b2565b6101c26102e9366004612243565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b6000546001600160a01b03166101f7565b6101c2611147565b60025461026790610100900460ff1681565b6102ce6103693660046120cc565b6111f3565b61022261037c3660046120cc565b6112f7565b61022261038f3660046120cc565b6113f4565b6101c260045481565b6102226103ab36600461235f565b6116bd565b6101c260035481565b6101c26103c73660046120cc565b611902565b6102226103da366004612175565b611aa4565b6102ce6103ed366004612243565b611b86565b6101c2610400366004612175565b6001600160a01b0381166000908152600860209081526040808320548151606086901b6bffffffffffffffffffffffff19168185015260348082019290925282518082039092018252605401909152805191012092915050565b6101c26104683660046120cc565b611c3b565b600260015414156104c55760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026001556000546001600160a01b031633146105245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b80306001600160a01b03166390be10cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561055e57600080fd5b505afa158015610572573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059691906124c7565b101561060a5760405162461bcd60e51b815260206004820152602e60248201527f546f6b656e50726556657374696e673a206e6f7420656e6f756768207769746860448201527f6472617761626c652066756e647300000000000000000000000000000000000060648201526084016104bc565b61065061061f6000546001600160a01b031690565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169083611cc5565b5060018055565b60025460ff16156106d05760405162461bcd60e51b815260206004820152603760248201527f546f6b656e50726556657374696e673a20496e636f6d696e67206465706f736960448201527f74732068617665206265656e2066696e616c697365642e00000000000000000060648201526084016104bc565b6000546001600160a01b0316331461072a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b81306001600160a01b03166390be10cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561076457600080fd5b505afa158015610778573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079c91906124c7565b10156108365760405162461bcd60e51b815260206004820152604d60248201527f546f6b656e50726556657374696e673a2063616e6e6f7420637265617465207660448201527f657374696e67207363686564756c652062656361757365206e6f74207375666660648201527f696369656e7420746f6b656e7300000000000000000000000000000000000000608482015260a4016104bc565b600085116108ac5760405162461bcd60e51b815260206004820152602560248201527f546f6b656e50726556657374696e673a206475726174696f6e206d757374206260448201527f65203e203000000000000000000000000000000000000000000000000000000060648201526084016104bc565b600082116109085760405162461bcd60e51b815260206004820152602360248201527f546f6b656e50726556657374696e673a20616d6f756e74206d7573742062652060448201526203e20360ec1b60648201526084016104bc565b600184101561097f5760405162461bcd60e51b815260206004820152603060248201527f546f6b656e50726556657374696e673a20736c696365506572696f645365636f60448201527f6e6473206d757374206265203e3d20310000000000000000000000000000000060648201526084016104bc565b604051630f7c469f60e41b81526001600160a01b0388166004820152600090309063f7c469f09060240160206040518083038186803b1580156109c157600080fd5b505afa1580156109d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f991906124c7565b9050604051806101400160405280600115158152602001896001600160a01b03168152602001888152602001878152602001868152602001851515815260200184815260200160008152602001600015158152602001838152506007600083815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160010155606082015181600201556080820151816003015560a08201518160040160006101000a81548160ff02191690831515021790555060c0820151816005015560e082015181600601556101008201518160070160006101000a81548160ff0219169083151502179055506101208201518160080155905050610b4983600654611d3190919063ffffffff16565b6006556005805460018181019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018290556001600160a01b03891660009081526008602052604090205490610ba2908290611d31565b6001600160a01b038a166000818152600860209081526040918290209390935580519182529181018490527f054b7a1afdd1e502e9103592f08509d192ea86fccca863e13933ee2e0bcaed2e910160405180910390a1505050505050505050565b60026001541415610c565760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104bc565b60026001908155600083815260076020526040902054839160ff909116151514610cdc5760405162461bcd60e51b815260206004820152603160248201527f546f6b656e50726556657374696e673a2056657374696e67207363686564756c6044820152706520646f6573206e6f742065786973747360781b60648201526084016104bc565b6000818152600760208190526040909120015460ff1615610d545760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e50726556657374696e673a2056657374696e67207363686564756c60448201526b19481a5cc81c995d9bdad95960a21b60648201526084016104bc565b6000838152600760205260408120805491549091336001600160a01b03610100909204821681149291909116148180610d8a5750805b610e225760405162461bcd60e51b815260206004820152604560248201527f546f6b656e50726556657374696e673a206f6e6c792062656e6566696369617260448201527f7920616e64206f776e65722063616e2072656c6561736520766573746564207460648201527f6f6b656e73000000000000000000000000000000000000000000000000000000608482015260a4016104bc565b6040805161014081018252845460ff808216151583526001600160a01b0361010092839004166020840152600187015493830193909352600286015460608301526003860154608083015260048601548316151560a0830152600586015460c0830152600686015460e083015260078601549092161515918101919091526008840154610120820152600090610eb790611d3d565b905085811015610f31576040805162461bcd60e51b81526020600482015260248101919091527f546f6b656e50726556657374696e673a2063616e6e6f742072656c656173652060448201527f746f6b656e732c206e6f7420656e6f7567682076657374656420746f6b656e7360648201526084016104bc565b6006840154610f409087611d31565b600685810191909155845490546101009091046001600160a01b031690610f679088611e50565b600655610f9e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168289611cc5565b505060018055505050505050565b6000546001600160a01b031633146110065760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b6110106000611e5c565b565b61107760405180610140016040528060001515815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b6001600160a01b038216600090815260086020526040812054600791906110a69085906102e9906001906124f6565b81526020808201929092526040908101600020815161014081018352815460ff808216151583526001600160a01b03610100928390041695830195909552600183015493820193909352600282015460608201526003820154608082015260048201548416151560a0820152600582015460c0820152600682015460e082015260078201549093161515918301919091526008015461012082015292915050565b6006546040516370a0823160e01b81523060048201526000916111ee916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b1580156111b057600080fd5b505afa1580156111c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e891906124c7565b90611e50565b905090565b61125860405180610140016040528060001515815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b50600090815260076020818152604092839020835161014081018552815460ff808216151583526001600160a01b03610100928390041694830194909452600183015495820195909552600282015460608201526003820154608082015260048201548316151560a0820152600582015460c0820152600682015460e08201529281015490911615159282019290925260089091015461012082015290565b6000546001600160a01b031633146113515760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b600254610100900460ff16156113cf5760405162461bcd60e51b815260206004820152602860248201527f546f6b656e50726556657374696e673a206c61756e63682074696d657374616d60448201527f702069732073657400000000000000000000000000000000000000000000000060648201526084016104bc565b6002805461ffff19166101011790554260038190556113ee9082611d31565b60045550565b6000546001600160a01b0316331461144e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b600081815260076020526040902054819060ff1615156001146114cd5760405162461bcd60e51b815260206004820152603160248201527f546f6b656e50726556657374696e673a2056657374696e67207363686564756c6044820152706520646f6573206e6f742065786973747360781b60648201526084016104bc565b6000818152600760208190526040909120015460ff16156115455760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e50726556657374696e673a2056657374696e67207363686564756c60448201526b19481a5cc81c995d9bdad95960a21b60648201526084016104bc565b6000828152600760205260409020600481015460ff1615156001146115d25760405162461bcd60e51b815260206004820152602960248201527f546f6b656e50726556657374696e673a2076657374696e67206973206e6f742060448201527f7265766f6361626c65000000000000000000000000000000000000000000000060648201526084016104bc565b6040805161014081018252825460ff808216151583526001600160a01b0361010092839004166020840152600185015493830193909352600284015460608301526003840154608083015260048401548316151560a0830152600584015460c0830152600684015460e08301526007840154909216151591810191909152600882015461012082015260009061166790611d3d565b90508015611679576116798482610c03565b600061169683600601548460050154611e5090919063ffffffff16565b6006549091506116a69082611e50565b6006555050600701805460ff191660011790555050565b60025460ff16156117365760405162461bcd60e51b815260206004820152603760248201527f546f6b656e50726556657374696e673a20496e636f6d696e67206465706f736960448201527f74732068617665206265656e2066696e616c697365642e00000000000000000060648201526084016104bc565b6000546001600160a01b031633146117905760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b8a8714801561179e57508685145b80156117a957508483145b80156117b55750815183145b6118015760405162461bcd60e51b815260206004820181905260248201527f546f6b656e50726556657374696e673a204c656e677468206d69736d6174636860448201526064016104bc565b60005b8b8110156118f3576118e18d8d838181106118215761182161250d565b90506020020160208101906118369190612175565b8c8c848181106118485761184861250d565b905060200201358b8b858181106118615761186161250d565b905060200201358a8a8681811061187a5761187a61250d565b905060200201358989878181106118935761189361250d565b90506020020160208101906118a89190612523565b8887815181106118ba576118ba61250d565b60200260200101518888815181106118d4576118d461250d565b6020026020010151610657565b806118eb81612540565b915050611804565b50505050505050505050505050565b600081815260076020526040812054829060ff1615156001146119815760405162461bcd60e51b815260206004820152603160248201527f546f6b656e50726556657374696e673a2056657374696e67207363686564756c6044820152706520646f6573206e6f742065786973747360781b60648201526084016104bc565b6000818152600760208190526040909120015460ff16156119f95760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e50726556657374696e673a2056657374696e67207363686564756c60448201526b19481a5cc81c995d9bdad95960a21b60648201526084016104bc565b600083815260076020818152604092839020835161014081018552815460ff808216151583526001600160a01b03610100928390041694830194909452600183015495820195909552600282015460608201526003820154608082015260048201548316151560a0820152600582015460c0820152600682015460e0820152928101549091161515928201929092526008820154610120820152611a9c90611d3d565b949350505050565b6000546001600160a01b03163314611afe5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bc565b6001600160a01b038116611b7a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104bc565b611b8381611e5c565b50565b611beb60405180610140016040528060001515815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b60408051606085901b6bffffffffffffffffffffffff191660208083019190915260348083018690528351808403909101815260549092019092528051910120611c34906111f3565b9392505050565b6000611c4660055490565b8210611ca05760405162461bcd60e51b8152602060048201526024808201527f546f6b656e50726556657374696e673a20696e646578206f7574206f6620626f604482015263756e647360e01b60648201526084016104bc565b60058281548110611cb357611cb361250d565b90600052602060002001549050919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b179052611d2c908490611ec4565b505050565b6000611c34828461255b565b600254600090610100900460ff16611d5757506000919050565b6000611d6260095490565b9050611d7d8360400151600454611d3190919063ffffffff16565b811080611d91575061010083015115156001145b15611d9f5750600092915050565b6060830151600454611db091611d31565b8110611dc95760e083015160c0840151611c3491611e50565b6000611de060045483611e5090919063ffffffff16565b60808501519091506000611df48383611fa9565b90506000611e028284611fb5565b90506000611e2b8860600151611e25848b60c00151611fb590919063ffffffff16565b90611fa9565b9050611e448860e0015182611e5090919063ffffffff16565b98975050505050505050565b6000611c3482846124f6565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611f19826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611fc19092919063ffffffff16565b805190915015611d2c5780806020019051810190611f379190612573565b611d2c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104bc565b6000611c348284612590565b6000611c3482846125b2565b6060611a9c848460008585843b61201a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104bc565b600080866001600160a01b031685876040516120369190612601565b60006040518083038185875af1925050503d8060008114612073576040519150601f19603f3d011682016040523d82523d6000602084013e612078565b606091505b5091509150612088828286612093565b979650505050505050565b606083156120a2575081611c34565b8251156120b25782518084602001fd5b8160405162461bcd60e51b81526004016104bc919061261d565b6000602082840312156120de57600080fd5b5035919050565b80356001600160a01b03811681146120fc57600080fd5b919050565b8015158114611b8357600080fd5b600080600080600080600060e0888a03121561212a57600080fd5b612133886120e5565b9650602088013595506040880135945060608801359350608088013561215881612101565b9699959850939692959460a0840135945060c09093013592915050565b60006020828403121561218757600080fd5b611c34826120e5565b600080604083850312156121a357600080fd5b50508035926020909101359150565b815115158152610140810160208301516121d760208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015161220960a084018215159052565b5060c083015160c083015260e083015160e0830152610100808401516122328285018215159052565b505061012092830151919092015290565b6000806040838503121561225657600080fd5b61225f836120e5565b946020939093013593505050565b60008083601f84011261227f57600080fd5b50813567ffffffffffffffff81111561229757600080fd5b6020830191508360208260051b85010111156122b257600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126122e057600080fd5b8135602067ffffffffffffffff808311156122fd576122fd6122b9565b8260051b604051601f19603f83011681018181108482111715612322576123226122b9565b60405293845285810183019383810192508785111561234057600080fd5b83870191505b8482101561208857813583529183019190830190612346565b60008060008060008060008060008060008060e08d8f03121561238157600080fd5b67ffffffffffffffff8d35111561239757600080fd5b6123a48e8e358f0161226d565b909c509a5067ffffffffffffffff60208e013511156123c257600080fd5b6123d28e60208f01358f0161226d565b909a50985067ffffffffffffffff60408e013511156123f057600080fd5b6124008e60408f01358f0161226d565b909850965067ffffffffffffffff60608e0135111561241e57600080fd5b61242e8e60608f01358f0161226d565b909650945067ffffffffffffffff60808e0135111561244c57600080fd5b61245c8e60808f01358f0161226d565b909450925067ffffffffffffffff60a08e0135111561247a57600080fd5b61248a8e60a08f01358f016122cf565b915067ffffffffffffffff60c08e013511156124a557600080fd5b6124b58e60c08f01358f016122cf565b90509295989b509295989b509295989b565b6000602082840312156124d957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015612508576125086124e0565b500390565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561253557600080fd5b8135611c3481612101565b6000600019821415612554576125546124e0565b5060010190565b6000821982111561256e5761256e6124e0565b500190565b60006020828403121561258557600080fd5b8151611c3481612101565b6000826125ad57634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156125cc576125cc6124e0565b500290565b60005b838110156125ec5781810151838201526020016125d4565b838111156125fb576000848401525b50505050565b600082516126138184602087016125d1565b9190910192915050565b602081526000825180602084015261263c8160408501602087016125d1565b601f01601f1916919091016040019291505056fea164736f6c6343000809000a";

type MockTokenPreVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTokenPreVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockTokenPreVesting__factory extends ContractFactory {
  constructor(...args: MockTokenPreVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockTokenPreVesting";
  }

  deploy(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTokenPreVesting> {
    return super.deploy(
      token_,
      overrides || {}
    ) as Promise<MockTokenPreVesting>;
  }
  getDeployTransaction(
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, overrides || {});
  }
  attach(address: string): MockTokenPreVesting {
    return super.attach(address) as MockTokenPreVesting;
  }
  connect(signer: Signer): MockTokenPreVesting__factory {
    return super.connect(signer) as MockTokenPreVesting__factory;
  }
  static readonly contractName: "MockTokenPreVesting";
  public readonly contractName: "MockTokenPreVesting";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenPreVestingInterface {
    return new utils.Interface(_abi) as MockTokenPreVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTokenPreVesting {
    return new Contract(address, _abi, signerOrProvider) as MockTokenPreVesting;
  }
}