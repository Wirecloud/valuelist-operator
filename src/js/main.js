/*
 * value-list-filter
 * https://github.com/Wirecloud/value-list-filter-operator
 *
 * Copyright (c) 2017-2018 CoNWeT Lab., Universidad Politecnica de Madrid
 * Licensed under the MIT license.
 */

(function () {

    "use strict";

    MashupPlatform.wiring.registerCallback("indata", (indata) => {
        var attribute = MashupPlatform.prefs.get('attributes');
        var outdata = indata.map((item) => {return item[attribute]});
        MashupPlatform.wiring.pushEvent("outdata", outdata);
    });

})();
