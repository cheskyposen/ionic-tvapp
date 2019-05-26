(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-details-show-details-module"],{

/***/ "./src/app/show-details/season-details/season-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/show-details/season-details/season-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\"\n                  (click)=\"onClose()\">\n        <ion-icon name=\"close-circle-outline\"\n                  slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{showName}} - Season {{episodeList[0].season}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let episode of episodeList\">\n      <ion-thumbnail *ngIf=\"episode.image\">\n        <img src=\"{{episode.image}}\">\n      </ion-thumbnail>\n      <ion-label margin>\n        S{{episode.season}}E{{episode.episode}}: {{episode.name}}\n        <p [innerHTML]=\"episode.summary\" ></p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/show-details/season-details/season-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/show-details/season-details/season-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctZGV0YWlscy9zZWFzb24tZGV0YWlscy9zZWFzb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/show-details/season-details/season-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/show-details/season-details/season-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: SeasonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonDetailsComponent", function() { return SeasonDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SeasonDetailsComponent = /** @class */ (function () {
    function SeasonDetailsComponent(modalCtr) {
        this.modalCtr = modalCtr;
    }
    SeasonDetailsComponent.prototype.ngOnInit = function () { };
    SeasonDetailsComponent.prototype.onClose = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SeasonDetailsComponent.prototype, "episodeList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SeasonDetailsComponent.prototype, "showName", void 0);
    SeasonDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-season-details',
            template: __webpack_require__(/*! ./season-details.component.html */ "./src/app/show-details/season-details/season-details.component.html"),
            styles: [__webpack_require__(/*! ./season-details.component.scss */ "./src/app/show-details/season-details/season-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SeasonDetailsComponent);
    return SeasonDetailsComponent;
}());



/***/ }),

/***/ "./src/app/show-details/show-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/show-details/show-details.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsPageModule", function() { return ShowDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _show_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-details.page */ "./src/app/show-details/show-details.page.ts");
/* harmony import */ var _season_details_season_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./season-details/season-details.component */ "./src/app/show-details/season-details/season-details.component.ts");








var routes = [
    {
        path: '',
        component: _show_details_page__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsPage"]
    }
];
var ShowDetailsPageModule = /** @class */ (function () {
    function ShowDetailsPageModule() {
    }
    ShowDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_show_details_page__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsPage"], _season_details_season_details_component__WEBPACK_IMPORTED_MODULE_7__["SeasonDetailsComponent"]],
            entryComponents: [_season_details_season_details_component__WEBPACK_IMPORTED_MODULE_7__["SeasonDetailsComponent"]]
        })
    ], ShowDetailsPageModule);
    return ShowDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/show-details/show-details.page.html":
/*!*****************************************************!*\
  !*** ./src/app/show-details/show-details.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n              defaultHref=\"/search\"\n              text=\"back\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"show\">\n    <ion-card-header>\n      <ion-card-title color=\"primary\">{{show.name}}</ion-card-title>\n      <ion-card-subtitle color=\"secondary\">\n        <span *ngIf=\"show.status\">Status: <strong>{{show.status}}</strong></span>\n        <span *ngIf=\"show.status && show.premiered\">   |   </span>\n        <span *ngIf=\"show.premiered\"> Aired: <strong>{{show.premiered | date}}</strong></span>\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item-divider>\n        <ion-text [innerHTML]=\"show.summary\" color=\"dark\"></ion-text>\n      </ion-item-divider>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-text *ngIf=\"show.lastEp\"><strong>Last Ep:</strong> S{{show.lastEp.season}}E{{show.lastEp.episode}} {{show.lastEp.name}}</ion-text>\n          </ion-col>\n          <ion-col text-end>\n            <ion-text *ngIf=\"show.nextEp\"><strong>Next Ep:</strong> S{{show.nextEp.season}}E{{show.nextEp.episode}} {{show.nextEp.name}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngFor=\"let season of show.episodes; let i = index\" sizeMd=\"4\">\n            <ion-button *ngIf=\"i % 2 == 0\" color=\"primary\" padding expand=\"block\" (click)=\"loadSeason(i)\">Season {{season[0].season}}</ion-button>\n            <ion-button *ngIf=\"i % 2 == 1\" color=\"secondary\" padding expand=\"block\" (click)=\"loadSeason(i)\">Season {{season[0].season}}</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/show-details/show-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/show-details/show-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctZGV0YWlscy9zaG93LWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/show-details/show-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/show-details/show-details.page.ts ***!
  \***************************************************/
/*! exports provided: ShowDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsPage", function() { return ShowDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tvmaze_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tvmaze.service */ "./src/app/models/tvmaze.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _season_details_season_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./season-details/season-details.component */ "./src/app/show-details/season-details/season-details.component.ts");






var ShowDetailsPage = /** @class */ (function () {
    function ShowDetailsPage(tvmaze, route, modalController) {
        var _this = this;
        this.tvmaze = tvmaze;
        this.route = route;
        this.modalController = modalController;
        this.route.paramMap
            .subscribe(function (pm) {
            _this.sid = pm.get('sid');
            _this.fetchShow();
        });
    }
    ShowDetailsPage.prototype.fetchShow = function () {
        var _this = this;
        this.tvmaze.fetchShow(this.sid)
            .subscribe(function (resultingShow) {
            _this.show = resultingShow;
            _this.loadFirstAndLastEpisodes();
            _this.tvmaze.fetchEpisodes(_this.show.id)
                .subscribe(function (episodes) {
                _this.show.addEpisodes(episodes);
            });
        });
    };
    ShowDetailsPage.prototype.loadFirstAndLastEpisodes = function () {
        var _this = this;
        if (this.show.lastEpLink) {
            this.tvmaze.fetchEpisodeByURL(this.show.lastEpLink).subscribe(function (ep) { return _this.show.lastEp = ep; });
        }
        if (this.show.nextEpLink) {
            this.tvmaze.fetchEpisodeByURL(this.show.nextEpLink).subscribe(function (ep) { return _this.show.nextEp = ep; });
        }
    };
    ShowDetailsPage.prototype.loadSeason = function (season) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _season_details_season_details_component__WEBPACK_IMPORTED_MODULE_5__["SeasonDetailsComponent"],
                            componentProps: {
                                episodeList: this.show.episodes[season],
                                showName: this.show.name
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShowDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-details',
            template: __webpack_require__(/*! ./show-details.page.html */ "./src/app/show-details/show-details.page.html"),
            styles: [__webpack_require__(/*! ./show-details.page.scss */ "./src/app/show-details/show-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_tvmaze_service__WEBPACK_IMPORTED_MODULE_2__["TvmazeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ShowDetailsPage);
    return ShowDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=show-details-show-details-module.js.map