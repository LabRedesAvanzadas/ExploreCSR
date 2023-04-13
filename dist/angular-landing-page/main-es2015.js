(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\ExploreCSR\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");


class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 59, vars: 1, consts: [[1, "relative", "bg-gray-300", "pt-8", "pb-6"], [1, "bottom-auto", "top-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "-mt-20", 2, "height", "80px"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-gray-300", "fill-current"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "font-semibold"], [1, "text-lg", "mt-0", "mb-2", "text-gray-700"], [1, "mt-6"], ["type", "button", 1, "bg-white", "text-blue-400", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2", "p-3"], [1, "flex", "fab", "fa-twitter"], ["type", "button", 1, "bg-white", "text-blue-600", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2", "p-3"], [1, "flex", "fab", "fa-facebook-square"], ["type", "button", 1, "bg-white", "text-pink-400", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2", "p-3"], [1, "flex", "fab", "fa-dribbble"], ["type", "button", 1, "bg-white", "text-gray-900", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2", "p-3"], [1, "flex", "fab", "fa-github"], [1, "flex", "flex-wrap", "items-top", "mb-6"], [1, "w-full", "lg:w-4/12", "px-4", "ml-auto"], [1, "block", "uppercase", "text-gray-600", "text-sm", "font-semibold", "mb-2"], [1, "list-unstyled"], ["href", "https://www.creative-tim.com/presentation", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], ["href", "https://blog.creative-tim.com", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], ["href", "https://www.github.com/creativetimofficial", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], ["href", "https://www.creative-tim.com/bootstrap-themes/free", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], [1, "w-full", "lg:w-4/12", "px-4"], ["href", "https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], ["href", "https://creative-tim.com/terms", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], ["href", "https://creative-tim.com/privacy", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], ["href", "https://creative-tim.com/contact-us", 1, "text-gray-700", "hover:text-gray-900", "font-semibold", "block", "pb-2", "text-sm"], [1, "my-6", "border-gray-400"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-4/12", "px-4", "mx-auto", "text-center"], [1, "text-sm", "text-gray-600", "font-semibold", "py-1"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Let's keep in touch!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Find us on any of these platforms, we respond 1-2 business days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Free Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Other Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "MIT License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", ctx.date, " CcDev ");
    } }, directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], encapsulation: 2 });


/***/ }),

/***/ "O3kQ":
/*!************************************************!*\
  !*** ./src/app/pages/demos/demos.component.ts ***!
  \************************************************/
