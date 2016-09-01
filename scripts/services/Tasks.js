(function() {
    function Tasks($firebaseArray) {
        var Tasks = {};
        var ref = firebase.database().ref();
        var tasks = $firebaseArray(ref);

        Tasks.all = tasks;

        Tasks.newItem = "";

        Tasks.addItem = function() {
            tasks.$add({ title: Tasks.newItem });
            Tasks.newItem = "";
        };

        Tasks.removeItem = function(item) {
            tasks.$remove(item);
        };

        return Tasks;
    }

    angular
        .module('pomoresso')
        .factory('Tasks', ['$firebaseArray', Tasks]);
})();
