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

/***/ "./src/app/actions/cart.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_FROM_CART; });
/* unused harmony export ADD_TO_PRODUCT_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_QUANTITY; });
/* unused harmony export AddToCart */
/* unused harmony export RemoveFromCart */
/* unused harmony export UpdateQuanity */
var ADD_TO_CART = 'ADD_TO_CART';
var REMOVE_FROM_CART = 'REMOVE_FROM_CART';
var ADD_TO_PRODUCT_LIST = 'ADD_TO_PRODUCT_LIST';
var UPDATE_QUANTITY = 'UPDATE_QUANTITY';
var AddToCart = /** @class */ (function () {
    function AddToCart(payload) {
        this.payload = payload;
        this.type = ADD_TO_CART;
        console.warn('AddToCart Action');
    }
    return AddToCart;
}());

var RemoveFromCart = /** @class */ (function () {
    function RemoveFromCart(payload) {
        this.payload = payload;
        this.type = REMOVE_FROM_CART;
        console.warn('RemoveFromCart Action');
    }
    return RemoveFromCart;
}());

var UpdateQuanity = /** @class */ (function () {
    function UpdateQuanity(payload) {
        this.payload = payload;
        this.type = UPDATE_QUANTITY;
        console.warn('UpdateQuantity Action');
    }
    return UpdateQuanity;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

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
        this.title = 'app works?!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export localStorageSyncReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngrx_store_localstorage__ = __webpack_require__("./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngrx_store_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngrx_store_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reducers__ = __webpack_require__("./src/app/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var reducers = { cart: __WEBPACK_IMPORTED_MODULE_15__reducers__["a" /* cartReducer */] };
function localStorageSyncReducer(reducer) {
    return Object(__WEBPACK_IMPORTED_MODULE_7_ngrx_store_localstorage__["localStorageSync"])({ keys: ['cart'], rehydrate: true })(reducer);
}
var metaReducers = [localStorageSyncReducer];
var appRoutes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_11__product_product_component__["a" /* ProductComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_13__products_products_component__["a" /* ProductsComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_14__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].forRoot(reducers, { metaReducers: metaReducers }),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

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
            template: __webpack_require__("./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Habeerdashery</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\">Products</a>\n      </li>\n      <!--\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>-->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search <i class=\"fa fa-search\"></i></button>\n    </form>\n    <div class=\"\" style=\"padding-left:20px;\"><!-- TODO: refactor this. inline is gross -->\n      <button class=\"btn btn-outline-success\" routerLink=\"shopping-cart\"><i class=\"fa fa-shopping-cart\"></i> {{ totalQuantity((products | async)?.cart) }}</button>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(store) {
        this.store = store;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.products = this.store.select('cart');
    };
    NavBarComponent.prototype.totalQuantity = function (cart) {
        if (cart === void 0) { cart = []; }
        if (!cart || !cart.length)
            return 0;
        return cart.map(function (c) { return (c.quantity); }).reduce(function (a, b) { return a + b; });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  No route found. How embarrasing.\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http, store) {
        this.http = http;
        this.store = store;
    }
    ProductService.prototype.extractData = function (res) {
        return res.json();
    };
    ProductService.prototype.extractDataFirstElement = function (res) {
        return res.json()[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get('https://api.punkapi.com/v2/beers')
            .map(this.extractData)
            .map(function (data) {
            data.forEach(function (datum) { return datum.price = datum.abv * 4; }); // nice semi-random price
            return data;
        });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get("https://api.punkapi.com/v2/beers/" + id)
            .map(this.extractDataFirstElement);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_cart_actions__ = __webpack_require__("./src/app/actions/cart.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, productService, store) {
        this.route = route;
        this.productService = productService;
        this.store = store;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.productService.getProduct(this.id).subscribe(function (product) { return _this.product = product; });
    };
    ProductComponent.prototype.addToCart = function (product) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__actions_cart_actions__["a" /* ADD_TO_CART */], payload: { product: product } });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: "\n<div class=\"container\" *ngIf=\"product?.name\">\n  <div class=\"row\">\n    <div class=\"col-md-12 d-flex align-items-stretch\">\n      <div class=\"card card-cascade\">\n        \n        <div class=\"card-body\">\n        <img class=\"img-fluid\" [src]=\"product?.image_url\" width=\"50\" style=\"float:left;padding-right:15px\">\n          <h4 class=\"card-title\"><a class=\"nav-link\">{{product?.name}}</a></h4>\n          <p class=\"card-text\"><small class=\"text-muted\">ABV: {{product?.abv}}</small></p>\n          <p class=\"card-text\">{{product?.description}}</p>\n\n          <button class=\"btn btn-primary\" (click)=\"addToCart(product)\">Add to cart</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
            providers: [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_cart_actions__ = __webpack_require__("./src/app/actions/cart.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, store) {
        this.productService = productService;
        this.store = store;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.addToCart = function (product) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions_cart_actions__["a" /* ADD_TO_CART */], payload: { product: product } });
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: "\n    <div class=\"container\">\n      <div class=\"row\">\n        <div *ngFor=\"let product of products\" class=\"col-md-4 d-flex align-items-stretch\">\n          <div class=\"card card-cascade\">\n            \n            <div class=\"card-body\">\n            <img class=\"img-fluid\" [src]=\"product.image_url\" width=\"50\" style=\"float:left;padding-right:15px\">\n              <h4 class=\"card-title\"><a class=\"nav-link\" routerLink=\"/products/{{product.id}}\">{{product.name}}</a></h4>\n              <p class=\"card-text\"><small class=\"text-muted\">ABV: {{product.abv}}</small></p>\n              <p class=\"card-text\">{{product.description}}</p>\n              <p class=\"card-text\"><a class=\"nav-link\" routerLink=\"/products/{{product.id}}\">More Info</a><p>\n\n              <button class=\"btn btn-primary\" (click)=\"addToCart(product)\">Add to cart {{product.price | currency}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/reducers/cart.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cartReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__ = __webpack_require__("./src/app/actions/cart.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    cart: []
};
function cartReducer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log('CART REDUCER', action, state);
    var cartItems = state.cart;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__["a" /* ADD_TO_CART */]:
            if (!cartItems.find(function (c) { return c.product.id === action.payload.product.id; })) {
                action.payload.quantity = 1;
                action.payload.price = action.payload.product.price;
                cartItems.push(action.payload);
            }
            else {
                cartItems.find(function (c) { return c.product.id === action.payload.product.id; }).quantity += 1;
            }
            return __assign({}, state, { cart: cartItems });
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__["b" /* REMOVE_FROM_CART */]:
            cartItems = cartItems.filter(function (cartItem) { return action.payload.product.id !== cartItem.product.id; });
            return __assign({}, state, { cart: cartItems });
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart_actions__["c" /* UPDATE_QUANTITY */]:
            cartItems.find(function (c) { return c.product.id === action.payload.product.id; }).quantity = action.payload.quantity;
            return __assign({}, state, { cart: cartItems });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_reducer__ = __webpack_require__("./src/app/reducers/cart.reducer.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cart_reducer__["a"]; });




/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_cart_actions__ = __webpack_require__("./src/app/actions/cart.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(productService, store) {
        this.productService = productService;
        this.store = store;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.cartItems = this.store.select('cart');
    };
    ShoppingCartComponent.prototype.removeProduct = function (payload) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_cart_actions__["b" /* REMOVE_FROM_CART */], payload: payload });
    };
    ShoppingCartComponent.prototype.calculateTotalOrderPrice = function (cartItems) {
        if (cartItems === void 0) { cartItems = []; }
        if (!cartItems || !cartItems.length)
            return 0;
        var rtn = cartItems
            .map(function (item) { return (item.price * item.quantity); }) // pulls price into array so it's easier to sum
            .reduce(function (a, b) { return a + b; });
        return rtn;
    };
    ShoppingCartComponent.prototype.quantityChanged = function (product, quantity) {
        quantity = +quantity; // I feel like this shouldn't be needed in TS
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions_cart_actions__["c" /* UPDATE_QUANTITY */], payload: { product: product, quantity: quantity } });
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: "\n    <table id=\"cart\" class=\"table table-hover table-condensed\">\n        <thead>\n        <tr>\n          <th style=\"width:50%\">Product</th>\n          <th style=\"width:10%\">Price</th>\n          <th style=\"width:8%\">Quantity</th>\n          <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n          <th style=\"width:10%\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let cartItem of (cartItems | async)?.cart\">\n          <td data-th=\"Product\">\n            <div class=\"row\">\n              <div class=\"col-sm-2 hidden-xs\"><img class=\"img-fluid\" [src]=\"cartItem.product?.image_url\" width=\"50\" style=\"float:left\">\n              </div>\n              <div class=\"col-sm-10\">\n                <h4 class=\"nomargin\">{{cartItem.product.name}}</h4>\n                <p>{{cartItem.product.description}}</p>\n              </div>\n            </div>\n          </td>\n          <td data-th=\"Price\">{{cartItem.product.price | currency}}</td>\n          <td data-th=\"Quantity\">\n            <input type=\"number\" class=\"form-control text-center\" [value]=\"cartItem.quantity\" min=\"1\" (input)=\"quantityChanged(cartItem.product, $event.target.value)\">\n          </td>\n          <td data-th=\"Subtotal\" class=\"text-center\">{{cartItem.price * cartItem.quantity | currency}}</td>\n          <td class=\"actions\" data-th=\"\">\n            <button class=\"btn btn-danger btn-sm\" (click)=\"removeProduct(cartItem)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n          </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr class=\"visible-xs\">\n          <td class=\"text-center\"><strong>Total {{ calculateTotalOrderPrice((cartItems | async)?.cart) | currency }}</strong></td>\n        </tr>\n        <tr>\n          <td><a href=\"#\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\n          <td colspan=\"2\" class=\"hidden-xs\"></td>\n          <td class=\"hidden-xs text-center\"><strong>Total {{ calculateTotalOrderPrice((cartItems | async)?.cart) | currency }}</strong></td>\n          <td><a href=\"#\" class=\"btn btn-success btn-block\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\n        </tr>\n      </tfoot>\n    </table>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());

// <div class="container" *ngIf="products | async as p">###{{p | json}}
//   </div>


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map