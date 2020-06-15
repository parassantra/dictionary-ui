(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 10px;\n    height: 10px;\n}\n\n/* resize images */\n\n.container img {\n    width: 50%;\n    height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLGtCQUFrQjs7QUFDbEI7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuLyogcmVzaXplIGltYWdlcyAqL1xuLmNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About this app</h1>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <p>I created this my Courseera Honors Capstoone Project.\n      The purpose of this app is to define or translate English words in Computer Science.\n      We all are very different and belong to various regions of the world. Hence, it is okay to say that not many\n      of us have English as our first language or our only language. So this app comes in place,\n      when you want translation or define a word in other languages especially in the Computer field.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _termsEnglish_termsEnglish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./termsEnglish/termsEnglish.component */ "./src/app/termsEnglish/termsEnglish.component.ts");
/* harmony import */ var _term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./term-detail/term-detail.component */ "./src/app/term-detail/term-detail.component.ts");
/* harmony import */ var _term_other_detail_term_other_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./term-other-detail/term-other-detail.component */ "./src/app/term-other-detail/term-other-detail.component.ts");
/* harmony import */ var _term_create_term_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./term-create/term-create.component */ "./src/app/term-create/term-create.component.ts");
/* harmony import */ var _term_other_create_term_other_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./term-other-create/term-other-create.component */ "./src/app/term-other-create/term-other-create.component.ts");
/* harmony import */ var _definition_create_definition_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./definition-create/definition-create.component */ "./src/app/definition-create/definition-create.component.ts");
/* harmony import */ var _other_definition_create_other_definition_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./other-definition-create/other-definition-create.component */ "./src/app/other-definition-create/other-definition-create.component.ts");














var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'termsEnglish/create', component: _term_create_term_create_component__WEBPACK_IMPORTED_MODULE_10__["TermCreateComponent"] },
    { path: 'termsEnglish', component: _termsEnglish_termsEnglish_component__WEBPACK_IMPORTED_MODULE_7__["TermsEnglishComponent"] },
    { path: 'termsEnglish/detail/:id', component: _term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_8__["TermDetailComponent"] },
    { path: 'termsEnglish/add-definition/:id', component: _definition_create_definition_create_component__WEBPACK_IMPORTED_MODULE_12__["DefinitionCreateComponent"] },
    { path: 'termsOther/create/:id', component: _term_other_create_term_other_create_component__WEBPACK_IMPORTED_MODULE_11__["TermOtherCreateComponent"] },
    { path: 'termsOther/detail/:id', component: _term_other_detail_term_other_detail_component__WEBPACK_IMPORTED_MODULE_9__["TermOtherDetailComponent"] },
    { path: 'termsOther/add-definition/:id', component: _other_definition_create_other_definition_create_component__WEBPACK_IMPORTED_MODULE_13__["OtherDefinitionCreateComponent"] },
    // more routes are added here
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gap {\n  margin-top: 5.0em;\n}\n\ndiv b {\n  color: rgb(42, 34, 155);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYXAge1xuICBtYXJnaW4tdG9wOiA1LjBlbTtcbn1cblxuZGl2IGIge1xuICBjb2xvcjogcmdiKDQyLCAzNCwgMTU1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-nav></app-nav>\n  <router-outlet></router-outlet>\n  <hr class=\"gap\">\n  <footer>\n    <p>&copy; 2020 Paras Santra @ Inc</p>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'a2-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _termsEnglish_termsEnglish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./termsEnglish/termsEnglish.component */ "./src/app/termsEnglish/termsEnglish.component.ts");
/* harmony import */ var _term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./term-detail/term-detail.component */ "./src/app/term-detail/term-detail.component.ts");
/* harmony import */ var _term_other_detail_term_other_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./term-other-detail/term-other-detail.component */ "./src/app/term-other-detail/term-other-detail.component.ts");
/* harmony import */ var _term_create_term_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./term-create/term-create.component */ "./src/app/term-create/term-create.component.ts");
/* harmony import */ var _term_other_create_term_other_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./term-other-create/term-other-create.component */ "./src/app/term-other-create/term-other-create.component.ts");
/* harmony import */ var _definition_create_definition_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./definition-create/definition-create.component */ "./src/app/definition-create/definition-create.component.ts");
/* harmony import */ var _other_definition_create_other_definition_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./other-definition-create/other-definition-create.component */ "./src/app/other-definition-create/other-definition-create.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _term_create_term_create_component__WEBPACK_IMPORTED_MODULE_15__["TermCreateComponent"],
                _termsEnglish_termsEnglish_component__WEBPACK_IMPORTED_MODULE_12__["TermsEnglishComponent"],
                _term_other_detail_term_other_detail_component__WEBPACK_IMPORTED_MODULE_14__["TermOtherDetailComponent"],
                _term_detail_term_detail_component__WEBPACK_IMPORTED_MODULE_13__["TermDetailComponent"],
                _definition_create_definition_create_component__WEBPACK_IMPORTED_MODULE_17__["DefinitionCreateComponent"],
                _term_other_create_term_other_create_component__WEBPACK_IMPORTED_MODULE_16__["TermOtherCreateComponent"],
                _other_definition_create_other_definition_create_component__WEBPACK_IMPORTED_MODULE_18__["OtherDefinitionCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact information</h1>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <p>Contact information of the developer:</p>\n    <dl class=\"dl-horizontal\">\n      <dt>Developer name</dt>\n      <dd>Paras Santra</dd>\n      <dt>City</dt>\n      <dd>Toronto</dd>\n    </dl>\n  </div>\n  <div class=\"col-md-4\">\n    <p>\n      <img src=\"./../../assets/paras.png\"/>\n    </p>\n  </div>\n  \n  <div class=\"col-md-4 well\">\n    <p>Hi there, I am Paras Santra, a freelance Software Developer program. I like to play around with cool programming stuff. My interest are DS, algo, fullstack, ML amd datascience. Thanks for reading!\n    </p>\n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        // Create a "Student" object
        this.s = { name: "Firstname Lastname", id: "123 456 789", city: "Toronto" };
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());


/***/ }),

/***/ "./src/app/data-manager.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-manager.service.ts ***!
  \*****************************************/
