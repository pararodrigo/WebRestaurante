/**
 * Created by Rodrigo on 15/4/15.
 */

var module = angular.module("app", ['ngRoute']);

module.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/inicio.html',
            controller: 'inicio'
        })
        .when('/Fotos', {
            templateUrl: 'view/Fotos.html',
            controller: 'fotos'
        })
        .when('/Menu', {
            templateUrl: 'view/Menu.html',
            controller: 'menu'
        })
        .when('/Platos', {
            templateUrl: 'view/Platos.html',
            controller: 'platos'
        })
        .when('/Localizacion', {
            templateUrl: 'view/Localizacion.html',
            controller: 'localizacion'
        })
        .when('/Mesa', {
            templateUrl: 'view/Mesa.html',
            controller: 'mesa'
        })
        .when('/Video', {
            templateUrl: 'view/video.html',
            controller: 'video'
        })
        .otherwise({
            redirectTo: '/'
        });
});

module.controller("inicio", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_inicio').prop('class','active');
    $('#li_fotos, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
    $('#cabecera2').hide();
    $('#cabecera').show();

})
module.controller("fotos", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_fotos').prop('class','active');
    $('#li_inicio, #li_localizacion, #li_menu, #li_mesa, #li_platos').prop('class','');
    $('#cabecera').hide();
    $('#cabecera2').show();

    // galeria de imagnes//

    $scope.slides=[
        {image:"1.jpg",titulo:'Esta es nuestra zona reservada', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis varius elementum. In euismo"},
        {image:"2.jpg",titulo:'Este es nuestra zona restarante', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis varius elementum. In euismo 01"},
        {image:"3.jpg",titulo:'Mira la presentación de nuetros platos', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis varius elementum. In euismo 02"},
        {image:"4.jpg",titulo:'Mira la presentación de nuetros platos', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis varius elementum. In euismo 03"},
        {image:"5.jpg",titulo:'Este es otro de nuestros salones', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis varius elementum. In euismo 02"},
        {image:"6.jpg",titulo:'Tomate algo en nuestra barra', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis varius elementum. In euismo 02"},
    ];

    $scope.currentIndex=0;

    $scope.setCurrentIndex=function(index){
        $scope.currentIndex=index;
    };

    $scope.isCurrentIndex=function(index){
        return $scope.currentIndex===index;
    };

    $scope.prevSlide=function(){

        $scope.currentIndex = $scope.currentIndex-1;

        if($scope.currentIndex < 0){
            $scope.currentIndex = $scope.slides.length-1;
        }
    };

    $scope.nextSlide=function(){

        $scope.currentIndex = $scope.currentIndex+1;

        if($scope.currentIndex > $scope.slides.length-1){
            $scope.currentIndex = 0;
        }
    };

})
module.controller("menu", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_menu').prop('class','active');
    $('#li_fotos, #li_localizacion, #li_inicio, #li_mesa, #li_platos, #li_video').prop('class','');
    $('#cabecera').hide();
    $('#cabecera2').show();

})
module.controller("platos", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_platos').prop('class','active');
    $('#li_fotos, #li_localizacion, #li_inicio, #li_mesa, #li_menu, #li_video').prop('class','');
    $('#cabecera').hide();
    $('#cabecera2').show();

})
module.controller("mesa", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_mesa').prop('class','active');
    $('#li_fotos, #li_localizacion, #li_inicio, #li_menu, #li_platos, #li_video').prop('class','');
    $('#cabecera').hide();
    $('#cabecera2').show();

})
module.controller("localizacion", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_localizacion').prop('class','active');
    $('#li_fotos, #li_menu, #li_inicio, #li_mesa, #li_platos, #li_video').prop('class','');
    $('#cabecera').hide();
    $('#cabecera2').show();

})
module.controller("video", function($scope, $routeParams) {
    $scope.param = $routeParams.param;

    $('#li_video').prop('class','active');
    $('#li_fotos, #li_menu, #li_inicio, #li_mesa, #li_platos, #li_fotos').prop('class','');
    $('#cabecera').hide();
    $('#cabecera2').show();

})