(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "3+9O":
/*!***********************************************!*\
  !*** ./src/app/admin/admin.routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "hYta");
/* harmony import */ var _search_account_search_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-account/search-account.component */ "pxjY");






const routes = [
    {
        path: '',
        // component: SearchAccountComponent,
        children: [
            {
                path: 'ChangeConfig',
                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
            },
            {
                path: 'SearchAccount',
                component: _search_account_search_account_component__WEBPACK_IMPORTED_MODULE_3__["SearchAccountComponent"]
            }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hYta":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_step_completion_status_step_completion_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/step-completion-status/step-completion-status.component */ "ReiH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.service */ "QNn7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_services_sessionDetail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/sessionDetail.service */ "kkL4");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-material-components/color-picker */ "idWV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















class AdminComponent {
    constructor(router, adminService, dialog, sessionService) {
        this.router = router;
        this.adminService = adminService;
        this.dialog = dialog;
        this.sessionService = sessionService;
        this.color = 'primary';
        this.fileName = '';
        this.ConfigForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "colorpicker": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            "logoFile": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            "projectTitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            "clientNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "authKey": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "promoCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "statementTemplateId": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "apiEndPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "objectQueryEndPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "adminToolEndPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
        });
    }
    ngOnInit() {
        this.adminService.Get().subscribe((result) => {
            this.initForm(result);
        });
    }
    initForm(result) {
        this.ConfigForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "colorpicker": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            "logoFile": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            "projectTitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.projectTitle),
            "clientNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.client_no),
            "authKey": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            "promoCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.promoCode),
            "statementTemplateId": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.statementTemplateId),
            "apiEndPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.apiEndPoint),
            "objectQueryEndPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.objectQueryEndPoint),
            "adminToolEndPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](result.adminToolEndPoint),
        });
    }
    handleFileInput(event) {
        this.ConfigForm.controls['logoFile'].setValue(event.target.files[0]);
        this.fileName = event.target.files[0].name;
    }
    onSubmit() {
        console.log(this.ConfigForm);
        let obj = {
            color: '',
            logoFile: null,
            projectTitle: '',
            client_no: '',
            authKey: '',
            promoCode: '',
            statementTemplateId: '',
        };
        debugger;
        if (this.ConfigForm.controls.colorpicker && this.ConfigForm.controls.colorpicker.value && this.ConfigForm.controls.colorpicker.value.hex) {
            obj.color = this.ConfigForm.controls.colorpicker.value.hex;
        }
        if (this.ConfigForm.controls.logoFile && this.ConfigForm.controls.logoFile.value) {
            obj.logoFile = this.ConfigForm.controls.logoFile.value;
        }
        if (this.ConfigForm.controls.projectTitle && this.ConfigForm.controls.projectTitle.value) {
            obj.projectTitle = this.ConfigForm.controls.projectTitle.value;
        }
        if (this.ConfigForm.controls.clientNo && this.ConfigForm.controls.clientNo.value) {
            obj.client_no = this.ConfigForm.controls.clientNo.value;
        }
        if (this.ConfigForm.controls.authKey && this.ConfigForm.controls.authKey.value) {
            obj.authKey = this.ConfigForm.controls.authKey.value;
        }
        if (this.ConfigForm.controls.promoCode && this.ConfigForm.controls.promoCode.value) {
            obj.promoCode = this.ConfigForm.controls.promoCode.value;
        }
        if (this.ConfigForm.controls.statementTemplateId && this.ConfigForm.controls.statementTemplateId.value) {
            obj.statementTemplateId = this.ConfigForm.controls.statementTemplateId.value;
        }
        if (this.ConfigForm.controls.apiEndPoint && this.ConfigForm.controls.apiEndPoint.value) {
            obj.apiEndPoint = this.ConfigForm.controls.apiEndPoint.value;
        }
        if (this.ConfigForm.controls.objectQueryEndPoint && this.ConfigForm.controls.objectQueryEndPoint.value) {
            obj.objectQueryEndPoint = this.ConfigForm.controls.objectQueryEndPoint.value;
        }
        if (this.ConfigForm.controls.adminToolEndPoint && this.ConfigForm.controls.adminToolEndPoint.value) {
            obj.adminToolEndPoint = this.ConfigForm.controls.adminToolEndPoint.value;
        }
        const formData = new FormData();
        formData.append("color", obj.color);
        formData.append("logoFile", obj.logoFile);
        formData.append("projectTitle", obj.projectTitle);
        formData.append("client_no", obj.client_no);
        formData.append("authKey", obj.authKey);
        formData.append("promoCode", obj.promoCode);
        formData.append("statementTemplateId", obj.statementTemplateId);
        formData.append("apiEndPoint", obj.apiEndPoint);
        formData.append("objectQueryEndPoint", obj.objectQueryEndPoint);
        formData.append("adminToolEndPoint", obj.adminToolEndPoint);
        this.adminService.Post(formData).subscribe((result) => {
            if (result) {
                const adminModel = {};
                adminModel.color = result.color && result.color != '' ? result.color : '';
                adminModel.projectTitle = result.projectTitle && result.projectTitle != '' ? result.projectTitle : '';
                adminModel.logoFilePath = result.logoFilePath && result.logoFilePath != '' ? result.logoFilePath : '';
                localStorage.setItem("color", adminModel.color);
                localStorage.setItem("projectTitle", adminModel.projectTitle);
                localStorage.setItem("logoFilePath", adminModel.logoFilePath);
                this.sessionService.onthemeChange();
                this.successfull();
            }
        });
    }
    successfull() {
        let statusData = {
            title: "Project Configuration",
            details: "Configurations have been successfully updated",
            stepSuccessful: true
        };
        let ref = this.dialog.open(src_app_shared_step_completion_status_step_completion_status_component__WEBPACK_IMPORTED_MODULE_2__["StepCompletionStatusComponent"], { height: '45vh', width: '40vw', data: statusData });
        ref.afterClosed().subscribe(() => {
            // this.router.navigate(['/SelectPackage']);
            window.location.reload();
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_sessionDetail_service__WEBPACK_IMPORTED_MODULE_6__["SessionDetailSerice"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 56, vars: 5, consts: [[1, "card", "main-screen"], [1, "card-header"], [3, "formGroup", "ngSubmit"], [1, "form-container"], [1, "selection-fields"], [1, "form-label"], ["appearance", "outline", 1, "custom-mat-input"], ["matInput", "", "placeholder", "Client No", "formControlName", "clientNo", 1, "input-text"], ["matInput", "", "placeholder", "Auth Key", "formControlName", "authKey", 1, "input-text"], ["matInput", "", "placeholder", "Promo Code", "formControlName", "promoCode", 1, "input-text"], ["matInput", "", "placeholder", "Project title", "formControlName", "projectTitle", 1, "input-text"], ["matInput", "", "placeholder", "Statement Template Id", "formControlName", "statementTemplateId", 1, "input-text"], ["matInput", "", "placeholder", "API End Point", "formControlName", "apiEndPoint", 1, "input-text"], ["matInput", "", "placeholder", "Object Query End point", "formControlName", "objectQueryEndPoint", 1, "input-text"], ["matInput", "", "placeholder", "Admin Tools End Point", "formControlName", "adminToolEndPoint", 1, "input-text"], ["matInput", "", "placeholder", "Pick Color", "formControlName", "colorpicker", 3, "ngxMatColorPicker"], ["matSuffix", "", 3, "for"], [3, "color"], ["picker", ""], ["for", "file-upload", 1, "custom-file-upload", "cancel-button", 2, "display", "flex", "align-items", "center"], [1, "cloud-upload-icon"], ["id", "file-upload", "type", "file", "accept", "image/png, image/gif, image/jpeg", 3, "change"], [1, "fileName", "m-field", 3, "innerHTML"], [1, "btn-container"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "confirm-button", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Configurations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Client No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Auth Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Promo Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Statement Template Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "API End Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Object Query End point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Admin Tools End Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Theme Primary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ngx-mat-color-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ngx-mat-color-picker", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Upload Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_51_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_54_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ConfigForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatColorPicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_10__["NgxMatColorPickerInput"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_10__["NgxMatColorToggleComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_10__["NgxMatColorPickerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: ["body {\n  background-color: #f9f9f9;\n}\n\n.main-screen[_ngcontent-%COMP%] {\n  width: 35%;\n  margin: 0 auto;\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n}\n\n@media screen and (max-width: 1070px) {\n  .main-screen[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 769px) {\n  .main-screen[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media screen and (max-width: 481px) {\n  .main-screen[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n.m-field[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: auto;\n}\n\n.selection-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin-top: 4vh;\n}\n\n.confirm-button[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 45px;\n  background: #03344E;\n  border-radius: 22px;\n  color: #FFFFFF;\n  border: 1.5px solid #03344E;\n  box-sizing: border-box;\n  border-radius: 28px;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 40px;\n  background: #FFFFFF;\n  border-radius: 52px;\n  color: #03344E;\n  border: 1.5px solid #03344E;\n  box-sizing: border-box;\n  border-radius: 28px;\n}\n\n@media screen and (max-width: 481px) {\n  .cancel-button[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n}\n\n.fileName[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 10px;\n  border: 1px solid #CFCFCF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background-color: white;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  font-size: 24px;\n  line-height: 28px;\n  background: #03344E;\n  color: #FFFFFF;\n  font-weight: normal;\n  padding: 16px 30px 16px 30px;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: normal;\n}\n\n[_nghost-%COMP%]     .custom-mat-input > .mat-form-field-wrapper {\n  padding-bottom: 8px;\n}\n\n.cloud-upload-icon[_ngcontent-%COMP%] {\n  color: white;\n  width: 20px;\n  height: 20px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQU5GO0lBT00sVUFBQTtFQUFKO0FBQ0Y7O0FBRUU7RUFWRjtJQVdNLFVBQUE7RUFDSjtBQUNGOztBQUNFO0VBZEY7SUFlTSxVQUFBO0VBRUo7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdJO0VBWEo7SUFZTSxZQUFBO0VBQUo7QUFDRjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBRUEsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUdBLHFCQXJIWTtFQXNIWixrQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbjo6bmctZGVlcCBib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O1xyXG59XHJcblxyXG4ubWFpbi1zY3JlZW57XHJcbiAgd2lkdGg6IDM1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDcwcHgpIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODFweCkge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxufVxyXG5cclxuLm0tZmllbGQge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tZmllbGRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDR2aDtcclxufVxyXG5cclxuLmNvbmZpcm0tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMzM0NEU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDMzNDRFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MnB4O1xyXG4gICAgY29sb3I6ICMwMzM0NEU7XHJcblxyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDMzNDRFO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcblxyXG59XHJcblxyXG4uZmlsZU5hbWUge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0NGQ0ZDRjtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBiYWNrZ3JvdW5kOiAjMDMzNDRFO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogMTZweCAzMHB4IDE2cHggMzBweDtcclxuXHJcblxyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLW1hdC1pbnB1dCA+IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jbG91ZC11cGxvYWQtaWNvbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4OyBcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_core_services_sessionDetail_service__WEBPACK_IMPORTED_MODULE_6__["SessionDetailSerice"] }]; }, null); })();


/***/ }),

/***/ "idWV":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@angular-material-components/color-picker/__ivy_ngcc__/fesm2015/angular-material-components-color-picker.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: BASIC_COLORS, Color, ColorAdapter, MAT_COLORPICKER_VALIDATORS, MAT_COLORPICKER_VALUE_ACCESSOR, MAT_COLOR_FORMATS, MAX_RGB, MIN_RGB, NGX_MAT_COLOR_FORMATS, NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY, NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY, NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, NUMERIC_REGEX, NgxMatColorCanvasComponent, NgxMatColorCollectionComponent, NgxMatColorPaletteComponent, NgxMatColorPickerComponent, NgxMatColorPickerContentComponent, NgxMatColorPickerInput, NgxMatColorPickerInputEvent, NgxMatColorPickerModule, NgxMatColorSliderComponent, NgxMatColorToggleComponent, NumericColorInputDirective, convertDecimalToHex, createMissingDateImplError, getColorAtPosition, matchers, pad2, rgbToHex, rgbaToHex, stringInputToObject, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_COLORS", function() { return BASIC_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAdapter", function() { return ColorAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_COLORPICKER_VALIDATORS", function() { return MAT_COLORPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_COLORPICKER_VALUE_ACCESSOR", function() { return MAT_COLORPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_COLOR_FORMATS", function() { return MAT_COLOR_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_RGB", function() { return MAX_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_RGB", function() { return MIN_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MAT_COLOR_FORMATS", function() { return NGX_MAT_COLOR_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY", function() { return NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY", function() { return NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_REGEX", function() { return NUMERIC_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorCanvasComponent", function() { return NgxMatColorCanvasComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorCollectionComponent", function() { return NgxMatColorCollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorPaletteComponent", function() { return NgxMatColorPaletteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorPickerComponent", function() { return NgxMatColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorPickerContentComponent", function() { return NgxMatColorPickerContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorPickerInput", function() { return NgxMatColorPickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorPickerInputEvent", function() { return NgxMatColorPickerInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorPickerModule", function() { return NgxMatColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorSliderComponent", function() { return NgxMatColorSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatColorToggleComponent", function() { return NgxMatColorToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericColorInputDirective", function() { return NumericColorInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMissingDateImplError", function() { return createMissingDateImplError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorAtPosition", function() { return getColorAtPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchers", function() { return matchers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxMatColorPaletteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxMatColorCanvasComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxMatColorCollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgxMatColorSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NumericColorInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgxMatColorPickerContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgxMatColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgxMatColorToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgxMatColorPickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ColorAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");




















/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/color-helpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */











const _c0 = function (a0) { return { "active": a0 }; };
function NgxMatColorCollectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxMatColorCollectionComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const c_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.select(c_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", c_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r0.selectedColor === c_r2));
} }
function NgxMatColorCollectionComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxMatColorCollectionComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const c_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.select(c_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", c_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedColor === c_r5));
} }
const _c1 = ["button"];
const trimLeft = /^\s+/;
/** @type {?} */
const trimRight = /\s+$/;
/** @type {?} */
const tinyCounter = 0;
/** @type {?} */
const mathRound = Math.round;
/** @type {?} */
const mathMin = Math.min;
/** @type {?} */
const mathMax = Math.max;
/** @type {?} */
const mathRandom = Math.random;
/** @type {?} */
const NUMERIC_REGEX = /[^0-9]/g;
/** @type {?} */
const MAX_RGB = 255;
/** @type {?} */
const MIN_RGB = 0;
/**
 * List basic colors
 * @type {?}
 */
const BASIC_COLORS = ["#ffffff", "#ffff00", "#ff00ff", "#ff0000",
    "#c0c0c0", "#808080", "#808000", "#800080",
    "#800000", "#00ffff", "#00ff00", "#008080",
    "#008000", "#0000ff", "#000080", "#000000"
];
/**
 * Get color at position
 * @param {?} ctx
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function getColorAtPosition(ctx, x, y) {
    /** @type {?} */
    const imageData = ctx.getImageData(x, y, 1, 1).data;
    return { r: imageData[0], g: imageData[1], b: imageData[2] };
}
// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
/**
 * @param {?} r
 * @param {?} g
 * @param {?} b
 * @param {?} a
 * @param {?=} allow4Char
 * @return {?}
 */
function rgbaToHex(r, g, b, a, allow4Char) {
    /** @type {?} */
    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];
    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
}
// Force a hex value to have 2 characters
/**
 * @param {?} c
 * @return {?}
 */
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}
// Converts a decimal to a hex value
/**
 * @param {?} d
 * @return {?}
 */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
/**
 * @param {?} h
 * @return {?}
 */
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}
// Parse a base-16 hex value into a base-10 integer
/**
 * @param {?} val
 * @return {?}
 */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
/**
 * @param {?} r
 * @param {?} g
 * @param {?} b
 * @param {?=} allow3Char
 * @return {?}
 */
function rgbToHex(r, g, b, allow3Char) {
    /** @type {?} */
    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];
    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
}
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening parent
/** @type {?} */
const CSS_INTEGER = "[-\\+]?\\d+%?";
/** @type {?} */
const CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
/** @type {?} */
const CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
/** @type {?} */
const PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
/** @type {?} */
const PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
/** @type {?} */
const matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
/**
 * @param {?} color
 * @return {?}
 */
function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    /** @type {?} */
    let match;
    /** @type {?} */
    let obj;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: 1 };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: 1
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: 1
        };
    }
    return null;
}
/**
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error(`NgxMatColorPicker: No provider found for ${provider}. You must define MAT_COLOR_FORMATS in your module`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/color.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Color {
    /**
     * @param {?} _r
     * @param {?} _g
     * @param {?} _b
     * @param {?=} _a
     */
    constructor(_r, _g, _b, _a) {
        this.r = _r > MAX_RGB ? MAX_RGB : _r;
        this.g = _g > MAX_RGB ? MAX_RGB : _g;
        this.b = _b > MAX_RGB ? MAX_RGB : _b;
        if (_a != null) {
            this.a = _a > 1 ? 1 : _a;
        }
        else {
            this.a = 1;
        }
        this.roundA = Math.round(this.a);
        this.hex = rgbToHex(this.r, this.g, this.b);
        this.rgba = this.toRgba();
    }
    /**
     * @param {?=} allow3Char
     * @return {?}
     */
    toHex(allow3Char) {
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    }
    /**
     * @return {?}
     */
    toRgba() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }
    /**
     * @param {?=} allow3Char
     * @return {?}
     */
    toHexString(allow3Char) {
        return '#' + this.toHex(allow3Char);
    }
    /**
     * @return {?}
     */
    toRgbString() {
        return (this.a === 1) ?
            "rgb(" + Math.round(this.r) + ", " + Math.round(this.g) + ", " + Math.round(this.b) + ")" :
            "rgba(" + Math.round(this.r) + ", " + Math.round(this.g) + ", " + Math.round(this.b) + ", " + this.roundA + ")";
    }
    /**
     * @param {?} allow4Char
     * @return {?}
     */
    toHex8(allow4Char) {
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    }
    /**
     * @param {?=} allow4Char
     * @return {?}
     */
    toHex8String(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    }
    /**
     * @param {?} format
     * @return {?}
     */
    toString(format) {
        /** @type {?} */
        let formatSet = !!format;
        /** @type {?} */
        let formattedString;
        /** @type {?} */
        let hasAlpha = this.a < 1 && this.a >= 0;
        /** @type {?} */
        let needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6"
            || format === "hex3" || format === "hex4" || format === "hex8");
        if (needsAlphaFormat) {
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        return formattedString || this.toHexString();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/color-input-format.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-palette/color-palette.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatColorPaletteComponent {
    constructor() {
        this.colorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} color
     * @return {?}
     */
    handleColorChanged(color) {
        this.colorChanged.emit(color);
    }
}
NgxMatColorPaletteComponent.ɵfac = function NgxMatColorPaletteComponent_Factory(t) { return new (t || NgxMatColorPaletteComponent)(); };
NgxMatColorPaletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorPaletteComponent, selectors: [["ngx-mat-color-palette"]], hostAttrs: [1, "ngx-mat-color-palette"], inputs: { color: "color" }, outputs: { colorChanged: "colorChanged" }, decls: 2, vars: 2, consts: [[3, "color", "colorChanged"]], template: function NgxMatColorPaletteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-mat-color-canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorChanged", function NgxMatColorPaletteComponent_Template_ngx_mat_color_canvas_colorChanged_0_listener($event) { return ctx.handleColorChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-mat-color-collection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorChanged", function NgxMatColorPaletteComponent_Template_ngx_mat_color_collection_colorChanged_1_listener($event) { return ctx.handleColorChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.color);
    } }, directives: function () { return [NgxMatColorCanvasComponent, NgxMatColorCollectionComponent]; }, styles: [".ngx-mat-color-palette .actions{display:flex;margin-top:10px}.ngx-mat-color-palette .actions .left{display:flex;flex-direction:column;margin-right:15px}.ngx-mat-color-palette .actions .left .preview{flex:2 1 auto;margin-bottom:10px}.ngx-mat-color-palette .actions .right{display:flex;flex-direction:column;width:40px}"], encapsulation: 2 });
/** @nocollapse */
NgxMatColorPaletteComponent.ctorParameters = () => [];
NgxMatColorPaletteComponent.propDecorators = {
    colorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorPaletteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-palette',
                template: "<ngx-mat-color-canvas (colorChanged)=\"handleColorChanged($event)\" [color]=\"color\"></ngx-mat-color-canvas>\r\n<ngx-mat-color-collection (colorChanged)=\"handleColorChanged($event)\" [color]=\"color\"></ngx-mat-color-collection>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                host: {
                    'class': 'ngx-mat-color-palette'
                },
                styles: [".ngx-mat-color-palette .actions{display:flex;margin-top:10px}.ngx-mat-color-palette .actions .left{display:flex;flex-direction:column;margin-right:15px}.ngx-mat-color-palette .actions .left .preview{flex:2 1 auto;margin-bottom:10px}.ngx-mat-color-palette .actions .right{display:flex;flex-direction:column;width:40px}"]
            }]
    }], function () { return []; }, { colorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-canvas/base-color-canvas.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class NgxMatBaseColorCanvas {
    /**
     * @param {?} zone
     * @param {?} elementId
     */
    constructor(zone, elementId) {
        this.zone = zone;
        this.colorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.x = 0;
        this.y = 0;
        this.drag = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.elementId = elementId;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.canvas = (/** @type {?} */ (document.getElementById(this.elementId)));
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.draw();
    }
    /**
     * @protected
     * @return {?}
     */
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.rect(0, 0, this.width, this.height);
        this.fillGradient();
        if (this.y != 0) {
            this.redrawIndicator(this.x, this.y);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMousedown(e) {
        this.drag = true;
        this.changeColor(e);
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.canvas.addEventListener('mousemove', this.onMousemove.bind(this));
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMousemove(e) {
        if (this.drag) {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.changeColor(e);
            }));
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseup(e) {
        this.drag = false;
        this.canvas.removeEventListener('mousemove', this.onMousemove);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    emitChange(color) {
        this.colorChanged.emit(color);
    }
}
NgxMatBaseColorCanvas.ɵfac = function NgxMatBaseColorCanvas_Factory(t) { return new (t || NgxMatBaseColorCanvas)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](String)); };
NgxMatBaseColorCanvas.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NgxMatBaseColorCanvas, inputs: { color: "color" }, outputs: { colorChanged: "colorChanged" } });
/** @nocollapse */
NgxMatBaseColorCanvas.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: String }
];
NgxMatBaseColorCanvas.propDecorators = {
    colorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatBaseColorCanvas, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{}]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: String }]; }, { colorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-canvas/color-canvas.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIUS_NOB = 5;
class NgxMatColorCanvasComponent extends NgxMatBaseColorCanvas {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        super(zone, 'color-block');
        this.zone = zone;
        this._resetBaseColor = true;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            r: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            g: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            b: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            a: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            hex: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(matchers.hex6)]),
        });
    }
    /**
     * @return {?}
     */
    get rCtrl() {
        return this.formGroup.get('r');
    }
    /**
     * @return {?}
     */
    get gCtrl() {
        return this.formGroup.get('g');
    }
    /**
     * @return {?}
     */
    get bCtrl() {
        return this.formGroup.get('b');
    }
    /**
     * @return {?}
     */
    get aCtrl() {
        return this.formGroup.get('a');
    }
    /**
     * @return {?}
     */
    get hexCtrl() {
        return this.formGroup.get('hex');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const rgbaCtrl$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.rCtrl.valueChanges, this.gCtrl.valueChanges, this.bCtrl.valueChanges, this.aCtrl.valueChanges);
        rgbaCtrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(400))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            /** @type {?} */
            const color = new Color(Number(this.rCtrl.value), Number(this.gCtrl.value), Number(this.bCtrl.value), Number(this.aCtrl.value));
            this.emitChange(color);
        }));
        /** @type {?} */
        const hexCtrl$ = this.hexCtrl.valueChanges;
        hexCtrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])())
            .subscribe((/**
         * @param {?} hex
         * @return {?}
         */
        hex => {
            /** @type {?} */
            const obj = stringInputToObject(hex);
            if (obj != null) {
                /** @type {?} */
                const color = new Color(obj.r, obj.g, obj.b, obj.a);
                this.emitChange(color);
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.color && changes.color.currentValue) {
            this.updateForm(changes.color.currentValue);
            if (this._resetBaseColor) {
                this._baseColor = changes.color.currentValue;
            }
            this._resetBaseColor = true;
            if (!changes.color.firstChange) {
                this.draw();
            }
        }
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    updateForm(val) {
        /** @type {?} */
        const config = { emitEvent: false };
        this.rCtrl.setValue(val.r, config);
        this.gCtrl.setValue(val.g, config);
        this.bCtrl.setValue(val.b, config);
        this.aCtrl.setValue(val.a, config);
        this.hexCtrl.setValue(val.hex, config);
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    redrawIndicator(x, y) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.ctx.arc(x, y, RADIUS_NOB, 0, 2 * Math.PI, false);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    /**
     * @return {?}
     */
    fillGradient() {
        this.ctx.fillStyle = this._baseColor ? this._baseColor.rgba : 'rgba(255,255,255,1)';
        this.ctx.fillRect(0, 0, this.width, this.height);
        /** @type {?} */
        const grdWhite = this.ctx.createLinearGradient(0, 0, this.width, 0);
        grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
        grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
        this.ctx.fillStyle = grdWhite;
        this.ctx.fillRect(0, 0, this.width, this.height);
        /** @type {?} */
        const grdBlack = this.ctx.createLinearGradient(0, 0, 0, this.height);
        grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
        grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
        this.ctx.fillStyle = grdBlack;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    onSliderColorChanged(c) {
        this._baseColor = c;
        this.color = c;
        this.fillGradient();
        this.emitChange(c);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    changeColor(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this._resetBaseColor = false;
        this.draw();
        const { r, g, b } = getColorAtPosition(this.ctx, e.offsetX, e.offsetY);
        this.emitChange(new Color(r, g, b));
    }
}
NgxMatColorCanvasComponent.ɵfac = function NgxMatColorCanvasComponent_Factory(t) { return new (t || NgxMatColorCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
NgxMatColorCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorCanvasComponent, selectors: [["ngx-mat-color-canvas"]], hostAttrs: [1, "ngx-mat-color-canvas"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 3, consts: [[3, "formGroup"], [1, "color-canvas-row"], [1, "zone-canvas"], ["id", "color-block", "width", "200", "height", "200", 1, "zone-block", 3, "mousedown", "mouseup"], [3, "colorChanged"], [1, "zone-inputs"], ["matInput", "", "formControlName", "r", "ngxMatNumericColorInput", "", "autocomplete", "off"], ["matInput", "", "formControlName", "g", "ngxMatNumericColorInput", "", "autocomplete", "off"], ["matInput", "", "formControlName", "b", "ngxMatNumericColorInput", "", "autocomplete", "off"], ["mat-mini-fab", "", 1, "preview"], ["matPrefix", "", 1, "symbol"], ["matInput", "", "formControlName", "hex", "autocomplete", "off"], ["matInput", "", "formControlName", "a", "type", "number", "min", "0", "max", "1", "step", "0.1", "autocomplete", "off"]], template: function NgxMatColorCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NgxMatColorCanvasComponent_Template_canvas_mousedown_3_listener($event) { return ctx.onMousedown($event); })("mouseup", function NgxMatColorCanvasComponent_Template_canvas_mouseup_3_listener($event) { return ctx.onMouseup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngx-mat-color-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorChanged", function NgxMatColorCanvasComponent_Template_ngx_mat_color_slider_colorChanged_4_listener($event) { return ctx.onSliderColorChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "HEX6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "#\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", (ctx.color == null ? null : ctx.color.rgba) || "transparent");
    } }, directives: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], NgxMatColorSliderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], NumericColorInputDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]]; }, styles: [".ngx-mat-color-canvas .color-canvas-row{display:flex}.ngx-mat-color-canvas .color-canvas-row:first-of-type{height:200px;margin-bottom:12px}.ngx-mat-color-canvas .color-canvas-row:first-of-type .card{height:180px}.ngx-mat-color-canvas .color-canvas-row canvas:hover{cursor:crosshair}.ngx-mat-color-canvas .color-canvas-row .zone{display:flex}.ngx-mat-color-canvas .color-canvas-row .zone-canvas{height:200px}.ngx-mat-color-canvas .color-canvas-row .zone-canvas .zone-block{border:1px solid rgba(0,0,0,.12)}.ngx-mat-color-canvas .color-canvas-row .zone-strip{flex-basis:auto;margin-left:10px}.ngx-mat-color-canvas .color-canvas-row .zone-inputs{display:flex;flex-direction:column;height:200px;margin-left:16px;margin-top:12px;width:40px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2){display:flex}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .preview{height:40px;min-height:40px;min-width:40px;width:40px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field{margin-left:16px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:first-of-type{width:170px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:first-of-type .symbol{color:rgba(0,0,0,.54);font-weight:700}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:last-of-type{width:40px}.ngx-mat-color-canvas .mat-form-field-label{font-weight:700}"], encapsulation: 2 });
