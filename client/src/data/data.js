/**
 * @module data/data
 * Contains demo/test data
 */



(function () {
    "use strict";

    /**
     * Demo/test data
     * @type {data}
     */
    exports.data =  {
        'evaluate': {
            reqResp: [
                {
                    req: { expr: '20 ml[Volume] * 10 mg[Mass]/ml[Volume]' },
                    resp: { succ: true, result: { text: '200 mg[Mass]' } }
                }
            ]
        },
        'convert': {
            reqResp: [
                {
                    req: { value: '2000', fromUnit: 'mg[Mass]', toUnit: 'g[Mass]' },
                    resp: { succ: true, result: { text: '200 mg[Mass]' } }
                }
            ]
        },
        'getunits': {
            reqResp: [
                {
                    req: { grp: '' },
                    resp: { succ: true, result: { units: ["X[Count]","kg[Mass]","g[Mass]","mg[Mass]","mcg[Mass]","nanog[Mass]","mol[Molar]","mmol[Molar]","kg[Weight]","g[Weight]","m^s[Bsa]","l[Volume]","dl[Volume]","ml[Volume]","mcl[Volume]","sec[Time]","min[Time]","hr[Time]","day[Time]","week[Time]","mo[Time]","yr[Time]","m[Distance]","cm[Distance]"] }}                    
                },
                {
                    req: { grp: 'Mass' },
                    resp: { succ: true, result: { units: ["kg[Mass]","g[Mass]","mg[Mass]","mcg[Mass]","nanog[Mass]"] }}
                }
            ]
        }
    };

})();

