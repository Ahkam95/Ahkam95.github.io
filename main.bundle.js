webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".container img{\r\n\twidth: 250px;\r\n\theight: 250px;;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <h3>Intro..</h3><hr>\n  <p>Hey guys! I am Mohamed Ahkam from Panadura. I am an undergraduate of university of moratuwa.The intention of this webpage is to let u know about my self and to show you some of my activities like adventurous trips and events etc.</p>\n\n  <h3>My Education</h3><hr>\n\n  <p>\n      I did my O/L and A/L in Royal College, Colombo 7, now I’m a second year student of faculty of Engineering, University of Moratuwa.\n  </p>\n\n  <h3>College, Degree</h3><hr>\n\n  <p>\n      College, Degree\n      I following Computer Science and Engineering degree at University of Moratuwa.\n  </p>\n  <h3>Experience</h3><hr>\n\n  <p>\n      I don’t have any working experiences or internship experiences as I am still studying.\n  </p>\n\n  <h3>Activities</h3><hr>\n\n  <p>\n      I have involved in many clubs and societies in my school when I was studying. I was an executive committee member of Tamil literary association, and an organizing committee member of Islamic Society, Royal College. I have involved not only in clubs and societies but also in sports. I played soccer for my school in 2007 to 2009.  Currently I’m playing basketball at University of Moratuwa. \n  </p>\n\n  <h3>Skills</h3><hr>\n\n  <p>\n      I am fluent in all three main languages and have good leadership qualities. As a result, I became a representative of CSE department of batch 2016.  In addition to that I am interested in web development, App development and graphic designing etc. Currently I am developing and embedded system which is used to control our home in an efficient manner. Anyone can control the electrical items which are presented in their home via this embedded system.  </p>\n\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\"></th>\n              <th scope=\"col\">Speaking</th>\n              <th scope=\"col\">Reading</th>\n              <th scope=\"col\">Writing</th>\n            </tr>\n      </thead>\n      <tbody>\n          <tr class=\"table-success\">\n            <th scope=\"row\">Tamil</th>\n            <td>fluent</td>\n            <td>fluent</td>\n            <td>fluent</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Sinhala</th>\n            <td>Fluent</td>\n            <td>Normal</td>\n            <td>Normal</td>\n          </tr>\n          <tr >\n            <th scope=\"row\">English</th>\n            <td>Good</td>\n            <td>fluent</td>\n            <td>fluent</td>\n          </tr>\n        </tbody>\n      </table> \n    </div>\n  </div>\n\n\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__travel_travel_component__ = __webpack_require__("./src/app/travel/travel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'travel',
        component: __WEBPACK_IMPORTED_MODULE_4__travel_travel_component__["a" /* TravelComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    text-align: center;\r\n    -webkit-columns: black;\r\n            columns: black;\r\n    background-color:#fff;\r\n    background-size: cover;\r\n    height: 50px;\r\n    margin-top: 50px;\r\n    padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\n    <a class=\"navbar-brand\" href=\"#\">ASolution</a>\n    <button class=\"navbar-toggler \" type=\"button\"  data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleCollapsed()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div  id=\"navbarColor03\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n      <ul class=\"navbar-nav mr-auto \">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"travel\">Travel Diaries</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"about\">About Me</a>\n        </li>\n      </ul>\n      \n    </div>\n  </nav>\n\n\n<router-outlet></router-outlet>\n\n\n<footer class=\"footer\">ASolution &copy; 2018.</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.collapsed = true;
    }
    AppComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__travel_travel_component__ = __webpack_require__("./src/app/travel/travel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__travel_travel_component__["a" /* TravelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.showcase{\r\n\tmin-height: 500px;\r\n\toverflow: hidden;\r\n    background: url('ahk.cd3ab262ff2f0443cb8b.jpg') no-repeat 0 -450px;\r\n    background-size: cover;\r\n\ttext-align: center;\r\n    background-attachment: fixed;\r\n    color: rgb(7, 7, 7);\r\n    margin-bottom: 30px;\r\n}\r\n.showcase h1{\r\n    margin-top: 200px;\r\n\tfont-size: 60px;\r\n\t\r\n\tmargin-bottom: 10px;\r\n\tcolor: #fff;\r\n}\r\n.showcase p{\r\n\tmargin-top: 20px;\r\n\tcolor: #fff;\r\n}\r\n.news{\r\n\tpadding: 10px;\r\n\tcolor: #fff;\r\n\tbackground: #35424a;\r\n\tborder-bottom: 5px #e8491d solid;\r\n}\r\n.news h1{\r\n\tfloat:left;\r\n}\r\n.news form{\r\n\tfloat: right;\r\n\tmargin-top: 20px;\r\n}\r\n.news input[type=\"email\"]{\r\n\tpadding: 4px;\r\n\theight: 25px;\r\n\twidth: 250px;\r\n}\r\n.col-md-4{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n.col-md-4 img{\r\n    -ms-flex-item-align: auto;\r\n        -ms-grid-row-align: auto;\r\n        align-self: auto;\r\n\twidth: 150px;\r\n\theight: 150px;\r\n}\r\n@media(max-width: 700px){\r\n\r\n    .showcase{\r\n        height: 250px;\r\n        background: url('ahk.cd3ab262ff2f0443cb8b.jpg') no-repeat;\r\n        background-size: cover;\r\n        background-position: -80px;\r\n        text-align: center;\r\n        \r\n\r\n    }\r\n    .showcase h1{\r\n        font-size: 30px;\r\n\t    margin-top: 150px;\r\n\t    margin-bottom: 10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"showcase\">\n\t\t<div class=\"container\">\n\t\t\t<h1>Welcome to ASolutions</h1>\n\t\t\t<p>This is a sample website to reveal my works.</p>\n\t\t</div>\n\t</section>\n\n<div class=\"container\">\n\n\t<h3>I'm interested in..</h3>\n\t<hr>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t\t<img src=\"../../assets/th.jpg\">\n\t\t\t<h4>Web Development</h4>\n\t\t\t<p>Angular and vue are most prefferable webframeworks for me. And these stuffs help me in cross platform mobile app development like ionic.</p>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<img src=\"../../assets/emb.png\">\n\t\t\t<h4>Developing Embedded Devices</h4>\n\t\t\t\t<p>Embedded systems have extensive applications in consumer, commercial, automotive, industrial and healthcare markets.</p>\n\t\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<img src=\"../../assets/ml.jpg\">\n\t\t\t<h4>Machine learning</h4>\n\t\t\t\t<p>Machine learning is an artificial intelligence (AI) discipline geared toward the technological development of human knowledge. Machine learning allows computers to handle new situations via analysis, self-training, observation and experience</p>\n\t\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/travel/travel.component.css":
/***/ (function(module, exports) {

module.exports = ".col-sm-6 img{\r\n    overflow: hidden;\r\n    height: 400px;\r\n    width: 570px;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\nh5{\r\n    margin-bottom: 30px;\r\n    margin-top: 20px;\r\n}\r\n@media(max-width: 700px){\r\n    .col-sm-6 img{\r\n        height: 400px;\r\n        width: 340px;\r\n        background-size: cover;\r\n    }\r\n    \r\n}\r\n"

/***/ }),

/***/ "./src/app/travel/travel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h5>Adventurous trip to kithulgala and leisure world </h5><hr>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <img src=\"../../assets/img/i1.jpg\">\n    </div>\n    <div class=\"col-sm-6\">\n      <img src=\"../../assets/img/i2.jpg\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <img src=\"../../assets/img/i3.jpg\">\n    </div>\n    <div class=\"col-sm-6\">\n      <img src=\"../../assets/img/i4.jpg\">\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <img src=\"../../assets/img/i5.jpg\">\n      </div>\n      <div class=\"col-sm-6\">\n        <img src=\"../../assets/img/i6.jpg\">\n      </div>\n    </div>\n\n    <h5>Trip to Jaffna </h5><hr>\n\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <img src=\"../../assets/img/j1.jpg\">\n        </div>\n        <div class=\"col-sm-6\">\n          <img src=\"../../assets/img/j2.jpg\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <img src=\"../../assets/img/j3.jpg\">\n        </div>\n        <div class=\"col-sm-6\">\n          <img src=\"../../assets/img/j4.jpg\">\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <img src=\"../../assets/img/j5.jpg\">\n          </div>\n          <div class=\"col-sm-6\">\n            <img src=\"../../assets/img/j6.jpg\">\n          </div>\n        </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/travel/travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelComponent = /** @class */ (function () {
    function TravelComponent() {
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    TravelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-travel',
            template: __webpack_require__("./src/app/travel/travel.component.html"),
            styles: [__webpack_require__("./src/app/travel/travel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TravelComponent);
    return TravelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map