(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cloud = require('kentico-cloud-angular2-sdk');

console.log("Kentico Cloud Test");

var apiUrl = 'https://deliver.kenticocloud.com';
var projectId = 'b52fa0db-84ec-4310-8f7c-3b94ed06644d';

// classes need to be created so that strongly typed objects are returned
// no properties are necessary as they are created on the objects themselves
class CodeExample {
}

class Category {
}

class Author {
}

class Character {
}

// configure type resolvers
var typeResolvers = [
    new cloud.TypeResolver("code_example", () => new CodeExample()),
    new cloud.TypeResolver("category", () => new Category()),
    new cloud.TypeResolver("author", () => new Author()),
    new cloud.TypeResolver("character", () => new Character()),
];

var config = new cloud.DeliveryClientConfig(apiUrl, projectId, typeResolvers)

// instantiate delivery client
var deliveryClient = new cloud.DeliveryClient(config);

// use it
deliveryClient.getItems().subscribe(response => console.log(response));
deliveryClient.getItem("author", "rimmer").subscribe(response => console.log(response));
deliveryClient.getItems(null, [
    new cloud.LimitParameter(5)
]).subscribe(response => console.log(response));

},{"kentico-cloud-angular2-sdk":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delivery_client_service_1 = require("./lib/services/delivery-client.service");
exports.DeliveryClient = delivery_client_service_1.DeliveryClient;
var delivery_client_config_1 = require("./lib/config/delivery-client.config");
exports.DeliveryClientConfig = delivery_client_config_1.DeliveryClientConfig;
var type_resolver_class_1 = require("./lib/models/item/type-resolver.class");
exports.TypeResolver = type_resolver_class_1.TypeResolver;
var content_item_class_1 = require("./lib/models/item/content-item.class");
exports.ContentItem = content_item_class_1.ContentItem;
var filters_1 = require("./lib/models/common/filters");
exports.AllFilter = filters_1.AllFilter;
exports.AnyFilter = filters_1.AnyFilter;
exports.ContainsFilter = filters_1.ContainsFilter;
exports.EqualsFilter = filters_1.EqualsFilter;
exports.GreaterThanFilter = filters_1.GreaterThanFilter;
exports.GreaterThanOrEqualFilter = filters_1.GreaterThanOrEqualFilter;
exports.Infilter = filters_1.Infilter;
exports.LessThanFilter = filters_1.LessThanFilter;
exports.LessThanOrEqualFilter = filters_1.LessThanOrEqualFilter;
exports.RangeFilter = filters_1.RangeFilter;
var field_types_1 = require("./lib/fields/field-types");
exports.AssetsField = field_types_1.AssetsField;
exports.DateTimeField = field_types_1.DateTimeField;
exports.MultipleChoiceField = field_types_1.MultipleChoiceField;
exports.NumberField = field_types_1.NumberField;
exports.RichTextField = field_types_1.RichTextField;
exports.TextField = field_types_1.TextField;
var parameters_1 = require("./lib/models/common/parameters");
exports.DepthParameter = parameters_1.DepthParameter;
exports.ElementsParameter = parameters_1.ElementsParameter;
exports.LimitParameter = parameters_1.LimitParameter;
exports.OrderParameter = parameters_1.OrderParameter;
exports.SkipParameter = parameters_1.SkipParameter;
var content_type_class_1 = require("./lib/models/type/content-type.class");
exports.ContentType = content_type_class_1.ContentType;
var responses_1 = require("./lib/models/item/responses");
exports.DeliveryItemListingResponse = responses_1.DeliveryItemListingResponse;
exports.DeliveryItemResponse = responses_1.DeliveryItemResponse;
var responses_2 = require("./lib/models/type/responses");
exports.DeliveryTypeListingResponse = responses_2.DeliveryTypeListingResponse;
exports.DeliveryTypeResponse = responses_2.DeliveryTypeResponse;
var sort_order_enum_1 = require("./lib/models/common/sort-order.enum");
exports.SortOrder = sort_order_enum_1.SortOrder;

},{"./lib/config/delivery-client.config":3,"./lib/fields/field-types":6,"./lib/models/common/filters":7,"./lib/models/common/parameters":9,"./lib/models/common/sort-order.enum":10,"./lib/models/item/content-item.class":12,"./lib/models/item/responses":13,"./lib/models/item/type-resolver.class":14,"./lib/models/type/content-type.class":17,"./lib/models/type/responses":18,"./lib/services/delivery-client.service":20}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryClientConfig = (function () {
    function DeliveryClientConfig(apiEndpoint, projectId, typeResolvers, options) {
        this.apiEndpoint = apiEndpoint;
        this.projectId = projectId;
        this.typeResolvers = typeResolvers;
        this.options = options;
        this.logErrorsToConsole = true;
        if (options)
            Object.assign(this, options);
    }
    return DeliveryClientConfig;
}());
exports.DeliveryClientConfig = DeliveryClientConfig;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetModel = (function () {
    function AssetModel(name, type, size, description, url) {
        this.name = name;
        this.type = type;
        this.size = size;
        this.description = description;
        this.url = url;
    }
    return AssetModel;
}());
exports.AssetModel = AssetModel;
var MultipleChoiceOption = (function () {
    function MultipleChoiceOption(name, codename) {
        this.name = name;
        this.codename = codename;
    }
    return MultipleChoiceOption;
}());
exports.MultipleChoiceOption = MultipleChoiceOption;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldType = (function () {
    function FieldType(type) {
        this.type = type;
    }
    FieldType.prototype.toString = function () {
        return this.type;
    };
    return FieldType;
}());
FieldType.text = new FieldType("text");
FieldType.number = new FieldType("number");
FieldType.modular_content = new FieldType("modular_content");
FieldType.asset = new FieldType("asset");
FieldType.datetime = new FieldType("date_time");
FieldType.rich_text = new FieldType("rich_text");
FieldType.multiple_choice = new FieldType("multiple_choice");
exports.FieldType = FieldType;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_models_1 = require("./field-models");
var TextField = (function () {
    function TextField(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.text = this.value;
    }
    ;
    return TextField;
}());
exports.TextField = TextField;
var MultipleChoiceField = (function () {
    function MultipleChoiceField(name, type, value) {
        var _this = this;
        this.name = name;
        this.type = type;
        this.value = value;
        this.options = [];
        if (this.value) {
            if (Array.isArray(this.value)) {
                this.value.forEach(function (option) {
                    var optionTemp = option;
                    _this.options.push(new field_models_1.MultipleChoiceOption(optionTemp.name, optionTemp.codename));
                });
            }
        }
    }
    ;
    return MultipleChoiceField;
}());
exports.MultipleChoiceField = MultipleChoiceField;
var DateTimeField = (function () {
    function DateTimeField(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.datetime = new Date(value);
    }
    ;
    return DateTimeField;
}());
exports.DateTimeField = DateTimeField;
var RichTextField = (function () {
    function RichTextField(name, type, value, modularItems) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.modularItems = modularItems;
        this.items = [];
        this.text = value;
        this.items = modularItems;
    }
    ;
    return RichTextField;
}());
exports.RichTextField = RichTextField;
var NumberField = (function () {
    function NumberField(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.number = value;
    }
    ;
    return NumberField;
}());
exports.NumberField = NumberField;
var AssetsField = (function () {
    function AssetsField(name, type, value) {
        var _this = this;
        this.name = name;
        this.type = type;
        this.value = value;
        this.assets = [];
        if (this.value) {
            if (Array.isArray(this.value)) {
                this.value.forEach(function (asset) {
                    var assetTemp = asset;
                    _this.assets.push(new field_models_1.AssetModel(assetTemp.name, assetTemp.type, assetTemp.size, assetTemp.description, assetTemp.url));
                });
            }
        }
    }
    ;
    return AssetsField;
}());
exports.AssetsField = AssetsField;

},{"./field-models":4}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EqualsFilter = (function () {
    function EqualsFilter(field, value) {
        this.field = field;
        this.value = value;
    }
    EqualsFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'EqualsFilter' due to invalid field parameter");
        }
        return this.field;
    };
    EqualsFilter.prototype.GetParamValue = function () {
        if (!this.value) {
            return null;
        }
        return this.value;
    };
    return EqualsFilter;
}());
exports.EqualsFilter = EqualsFilter;
var AllFilter = (function () {
    function AllFilter(field, values) {
        this.field = field;
        this.values = values;
    }
    AllFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'AllFilter' due to invalid field parameter");
        }
        return this.field + "[all]";
    };
    AllFilter.prototype.GetParamValue = function () {
        if (!this.values) {
            return null;
        }
        return this.values.map(function (m) { return m.trim(); }).join(',');
    };
    return AllFilter;
}());
exports.AllFilter = AllFilter;
var AnyFilter = (function () {
    function AnyFilter(field, values) {
        this.field = field;
        this.values = values;
    }
    AnyFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'AnyFilter' due to invalid field parameter");
        }
        return this.field + "[any]";
    };
    AnyFilter.prototype.GetParamValue = function () {
        if (!this.values) {
            return null;
        }
        return this.values.map(function (m) { return m.trim(); }).join(',');
    };
    return AnyFilter;
}());
exports.AnyFilter = AnyFilter;
var ContainsFilter = (function () {
    function ContainsFilter(field, values) {
        this.field = field;
        this.values = values;
    }
    ContainsFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'ContainsFilter' due to invalid field parameter");
        }
        return this.field + "[contains]";
    };
    ContainsFilter.prototype.GetParamValue = function () {
        if (!this.values) {
            return null;
        }
        return this.values.map(function (m) { return m.trim(); }).join(',');
    };
    return ContainsFilter;
}());
exports.ContainsFilter = ContainsFilter;
var GreaterThanFilter = (function () {
    function GreaterThanFilter(field, value) {
        this.field = field;
        this.value = value;
    }
    GreaterThanFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'GreaterThanFilter' due to invalid field parameter");
        }
        return this.field + "[gt]";
    };
    GreaterThanFilter.prototype.GetParamValue = function () {
        if (!this.value) {
            return null;
        }
        return this.value;
    };
    return GreaterThanFilter;
}());
exports.GreaterThanFilter = GreaterThanFilter;
var GreaterThanOrEqualFilter = (function () {
    function GreaterThanOrEqualFilter(field, value) {
        this.field = field;
        this.value = value;
    }
    GreaterThanOrEqualFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'GreaterThanOrEqualFilter' due to invalid field parameter");
        }
        return this.field + "[gte]";
    };
    GreaterThanOrEqualFilter.prototype.GetParamValue = function () {
        if (!this.value) {
            return null;
        }
        return this.value;
    };
    return GreaterThanOrEqualFilter;
}());
exports.GreaterThanOrEqualFilter = GreaterThanOrEqualFilter;
var Infilter = (function () {
    function Infilter(field, values) {
        this.field = field;
        this.values = values;
    }
    Infilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'Infilter' due to invalid field parameter");
        }
        return this.field + "[in]";
    };
    Infilter.prototype.GetParamValue = function () {
        if (!this.values) {
            return null;
        }
        return this.values.map(function (m) { return m.trim(); }).join(',');
    };
    return Infilter;
}());
exports.Infilter = Infilter;
var LessThanFilter = (function () {
    function LessThanFilter(field, value) {
        this.field = field;
        this.value = value;
    }
    LessThanFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'LessThanFilter' due to invalid field parameter");
        }
        return this.field + "[lt]";
    };
    LessThanFilter.prototype.GetParamValue = function () {
        if (!this.value) {
            return null;
        }
        return this.value;
    };
    return LessThanFilter;
}());
exports.LessThanFilter = LessThanFilter;
var LessThanOrEqualFilter = (function () {
    function LessThanOrEqualFilter(field, value) {
        this.field = field;
        this.value = value;
    }
    LessThanOrEqualFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'LessThanOrEqualFilter' due to invalid field parameter");
        }
        return this.field + "[lte]";
    };
    LessThanOrEqualFilter.prototype.GetParamValue = function () {
        if (!this.value) {
            return null;
        }
        return this.value;
    };
    return LessThanOrEqualFilter;
}());
exports.LessThanOrEqualFilter = LessThanOrEqualFilter;
var RangeFilter = (function () {
    function RangeFilter(field, lowerValue, higherValue) {
        this.field = field;
        this.lowerValue = lowerValue;
        this.higherValue = higherValue;
    }
    RangeFilter.prototype.GetParam = function () {
        if (!this.field) {
            throw Error("Cannot apply 'RangeFilter' due to invalid field parameter");
        }
        return this.field + "[range]";
    };
    RangeFilter.prototype.GetParamValue = function () {
        if (!this.lowerValue) {
            return null;
        }
        if (!this.higherValue) {
            return null;
        }
        return this.lowerValue + "," + this.higherValue;
    };
    return RangeFilter;
}());
exports.RangeFilter = RangeFilter;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = (function () {
    function Pagination(skip, limit, count, next_page) {
        this.skip = skip;
        this.limit = limit;
        this.count = count;
        this.next_page = next_page;
    }
    return Pagination;
}());
exports.Pagination = Pagination;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sort_order_enum_1 = require("./sort-order.enum");
var ElementsParameter = (function () {
    function ElementsParameter(elementCodenames) {
        this.elementCodenames = elementCodenames;
    }
    ElementsParameter.prototype.GetParam = function () {
        return 'elements';
    };
    ElementsParameter.prototype.GetParamValue = function () {
        if (!this.elementCodenames) {
            return null;
        }
        return this.elementCodenames.map(function (m) { return m.trim(); }).join();
    };
    return ElementsParameter;
}());
exports.ElementsParameter = ElementsParameter;
var LimitParameter = (function () {
    function LimitParameter(limit) {
        this.limit = limit;
    }
    LimitParameter.prototype.GetParam = function () {
        return 'limit';
    };
    LimitParameter.prototype.GetParamValue = function () {
        return this.limit.toString();
    };
    return LimitParameter;
}());
exports.LimitParameter = LimitParameter;
var SkipParameter = (function () {
    function SkipParameter(skip) {
        this.skip = skip;
    }
    SkipParameter.prototype.GetParam = function () {
        return 'skip';
    };
    SkipParameter.prototype.GetParamValue = function () {
        return this.skip.toString();
    };
    return SkipParameter;
}());
exports.SkipParameter = SkipParameter;
var OrderParameter = (function () {
    function OrderParameter(field, sortOrder) {
        this.field = field;
        this.sortOrder = sortOrder;
    }
    OrderParameter.prototype.GetParam = function () {
        return 'order';
    };
    OrderParameter.prototype.GetParamValue = function () {
        var order;
        if (this.sortOrder == sort_order_enum_1.SortOrder.asc) {
            order = "asc";
        }
        else {
            order = "desc";
        }
        return this.field + "[" + order + "]";
    };
    return OrderParameter;
}());
exports.OrderParameter = OrderParameter;
var DepthParameter = (function () {
    function DepthParameter(depth) {
        this.depth = depth;
    }
    DepthParameter.prototype.GetParam = function () {
        return 'depth';
    };
    DepthParameter.prototype.GetParamValue = function () {
        return this.depth.toString();
    };
    return DepthParameter;
}());
exports.DepthParameter = DepthParameter;

},{"./sort-order.enum":10}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["asc"] = 0] = "asc";
    SortOrder[SortOrder["desc"] = 1] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentItemSystemAttributes = (function () {
    function ContentItemSystemAttributes(id, name, codename, type, last_modified) {
        this.id = id;
        this.name = name;
        this.codename = codename;
        this.type = type;
        this.last_modified = last_modified;
    }
    return ContentItemSystemAttributes;
}());
exports.ContentItemSystemAttributes = ContentItemSystemAttributes;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentItem = (function () {
    function ContentItem(options) {
        this.options = options;
        if (options)
            Object.assign(this, options);
    }
    return ContentItem;
}());
exports.ContentItem = ContentItem;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryItemListingResponse = (function () {
    function DeliveryItemListingResponse(items, pagination) {
        this.items = items;
        this.pagination = pagination;
    }
    DeliveryItemListingResponse.prototype.getFirstItem = function () {
        if (!this.items) {
            return null;
        }
        if (this.items.length < 1) {
            return null;
        }
        return this.items[0];
    };
    return DeliveryItemListingResponse;
}());
exports.DeliveryItemListingResponse = DeliveryItemListingResponse;
var DeliveryItemResponse = (function () {
    function DeliveryItemResponse(item) {
        this.item = item;
    }
    return DeliveryItemResponse;
}());
exports.DeliveryItemResponse = DeliveryItemResponse;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeResolver = (function () {
    function TypeResolver(type, resolve) {
        this.type = type;
        this.resolve = resolve;
    }
    return TypeResolver;
}());
exports.TypeResolver = TypeResolver;

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentTypeElement = (function () {
    function ContentTypeElement(type, name) {
        this.type = type;
        this.name = name;
    }
    return ContentTypeElement;
}());
exports.ContentTypeElement = ContentTypeElement;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentTypeSystemAttributes = (function () {
    function ContentTypeSystemAttributes(id, name, codename, last_modified) {
        this.id = id;
        this.name = name;
        this.codename = codename;
        this.last_modified = last_modified;
    }
    return ContentTypeSystemAttributes;
}());
exports.ContentTypeSystemAttributes = ContentTypeSystemAttributes;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentType = (function () {
    function ContentType(system, elements) {
        this.system = system;
        this.elements = elements;
    }
    return ContentType;
}());
exports.ContentType = ContentType;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryTypeListingResponse = (function () {
    function DeliveryTypeListingResponse(types, pagination) {
        this.types = types;
        this.pagination = pagination;
    }
    return DeliveryTypeListingResponse;
}());
exports.DeliveryTypeListingResponse = DeliveryTypeListingResponse;
var DeliveryTypeResponse = (function () {
    function DeliveryTypeResponse(type) {
        this.type = type;
    }
    return DeliveryTypeResponse;
}());
exports.DeliveryTypeResponse = DeliveryTypeResponse;

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// rxjs
var Observable_1 = require("rxjs/Observable");
var ajax_1 = require("rxjs/observable/dom/ajax");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/observable/throw");
// models
var responses_1 = require("../models/item/responses");
var pagination_class_1 = require("../models/common/pagination.class");
var responses_2 = require("../models/type/responses");
// services
var item_map_service_1 = require("../utility-services/item-map.service");
var type_map_service_1 = require("../utility-services/type-map.service");
var DeliveryClientBaseService = (function () {
    function DeliveryClientBaseService(config) {
        this.config = config;
        this.itemMapService = new item_map_service_1.ItemMapService(config.typeResolvers);
        this.typeMapService = new type_map_service_1.TypeMapService();
    }
    DeliveryClientBaseService.prototype.getUrl = function (action, options) {
        return this.addOptionsToUrl(this.getBaseUrl() + action, options);
    };
    DeliveryClientBaseService.prototype.getBaseUrl = function () {
        return this.config.apiEndpoint + '/' + this.config.projectId;
    };
    DeliveryClientBaseService.prototype.addOptionsToUrl = function (url, options) {
        if (options) {
            options.forEach(function (filter) {
                if (url.indexOf('?') > -1) {
                    url = url + '&' + filter.GetParam() + '=' + filter.GetParamValue();
                }
                else {
                    url = url + '?' + filter.GetParam() + '=' + filter.GetParamValue();
                }
            });
        }
        return url;
    };
    DeliveryClientBaseService.prototype.getError = function (error) {
        if (this.config.logErrorsToConsole) {
            console.error(error);
        }
        return error;
    };
    DeliveryClientBaseService.prototype.getSingleTypeResponse = function (json) {
        var cloudResponse = json;
        // map type
        var type = this.typeMapService.mapSingleType(cloudResponse);
        return new responses_2.DeliveryTypeResponse(type);
    };
    DeliveryClientBaseService.prototype.getMultipleTypeResponse = function (json, options) {
        var cloudResponse = json;
        // map types
        var types = this.typeMapService.mapMultipleTypes(cloudResponse);
        // pagination
        var pagination = new pagination_class_1.Pagination(cloudResponse.pagination.skip, cloudResponse.pagination.limit, cloudResponse.pagination.count, cloudResponse.pagination.next_page);
        return new responses_2.DeliveryTypeListingResponse(types, pagination);
    };
    DeliveryClientBaseService.prototype.getSingleResponse = function (json) {
        var cloudResponse = json;
        // map item
        var item = this.itemMapService.mapSingleItem(cloudResponse);
        return new responses_1.DeliveryItemResponse(item);
    };
    DeliveryClientBaseService.prototype.getMultipleResponse = function (json) {
        var cloudResponse = json;
        // map items
        var items = this.itemMapService.mapMultipleItems(cloudResponse);
        // pagination
        var pagination = new pagination_class_1.Pagination(cloudResponse.pagination.skip, cloudResponse.pagination.limit, cloudResponse.pagination.count, cloudResponse.pagination.next_page);
        return new responses_1.DeliveryItemListingResponse(items, pagination);
    };
    DeliveryClientBaseService.prototype.getSingleItem = function (action, options) {
        var _this = this;
        var url = this.getUrl(action, options);
        return ajax_1.ajax.getJSON(url)
            .map(function (json) {
            return _this.getSingleResponse(json);
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(_this.getError(err));
        });
    };
    DeliveryClientBaseService.prototype.getMultipleItems = function (action, options) {
        var _this = this;
        var url = this.getUrl(action, options);
        return ajax_1.ajax.getJSON(url)
            .map(function (json) {
            return _this.getMultipleResponse(json);
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(_this.getError(err));
        });
    };
    DeliveryClientBaseService.prototype.getSingleType = function (action, options) {
        var _this = this;
        var url = this.getUrl(action, options);
        return ajax_1.ajax.getJSON(url)
            .map(function (json) {
            return _this.getSingleTypeResponse(json);
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(_this.getError(err));
        });
    };
    DeliveryClientBaseService.prototype.getMultipleTypes = function (action, options) {
        var _this = this;
        var url = this.getUrl(action, options);
        return ajax_1.ajax.getJSON(url)
            .map(function (json) {
            return _this.getMultipleTypeResponse(json);
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(_this.getError(err));
        });
    };
    return DeliveryClientBaseService;
}());
exports.DeliveryClientBaseService = DeliveryClientBaseService;

},{"../models/common/pagination.class":8,"../models/item/responses":13,"../models/type/responses":18,"../utility-services/item-map.service":22,"../utility-services/type-map.service":23,"rxjs/Observable":26,"rxjs/add/operator/catch":31,"rxjs/add/operator/map":32,"rxjs/observable/dom/ajax":35,"rxjs/observable/throw":36}],20:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var filters_1 = require("../models/common/filters");
var delivery_client_base_service_1 = require("./delivery-client-base.service");
var DeliveryClient = (function (_super) {
    __extends(DeliveryClient, _super);
    function DeliveryClient(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        return _this;
    }
    DeliveryClient.prototype.getTypes = function (options) {
        var action = '/types';
        return _super.prototype.getMultipleTypes.call(this, action, options);
    };
    DeliveryClient.prototype.getType = function (type, options) {
        var action = '/types/' + type;
        return _super.prototype.getSingleType.call(this, action, options);
    };
    DeliveryClient.prototype.getItems = function (type, options) {
        var action = '/items';
        if (!options) {
            options = [];
        }
        // get all items of all types when no type is specified
        if (type) {
            options.push(new filters_1.EqualsFilter("system.type", type));
        }
        return _super.prototype.getMultipleItems.call(this, action, options);
    };
    DeliveryClient.prototype.getItem = function (type, codename, options) {
        var action = '/items/' + codename;
        return _super.prototype.getSingleItem.call(this, action, options);
    };
    return DeliveryClient;
}(delivery_client_base_service_1.DeliveryClientBaseService));
exports.DeliveryClient = DeliveryClient;

},{"../models/common/filters":7,"./delivery-client-base.service":19}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_types_1 = require("../fields/field-types");
var field_type_1 = require("../fields/field-type");
var FieldMapService = (function () {
    function FieldMapService(typeResolverService) {
        this.typeResolverService = typeResolverService;
    }
    FieldMapService.prototype.mapFields = function (item, modularContent) {
        var _this = this;
        var properties = Object.getOwnPropertyNames(item.elements);
        // create typed item
        var itemTyped = this.typeResolverService.createTypedObj(item.system.type, item);
        properties.forEach(function (fieldName) {
            var field = item.elements[fieldName];
            var propertyName;
            // resolve value into a different 'property'
            if (itemTyped.resolver) {
                propertyName = itemTyped.resolver(fieldName);
            }
            // if property name is null/empty, use elements codename
            if (!propertyName) {
                propertyName = fieldName;
            }
            itemTyped[propertyName] = _this.mapField(field, modularContent);
        });
        return itemTyped;
    };
    FieldMapService.prototype.mapField = function (field, modularContent) {
        if (field.type.toString() === field_type_1.FieldType.modular_content.toString()) {
            return this.mapModularField(field, modularContent);
        }
        else if (field.type.toString() === field_type_1.FieldType.text.toString()) {
            return this.mapTextField(field);
        }
        else if (field.type.toString() === field_type_1.FieldType.asset.toString()) {
            return this.mapAssetsField(field);
        }
        else if (field.type.toString() === field_type_1.FieldType.number.toString()) {
            return this.mapNumberField(field);
        }
        else if (field.type.toString() === field_type_1.FieldType.multiple_choice.toString()) {
            return this.mapMultipleChoiceField(field);
        }
        else if (field.type.toString() === field_type_1.FieldType.datetime.toString()) {
            return this.mapDateTimeField(field);
        }
        else if (field.type.toString() === field_type_1.FieldType.rich_text.toString()) {
            return this.mapRichTextField(field, modularContent);
        }
        else {
            var err = "Unsupported field type '" + field.type + "'";
            console.log(err);
            throw Error(err);
        }
    };
    FieldMapService.prototype.mapRichTextField = function (field, modularContent) {
        var _this = this;
        // get all modular content items nested in rich text
        var modularItems = [];
        if (field.modular_content) {
            if (Array.isArray(field.modular_content)) {
                field.modular_content.forEach(function (codename) {
                    // get modular item
                    var modularItem = _this.mapFields(modularContent[codename], modularContent);
                    modularItems.push(modularItem);
                });
            }
        }
        return new field_types_1.RichTextField(field.name, field.type, field.value, modularItems);
    };
    FieldMapService.prototype.mapDateTimeField = function (field) {
        return new field_types_1.DateTimeField(field.name, field.type, field.value);
    };
    FieldMapService.prototype.mapMultipleChoiceField = function (field) {
        return new field_types_1.MultipleChoiceField(field.name, field.type, field.value);
    };
    FieldMapService.prototype.mapNumberField = function (field) {
        return new field_types_1.NumberField(field.name, field.type, field.value);
    };
    FieldMapService.prototype.mapTextField = function (field) {
        return new field_types_1.TextField(field.name, field.type, field.value);
    };
    FieldMapService.prototype.mapAssetsField = function (field) {
        return new field_types_1.AssetsField(field.name, field.type, field.value);
    };
    FieldMapService.prototype.mapModularField = function (field, modularContent) {
        var modularItem = modularContent[field.value[0]];
        return this.mapFields(modularItem, modularContent);
    };
    return FieldMapService;
}());
exports.FieldMapService = FieldMapService;

},{"../fields/field-type":5,"../fields/field-types":6}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var field_map_service_1 = require("./field-map.service");
var type_resolver_service_1 = require("./type-resolver.service");
var ItemMapService = (function () {
    function ItemMapService(typeResolvers) {
        this.typeResolvers = typeResolvers;
        this.fieldMapService = new field_map_service_1.FieldMapService(new type_resolver_service_1.TypeResolverService(typeResolvers));
    }
    ItemMapService.prototype.mapItem = function (item, modularContent) {
        if (!item) {
            return null;
        }
        return this.fieldMapService.mapFields(item, modularContent);
    };
    ItemMapService.prototype.mapSingleItem = function (response) {
        return this.mapItem(response.item, response.modular_content);
    };
    ItemMapService.prototype.mapMultipleItems = function (response) {
        var that = this;
        return response.items.map(function (item) {
            return that.mapItem(item, response.modular_content);
        });
    };
    return ItemMapService;
}());
exports.ItemMapService = ItemMapService;

},{"./field-map.service":21,"./type-resolver.service":24}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_type_class_1 = require("../models/type/content-type.class");
var content_type_system_attributes_class_1 = require("../models/type/content-type-system-attributes.class");
var content_type_element_class_1 = require("../models/type/content-type-element.class");
var TypeMapService = (function () {
    function TypeMapService() {
    }
    TypeMapService.prototype.mapType = function (type) {
        if (!type) {
            return null;
        }
        var typeSystem = new content_type_system_attributes_class_1.ContentTypeSystemAttributes(type.system.id, type.system.name, type.system.codename, type.system.last_modified);
        var elements = [];
        if (type.elements) {
            var elementNames = Object.getOwnPropertyNames(type.elements);
            if (elementNames) {
                elementNames.forEach(function (elementName) {
                    var typeElement = type.elements[elementName];
                    if (!typeElement) {
                        throw "Cannot find element '" + elementName + "' on type '" + type + "'";
                    }
                    elements.push(new content_type_element_class_1.ContentTypeElement(typeElement.type, typeElement.name));
                });
            }
        }
        return new content_type_class_1.ContentType(typeSystem, elements);
    };
    TypeMapService.prototype.mapSingleType = function (response) {
        return this.mapType(response);
    };
    TypeMapService.prototype.mapMultipleTypes = function (response) {
        var that = this;
        return response.types.map(function (type) {
            return that.mapType(type);
        });
    };
    return TypeMapService;
}());
exports.TypeMapService = TypeMapService;

},{"../models/type/content-type-element.class":15,"../models/type/content-type-system-attributes.class":16,"../models/type/content-type.class":17}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_item_system_attributes_1 = require("../models/item/content-item-system-attributes");
var TypeResolverService = (function () {
    function TypeResolverService(typeResolvers) {
        this.typeResolvers = typeResolvers;
    }
    TypeResolverService.prototype.createTypedObj = function (type, item) {
        if (!type) {
            throw Error('Cannot resolve type because no type name was provided');
        }
        var typeResolver = this.typeResolvers.find(function (m) { return m.type === type; });
        if (!typeResolver) {
            throw Error("Cannot find resolver for type '" + type + "'");
        }
        var typedItem = typeResolver.resolve();
        // use typed 'system' property
        typedItem.system = new content_item_system_attributes_1.ContentItemSystemAttributes(item.system.id, item.system.name, item.system.codename, item.system.type, item.system.last_modified);
        return typedItem;
    };
    return TypeResolverService;
}());
exports.TypeResolverService = TypeResolverService;

},{"../models/item/content-item-system-attributes":11}],25:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('./Subscriber');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;

},{"./Subscriber":29}],26:[function(require,module,exports){
"use strict";
var root_1 = require('./util/root');
var toSubscriber_1 = require('./util/toSubscriber');
var observable_1 = require('./symbol/observable');
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;

},{"./symbol/observable":40,"./util/root":49,"./util/toSubscriber":51}],27:[function(require,module,exports){
"use strict";
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};

},{}],28:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('./Subscriber');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;

},{"./Subscriber":29}],29:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = require('./util/isFunction');
var Subscription_1 = require('./Subscription');
var Observer_1 = require('./Observer');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

},{"./Observer":27,"./Subscription":30,"./symbol/rxSubscriber":41,"./util/isFunction":46}],30:[function(require,module,exports){
"use strict";
var isArray_1 = require('./util/isArray');
var isObject_1 = require('./util/isObject');
var isFunction_1 = require('./util/isFunction');
var tryCatch_1 = require('./util/tryCatch');
var errorObject_1 = require('./util/errorObject');
var UnsubscriptionError_1 = require('./util/UnsubscriptionError');
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}

},{"./util/UnsubscriptionError":42,"./util/errorObject":43,"./util/isArray":44,"./util/isFunction":46,"./util/isObject":47,"./util/tryCatch":52}],31:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var catch_1 = require('../../operator/catch');
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;

},{"../../Observable":26,"../../operator/catch":37}],32:[function(require,module,exports){
"use strict";
var Observable_1 = require('../../Observable');
var map_1 = require('../../operator/map');
Observable_1.Observable.prototype.map = map_1.map;

},{"../../Observable":26,"../../operator/map":38}],33:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = require('../Observable');
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;

},{"../Observable":26}],34:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = require('../../util/root');
var tryCatch_1 = require('../../util/tryCatch');
var errorObject_1 = require('../../util/errorObject');
var Observable_1 = require('../../Observable');
var Subscriber_1 = require('../../Subscriber');
var map_1 = require('../../operator/map');
function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else if (!!root_1.root.XDomainRequest) {
        return new root_1.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new root_1.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new root_1.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) { headers = null; }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
