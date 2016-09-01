(function() {
    function TaskCtrl(Tasks) {
        this.tasks = Tasks;
    }

    angular
        .module('pomoresso')
        .controller('TaskCtrl', ['Tasks', TaskCtrl]);
})();
