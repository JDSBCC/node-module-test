"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SampleService = (function () {
    function SampleService() {
        this.title = "Sample service";
        console.log('hello from sample service');
    }
    SampleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SampleService);
    return SampleService;
}());
exports.SampleService = SampleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbE1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250cm9sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBSXpDO0lBR0M7UUFGTyxVQUFLLEdBQVcsZ0JBQWdCLENBQUM7UUFHdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFORjtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBT2Isb0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLHFCQUFhLGdCQU16QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhbXBsZVNlcnZpY2V7XHJcblx0cHVibGljIHRpdGxlOiBzdHJpbmcgPSBcIlNhbXBsZSBzZXJ2aWNlXCI7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdGNvbnNvbGUubG9nKCdoZWxsbyBmcm9tIHNhbXBsZSBzZXJ2aWNlJyk7XHJcblx0fVxyXG59Il19