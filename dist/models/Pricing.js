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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricing = void 0;
const typeorm_1 = require("typeorm");
const Organization_1 = require("./Organization");
let Pricing = class Pricing {
};
exports.Pricing = Pricing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Pricing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Organization_1.Organization, organization => organization.pricing),
    __metadata("design:type", String)
], Pricing.prototype, "organization", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "itemType", enum: ["perishable", "non-perishable"] }),
    __metadata("design:type", String)
], Pricing.prototype, "itemType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pricing.prototype, "zone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'base_distance_in_km' }),
    __metadata("design:type", Number)
], Pricing.prototype, "baseDistanceInKm", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'km_price' }),
    __metadata("design:type", Number)
], Pricing.prototype, "kmPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fixed_price' }),
    __metadata("design:type", Number)
], Pricing.prototype, "fixedPrice", void 0);
exports.Pricing = Pricing = __decorate([
    (0, typeorm_1.Entity)()
], Pricing);
//# sourceMappingURL=Pricing.js.map