/*! exports provided: DataManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagerService", function() { return DataManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataManagerService = /** @class */ (function () {
    function DataManagerService(http) {
        this.http = http;
        this.url = 'https://dict-api.herokuapp.com';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    DataManagerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DataManagerService.prototype.getEnglishTerms = function () {
        return this.http.get(this.url + "/terms/english");
    };
    DataManagerService.prototype.getEnglishTermsByWord = function (word) {
        return this.http.get(this.url + "/terms/english/" + word);
    };
    DataManagerService.prototype.getEnglishTerm = function (id) {
        return this.http.get(this.url + "/term/english/" + id);
    };
    DataManagerService.prototype.getOtherTerm = function (id) {
        return this.http.get(this.url + "/term/other/" + id);
    };
    DataManagerService.prototype.getEnglishTermByWord = function (word) {
        return this.http.get(this.url + "/term/english/" + word);
    };
    DataManagerService.prototype.getOtherTermsByEnglishId = function (id) {
        return this.http.get(this.url + "/terms/other/" + id);
    };
    DataManagerService.prototype.incrementHelpNo = function (id) {
        return this.http.put(this.url + "/terms/english/helpNo/" + id, this.httpOptions);
    };
    DataManagerService.prototype.incrementHelpYes = function (id) {
        return this.http.put(this.url + "/terms/english/helpYes/" + id, this.httpOptions);
    };
    DataManagerService.prototype.incrementLikesOnDefinition = function (id) {
        return this.http.put(this.url + "/terms/english/definition-like/" + id, this.httpOptions);
    };
    DataManagerService.prototype.incrementOtherHelpNo = function (id) {
        return this.http.put(this.url + "/terms/other/helpNo/" + id, this.httpOptions);
    };
    DataManagerService.prototype.incrementOtherHelpYes = function (id) {
        return this.http.put(this.url + "/terms/other/helpYes/" + id, this.httpOptions);
    };
    DataManagerService.prototype.incrementLikesOnOtherDefinition = function (id) {
        return this.http.put(this.url + "/terms/other/definition-like/" + id, this.httpOptions);
    };
    DataManagerService.prototype.reqresTermAdd = function (newTerm) {
        return this.http.post(this.url + "/terms/english", newTerm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newTerm) { return console.log("" + newTerm); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Term add')));
    };
    DataManagerService.prototype.reqresTermOtherAdd = function (newTerm) {
        return this.http.post(this.url + "/terms/other", newTerm, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newTerm) { return console.log("" + newTerm); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Other Term add')));
    };
    DataManagerService.prototype.reqresDefinitonAdd = function (newDefiniton, id) {
        return this.http.put(this.url + "/terms/english/" + id + "/add-definition", newDefiniton, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newTerm) { return console.log("" + newTerm); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Definition add')));
    };
    DataManagerService.prototype.reqresDefinitonOtherAdd = function (newDefiniton, id) {
        return this.http.put(this.url + "/terms/other/" + id + "/add-definition", newDefiniton, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newTerm) { return console.log("" + newTerm); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Definition add')));
    };
    DataManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataManagerService);
    return DataManagerService;
}());



/***/ }),

/***/ "./src/app/definition-create/definition-create.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/definition-create/definition-create.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmluaXRpb24tY3JlYXRlL2RlZmluaXRpb24tY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/definition-create/definition-create.component.html":
/*!********************************************************************!*\
  !*** ./src/app/definition-create/definition-create.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add another definition\r\n  <span *ngIf=\"term.wordEnglish\">to {{term.wordEnglish}}</span>\r\n</h3>\r\n<p >&nbsp;</p>\r\n<div  class=\"row\">\r\n    <div  class=\"col-md-10 col-sm-10\">\r\n        <dl  class=\"dl-horizontal\"><dt >New definition</dt>\r\n            <dd >\r\n                <p >Enter data, and click/tap the Save button</p>\r\n                <form (ngSubmit)='definitionSave()' #f='ngForm'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"authorName\">Author Name:</label>\r\n                    <input class=\"form-control\" id=\"authorName\" name=\"authorName\" [(ngModel)]=\"newDefinition.authorName\" required minlength=\"3\"\r\n                      maxlength=\"100\" #authorName=\"ngModel\" autofocus>\r\n                  \r\n                    <div *ngIf='authorName.invalid && (authorName.dirty || authorName.touched)' class='alert alert-danger'>\r\n                      <div *ngIf='authorName.errors?.required'>Author Name is required, 3 to 100 characters</div>\r\n                      <div *ngIf='authorName.errors?.minlength'>Author Name must be at least 3 characters</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"definition\">Definition:</label>\r\n                    <textarea  class=\"form-control\" id=\"definition\" name=\"definition\" [(ngModel)]=\"newDefinition.definition\" required minlength=\"50\"\r\n                      maxlength=\"5000\" #definition=\"ngModel\" rows=\"5\" autofocus></textarea>\r\n                    <div *ngIf='definition.invalid && (definition.dirty || definition.touched)' class='alert alert-danger'>\r\n                      <div *ngIf='definition.errors?.required'>Definition is required, 50 to 5000 characters</div>\r\n                      <div *ngIf='definition.errors?.minlength'>Definition must be at least 50 characters</div>\r\n                    </div>\r\n                  </div>            \r\n                    <button  class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.form.valid\" >Save</button>&nbsp; <a  class=\"btn btn-default\" routerLink=\"/termsEnglish/detail/{{term._id}}\">Cancel</a>\r\n                </form>\r\n            </dd>\r\n            <br >\r\n            <dt>Existing definitions<br ></dt>\r\n            <dd >\r\n              <div *ngFor=\"let def of term.definitions\" class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <button (click)=\"onClickDefLike(def._id)\" class=\"btn btn-default btn-sm\">Like&nbsp;&nbsp;<span class=\"badge\">{{def.likes}}</span></button>\r\n                  &nbsp;&nbsp;Author: {{def.authorName}} on {{def.dateCreated | date}}\r\n                </div> \r\n                <div class=\"panel-body\">\r\n                {{def.definition}}\r\n                </div>\r\n              </div>\r\n            </dd>\r\n            <dt >Field of study</dt>\r\n            <dd >\r\n                <p >{{term.fieldOfStudy}}</p>\r\n            </dd>\r\n        </dl>\r\n    </div>\r\n</div>\r\n<div >\r\n    <hr ><a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to list</a>\r\n</div>"

/***/ }),

/***/ "./src/app/definition-create/definition-create.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/definition-create/definition-create.component.ts ***!
  \******************************************************************/
/*! exports provided: DefinitionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionCreateComponent", function() { return DefinitionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-manager.service */ "./src/app/data-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../schemas/ReqresDefiniton */ "./src/app/schemas/ReqresDefiniton.ts");






