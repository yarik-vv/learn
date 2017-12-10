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
var core_1 = require('@angular/core');
var todos = [
    {
        title: 'zadacha #1',
        completed: false
    },
    {
        title: 'zadacha #2',
        completed: true
    },
    {
        title: 'zadacha #3',
        completed: true
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Zdarova!';
        this.todos = todos;
    }
    AppComponent.prototype.toggle = function (item) {
        item.completed = !item.completed;
    };
    AppComponent.prototype.delete = function (item) {
        var index = this.todos.indexOf(item);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map