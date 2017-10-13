export default {
    BITCOIN: {
        network: {
            mainNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x00,
                scriptHash: 0x05,
                wif: 0x80,
                dustThreshold: 546
            },
            testNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x043587cf,
                    private: 0x04358394
                },
                pubKeyHash: 0x6f,
                scriptHash: 0xc4,
                wif: 0xef,
                dustThreshold: 546
            }
        },
        pouch: {
            coinHDType: 0,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'BTC',
            isSingleToken: false,
            isTestnet: false
        }
    },
    DASH: {
        network: {
            mainNet: {
                messagePrefix: '\x19DarkCoin Signed Message:\n',
                bip32: {
                    public: 0x02fe52cc,
                    private: 0x02fe52f8
                },
                pubKeyHash: 0x4c,
                scriptHash: 0x10,
                wif: 0xcc,
                dustThreshold: 5460
            },
            testNet: {
                messagePrefix: '\x19DarkCoin Signed Message:\n',
                bip32: {
                    public: 0x3a805837,
                    private: 0x3a8061a0
                },
                pubKeyHash: 0x8c,
                scriptHash: 0x13,
                wif: 0xef,
                dustThreshold: 5460
            }
        },
        pouch: {
            coinHDType: 5,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'DASH',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    ETHEREUM_CLASSIC: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 61,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'ETC',
            isSingleToken: false,
            isTestnet: false
        }
    },
    LITECOIN: {
        network: {
            mainNet: {
                messagePrefix: '\x19Litecoin Signed Message:\n',
                bip32: {
                    public: 0x019da462,
                    private: 0x019d9cfe
                },
                pubKeyHash: 0x30,
                scriptHash: 0x05,
                wif: 0xb0,
                dustThreshold: 0
            },
            //@note: @todo: @here: needs to update to have litecoin testnet definitions.
            testNet: { error: true },
        },
        pouch: {
            coinHDType: 2,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'LTC',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    LISK: {
        network: {
            mainNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x00,
                scriptHash: 0x05,
                wif: 0x80,
                dustThreshold: 546
            },
            testNet: {
                messagePrefix: '\x18Bitcoin Signed Message:\n',
                bip32: {
                    public: 0x043587cf,
                    private: 0x04358394
                },
                pubKeyHash: 0x6f,
                scriptHash: 0xc4,
                wif: 0xef,
                dustThreshold: 546
            }
        },
        pouch: {
            coinHDType: 134,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'LSK',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    ZCASH: {
        network: {
            mainNet: {
                messagePrefix: '\x19ZCash Signed Message:\n',
                bip32: {
                    public: 0x0488b21e,
                    private: 0x0488ade4
                },
                pubKeyHash: 0x1cb8,
                scriptHash: 0x1cbd,
                wif: 0x80,
                dustThreshold: 0
            },
            testNet: {
                messagePrefix: '\x19ZCash Signed Message:\n',
                bip32: {
                    public: 0x043587cf,
                    private: 0x04358394
                },
                pubKeyHash: 0x1d25,
                scriptHash: 0x1cba,
                wif: 0xef,
                dustThreshold: 0
            },
        },
        pouch: {
            coinHDType: 133,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'ZEC',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    TESTNET_ROOTSTOCK: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 137 + 37173,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'SBTC',
            isSingleToken: true,
            isTestnet: true
        }
    },
    DOGE: {
        network: {
            mainNet: {
                messagePrefix: '\x19Dogecoin Signed Message:\n',
                bip32: {
                    public: 0x02facafd,
                    private: 0x02fac398
                },
                pubKeyHash: 0x1e,
                scriptHash: 0x16,
                wif: 0x9e,
                dustThreshold: 0
            },
            //@note: @todo: @here: needs to update to have doge testnet definitions.
            testNet: { error: true }
        },
        pouch: {
            coinHDType: 3,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'DOGE',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    //以太坊
    ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: false,
            coinAbbreviatedName: 'ETH',
            isSingleToken: false,
            isTestnet: false,
        }
    },
    THEDAO_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'DAO',
            tokenContractAddress: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
            refundOpCode: '0x3ccfd60b',
            approveOpCode: '0x095ea7b3',
            tokenWithdrawalAddress: '0xbf4ed7b27f1d666546e30d74d50d173d20bca754',
        }
    },
    AUGUR_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'REP',
            tokenContractAddress: '0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    ICONOMI_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'ICN',
            tokenContractAddress: '0x888666CA69E0f178DED6D75b5726Cee99A87D698',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    GOLEM_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'GNT',
            tokenContractAddress: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    GNOSIS_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'GNO',
            tokenContractAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    SINGULARDTV_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'SNGLS',
            tokenContractAddress: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    DIGIX_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'DGD',
            tokenContractAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb'
        }
    },
    BLOCKCHAINCAPITAL_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'BCAP',
            tokenContractAddress: '0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    CIVIC_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null
        },
        pouch: {
            coinHDType: 60,
            coinIsTokenSubtype: true,
            coinAbbreviatedName: 'CVC',
            tokenContractAddress: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
            tokenIsERC20: true,
            transferOpCode: '0xa9059cbb',
        }
    },
    NUMCOINTYPES_ETHEREUM: {
        network: {
            mainNet: null,
            testNet: null,
        },
        pouch: {}
    }
}