var DefinitionCreateComponent = /** @class */ (function () {
    function DefinitionCreateComponent(m, router, route) {
        this.m = m;
        this.router = router;
        this.route = route;
        this.newDefinition = new _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_4__["definition"]();
    }
    DefinitionCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.getEnglishTerm(id).subscribe(function (u) { return _this.term = u; });
    };
    DefinitionCreateComponent.prototype.definitionSave = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        var dateNow = new Date().toISOString();
        this.newDefinition.dateCreated = dateNow;
        this.m.reqresDefinitonAdd(this.newDefinition, id).subscribe(function (u) { _this.router.navigate(["/termsEnglish/detail/", u._id]); });
    };
    DefinitionCreateComponent.prototype.onClickDefLike = function (defId) {
        var _this = this;
        this.m.incrementLikesOnDefinition(defId).subscribe(function (u) { return _this.term = u; });
    };
    DefinitionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-definition-create',
            template: __webpack_require__(/*! ./definition-create.component.html */ "./src/app/definition-create/definition-create.component.html"),
            styles: [__webpack_require__(/*! ./definition-create.component.css */ "./src/app/definition-create/definition-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DefinitionCreateComponent);
    return DefinitionCreateComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <img width=\"150\" alt=\"Angular Logo\"\n        src=\"./../../assets/techdict.png\">\n    </div>\n    <div class=\"col-md-9\">\n      <h1>Tech Dictionary</h1>\n      <h3></h3>\n    </div>\n  </div>\n</div>\n<!-- Body content -->\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <h3>Description</h3>\n    <p>Hi, Welcome to Tech Disctionary!\n      I created this app for my Courseera Honors Capstoone Project.\n     The purpose of this app is to define or translate English words in Computer Science.\n      \n      We all are very different and belong to various regions of the world. Hence, it is okay to say that not many\n      of us have English as our first language or our only language. So this app comes in place,\n      when you want translation or define a word in other languages especially in the Computer field.\n      <br/>\n      <br/>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Getting help</h3>\n    <p>If you have any questions or queries, you can reach me at parassantra@gmail.com</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/languageCodes/langCodes.json":
/*!**********************************************!*\
  !*** ./src/app/languageCodes/langCodes.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, default */
/***/ (function(module) {

module.exports = [{"languageCode":"aa","language":"Afar"},{"languageCode":"ab","language":"Abkhazian"},{"languageCode":"ae","language":"Avestan"},{"languageCode":"af","language":"Afrikaans"},{"languageCode":"ak","language":"Akan"},{"languageCode":"am","language":"Amharic"},{"languageCode":"an","language":"Aragonese"},{"languageCode":"ar","language":"Arabic"},{"languageCode":"as","language":"Assamese"},{"languageCode":"av","language":"Avaric"},{"languageCode":"ay","language":"Aymara"},{"languageCode":"az","language":"Azerbaijani"},{"languageCode":"ba","language":"Bashkir"},{"languageCode":"be","language":"Belarusian"},{"languageCode":"bg","language":"Bulgarian"},{"languageCode":"bh","language":"Bihari languages"},{"languageCode":"bi","language":"Bislama"},{"languageCode":"bm","language":"Bambara"},{"languageCode":"bn","language":"Bengali"},{"languageCode":"bo","language":"Tibetan"},{"languageCode":"br","language":"Breton"},{"languageCode":"bs","language":"Bosnian"},{"languageCode":"ca","language":"Catalan; Valencian"},{"languageCode":"ce","language":"Chechen"},{"languageCode":"ch","language":"Chamorro"},{"languageCode":"co","language":"Corsican"},{"languageCode":"cr","language":"Cree"},{"languageCode":"cs","language":"Czech"},{"languageCode":"cu","language":"Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"},{"languageCode":"cv","language":"Chuvash"},{"languageCode":"cy","language":"Welsh"},{"languageCode":"da","language":"Danish"},{"languageCode":"de","language":"German"},{"languageCode":"dv","language":"Divehi; Dhivehi; Maldivian"},{"languageCode":"dz","language":"Dzongkha"},{"languageCode":"ee","language":"Ewe"},{"languageCode":"el","language":"Greek, Modern (1453-)"},{"languageCode":"en","language":"English"},{"languageCode":"eo","language":"Esperanto"},{"languageCode":"es","language":"Spanish; Castilian"},{"languageCode":"et","language":"Estonian"},{"languageCode":"eu","language":"Basque"},{"languageCode":"fa","language":"Persian"},{"languageCode":"ff","language":"Fulah"},{"languageCode":"fi","language":"Finnish"},{"languageCode":"fj","language":"Fijian"},{"languageCode":"fo","language":"Faroese"},{"languageCode":"fr","language":"French"},{"languageCode":"fy","language":"Western Frisian"},{"languageCode":"ga","language":"Irish"},{"languageCode":"gd","language":"Gaelic; Scottish Gaelic"},{"languageCode":"gl","language":"Galician"},{"languageCode":"gn","language":"Guarani"},{"languageCode":"gu","language":"Gujarati"},{"languageCode":"gv","language":"Manx"},{"languageCode":"ha","language":"Hausa"},{"languageCode":"he","language":"Hebrew"},{"languageCode":"hi","language":"Hindi"},{"languageCode":"ho","language":"Hiri Motu"},{"languageCode":"hr","language":"Croatian"},{"languageCode":"ht","language":"Haitian; Haitian Creole"},{"languageCode":"hu","language":"Hungarian"},{"languageCode":"hy","language":"Armenian"},{"languageCode":"hz","language":"Herero"},{"languageCode":"ia","language":"Interlingua (International Auxiliary Language Association)"},{"languageCode":"id","language":"Indonesian"},{"languageCode":"ie","language":"Interlingue; Occidental"},{"languageCode":"ig","language":"Igbo"},{"languageCode":"ii","language":"Sichuan Yi; Nuosu"},{"languageCode":"ik","language":"Inupiaq"},{"languageCode":"io","language":"Ido"},{"languageCode":"is","language":"Icelandic"},{"languageCode":"it","language":"Italian"},{"languageCode":"iu","language":"Inuktitut"},{"languageCode":"ja","language":"Japanese"},{"languageCode":"jv","language":"Javanese"},{"languageCode":"ka","language":"Georgian"},{"languageCode":"kg","language":"Kongo"},{"languageCode":"ki","language":"Kikuyu; Gikuyu"},{"languageCode":"kj","language":"Kuanyama; Kwanyama"},{"languageCode":"kk","language":"Kazakh"},{"languageCode":"kl","language":"Kalaallisut; Greenlandic"},{"languageCode":"km","language":"Central Khmer"},{"languageCode":"kn","language":"Kannada"},{"languageCode":"ko","language":"Korean"},{"languageCode":"kr","language":"Kanuri"},{"languageCode":"ks","language":"Kashmiri"},{"languageCode":"ku","language":"Kurdish"},{"languageCode":"kv","language":"Komi"},{"languageCode":"kw","language":"Cornish"},{"languageCode":"ky","language":"Kirghiz; Kyrgyz"},{"languageCode":"la","language":"Latin"},{"languageCode":"lb","language":"Luxembourgish; Letzeburgesch"},{"languageCode":"lg","language":"Ganda"},{"languageCode":"li","language":"Limburgan; Limburger; Limburgish"},{"languageCode":"ln","language":"Lingala"},{"languageCode":"lo","language":"Lao"},{"languageCode":"lt","language":"Lithuanian"},{"languageCode":"lu","language":"Luba-Katanga"},{"languageCode":"lv","language":"Latvian"},{"languageCode":"mg","language":"Malagasy"},{"languageCode":"mh","language":"Marshallese"},{"languageCode":"mi","language":"Maori"},{"languageCode":"mk","language":"Macedonian"},{"languageCode":"ml","language":"Malayalam"},{"languageCode":"mn","language":"Mongolian"},{"languageCode":"mr","language":"Marathi"},{"languageCode":"ms","language":"Malay"},{"languageCode":"mt","language":"Maltese"},{"languageCode":"my","language":"Burmese"},{"languageCode":"na","language":"Nauru"},{"languageCode":"nb","language":"Bokmål, Norwegian; Norwegian Bokmål"},{"languageCode":"nd","language":"Ndebele, North; North Ndebele"},{"languageCode":"ne","language":"Nepali"},{"languageCode":"ng","language":"Ndonga"},{"languageCode":"nl","language":"Dutch; Flemish"},{"languageCode":"nn","language":"Norwegian Nynorsk; Nynorsk, Norwegian"},{"languageCode":"no","language":"Norwegian"},{"languageCode":"nr","language":"Ndebele, South; South Ndebele"},{"languageCode":"nv","language":"Navajo; Navaho"},{"languageCode":"ny","language":"Chichewa; Chewa; Nyanja"},{"languageCode":"oc","language":"Occitan (post 1500)"},{"languageCode":"oj","language":"Ojibwa"},{"languageCode":"om","language":"Oromo"},{"languageCode":"or","language":"Oriya"},{"languageCode":"os","language":"Ossetian; Ossetic"},{"languageCode":"pa","language":"Panjabi; Punjabi"},{"languageCode":"pi","language":"Pali"},{"languageCode":"pl","language":"Polish"},{"languageCode":"ps","language":"Pushto; Pashto"},{"languageCode":"pt","language":"Portuguese"},{"languageCode":"qu","language":"Quechua"},{"languageCode":"rm","language":"Romansh"},{"languageCode":"rn","language":"Rundi"},{"languageCode":"ro","language":"Romanian; Moldavian; Moldovan"},{"languageCode":"ru","language":"Russian"},{"languageCode":"rw","language":"Kinyarwanda"},{"languageCode":"sa","language":"Sanskrit"},{"languageCode":"sc","language":"Sardinian"},{"languageCode":"sd","language":"Sindhi"},{"languageCode":"se","language":"Northern Sami"},{"languageCode":"sg","language":"Sango"},{"languageCode":"si","language":"Sinhala; Sinhalese"},{"languageCode":"sk","language":"Slovak"},{"languageCode":"sl","language":"Slovenian"},{"languageCode":"sm","language":"Samoan"},{"languageCode":"sn","language":"Shona"},{"languageCode":"so","language":"Somali"},{"languageCode":"sq","language":"Albanian"},{"languageCode":"sr","language":"Serbian"},{"languageCode":"ss","language":"Swati"},{"languageCode":"st","language":"Sotho, Southern"},{"languageCode":"su","language":"Sundanese"},{"languageCode":"sv","language":"Swedish"},{"languageCode":"sw","language":"Swahili"},{"languageCode":"ta","language":"Tamil"},{"languageCode":"te","language":"Telugu"},{"languageCode":"tg","language":"Tajik"},{"languageCode":"th","language":"Thai"},{"languageCode":"ti","language":"Tigrinya"},{"languageCode":"tk","language":"Turkmen"},{"languageCode":"tl","language":"Tagalog"},{"languageCode":"tn","language":"Tswana"},{"languageCode":"to","language":"Tonga (Tonga Islands)"},{"languageCode":"tr","language":"Turkish"},{"languageCode":"ts","language":"Tsonga"},{"languageCode":"tt","language":"Tatar"},{"languageCode":"tw","language":"Twi"},{"languageCode":"ty","language":"Tahitian"},{"languageCode":"ug","language":"Uighur; Uyghur"},{"languageCode":"uk","language":"Ukrainian"},{"languageCode":"ur","language":"Urdu"},{"languageCode":"uz","language":"Uzbek"},{"languageCode":"ve","language":"Venda"},{"languageCode":"vi","language":"Vietnamese"},{"languageCode":"vo","language":"Volapük"},{"languageCode":"wa","language":"Walloon"},{"languageCode":"wo","language":"Wolof"},{"languageCode":"xh","language":"Xhosa"},{"languageCode":"yi","language":"Yiddish"},{"languageCode":"yo","language":"Yoruba"},{"languageCode":"za","language":"Zhuang; Chuang"},{"languageCode":"zh","language":"Chinese"},{"languageCode":"zu","language":"Zulu"}];

/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: rgb(61,39,12) !important;\n  color: white !important;\n}\n\n.navbar-inverse{\n  background-color: rgb(15,12,61);\n  border-color: rgb(15,12,61);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLDM5LDEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1pbnZlcnNle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsMTIsNjEpO1xuICBib3JkZXItY29sb3I6IHJnYigxNSwxMiw2MSk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n        data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"about\" routerLinkActive=\"active\">About</a></li>\n        <li><a routerLink=\"contact\" routerLinkActive=\"active\">Contact</a></li>\n        <li><a routerLink=\"termsEnglish\" routerLinkActive=\"active\">Terms</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Not found</h1>\n<p>The requested content or task was not found.</p>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/other-definition-create/other-definition-create.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/other-definition-create/other-definition-create.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyLWRlZmluaXRpb24tY3JlYXRlL290aGVyLWRlZmluaXRpb24tY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/other-definition-create/other-definition-create.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/other-definition-create/other-definition-create.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add another definition\r\n  <span *ngIf=\"term.wordNonEnglish\">to {{term.wordNonEnglish}}</span>\r\n</h3>\r\n<p >&nbsp;</p>\r\n<div  class=\"row\">\r\n    <div  class=\"col-md-10 col-sm-10\">\r\n        <dl  class=\"dl-horizontal\"><dt >New definition</dt>\r\n            <dd >\r\n                <p >Enter data, and click/tap the Save button</p>\r\n                <form (ngSubmit)='definitionOtherSave()' #f='ngForm'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"authorName\">Author Name:</label>\r\n                    <input class=\"form-control\" id=\"authorName\" name=\"authorName\" [(ngModel)]=\"newDefinition.authorName\" required minlength=\"3\"\r\n                      maxlength=\"100\" #authorName=\"ngModel\" autofocus>\r\n                  \r\n                    <div *ngIf='authorName.invalid && (authorName.dirty || authorName.touched)' class='alert alert-danger'>\r\n                      <div *ngIf='authorName.errors?.required'>Author Name is required, 3 to 100 characters</div>\r\n                      <div *ngIf='authorName.errors?.minlength'>Author Name must be at least 3 characters</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"definition\">Definition:</label>\r\n                    <textarea  class=\"form-control\" id=\"definition\" name=\"definition\" [(ngModel)]=\"newDefinition.definition\" required minlength=\"50\"\r\n                      maxlength=\"5000\" #definition=\"ngModel\" rows=\"5\" autofocus></textarea>\r\n                    <div *ngIf='definition.invalid && (definition.dirty || definition.touched)' class='alert alert-danger'>\r\n                      <div *ngIf='definition.errors?.required'>Definition is required, 50 to 5000 characters</div>\r\n                      <div *ngIf='definition.errors?.minlength'>Definition must be at least 50 characters</div>\r\n                    </div>\r\n                  </div>            \r\n                    <button  class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.form.valid\" >Save</button>&nbsp; <a  class=\"btn btn-default\" routerLink=\"/termsOther/detail/{{term._id}}\">Cancel</a>\r\n                </form>\r\n            </dd>\r\n            <br >\r\n            <dt>Existing definitions<br ></dt>\r\n            <dd >\r\n              <div *ngFor=\"let def of term.definitions\" class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <button  (click) = \"onClickDefLike(def._id)\" class=\"btn btn-default btn-sm\">Like&nbsp;&nbsp;<span class=\"badge\">{{def.likes}}</span></button>\r\n                  &nbsp;&nbsp;Author: {{def.authorName}} on {{def.dateCreated | date}}\r\n                </div> \r\n                <div class=\"panel-body\">\r\n                {{def.definition}}\r\n                </div>\r\n              </div>\r\n            </dd>\r\n            <br/>\r\n            <dt >Field of study</dt>\r\n            <dd >\r\n                <p >\r\n                  {{term.fieldOfStudy}}\r\n                </p>\r\n            </dd>\r\n        </dl>\r\n    </div>\r\n</div>\r\n<div >\r\n    <hr ><a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to list</a>\r\n</div>"

/***/ }),

/***/ "./src/app/other-definition-create/other-definition-create.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/other-definition-create/other-definition-create.component.ts ***!
  \******************************************************************************/
/*! exports provided: OtherDefinitionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDefinitionCreateComponent", function() { return OtherDefinitionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-manager.service */ "./src/app/data-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../schemas/ReqresDefiniton */ "./src/app/schemas/ReqresDefiniton.ts");






var OtherDefinitionCreateComponent = /** @class */ (function () {
    function OtherDefinitionCreateComponent(m, router, route) {
        this.m = m;
        this.router = router;
        this.route = route;
        this.newDefinition = new _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_4__["definition"]();
    }
    OtherDefinitionCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.getOtherTerm(id).subscribe(function (u) { return _this.term = u; });
    };
    OtherDefinitionCreateComponent.prototype.definitionOtherSave = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        var dateNow = new Date().toISOString();
        this.newDefinition.dateCreated = dateNow;
        this.m.reqresDefinitonOtherAdd(this.newDefinition, id).subscribe(function (u) { _this.router.navigate(["/termsOther/detail/", u._id]); });
    };
    OtherDefinitionCreateComponent.prototype.onClickDefLike = function (defId) {
        var _this = this;
        this.m.incrementLikesOnOtherDefinition(defId).subscribe(function (u) { return _this.term = u; });
    };
    OtherDefinitionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-definition-create',
            template: __webpack_require__(/*! ./other-definition-create.component.html */ "./src/app/other-definition-create/other-definition-create.component.html"),
            styles: [__webpack_require__(/*! ./other-definition-create.component.css */ "./src/app/other-definition-create/other-definition-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OtherDefinitionCreateComponent);
    return OtherDefinitionCreateComponent;
}());



/***/ }),

