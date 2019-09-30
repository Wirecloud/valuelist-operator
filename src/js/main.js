/*
 * value-list-filter
 * https://github.com/Wirecloud/value-list-filter-operator
 *
 * Copyright (c) 2017-2018 CoNWeT Lab., Universidad Politecnica de Madrid
 * Licensed under the MIT license.
 */

(function () {

    "use strict";

    var parseInputEndpointData = function parseInputEndpointData(data) {
        if (typeof data === "string") {
            try {
                data = JSON.parse(data);
            } catch (e) {
                throw new MashupPlatform.wiring.EndpointTypeError();
            }
        }

        if (data != null && !Array.isArray(data)) {
            throw new MashupPlatform.wiring.EndpointTypeError();
        }

        return data;
    };

    var index = function index(obj, i) {
        return obj == null ? null : obj[i];
    };

    var filterData = function filterData(data) {
        // `this` is the path array
        var value = this.reduce(index, data);
        return (value == undefined ? null : value);
    };

    var filterList = function filterList(indata) {
        indata = parseInputEndpointData(indata);

        var send_nulls = MashupPlatform.prefs.get("send_nulls");
        if (indata == null && send_nulls) {
            return MashupPlatform.wiring.pushEvent('outdata', null);
        } else if (indata == null) {
            return; // do nothing
        }

        var path = MashupPlatform.prefs.get('prop_name');
        if (path != "") {
            path = path.split('.');
            var outdata = indata.map(filterData, path);

            if (!send_nulls) {
                outdata = outdata.filter(value => {return value != null});
            }
            MashupPlatform.wiring.pushEvent("outdata", outdata);
        }
    };

    /* TODO
     * this if is required for testing, but we have to search a cleaner way
     */
    if (window.MashupPlatform != null) {
        MashupPlatform.wiring.registerCallback("indata", filterList);
    }

    /* test-code */
    window.filterList = filterList;
    /* end-test-code */

})();
