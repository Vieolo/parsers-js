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
                            background: 'yellow'
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
                    </mainPage>
                </specific>
            </preferences>
        </data>
        `.replace(/ /g, "").replace(/[\r\n]+/g, ''))

    })

})
