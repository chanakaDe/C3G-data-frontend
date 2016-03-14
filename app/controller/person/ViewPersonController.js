/**
 * Created by chanaka on 3/14/16.
 */
function ViewPersonController($scope, personService) {

        personService.viewPersons().then(function (data) {
            console.log(data);
            $scope.allPersons = data.objects;
        });

}