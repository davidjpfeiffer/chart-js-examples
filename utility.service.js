window.utilityService = (function () {
    'use strict';

    var graphDataSize = 7;

    var utilityService = {
        getRandomScalingFactor: getRandomScalingFactor,
        getRandomDataArray: getRandomDataArray
    };

    return utilityService;

    function getRandomDataArray() {
        var array = [];

        for (var i = 0; i < graphDataSize; i++) {
            array.push(getRandomScalingFactor());
        }

        return array;
    }

    function getRandomScalingFactor() {
        return Math.round(Math.random() * 100)
    };

} ());