/** @nocollapse */
NgxMatColorCanvasComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-canvas',
                template: "<form [formGroup]=\"formGroup\">\r\n    <div class=\"color-canvas-row\">\r\n        <div class=\"zone-canvas\">\r\n            <canvas id=\"color-block\" class=\"zone-block\" (mousedown)=\"onMousedown($event)\" (mouseup)=\"onMouseup($event)\"\r\n                width=\"200\" height=\"200\"></canvas>\r\n            <ngx-mat-color-slider (colorChanged)=\"onSliderColorChanged($event)\"></ngx-mat-color-slider>\r\n        </div>\r\n\r\n        <div class=\"zone-inputs\">\r\n            <mat-form-field>\r\n                <mat-label>R</mat-label>\r\n                <input matInput formControlName=\"r\" ngxMatNumericColorInput autocomplete=\"off\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-label>G</mat-label>\r\n                <input matInput formControlName=\"g\" ngxMatNumericColorInput autocomplete=\"off\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-label>B</mat-label>\r\n                <input matInput formControlName=\"b\" ngxMatNumericColorInput autocomplete=\"off\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"color-canvas-row\">\r\n        <button mat-mini-fab [style.background-color]=\"color?.rgba || 'transparent'\" class=\"preview\"></button>\r\n        <mat-form-field>\r\n            <mat-label>HEX6</mat-label>\r\n            <mat-label matPrefix class=\"symbol\">#&nbsp;</mat-label>\r\n            <input matInput formControlName=\"hex\" autocomplete=\"off\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>A</mat-label>\r\n            <input matInput formControlName=\"a\" type=\"number\" min=\"0\" max=\"1\" step=\"0.1\" autocomplete=\"off\">\r\n        </mat-form-field>\r\n    </div>\r\n</form>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                host: {
                    'class': 'ngx-mat-color-canvas'
                },
                styles: [".ngx-mat-color-canvas .color-canvas-row{display:flex}.ngx-mat-color-canvas .color-canvas-row:first-of-type{height:200px;margin-bottom:12px}.ngx-mat-color-canvas .color-canvas-row:first-of-type .card{height:180px}.ngx-mat-color-canvas .color-canvas-row canvas:hover{cursor:crosshair}.ngx-mat-color-canvas .color-canvas-row .zone{display:flex}.ngx-mat-color-canvas .color-canvas-row .zone-canvas{height:200px}.ngx-mat-color-canvas .color-canvas-row .zone-canvas .zone-block{border:1px solid rgba(0,0,0,.12)}.ngx-mat-color-canvas .color-canvas-row .zone-strip{flex-basis:auto;margin-left:10px}.ngx-mat-color-canvas .color-canvas-row .zone-inputs{display:flex;flex-direction:column;height:200px;margin-left:16px;margin-top:12px;width:40px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2){display:flex}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .preview{height:40px;min-height:40px;min-width:40px;width:40px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field{margin-left:16px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:first-of-type{width:170px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:first-of-type .symbol{color:rgba(0,0,0,.54);font-weight:700}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:last-of-type{width:40px}.ngx-mat-color-canvas .mat-form-field-label{font-weight:700}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-collection/color-collection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatColorCollectionComponent {
    constructor() {
        this.colorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.colors1 = BASIC_COLORS.slice(0, 8);
        this.colors2 = BASIC_COLORS.slice(8, 16);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    set color(c) {
        if (c) {
            this.selectedColor = c.toHexString();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} hex
     * @return {?}
     */
    select(hex) {
        this.selectedColor = hex;
        const { r, g, b, a } = stringInputToObject(hex);
        this.colorChanged.emit(new Color(r, g, b, a));
    }
}
NgxMatColorCollectionComponent.ɵfac = function NgxMatColorCollectionComponent_Factory(t) { return new (t || NgxMatColorCollectionComponent)(); };
NgxMatColorCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorCollectionComponent, selectors: [["ngx-mat-color-collection"]], hostAttrs: [1, "ngx-mat-color-collection"], inputs: { color: "color" }, outputs: { colorChanged: "colorChanged" }, decls: 4, vars: 2, consts: [[1, "color-collection-row"], ["mat-mini-fab", "", "class", "btn-color", 3, "background-color", "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", 1, "btn-color", 3, "ngClass", "click"]], template: function NgxMatColorCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NgxMatColorCollectionComponent_button_1_Template, 1, 5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NgxMatColorCollectionComponent_button_3_Template, 1, 5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".ngx-mat-color-collection .btn-color{box-shadow:none;height:20px;margin-right:11px;opacity:.3;width:20px}.ngx-mat-color-collection .btn-color.active{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);opacity:1}"], encapsulation: 2 });
/** @nocollapse */
NgxMatColorCollectionComponent.ctorParameters = () => [];
NgxMatColorCollectionComponent.propDecorators = {
    colorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-collection',
                template: "<div class=\"color-collection-row\">\r\n  <button *ngFor=\"let c of colors1\" mat-mini-fab [style.background-color]=\"c\" class=\"btn-color\"\r\n    (click)=\"select(c)\" [ngClass]=\"{'active': selectedColor === c}\">\r\n  </button>\r\n</div>\r\n<div class=\"color-collection-row\">\r\n  <button *ngFor=\"let c of colors2\" mat-mini-fab [style.background-color]=\"c\" class=\"btn-color\"\r\n    (click)=\"select(c)\" [ngClass]=\"{'active': selectedColor === c}\">\r\n  </button>\r\n</div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                host: {
                    'class': 'ngx-mat-color-collection'
                },
                styles: [".ngx-mat-color-collection .btn-color{box-shadow:none;height:20px;margin-right:11px;opacity:.3;width:20px}.ngx-mat-color-collection .btn-color.active{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);opacity:1}"]
            }]
    }], function () { return []; }, { colorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-canvas/color-slider/color-slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatColorSliderComponent extends NgxMatBaseColorCanvas {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        super(zone, 'color-strip');
        this.zone = zone;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    /**
     * @return {?}
     */
    fillGradient() {
        /** @type {?} */
        const grd = this.ctx.createLinearGradient(0, 0, 0, this.height);
        grd.addColorStop(0, 'rgba(255, 0, 0, 1)');
        grd.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
        grd.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
        grd.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
        grd.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
        grd.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
        grd.addColorStop(1, 'rgba(255, 0, 0, 1)');
        this.ctx.fillStyle = grd;
        this.ctx.fill();
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    redrawIndicator(x, y) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
        this.ctx.arc(7.5, y, 7.5, 0, 2 * Math.PI, false);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    changeColor(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.draw();
        const { r, g, b } = getColorAtPosition(this.ctx, e.offsetX, e.offsetY);
        this.emitChange(new Color(r, g, b));
    }
}
NgxMatColorSliderComponent.ɵfac = function NgxMatColorSliderComponent_Factory(t) { return new (t || NgxMatColorSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
NgxMatColorSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorSliderComponent, selectors: [["ngx-mat-color-slider"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "color-strip", "width", "15", "height", "200", 1, "zone-strip", 3, "mousedown", "mouseup"]], template: function NgxMatColorSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NgxMatColorSliderComponent_Template_canvas_mousedown_0_listener($event) { return ctx.onMousedown($event); })("mouseup", function NgxMatColorSliderComponent_Template_canvas_mouseup_0_listener($event) { return ctx.onMouseup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [""] });
/** @nocollapse */
NgxMatColorSliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-slider',
                template: "<canvas id=\"color-strip\" class=\"zone-strip\" (mousedown)=\"onMousedown($event)\" (mouseup)=\"onMouseup($event)\"\r\n width=\"15\" height=\"200\"></canvas>",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/color-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColorAdapter {
    constructor() { }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sameColor(a, b) {
        if (a == null && b == null)
            return true;
        if (a != null && b != null)
            return a.rgba === b.rgba;
        return false;
    }
    /**
     * @param {?} c
     * @param {?} format
     * @return {?}
     */
    format(c, format) {
        return c.toString(format);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        /** @type {?} */
        const obj = stringInputToObject(value);
        if (obj) {
            return new Color(obj.r, obj.g, obj.b, obj.a);
        }
        return null;
    }
}
ColorAdapter.ɵfac = function ColorAdapter_Factory(t) { return new (t || ColorAdapter)(); };
ColorAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ColorAdapter, factory: ColorAdapter.ɵfac });
/** @nocollapse */
ColorAdapter.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/color-formats.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NGX_MAT_COLOR_FORMATS = {
    display: {
        colorInput: 'hex'
    }
};
/** @type {?} */
const MAT_COLOR_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-color-formats');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-picker/color-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that determines the scroll handling while the calendar is open.
 * @type {?}
 */
const NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('ngx-mat-colorpicker-scroll-strategy');
/**
 * @param {?} overlay
 * @return {?}
 */
function NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/** @type {?} */
const NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]],
    useFactory: NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY,
};
class NgxMatColorPickerContentBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {}
/** @type {?} */
const _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_16__["mixinColor"])(NgxMatColorPickerContentBase);
class NgxMatColorPickerContentComponent extends _MatDatepickerContentMixinBase {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
}
NgxMatColorPickerContentComponent.ɵfac = function NgxMatColorPickerContentComponent_Factory(t) { return new (t || NgxMatColorPickerContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NgxMatColorPickerContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorPickerContentComponent, selectors: [["ngx-mat-color-picker-content"]], viewQuery: function NgxMatColorPickerContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](NgxMatColorPaletteComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._palette = _t.first);
    } }, hostAttrs: [1, "ngx-mat-colorpicker-content"], hostVars: 3, hostBindings: function NgxMatColorPickerContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@transformPanel", "enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ngx-mat-colorpicker-content-touch", ctx.picker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["ngxMatColorPickerContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "color", "colorChanged"]], template: function NgxMatColorPickerContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-mat-color-palette", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorChanged", function NgxMatColorPickerContentComponent_Template_ngx_mat_color_palette_colorChanged_0_listener($event) { return ctx.picker.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.picker._selected);
    } }, directives: [NgxMatColorPaletteComponent], styles: [".ngx-mat-colorpicker-content{background-color:#fff;border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);color:rgba(0,0,0,.87);display:block;padding:16px}.ngx-mat-colorpicker-content .ngx-mat-color-palette{height:354px;width:296px}.ngx-mat-colorpicker-content-touch{display:block;max-height:80vh;overflow:auto}.ngx-mat-colorpicker-content-touch .ngx-mat-color-palette{max-height:788px;max-width:750px;min-height:312px;min-width:250px}@media (orientation:landscape){.mat-colorpicker-content-touch .ngx-mat-color-palette{height:80vh;width:64vh}}@media (orientation:portrait){.mat-colorpicker-content-touch .ngx-mat-color-palette{height:100vw;width:80vw}}"], encapsulation: 2, data: { animation: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["matDatepickerAnimations"].transformPanel,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["matDatepickerAnimations"].fadeInCalendar,
        ] }, changeDetection: 0 });
