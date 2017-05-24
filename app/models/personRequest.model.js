"use strict";
var PersonRequest = (function () {
    function PersonRequest(Id, keyword, skipCount, takeCount, sortOrder, orderBy, countryCode) {
        this.Id = Id;
        this.keyword = keyword;
        this.skipCount = skipCount;
        this.takeCount = takeCount;
        this.sortOrder = sortOrder;
        this.orderBy = orderBy;
        this.countryCode = countryCode;
        this.Id = 0;
        this.keyword = "";
        this.skipCount = 0;
        this.takeCount = 3;
        this.sortOrder = "";
        this.orderBy = "";
        this.countryCode = "";
    }
    return PersonRequest;
}());
exports.PersonRequest = PersonRequest;
//# sourceMappingURL=personRequest.model.js.map