/***/ "./src/app/schemas/ReqresDefiniton.ts":
/*!********************************************!*\
  !*** ./src/app/schemas/ReqresDefiniton.ts ***!
  \********************************************/
/*! exports provided: definition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definition", function() { return definition; });
var definition = /** @class */ (function () {
    function definition() {
    }
    return definition;
}());



/***/ }),

/***/ "./src/app/schemas/ReqresTermCreate.ts":
/*!*********************************************!*\
  !*** ./src/app/schemas/ReqresTermCreate.ts ***!
  \*********************************************/
/*! exports provided: ReqresTermCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqresTermCreate", function() { return ReqresTermCreate; });
var ReqresTermCreate = /** @class */ (function () {
    function ReqresTermCreate() {
    }
    return ReqresTermCreate;
}());



/***/ }),

/***/ "./src/app/schemas/ReqresTermCreateResponse.ts":
/*!*****************************************************!*\
  !*** ./src/app/schemas/ReqresTermCreateResponse.ts ***!
  \*****************************************************/
/*! exports provided: ReqresTermCreateResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqresTermCreateResponse", function() { return ReqresTermCreateResponse; });
var ReqresTermCreateResponse = /** @class */ (function () {
    function ReqresTermCreateResponse() {
    }
    return ReqresTermCreateResponse;
}());



