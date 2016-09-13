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
        .constant("SESSIONS", {
            "WORK": 1500,
            "BREAK": 300,
            "LONG_BREAK": 1800
        });
})();
