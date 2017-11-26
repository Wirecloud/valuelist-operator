/*
 * valuelist
 * https://github.com/aarranz/valuelist-operator
 *
 * Copyright (c) 2017 Vendor
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