/***/ }),

/***/ "./src/app/schemas/ReqresTermOtherCreate.ts":
/*!**************************************************!*\
  !*** ./src/app/schemas/ReqresTermOtherCreate.ts ***!
  \**************************************************/
/*! exports provided: ReqresTermOtherCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqresTermOtherCreate", function() { return ReqresTermOtherCreate; });
var ReqresTermOtherCreate = /** @class */ (function () {
    function ReqresTermOtherCreate() {
    }
    return ReqresTermOtherCreate;
}());



/***/ }),

/***/ "./src/app/schemas/ReqresTermOtherCreateResponse.ts":
/*!**********************************************************!*\
  !*** ./src/app/schemas/ReqresTermOtherCreateResponse.ts ***!
  \**********************************************************/
/*! exports provided: ReqresTermOtherCreateResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqresTermOtherCreateResponse", function() { return ReqresTermOtherCreateResponse; });
var ReqresTermOtherCreateResponse = /** @class */ (function () {
    function ReqresTermOtherCreateResponse() {
    }
    return ReqresTermOtherCreateResponse;
}());



/***/ }),

/***/ "./src/app/term-create/term-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/term-create/term-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm0tY3JlYXRlL3Rlcm0tY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/term-create/term-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/term-create/term-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <h3>Create a new English term</h3>\r\n    <p>Enter data, and click/tap the Save button</p>\r\n    <form (ngSubmit)='termSave()' #f='ngForm'>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"authorName\">Author Name:</label>\r\n        <input class=\"form-control\" id=\"authorName\" name=\"authorName\" [(ngModel)]=\"newTerm.authorName\" required minlength=\"3\" maxlength=\"100\" #authorName=\"ngModel\" autofocus>\r\n        <div *ngIf='authorName.invalid && (authorName.dirty || authorName.touched)' class='alert alert-danger'>\r\n          <div *ngIf='authorName.errors?.required'>Author Name is required, 3 to 100 characters</div>\r\n          <div *ngIf='authorName.errors?.minlength'>Author Name must be at least 3 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"wordEnglish\">Term or word in English:</label>\r\n        <input class=\"form-control\" id=\"wordEnglish\" name=\"wordEnglish\" [(ngModel)]=\"newTerm.wordEnglish\" required minlength=\"3\"\r\n          maxlength=\"100\" #wordEnglish=\"ngModel\" autofocus>\r\n        <div *ngIf='wordEnglish.invalid && (wordEnglish.dirty || wordEnglish.touched)' class='alert alert-danger'>\r\n          <div *ngIf='wordEnglish.errors?.required'>Term or word in English is required, 3 to 100 characters</div>\r\n          <div *ngIf='wordEnglish.errors?.minlength'>Term or word in English must be at least 3 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"wordExpanded\">Expansion, if term or word (above) is an acronym or initialism:</label>\r\n        <input class=\"form-control ng-pristine ng-valid ng-touched\" id=\"wordExpanded\" maxlength=\"100\" minlength=\"3\" name=\"wordExpanded\" [(ngModel)]=\"newTerm.wordExpanded\" >\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"fieldOfStudy\">Field of Study:</label>\r\n        <input class=\"form-control\" id=\"fieldOfStudy\" name=\"fieldOfStudy\" [(ngModel)]=\"newTerm.fieldOfStudy\" required minlength=\"3\"\r\n          maxlength=\"100\" #fieldOfStudy=\"ngModel\" autofocus>\r\n        <div *ngIf='fieldOfStudy.invalid && (fieldOfStudy.dirty || fieldOfStudy.touched)' class='alert alert-danger'>\r\n          <div *ngIf='fieldOfStudy.errors?.required'>Field of Study is required, 3 to 100 characters</div>\r\n          <div *ngIf='fieldOfStudy.errors?.minlength'>Field of Study must be at least 3 characters</div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"definition\">Definition:</label>\r\n        <textarea  class=\"form-control\" id=\"definition\" name=\"definition\" [(ngModel)]=\"newDefinition.definition\" required minlength=\"50\"\r\n          maxlength=\"5000\" #definition=\"ngModel\" rows=\"5\" autofocus></textarea>\r\n        <div *ngIf='definition.invalid && (definition.dirty || definition.touched)' class='alert alert-danger'>\r\n          <div *ngIf='definition.errors?.required'>Definition is required, 50 to 5000 characters</div>\r\n          <div *ngIf='definition.errors?.minlength'>Definition must be at least 50 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"linkAuthoritative\">Link (URL), authoritative:</label>\r\n        <input [(ngModel)]=\"newTerm.linkAuthoritative\" class=\"form-control ng-pristine ng-valid ng-touched\" id=\"linkAuthoritative\" name=\"linkAuthoritative\" pattern=\"(http|https)://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#()_-]*[\\w@?^=%&amp;/~+#()_-])?\" type=\"url\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"linkWikipedia\">Link (URL) on Wikipedia:</label>\r\n        <input [(ngModel)]=\"newTerm.linkWikipedia\"class=\"form-control ng-pristine ng-valid ng-touched\" id=\"linkWikipedia\" name=\"linkWikipedia\" pattern=\"(http|https)://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#()_-]*[\\w@?^=%&amp;/~+#()_-])?\" type=\"url\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"linkYouTube\">Link (URL) on YouTube:</label>\r\n        <input [(ngModel)]=\"newTerm.linkYouTube\"class=\"form-control ng-pristine ng-valid ng-touched\" id=\"linkYouTube\" name=\"linkYouTube\" pattern=\"(http|https)://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#()_-]*[\\w@?^=%&amp;/~+#()_-])?\" type=\"url\">\r\n      </div>\r\n\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.form.valid\">Save</button>&nbsp;\r\n      <a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to list</a>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/term-create/term-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/term-create/term-create.component.ts ***!
  \******************************************************/
/*! exports provided: TermCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermCreateComponent", function() { return TermCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-manager.service */ "./src/app/data-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schemas_ReqresTermCreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../schemas/ReqresTermCreate */ "./src/app/schemas/ReqresTermCreate.ts");
/* harmony import */ var _schemas_ReqresTermCreateResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../schemas/ReqresTermCreateResponse */ "./src/app/schemas/ReqresTermCreateResponse.ts");
/* harmony import */ var _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../schemas/ReqresDefiniton */ "./src/app/schemas/ReqresDefiniton.ts");







var TermCreateComponent = /** @class */ (function () {
    function TermCreateComponent(m, router) {
        this.m = m;
        this.router = router;
        this.newTerm = new _schemas_ReqresTermCreate__WEBPACK_IMPORTED_MODULE_4__["ReqresTermCreate"]();
        this.newTermResult = new _schemas_ReqresTermCreateResponse__WEBPACK_IMPORTED_MODULE_5__["ReqresTermCreateResponse"]();
        this.newDefinition = new _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_6__["definition"]();
    }
    TermCreateComponent.prototype.ngOnInit = function () {
    };
    TermCreateComponent.prototype.termSave = function () {
        var _this = this;
        var dateNow = new Date().toISOString();
        this.newTerm.languageCode = 'en';
        this.newTerm.dateCreated = dateNow;
        this.newTerm.dateRevised = dateNow;
        this.newDefinition.dateCreated = dateNow;
        this.newDefinition.authorName = this.newTerm.authorName;
        this.newTerm.definitions = new Array();
        this.newTerm.definitions.push(this.newDefinition);
        this.m.reqresTermAdd(this.newTerm).subscribe(function (u) { _this.router.navigate(["/termsEnglish/detail/", u._id]); });
    };
    TermCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-term-create',
            template: __webpack_require__(/*! ./term-create.component.html */ "./src/app/term-create/term-create.component.html"),
            styles: [__webpack_require__(/*! ./term-create.component.css */ "./src/app/term-create/term-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TermCreateComponent);
    return TermCreateComponent;
}());



/***/ }),

