(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: true
            });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: 'templates/landing.html'
            });
    }

    angular
        .module('pomoresso', ['ui.router', 'firebase'])
        .config(config)
        // duration of session types in seconds
        // work = 1500;
        // break = 300;
        // long_break = 1800;

        //short durations for testing
        .constant("SESSIONS", {
            "WORK": 15,
            "BREAK": 3,
            "LONG_BREAK": 18
        });
})();
