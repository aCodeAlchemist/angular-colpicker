angular.module('angularColpick', [])
			.directive('colpkr', [function () {
				return {
					restrict: 'A',
					scope: {
						theme : "@theme",
						ngModel : "="
					},
					link: function postLink(scope, iElement, iAttrs) {

						theme = scope.theme || "light";

						$(iElement).colpick({
							layout:'hex',
							submit:0,
							colorScheme:theme,
							onChange:function(hsb, hex, rgb, iElement, bySetColor) {
								scope.$evalAsync(function () {
									if(!bySetColor) scope.ngModel = '#' + hex;
								});
							}
						});
					}
				};
			}]);