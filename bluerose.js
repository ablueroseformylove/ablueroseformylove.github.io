/**
 * Created by krish on 12/21/2017.
 */

// create the module and name it bluerose
// also include ngRoute for all our routing needs
var bluerose = angular.module('bluerose', ['ngRoute']);

// configure our routes
bluerose.config(function($routeProvider) {
    $routeProvider

    // route for the theme page
        .when('/', {
            title : "Log In To Continue",
            description : "",
            templateUrl : 'pages/login.html',
            controller  : 'mainController'
        })

        // route for the incorrect page
        .when('/getin', {
            title : "Are You Ready ???",
            description : "",
            templateUrl : 'pages/getin.html',
            controller  : 'mainController'
        })

        // route for the theme page
        .when('/theme', {
            title : "For My Best Girl In the World - You & Me",
            description : "",
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })

        // route for the redirect page
        .when('/redirect', {
            title : "Loading...",
            description : "",
            templateUrl : 'pages/redirect.html',
            controller  : 'mainController'
        })

        // route for the bday page
        .when('/bday', {
            title :"Happy Birthday My Love... - You & Me",
            description : "",
            templateUrl : 'pages/bday.html',
            controller  : 'mainController'
        })

        // route for the letters page
        .when('/letters', {
            title :"Love Letters -  The Epistles of Pure Emotion...  - You & Me",
            description : "",
            templateUrl : 'pages/letters.html',
            controller  : 'mainController'
        })

        // route for the dreams page
        .when('/dreams', {
            title :"Dreams - For a Life to Love, Laugh and Live Long Together...  - You & Me",
            description : "",
            templateUrl : 'pages/dreams.html',
            controller  : 'mainController'
        })

        // route for the poetry page
        .when('/poetry', {
            title :"Poetry - When Love, Thoughts and Words meet Rhythm...  - You & Me",
            description : "",
            templateUrl : 'pages/poetry.html',
            controller  : 'mainController'
        })

        // route for the playlist page
        .when('/playlist', {
            title :"Playlist - The songs for my girl and me...  - You & Me",
            description : "",
            templateUrl : 'pages/playlist.html',
            controller  : 'mainController'
        })

        // route for the justforyou page
        .when('/justforyou', {
            title :"Just For You - A Chianna Exclusive...  - You & Me",
            description : "",
            templateUrl : 'pages/justforyou.html',
            controller  : 'mainController'
        })

    
});

bluerose.run(['$rootScope', '$route', function($rootScope, $route) {

    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });



    $rootScope.dataSelected = {};

    $rootScope.dataSelected.mainData = {

        general: {
            author: "krish",
            url: "http://www.ablueroseformylove.github.io",
            logo: "./images/mylogo.png",
            image: "./images/blue.png",
            lastupdated: "30 September 2017"
        },
        menu: {
            bday: "HAPPY B'DAY MY LOVE",
            letters: "LETTERS",
            poetry: "POETRY",
            dreams: "DREAMS",
            playlist: "PLAYLIST",
            justforyou: "JUST FOR YOU"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/a.jpg",
                pic2: "./images/theme/b.jpg",
                pic3: "./images/theme/c.jpg",
                pic4: "./images/theme/d.jpg",
                pic5: "./images/theme/e.jpg",
                pic6: "./images/theme/f.jpg",
                pic7: "./images/theme/g.jpg",
                pic8: "./images/theme/h.jpg",
                pic1alt: "Happy Bday.",
                pic2alt: "Love You",
                pic3alt: "Honey",
                pic4alt: "Im Yours",
                pic5alt: "My Queen",
                pic6alt: "I do",
                pic7alt: "Tulips",
                pic8alt: "Always"
            },
            landscape: {
                pic1: "./images/theme/i.jpg",
                pic2: "./images/theme/j.jpg",
                pic3: "./images/theme/k.jpg",
                pic1alt: "Happy Bday",
                pic2alt: "My love",
                pic3alt: "je taime"
            }
        },
        overlay: {
            title: "",
            pic: "",

        },
        covers: {
            letters: "./images/covers/letters.jpg",
            poetry: "./images/covers/poetry.jpg",
            dreams: "./images/covers/dreams.jpg",
            playlist: "./images/covers/playlist.jpg",
            bday: "./images/covers/bday.jpg",
            justforyou: "./images/covers/justforyou.jpg"
        },
        strips: {
            jetaimemob: "./images/strips/jetaime.jpg"
        },
        bday: {

            title: "HAPPY B'DAY",
            desc: "Wish You The Best Birthday Yet.."

        },
        letters: {
            title: "LOVE LETTERS",
            desc: "The Epistles of Pure Emotion...",
            head: "",
            intro: "",
            list: [
                {
                    href: "",
                    title: "FIRST TEST",
                    cover: "",
                    pic: "./images/letters/10.jpg",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "SECOND TEST",
                    cover: "",
                    pic: "./images/letters/14.jpg",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "THIRD TEST",
                    cover: "",
                    pic: "./images/letters/19.jpg",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "FOURTH TEST",
                    cover: "",
                    pic: "./images/letters/20.jpg",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                }
            ]

        },
        poetry: {
            title: "POETRY",
            desc: "When Love, Thoughts and Words meet Rhythm...",
            head: "",
            intro: "",
            list: [
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                }
            ]
        },
        dreams: {
            title: "DREAMS",
            desc: "For a Life to Love, Laugh and Live Long Together...",
            head: "",
            intro: "",
            list: [
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                },
                {
                    href: "",
                    title: "",
                    cover: "",
                    pic: "",
                    lines: [
                        {
                            a: "",
                            b: "",
                            c: ""
                        }
                    ]
                }
            ]
        },
        playlist: {
            title: "PLAYLIST",
            desc: "The songs for my girl and me...",
            head: "",
            intro: "",
            list:[
                {
                    href: "",
                    title: "",
                    desc: "",
                    pic: ""
                }
            ]
        },
        justforyou: {
            title: "JUST FOR YOU",
            desc: "A Chianna Exclusive...",
            head: "",
            intro: "",
            list: [
                {
                    href: "",
                    title: "",
                    desc: "",
                    pic: ""
                }
            ]

        },
        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2017. All Rights Reserved."
        }
    };



}
]);



// create the controller and inject Angular's $scope
bluerose.controller('mainController', function($rootScope, $scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    document.body.scrollTop = 0;

    // inject rootScope variables
    $rootScope.credentials = "zeinshaun17sep2017";
    $rootScope.valid = false;

    $rootScope.closed = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";
    };

    $rootScope.opened = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };


    $rootScope.logId = function() {

        var c = $scope.user + $scope.pwd;

        if(c===$rootScope.credentials) {

        $rootScope.valid = true;
        // alert($rootScope.valid);

            var x= document.getElementById("redirect");
            x.style.display="block";
        }
        else {

            $rootScope.valid = false;
            // alert($rootScope.valid);

            var z= document.getElementById("login");
            z.style.display="none";
            var x= document.getElementById("incorrect");
            x.style.display="block";
        }
    };

    $rootScope.tryAgain = function() {

        var z= document.getElementById("incorrect");
        z.style.display="none";
        var x= document.getElementById("login");
        x.style.display="block";
    };





});
