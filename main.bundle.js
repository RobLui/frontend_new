webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Overzicht</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a [routerLink]=\"['uitleg']\">Uitleg</a></li>\n      <li><a [routerLink]=\"['trainers']\">Trainers</a></li>\n      <li><a [routerLink]=\"['pokemon']\">pokemon</a></li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet>\n\n</router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pokemon_list_pokemon_list_component__ = __webpack_require__("../../../../../src/app/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pokemon_form_pokemon_form_component__ = __webpack_require__("../../../../../src/app/pokemon-form/pokemon-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pokemon_box_pokemon_box_component__ = __webpack_require__("../../../../../src/app/pokemon-box/pokemon-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trainer_list_trainer_list_component__ = __webpack_require__("../../../../../src/app/trainer-list/trainer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trainer_form_trainer_form_component__ = __webpack_require__("../../../../../src/app/trainer-form/trainer-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trainer_box_trainer_box_component__ = __webpack_require__("../../../../../src/app/trainer-box/trainer-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: ' ',
                        component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                    },
                    {
                        path: 'uitleg',
                        component: __WEBPACK_IMPORTED_MODULE_6__index__["a" /* IndexComponent */],
                    },
                    {
                        path: 'pokemon',
                        component: __WEBPACK_IMPORTED_MODULE_7__pokemon_list_pokemon_list_component__["a" /* PokemonListComponent */],
                    },
                    {
                        path: 'trainers',
                        component: __WEBPACK_IMPORTED_MODULE_10__trainer_list_trainer_list_component__["a" /* TrainerListComponent */],
                    }])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pokemon_form_pokemon_form_component__["a" /* PokemonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pokemon_list_pokemon_list_component__["a" /* PokemonListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pokemon_box_pokemon_box_component__["a" /* PokemonBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__index__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_10__trainer_list_trainer_list_component__["a" /* TrainerListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__trainer_box_trainer_box_component__["a" /* TrainerBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__trainer_form_trainer_form_component__["a" /* TrainerFormComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__emitter_service_service__["a" /* EmitterServiceService */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pokemon_form_pokemon_form_component__["a" /* PokemonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pokemon_list_pokemon_list_component__["a" /* PokemonListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pokemon_box_pokemon_box_component__["a" /* PokemonBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__index__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_10__trainer_list_trainer_list_component__["a" /* TrainerListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__trainer_box_trainer_box_component__["a" /* TrainerBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__trainer_form_trainer_form_component__["a" /* TrainerFormComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/emitter-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmitterServiceService = (function () {
    function EmitterServiceService(http) {
        this.http = http;
        // POKEMON DATA URL
        this.url = 'https://599748ee3c298d0011c5de65.mockapi.io/api/pokemons';
        // TRAINER DATA URL
        this.trainerurl = 'https://599748ee3c298d0011c5de65.mockapi.io/api/trainers';
    }
    // event emitter
    EmitterServiceService.get = function (ID) {
        if (!this._emitters[ID]) {
            this._emitters[ID] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        }
        return this._emitters[ID];
    };
    // Fetch all existing pokemon
    EmitterServiceService.prototype.getPokemon = function () {
        // ...using get request
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Port not running'); });
    };
    // Add a new pokemon
    EmitterServiceService.prototype.addPokemon = function (body) {
        // let bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.url, body, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Adding failed, data is inserted tho..'); });
    };
    // Update pokemon
    EmitterServiceService.prototype.updatePokemon = function (body) {
        // let bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.url + "/" + body['id'], body, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Updating failed'); }); // ...errors if any
    };
    // Delete pokemon
    EmitterServiceService.prototype.removePokemon = function (id) {
        return this.http.delete(this.url + "/" + id) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Removing failed'); }); // ...errors if any
    };
    // Fetch all existing trainers
    EmitterServiceService.prototype.getTrainers = function () {
        // ...using get request
        return this.http.get(this.trainerurl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Port not running'); });
    };
    // Add a new Trainer
    EmitterServiceService.prototype.addTrainer = function (body) {
        // let bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.trainerurl, body, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Adding failed, data is inserted tho..'); });
    };
    // Update trainer
    EmitterServiceService.prototype.updateTrainer = function (body) {
        // let bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.trainerurl + "/" + body['id'], body, options) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Updating failed'); }); // ...errors if any
    };
    // Delete trainer
    EmitterServiceService.prototype.removeTrainer = function (id) {
        return this.http.delete(this.trainerurl + "/" + id) // ...using put request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Error - Removing failed'); }); // ...errors if any
    };
    // data emitter
    EmitterServiceService._emitters = {};
    EmitterServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmitterServiceService);
    return EmitterServiceService;
    var _a;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/emitter-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
        this.listId = 'POKEMON_COMPONENT_LIST';
        this.editId = 'POKEMON_COMPONENT_EDIT';
        this.trainereditId = 'TRAINER_COMPONENT_EDIT';
        this.trainerlistId = 'TRAINER_COMPONENT_LIST';
    }
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-uitleg-widget',
            template: "\n        <div class=\"container align-center\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"mbr-white col-md-10\">\n                    <h2>\n                        Uitleg:\n                    </h2>\n                    <div class=\"container\">\n                        <blockquote class=\"test\">\n                            <p>Functionaliteiten</p>\n                            <ul class=\"info\">\n                                <li>\n                                    <p>Voeg nieuwe trainers of pokemon toe\n                                    <p>\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <a href=\"/uitleg#toevoegen\">toon hoe</a>\n                                        </button>\n                                    </p>\n                                    <!--<button class=\"btn btn-secondary btn-sm\">toon hoe</button></p>-->\n                                </li>\n                                <li>\n                                    <p>Pas trainers of pokemon aan\n                                    <p>\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <a href=\"/uitleg#aanpassen\">toon hoe</a>\n                                        </button>\n                                    </p>\n                                    <!--<button class=\"btn btn-secondary btn-sm\">toon hoe</button></p>-->\n                                <li>\n                                    <p>Verwijder overbodige trainers en pokemon\n                                    <p>\n                                        <button class=\"btn btn-secondary btn-sm\">\n                                            <a href=\"/uitleg#verwijderen\">toon hoe</a>\n                                        </button>\n                                    </p>                                </li>\n                            </ul>\n                        </blockquote>\n                        <blockquote>\n                            <p>Klik om te beginnen op 1 van de 2 tabs die je in de navigatie ziet</p>\n                            <button class=\"btn btn-primary\">\n                                <a [routerLink]=\"['/pokemon']\">pokemon</a>\n                            </button>\n                            <button class=\"btn btn-secondary\">\n                                <a [routerLink]=\"['/trainers']\">trainers</a>\n                            </button>\n                        </blockquote>\n                        \n                        <!---->\n                            <div class=\"wrapper\">\n                                <!--TOEVOEGEN-->\n                                <div id=\"toevoegen\" class=\"overlay\">\n                                    <div class=\"popup\">\n                                        <h2>Info box</h2>\n                                        <a class=\"close\" href=\"/uitleg\">&times;</a>\n                                        <div class=\"content\">\n                                            <p>Klik op de trainers navigatie </p>\n                                            <p>Voer de gegevens van een trainer in</p>\n                                            <p>Druk op \"add\" knop om de trainer te bewaren</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--AANPASSEN-->\n                                <div id=\"aanpassen\" class=\"overlay\">\n                                    <a class=\"cancel\" href=\"/uitleg\"></a>\n                                    <div class=\"popup\">\n                                        <h2>Info box</h2>\n                                        <a class=\"close\" href=\"/uitleg\">&times;</a>\n                                        <div class=\"content\">\n                                            <p>Klik op het blauwe knopje</p>\n                                            <p>Voer de nieuwe gegevens in bovenaan</p>\n                                            <p>Bewaar de nieuwe gegevens</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--VERWIJDEREN-->\n                                <div id=\"verwijderen\" class=\"overlay\">\n                                    <div class=\"popup\">\n                                        <h2>Info box</h2>\n                                        <a class=\"close\" href=\"/uitleg\">&times;</a>\n                                        <div class=\"content\">\n                                            <p>Klik op de rode knop met het kruisje</p>\n                                            <p>De gegevens worden verwijderd!</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        <!---->\n                        \n                    </div>\n                </div>\n            </div>\n        </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/model/Trainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trainer; });
var Trainer = (function () {
    function Trainer(id, name, lastname, description, age) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.description = description;
        this.age = age;
    }
    return Trainer;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/Trainer.js.map

/***/ }),