exports.ajaxGet = ajaxGet;
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
exports.ajaxPost = ajaxPost;
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
exports.ajaxDelete = ajaxDelete;
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
exports.ajaxPut = ajaxPut;
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
exports.ajaxPatch = ajaxPatch;
;
function ajaxGetJSON(url, headers) {
    return new AjaxObservable({ method: 'GET', url: url, responseType: 'json', headers: headers })
        .lift(new map_1.MapOperator(function (x, index) { return x.response; }, null));
}
exports.ajaxGetJSON = ajaxGetJSON;
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = (function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(Observable_1.Observable));
exports.AjaxObservable = AjaxObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = (function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
        if (xhr === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
            }
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            xhr.timeout = request.timeout;
            xhr.responseType = request.responseType;
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? tryCatch_1.tryCatch(xhr.send).call(xhr, body) : tryCatch_1.tryCatch(xhr.send).call(xhr);
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (root_1.root.XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(Subscriber_1.Subscriber));
exports.AjaxSubscriber = AjaxSubscriber;
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        switch (this.responseType) {
            case 'json':
                if ('response' in xhr) {
                    //IE does not support json as responseType, parse it internally
                    this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
                }
                else {
                    this.response = JSON.parse(xhr.responseText || 'null');
                }
                break;
            case 'xml':
                this.response = xhr.responseXML;
                break;
            case 'text':
            default:
                this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
                break;
        }
    }
    return AjaxResponse;
}());
exports.AjaxResponse = AjaxResponse;
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = (function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
exports.AjaxTimeoutError = AjaxTimeoutError;

},{"../../Observable":26,"../../Subscriber":29,"../../operator/map":38,"../../util/errorObject":43,"../../util/root":49,"../../util/tryCatch":52}],35:[function(require,module,exports){
"use strict";
var AjaxObservable_1 = require('./AjaxObservable');
exports.ajax = AjaxObservable_1.AjaxObservable.create;

},{"./AjaxObservable":34}],36:[function(require,module,exports){
"use strict";
var ErrorObservable_1 = require('./ErrorObservable');
exports._throw = ErrorObservable_1.ErrorObservable.create;

},{"./ErrorObservable":33}],37:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = require('../OuterSubscriber');
var subscribeToResult_1 = require('../util/subscribeToResult');
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return (operator.caught = caught);
}
exports._catch = _catch;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CatchSubscriber = (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        _super.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }
    // NOTE: overriding `error` instead of `_error` because we don't want
    // to have this flag this subscriber as `isStopped`. We can mimic the
    // behavior of the RetrySubscriber (from the `retry` operator), where
    // we unsubscribe from our source chain, reset our Subscriber flags,
    // then subscribe to the selector result.
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber));

},{"../OuterSubscriber":28,"../util/subscribeToResult":50}],38:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = require('../Subscriber');
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    if (typeof project !== 'function') {
        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));

},{"../Subscriber":29}],39:[function(require,module,exports){
"use strict";
var root_1 = require('../util/root');
function symbolIteratorPonyfill(root) {
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
exports.iterator = symbolIteratorPonyfill(root_1.root);
/**
 * @deprecated use iterator instead
 */
exports.$$iterator = exports.iterator;

},{"../util/root":49}],40:[function(require,module,exports){
"use strict";
var root_1 = require('../util/root');
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;

},{"../util/root":49}],41:[function(require,module,exports){
"use strict";
var root_1 = require('../util/root');
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;

},{"../util/root":49}],42:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;

},{}],43:[function(require,module,exports){
"use strict";
// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };

},{}],44:[function(require,module,exports){
"use strict";
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

},{}],45:[function(require,module,exports){
"use strict";
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number'; });

},{}],46:[function(require,module,exports){
"use strict";
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;

},{}],47:[function(require,module,exports){
"use strict";
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;

},{}],48:[function(require,module,exports){
"use strict";
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;

},{}],49:[function(require,module,exports){
(function (global){
"use strict";
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],50:[function(require,module,exports){
"use strict";
var root_1 = require('./root');
var isArrayLike_1 = require('./isArrayLike');
var isPromise_1 = require('./isPromise');
var isObject_1 = require('./isObject');
var Observable_1 = require('../Observable');
var iterator_1 = require('../symbol/iterator');
var InnerSubscriber_1 = require('../InnerSubscriber');
var observable_1 = require('../symbol/observable');
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            return result.subscribe(destination);
        }
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root_1.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator_1.iterator] === 'function') {
        var iterator = result[iterator_1.iterator]();
        do {
            var item = iterator.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable_1.observable] === 'function') {
        var obs = result[observable_1.observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
exports.subscribeToResult = subscribeToResult;

},{"../InnerSubscriber":25,"../Observable":26,"../symbol/iterator":39,"../symbol/observable":40,"./isArrayLike":45,"./isObject":47,"./isPromise":48,"./root":49}],51:[function(require,module,exports){
"use strict";
var Subscriber_1 = require('../Subscriber');
var rxSubscriber_1 = require('../symbol/rxSubscriber');
var Observer_1 = require('../Observer');
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;

},{"../Observer":27,"../Subscriber":29,"../symbol/rxSubscriber":41}],52:[function(require,module,exports){
"use strict";
var errorObject_1 = require('./errorObject');
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;

},{"./errorObject":43}]},{},[1]);