/** @nocollapse */
NgxMatColorPickerContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NgxMatColorPickerContentComponent.propDecorators = {
    _palette: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [NgxMatColorPaletteComponent,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorPickerContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-picker-content',
                template: "<ngx-mat-color-palette (colorChanged)=\"picker.select($event)\" [color]=\"picker._selected\"></ngx-mat-color-palette>",
                host: {
                    'class': 'ngx-mat-colorpicker-content',
                    '[@transformPanel]': '"enter"',
                    '[class.ngx-mat-colorpicker-content-touch]': 'picker.touchUi'
                },
                animations: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["matDatepickerAnimations"].transformPanel,
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["matDatepickerAnimations"].fadeInCalendar,
                ],
                exportAs: 'ngxMatColorPickerContent',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                inputs: ['color'],
                styles: [".ngx-mat-colorpicker-content{background-color:#fff;border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);color:rgba(0,0,0,.87);display:block;padding:16px}.ngx-mat-colorpicker-content .ngx-mat-color-palette{height:354px;width:296px}.ngx-mat-colorpicker-content-touch{display:block;max-height:80vh;overflow:auto}.ngx-mat-colorpicker-content-touch .ngx-mat-color-palette{max-height:788px;max-width:750px;min-height:312px;min-width:250px}@media (orientation:landscape){.mat-colorpicker-content-touch .ngx-mat-color-palette{height:80vh;width:64vh}}@media (orientation:portrait){.mat-colorpicker-content-touch .ngx-mat-color-palette{height:100vw;width:80vw}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { _palette: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [NgxMatColorPaletteComponent]
        }] }); })();