/*! exports provided: DemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosComponent", function() { return DemosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = ["fullpageRef"];
class DemosComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.config = {
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            // events callback
            afterLoad: (origin, destination, direction) => {
                // console.log(destination);
            },
            afterRender: () => {
                // console.log('afterRender');
            },
            afterResize: (width, height) => {
                // console.log('afterResize' + width + ' ' + height);
            },
            afterSlideLoad: (section, origin, destination, direction) => {
                // console.log(destination);
            }
        };
    }
    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }
    ngOnInit() {
    }
    addSection() {
        // change background color
        this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());
        // creating the section div
        const section = this.renderer.createElement('div');
        this.renderer.addClass(section, 'section');
        this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
        // adding section
        this.renderer.appendChild(this.fp_directive.nativeElement, section);
        this.fullpage_api.build();
    }
    removeLast() {
        const lastSection = this.fp_directive.nativeElement.lastChild;
        if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
            this.fullpage_api.moveSectionUp();
        }
        lastSection.remove();
        this.fullpage_api.build();
    }
    randomColor() {
        return '#' + Math.random().toString(16).slice(-3);
    }
}
DemosComponent.ɵfac = function DemosComponent_Factory(t) { return new (t || DemosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DemosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemosComponent, selectors: [["app-demos"]], viewQuery: function DemosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fp_directive = _t.first);
    } }, decls: 58, vars: 1, consts: [["id", "menu"], ["data-menuanchor", "firstPage"], ["href", "#firstPage"], ["data-menuanchor", "secondPage"], ["href", "#secondPage"], ["data-menuanchor", "thirdPage"], ["href", "#thirdPage"], ["data-menuanchor", "fourthPage"], ["href", "#fourthPage"], ["fullpage", "", "id", "fullpage", 3, "options", "ref"], ["fullpageRef", ""], [1, "section"], [1, "slide", "slide-img", 2, "background-color", "rgb(27 15 53)"], ["src", "assets/img/demos/dreambooth/1.png", 1, "image"], [1, "slide"], ["routerLink", "secondTest"], [3, "click"]], template: function DemosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DreamBooth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Second section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Third section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fourth section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ref", function DemosComponent_Template_div_ref_15_listener($event) { return ctx.getRef($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Slide 3.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Slide 3.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Section 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_31_listener() { return ctx.addSection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add sections and change color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_33_listener() { return ctx.fullpage_api.moveSectionDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Move down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_35_listener() { return ctx.removeLast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Remove last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Slide 3.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Slide 3.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Slide 3.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Section 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_52_listener() { return ctx.addSection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Add sections and change color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_54_listener() { return ctx.fullpage_api.moveTo("secondPage", 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Move to second page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_56_listener() { return ctx.removeLast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Remove last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.config);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_2__["ɵb"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_2__["ɵa"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".section[_ngcontent-%COMP%] {\r\n  text-align:center;\r\n  font-size: 3em;\r\n}\r\n\r\n.slide-img[_ngcontent-%COMP%]{\r\ntext-align: -webkit-center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  margin: 10px;\r\n  color: #000;\r\n  background:#fff;\r\n  background: rgba(255,255,255, 0.5);\r\n  border-radius: 10px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\r\n  background:#666;\r\n  background: rgba(0,0,0, 0.5);\r\n  color: #fff;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration:none;\r\n  color: #000;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: #000;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n  background: rgba(255,255,255, 0.8);\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding: 9px 18px;\r\n  display:block;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]{\r\n  position:fixed;\r\n  top:0;\r\n  left:0;\r\n  height: 40px;\r\n  z-index: 70;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin:0;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  #menu[_ngcontent-%COMP%]{\r\n    position:fixed;\r\n    top:5vh;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQ0FBa0M7RUFFbEMsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsS0FBSztFQUNMLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLE9BQU87RUFDVDtBQUNGIiwiZmlsZSI6ImRlbW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5zbGlkZS1pbWd7XHJcbnRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI21lbnUgbGkge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jbWVudSBsaS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDojNjY2O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuNSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuI21lbnUgbGkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4jbWVudSBsaS5hY3RpdmUgYTpob3ZlcntcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4jbWVudSBsaTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xyXG59XHJcbiNtZW51IGxpIGEsXHJcbiNtZW51IGxpLmFjdGl2ZSBhe1xyXG4gIHBhZGRpbmc6IDlweCAxOHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuI21lbnUgbGkuYWN0aXZlIGF7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuI21lbnV7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB6LWluZGV4OiA3MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjowO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAjbWVudXtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjV2aDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'angular-landing-page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.component */ "fsYz");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _pages_demos_demos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/demos/demos.component */ "O3kQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__["AngularFullpageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_demos_demos_component__WEBPACK_IMPORTED_MODULE_9__["DemosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__["AngularFullpageModule"]] }); })();


/***/ }),

/***/ "fsYz":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");





