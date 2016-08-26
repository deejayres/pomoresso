(function() {
    function Sessions($interval) {
        var Sessions = {};

        // duration of session types in seconds
        // var workSession = 1500;
        // var breakSession = 300;
        // var longBreakSession = 1800;

        //short durations for testing
        var workSession = 15;
        var breakSession = 3;
        var longBreakSession = 18;

        //is the $interval running?
        var intervalRunning = null;

        Sessions.ticker = workSession;

        Sessions.startSession = function() {
            intervalRunning = $interval(function() {
                Sessions.ticker--;
                if (Sessions.ticker == 0) {
                    $interval.cancel(intervalRunning);
                }
            }, 1000);
        }

        Sessions.resetSession = function() {
            if (intervalRunning) {
                $interval.cancel(intervalRunning);
                intervalRunning = null;
                Sessions.ticker = workSession;
            }
        }

        return Sessions;
    }

    angular
        .module('pomoresso')
        .factory('Sessions', ['$interval', Sessions]);
})();
