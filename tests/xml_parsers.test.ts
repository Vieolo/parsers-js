// Parsers
import {
    objectToXML,
    formatXML
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
            Document: {
                ___xmlns___xsi: "http://www.w3.org/2001/XMLSchema-instance",
                ___xmlns: "urn:iso:std:iso:20022:tech:xsd:pain.001.001.03",
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
        }

        let realLifeSampleFormatted = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<Document xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='urn:iso:std:iso:20022:tech:xsd:pain.001.001.03' >
\t<CstmrCdtTrfInitn>
\t\t<GrpHdr>
\t\t\t<CreDtTm>2021-10-20T06:34:11.858Z</CreDtTm>
\t\t\t<InitgPty>
\t\t\t\t<Nm>Famco</Nm>
\t\t\t</InitgPty>
\t\t\t<MsgId>uituykp</MsgId>
\t\t\t<NbOfTxs>3</NbOfTxs>
\t\t\t<CtrlSum>1957.33</CtrlSum>
\t\t</GrpHdr>
\t\t<PmtInf>
\t\t\t<Dbtr>
\t\t\t\t<Nm>Famco Transport</Nm>
\t\t\t</Dbtr>
\t\t\t<DbtrAcct>
\t\t\t\t<Id>
\t\t\t\t\t<IBAN>1234523</IBAN>
\t\t\t\t</Id>
\t\t\t</DbtrAcct>
\t\t\t<DbtrAgt>
\t\t\t\t<FinInstnId>
\t\t\t\t\t<Othr>
\t\t\t\t\t\t<Id>NOTPROVIDED</Id>
\t\t\t\t\t</Othr>
\t\t\t\t</FinInstnId>
\t\t\t</DbtrAgt>
\t\t\t<PmtInfId>ymof4q7g</PmtInfId>
\t\t\t<PmtMtd>TRF</PmtMtd>
\t\t\t<BtchBookg>true</BtchBookg>
\t\t\t<PmtTpInf>
\t\t\t\t<CtgyPurp>
\t\t\t\t\t<Cd>SUPP</Cd>
\t\t\t\t</CtgyPurp>
\t\t\t\t<SvcLvl>
\t\t\t\t\t<Cd>SEPA</Cd>
\t\t\t\t</SvcLvl>
\t\t\t</PmtTpInf>
\t\t\t<ReqdExctnDt>2021-10-31</ReqdExctnDt>
\t\t\t<ChrgBr>SLEV</ChrgBr>
\t\t\t<CdtTrfTxInf>
\t\t\t\t<Cdtr>
\t\t\t\t\t<Nm>Shell Edited</Nm>
\t\t\t\t</Cdtr>
\t\t\t\t<CdtrAcct>
\t\t\t\t\t<Id>
\t\t\t\t\t\t<IBAN>12345 e</IBAN>
\t\t\t\t\t</Id>
\t\t\t\t</CdtrAcct>
\t\t\t\t<PmtId>
\t\t\t\t\t<EndToEndId>ymof4q7g/30</EndToEndId>
\t\t\t\t</PmtId>
\t\t\t\t<amount>
\t\t\t\t\t<InstdAmt Ccy='EUR' >600.00</InstdAmt>
\t\t\t\t</amount>
\t\t\t\t<RmtInf>
\t\t\t\t\t<Ustrd></Ustrd>
\t\t\t\t</RmtInf>
\t\t\t</CdtTrfTxInf>
\t\t\t<CdtTrfTxInf>
\t\t\t\t<Cdtr>
\t\t\t\t\t<Nm>Shell Edited</Nm>
\t\t\t\t</Cdtr>
\t\t\t\t<CdtrAcct>
\t\t\t\t\t<Id>
\t\t\t\t\t\t<IBAN>12345 e</IBAN>
\t\t\t\t\t</Id>
\t\t\t\t</CdtrAcct>
\t\t\t\t<PmtId>
\t\t\t\t\t<EndToEndId>ymof4q7g/59</EndToEndId>
\t\t\t\t</PmtId>
\t\t\t\t<amount>
\t\t\t\t\t<InstdAmt Ccy='EUR' >1234.00</InstdAmt>
\t\t\t\t</amount>
\t\t\t\t<RmtInf>
\t\t\t\t\t<Ustrd></Ustrd>
\t\t\t\t</RmtInf>
\t\t\t</CdtTrfTxInf>
\t\t\t<CtrlSum>1834.00</CtrlSum>
\t\t\t<NbOfTxs>2</NbOfTxs>
\t\t</PmtInf>
\t\t<PmtInf>
\t\t\t<Dbtr>
\t\t\t\t<Nm>Famco Transport</Nm>
\t\t\t</Dbtr>
\t\t\t<DbtrAcct>
\t\t\t\t<Id>
\t\t\t\t\t<IBAN>1234523</IBAN>
\t\t\t\t</Id>
\t\t\t</DbtrAcct>
\t\t\t<DbtrAgt>
\t\t\t\t<FinInstnId>
\t\t\t\t\t<Othr>
\t\t\t\t\t\t<Id>NOTPROVIDED</Id>
\t\t\t\t\t</Othr>
\t\t\t\t</FinInstnId>
\t\t\t</DbtrAgt>
\t\t\t<PmtInfId>ymof4q7g</PmtInfId>
\t\t\t<PmtMtd>TRF</PmtMtd>
\t\t\t<BtchBookg>true</BtchBookg>
\t\t\t<PmtTpInf>
\t\t\t\t<CtgyPurp>
\t\t\t\t\t<Cd>SUPP</Cd>
\t\t\t\t</CtgyPurp>
\t\t\t\t<SvcLvl>
\t\t\t\t\t<Cd>SEPA</Cd>
\t\t\t\t</SvcLvl>
\t\t\t</PmtTpInf>
\t\t\t<ReqdExctnDt>2021-10-30</ReqdExctnDt>
\t\t\t<ChrgBr>SLEV</ChrgBr>
\t\t\t<CdtTrfTxInf>
\t\t\t\t<Cdtr>
\t\t\t\t\t<Nm>Shell Edited</Nm>
\t\t\t\t</Cdtr>
\t\t\t\t<CdtrAcct>
\t\t\t\t\t<Id>
\t\t\t\t\t\t<IBAN>12345 e</IBAN>
\t\t\t\t\t</Id>
\t\t\t\t</CdtrAcct>
\t\t\t\t<PmtId>
\t\t\t\t\t<EndToEndId>ymof4q7g/55</EndToEndId>
\t\t\t\t</PmtId>
\t\t\t\t<amount>
\t\t\t\t\t<InstdAmt Ccy='EUR' >123.33</InstdAmt>
\t\t\t\t</amount>
\t\t\t\t<RmtInf>
\t\t\t\t\t<Ustrd></Ustrd>
\t\t\t\t</RmtInf>
\t\t\t</CdtTrfTxInf>
\t\t\t<CtrlSum>123.33</CtrlSum>
\t\t\t<NbOfTxs>1</NbOfTxs>
\t\t</PmtInf>
\t</CstmrCdtTrfInitn>
</Document>
`

        expect(objectToXML(realLifeSample)).toBe(`${realLifeSampleFormatted}`.substring(55).replace(/\t/g, '  ').replace(/  +/g, "").replace(/[\r\n]+/g, ''))
        expect(`<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n${objectToXML(realLifeSample, true)}`).toBe(realLifeSampleFormatted);
        expect(formatXML(`<?xml version="1.0" encoding="utf-8" standalone="yes"?>${objectToXML(realLifeSample, false)}`)).toBe(realLifeSampleFormatted);
    })

})
