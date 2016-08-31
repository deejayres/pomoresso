(function() {
    function Sessions($interval, SESSIONS) {
        var Sessions = {};

        //is the $interval running?
        var intervalRunning = null;

        //how many work sessions completed?
        var completedSessions = 0;

        //the timer ticker
        //default
        Sessions.ticker = SESSIONS.WORK;

        //function to return currect timer amount depending on onBreak.
        function whatSession() {
            if (Sessions.onBreak) {
                if (completedSessions % 4 === 0) {
                    Sessions.ticker = SESSIONS.LONG_BREAK;
                } else {
                    Sessions.ticker = SESSIONS.BREAK;
                }
            } else {
                Sessions.ticker = SESSIONS.WORK;
            }
        }

        //buzz object for ding sound
        var ding = new buzz.sound("/assets/ding.mp3", {
            preload: true
        });

        //is it time for a break?
        Sessions.onBreak = false;

        Sessions.startSession = function() {
            if (!intervalRunning) {
                intervalRunning = $interval(function() {
                    Sessions.ticker--;
                    if (Sessions.ticker === 0) {
                        if (!Sessions.onBreak) {
                            completedSessions++;
                            console.log("Completed Sessions: " + completedSessions);
                        }
                        Sessions.onBreak = !Sessions.onBreak;
                        $interval.cancel(intervalRunning);
                        intervalRunning = null;
                        ding.play();
                        whatSession();
                    }
                }, 1000);
            }
        };

        Sessions.resetSession = function() {
            if (intervalRunning) {
                $interval.cancel(intervalRunning);
                intervalRunning = null;
                whatSession();
            }
        };

        return Sessions;
    }

    angular
        .module('pomoresso')
        .factory('Sessions', ['$interval', 'SESSIONS', Sessions]);
})();