if (false) {}
class NgxMatColorPickerComponent {
    /**
     * @param {?} _dialog
     * @param {?} _overlay
     * @param {?} _zone
     * @param {?} _adapter
     * @param {?} _dir
     * @param {?} scrollStrategy
     * @param {?} _document
     * @param {?} _viewContainerRef
     */
    constructor(_dialog, _overlay, _zone, _adapter, _dir, scrollStrategy, _document, _viewContainerRef) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._zone = _zone;
        this._adapter = _adapter;
        this._dir = _dir;
        this._document = _document;
        this._viewContainerRef = _viewContainerRef;
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._touchUi = false;
        this._opened = false;
        this._defaultColor = 'primary';
        this._validSelected = null;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */
        this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /**
         * Emits new selected date when selected date changes.
         */
        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled === undefined && this._pickerInput ?
            this._pickerInput.disabled : !!this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._disabledChange.next(newValue);
        }
    }
    /**
     * @return {?}
     */
    get touchUi() { return this._touchUi; }
    /**
     * @param {?} value
     * @return {?}
     */
    set touchUi(value) {
        this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the calendar is open.
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) { value ? this.open() : this.close(); }
    /**
     * Default Color palette to use on the datepicker's calendar.
     * @return {?}
     */
    get defaultColor() {
        return this._defaultColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultColor(value) {
        this._defaultColor = value;
    }
    /**
     * Color palette to use on the datepicker's calendar.
     * @return {?}
     */
    get color() {
        return this._color ||
            (this._pickerInput ? this._pickerInput.getThemePalette() : undefined);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get _selected() { return this._validSelected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set _selected(value) { this._validSelected = value; }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    }
    /**
     * Selects the given date
     * @param {?} nextVal
     * @return {?}
     */
    select(nextVal) {
        /** @type {?} */
        let oldValue = this._selected;
        this._selected = nextVal;
        if (!this._adapter.sameColor(oldValue, this._selected)) {
            this._selectedChanged.next(nextVal);
        }
    }
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    registerInput(input) {
        if (this._pickerInput) {
            throw Error('A ColorPicker can only be associated with a single input.');
        }
        this._pickerInput = input;
        this._inputSubscription =
            this._pickerInput._valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => this._selected = value));
    }
    /**
     * @return {?}
     */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._pickerInput) {
            throw Error('Attempted to open an ColorPicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }
    /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    _openAsDialog() {
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(NgxMatColorPickerContentComponent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'ngx-mat-colorpicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this.close()));
        this._dialogRef.componentInstance.picker = this;
        this._setColor();
    }
    /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    _openAsPopup() {
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](NgxMatColorPickerContentComponent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._portal);
            this._popupComponentRef.instance.picker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe((/**
             * @return {?}
             */
            () => {
                this._popupRef.updatePosition();
            }));
        }
    }
    /**
     * Create the popup.
     * @private
     * @return {?}
     */
    _createPopup() {
        /** @type {?} */
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-colorpicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ESCAPE"] ||
                (this._pickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["UP_ARROW"]);
        })))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        }));
    }
    /**
     * @return {?}
     */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._portal && this._portal.isAttached) {
            this._portal.detach();
        }
        /** @type {?} */
        const completeClose = (/**
         * @return {?}
         */
        () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        });
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    _setColor() {
        /** @type {?} */
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
    /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    _createPopupPositionStrategy() {
        return this._overlay.position()
            .flexibleConnectedTo(this._pickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.ngx-mat-colorpicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
    }
}
NgxMatColorPickerComponent.ɵfac = function NgxMatColorPickerComponent_Factory(t) { return new (t || NgxMatColorPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ColorAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
NgxMatColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorPickerComponent, selectors: [["ngx-mat-color-picker"]], inputs: { disabled: "disabled", touchUi: "touchUi", opened: "opened", defaultColor: "defaultColor", color: "color" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["ngxMatColorPicker"], decls: 0, vars: 0, template: function NgxMatColorPickerComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxMatColorPickerComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: ColorAdapter },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
NgxMatColorPickerComponent.propDecorators = {
    openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['opened',] }],
    closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['closed',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    touchUi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    defaultColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-picker',
                template: '',
                exportAs: 'ngxMatColorPicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: ColorAdapter }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, { openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
        }], closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], defaultColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-picker/color-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatColorPickerInputEvent {
    /**
     * @param {?} target
     * @param {?} targetElement
     */
    constructor(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
if (false) {}
/** @type {?} */
const MAT_COLORPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
     * @return {?}
     */
    () => NgxMatColorPickerInput)),
    multi: true
};
/** @type {?} */
const MAT_COLORPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
     * @return {?}
     */
    () => NgxMatColorPickerInput)),
    multi: true
};
class NgxMatColorPickerInput {
    /**
     * @param {?} _elementRef
     * @param {?} _formField
     * @param {?} _colorFormats
     * @param {?} _adapter
     */
    constructor(_elementRef, _formField, _colorFormats, _adapter) {
        this._elementRef = _elementRef;
        this._formField = _formField;
        this._colorFormats = _colorFormats;
        this._adapter = _adapter;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.colorInput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._cvaOnChange = (/**
         * @return {?}
         */
        () => { });
        this._validatorOnChange = (/**
         * @return {?}
         */
        () => { });
        this._pickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /**
         * The combined form control validator for this input.
         */
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._colorFormats) {
            throw createMissingDateImplError('MAT_COLOR_FORMATS');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxMatColorPicker(value) {
        if (!value) {
            return;
        }
        this._picker = value;
        this._picker.registerInput(this);
        this._pickerSubscription.unsubscribe();
        this._pickerSubscription = this._picker._selectedChanged.subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        (selected) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.colorInput.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
            this.colorChange.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
        }));
    }
    /**
     * Whether the colorpicker-input is disabled.
     * @return {?}
     */
    get disabled() { return !!this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._disabledChange.emit(newValue);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    /**
     * The value of the input.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        /** @type {?} */
        const oldValue = this.value;
        this._value = value;
        this._formatValue(value);
        if (!this._adapter.sameColor(oldValue, value)) {
            this._valueChange.emit(value);
        }
    }
    /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    /**
     * @deprecated
     * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    getPopupConnectionElementRef() {
        return this.getConnectedOverlayOrigin();
    }
    /**
     * Gets the element that the colorpicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._pickerSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    _onChange() {
        this.colorChange.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onKeydown(event) {
        /** @type {?} */
        const isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["DOWN_ARROW"];
        if (this._picker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._picker.open();
            event.preventDefault();
        }
    }
    /**
     * Handles blur events on the input.
     * @return {?}
     */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }
    /**
     * Formats a value and sets it on the input element.
     * @private
     * @param {?} value
     * @return {?}
     */
    _formatValue(value) {
        this._elementRef.nativeElement.value = value ? this._adapter.format(value, this._colorFormats.display.colorInput) : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onInput(value) {
        /** @type {?} */
        const lastValueWasValid = this._lastValueValid;
        /** @type {?} */
        const nextValue = this._adapter.parse(value);
        if (!this._adapter.sameColor(nextValue, this._value)) {
            this._value = nextValue;
            this._cvaOnChange(nextValue);
            this._valueChange.emit(nextValue);
            this.colorInput.emit(new NgxMatColorPickerInputEvent(this, this._elementRef.nativeElement));
        }
        else if (lastValueWasValid !== this._lastValueValid) {
            this._validatorOnChange();
        }
    }
}
NgxMatColorPickerInput.ɵfac = function NgxMatColorPickerInput_Factory(t) { return new (t || NgxMatColorPickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_COLOR_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ColorAdapter)); };
NgxMatColorPickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NgxMatColorPickerInput, selectors: [["input", "ngxMatColorPicker", ""]], hostVars: 3, hostBindings: function NgxMatColorPickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function NgxMatColorPickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function NgxMatColorPickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function NgxMatColorPickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function NgxMatColorPickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-haspopup", ctx._picker ? "dialog" : null)("aria-owns", (ctx._picker == null ? null : ctx._picker.opened) && ctx._picker.id || null);
    } }, inputs: { ngxMatColorPicker: "ngxMatColorPicker", value: "value", disabled: "disabled" }, outputs: { colorChange: "colorChange", colorInput: "colorInput" }, exportAs: ["ngxMatColorPickerInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            MAT_COLORPICKER_VALUE_ACCESSOR,
            MAT_COLORPICKER_VALIDATORS,
            { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: NgxMatColorPickerInput },
        ])] });
