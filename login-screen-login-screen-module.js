(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-screen-login-screen-module"],{

/***/ "2oYN":
/*!*****************************************************!*\
  !*** ./src/app/login-screen/login-screen.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginScreenModule", function() { return LoginScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "fyHb");
/* harmony import */ var _login_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-screen.routing.module */ "BjtN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "UOSc");






















class LoginScreenModule {
}
LoginScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginScreenModule });
LoginScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginScreenModule_Factory(t) { return new (t || LoginScreenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _login_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__["LoginScreenRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginScreenModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _login_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__["LoginScreenRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _login_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__["LoginScreenRoutingModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "BjtN":
/*!*************************************************************!*\
  !*** ./src/app/login-screen/login-screen.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginScreenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginScreenRoutingModule", function() { return LoginScreenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "fyHb");





const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        children: [
            {
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
        ]
    }
];
class LoginScreenRoutingModule {
}
LoginScreenRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginScreenRoutingModule });
LoginScreenRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginScreenRoutingModule_Factory(t) { return new (t || LoginScreenRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginScreenRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginScreenRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fyHb":
/*!*******************************************************!*\
  !*** ./src/app/login-screen/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_step_completion_status_step_completion_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/step-completion-status/step-completion-status.component */ "ReiH");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "tEUP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "Vurf");
/* harmony import */ var src_app_customer_care_portal_manage_subscription_package_details_package_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/customer-care-portal/manage-subscription/package-details/package-details.service */ "sXpo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please fill required fields! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(loginService, route, router, dialog, authService, packageDetailService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.packageDetailService = packageDetailService;
    }
    ngOnInit() {
        this.isUserLoggedIn();
        this.initForm();
    }
    isUserLoggedIn() {
        const s_id = localStorage.getItem("session_id");
        if (s_id && s_id.length > 0) {
            this.router.navigate(["CustomerPortal/manage-subscription"]);
        }
        // else user has to login again
    }
    initForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'user_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    checkFormValidation() {
        var _a, _b, _c, _d;
        if (!((_a = this.loginForm.get('user_id')) === null || _a === void 0 ? void 0 : _a.valid) && ((_b = this.loginForm.get('user_id')) === null || _b === void 0 ? void 0 : _b.touched)) {
            return true;
        }
        if (!((_c = this.loginForm.get('password')) === null || _c === void 0 ? void 0 : _c.valid) && ((_d = this.loginForm.get('password')) === null || _d === void 0 ? void 0 : _d.touched)) {
            return true;
        }
        return false;
    }
    onSubmit() {
        console.log(this.loginForm);
        const loginModel = {};
        loginModel.user_id = this.loginForm.controls.user_id.value;
        loginModel.password = this.loginForm.controls.password.value;
        if (this.loginForm.valid) {
            this.loginService.Post(loginModel).subscribe((result) => {
                if (result && result.errorCode === 0 && result.errorMessage === "OK") {
                    localStorage.setItem("user_id", loginModel.user_id);
                    localStorage.setItem("session_id", result.session_id);
                    localStorage.setItem("client_acct_id", loginModel.user_id);
                    const clientAcctId = localStorage.getItem("client_acct_id");
                    if (clientAcctId) {
                        this.packageDetailService.GetAcctDetails({ client_acct_id: clientAcctId }).subscribe((res) => {
                            if (res) {
                                localStorage.setItem("first_name", res.first_name);
                                localStorage.setItem("last_name", res.last_name);
                                localStorage.setItem("email", res.email);
                                this.navigate(result);
                            }
                        });
                    }
                    else {
                        this.navigate(result);
                    }
                }
                else {
                    let statusData = {
                        title: 'Invalid User id or password!',
                        details: 'Entered userid or password is invalid.',
                        stepSuccessful: false
                    };
                    let ref = this.dialog.open(src_app_shared_step_completion_status_step_completion_status_component__WEBPACK_IMPORTED_MODULE_2__["StepCompletionStatusComponent"], { height: '48vh', width: '42vw', data: statusData });
                }
            });
        }
    }
    navigate(result) {
        // For admin case
        if (result.isAdmin) {
            localStorage.setItem("is_admin", "yes");
        }
        // route to next URL TODO:
        if (result.isAdmin) {
            this.loginService.setAdminStorage({ admin: true });
            this.router.navigate(["Admin/ChangeConfig"]);
        }
        else {
            this.router.navigate(["CustomerPortal/manage-subscription"]);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_customer_care_portal_manage_subscription_package_details_package_details_service__WEBPACK_IMPORTED_MODULE_7__["PackageDetailsService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 4, consts: [[1, "card", "login-screen"], [1, "card-header"], [1, "card-data-container"], [1, "card-data-main-container"], [3, "formGroup", "ngSubmit"], ["class", "Error full-width", 4, "ngIf"], ["appearance", "outline", 1, "custom-mat-input", "m-field"], ["matInput", "", "placeholder", "User id", "formControlName", "user_id", 1, "input-text"], ["matInput", "", "placeholder", "Password", "type", "password", "formControlName", "password", 1, "input-text"], [1, ""], [3, "routerLink"], [1, "btn-container"], ["mat-stroked-button", "", "color", "primary", 1, "cancel-button", 3, "routerLink"], ["mat-stroked-button", "", "color", "primary", "type", "submit", 1, "confirm-button"], [1, "Error", "full-width"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ForgotPassword?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkFormValidation());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/ForgotPassword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/Register");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["body {\n  background-color: #f9f9f9;\n}\n\n.m-field[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 8vh;\n}\n\n@media screen and (max-width: 769px) {\n  .btn-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  min-width: 180px;\n  min-height: 45px;\n  background: #FFFFFF;\n  border-radius: 22px;\n  color: #03344E;\n  border: 1.5px solid #03344E;\n  box-sizing: border-box;\n  border-radius: 28px;\n}\n\n@media screen and (max-width: 769px) {\n  .cancel-button[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n\n.confirm-button[_ngcontent-%COMP%] {\n  min-width: 180px;\n  min-height: 45px;\n  background: #03344E;\n  border-radius: 22px;\n  color: #FFFFFF;\n  border: 1.5px solid #03344E;\n  box-sizing: border-box;\n  border-radius: 28px;\n}\n\n@media screen and (max-width: 481px) {\n  .confirm-button[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .cancel-button[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n\n.login-screen[_ngcontent-%COMP%] {\n  width: 35%;\n  margin: 0 auto;\n  margin-top: 15vh;\n}\n\n@media screen and (max-width: 1070px) {\n  .login-screen[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 769px) {\n  .login-screen[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 481px) {\n  .login-screen[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 10px;\n  border: 1px solid #CFCFCF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background-color: white;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  font-size: 24px;\n  line-height: 28px;\n  background: #03344E;\n  color: #FFFFFF;\n  font-weight: normal;\n  padding: 16px 30px 16px 30px;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n.card-data-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  margin-top: 4vh;\n}\n\n.card-data-container[_ngcontent-%COMP%] {\n  padding: 30px;\n  margin-bottom: 20px;\n  width: -webkit-fill-available;\n}\n\n.Error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tc2NyZWVuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFaVTtFQWFWLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFYSjtJQVlRLHNCQUFBO0lBQ0EsbUJBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBSUk7RUFYSjtJQVlRLG1CQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0k7SUFDSSxZQUFBO0VBRk47O0VBS0U7SUFDSSxZQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFLSTtFQUxKO0lBTVEsVUFBQTtFQUZOO0FBQ0Y7O0FBSUk7RUFUSjtJQVVRLFVBQUE7RUFETjtBQUNGOztBQUdJO0VBYko7SUFjUSxVQUFBO0VBQU47QUFDRjs7QUFHQSxzQ0FBQTs7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFFQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBR0EscUJBM0dVO0VBNEdWLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFVBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5KOztBQVNBO0VBQ0ksVUFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tc2NyZWVuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbjo6bmctZGVlcCBib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O1xyXG59XHJcblxyXG4ubS1maWVsZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogOHZoO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMzM0NEU7XHJcblxyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDMzNDRFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29uZmlybS1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMzNDRFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzAzMzQ0RTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODFweCkge1xyXG4gICAgLmNvbmZpcm0tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbmNlbC1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ2luLXNjcmVlbntcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI0NGQ0ZDRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMzNDRFO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMTZweCAzMHB4IDE2cHggMzBweDtcclxuXHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jYXJkLWRhdGEtbWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi10b3A6IDR2aDtcclxufVxyXG5cclxuLmNhcmQtZGF0YS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLkVycm9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: src_app_customer_care_portal_manage_subscription_package_details_package_details_service__WEBPACK_IMPORTED_MODULE_7__["PackageDetailsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=login-screen-login-screen-module.js.map