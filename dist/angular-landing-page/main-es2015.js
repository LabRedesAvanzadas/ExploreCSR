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
    } }, decls: 35, vars: 1, consts: [["id", "menu"], ["data-menuanchor", "firstPage"], ["href", "#firstPage"], ["data-menuanchor", "secondPage"], ["href", "#secondPage"], ["fullpage", "", "id", "fullpage", 3, "options", "ref"], ["fullpageRef", ""], [1, "section"], [1, "slide", "slide-img", 2, "background-color", "rgb(27 15 53)"], ["src", "assets/img/demos/dreambooth/1.png", 1, "image"], ["src", "assets/img/demos/dreambooth/2.png", 1, "image"], ["src", "assets/img/demos/dreambooth/3.png", 1, "image"], ["src", "assets/img/demos/dreambooth/4.png", 1, "image"], ["src", "assets/img/demos/dreambooth/5.png", 1, "image"], ["src", "assets/img/demos/dreambooth/6.png", 1, "image"], [1, "slide", "slide-img", 2, "background-color", "rgb(26 4 41)"], ["src", "assets/img/demos/smartDetection/1.png", 1, "image"], ["src", "assets/img/demos/smartDetection/2.png", 1, "image"], ["src", "assets/img/demos/smartDetection/3.png", 1, "image"], ["src", "assets/img/demos/smartDetection/4.png", 1, "image"], ["src", "assets/img/demos/smartDetection/5.png", 1, "image"]], template: function DemosComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Smart Detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ref", function DemosComponent_Template_div_ref_9_listener($event) { return ctx.getRef($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.config);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_2__["ɵb"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: [".section[_ngcontent-%COMP%] {\r\n  text-align:center;\r\n  font-size: 3em;\r\n}\r\n\r\n.slide-img[_ngcontent-%COMP%]{\r\ntext-align: -webkit-center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display:inline-block;\r\n  margin: 10px;\r\n  color: #000;\r\n  background:#fff;\r\n  background: rgba(255,255,255, 0.5);\r\n  border-radius: 10px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\r\n  background:#666;\r\n  background: rgba(0,0,0, 0.5);\r\n  color: #fff;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration:none;\r\n  color: #000;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: #000;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n  background: rgba(255,255,255, 0.8);\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding: 9px 18px;\r\n  display:block;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]{\r\n  position:fixed;\r\n  top:0;\r\n  left:0;\r\n  height: 40px;\r\n  z-index: 70;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin:0;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  #menu[_ngcontent-%COMP%]{\r\n    position:fixed;\r\n    top:5vh;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n  .image[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    width: 100vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQ0FBa0M7RUFFbEMsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsS0FBSztFQUNMLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiZGVtb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuLnNsaWRlLWltZ3tcclxudGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jbWVudSBsaSB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiNtZW51IGxpLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiM2NjY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC41KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4jbWVudSBsaSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiNtZW51IGxpLmFjdGl2ZSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiNtZW51IGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XHJcbn1cclxuI21lbnUgbGkgYSxcclxuI21lbnUgbGkuYWN0aXZlIGF7XHJcbiAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4jbWVudSBsaS5hY3RpdmUgYXtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4jbWVudXtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDcwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICNtZW51e1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6NXZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5pbWFnZXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/*! exports provided: momentAdapterFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentAdapterFactory", function() { return momentAdapterFactory; });
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
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-calendar/date-adapters/moment */ "WehO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/timeline */ "mgTN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es_EC__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/es-EC */ "vkF9");
/* harmony import */ var _angular_common_locales_es_EC__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_EC__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");






















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_es_EC__WEBPACK_IMPORTED_MODULE_15___default.a);
function momentAdapterFactory() {
    return Object(angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_11__["adapterFactory"])(moment__WEBPACK_IMPORTED_MODULE_12__);
}
;
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__["AngularFullpageModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"].forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"], useFactory: momentAdapterFactory }),
            primeng_timeline__WEBPACK_IMPORTED_MODULE_13__["TimelineModule"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__["NgxSmartModalModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_demos_demos_component__WEBPACK_IMPORTED_MODULE_9__["DemosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__["AngularFullpageModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"], primeng_timeline__WEBPACK_IMPORTED_MODULE_13__["TimelineModule"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_16__["NgxSmartModalModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"]] }); })();


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
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-date-formatter-provider */ "yUp9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "hrlM");
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/timeline */ "mgTN");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");