function LandingComponent_ng_template_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Jos\u00E9 C\u00F3rdova");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Carmen Vaca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mentor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Christian Tutiv\u00E9n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mentor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ing. Jocellyn Luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Organizaci\u00F3n/Tutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ing. Carlos Cede\u00F1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Organizaci\u00F3n/Tutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ing. Sandra Coello");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Organizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Msc. Christopher Vaccaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/demos"]; };
class LandingComponent {
    constructor(router) {
        this.router = router;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 500,
            autoplay: true,
            navText: ['&#8249', '&#8250;'],
            nav: true
        };
        this.config = {
            // fullpage options
            licenseKey: 'YOUR LICENSE KEY HERE',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            // fullpage callbacks
            afterResize: () => {
                console.log('After resize');
            },
            afterLoad: (origin, destination, direction) => {
                console.log(origin.index);
            }
        };
    }
    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }
    ngOnInit() {
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 242, vars: 3, consts: [[1, "relative", "pt-16", "pb-32", "flex", "content-center", "items-center", "justify-center", "min-75"], [1, "absolute", "top-0", "w-full", "h-full", "bg-center", "bg-cover", "bg-svg"], ["id", "blackOverlay", 1, "w-full", "h-full", "absolute", "opacity-25", "bg-black"], [1, "container", "relative", "mx-auto"], [1, "items-center", "flex", "flex-wrap"], [1, "w-full", "lg:w-6/10", "px-4", "ml-auto", "mr-auto", "text-center"], [1, "header-container"], ["src", "assets/img/explore_logo.png", 1, "img-fit-80"], [1, "logo-cont"], ["src", "assets/img/logo-espol-blanco.png", 1, "img-logo-sm"], ["src", "assets/img/google_research_colorful.png", 1, "img-logo-bg"], ["src", "assets/img/smartx_logo.png", 1, "img-logo-sm"], ["type", "button", 1, "glow-on-hover", "text-white", "font-semibold", "text-1xl", 3, "routerLink"], [1, "h70", "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], [1, "pb-20", "bg-gray-300", "-mt-24"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "lg:pt-12", "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-8", "shadow-lg", "rounded-lg"], [1, "px-4", "py-5", "flex-auto"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-red-400"], [1, "fas", "fa-chalkboard-teacher"], [1, "text-xl", "font-semibold"], [1, "mt-2", "mb-4", "text-gray-600"], [1, "w-full", "md:w-4/12", "px-4", "text-center"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-blue-400"], [1, "fas", "fa-microchip"], [1, "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-green-400"], [1, "fas", "fa-wrench"], [1, "fas", "fa-screwdriver"], [1, "fas", "fa-retweet"], [1, "fas", "fa-lightbulb"], [1, "flex", "flex-wrap", "items-center", "mt-16"], [1, "w-full", "md:w-5/12", "px-4", "mr-auto", "ml-auto"], [1, "text-gray-600", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-16", "h-16", "mb-6", "shadow-lg", "rounded-full", "bg-gray-100"], [1, "fas", "fa-lightbulb", "text-xl"], [1, "text-3xl", "mb-2", "font-semibold", "leading-normal"], [1, "text-lg", "font-light", "leading-relaxed", "mt-0", "mb-4", "text-gray-700"], [1, "font-bold", "text-gray-800", "mt-8", 3, "click"], [1, "flex", "flex-wrap", "mt-12", "justify-center", "space-around"], [1, "w-full", "lg:w-6/12", "px-4", "text-center"], [1, "text-gray-900", "p-3", "w-12", "h-12", "shadow-lg", "rounded-full", "bg-white", "inline-flex", "items-center", "justify-center"], [1, "fas", "fa-user-friends", "text-xl"], [1, "text-xl", "mt-5", "font-bold"], [1, "mt-2", "mb-4", "text-gray-500", "txt-justify"], [1, "fas", "fa-hashtag", "text-xl"], [1, "mt-2", "mb-4", "text-gray-500", "txt-center"], [1, "w-full", "md:w-4/12", "px-4", "mr-auto", "ml-auto"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-pink-600"], ["alt", "...", "src", "./assets/img/fiec_edificio.jpg", 1, "w-full", "align-middle", "rounded-t-lg"], [1, "relative", "p-8", "mb-4"], ["preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 583 95", 1, "absolute", "left-0", "w-full", "block", "svg1"], ["points", "-30,95 583,95 583,65", 1, "text-pink-600", "fill-current"], [1, "text-xl", "font-bold", "text-white"], [1, "text-md", "font-light", "mt-2", "text-white"], [1, "relative", "py-20"], [1, "height-80", "bottom-auto", "top-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "-mt-20"], ["points", "2560 0 2560 100 0 100", 1, "text-white", "fill-current"], [1, "w-full", "md:w-4/12", "ml-auto", "mr-auto", "px-4"], [1, "text-pink-600", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-16", "h-16", "mb-6", "shadow-lg", "rounded-full", "bg-pink-300"], [1, "fas", "fa-road", "text-xl"], [1, "text-3xl", "font-semibold"], ["alt", "...", "src", "./assets/img/flujo_evento.png", 1, "max-w-full", "rounded-lg", "shadow-lg"], [1, "w-full", "md:w-6/12", "ml-auto", "mr-auto", "px-4"], [1, "md:pr-12"], [1, "fas", "fa-calendar", "text-xl"], [1, "container-max-red"], [1, "text-3xl", "mt-5", "mr-6", "font-bold", "txt-left"], [1, "text-xl", "mt-5", "font-bold", "text-black", "txt-left"], [1, "container-max-blue"], [1, "pt-20", "bg-gray-200", "pb-48"], [1, "flex", "flex-wrap", "justify-center", "text-center", "mb-24"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-4xl", "font-semibold"], [3, "options"], ["carouselSlide", "", "class", "w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"], [1, "pb-20", "relative", "block", "bg-gray-900"], ["register", ""], ["points", "2560 0 2560 100 0 100", 1, "text-gray-900", "fill-current"], [1, "container", "mx-auto", "px-4", "lg:pt-24"], [1, "flex", "flex-wrap", "text-center", "justify-center", "container-bottom"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-gray-300"], [1, "flex-auto", "p-5", "lg:p-10"], [1, "text-2xl", "font-semibold"], [1, "leading-relaxed", "mt-1", "mb-4", "text-gray-600"], [1, "text-center", "mt-6"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSf6BZncfvKfYy6eGJq_US_EUtGb7cSWWxPKNWFA5WPio6AjYg/viewform?usp=sf_link"], ["type", "button", 1, "button-trs", "bg-gray-900", "text-white", "active:bg-gray-700", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "text-4xl", "font-semibold", "text-white"], [1, "flex", "flex-wrap", "mt-12", "justify-center"], [1, "w-full", "lg:w-3/12", "px-4", "text-center"], [1, "fas", "fa-medal", "text-xl"], [1, "mt-2", "mb-4", "text-white"], [1, "fas", "fa-poll", "text-xl"], [1, "fas", "fa-star", "text-xl"], [1, "flex", "justify-center", "mt-6"], [1, "text-sm", "text-white"], [1, "px-6"], ["alt", "...", "src", "assets/img/mentor_cordova.jpg", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], [1, "pt-6", "text-center"], [1, "text-xl", "font-bold"], [1, "mt-1", "text-sm", "text-gray-500", "uppercase", "font-semibold"], ["alt", "...", "src", "assets/img/mentor_carmen.jpg", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_christian.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_jocellyn.jfif", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_carlos.jfif", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "./assets/img/sandra_coello.jfif", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_christopher.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Conoce los demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sesiones Teor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Aprende conceptos b\u00E1sicos de Machine y Deep Learning con expertos en el \u00E1rea de inteligencia artificial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sesiones Pr\u00E1cticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Refuerza los conceptos de Machine y Deep Learning con ejercicios pr\u00E1cticos en los laboratorios de FIEC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sesiones de Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Interact\u00FAa en diversos proyectos de inteligencia artificial aplicada y divi\u00E9rtete mientras aprendes como se usan diferentes modelos de machine y Deep learning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sesiones Advisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Aprende como iniciar un proyecto de investigaci\u00F3n con la ayuda de investigadores expertos y conoce como plantear un problema de investigaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Experiencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Conoce como aplicar a maestr\u00EDas y doctorados en investigaci\u00F3n y como se usa la inteligencia artificial en el campo laboral. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Taller de investigaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Plantea tu primer problema de investigaci\u00F3n con ayuda de investigadores de diferentes partes del mundo. Ten tus primeros pasos en el mundo de la investigaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Nuestro objetivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Nuestro objetivo es promover oportunidades de investigaci\u00F3n que involucren a estudiantes de carreras de inform\u00E1tica y no inform\u00E1tica en la intersecci\u00F3n de aprendizaje autom\u00E1tico y ciencias aplicadas e ingenier\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](198); return ctx.scroll(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Inscr\u00EDbete!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Qui\u00E9nes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Estudiantes de cualquier facultad con inter\u00E9s en la investigaci\u00F3n en ML/AI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Cuantos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " 60 Estudiantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "blockquote", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "polygon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Ubicaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Escuela Superior Politecnica del Litoral, Via perimetral Km 30. Facultad de Ingenier\u00EDa en Electricidad y Computaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "polygon", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Cronograma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h1", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " 21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Abril ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " 1 h Sesiones Tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " 1 h Sesiones Pr\u00E1cticas de ML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " 1 h Advisor Meeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " 2 h Sesiones Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h1", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " 05 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Mayo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " 1h Sesiones Tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " 1h Sesiones Pr\u00E1cticas de DL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " 1h Experiencias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " 2h taller investigaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h1", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Abril ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " 1 h Sesiones Tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " 1 h Sesiones Pr\u00E1cticas de ML ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " 1 h Advisor Meeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 2 h Sesiones Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h1", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " 06 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Mayo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " 1h Sesiones Tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " 1h Sesiones Pr\u00E1cticas de DL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " 2h Experiencias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " 1h Sesiones Demo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "section", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Conoce nuestro equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "owl-carousel-o", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](190, LandingComponent_ng_template_190_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, LandingComponent_ng_template_191_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, LandingComponent_ng_template_192_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, LandingComponent_ng_template_193_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, LandingComponent_ng_template_194_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, LandingComponent_ng_template_195_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, LandingComponent_ng_template_196_Template, 7, 0, "ng-template", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "section", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "polygon", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Te unes al reto?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Completa el formulario en el siguiente link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Ir al formulario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Criterios de selecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Haber aprobado Fundamentos de Programaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Haber aprobado 30 materias (requerimiento para itinerarios de investigaci\u00F3n) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Notas altas en programaci\u00F3n y estad\u00EDstica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Declaraciones reflexivas acerca de por qu\u00E9 quieren explorar la investigaci\u00F3n y qu\u00E9 esperan obtener al participar en nuestro programa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h2", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Si eres estudiante o docente y quieres participar como parte del staff escr\u00EDbenos a smartx@fiec.espol.edu.ec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "hidden": a0, "block": a1 }; };
class NavbarComponent {
    constructor() {
        this.showMenu = false;
    }
    toggleNavbar() {
        this.showMenu = !this.showMenu;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 25, vars: 4, consts: [[1, "top-0", "absolute", "z-50", "w-full", "flex", "flex-wrap", "items-center", "justify-between", "px-2", "py-3"], [1, "container", "px-4", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], [1, "w-full", "relative", "flex", "justify-between", "lg:w-auto", "lg:static", "lg:block", "lg:justify-start"], ["href", "http://smartx.espol.edu.ec", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase", "text-white"], ["type", "button", 1, "cursor-pointer", "text-xl", "leading-none", "px-3", "py-1", "border", "border-solid", "border-transparent", "rounded", "bg-transparent", "block", "lg:hidden", "outline-none", "focus:outline-none", 3, "click"], [1, "text-white", "fas", "fa-bars"], [1, "lg:flex", "flex-grow", "items-center", "bg-white", "lg:bg-transparent", "lg:shadow-none", 3, "ngClass"], [1, "flex", "flex-col", "lg:flex-row", "list-none", "mr-auto"], [1, "flex", "flex-col", "lg:flex-row", "list-none", "lg:ml-auto"], [1, "flex", "items-center"], ["href", "https://www.facebook.com/people/Smart-X/100089928934970/", 1, "lg:text-white", "lg:hover:text-gray-300", "text-gray-800", "px-3", "py-4", "lg:py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold"], [1, "lg:text-gray-300", "text-gray-500", "fab", "fa-facebook", "text-lg", "leading-lg"], [1, "lg:hidden", "inline-block", "ml-2"], ["href", "https://twitter.com/SmartXec", 1, "lg:text-white", "lg:hover:text-gray-300", "text-gray-800", "px-3", "py-4", "lg:py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold"], [1, "lg:text-gray-300", "text-gray-500", "fab", "fa-twitter", "text-lg", "leading-lg"], ["href", "https://www.instagram.com/smartxec/", 1, "lg:text-white", "lg:hover:text-gray-300", "text-gray-800", "px-3", "py-4", "lg:py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold"], [1, "lg:text-gray-300", "text-gray-500", "fab", "fa-instagram", "text-lg", "leading-lg"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SmartX journal club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, !ctx.showMenu, ctx.showMenu));
    } }, directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing/landing.component */ "fsYz");
/* harmony import */ var _pages_demos_demos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/demos/demos.component */ "O3kQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] },
    { path: 'demos', component: _pages_demos_demos_component__WEBPACK_IMPORTED_MODULE_2__["DemosComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map