/** @nocollapse */
NgxMatColorPickerInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_COLOR_FORMATS,] }] },
    { type: ColorAdapter }
];
NgxMatColorPickerInput.propDecorators = {
    ngxMatColorPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    colorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    colorInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorPickerInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'input[ngxMatColorPicker]',
                providers: [
                    MAT_COLORPICKER_VALUE_ACCESSOR,
                    MAT_COLORPICKER_VALIDATORS,
                    { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: NgxMatColorPickerInput },
                ],
                host: {
                    '[attr.aria-haspopup]': '_picker ? "dialog" : null',
                    '[attr.aria-owns]': '(_picker?.opened && _picker.id) || null',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)'
                },
                exportAs: 'ngxMatColorPickerInput'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_COLOR_FORMATS]
            }] }, { type: ColorAdapter }]; }, { colorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], colorInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], ngxMatColorPicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/color-toggle/color-toggle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatColorToggleComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this._disabled == null && this.picker) {
            return this.picker.disabled;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['picker']) {
            this._watchStateChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    open(event) {
        if (this.picker && !this.disabled) {
            this.picker.open();
            event.stopPropagation();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _watchStateChanges() {
        /** @type {?} */
        const disabled$ = this.picker ? this.picker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
        /** @type {?} */
        const inputDisabled$ = this.picker && this.picker._pickerInput ?
            this.picker._pickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
        /** @type {?} */
        const pickerToggled$ = this.picker ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.picker.openedStream, this.picker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
        this._stateChanges.unsubscribe();
        this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(disabled$, inputDisabled$, pickerToggled$).subscribe((/**
         * @return {?}
         */
        () => this._cd.markForCheck()));
    }
}
NgxMatColorToggleComponent.ɵfac = function NgxMatColorToggleComponent_Factory(t) { return new (t || NgxMatColorToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NgxMatColorToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxMatColorToggleComponent, selectors: [["ngx-mat-color-toggle"]], viewQuery: function NgxMatColorToggleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "ngx-mat-color-toggle"], hostVars: 7, hostBindings: function NgxMatColorToggleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function NgxMatColorToggleComponent_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ngx-mat-color-toggle-active", ctx.picker && ctx.picker.opened)("mat-accent", ctx.picker && ctx.picker.color === "accent")("mat-warn", ctx.picker && ctx.picker.color === "warn");
    } }, inputs: { disabled: "disabled", picker: ["for", "picker"], tabIndex: "tabIndex" }, exportAs: ["ngxMatColorPickerToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 5, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "click"], ["button", ""]], template: function NgxMatColorToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxMatColorToggleComponent_Template_button_click_0_listener($event) { return ctx.open($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-haspopup", ctx.picker ? "dialog" : null)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.picker == null ? null : ctx.picker._selected == null ? null : ctx.picker._selected.rgba);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-color-toggle-default-icon{margin:auto}"], encapsulation: 2 });
