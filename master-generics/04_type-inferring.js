// You don't need to always pass Types to generic function!.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addIdToObject = function (obj) {
    return __assign(__assign({}, obj), { id: "123" });
};
var result = addIdToObject({ firstName: "aryan", lastName: "tapre" });
console.log(result);
