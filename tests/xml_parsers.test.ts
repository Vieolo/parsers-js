// Parsers
import {
    objectToXML
} from '../src/index'


describe("XML Parsers", () => {

    it('Converts the object to XML correctly', () => {
        // The sample object has to have the following characteristics
        // 1. Has a string value
        // 2. Has a number value
        // 3. Has a boolean value
        // 4. Has a string array as value
        // 5. Has an object array as value
        // 6. Has a nested Object
        // 7. With Attribute for an object key
        // 8. With Attribute for a value key
        let sampleObject = {
            data: {
                one: "One",
                two: 2,
                working: true,
                names: ["Foo", "Bar"],
                details: [
                    {
                        name: 'Foo',
                        height: {
                            measurement: 180,
                            system: 'Metric'
                        }
                    },
                    {
                        name: 'Bar',
                        height: {
                            measurement: 170,
                            system: 'Metric'
                        }
                    }
                ],
                preferences: {
                    general: {
                        background: 'green'
                    },
                    specific: {
                        mainPage: {
                            background: 'yellow',
                            color: {
                                ____: 'black',
                                ___nature: 'text'
                            },
                            value: {
                                ____: "text value",
                                ___fontSize: 12,
                                ___fontWeight: 'bold'
                            }
                        }
                    }
                },
                withAttributeInObject: {
                    ___currency: "EUR",
                    ___payment: 'SEPA',
                    amount: 123,
                    configuration: {
                        immediate: true,
                        withAttributeWithValue: {
                            ____: "some value",
                            ___attr: "attr value"
                        }
                    }
                }
            }
        }

        expect(objectToXML(sampleObject)).toBe(`
        <data>
            <one>One</one>
            <two>2</two>
            <working>true</working>
            <names>Foo</names>
            <names>Bar</names>
            <details>
                <name>Foo</name>
                <height>
                    <measurement>180</measurement>
                    <system>Metric</system>
                </height>
            </details>
            <details>
                <name>Bar</name>
                <height>
                    <measurement>170</measurement>
                    <system>Metric</system>
                </height>
            </details>
            <preferences>
                <general>
                    <background>green</background>
                </general>
                <specific>
                    <mainPage>
                        <background>yellow</background>
                        <color nature='text' >black</color>
                        <value fontSize='12' fontWeight='bold' >text value</value>
                    </mainPage>
                </specific>
            </preferences>
            <withAttributeInObject currency='EUR' payment='SEPA' >
                <amount>123</amount>
                <configuration>
                    <immediate>true</immediate>
                    <withAttributeWithValue attr='attr value' >some value</withAttributeWithValue>
                </configuration>
            </withAttributeInObject>
        </data>
        `.replace(/  +/g, "").replace(/[\r\n]+/g, ''))


        let realLifeSample = {
            "CstmrCdtTrfInitn": {
                "GrpHdr": {
                    "CreDtTm": "2021-10-20T06:34:11.858Z",
                    "InitgPty": {
                        "Nm": "Famco"
                    },
                    "MsgId": "uituykp",
                    "NbOfTxs": 3,
                    "CtrlSum": "1957.33"
                },
                "PmtInf": [{
                    "Dbtr": {
                        "Nm": "Famco Transport"
                    },
                    "DbtrAcct": {
                        "Id": {
                            "IBAN": "1234523"
                        }
                    },
                    "DbtrAgt": {
                        "FinInstnId": {
                            "Othr": {
                                "Id": "NOTPROVIDED"
                            }
                        }
                    },
                    "PmtInfId": "ymof4q7g",
                    "PmtMtd": "TRF",
                    "BtchBookg": true,
                    "PmtTpInf": {
                        "CtgyPurp": {
                            "Cd": "SUPP"
                        },
                        "SvcLvl": {
                            "Cd": "SEPA"
                        }
                    },
                    "ReqdExctnDt": "2021-10-31",
                    "ChrgBr": "SLEV",
                    "CdtTrfTxInf": [{
                        "Cdtr": {
                            "Nm": "Shell Edited"
                        },
                        "CdtrAcct": {
                            "Id": {
                                "IBAN": "12345 e"
                            }
                        },
                        "PmtId": {
                            "EndToEndId": "ymof4q7g/30"
                        },
                        "amount": {
                            "InstdAmt": {
                                "____": "600.00",
                                "___Ccy": "EUR"
                            }
                        },
                        "RmtInf": {
                            "Ustrd": null
                        }
                    }, {
                        "Cdtr": {
                            "Nm": "Shell Edited"
                        },
                        "CdtrAcct": {
                            "Id": {
                                "IBAN": "12345 e"
                            }
                        },
                        "PmtId": {
                            "EndToEndId": "ymof4q7g/59"
                        },
                        "amount": {
                            "InstdAmt": {
                                "____": "1234.00",
                                "___Ccy": "EUR"
                            }
                        },
                        "RmtInf": {
                            "Ustrd": null
                        }
                    }],
                    "CtrlSum": "1834.00",
                    "NbOfTxs": 2
                }, {
                    "Dbtr": {
                        "Nm": "Famco Transport"
                    },
                    "DbtrAcct": {
                        "Id": {
                            "IBAN": "1234523"
                        }
                    },
                    "DbtrAgt": {
                        "FinInstnId": {
                            "Othr": {
                                "Id": "NOTPROVIDED"
                            }
                        }
                    },
                    "PmtInfId": "ymof4q7g",
                    "PmtMtd": "TRF",
                    "BtchBookg": true,
                    "PmtTpInf": {
                        "CtgyPurp": {
                            "Cd": "SUPP"
                        },
                        "SvcLvl": {
                            "Cd": "SEPA"
                        }
                    },
                    "ReqdExctnDt": "2021-10-30",
                    "ChrgBr": "SLEV",
                    "CdtTrfTxInf": [{
                        "Cdtr": {
                            "Nm": "Shell Edited"
                        },
                        "CdtrAcct": {
                            "Id": {
                                "IBAN": "12345 e"
                            }
                        },
                        "PmtId": {
                            "EndToEndId": "ymof4q7g/55"
                        },
                        "amount": {
                            "InstdAmt": {
                                "____": "123.33",
                                "___Ccy": "EUR"
                            }
                        },
                        "RmtInf": {
                            "Ustrd": null
                        }
                    }],
                    "CtrlSum": "123.33",
                    "NbOfTxs": 1
                }]
            }
        }

        expect(objectToXML(realLifeSample)).toBe(`
        <CstmrCdtTrfInitn>
            <GrpHdr>
                <CreDtTm>2021-10-20T06:34:11.858Z</CreDtTm>
                <InitgPty>
                    <Nm>Famco</Nm>
                </InitgPty>
                <MsgId>uituykp</MsgId>
                <NbOfTxs>3</NbOfTxs>
                <CtrlSum>1957.33</CtrlSum>
            </GrpHdr>
            <PmtInf>
                <Dbtr>
                    <Nm>Famco Transport</Nm>
                </Dbtr>
                <DbtrAcct>
                    <Id>
                        <IBAN>1234523</IBAN>
                    </Id>
                </DbtrAcct>
                <DbtrAgt>
                    <FinInstnId>
                        <Othr>
                            <Id>NOTPROVIDED</Id>
                        </Othr>
                    </FinInstnId>
                </DbtrAgt>
                <PmtInfId>ymof4q7g</PmtInfId>
                <PmtMtd>TRF</PmtMtd>
                <BtchBookg>true</BtchBookg>
                <PmtTpInf>
                    <CtgyPurp>
                        <Cd>SUPP</Cd>
                    </CtgyPurp>
                    <SvcLvl>
                        <Cd>SEPA</Cd>
                    </SvcLvl>
                </PmtTpInf>
                <ReqdExctnDt>2021-10-31</ReqdExctnDt>
                <ChrgBr>SLEV</ChrgBr>
                <CdtTrfTxInf>
                    <Cdtr>
                        <Nm>Shell Edited</Nm>
                    </Cdtr>
                    <CdtrAcct>
                        <Id>
                            <IBAN>12345 e</IBAN>
                        </Id>
                    </CdtrAcct>
                    <PmtId>
                        <EndToEndId>ymof4q7g/30</EndToEndId>
                    </PmtId>
                    <amount>
                        <InstdAmt Ccy='EUR' >600.00</InstdAmt>
                    </amount>
                    <RmtInf>
                        <Ustrd></Ustrd>
                    </RmtInf>
                </CdtTrfTxInf>
                <CdtTrfTxInf>
                    <Cdtr>
                        <Nm>Shell Edited</Nm>
                    </Cdtr>
                    <CdtrAcct>
                        <Id>
                            <IBAN>12345 e</IBAN>
                        </Id>
                    </CdtrAcct>
                    <PmtId>
                        <EndToEndId>ymof4q7g/59</EndToEndId>
                    </PmtId>
                    <amount>
                        <InstdAmt Ccy='EUR' >1234.00</InstdAmt>
                    </amount>
                    <RmtInf>
                        <Ustrd></Ustrd>
                    </RmtInf>
                </CdtTrfTxInf>
                <CtrlSum>1834.00</CtrlSum>
                <NbOfTxs>2</NbOfTxs>
            </PmtInf>
            <PmtInf>
                <Dbtr>
                    <Nm>Famco Transport</Nm>
                </Dbtr>
                <DbtrAcct>
                    <Id>
                        <IBAN>1234523</IBAN>
                    </Id>
                </DbtrAcct>
                <DbtrAgt>
                    <FinInstnId>
                        <Othr>
                            <Id>NOTPROVIDED</Id>
                        </Othr>
                    </FinInstnId>
                </DbtrAgt>
                <PmtInfId>ymof4q7g</PmtInfId>
                <PmtMtd>TRF</PmtMtd>
                <BtchBookg>true</BtchBookg>
                <PmtTpInf>
                    <CtgyPurp>
                        <Cd>SUPP</Cd>
                    </CtgyPurp>
                    <SvcLvl>
                        <Cd>SEPA</Cd>
                    </SvcLvl>
                </PmtTpInf>
                <ReqdExctnDt>2021-10-30</ReqdExctnDt>
                <ChrgBr>SLEV</ChrgBr>
                <CdtTrfTxInf>
                    <Cdtr>
                        <Nm>Shell Edited</Nm>
                    </Cdtr>
                    <CdtrAcct>
                        <Id>
                            <IBAN>12345 e</IBAN>
                        </Id>
                    </CdtrAcct>
                    <PmtId>
                        <EndToEndId>ymof4q7g/55</EndToEndId>
                    </PmtId>
                    <amount>
                        <InstdAmt Ccy='EUR' >123.33</InstdAmt>
                    </amount>
                    <RmtInf>
                        <Ustrd></Ustrd>
                    </RmtInf>
                </CdtTrfTxInf>
                <CtrlSum>123.33</CtrlSum>
                <NbOfTxs>1</NbOfTxs>
            </PmtInf>
        </CstmrCdtTrfInitn>
        `.replace(/  +/g, "").replace(/[\r\n]+/g, ''))
    })

})
