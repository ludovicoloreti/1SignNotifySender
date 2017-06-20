angular.module('app.controllers', [])
.controller("homeCtrl", function($scope, $rootScope, $http) {
  $scope.form = {};
  $scope.data = {};
  var defaultForm = [titolo = undefined,msg = undefined]
  $scope.data = angular.copy(defaultForm);

  $scope.sendNotification = function(data) {
    var msg = data.msg;
    var title = data.title;
    var url = 'https://onesignal.com/api/v1/notifications';
    if(msg===''){
      var paramenters = JSON.stringify({
        'app_id':stash.get('appID'),
        'contents': {"en": msg, "it": msg},
        "included_segments":["All"]
      });
    }else{
      parameters = JSON.stringify({
        'app_id':stash.get('appID'),
        'contents': {"en": msg, "it": msg},
        'headings':{"en":title, "it": title},
        "included_segments":["All"]
      });
    }

    $http.post(url, parameters, {
      headers : {
        'Content-Type':'application/json; charset=utf-8',
        'Authorization':'Basic '+stash.get('apiKey')
      }
    }).then(function successCallback(response) {
      console.log(response)
    }, function errorCallback(response) {
      console.log(response)
    });
  }
})


.controller("regCtrl", function($scope, $window) {

  $scope.salvaDati = function(data) {
    console.log(data)
    appID = data.appid;
    apiKey = data.apikey;
    if (appID == "" || apiKey == "") {
      console.log("Errorino! mmmmh...",data.appid, data.apikey)
    } else {
      stash.set('appID', appID);
      stash.set('apiKey', apiKey);
      window.location.reload();
    }
  }
  $scope.ai = stash.get('appID');
  $scope.ak = stash.get('apiKey');

});
