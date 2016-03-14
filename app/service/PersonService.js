/**
 * Created by chanaka on 3/13/16.
 */
module.factory('personService', function ($http) {

    var personService = {

        viewPersons: function () {

            return $http({
                method: "GET",
                headers: headers,
                url: host.person
            }).then(function (response) {
                return response.data;
            });
        },
        addNewPerson: function (data) {
            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.person
            }).then(function (reponse) {
                return reponse.data;
            });
        }
    };
    return personService;
})
;