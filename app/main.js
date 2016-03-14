/**
 * Created by chanaka on 8/27/15.
 */
var module = angular.module('data_visualize', ['ngRoute']);

/**
 * Creating system routes with Angular Routes
 */
module.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/view/dashboard.html',
            controller: ''
        }).when('/addPerson', {
            templateUrl: 'app/view/person/addPerson.html',
            controller: ''
        }).when('/viewPerson', {
            templateUrl: 'app/view/person/viewPerson.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
});

/**
 * Added only numbers module.
 */
module.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            function inputValue(val) {
                if (val) {
                    var digits = val.replace(/[^0-9.-]/g, '');

                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }

            ctrl.$parsers.push(inputValue);
        }
    };
});

/**
 * Highlight table row color on click.
 */

var preEl;
var orgBColor;
var orgTColor;

function HighLightTR(el, backColor, textColor) {
    if (typeof(preEl) != 'undefined') {
        preEl.bgColor = orgBColor;
        try {
            ChangeTextColor(preEl, orgTColor);
        } catch (e) {
            ;
        }
    }
    orgBColor = el.bgColor;
    orgTColor = el.style.color;
    el.bgColor = backColor;

    try {
        ChangeTextColor(el, textColor);
    } catch (e) {
        ;
    }
    preEl = el;
}

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
