angular.module("demoApp.controllers", []);
angular.module('demoApp.resources', []);
angular.module('demoApp.services', []);
angular.module('demoApp.directives', []);

angular.module('demoApp',["demoApp.controllers","demoApp.resources","demoApp.services","demoApp.directives","ui.sortable","ngResource","ngRoute"])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/demo1/1', {
			templateUrl: 'app/views/demo1.html',
			controller: 'demo1_1Controller'
		});
		
		$routeProvider.when('/demo1/2', {
			templateUrl: 'app/views/demo1.html',
			controller: 'demo1_2Controller'
		});
		
		$routeProvider.when('/demo1/3', {
			templateUrl: 'app/views/demo1.html',
			controller: 'demo1_3Controller'
		});
		
		$routeProvider.otherwise(
				{redirectTo: '/demo1/1'}
		);
		
	}]);