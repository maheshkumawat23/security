cricketApp.controller('homeCtrl', function($scope, $http) {
    $scope.live = {};
    $scope.team = {};
    $scope.taste = 0;
    $scope.quality = 0;
    $scope.quantity = 0;
    $scope.service = 0;
    $scope.hygine = 0;
    $scope.veriety = 0;
	$scope.water = 0;
    $scope.live.location = "select location";
    $scope.live.vendorName = "select vendor";
	$scope.getArray;
	$scope.separator = ",";
	$scope.decimalSeparator=".";
	$scope.showRadio = false;
	$scope.showTable = false;
	$scope.vendorNames = [];
	$scope.locationNames = ["Abhilash","CMC","Dhara","Global Axis B&C","Global Axis D","Global Axis H","Hibu","ITPL","JAL","L-Center","Manyata","Pioneer","Prestige Shantiniketan","Think Campus","Vydehi","Vicotr"];
	$scope.vehicleTypes = ["Bus","Cab"];
    //var ctx = document.getElementById("myChart");
	$scope.totalRecords = "Loading...";
	$scope.overallRating = "Loading...";
	$http.get('api/posts').success(function(data){
			//alert('hello');
			$scope.totalRecords = data.length;
			console.log(data);
			var total = data.length;
            var Punctuality = Ambiance = Behaviour = Skill = Safety = water=0;

            for (var i = 0; i <total; i++) {
                Punctuality += parseInt(data[i].Punctuality);
                Skill += parseInt(data[i].Skill);
                Safety += parseInt(data[i].Safety);
			}
			var pun=amb=beh=ski=saf=war=0;
			pun= Math.round((Punctuality/total)*100)/100;
            ski= Math.round((Skill / total)*100)/100;
            saf= Math.round((Safety / total)*100)/100;
            var overall = pun+ski+saf;
			var travelRating = overall/3;
			$scope.overallRating = travelRating.toFixed(2);
			//$scope.getArray = data;
			//alert('your data is ready please click on Export button');
			
		});
	 $scope.canteenData = [{
	"Abhilash": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"CMC": {
		"location": [
		]
	},
	"Global Axis": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"GRTP": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"ITPB": {
		"location": [{
			"Cab": "Cab"}]
	},
	"L Center": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"Manyata": {
		"location": [{
			"Cab": "Cab"}]
	},
	"Mangnum Blr NSTP": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"Pioneer": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"PSN": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"SJM": {
		"location": [{
			"Cab": "Cab"}
            
           ]
	},
	"Think campus": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"Vydehi": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	}
}];
	
	$scope.changeData = function() {
		  //console.log($scope.selectedLocationName);
             //console.log(Object.keys($scope.canteenData[0].Dhara.location[0]));
            switch($scope.live.location){
                case "Abhilash":
                    $scope.vendorNames =[];
                     for(var i=0;i<$scope.canteenData[0].Abhilash.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].Abhilash.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "CMC" :
                     $scope.vendorNames =[];
                     for(var i=0;i<$scope.canteenData[0].CMC.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].CMC.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Global Axis":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Global Axis'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Global Axis'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "ITPB":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0].ITPB.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].ITPB.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "GRTP":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0].GRTP.location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0].GRTP.location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "L Center":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['L Center'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['L Center'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Manyata":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Manyata'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Manyata'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
				case "Mangnum Blr NSTP":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Mangnum Blr NSTP'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Mangnum Blr NSTP'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Pioneer":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Pioneer'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Pioneer'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "PSN":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['PSN'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['PSN'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "SJM":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['SJM'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['SJM'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Think campus":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Think campus'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Think campus'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                case "Vydehi":
                    $scope.vendorNames=[];
                    for(var i=0;i<$scope.canteenData[0]['Vydehi'].location.length;i++){
                        $scope.vendorNames.push(Object.keys($scope.canteenData[0]['Vydehi'].location[i]));
                    }
                    console.log($scope.vendorNames.length);
                    break;
                
            default :
                $scope.vendorNames = [];

            }
           // console.log(Object.keys($scope.canteenData[0]).length);
            
           // console.log($scope.canteenData[0].Abhilash.location);
	}
    var resetCanvas = function() {
        $('#myChart').remove(); // this is my <canvas> element
        $('#ccontainer').append('<canvas id="myChart" width="500" height="350" style="max-width:500px;margin:auto"></canvas>');
        ctx = document.getElementById("myChart");
    };
	$scope.Download = function() {
		$scope.live.from = $scope.from.toISOString();
        $scope.live.to = $scope.to.toISOString();
		$http.post('api/download',{
			data: $scope.live
		}).success(function(data){
			//alert('hello');
			console.log(data);
			$scope.getArray = data;
			alert('your data is ready please click on Export button');
			
		});
	}
	$scope.DownloadAll = function() {
		//$scope.live.from = $scope.from.toISOString();
       //$scope.live.to = $scope.to.toISOString();
		$http.get('api/posts').success(function(data){
			//alert('hello');
			console.log(data);
			$scope.getArray = data;
			alert('your data is ready please click on Export button');
			
		});
	}
	
	
    $scope.startLive = function(selectedGraph) {
        resetCanvas();
        $scope.live.from = $scope.from.toISOString();
        $scope.live.to = $scope.to.toISOString();
        console.log($scope.from.toISOString());
        console.log($scope.live);
        $http.post('api/request', {
            data: $scope.live

        }).success(function(data) {
            console.log(data);
			$scope.showTable = true;
			$scope.showRadio = true;
			$scope.getArray = data;
            var total = data.length;
            var taste = quality = quantity = service = hygine = veriety = water=0;

            for (var i = 0; i < data.length; i++) {
                taste += parseInt(data[i].Punctuality);
                hygine += parseInt(data[i].Skill);
                veriety += parseInt(data[i].Safety);
				
			}
            $scope.taste = Math.round((taste/total)*100)/100;
            $scope.hygine = Math.round((hygine / total)*100)/100;
            $scope.veriety = Math.round((veriety / total)*100)/100;
            
            //$('#ccontainer').append(');

            var ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: String(selectedGraph),
                data: {
                    labels: ["Q1", "Q4", "Q5"],
                    datasets: [{
                        label: '# Average Feedback',
                        data: [$scope.taste,$scope.hygine, $scope.veriety],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                           
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        })

    }
});