/***/ "../../../../../src/app/model/pokemon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pokemon; });
var Pokemon = (function () {
    function Pokemon(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    return Pokemon;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/pokemon.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon-box/pokemon-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Pokemon ID: {{pokemon.id}}\n  </div>\n  <div class=\"panel-body\">\n    <p>\n      <span>Name: {{pokemon.name}} </span>\n    </p>\n    <p>\n      <span>Type: {{pokemon.type}}</span>\n    </p>\n    <button class=\"btn btn-danger pull-right\" (click)=\"deletePokemon(pokemon.id)\">\n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </button>\n    <button class=\"btn btn-info pull-right\" (click)=\"editPokemon(event)\">\n      <span class=\"glyphicon glyphicon-edit\"></span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pokemon-box/pokemon-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_pokemon__ = __webpack_require__("../../../../../src/app/model/pokemon.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonBoxComponent = (function () {
    // Constructor
    function PokemonBoxComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
    }
    PokemonBoxComponent.prototype.editPokemon = function (e) {
        // Emit edit event
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.editId).emit(this.pokemon);
    };
    PokemonBoxComponent.prototype.deletePokemon = function (id) {
        var _this = this;
        // Call removeComment() from CommentService to delete comment
        this.EmitterServiceService.removePokemon(id).subscribe(function (pokemonz) {
            __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(_this.listId).emit(pokemonz);
        }, function (err) { console.log(err); });
    };
    // Deze gaat af bij het inladen van de box-component
    PokemonBoxComponent.prototype.ngOnChanges = function (changes) {
        console.log('pokemon box');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_pokemon__["a" /* Pokemon */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_pokemon__["a" /* Pokemon */]) === 'function' && _a) || Object)
    ], PokemonBoxComponent.prototype, "pokemon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], PokemonBoxComponent.prototype, "listId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], PokemonBoxComponent.prototype, "editId", void 0);
    PokemonBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-pokemon-box',
            template: __webpack_require__("../../../../../src/app/pokemon-box/pokemon-box.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */]) === 'function' && _b) || Object])
    ], PokemonBoxComponent);
    return PokemonBoxComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/pokemon-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon-form/pokemon-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitPokemon()\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\"><span class=\"glyphicon glyphicon-user\"></span></span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\" required=\"required\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Type\" [(ngModel)]=\"model.type\" name=\"type\" required=\"required\">\n    </div>\n    <div class=\" add-pokemon \">\n      <button *ngIf=\"!editing \" type=\"submit\" class=\"btn btn-primary btn-block\">Add</button>\n      <button *ngIf=\"editing \" type=\"submit \" class=\"btn btn-warning btn-block\">Update</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/pokemon-form/pokemon-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_pokemon__ = __webpack_require__("../../../../../src/app/model/pokemon.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonFormComponent = (function () {
    function PokemonFormComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
        // Local properties
        this.model = new __WEBPACK_IMPORTED_MODULE_2__model_pokemon__["a" /* Pokemon */](new Date(), '', '');
        this.editing = false;
    }
    PokemonFormComponent.prototype.submitPokemon = function () {
        var _this = this;
        // Variable to hold a reference of addPokemon/updatePokemon
        var pokemonOperation;
        if (!this.editing) {
            // Create a new pokemon
            pokemonOperation = this.EmitterServiceService.addPokemon(this.model);
        }
        else {
            // Update an existing pokemon
            pokemonOperation = this.EmitterServiceService.updatePokemon(this.model);
        }
        // Subscribe to observable
        pokemonOperation.subscribe(function (pokemonzz) {
            // Emit list event
            __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(_this.listId).emit(__WEBPACK_IMPORTED_MODULE_2__model_pokemon__["a" /* Pokemon */]);
            // Empty model
            _this.model = new __WEBPACK_IMPORTED_MODULE_2__model_pokemon__["a" /* Pokemon */](new Date(), '', '');
            // Switch editing status
            if (_this.editing) {
                _this.editing = !_this.editing;
            }
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    // Deze gaat af bij de edit knop
    PokemonFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.editId).subscribe(function (pokemon) {
            _this.model = pokemon;
            _this.editing = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], PokemonFormComponent.prototype, "editId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], PokemonFormComponent.prototype, "listId", void 0);
    PokemonFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-pokemon-form',
            template: __webpack_require__("../../../../../src/app/pokemon-form/pokemon-form.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */]) === 'function' && _a) || Object])
    ], PokemonFormComponent);
    return PokemonFormComponent;
    var _a;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/pokemon-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon-list/pokemon-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pokemon-form [listId]=\"listId\" [editId]=\"editId\"></app-pokemon-form>\n<app-pokemon-box\n        [editId]=\"editId\" [listId]=\"listId\"\n        *ngFor=\"let pokemon of pokemon\"\n        [pokemon]=\"pokemon\">\n        Pokemon ID:{{pokemon.id}}\n</app-pokemon-box>\n\n"

/***/ }),

/***/ "../../../../../src/app/pokemon-list/pokemon-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokemonListComponent = (function () {
    function PokemonListComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
    }
    PokemonListComponent.prototype.loadPokemon = function () {
        var _this = this;
        // Get all pokemon from the service
        this.EmitterServiceService.getPokemon()
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; }, // Bind to view/html component
        function (// Bind to view/html component
            err) {
            console.log(err); // Log errors als er zijn
        });
    };
    PokemonListComponent.prototype.ngOnInit = function () {
        // Vuur de load pokemon functie uit
        this.loadPokemon();
        // console.log('ngoninit pokemonlistcomponent');
    };
    PokemonListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.listId).subscribe(function (pokemon) {
            _this.loadPokemon();
            // console.log('ngonchanges pokemonlistcomponent');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], PokemonListComponent.prototype, "listId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], PokemonListComponent.prototype, "editId", void 0);
    PokemonListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-pokemon-list',
            template: __webpack_require__("../../../../../src/app/pokemon-list/pokemon-list.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */]) === 'function' && _a) || Object])
    ], PokemonListComponent);
    return PokemonListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/pokemon-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/trainer-box/trainer-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Trainer ID: {{trainer.id}}\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-1\">\n          <p>Voornaam: {{trainer.name}} </p>\n        </div>\n        <div class=\"col-md-2\">\n          <p>Achternaam: {{trainer.lastname}}</p>\n        </div>\n        <div class=\"col-md-2\">\n        <p>Beschrijving: {{trainer.description}}</p>\n        </div>\n        <div class=\"col-md-1\">\n          <p>Leeftijd: {{trainer.age}}</p>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-danger pull-right\" (click)=\"deleteTrainer(trainer.id)\">\n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </button>\n    <button class=\"btn btn-info pull-right\" (click)=\"editTrainer()\" >\n      <span class=\"glyphicon glyphicon-edit\"></span>\n    </button>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/trainer-box/trainer-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Trainer__ = __webpack_require__("../../../../../src/app/model/Trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainerBoxComponent = (function () {
    // Constructor
    function TrainerBoxComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
        this.editing = false;
    }
    TrainerBoxComponent.prototype.editTrainer = function () {
        // Emit edit event
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainereditId).emit(this.trainer);
    };
    TrainerBoxComponent.prototype.deleteTrainer = function (id) {
        var _this = this;
        // Call removeComment() from CommentService to delete comment
        this.EmitterServiceService.removeTrainer(id).subscribe(function (trainer) {
            __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(_this.trainerlistId).emit(trainer);
        }, function (err) { console.log(err); });
    };
    TrainerBoxComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainereditId).subscribe(function (trainer) {
            _this.model = trainer;
            _this.editing = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */]) === 'function' && _a) || Object)
    ], TrainerBoxComponent.prototype, "trainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], TrainerBoxComponent.prototype, "trainerlistId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], TrainerBoxComponent.prototype, "trainereditId", void 0);
    TrainerBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-trainer-box',
            template: __webpack_require__("../../../../../src/app/trainer-box/trainer-box.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */]) === 'function' && _b) || Object])
    ], TrainerBoxComponent);
    return TrainerBoxComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/trainer-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/trainer-form/trainer-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submitTrainer()\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\"><span class=\"glyphicon glyphicon-user\"></span></span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Voornaam\" [(ngModel)]=\"model.name\" name=\"name\" required=\"required\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Achternaam\" [(ngModel)]=\"model.lastname\" name=\"lastname\" required=\"required\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Beschrijving\" [(ngModel)]=\"model.description\" name=\"description\" required=\"required\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Achternaam\" [(ngModel)]=\"model.age\" name=\"age\" required=\"required\">\n    </div>\n    <div class=\" add-trainer \">\n      <button *ngIf=\"!editing \" type=\"submit\" class=\"btn btn-primary btn-block\">Add</button>\n      <button *ngIf=\"editing \" type=\"submit\" class=\"btn btn-warning btn-block\">Update</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/trainer-form/trainer-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Trainer__ = __webpack_require__("../../../../../src/app/model/Trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainerFormComponent = (function () {
    function TrainerFormComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */](new Date(), '', '', '', null);
        this.editing = false;
    }
    TrainerFormComponent.prototype.submitTrainer = function () {
        var _this = this;
        // Variable to hold a reference of addComment/updateComment
        var trainerOperation;
        if (!this.editing) {
            // Create a new pokemon
            trainerOperation = this.EmitterServiceService.addTrainer(this.model);
        }
        else {
            // Update an existing pokemon
            trainerOperation = this.EmitterServiceService.updateTrainer(this.model);
        }
        // console.log(trainerOperation);
        // Subscribe to observable
        trainerOperation.subscribe(function (trainer) {
            // Emit list event
            __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(_this.trainerlistId).emit(trainer);
            // Empty model
            _this.model = new __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */](new Date(), '', '', '', null);
            // Switch editing status
            if (_this.editing) {
                _this.editing = !_this.editing;
            }
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    TrainerFormComponent.prototype.editTrainer = function () {
        // Emit edit event
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainereditId).emit(this.trainerlistId);
        this.model = this.trainer;
        this.editing = true;
    };
    // Deze gaat af bij de edit knop
    TrainerFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainereditId).subscribe(function (trainer) {
            _this.model = trainer;
            _this.editing = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */]) === 'function' && _a) || Object)
    ], TrainerFormComponent.prototype, "trainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], TrainerFormComponent.prototype, "trainereditId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], TrainerFormComponent.prototype, "trainerlistId", void 0);
    TrainerFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-trainer-form',
            template: __webpack_require__("../../../../../src/app/trainer-form/trainer-form.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */]) === 'function' && _b) || Object])
    ], TrainerFormComponent);
    return TrainerFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/trainer-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/trainer-list/trainer-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-trainer-form [trainerlistId]=\"trainerlistId\" [trainereditId]=\"trainereditId\"></app-trainer-form>\n\n<app-trainer-box\n        [trainereditId]=\"trainereditId\" [trainerlistId]=\"trainerlistId\"\n        *ngFor=\"let trainer of trainer\"\n        [trainer]=\"trainer\">\n        Trainer ID:{{trainer.id}}\n</app-trainer-box>\n"

