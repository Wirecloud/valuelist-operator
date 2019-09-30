/* globals MockMP */

(function () {

    "use strict";

    describe("ValueListFilter", function () {

        beforeAll(function () {
            window.MashupPlatform = new MockMP({
                type: 'operator',
                prefs: {
                    "prop_name": "attr",
                    "send_nulls": true,
                },
                inputs: ['indata'],
                outputs: ['outdata']
            });
        });

        beforeEach(function () {
            MashupPlatform.reset();
        });

        it("supports JSON encoded data", function () {
            filterList('[{"attr": "value"}]');

            expect(MashupPlatform.wiring.pushEvent).toHaveBeenCalledWith('outdata', ["value"]);
        });

        it("does nothing if prop_name is empty", function () {
            MashupPlatform.prefs.set("prop_name", "");

            filterList('[{"attr": "value"}]');

            expect(MashupPlatform.wiring.pushEvent).not.toHaveBeenCalled();
        });

        it("filters multilevel paths", function () {
            MashupPlatform.prefs.set("prop_name", "a.1.c");

            filterList([{"a": [false, {"c": "value"}]}]);

            expect(MashupPlatform.wiring.pushEvent).toHaveBeenCalledWith('outdata', ["value"]);
        });

        it("don't crash when filtering multilevel paths and some level does not exist", function () {
            MashupPlatform.prefs.set("prop_name", "a.1.c");

            filterList([{"a": true}]);

            expect(MashupPlatform.wiring.pushEvent).toHaveBeenCalledWith('outdata', [null]);
        });

        it("throws an Endpoint Value error if data is not valid JSON data", function () {
            expect(function () {
                filterList("{a}");
            }).toThrowError(MashupPlatform.wiring.EndpointTypeError);
        });

        it("throws an Endpoint Type error if data is not a JSON array", function () {
            expect(function () {
                filterList("5");
            }).toThrowError(MashupPlatform.wiring.EndpointTypeError);
        });

        it("throws an Endpoint Type error if data is not an array", function () {
            expect(function () {
                filterList({});
            }).toThrowError(MashupPlatform.wiring.EndpointTypeError);
        });

    });
})();
