/**
 * @module views/templates/result
 */

/*global $$ */

(function () {
    "use strict";

    /**
     * Create the view
     * @param app {app} provides the app functionality
     * @returns {view} Returns the view
     */
    exports.view = function (app) {
        //noinspection JSUnresolvedFunction
        var debug = app.debug('client:views:templates:result');
        var id = 'result_template';
        var view = { template: 'result', id: id };

        debug('view');
        //noinspection JSValidateTypes
        return view;
    };

    /**
     * Initializes the view
     * Uses the webix $$ to get the view
     * @param app {app} provides the app functionality
     */
    exports.init = function (app) {
        //noinspection JSUnresolvedFunction
        var debug = app.debug('client:views:templates:result');
        debug('init');

        //noinspection JSUnresolvedVariable
        app.bus.controller.subscribe('*.result', function (data /*, envelope */) {
            //noinspection JSUnresolvedFunction
            debug('result', data.result);
            $$('result_template').setHTML(data.result);
        });

    };

})();