/***/ }),

/***/ "../../../../../src/app/trainer-list/trainer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__ = __webpack_require__("../../../../../src/app/emitter-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Trainer__ = __webpack_require__("../../../../../src/app/model/Trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainerListComponent = (function () {
    function TrainerListComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__model_Trainer__["a" /* Trainer */](new Date(), '', '', '', null);
        this.editing = false;
    }
    TrainerListComponent.prototype.loadTrainers = function () {
        var _this = this;
        // Get all pokemon from the service
        this.EmitterServiceService.getTrainers()
            .subscribe(function (trainer) { return _this.trainer = trainer; }, // Bind to view/html component
        function (// Bind to view/html component
            err) {
            console.log(err); // Log errors als er zijn
        });
    };
    TrainerListComponent.prototype.editTrainer = function () {
        // Emit edit event
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainereditId).emit(this.trainer);
    };
    TrainerListComponent.prototype.ngOnInit = function () {
        // Vuur de load trainer functie uit
        this.loadTrainers();
    };
    TrainerListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.loadTrainers();
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainerlistId).subscribe(function (trainers) { return _this.trainer = trainers; }, // Bind to view/html component
        function (// Bind to view/html component
            err) {
            console.log(err); // Log errors als er zijn
        });
        __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */].get(this.trainereditId).subscribe(function (trainer) {
            _this.model = trainer;
            _this.editing = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', Array)
    ], TrainerListComponent.prototype, "trainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], TrainerListComponent.prototype, "trainerlistId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], TrainerListComponent.prototype, "trainereditId", void 0);
    TrainerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-trainer-list',
            template: __webpack_require__("../../../../../src/app/trainer-list/trainer-list.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__emitter_service_service__["a" /* EmitterServiceService */]) === 'function' && _a) || Object])
    ], TrainerListComponent);
    return TrainerListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/trainer-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/louise/Documents/School/frontend_bram/site/bram/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map