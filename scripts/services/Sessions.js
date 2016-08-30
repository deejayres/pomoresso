(function() {
    function Sessions($interval, SESSIONS) {
        var Sessions = {};

        //is the $interval running?
        var intervalRunning = null;

        //the timer ticker
        //default
        Sessions.ticker = SESSIONS.WORK

        //function to return currect timer amount depending on onBreak.
        function whatSession() {
            if (Sessions.onBreak) {
                Sessions.ticker = SESSIONS.BREAK;
            } else {
                Sessions.ticker = SESSIONS.WORK;
            }
        };

        //is it time for a break?
        Sessions.onBreak = false;

        Sessions.startSession = function() {
            intervalRunning = $interval(function() {
                Sessions.ticker--;
                if (Sessions.ticker == 0) {
                    Sessions.onBreak = !Sessions.onBreak;
                    $interval.cancel(intervalRunning);
                    whatSession();
                }
            }, 1000);
        }

        Sessions.resetSession = function() {
            if (intervalRunning) {
                $interval.cancel(intervalRunning);
                intervalRunning = null;
                Sessions.ticker = SESSIONS.WORK;
            }
        }

        return Sessions;
    }

    angular
        .module('pomoresso')
        .factory('Sessions', ['$interval', 'SESSIONS', Sessions]);
})();