/***/ "./src/app/term-detail/term-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/term-detail/term-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    text-align: center;\n    margin-bottom: 0;\n  }\n.btn-primary {\n    background-color: rgb(61,39,12);\n    border-color: rgb(61,39,12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybS1kZXRhaWwvdGVybS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLCtCQUErQjtJQUMvQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC90ZXJtLWRldGFpbC90ZXJtLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwzOSwxMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNjEsMzksMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/term-detail/term-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/term-detail/term-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>English Term Detail\r\n  <span *ngIf=\"term.wordEnglish\">- {{term.wordEnglish}}</span>\r\n  <span *ngIf=\"term.wordExpanded\"> ({{term.wordExpanded}})</span>   \r\n</h3>\r\n<p>&nbsp;</p>\r\n\r\n<div class=\"row\" *ngIf=\"term\">\r\n  <div class=\"col-md-10 col-sm-10\">\r\n    <dl class=\"dl-horizontal\">\r\n      <dt>Definitions\r\n        <br/>({{term.definitions.length}})\r\n        <br/>\r\n        <br/>\r\n        <a class=\"btn btn-primary btn-sm\" routerLink=\"/termsEnglish/add-definition/{{ term._id }}\">Add another</a>\r\n      </dt>\r\n      <dd>\r\n        <div *ngFor=\"let def of term.definitions\" class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <button (click)=\"onClickDefLike(def._id)\" class=\"btn btn-default btn-sm\">Like&nbsp;&nbsp;<span class=\"badge\">{{def.likes}}</span></button>\r\n            &nbsp;&nbsp;Author: {{def.authorName}} on {{def.dateCreated | date}}\r\n          </div> \r\n          <div class=\"panel-body\">\r\n          {{def.definition}}\r\n          </div>\r\n        </div>\r\n      </dd>\r\n      <dt>Field Of Study</dt>\r\n      <dd>{{ term.fieldOfStudy}}</dd>\r\n      <br/>\r\n      <dt>Author name</dt>\r\n      <dd>{{ term.authorName }}</dd>\r\n      <br/>\r\n      <dt>Dates</dt>\r\n      <dd>{{ term.dateCreated | date}} <br/>\r\n        {{ term.dateRevised | date}}\r\n      </dd>\r\n      <br/>\r\n      <dt>Translations</dt>\r\n      <dd>\r\n        <p>\r\n          <span><a class=\"btn btn-primary btn-sm\" routerLink=\"/termsOther/create/{{ term._id }}\">Add translation</a>&nbsp;&nbsp;</span>\r\n          <span *ngFor=\"let otherTerm of termsOther\" ><a routerLink=\"/termsOther/detail/{{ otherTerm._id }}\"class=\"btn btn-default btn-sm\">{{otherTerm.languageCode}}</a>&nbsp;&nbsp; </span>\r\n        </p>\r\n      </dd>\r\n      <br/>\r\n      <dt>Links</dt>\r\n      <dd>\r\n        <p>\r\n          <span *ngIf=\"term.linkWikipedia\"><a class=\"btn btn-default btn-sm\" target=\"_blank\" href= {{term.linkWikipedia}}>Wikipedia</a>&nbsp;&nbsp;</span>\r\n          <span *ngIf=\"term.linkYouTube\"><a class=\"btn btn-default btn-sm\" target=\"_blank\" href= {{term.linkYouTube}}>YouTube</a>&nbsp;&nbsp;</span>\r\n        </p>\r\n      </dd>\r\n      <br/>\r\n      <dt>Was this helpful?</dt>\r\n      <dd>\r\n        <p>\r\n          <button  (click)=\"onClickIncrementHelpYes()\" class=\"btn btn-default btn-sm\">Yes&nbsp;&nbsp;<span class=\"badge\">{{term.helpYes}}</span></button>&nbsp;&nbsp;\r\n          <button (click)=\"onClickIncrementHelpNo()\" class=\"btn btn-default btn-sm\">No&nbsp;&nbsp;<span class=\"badge\">{{term.helpNo}}</span></button>&nbsp;&nbsp;\r\n        </p>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"term\">\r\n  <hr>\r\n  <a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to list</a>\r\n</div>\r\n\r\n<div *ngIf=\"!term\">\r\n  <p>Cannot Find this Term</p>\r\n  <p><a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to list</a></p>\r\n</div>"

/***/ }),

/***/ "./src/app/term-detail/term-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/term-detail/term-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TermDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDetailComponent", function() { return TermDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../languageCodes/langCodes.json */ "./src/app/languageCodes/langCodes.json");
var _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../languageCodes/langCodes.json */ "./src/app/languageCodes/langCodes.json", 1);
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-manager.service */ "./src/app/data-manager.service.ts");





var TermDetailComponent = /** @class */ (function () {
    function TermDetailComponent(m, route) {
        this.m = m;
        this.route = route;
        this.languageCodes = _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    TermDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.getEnglishTerm(id).subscribe(function (u) { return _this.term = u; });
        this.m.getOtherTermsByEnglishId(id).subscribe(function (u) {
            _this.termsOther = u;
            for (var _i = 0, languageCodes_1 = _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_3__; _i < languageCodes_1.length; _i++) {
                var lang = languageCodes_1[_i];
                for (var _a = 0, _b = _this.termsOther; _a < _b.length; _a++) {
                    var term = _b[_a];
                    if (term.languageCode === lang.languageCode) {
                        term.languageCode = lang.language;
                    }
                }
            }
        });
    };
    TermDetailComponent.prototype.onClickIncrementHelpNo = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.incrementHelpNo(id).subscribe(function (u) { return _this.term = u; });
    };
    TermDetailComponent.prototype.onClickIncrementHelpYes = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.incrementHelpYes(id).subscribe(function (u) { return _this.term = u; });
    };
    TermDetailComponent.prototype.onClickDefLike = function (defId) {
        var _this = this;
        this.m.incrementLikesOnDefinition(defId).subscribe(function (u) { return _this.term = u; });
    };
    TermDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-term-detail',
            template: __webpack_require__(/*! ./term-detail.component.html */ "./src/app/term-detail/term-detail.component.html"),
            styles: [__webpack_require__(/*! ./term-detail.component.css */ "./src/app/term-detail/term-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_4__["DataManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TermDetailComponent);
    return TermDetailComponent;
}());



/***/ }),

