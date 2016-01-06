/**
 * Created by hsenid on 12/18/15.
 */
var app=angular.module('myapp',[])

app.controller('indexCtrl',function($scope){
    $scope.ServiceName=[
        {
            service:"Architec",
            details:"architec your house"
        },
        {
            service:"Engineering",
            details:"Plan your House"
        },
        {
            service:"Engineering",
            details:"Plan your House"
        }

    ]
})
