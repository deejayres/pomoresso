(function() {
    function TimerCtrl(Sessions) {
        this.session = Sessions;
    }

    angular
        .module('pomoresso')
        .controller('TimerCtrl', ['Sessions', TimerCtrl]);
})();