/***/ "./src/app/term-other-create/term-other-create.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/term-other-create/term-other-create.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm0tb3RoZXItY3JlYXRlL3Rlcm0tb3RoZXItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/term-other-create/term-other-create.component.html":
/*!********************************************************************!*\
  !*** ./src/app/term-other-create/term-other-create.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <h3>Create a new translation for {{term.wordEnglish}}</h3>\r\n    <p>Enter data, and click/tap the Save button</p>\r\n    <form (ngSubmit)='termOtherSave()' #f='ngForm'>\r\n      <div class=\"form-group\">\r\n        <label  class=\"control-label\" for=\"selectedLanguage\">Language:</label>\r\n        <select  class=\"form-control ng-pristine ng-valid ng-touched\" id=\"selectedLanguage\" name=\"selectedLanguage\" [(ngModel)]=\"newTerm.languageCode\">\r\n          <option *ngFor=\"let lang of languageCodes\"  [value]=\"lang.languageCode\">{{lang.language}}</option>\r\n        </select>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"authorName\">Author Name:</label>\r\n        <input class=\"form-control\" id=\"authorName\" name=\"authorName\" [(ngModel)]=\"newTerm.authorName\" required minlength=\"3\"\r\n          maxlength=\"100\" #authorName=\"ngModel\" autofocus>\r\n      \r\n        <div *ngIf='authorName.invalid && (authorName.dirty || authorName.touched)' class='alert alert-danger'>\r\n          <div *ngIf='authorName.errors?.required'>Author Name is required, 3 to 100 characters</div>\r\n          <div *ngIf='authorName.errors?.minlength'>Author Name must be at least 3 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"wordNonEnglish\">Term or word in English:</label>\r\n        <input class=\"form-control\" id=\"wordNonEnglish\" name=\"wordNonEnglish\" [(ngModel)]=\"newTerm.wordNonEnglish\" required minlength=\"3\"\r\n          maxlength=\"100\" #wordNonEnglish=\"ngModel\" autofocus>\r\n        <div *ngIf='wordNonEnglish.invalid && (wordNonEnglish.dirty || wordNonEnglish.touched)' class='alert alert-danger'>\r\n          <div *ngIf='wordNonEnglish.errors?.required'>Term or word in English is required, 3 to 100 characters</div>\r\n          <div *ngIf='wordNonEnglish.errors?.minlength'>Term or word in English must be at least 3 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"fieldOfStudy\">Field of Study:</label>\r\n        <input class=\"form-control\" id=\"fieldOfStudy\" name=\"fieldOfStudy\" [(ngModel)]=\"newTerm.fieldOfStudy\" required minlength=\"3\"\r\n          maxlength=\"100\" #fieldOfStudy=\"ngModel\" autofocus>\r\n        <div *ngIf='fieldOfStudy.invalid && (fieldOfStudy.dirty || fieldOfStudy.touched)' class='alert alert-danger'>\r\n          <div *ngIf='fieldOfStudy.errors?.required'>Field of Study is required, 3 to 100 characters</div>\r\n          <div *ngIf='fieldOfStudy.errors?.minlength'>Field of Study must be at least 3 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"definition\">Definition:</label>\r\n        <textarea  class=\"form-control\" id=\"definition\" name=\"definition\" [(ngModel)]=\"newDefinition.definition\" required minlength=\"50\"\r\n          maxlength=\"5000\" #definition=\"ngModel\" rows=\"5\" autofocus>\r\n        <textarea class=\"form-control ng-pristine ng-invalid ng-touched\" id=\"definition\" maxlength=\"5000\" minlength=\"50\" name=\"definition\" required=\"\" rows=\"5\"></textarea>\r\n        <div *ngIf='definition.invalid && (definition.dirty || definition.touched)' class='alert alert-danger'>\r\n          <div *ngIf='definition.errors?.required'>Definition is required, 50 to 5000 characters</div>\r\n          <div *ngIf='definition.errors?.minlength'>Definition must be at least 50 characters</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"linkAuthoritative\">Link (URL), authoritative:</label>\r\n        <input [(ngModel)]=\"newTerm.linkAuthoritative\" class=\"form-control ng-pristine ng-valid ng-touched\" id=\"linkAuthoritative\" name=\"linkAuthoritative\" pattern=\"(http|https)://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#()_-]*[\\w@?^=%&amp;/~+#()_-])?\" type=\"url\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"linkWikipedia\">Link (URL) on Wikipedia:</label>\r\n        <input [(ngModel)]=\"newTerm.linkWikipedia\"class=\"form-control ng-pristine ng-valid ng-touched\" id=\"linkWikipedia\" name=\"linkWikipedia\" pattern=\"(http|https)://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#()_-]*[\\w@?^=%&amp;/~+#()_-])?\" type=\"url\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"linkYouTube\">Link (URL) on YouTube:</label>\r\n        <input [(ngModel)]=\"newTerm.linkYouTube\"class=\"form-control ng-pristine ng-valid ng-touched\" id=\"linkYouTube\" name=\"linkYouTube\" pattern=\"(http|https)://[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#()_-]*[\\w@?^=%&amp;/~+#()_-])?\" type=\"url\">\r\n      </div>\r\n\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.form.valid\">Save</button>&nbsp;\r\n      <a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to list</a>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/term-other-create/term-other-create.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/term-other-create/term-other-create.component.ts ***!
  \******************************************************************/
/*! exports provided: TermOtherCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermOtherCreateComponent", function() { return TermOtherCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-manager.service */ "./src/app/data-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../languageCodes/langCodes.json */ "./src/app/languageCodes/langCodes.json");
var _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../languageCodes/langCodes.json */ "./src/app/languageCodes/langCodes.json", 1);
/* harmony import */ var _schemas_ReqresTermOtherCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../schemas/ReqresTermOtherCreate */ "./src/app/schemas/ReqresTermOtherCreate.ts");
/* harmony import */ var _schemas_ReqresTermOtherCreateResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../schemas/ReqresTermOtherCreateResponse */ "./src/app/schemas/ReqresTermOtherCreateResponse.ts");
/* harmony import */ var _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../schemas/ReqresDefiniton */ "./src/app/schemas/ReqresDefiniton.ts");









var TermOtherCreateComponent = /** @class */ (function () {
    function TermOtherCreateComponent(m, router, route) {
        this.m = m;
        this.router = router;
        this.route = route;
        this.languageCodes = _languageCodes_langCodes_json__WEBPACK_IMPORTED_MODULE_4__;
        this.newTerm = new _schemas_ReqresTermOtherCreate__WEBPACK_IMPORTED_MODULE_5__["ReqresTermOtherCreate"]();
        this.newTermResult = new _schemas_ReqresTermOtherCreateResponse__WEBPACK_IMPORTED_MODULE_6__["ReqresTermOtherCreateResponse"]();
        this.newDefinition = new _schemas_ReqresDefiniton__WEBPACK_IMPORTED_MODULE_7__["definition"]();
    }
    TermOtherCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.getEnglishTerm(id).subscribe(function (u) { return _this.term = u; });
    };
    TermOtherCreateComponent.prototype.termOtherSave = function () {
        var _this = this;
        var dateNow = new Date().toISOString();
        this.newTerm.dateCreated = dateNow;
        this.newTerm.dateRevised = dateNow;
        this.newDefinition.dateCreated = dateNow;
        this.newDefinition.authorName = this.newTerm.authorName;
        this.newTerm.definitions = new Array();
        this.newTerm.definitions.push(this.newDefinition);
        this.newTerm.termEnglishId = this.route.snapshot.params['id'];
        this.newTerm.wordEnglish = this.term.wordEnglish;
        this.m.reqresTermOtherAdd(this.newTerm).subscribe(function (u) { _this.router.navigate(["/termsOther/detail/", u._id]); });
    };
    TermOtherCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-term-other-create',
            template: __webpack_require__(/*! ./term-other-create.component.html */ "./src/app/term-other-create/term-other-create.component.html"),
            styles: [__webpack_require__(/*! ./term-other-create.component.css */ "./src/app/term-other-create/term-other-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TermOtherCreateComponent);
    return TermOtherCreateComponent;
}());



/***/ }),

