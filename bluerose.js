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

        // route for the whenwemet page
        .when('/whenwemet', {
            title :"When We Met... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/whenwemet.html',
            controller  : 'mainController'
        })

        // route for the everysong page
        .when('/everysong', {
            title :"Every Song... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/everysong.html',
            controller  : 'mainController'
        })

        // route for the brokenglass page
        .when('/brokenglass', {
            title :"Broken Glass... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/brokenglass.html',
            controller  : 'mainController'
        })

        // route for the nakedshowers page
        .when('/nakedshowers', {
            title :"Naked Showers... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/nakedshowers.html',
            controller  : 'mainController'
        })

        // route for the timezones page
        .when('/timezones', {
            title :"Timezones... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/timezones.html',
            controller  : 'mainController'
        })

        // route for the youmademe page
        .when('/youmademe', {
            title :"You Made Me... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/youmademe.html',
            controller  : 'mainController'
        })

        // route for the imyours page
        .when('/imyours', {
            title :"I'm Yours... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/imyours.html',
            controller  : 'mainController'
        })

        // route for the thehealthfactor page
        .when('/thehealthfactor', {
            title :"The Health Factor... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/thehealthfactor.html',
            controller  : 'mainController'
        })

        // route for the prettystupidthings page
        .when('/prettystupidthings', {
            title :"Pretty Stupid Things... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/prettystupidthings.html',
            controller  : 'mainController'
        })

        // route for the blessings page
        .when('/blessings', {
            title :"Blessings... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/blessings.html',
            controller  : 'mainController'
        })

        // route for the 22days page
        .when('/22days', {
            title :"22 Days... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/22days.html',
            controller  : 'mainController'
        })

        // route for the sodeep page
        .when('/sodeep', {
            title :"So Deep... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/sodeep.html',
            controller  : 'mainController'
        })

        // route for the 5050troubles page
        .when('/5050troubles', {
            title :"50-50 Troubles... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/5050troubles.html',
            controller  : 'mainController'
        })

        // route for the mycoo page
        .when('/mycoo', {
            title :"My COO... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/mycoo.html',
            controller  : 'mainController'
        })

        // route for the trueemotions page
        .when('/trueemotion', {
            title :"True Emotions... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/trueemotion.html',
            controller  : 'mainController'
        })

        // route for the picturetroubles page
        .when('/picturetroubles', {
            title :"Picture Troubles... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/picturetroubles.html',
            controller  : 'mainController'
        })

        // route for the busybabe page
        .when('/busybabe', {
            title :"Busy Babe... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/busybabe.html',
            controller  : 'mainController'
        })

        // route for the justhow page
        .when('/justhow', {
            title :"Just How... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/justhow.html',
            controller  : 'mainController'
        })

        // route for the havefun page
        .when('/havefun', {
            title :"Have Fun... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/havefun.html',
            controller  : 'mainController'
        })

        // route for the highschoolmusical page
        .when('/highschoolmusical', {
            title :"High School Musical... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/highschoolmusical.html',
            controller  : 'mainController'
        })

        // route for the miracles page
        .when('/miracles', {
            title :"Miracles... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/miracles.html',
            controller  : 'mainController'
        })

        // route for the justunderstand page
        .when('/justunderstand', {
            title :"Just Understand... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/justunderstand.html',
            controller  : 'mainController'
        })

        // route for the onemonth page
        .when('/onemonth', {
            title :"It's Been A Month... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/onemonth.html',
            controller  : 'mainController'
        })

        // route for the loveandtrust page
        .when('/loveandtrust', {
            title :"Love And Trust... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/loveandtrust.html',
            controller  : 'mainController'
        })

        // route for the badday page
        .when('/badday', {
            title :"Bad Day... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/badday.html',
            controller  : 'mainController'
        })

        // route for the livetobehappy page
        .when('/livetobehappy', {
            title :"Live To Be Happy... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/livetobehappy.html',
            controller  : 'mainController'
        })

        // route for the unnecessarystress page
        .when('/unnecessarystress', {
            title :"Unnecessary Stress... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/unnecessarystress.html',
            controller  : 'mainController'
        })

        // route for the pleasure page
        .when('/pleasure', {
            title :"Pleasure... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/pleasure.html',
            controller  : 'mainController'
        })

        // route for the time page
        .when('/time', {
            title :"Time... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/time.html',
            controller  : 'mainController'
        })

        // route for the thefour page
        .when('/thefour', {
            title :"The Four... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/thefour.html',
            controller  : 'mainController'
        })

        // route for the alliswell page
        .when('/alliswell', {
            title :"All Is Well... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/alliswell.html',
            controller  : 'mainController'
        })

        // route for the whatif page
        .when('/whatif', {
            title :"What If... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/whatif.html',
            controller  : 'mainController'
        })

        // route for the lucky page
        .when('/lucky', {
            title :"Lucky... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/lucky.html',
            controller  : 'mainController'
        })

        // route for the jetaime page
        .when('/jetaime', {
            title :"Je T'aime... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/jetaime.html',
            controller  : 'mainController'
        })

        // route for the comingthere page
        .when('/comingthere', {
            title :"Coming There... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/comingthere.html',
            controller  : 'mainController'
        })

        // route for the whenwelove page
        .when('/whenwelove', {
            title :"When We Love... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/whenwelove.html',
            controller  : 'mainController'
        })

        // route for the youwill page
        .when('/youwill', {
            title :"You Will... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/youwill.html',
            controller  : 'mainController'
        })

        // route for the happiestbday page
        .when('/happiestbday', {
            title :"Happiest Birthday To You Hon... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/happiestbday.html',
            controller  : 'mainController'
        })

        // route for the allforyou page
        .when('/allforyou', {
            title :"All For You... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/allforyou.html',
            controller  : 'mainController'
        })

        // route for the whatifear page
        .when('/whatifear', {
            title :"What I Fear... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/whatifear.html',
            controller  : 'mainController'
        })

        // route for the together page
        .when('/together', {
            title :"Together... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/together.html',
            controller  : 'mainController'
        })

        // route for the dec12017 page
        .when('/dec12017', {
            title :"December 1, 2017... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/dec12017.html',
            controller  : 'mainController'
        })

        // route for the myanalysis page
        .when('/myanalysis', {
            title :"My Analysis... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/myanalysis.html',
            controller  : 'mainController'
        })

        // route for the justreminding page
        .when('/justreminding', {
            title :"Just Reminding... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/justreminding.html',
            controller  : 'mainController'
        })

        // route for the thearcher page
        .when('/thearcher', {
            title :"The Archer Of Life... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/thearcher.html',
            controller  : 'mainController'
        })

        // route for the toughtimes page
        .when('/toughtimes', {
            title :"Tough Times... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/toughtimes.html',
            controller  : 'mainController'
        })

        // route for the iloveyou page
        .when('/iloveyou', {
            title :"I Love You... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/iloveyou.html',
            controller  : 'mainController'
        })

        // route for the bestbdayyet page
        .when('/bestbdayyet', {
            title :"Happy B'Day My Love... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/bestbdayyet.html',
            controller  : 'mainController'
        })

        // route for the thereason page
        .when('/thereason', {
            title :"The Reason... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/thereason.html',
            controller  : 'mainController'
        })

        // route for the theidlemind page
        .when('/theidlemind', {
            title :"The Idle Mind... - Letters - You & Me",
            description : "",
            templateUrl : 'pages/letters/theidlemind.html',
            controller  : 'mainController'
        })

        // route for the howiwish page
        .when('/howiwish', {
            title :"How I Wish... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/howiwish.html',
            controller  : 'mainController'
        })

        // route for the myfavoriteflower page
        .when('/myfavoriteflower', {
            title :"My Favorite Flower... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/myfavoriteflower.html',
            controller  : 'mainController'
        })

        // route for the krishnangrey page
        .when('/krishnangrey', {
            title :"Krishnan Grey... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/krishnangrey.html',
            controller  : 'mainController'
        })

        // route for the youremyworld page
        .when('/youremyworld', {
            title :"You're My World... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/youremyworld.html',
            controller  : 'mainController'
        })

        // route for the dreamland page
        .when('/dreamland', {
            title :"Dreamland... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/dreamland.html',
            controller  : 'mainController'
        })

        // route for the myworld page
        .when('/myworld', {
            title :"My World... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/myworld.html',
            controller  : 'mainController'
        })

        // route for the sunday page
        .when('/sunday', {
            title :"Sunday... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/sunday.html',
            controller  : 'mainController'
        })

        // route for the youareworth page
        .when('/youareworth', {
            title :"You Are Worth... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/youareworth.html',
            controller  : 'mainController'
        })

        // route for the lovelaughlive page
        .when('/lovelaughlive', {
            title :"Let's Love, Laugh and Live... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/lovelaughlive.html',
            controller  : 'mainController'
        })

        // route for the whenimissyou page
        .when('/whenimissyou', {
            title :"When I Miss You... - Poetry - You & Me",
            description : "",
            templateUrl : 'pages/poetry/whenimissyou.html',
            controller  : 'mainController'
        })


        // route for the theolympicdream page
        .when('/theolympicdream', {
            title :"The Olympic Dream... - Dreams - You & Me",
            description : "",
            templateUrl : 'pages/dreams/theolympicdream.html',
            controller  : 'mainController'
        })

        // route for dreamcash page
        .when('/dreamcash', {
            title :"The Cash Bag Dream... - Dreams - You & Me",
            description : "",
            templateUrl : 'pages/dreams/dreamcash.html',
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
            pic: ""

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
            head: "THE SCRIPTS OF LOVE",
            intro: "Our journey is a lovely one from since we met.. We wrote some beautiful and lovely words filled with love for each other.. Lets re-live them again, as it happened...",
            list: [
                {
                    href: "#whenwemet",
                    title: "WHEN WE MET",
                    pic: "./images/letters/thumb/1.jpg"
                },
                {
                    href: "#everysong",
                    title: "EVERY SONG",
                    pic: "./images/letters/thumb/2.jpg"
                },
                {
                    href: "#brokenglass",
                    title: "BROKEN GLASS",
                    pic: "./images/letters/thumb/3.jpg"
                },
                {
                    href: "#nakedshowers",
                    title: "NAKED SHOWERS",
                    pic: "./images/letters/thumb/4.jpg"
                },
                {
                    href: "#timezones",
                    title: "TIMEZONES",
                    pic: "./images/letters/thumb/5.jpg"
                },
                {
                    href: "#youmademe",
                    title: "YOU MADE ME",
                    pic: "./images/letters/thumb/6.jpg"
                },
                {
                    href: "#imyours",
                    title: "I'M YOURS",
                    pic: "./images/letters/thumb/7.jpg"
                },
                {
                    href: "#thehealthfactor",
                    title: "THE HEALTH FACTOR",
                    pic: "./images/letters/thumb/8.jpg"
                },
                {
                    href: "#prettystupidthings",
                    title: "PRETTY STUPID THINGS",
                    pic: "./images/letters/thumb/9.jpg"
                },
                {
                    href: "#blessings",
                    title: "BLESSINGS",
                    pic: "./images/letters/thumb/10.jpg"
                },
                {
                    href: "#22days",
                    title: "22 DAYS",
                    pic: "./images/letters/thumb/11.jpg"
                },
                {
                    href: "#sodeep",
                    title: "SO DEEP",
                    pic: "./images/letters/thumb/12.jpg"
                },
                {
                    href: "#5050troubles",
                    title: "50-50 TROUBLES",
                    pic: "./images/letters/thumb/13.jpg"
                },
                {
                    href: "#mycoo",
                    title: "MY COO",
                    pic: "./images/letters/thumb/14.jpg"
                },
                {
                    href: "#trueemotion",
                    title: "TRUE EMOTION",
                    pic: "./images/letters/thumb/15.jpg"
                },
                {
                    href: "#picturetroubles",
                    title: "PICTURE TROUBLES",
                    pic: "./images/letters/thumb/16.jpg"
                },
                {
                    href: "#busybabe",
                    title: "BUSY BABE",
                    pic: "./images/letters/thumb/17.jpg"
                },
                {
                    href: "#justhow",
                    title: "JUST HOW ???",
                    pic: "./images/letters/thumb/18.jpg"
                },
                {
                    href: "#havefun",
                    title: "HAVE FUN",
                    pic: "./images/letters/thumb/19.jpg"
                },
                {
                    href: "#highschoolmusical",
                    title: "HIGH SCHOOL MUSICAL",
                    pic: "./images/letters/thumb/20.jpg"
                },
                {
                    href: "#miracles",
                    title: "MIRACLES",
                    pic: "./images/letters/thumb/21.jpg"
                },
                {
                    href: "#justunderstand",
                    title: "JUST UNDERSTAND",
                    pic: "./images/letters/thumb/22.jpg"
                },
                {
                    href: "#onemonth",
                    title: "IT'S BEEN A MONTH",
                    pic: "./images/letters/thumb/23.jpg"
                },
                {
                    href: "#loveandtrust",
                    title: "LOVE AND TRUST",
                    pic: "./images/letters/thumb/24.jpg"
                },
                {
                    href: "#badday",
                    title: "BAD DAY",
                    pic: "./images/letters/thumb/25.jpg"
                },
                {
                    href: "#livetobehappy",
                    title: "LIVE TO BE HAPPY",
                    pic: "./images/letters/thumb/26.jpg"
                },
                {
                    href: "#unnecessarystress",
                    title: "UNNECESSARY STRESS",
                    pic: "./images/letters/thumb/27.jpg"
                },
                {
                    href: "#pleasure",
                    title: "PLEASURE",
                    pic: "./images/letters/thumb/28.jpg"
                },
                {
                    href: "#time",
                    title: "TIME",
                    pic: "./images/letters/thumb/29.jpg"
                },
                {
                    href: "#thefour",
                    title: "THE FOUR",
                    pic: "./images/letters/thumb/30.jpg"
                },
                {
                    href: "#alliswell",
                    title: "ALL IS WELL",
                    pic: "./images/letters/thumb/31.jpg"
                },
                {
                    href: "#whatif",
                    title: "WHAT IF",
                    pic: "./images/letters/thumb/32.jpg"
                },
                {
                    href: "#lucky",
                    title: "LUCKY",
                    pic: "./images/letters/thumb/33.jpg"
                },
                {
                    href: "#jetaime",
                    title: "JE T'AIME",
                    pic: "./images/letters/thumb/34.jpg"
                },
                {
                    href: "#comingthere",
                    title: "COMING THERE",
                    pic: "./images/letters/thumb/35.jpg"
                },
                {
                    href: "#whenwelove",
                    title: "WHEN WE LOVE",
                    pic: "./images/letters/thumb/36.jpg"
                },
                {
                    href: "#youwill",
                    title: "YOU WILL",
                    pic: "./images/letters/thumb/37.jpg"
                },
                {
                    href: "#happiestbday",
                    title: "HAPPIEST B'DAY",
                    pic: "./images/letters/thumb/38.jpg"
                },
                {
                    href: "#allforyou",
                    title: "ALL FOR YOU",
                    pic: "./images/letters/thumb/39.jpg"
                },
                {
                    href: "#whatifear",
                    title: "WHAT I FEAR",
                    pic: "./images/letters/thumb/40.jpg"
                },
                {
                    href: "#together",
                    title: "TOGETHER",
                    pic: "./images/letters/thumb/41.jpg"
                },
                {
                    href: "#dec12017",
                    title: "DECEMBER 1, 2017",
                    pic: "./images/letters/thumb/42.jpg"
                },
                {
                    href: "#myanalysis",
                    title: "MY ANALYSIS",
                    pic: "./images/letters/thumb/43.jpg"
                },
                {
                    href: "#justreminding",
                    title: "JUST REMINDING",
                    pic: "./images/letters/thumb/44.jpg"
                },
                {
                    href: "#thearcher",
                    title: "THE ARCHER OF LIFE",
                    pic: "./images/letters/thumb/45.jpg"
                },
                {
                    href: "#toughtimes",
                    title: "TOUGH TIMES",
                    pic: "./images/letters/thumb/46.jpg"
                },
                {
                    href: "#iloveyou",
                    title: "I LOVE YOU",
                    pic: "./images/letters/thumb/47.jpg"
                },
                {
                    href: "#bestbdayyet",
                    title: "HAPPY B'DAY MY LOVE",
                    pic: "./images/letters/thumb/48.jpg"
                },
                {
                    href: "#thereason",
                    title: "THE REASON",
                    pic: "./images/letters/thumb/49.jpg"
                },
                {
                    href: "#theidlemind",
                    title: "THE IDLE MIND",
                    pic: "./images/letters/thumb/50.jpg"
                }

            ]

        },
        poetry: {
            title: "POETRY",
            desc: "When Love, Thoughts and Words meet Rhythm...",
            head: "THE VERSES OF LOVE",
            intro: "We pour our hearts out when we miss each other.. And it has a beautiful rhythm at times that makes it a heartfelt poem.. Poetry is beautiful when synced with love.. It will feel lovely everytime we go through them...",
            list: [
                {
                    href: "#howiwish",
                    title: "HOW I WISH",
                    pic: "./images/poetry/thumb/1.jpg"
                },
                {
                    href: "#myfavoriteflower",
                    title: "MY FAVORITE FLOWER",
                    pic: "./images/poetry/thumb/2.jpg"
                },
                {
                    href: "#krishnangrey",
                    title: "KRISHNAN GREY",
                    pic: "./images/poetry/thumb/3.jpg"
                },
                {
                    href: "#youremyworld",
                    title: "YOU'RE MY WORLD",
                    pic: "./images/poetry/thumb/4.jpg"
                },
                {
                    href: "#dreamland",
                    title: "DREAMLAND",
                    pic: "./images/poetry/thumb/5.jpg"
                },
                {
                    href: "#myworld",
                    title: "MY WORLD",
                    pic: "./images/poetry/thumb/6.jpg"
                },
                {
                    href: "#sunday",
                    title: "SUNDAY",
                    pic: "./images/poetry/thumb/7.jpg"
                },
                {
                    href: "#youareworth",
                    title: "YOU ARE WORTH",
                    pic: "./images/poetry/thumb/8.jpg"
                },
                {
                    href: "#lovelaughlive",
                    title: "LOVE, LAUGH AND LIVE",
                    pic: "./images/poetry/thumb/9.jpg"
                },
                {
                    href: "#whenimissyou",
                    title: "WHEN I MISS YOU",
                    pic: "./images/poetry/thumb/10.jpg"
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
                    href: "#theolympicdream",
                    title: "THE OLYMPIC DREAM",
                    pic: "./images/dreams/thumb/theolympicdream.jpg"
                },
                {
                    href: "#dreamcash",
                    title: "THE CASH BAG DREAM",
                    pic: "./images/dreams/thumb/dreamcash.jpg"
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
                    href: "https://www.youtube.com/watch?v=DNyKDI9pn0Q",
                    title: "MY HEART WILL GO ON",
                    desc: "Celine Dion"
                },
                {
                    href: "https://www.youtube.com/watch?v=AJtDXIazrMo",
                    title: "LOVE ME LIKE YOU DO",
                    desc: "Ellie Goulding"
                },
                {
                    href: "https://www.youtube.com/watch?v=YvPt-cJTp6I",
                    title: "SHAPE OF YOU",
                    desc: "Ed Sheeran"
                },
                {
                    href: "https://www.youtube.com/watch?v=8xg3vE8Ie_E",
                    title: "LOVE STORY",
                    desc: "Taylor Swift"
                },
                {
                    href: "https://www.youtube.com/watch?v=rtOvBOTyX00",
                    title: "A THOUSAND YEARS",
                    desc: "Christina Perri"
                },
                {
                    href: "https://www.youtube.com/watch?v=SMs0GnYze34",
                    title: "LET ME LOVE YOU",
                    desc: "DJ Snake ft. Jb"
                },
                {
                    href: "https://www.youtube.com/watch?v=1-xGerv5FOk",
                    title: "I'M NOT ALONE",
                    desc: "Alan Walker"
                },
                {
                    href: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
                    title: "WAKA WAKA",
                    desc: "Shakira"
                },
                {
                    href: "https://www.youtube.com/watch?v=Rv_nBEgwCaw",
                    title: "BANG BANG",
                    desc: "Iwan Rheon"
                },
                {
                    href: "https://www.youtube.com/watch?v=6Mgqbai3fKo",
                    title: "CHANTAJE",
                    desc: "Shakira"
                },
                {
                    href: "https://www.youtube.com/watch?v=qdDVtFvJwUc",
                    title: "LOVE ME",
                    desc: "Jb"
                },
                {
                    href: "https://www.youtube.com/watch?v=LUjn3RpkcKY",
                    title: "MISTLETOE",
                    desc: "Jb"
                },
                {
                    href: "https://www.youtube.com/watch?v=KewfYKJy8YU",
                    title: "LOCA",
                    desc: "Shakira"
                },
                {
                    href: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
                    title: "DESPACITO",
                    desc: "Louis Fonsi ft. Daddy Yankee"
                },
                {
                    href: "https://www.youtube.com/watch?v=cvrBgqMv0PY",
                    title: "TAKE ME WITH YOU",
                    desc: "Juliet Ariel"
                },
                {
                    href: "https://www.youtube.com/watch?v=-9WaaqS-NiY",
                    title: "NEAR",
                    desc: "Jb ft. Sia& Ed Sheeran"
                },
                {
                    href: "https://www.youtube.com/watch?v=ijz62EY5Wms",
                    title: "GHOST",
                    desc: "Alan Walker ft. Halsey"
                },
                {
                    href: "https://www.youtube.com/watch?v=f_EiqPp-vBM",
                    title: "FINALLY FOUND YOU",
                    desc: "Enrique Iglesias"
                },
                {
                    href: "https://www.youtube.com/watch?v=nwYy9S_ZA-o",
                    title: "FIGHTER",
                    desc: "Alan Walker ft. Shawn Mendes"
                },
                {
                    href: "",
                    title: "MORE COMING SOON",
                    desc: "STAY TUNED..."
                }

            ]
        },
        justforyou: {
            title: "JUST FOR YOU",
            desc: "A Chianna Exclusive...",
            head: "",
            intro: "",
            list: [
                {a: "./images/justforyou/1.png"},
                {a: "./images/justforyou/2.jpg"},
                {a: "./images/justforyou/3.jpg"},
                {a: "./images/justforyou/4.jpg"},
                {a: "./images/justforyou/5.jpg"},
                {a: "./images/justforyou/6.jpg"},
                {a: "./images/justforyou/7.png"},
                {a: "./images/justforyou/8.jpg"},
                {a: "./images/justforyou/9.jpg"},
                {a: "./images/justforyou/10.jpg"},
                {a: "./images/justforyou/11.jpg"},
                {a: "./images/justforyou/12.jpg"},
                {a: "./images/justforyou/13.jpg"},
                {a: "./images/justforyou/14.jpg"},
                {a: "./images/justforyou/15.jpg"},
                {a: "./images/justforyou/16.jpg"},
                {a: "./images/justforyou/17.jpg"},
                {a: "./images/justforyou/18.jpg"},
                {a: "./images/justforyou/19.jpg"},
                {a: "./images/justforyou/20.jpg"},
                {a: "./images/justforyou/21.jpg"},
                {a: "./images/justforyou/22.jpg"},
                {a: "./images/justforyou/23.jpg"},
                {a: "./images/justforyou/24.jpg"},
                {a: "./images/justforyou/25.jpg"},
                {a: "./images/justforyou/26.jpg"},
                {a: "./images/justforyou/27.jpg"},
                {a: "./images/justforyou/28.jpg"},
                {a: "./images/justforyou/29.jpg"},
                {a: "./images/justforyou/30.jpg"},
                {a: "./images/justforyou/31.jpg"},
                {a: "./images/justforyou/32.jpg"},
                {a: "./images/justforyou/33.jpg"},
                {a: "./images/justforyou/34.jpg"},
                {a: "./images/justforyou/35.jpg"},
                {a: "./images/justforyou/36.jpg"},
                {a: "./images/justforyou/37.jpg"},
                {a: "./images/justforyou/38.jpg"},
                {a: "./images/justforyou/39.jpg"},
                {a: "./images/justforyou/40.jpg"},
                {a: "./images/justforyou/41.jpg"},
                {a: "./images/justforyou/42.jpg"},
                {a: "./images/justforyou/43.jpg"},
                {a: "./images/justforyou/44.jpg"},
                {a: "./images/justforyou/45.jpg"},
                {a: "./images/justforyou/46.jpg"},
                {a: "./images/justforyou/47.jpg"},
                {a: "./images/justforyou/48.jpg"},
                {a: "./images/justforyou/49.jpg"},
                {a: "./images/justforyou/50.jpg"},
                {a: "./images/justforyou/51.jpg"},
                {a: "./images/justforyou/52.jpg"},
                {a: "./images/justforyou/53.jpg"},
                {a: "./images/justforyou/54.png"},
                {a: "./images/justforyou/55.png"},
                {a: "./images/justforyou/56.png"}            ]

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
