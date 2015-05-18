
(function() {

	'use strict';

	angular
		.module('workoutApp')
		.factory('rep', rep);

		function rep($resource) {

			var Reps = $resource('api/reps', {}, {
				update: {
					method: 'PUT'
				}
			});

			//query APU for reps and return JSON object with get method
			function getReps() {
				return Reps.get().$promise.then(function(results) {
					return results;
				}, function(error) {
					console.log(error);
				});
			}

			return {
				getReps: getReps
			}
		}

})();