/***/ "./src/app/term-other-detail/term-other-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/term-other-detail/term-other-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    text-align: center;\n    margin-bottom: 0;\n  }\n.btn-primary {\n    background-color: rgb(61,39,12);\n    border-color: rgb(61,39,12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybS1vdGhlci1kZXRhaWwvdGVybS1vdGhlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLCtCQUErQjtJQUMvQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC90ZXJtLW90aGVyLWRldGFpbC90ZXJtLW90aGVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwzOSwxMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNjEsMzksMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/term-other-detail/term-other-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/term-other-detail/term-other-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Other (Non-English) Term Detail\r\n  <span *ngIf=\"term.wordNonEnglish\"> {{term.wordNonEnglish}}</span>\r\n  <span *ngIf=\"term.wordExpanded\"> ({{term.wordExpanded}})</span>   \r\n</h3>\r\n<p>&nbsp;</p>\r\n\r\n<div class=\"row\" *ngIf=\"term\">\r\n  <div class=\"col-md-10 col-sm-10\">\r\n    <dl class=\"dl-horizontal\">\r\n      <dt>Definitions\r\n        <br/>({{term.definitions.length}})\r\n        <br/>\r\n        <br/>\r\n        <a class=\"btn btn-primary btn-sm\" routerLink=\"/termsOther/add-definition/{{ term._id }}\">Add another</a>\r\n      </dt>\r\n      <dd>\r\n        <div *ngFor=\"let def of term.definitions\" class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <button  (click) = \"onClickDefLike(def._id)\" class=\"btn btn-default btn-sm\">Like&nbsp;&nbsp;<span class=\"badge\">{{def.likes}}</span></button>\r\n            &nbsp;&nbsp;Author: {{def.authorName}} on {{def.dateCreated | date}}\r\n          </div> \r\n          <div class=\"panel-body\">\r\n          {{def.definition}}\r\n          </div>\r\n        </div>\r\n      </dd>\r\n      <dt>Field Of Study</dt>\r\n      <dd>{{ term.fieldOfStudy}}</dd>\r\n      <br/>\r\n      <dt>Author name</dt>\r\n      <dd>{{ term.authorName }}</dd>\r\n      <br/>\r\n      <dt>Dates</dt>\r\n      <dd>{{ term.dateCreated | date}} <br/>\r\n        {{ term.dateRevised | date}}\r\n      </dd>\r\n      <br/>\r\n      <br/>\r\n      <dt>Links</dt>\r\n      <dd>\r\n        <p>\r\n          <span *ngIf=\"term.linkWikipedia\"><a class=\"btn btn-default btn-sm\" target=\"_blank\" href= {{term.linkWikipedia}}>Wikipedia</a>&nbsp;&nbsp;</span>\r\n          <span *ngIf=\"term.linkYouTube\"><a class=\"btn btn-default btn-sm\" target=\"_blank\" href= {{term.linkYouTube}}>YouTube</a>&nbsp;&nbsp;</span>\r\n        </p>\r\n      </dd>\r\n      <br/>\r\n      <dt>Was this helpful?</dt>\r\n      <dd>\r\n        <p>\r\n          <button  (click)=\"onClickIncrementHelpYes()\" class=\"btn btn-default btn-sm\">Yes&nbsp;&nbsp;<span class=\"badge\">{{term.helpYes}}</span></button>&nbsp;&nbsp;\r\n          <button (click)=\"onClickIncrementHelpNo()\" class=\"btn btn-default btn-sm\">No&nbsp;&nbsp;<span class=\"badge\">{{term.helpNo}}</span></button>&nbsp;&nbsp;\r\n        </p>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"term\">\r\n  <hr>\r\n  <a routerLink=\"/termsEnglish/detail/{{term.termEnglishId}}\" class=\"btn btn-default\">Back to English Term</a>\r\n</div>\r\n\r\n<div *ngIf=\"!term\">\r\n  <p>Cannot Find this Term</p>\r\n  <p><a routerLink=\"/termsEnglish\" class=\"btn btn-default\">Back to English Term</a></p>\r\n</div>"

/***/ }),

/***/ "./src/app/term-other-detail/term-other-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/term-other-detail/term-other-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: TermOtherDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermOtherDetailComponent", function() { return TermOtherDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-manager.service */ "./src/app/data-manager.service.ts");




var TermOtherDetailComponent = /** @class */ (function () {
    function TermOtherDetailComponent(m, route) {
        this.m = m;
        this.route = route;
    }
    TermOtherDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.getOtherTerm(id).subscribe(function (u) { return _this.term = u; });
        console.log(this.term);
    };
    TermOtherDetailComponent.prototype.onClickIncrementHelpNo = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.m.incrementOtherHelpNo(id).subscribe(function (u) { return _this.term = u; });
    };
    TermOtherDetailComponent.prototype.onClickIncrementHelpYes = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log("Piku pagal hai");
        this.m.incrementOtherHelpYes(id).subscribe(function (u) { return _this.term = u; });
    };
    TermOtherDetailComponent.prototype.onClickDefLike = function (defId) {
        var _this = this;
        this.m.incrementLikesOnOtherDefinition(defId).subscribe(function (u) { return _this.term = u; });
    };
    TermOtherDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-term-other-detail',
            template: __webpack_require__(/*! ./term-other-detail.component.html */ "./src/app/term-other-detail/term-other-detail.component.html"),
            styles: [__webpack_require__(/*! ./term-other-detail.component.css */ "./src/app/term-other-detail/term-other-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_3__["DataManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TermOtherDetailComponent);
    return TermOtherDetailComponent;
}());



/***/ }),

/***/ "./src/app/termsEnglish/termsEnglish.component.css":
/*!*********************************************************!*\
  !*** ./src/app/termsEnglish/termsEnglish.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n    color: #fff;\n    background-color: rgb(61,39,12);\n    border-color:  rgb(61,39,12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXNFbmdsaXNoL3Rlcm1zRW5nbGlzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC90ZXJtc0VuZ2xpc2gvdGVybXNFbmdsaXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwzOSwxMik7XG4gICAgYm9yZGVyLWNvbG9yOiAgcmdiKDYxLDM5LDEyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/termsEnglish/termsEnglish.component.html":
/*!**********************************************************!*\
  !*** ./src/app/termsEnglish/termsEnglish.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"form-inline\">List of English terms - search for...\n  <input autofocus  (ngModelChange)=\"doSearch()\" [(ngModel)]=\"searchText\" class=\"form-control\" name=\"searchText\" placeholder=\"(3 or more characters)\" type=\"search\">&nbsp;\n  <a class=\"btn btn-primary\" routerlink=\"/termsEnglish/create\" href=\"/termsEnglish/create\">Add new</a>\n</h3>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Word</th>\n      <th>Author</th>\n      <th>Definition</th>\n      <th>Field of study</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let t of termsEnglish\">\n      <td><span>{{ t.wordEnglish }}</span></td>\n      <td><span>{{ t.authorName }}</span></td>\n      <td><span>{{ t.definitions[0].definition }}</span><span style=\"font-style: italic;\" *ngIf=\"t.definitions.length>1\"><br/>• {{t.definitions.length}} other definition(s)</span></td>\n      <td>{{ t.fieldOfStudy }}</td>\n      <td><span><a class=\"btn btn-default\" routerLink=\"/termsEnglish/detail/{{ t._id }}\">Detail</a></span></td>\n    </tr>\n    \n  </tbody>\n</table>\n<p>&nbsp;</p>\n<hr>\n"

/***/ }),

/***/ "./src/app/termsEnglish/termsEnglish.component.ts":
/*!********************************************************!*\
  !*** ./src/app/termsEnglish/termsEnglish.component.ts ***!
  \********************************************************/
/*! exports provided: TermsEnglishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsEnglishComponent", function() { return TermsEnglishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-manager.service */ "./src/app/data-manager.service.ts");



var TermsEnglishComponent = /** @class */ (function () {
    function TermsEnglishComponent(m) {
        this.m = m;
    }
    TermsEnglishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchText = '';
        this.m.getEnglishTerms().subscribe(function (t) { return _this.termsEnglish = t; });
    };
    TermsEnglishComponent.prototype.doSearch = function () {
        var _this = this;
        console.log(this.searchText.length);
        if (this.searchText !== undefined && this.searchText.length >= 2) {
            this.m.getEnglishTermsByWord(this.searchText).subscribe(function (t) { return _this.termsEnglish = t; });
        }
        if (this.searchText.length === 1) {
            this.m.getEnglishTerms().subscribe(function (t) { return _this.termsEnglish = t; });
        }
    };
    TermsEnglishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termsEnglish',
            template: __webpack_require__(/*! ./termsEnglish.component.html */ "./src/app/termsEnglish/termsEnglish.component.html"),
            styles: [__webpack_require__(/*! ./termsEnglish.component.css */ "./src/app/termsEnglish/termsEnglish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_manager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], TermsEnglishComponent);
    return TermsEnglishComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/parassantra/selfWork/a2-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map