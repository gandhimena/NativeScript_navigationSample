"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
    }
    Page1Component.prototype.goToPage2 = function () {
        this.router.navigate(["/page2"]);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            templateUrl: "./pages/page1/page1.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map