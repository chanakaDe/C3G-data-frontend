/**
 * Created by chanaka on 3/13/16.
 */
function AddPersonController($scope, personService) {

    /**
     * Initializing arrays and variables.
     * @type {Array}
     */
    $scope.allPersons = [];
    $scope.person = {
        name: '',
        phone: ''
    };

    $scope.savePerson = function () {

        $scope.errors = [];

        if ($scope.person.name == '') {
            $scope.errors.push("Error");
            document.getElementById("name").style.backgroundColor = "#FFB2B2";
            $.notify("NAME IS MANDATORY", "error");
        } else {
            document.getElementById("name").style.backgroundColor = "white";
        }
        if ($scope.person.phone == '') {
            $scope.errors.push("Error");
            document.getElementById("phone").style.backgroundColor = "#FFB2B2";
            $.notify("PHONE NUMBER IS MANDATORY", "error");
        } else {
            document.getElementById("phone").style.backgroundColor = "white";
        }
        if ($scope.errors.length > 0) {
            return;
        }

        personService.viewPersons().then(function (data) {
            $scope.allPersons = data.objects;

            try {
                var generatedId = parseInt($scope.allPersons[$scope.allPersons.length - 1].id) + 1;
            } catch (Exception) {
                generatedId = 1;
            }

            var person = {
                id: generatedId,
                name: $scope.person.name,
                phone: $scope.person.phone
            };
            personService.addNewPerson(person).then(function (data) {
                $scope.person = {
                    name: '',
                    phone: ''
                };
                $.notify("NEW PERSON ADDED SUCCESSFULLY", "success");
            });

        });
    };

}