function LandingComponent_ng_template_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r19.date);
} }
function LandingComponent_ng_template_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const event_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r20.status, " ");
} }
function LandingComponent_ng_template_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Jos\u00E9 C\u00F3rdova");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Carmen Vaca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mentor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Christian Tutiv\u00E9n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mentor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Christian Galarza");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Advisor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Edwin Valarezo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Advisor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Cristina Guerrero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Advisor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Ver\u00F3nica Duarte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Advisor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ph.D. Rafael Rivadeneira");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Advisor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Msc. Christopher Vaccaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ing. Jocellyn Luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Org - Tutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ing. Carlos Cede\u00F1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Org - Tutor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_ng_template_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ing. Sandra Coello");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Organizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/demos"]; };
function addPeriod(period, date, amount) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_2__["addWeeks"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_2__["addMonths"],
    }[period](date, amount);
}
function subPeriod(period, date, amount) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_2__["subWeeks"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_2__["subMonths"],
    }[period](date, amount);
}
function startOfPeriod(period, date) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfWeek"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfMonth"],
    }[period](date);
}
function endOfPeriod(period, date) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfWeek"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"],
    }[period](date);
}
class LandingComponent {
    constructor(router, ngxSmartModalService, toastr) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.toastr = toastr;
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].MONDAY;
        this.weekendDays = [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].FRIDAY, angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].SATURDAY];
        this.locale = 'es-EC';
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"];
        this.viewDate = new Date();
        this.minDate = new Date('2023-04-20');
        this.maxDate = new Date('2023-05-08');
        this.activeDayIsOpen = true;
        this.prevBtnDisabled = false;
        this.nextBtnDisabled = false;
        this.actions = [
            {
                label: '<i class="fas fa-info-circle"></i>',
                a11yLabel: 'Info',
                onClick: ({ event }) => {
                    this.router.navigate(['demos']);
                },
            },
        ];
        this.actions_carmen = [
            {
                label: '<i class="fas fa-info-circle"></i>',
                a11yLabel: 'Info',
                onClick: ({ event }) => {
                    // this.router.navigate(['demos']);
                    this.ngxSmartModalService.getModal('myModal1').open();
                },
            },
        ];
        this.actions_dl = [
            {
                label: '<i class="fas fa-info-circle"></i>',
                a11yLabel: 'Info',
                onClick: ({ event }) => {
                    // this.router.navigate(['demos']);
                    this.ngxSmartModalService.getModal('myModal2').open();
                },
            },
        ];
        this.actions_conferencia = [
            {
                label: '<i class="fas fa-info-circle"></i>',
                a11yLabel: 'Info',
                onClick: ({ event }) => {
                    // this.router.navigate(['demos']);
                    this.ngxSmartModalService.getModal('myModal3').open();
                },
            },
        ];
        this.events = [
            {
                title: '8h30 : Registro de participantes',
                color: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '9h00 : Inaguración del evento',
                color: {
                    primary: '#f5ff00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '9h30 : Introducción a ML - Ph.D Carmen Vaca',
                color: {
                    primary: '#00f80f',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
                actions: this.actions_carmen
            },
            {
                title: '10h30 : Clase Práctica 1 - Grupo estudiantil TAWS',
                color: {
                    primary: '#001cfa',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '11h30 : Break',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '12h00 : Taller de investigación - Ph.D. Christian Galarza - Ph.D. Edwin Valarezo   ',
                color: {
                    primary: '#b700ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '13h00 : Almuerzo',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '14h00 : Demos - Dreambooth, Agricultura Inteligente, y más a cargo de TAWS, CIAP y PHYCOM',
                color: {
                    primary: '#ff5a00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-21')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-21')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
                actions: this.actions
            },
            {
                title: '9h00 : Clase Teórica - Ing. Eunice Gálvez',
                color: {
                    primary: '#00f80f',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-22')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-22')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '10h00 : Clase Práctica ML - Grupo estudiantil TAWS',
                color: {
                    primary: '#001cfa',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-22')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-22')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '11h30 : Break',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-22')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-22')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '12h00 : Taller de investigación - Ph.D. Christian Galarza - Ph.D. Edwin Valarezo   ',
                color: {
                    primary: '#b700ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-22')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-22')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '13h00 : Almuerzo',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-22')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-22')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '14h00 : Demos - Dreambooth, Agricultura Inteligente, y más a cargo de TAWS, CIAP y PHYCOM',
                color: {
                    primary: '#ff5a00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-22')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-22')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
                actions: this.actions
            },
            {
                title: '9h00 : Experiencia internacional - Canadá - Brenda Cobeña',
                color: {
                    primary: '#ef00ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-24')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-24')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '9h00 : Experiencia internacional - Canadá - Brenda Cobeña',
                color: {
                    primary: '#ef00ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-26')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-26')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '14h00 : Experiencia internacional - Países Bajos - Cristina Guerrero',
                color: {
                    primary: '#ef00ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-25')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-25')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '14h00 : Experiencia internacional - Países Bajos - Cristina Guerrero',
                color: {
                    primary: '#ef00ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-04-27')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-04-27')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '9h00 : Introducción a Deep Learning - Ph.D. Christian Tutivén',
                color: {
                    primary: '#00f80f',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-05')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-05')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
                actions: this.actions_dl
            },
            {
                title: '10h00 : Clase Práctica DL - Grupo estudiantil CIAP',
                color: {
                    primary: '#001cfa',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-05')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-05')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '12h30 : Almuerzo',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-05')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-05')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '14h00 : Experiencia Comercial - Empresas invitadas: Manexware y Servinformación',
                color: {
                    primary: '#ff5a00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-05')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-05')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
                actions: this.actions_conferencia
            },
            {
                title: '15h30 : Panel de discusión - IA en el campo Laboral - Empresas invitadas, Ph.D. José Córdova',
                color: {
                    primary: '#ff5a00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-05')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-05')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
                actions: this.actions_conferencia
            },
            {
                title: '9h00 : Clase Teórica DL - Ph.D. Christian Tutivén ',
                color: {
                    primary: '#00f80f',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '10h00 : Clase Práctica DL - Grupo estudiantil CIAP',
                color: {
                    primary: '#001cfa',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '11h30 : Break',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '12h00 : Experiencia MsC. / Ph.D - ¿Cómo realizar maestrías y doctorados?',
                color: {
                    primary: '#b700ff',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '13h00 : Almuerzo',
                color: {
                    primary: '#b5ffb2',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '14h00 : Taller de investigación - Identificación de problemáticas',
                color: {
                    primary: '#ff5a00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '15h00 : Exposición de posters - Identificación de problemáticas',
                color: {
                    primary: '#ff5a00',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
            {
                title: '15h30 : Premiación y cierre',
                color: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3',
                },
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date('2023-05-06')), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date('2023-05-06')), 1),
                meta: {
                    incrementsBadgeTotal: true,
                },
            },
        ];
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
    today() {
        this.changeDate(new Date());
    }
    decrement() {
        this.changeDate(subPeriod(this.view, this.viewDate, 1));
    }
    increment() {
        this.changeDate(addPeriod(this.view, this.viewDate, 1));
    }
    changeDate(date) {
        this.viewDate = date;
        this.dateOrViewChanged();
    }
    dateOrViewChanged() {
        this.prevBtnDisabled = !this.dateIsValid(endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1)));
        this.nextBtnDisabled = !this.dateIsValid(startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1)));
        if (this.viewDate < this.minDate) {
            this.changeDate(this.minDate);
        }
        else if (this.viewDate > this.maxDate) {
            this.changeDate(this.maxDate);
        }
    }
    dateIsValid(date) {
        return date >= this.minDate && date <= this.maxDate;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    beforeMonthViewRender({ body }) {
        body.forEach((day) => {
            day.badgeTotal = day.events.filter((event) => event.meta.incrementsBadgeTotal).length;
        });
    }
    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }
    ngOnInit() {
        this.timelinEvents = [
            { status: 'Inicio inscripción', date: '01-Feb', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Cierre inscripción', date: '17-Mar', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Anuncio admitidos', date: '01-Abr', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Evento', date: '21-Abr', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
    scroll(el) {
        el.scrollIntoView();
    }
    showCron(el) {
        el.scrollIntoView();
        this.toastr.info('Puedes dar click en cada fecha para conocer el desglose. Algunos eventos tienen un ícono de info para mas detalles', 'Ver calendario');
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], viewQuery: function LandingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"],
                useClass: _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_3__["CustomDateFormatter"],
            },
        ])], decls: 215, vars: 12, consts: [[1, "relative", "pt-16", "pb-32", "flex", "content-center", "items-center", "justify-center", "min-75"], [1, "absolute", "top-0", "w-full", "h-full", "bg-center", "bg-cover", "bg-svg"], ["id", "blackOverlay", 1, "w-full", "h-full", "absolute", "opacity-25", "bg-black"], [1, "container", "relative", "mx-auto"], [1, "items-center", "flex", "flex-wrap"], [1, "w-full", "lg:w-6/10", "px-4", "ml-auto", "mr-auto", "text-center"], [1, "header-container"], ["src", "assets/img/explore_logo.png", 1, "img-fit-80"], [1, "logo-cont"], ["src", "assets/img/logo-espol-blanco.png", 1, "img-logo-sm"], ["src", "assets/img/google_research_colorful.png", 1, "img-logo-bg"], ["src", "assets/img/smartx_logo.png", 1, "img-logo-sm"], [1, "d-flex", "w-full"], ["type", "button", 1, "glow-on-hover", "text-white", "font-semibold", "text-1xl", "m-1", 3, "routerLink"], ["type", "button", 1, "glow-on-hover", "text-white", "font-semibold", "text-1xl", "m-1", 3, "click"], [1, "h70", "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], [1, "pb-20", "bg-gray-300", "-mt-24"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "lg:pt-12", "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-8", "shadow-lg", "rounded-lg"], [1, "px-4", "py-5", "flex-auto"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-red-400"], [1, "fas", "fa-chalkboard-teacher"], [1, "text-xl", "font-semibold"], [1, "mt-2", "mb-4", "text-gray-600"], [1, "w-full", "md:w-4/12", "px-4", "text-center"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-blue-400"], [1, "fas", "fa-microchip"], [1, "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-green-400"], [1, "fas", "fa-wrench"], [1, "fas", "fa-screwdriver"], [1, "fas", "fa-retweet"], [1, "fas", "fa-lightbulb"], [1, "flex", "flex-wrap", "items-center", "mt-16"], [1, "w-full", "md:w-5/12", "px-4", "mr-auto", "ml-auto"], [1, "text-gray-600", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-16", "h-16", "mb-6", "shadow-lg", "rounded-full", "bg-gray-100"], [1, "fas", "fa-lightbulb", "text-xl"], [1, "text-3xl", "mb-2", "font-semibold", "leading-normal"], [1, "text-lg", "font-light", "leading-relaxed", "mt-0", "mb-4", "text-gray-700"], [1, "font-bold", "text-gray-800", "mt-8", 3, "click"], [1, "flex", "flex-wrap", "mt-12", "justify-center", "space-around"], [1, "w-full", "lg:w-6/12", "px-4", "text-center"], [1, "text-gray-900", "p-3", "w-12", "h-12", "shadow-lg", "rounded-full", "bg-white", "inline-flex", "items-center", "justify-center"], [1, "fas", "fa-user-friends", "text-xl"], [1, "text-xl", "mt-5", "font-bold"], [1, "mt-2", "mb-4", "text-gray-500", "txt-justify"], [1, "fas", "fa-hashtag", "text-xl"], [1, "mt-2", "mb-4", "text-gray-500", "txt-center"], [1, "w-full", "md:w-4/12", "px-4", "mr-auto", "ml-auto"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-pink-600"], ["alt", "...", "src", "./assets/img/fiec_edificio.jpg", 1, "w-full", "align-middle", "rounded-t-lg"], [1, "relative", "p-8", "mb-4"], ["preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 583 95", 1, "absolute", "left-0", "w-full", "block", "svg1"], ["points", "-30,95 583,95 583,65", 1, "text-pink-600", "fill-current"], [1, "text-xl", "font-bold", "text-white"], [1, "text-md", "font-light", "mt-2", "text-white"], [1, "relative", "py-20"], [1, "items-center", "flex", "flex-wrap", "flex-col"], [1, "w-full", "md:w-8/12"], [1, ""], [1, "text-pink-600", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "h-16"], [1, "fas", "fa-road", "text-xl"], [1, "pl-10", "text-3xl", "font-semibold"], ["layout", "horizontal", 1, "w-full", 3, "value"], ["pTemplate", "content"], ["pTemplate", "opposite"], ["cronograma", ""], [1, "fas", "fa-calendar", "text-xl"], [1, "col-md-4"], [1, "btn-group"], [1, "font-black", "btn", "btn-primary", 3, "disabled", "click"], [1, "font-black", "ml-3", "mr-3", "btn", "btn-outline-secondary", 3, "click"], [1, "w-full", 3, "viewDate", "events", "locale", "weekStartsOn", "weekendDays", "activeDayIsOpen", "dayClicked", "beforeViewRender"], [1, "pt-20", "bg-gray-200", "pb-48"], [1, "flex", "flex-wrap", "justify-center", "text-center", "mb-24"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-4xl", "font-semibold"], [3, "options"], ["carouselSlide", "", "class", "w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"], [1, "pb-20", "relative", "block", "bg-gray-900"], ["register", ""], [1, "height-80", "bottom-auto", "top-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "-mt-20"], ["points", "2560 0 2560 100 0 100", 1, "text-gray-900", "fill-current"], [1, "container", "mx-auto", "px-4", "lg:pt-24"], [1, "flex", "flex-wrap", "text-center", "justify-center", "container-bottom"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-gray-300"], [1, "flex-auto", "p-5", "lg:p-10"], [1, "text-2xl", "font-semibold"], [1, "leading-relaxed", "mt-1", "mb-4", "text-gray-600"], [1, "text-center", "mt-6"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSf6BZncfvKfYy6eGJq_US_EUtGb7cSWWxPKNWFA5WPio6AjYg/viewform?usp=sf_link"], ["type", "button", 1, "button-trs", "bg-gray-900", "text-white", "active:bg-gray-700", "text-sm", "font-bold", "uppercase", "px-6", "py-3", "rounded", "shadow", "hover:shadow-lg", "outline-none", "focus:outline-none", "mr-1", "mb-1"], [1, "text-4xl", "font-semibold", "text-white"], [1, "flex", "flex-wrap", "mt-12", "justify-center"], [1, "w-full", "lg:w-3/12", "px-4", "text-center"], [1, "fas", "fa-medal", "text-xl"], [1, "mt-2", "mb-4", "text-white"], [1, "fas", "fa-poll", "text-xl"], [1, "fas", "fa-star", "text-xl"], [1, "flex", "justify-center", "mt-6"], [1, "text-sm", "text-white"], ["identifier", "myModal1", 2, "max-width", "none"], ["myModal1", ""], ["alt", "...", "src", "./assets/img/evento1_carmen.png", 1, "shadow-lg", 2, "width", "80vw"], ["identifier", "myModal2", 2, "max-width", "none"], ["myModal2", ""], ["alt", "...", "src", "./assets/img/evento_dl.png", 1, "shadow-lg", 2, "width", "80vw"], ["identifier", "myModal3", 2, "max-width", "none"], ["myModal3", ""], ["alt", "...", "src", "./assets/img/evento_panel.png", 1, "shadow-lg", 2, "width", "80vw"], [1, "p-text-secondary"], [1, "px-6"], ["alt", "...", "src", "assets/img/mentor_cordova.jpg", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], [1, "pt-6", "text-center"], [1, "text-xl", "font-bold"], [1, "mt-1", "text-sm", "text-gray-500", "uppercase", "font-semibold"], ["alt", "...", "src", "assets/img/mentor_carmen.jpg", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_christian.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/advisor_christian.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/advisor_edwin.jpg", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/advisor_cristina.jpg", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/advisor_veronica.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/advisor_rafael.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_christopher.png", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_jocellyn.jfif", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "assets/img/mentor_carlos.jfif", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"], ["alt", "...", "src", "./assets/img/sandra_coello.jfif", 1, "shadow-lg", "rounded-full", "max-w-full", "mx-auto", 2, "max-width", "120px"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Conoce los demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](127); return ctx.showCron(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ver cronograma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sesiones Teor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Aprende conceptos b\u00E1sicos de Machine y Deep Learning con expertos en el \u00E1rea de inteligencia artificial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sesiones Pr\u00E1cticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Refuerza los conceptos de Machine y Deep Learning con ejercicios pr\u00E1cticos en los laboratorios de FIEC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sesiones de Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Interact\u00FAa en diversos proyectos de inteligencia artificial aplicada y divi\u00E9rtete mientras aprendes como se usan diferentes modelos de machine y Deep learning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sesiones Advisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Aprende como iniciar un proyecto de investigaci\u00F3n con la ayuda de investigadores expertos y conoce como plantear un problema de investigaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Experiencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Conoce como aplicar a maestr\u00EDas y doctorados en investigaci\u00F3n y como se usa la inteligencia artificial en el campo laboral. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Taller de investigaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Plantea tu primer problema de investigaci\u00F3n con ayuda de investigadores de diferentes partes del mundo. Ten tus primeros pasos en el mundo de la investigaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Nuestro objetivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Nuestro objetivo es promover oportunidades de investigaci\u00F3n que involucren a estudiantes de carreras de inform\u00E1tica y no inform\u00E1tica en la intersecci\u00F3n de aprendizaje autom\u00E1tico y ciencias aplicadas e ingenier\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](162); return ctx.scroll(_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Inscr\u00EDbete!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Qui\u00E9nes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Estudiantes de cualquier facultad con inter\u00E9s en la investigaci\u00F3n en ML/AI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Cuantos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " 60 Estudiantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "blockquote", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "polygon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Ubicaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Escuela Superior Politecnica del Litoral, Via perimetral Km 30. Facultad de Ingenier\u00EDa en Electricidad y Computaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "section", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p-timeline", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, LandingComponent_ng_template_124_Template, 2, 1, "ng-template", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, LandingComponent_ng_template_125_Template, 1, 1, "ng-template", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 61, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h3", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Cronograma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_136_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_138_listener() { return ctx.today(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_140_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mwl-calendar-month-view", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function LandingComponent_Template_mwl_calendar_month_view_dayClicked_142_listener($event) { return ctx.dayClicked($event.day); })("beforeViewRender", function LandingComponent_Template_mwl_calendar_month_view_beforeViewRender_142_listener($event) { return ctx.beforeMonthViewRender($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "section", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Conoce nuestro equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "owl-carousel-o", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, LandingComponent_ng_template_149_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, LandingComponent_ng_template_150_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, LandingComponent_ng_template_151_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, LandingComponent_ng_template_152_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, LandingComponent_ng_template_153_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, LandingComponent_ng_template_154_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, LandingComponent_ng_template_155_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, LandingComponent_ng_template_156_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, LandingComponent_ng_template_157_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, LandingComponent_ng_template_158_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, LandingComponent_ng_template_159_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, LandingComponent_ng_template_160_Template, 7, 0, "ng-template", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "section", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "polygon", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h4", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Te unes al reto?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Completa el formulario en el siguiente link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Ir al formulario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h2", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Criterios de selecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Haber aprobado Fundamentos de Programaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Haber aprobado 30 materias (requerimiento para itinerarios de investigaci\u00F3n) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Notas altas en programaci\u00F3n y estad\u00EDstica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Declaraciones reflexivas acerca de por qu\u00E9 quieren explorar la investigaci\u00F3n y qu\u00E9 esperan obtener al participar en nuestro programa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h2", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Si eres estudiante o docente y quieres participar como parte del staff escr\u00EDbenos a smartx@fiec.espol.edu.ec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "ngx-smart-modal", 104, 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "ngx-smart-modal", 107, 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "ngx-smart-modal", 110, 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.timelinEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate)("events", ctx.events)("locale", ctx.locale)("weekStartsOn", ctx.weekStartsOn)("weekendDays", ctx.weekendDays)("activeDayIsOpen", ctx.activeDayIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], primeng_timeline__WEBPACK_IMPORTED_MODULE_8__["Timeline"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarMonthViewComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselSlideDirective"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_11__["ɵb"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


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

/***/ "yUp9":
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/custom-date-formatter-provider.ts ***!
  \*****************************************************************/
/*! exports provided: CustomDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormatter", function() { return CustomDateFormatter; });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CustomDateFormatter extends angular_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarDateFormatter"] {
    // you can override any of the methods defined in the parent class
    dayViewHour({ date, locale }) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'HH:mm', locale);
    }
    weekViewHour({ date, locale }) {
        return this.dayViewHour({ date, locale });
    }
}
CustomDateFormatter.ɵfac = function CustomDateFormatter_Factory(t) { return ɵCustomDateFormatter_BaseFactory(t || CustomDateFormatter); };
CustomDateFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomDateFormatter, factory: CustomDateFormatter.ɵfac });
const ɵCustomDateFormatter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CustomDateFormatter);


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