/** @nocollapse */
NgxMatColorToggleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
NgxMatColorToggleComponent.propDecorators = {
    picker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['for',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['button',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-mat-color-toggle',
                template: "<button #button mat-icon-button type=\"button\" [attr.aria-haspopup]=\"picker ? 'dialog' : null\"\r\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\" [disabled]=\"disabled\" (click)=\"open($event)\">\r\n  <mat-icon [style.color]=\"picker?._selected?.rgba\">palette</mat-icon>\r\n</button>",
                host: {
                    'class': 'ngx-mat-color-toggle',
                    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                    // consumer may have provided, while still being able to receive focus.
                    '[attr.tabindex]': '-1',
                    '[class.ngx-mat-color-toggle-active]': 'picker && picker.opened',
                    '[class.mat-accent]': 'picker && picker.color === "accent"',
                    '[class.mat-warn]': 'picker && picker.color === "warn"',
                    '(focus)': '_button.focus()'
                },
                exportAs: 'ngxMatColorPickerToggle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{display:block;height:1.5em;width:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-color-toggle-default-icon{margin:auto}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], picker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['for']
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['button']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/numeric-color-input.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericColorInputDirective {
    constructor() { }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInput($event) {
        this._formatInput($event.target);
    }
    /**
     * Format input
     * @private
     * @param {?} input
     * @return {?}
     */
    _formatInput(input) {
        /** @type {?} */
        let val = Number(input.value.replace(NUMERIC_REGEX, ''));
        val = isNaN(val) ? 0 : val;
        input.value = val;
    }
}
NumericColorInputDirective.ɵfac = function NumericColorInputDirective_Factory(t) { return new (t || NumericColorInputDirective)(); };
NumericColorInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NumericColorInputDirective, selectors: [["", "ngxMatNumericColorInput", ""]], hostBindings: function NumericColorInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function NumericColorInputDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } } });
/** @nocollapse */
NumericColorInputDirective.ctorParameters = () => [];
NumericColorInputDirective.propDecorators = {
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['input', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NumericColorInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxMatNumericColorInput]'
            }]
    }], function () { return []; }, { 
    /**
     * @param {?} $event
     * @return {?}
     */
    onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['input', ['$event']]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/color-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMatColorPickerModule {
}
NgxMatColorPickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NgxMatColorPickerModule });
NgxMatColorPickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NgxMatColorPickerModule_Factory(t) { return new (t || NgxMatColorPickerModule)(); }, providers: [
        ColorAdapter,
        NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxMatColorPickerModule, { declarations: function () { return [NgxMatColorPaletteComponent, NgxMatColorCanvasComponent, NgxMatColorCollectionComponent, NgxMatColorSliderComponent, NumericColorInputDirective, NgxMatColorPickerContentComponent, NgxMatColorPickerComponent, NgxMatColorToggleComponent, NgxMatColorPickerInput]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]; }, exports: function () { return [NgxMatColorToggleComponent, NgxMatColorPickerInput, NgxMatColorPickerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatColorPickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    NgxMatColorPaletteComponent,
                    NgxMatColorCanvasComponent,
                    NgxMatColorCollectionComponent,
                    NgxMatColorSliderComponent,
                    NumericColorInputDirective,
                    NgxMatColorPickerContentComponent,
                    NgxMatColorPickerComponent,
                    NgxMatColorToggleComponent,
                    NgxMatColorPickerInput
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
                ],
                exports: [
                    NgxMatColorToggleComponent,
                    NgxMatColorPickerInput,
                    NgxMatColorPickerComponent
                ],
                entryComponents: [
                    NgxMatColorPickerContentComponent
                ],
                providers: [
                    ColorAdapter,
                    NGX_MAT_COLOR_PICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-material-components-color-picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-material-components-color-picker.js.map

/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular-material-components/color-picker */ "idWV");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.component */ "hYta");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin.routing.module */ "3+9O");
/* harmony import */ var _search_account_search_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-account/search-account.component */ "pxjY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");


























class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [
        { provide: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["MAT_COLOR_FORMATS"], useValue: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["NGX_MAT_COLOR_FORMATS"] }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["NgxMatColorPickerModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_20__["AdminRoutingModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"], _search_account_search_account_component__WEBPACK_IMPORTED_MODULE_21__["SearchAccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["NgxMatColorPickerModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_20__["AdminRoutingModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"], _search_account_search_account_component__WEBPACK_IMPORTED_MODULE_21__["SearchAccountComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["NgxMatColorPickerModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_20__["AdminRoutingModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    { provide: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["MAT_COLOR_FORMATS"], useValue: _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_18__["NGX_MAT_COLOR_FORMATS"] }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "pxjY":
/*!******************************************************************!*\
  !*** ./src/app/admin/search-account/search-account.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAccountComponent", function() { return SearchAccountComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_step_completion_status_step_completion_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/step-completion-status/step-completion-status.component */ "ReiH");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _search_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-account.service */ "zbR+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





















function SearchAccountComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchAccountComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.togglePangel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchAccountComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.togglePangel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchAccountComponent_div_10_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.checkFormValidation());
} }
function SearchAccountComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Client Account Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r25.client_acct_id, " ");
} }
function SearchAccountComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Accout No# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r26.acct_no, " ");
} }
function SearchAccountComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r27.first_name, " ");
} }
function SearchAccountComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r28.last_name, " ");
} }
function SearchAccountComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Postal Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r29.postal_cd, " ");
} }
function SearchAccountComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r30.city, " ");
} }
function SearchAccountComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchAccountComponent_td_36_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.onAccountViewClick(element_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchAccountComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 42);
} }
function SearchAccountComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 43);
} }
const _c0 = function () { return [5, 10, 20]; };
class SearchAccountComponent {
    constructor(dialog, searchAccountService, router) {
        this.dialog = dialog;
        this.searchAccountService = searchAccountService;
        this.router = router;
        this.panelVisible = true;
        this.searchResults = [];
        this.displayedColumns = ['client_acct_id', 'acct_no', 'first_name', 'last_name', 'postal_cd', 'city', 'action'];
    }
    ngAfterViewInit() {
        this.callPagerAndSort();
    }
    ngOnInit() {
        this.callPagerAndSort();
        this.initForm();
    }
    callPagerAndSort() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.searchResults);
        if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    initForm() {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            'client_acct_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            'user_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            'acct_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            'postal_cd': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
    }
    onSubmit() {
        const searchModel = this.searchForm.value;
        if (this.searchForm.valid) {
            this.searchAccountService.SearchResults(searchModel).subscribe((result) => {
                if (result && result.error_msg === "OK" && result.error_code === 0) {
                    this.searchResults = result.account_details_m;
                    if (this.searchResults.length > 0) {
                        this.callPagerAndSort();
                    }
                }
                else {
                    let statusData = {
                        title: 'Unexpected Error occured while seaching.!',
                        details: result && result.error_msg.length > 0 ? result.error_msg : "Some error occured, please try again.",
                        stepSuccessful: false
                    };
                    let ref = this.dialog.open(src_app_shared_step_completion_status_step_completion_status_component__WEBPACK_IMPORTED_MODULE_3__["StepCompletionStatusComponent"], { height: '48vh', width: '42vw', data: statusData });
                }
            });
        }
        else {
            return;
        }
    }
    checkFormValidation() {
        const searchModel = this.searchForm.value;
        if (searchModel.first_name === '' && searchModel.last_name === '' && searchModel.client_acct_id === ''
            && searchModel.user_id === '' && searchModel.acct_no === '' && searchModel.postal_cd === '') {
            return true;
        }
        return false;
    }
    togglePangel() {
        this.panelVisible = !this.panelVisible;
    }
    onAccountViewClick(user) {
        debugger;
        localStorage.setItem("user_id", user.user_id);
        localStorage.setItem("session_id", user.user_id);
        localStorage.setItem("client_acct_id", user.client_acct_id);
        localStorage.setItem("impersonate", 'yes'); // we have to clear this at some point
        localStorage.setItem("first_name", user.first_name);
        localStorage.setItem("last_name", user.last_name);
        localStorage.setItem("email", user.user_id);
        this.router.navigate(["/Login"]);
    }
}
SearchAccountComponent.ɵfac = function SearchAccountComponent_Factory(t) { return new (t || SearchAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_account_service__WEBPACK_IMPORTED_MODULE_8__["SearchAccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
SearchAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchAccountComponent, selectors: [["app-search-account"]], viewQuery: function SearchAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 40, vars: 9, consts: [[1, "main-container"], [1, "card"], [1, "card-header"], [1, "expand-icons"], [3, "click", 4, "ngIf"], ["class", "card-data-container", 4, "ngIf"], [1, "mat-elevation-z8"], ["matSort", "", "mat-table", "", "matSortActive", "fisrt_name", "matSortDirection", "desc", "matSortDisableClear", "", 3, "dataSource"], ["matColumnDef", "client_acct_id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "row-data", 4, "matCellDef"], ["matColumnDef", "acct_no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "first_name"], ["matColumnDef", "last_name"], ["matColumnDef", "postal_cd"], ["matColumnDef", "city"], ["matColumnDef", "action"], ["mat-cell", "", "class", "action-link row-data", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], [3, "click"], [1, "card-data-container"], ["form", "", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "full-width"], ["appearance", "outline", 1, "custom-mat-input", "m-field"], ["matInput", "", "placeholder", "Email/User Id", "formControlName", "user_id", 1, "input-text"], ["matInput", "", "placeholder", "Client Id", "formControlName", "client_acct_id", 1, "input-text"], ["matInput", "", "placeholder", "Account No.", "formControlName", "acct_no", 1, "input-text"], ["matInput", "", "placeholder", "First Name", "formControlName", "first_name", 1, "input-text"], ["matInput", "", "placeholder", "Last Name", "formControlName", "last_name", 1, "input-text"], ["matInput", "", "placeholder", "Post Code", "formControlName", "postal_cd", 1, "input-text"], [1, "row", "center-content"], [1, "btn-container"], ["mat-stroked-button", "", "color", "primary", "type", "submit", 1, "confirm-button", 3, "disabled"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "row-data"], ["mat-header-cell", ""], ["mat-cell", "", 1, "action-link", "row-data"], [1, "viewable-accounts", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function SearchAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Search User Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchAccountComponent_mat_icon_8_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchAccountComponent_mat_icon_9_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchAccountComponent_div_10_Template, 20, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Search Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SearchAccountComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchAccountComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SearchAccountComponent_th_20_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SearchAccountComponent_td_21_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SearchAccountComponent_th_23_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SearchAccountComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SearchAccountComponent_th_26_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SearchAccountComponent_td_27_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SearchAccountComponent_th_29_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SearchAccountComponent_td_30_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SearchAccountComponent_th_32_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, SearchAccountComponent_td_33_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SearchAccountComponent_th_35_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SearchAccountComponent_td_36_Template, 3, 0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SearchAccountComponent_tr_37_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SearchAccountComponent_tr_38_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.panelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.panelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.panelVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("pageSize", 10);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["body {\n  background-color: #f9f9f9;\n}\n\n[_nghost-%COMP%]     .mat-form-field {\n  width: 30%;\n  margin: 20px 20px 0px 20px;\n}\n\n[_nghost-%COMP%]     .mat-icon {\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin: 42px 88px 42px 88px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 10px;\n  border: 1px solid #CFCFCF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 28px;\n}\n\n.card-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.card-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 16px;\n}\n\n.card-data-left[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.card-data-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 32px;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  font-size: 24px;\n  line-height: 28px;\n  background: #03344E;\n  color: #FFFFFF;\n  font-weight: normal;\n  padding: 16px 30px 16px 30px;\n}\n\n.card-sub-header[_ngcontent-%COMP%] {\n  display: inline;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 21px;\n  \n  letter-spacing: 0.5px;\n  \n  color: #FFFFFF;\n}\n\n.card-sub-header-right[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 18px;\n  color: white;\n  text-decoration: none;\n}\n\n.card-data-container[_ngcontent-%COMP%] {\n  padding: 0px 30px 0px 30px;\n  margin-bottom: 20px;\n}\n\n.card-data-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 18.75px;\n  color: #03344E;\n  display: block;\n}\n\n.card-data-info[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 21px;\n  color: #606060;\n  display: block;\n}\n\n.card-data-block[_ngcontent-%COMP%] {\n  margin: 24px 0 24px 0px;\n}\n\n.card-data-heading[_ngcontent-%COMP%] {\n  color: #03344E;\n  font-size: 20px;\n  display: block;\n}\n\n.card-data-heading-s2[_ngcontent-%COMP%] {\n  color: #828282;\n  font-size: 20px;\n  display: block;\n  padding-top: 16px;\n  padding-bottom: 8px;\n}\n\n@media screen and (max-width: 900px) {\n  .card-left[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0px;\n  }\n\n  .card-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .card-data-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card-data-right[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    border-top: 1px solid #CFCFCF;\n    width: 100%;\n  }\n\n  .text-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    float: right;\n    margin-right: 0px;\n    margin-left: 32px;\n  }\n\n  .btn-container[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n}\n\n.Error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  justify-content: space-around;\n}\n\n@media screen and (max-width: 769px) {\n  .btn-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.confirm-button[_ngcontent-%COMP%] {\n  min-width: 180px;\n  min-height: 45px;\n  background: #03344E;\n  border-radius: 22px;\n  color: #FFFFFF;\n  border: 1.5px solid #03344E;\n  box-sizing: border-box;\n  border-radius: 28px;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.expand-icons[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.confirm-button[_ngcontent-%COMP%]:disabled {\n  background: #4d93b8e3;\n  color: white;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border-spacing: unset;\n  overflow: hidden;\n  width: 100%;\n  border: 2px solid #cfcfcf;\n  box-sizing: border-box;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  text-align: left;\n  margin-bottom: 20px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 21px;\n  \n  letter-spacing: 0.5px;\n  \n  color: #606060;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: white;\n  font-weight: 500;\n  font-size: 18px;\n}\n\nthead[_ngcontent-%COMP%] {\n  background-color: white !important;\n  color: #000000;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #000000;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #cfcfcf;\n}\n\n.sort-icon[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fcfcfc;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\ntable[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.row-data[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 21px;\n  letter-spacing: 0.5px;\n  text-align: left;\n  margin-bottom: 20px;\n}\n\n.viewable-accounts[_ngcontent-%COMP%] {\n  color: #5d93da;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2VhcmNoLWFjY291bnQvc2VhcmNoLWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBRUU7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksMkNBQUE7QUFESjs7QUFJQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEscUJBQUE7RUFFQSxVQUFBO0VBRUEsY0FBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7QUFESjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsaUJBQUE7RUFDTjs7RUFDRTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQUVOOztFQUFFO0lBQ0ksZUFBQTtFQUdOOztFQUNFO0lBQ0ksV0FBQTtFQUVOOztFQUNFO0lBQ0ksZ0JBQUE7SUFDQSw2QkFBQTtJQUNBLFdBQUE7RUFFTjs7RUFDRTtJQUNJLFdBQUE7RUFFTjs7RUFFRTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBQ047O0VBQ0U7SUFDSSxnQkFBQTtFQUVOO0FBQ0Y7O0FBQ0E7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkF0S1U7RUF1S1Ysa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUVJO0VBVko7SUFXUSxzQkFBQTtJQUNBLG1CQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsY0FBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBOztFQUVJLGFBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtBQURKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2VhcmNoLWFjY291bnQvc2VhcmNoLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG5cclxuOjpuZy1kZWVwIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOjIwcHggMjBweCAwcHggMjBweDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwICAubWF0LWljb257XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbi5tYWluLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjo0MnB4IDg4cHggNDJweCA4OHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNDRkNGQ0Y7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyOHB4O1xyXG59XHJcblxyXG4uY2FyZC1sZWZ0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmNhcmQtcmlnaHR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWRhdGEtbGVmdHtcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG59XHJcblxyXG4uY2FyZC1kYXRhLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4OyBcclxufVxyXG5cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMzNDRFO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMTZweCAzMHB4IDE2cHggMzBweDtcclxufVxyXG4uY2FyZC1zdWItaGVhZGVye1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cclxuICAgIC8qIHdoaXRlICovXHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNhcmQtc3ViLWhlYWRlci1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY2FyZC1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweCAwcHggMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRhdGEtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTguNzVweDtcclxuICAgIGNvbG9yOiAjMDMzNDRFO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkLWRhdGEtaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhcmQtZGF0YS1ibG9ja3tcclxuICAgIG1hcmdpbjogMjRweCAwIDI0cHggMHB4O1xyXG59XHJcbi5jYXJkLWRhdGEtaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjMDMzNDRFO1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkLWRhdGEtaGVhZGluZy1zMntcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNhcmQtbGVmdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXJpZ2h0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtZGF0YS1sZWZ0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWRhdGEtcmlnaHR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRkNGQ0Y7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYnRue1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIH1cclxuICAgIC5idG4tY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG59XHJcbi5FcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29uZmlybS1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMzNDRFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzAzMzQ0RTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG59XHJcbi5jZW50ZXItY29udGVudHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4cGFuZC1pY29uc3tcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uY29uZmlybS1idXR0b246ZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGQ5M2I4ZTM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuICBcclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLmNhcmQtdGFibGUge1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IHVuc2V0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NmY2ZjZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgXHJcbiAgICAvKiBHUkVZLSBMSUdIVEVSICovXHJcbiAgICBcclxuICAgIGNvbG9yOiAjNjA2MDYwO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxudGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZmNmY2Y7XHJcbn1cclxuLnNvcnQtaWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbnRhYmxlLCAudGFibGUtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3ctZGF0YSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi52aWV3YWJsZS1hY2NvdW50c3tcclxuICAgIGNvbG9yOiByZ2IoOTMsIDE0NywgMjE4KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('panelInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-05%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-05%)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search-account',
                templateUrl: './search-account.component.html',
                styleUrls: ['./search-account.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('panelInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-05%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-05%)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _search_account_service__WEBPACK_IMPORTED_MODULE_8__["SearchAccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "zbR+":
/*!****************************************************************!*\
  !*** ./src/app/admin/search-account/search-account.service.ts ***!
  \****************************************************************/
/*! exports provided: SearchAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAccountService", function() { return SearchAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ "cplz");



class SearchAccountService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    SearchResults(data) {
        return this.dataService.post(`Admin/SearchUserAccounts`, data);
    }
}
SearchAccountService.ɵfac = function SearchAccountService_Factory(t) { return new (t || SearchAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
SearchAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchAccountService, factory: SearchAccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchAccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map