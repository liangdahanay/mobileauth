////////////////////////////////////////////
;(function (packageFunction) {
  var p = window.AmazonUIPageJS || window.P;
  var attribute = p._namespace || p.attributeErrors;
  var namespacedP = attribute ? attribute("IdentitySSOJsSDK", "") : p;

  if (namespacedP.guardFatal) {
    namespacedP.guardFatal(packageFunction)(namespacedP, window);
  } else {
    namespacedP.execute(function () {
      packageFunction(namespacedP, window);
    });
  }
}(function(P, window, undefined){
// BEGIN ASSET IdentitySSOJsSDK-1.0.x.x
/////////////////////////
// BEGIN FILE buzzcopymachine/@amzn/IdentityJsCommonSDK.js
/////////////////////////
/*


Full path: buzzcopymachine/@amzn/IdentityJsCommonSDK.js

Full source (including license, if applicable) included below.
*/
'use strict';

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof3(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 34);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 1 */
/***/function (module, exports) {

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  module.exports = _classCallCheck;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 2 */
/***/function (module, exports) {

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  module.exports = _createClass;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 3 */
/***/function (module, exports) {

  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  var setPrototypeOf = __webpack_require__(37);

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  module.exports = _inherits;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  var _typeof = __webpack_require__(7)["default"];

  var assertThisInitialized = __webpack_require__(16);

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }

  module.exports = _possibleConstructorReturn;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 6 */
/***/function (module, exports) {

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 7 */
/***/function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _typeof2 = _interopRequireDefault(__webpack_require__(7));

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _ValidateSimpleString = _interopRequireDefault(__webpack_require__(14));

  var _KatalMetricType = _interopRequireDefault(__webpack_require__(15));
  /**
   * Abstract base class for a single metric in Katal.
   *
   * A single metric contains the name (metricKey), value, type, and the isMonitor flag; everything else is in the
   * KatalMetricsContext it is published to.
   */

  var KatalMetricObject = /*#__PURE__*/function () {
    /**
     * Metric types.
     */

    /**
     * Create a new KatalMetricObject with the given name.
     *
     * @param name Name for this metric; published as metricKey field
     */
    function KatalMetricObject(name) {
      (0, _classCallCheck2.default)(this, KatalMetricObject);
      this._name = name;
      this._isMonitor = false;
    }
    /**
     * Get the name for this metric.
     *
     * Note that the name is immutable, and this cannot be set.
     *
     * @returns Name for this metric
     */

    (0, _createClass2.default)(KatalMetricObject, [{
      key: "name",
      get: function get() {
        return this._name;
      }
      /**
       * Alias for name.
       *
       * @returns Name for this metric
       */

    }, {
      key: "metricKey",
      get: function get() {
        return this._name;
      }
      /**
       * Set the isMonitor flag for this metric, and returns this object for continued use.
       *
       * This flag determines if the metric can be used for dashboards and alarms (i.e. if it will be published to PMET)
       * @param isMonitor New value for the isMonitor flag; defaults to true
       * @returns This object
       */

    }, {
      key: "withMonitor",
      value: function withMonitor() {
        var isMonitor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.isMonitor = isMonitor;
        return this;
      }
      /**
       * Set the isMonitor flag for this metric.
       *
       * The value is forced to a boolean based on its truthiness.
       *
       * @param isMonitor New value for the isMonitor flag
       */

    }, {
      key: "isMonitor",
      get:
      /**
       * Get the isMonitor flag for this metric.
       *
       * @returns isMonitor flag for this metric.
       */
      function get() {
        return this._isMonitor;
      }
      /**
       * Check if this metric can be meaningfully monitored.
       *
       * Subclasses must override this.
       *
       * @return Whether this metric can be meaningfully monitored
       */

      , set: function set(isMonitor) {
        this._isMonitor = !!isMonitor;
      }
    }, {
      key: "canMonitor",
      get: function get() {
        throw new Error('Subclass of KatalMetricObject must implement canMonitor');
      }
      /**
       * Get the type of this metric.
       *
       * @return Type of this metric (one of: String, Counter, Timer, List)
       */

    }, {
      key: "type",
      get: function get() {
        throw new Error('Subclass of KatalMetricObject must implement type getter');
      }
      /**
       * Check for a validation error on this object.
       *
       * Returns the first validation error encountered if one is found, otherwise undefined.
       *
       * @returns {Error | undefined} Error found with this object, or undefined if no error is found
       */

    }, {
      key: "validationError",
      value: function validationError() {
        if (this.isMonitor !== undefined && typeof this.isMonitor !== 'boolean') {
          return new Error("Field isMonitor should be a boolean, but it was a ".concat((0, _typeof2.default)(this.isMonitor)));
        }

        return (0, _ValidateSimpleString.default)(this.name, 'field name');
      }
    }]);
    return KatalMetricObject;
  }();

  exports.default = KatalMetricObject;
  (0, _defineProperty2.default)(KatalMetricObject, "Types", _KatalMetricType.default);

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  var superPropBase = __webpack_require__(17);

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      module.exports = _get = Reflect.get;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _get(target, property, receiver || target);
  }

  module.exports = _get;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  var _typeof = __webpack_require__(7);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Context", {
    enumerable: true,
    get: function get() {
      return _KatalMetricsContext.default;
    }
  });
  Object.defineProperty(exports, "ErrorHandler", {
    enumerable: true,
    get: function get() {
      return _ErrorHandler.ErrorHandler;
    }
  });
  exports.Metric = void 0;
  Object.defineProperty(exports, "MetricsDriver", {
    enumerable: true,
    get: function get() {
      return _KatalMetricsDriver.default;
    }
  });
  Object.defineProperty(exports, "Publisher", {
    enumerable: true,
    get: function get() {
      return _KatalMetricsPublisher.default;
    }
  });

  var Metric = _interopRequireWildcard(__webpack_require__(36));

  exports.Metric = Metric;

  var _KatalMetricsPublisher = _interopRequireDefault(__webpack_require__(43));

  var _KatalMetricsContext = _interopRequireDefault(__webpack_require__(24));

  var _KatalMetricsDriver = _interopRequireDefault(__webpack_require__(28));

  var _ErrorHandler = __webpack_require__(53);

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _typeof2 = _interopRequireDefault(__webpack_require__(7));

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(16));

  var _get2 = _interopRequireDefault(__webpack_require__(9));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(8));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * String type.
   *
   * Can be used to store arbitrary strings of data.
   */

  var KatalMetricString = /*#__PURE__*/function (_KatalMetricObject) {
    (0, _inherits2.default)(KatalMetricString, _KatalMetricObject);

    var _super = _createSuper(KatalMetricString);
    /**
     * Create a string with the given name and value.
     *
     * @param name String name
     * @param value String value
     */

    function KatalMetricString(name, value) {
      var _this;

      (0, _classCallCheck2.default)(this, KatalMetricString);
      _this = _super.call(this, name);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "truncate", false);
      _this.value = value;
      return _this;
    }
    /**
     * Get the value for this string metric.
     *
     * @return Value for this metric
     */

    (0, _createClass2.default)(KatalMetricString, [{
      key: "value",
      get: function get() {
        return this._value;
      }
      /**
       * Set the value for this string metric.
       *
       * The new value should be a string, but number and boolean types will be automatically converted to strings.
       * For other types, including undefined and null, the value will be accepted, but will fail validation when publishing.
       *
       * @param value New value for this metric
       */

      , set: function set(value) {
        if (typeof value === "number" || typeof value === "boolean") {
          value = value.toString();
        }

        this._value = value;
      }
      /**
       * Truncation flag for this string metric.
       *
       * If set, the value here will be automatically truncated to the maximum size allowed by the current schema.
       * Otherwise, sending a value larger than allowed will result in a failure.
       *
       * @param value True to automatically truncate metrics, otherwise false
       */

    }, {
      key: "type",
      get:
      /**
       * Gets the type for this metric.
       *
       * @return Always returns "String".
       */
      function get() {
        return _KatalMetricObject2.default.Types.String;
      }
    }, {
      key: "canMonitor",
      get: function get() {
        return false;
      }
    }, {
      key: "validationError",
      value: function validationError() {
        var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricString.prototype), "validationError", this).call(this);
        if (superError) return superError;

        if (typeof this.value !== 'string') {
          return new Error("Expected field value in String metrics object '".concat(this.name, "' to be type string, but it was ").concat((0, _typeof2.default)(this.value)));
        }

        if (this.value.length > KatalMetricString.MAX_SIZE) {
          if (this.truncate) {
            this.value = this.value.substring(0, KatalMetricString.MAX_SIZE);
          } else {
            return new Error("Expected field value in String metrics object '".concat(this.name, "' to be ").concat(KatalMetricString.MAX_SIZE, " characters or less, but it was ").concat(this.value.length, " characters."));
          }
        } // Didn't find anything wrong, implicitly return undefined
      }
    }]);
    return KatalMetricString;
  }(_KatalMetricObject2.default);

  exports.default = KatalMetricString;
  (0, _defineProperty2.default)(KatalMetricString, "MAX_SIZE", 256);

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _KatalMetricNamedObjectList = _interopRequireDefault(__webpack_require__(38));

  var _KatalMetricTimerStopwatch = _interopRequireDefault(__webpack_require__(21));

  var _KatalMetricCounter = _interopRequireDefault(__webpack_require__(18));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Metric that pairs a timer and a failure counter to record the time and status of an attempt to do something.
   */

  var KatalMetricTimedAttempt = /*#__PURE__*/function (_KatalMetricNamedObje) {
    (0, _inherits2.default)(KatalMetricTimedAttempt, _KatalMetricNamedObje);

    var _super = _createSuper(KatalMetricTimedAttempt);
    /** The sub-metric name for latency. */

    /** The sub-metric name for failure count. */

    /**
     * Create a new timed attempt with the given name
     *
     * This will create two inner metrics, a KatalMetricCounter that has the given name with ".Failure" appended,
     * and a KatalMetricTimerStopwatch that has the given name with ".Latency" appended.
     *
     * @param name Name of this attempt
     */

    function KatalMetricTimedAttempt(name) {
      var _this;

      (0, _classCallCheck2.default)(this, KatalMetricTimedAttempt);
      _this = _super.call(this, name);

      _this.setNamedMetric(KatalMetricTimedAttempt.LATENCY_SUFFIX, function (name) {
        return new _KatalMetricTimerStopwatch.default(name);
      });

      _this.setNamedMetric(KatalMetricTimedAttempt.FAILURE_SUFFIX, function (name) {
        return new _KatalMetricCounter.default(name, 1);
      });

      return _this;
    }
    /**
     * Set the failure counter metric based on the given failure status.
     *
     * If failure is true the counter will have a value of 1; if it is false the counter will have a value of 0.
     *
     * @param failure Whether this is a failure or not; default true
     */

    (0, _createClass2.default)(KatalMetricTimedAttempt, [{
      key: "setFailure",
      value: function setFailure() {
        var failure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var failureCount = failure ? 1 : 0;
        var metric = this.failureMetric;
        metric.value = failureCount;
      }
      /**
       * Set the failure status to false.
       */

    }, {
      key: "setSuccess",
      value: function setSuccess() {
        this.setFailure(false);
      }
      /**
       * Set the latency metric to the given value, in milliseconds.
       *
       * Note you don't normally have to set this, the underlying metric is a KatalMetricTimerStopwatch that will start
       * and stop automatically.
       *
       * @param latencyMs Latency in milliseconds
       */

    }, {
      key: "setLatency",
      value: function setLatency(latencyMs) {
        var metric = this.latencyMetric;
        metric.value = latencyMs;
      }
      /**
       * Get the timer stopwatch metric for this attempt.
       *
       * @return Timer stopwatch metric for this attempt
       */

    }, {
      key: "latencyMetric",
      get: function get() {
        return this.getNamedMetric(KatalMetricTimedAttempt.LATENCY_SUFFIX);
      }
      /**
       * Get the failure counter metric for this attempt.
       *
       * @return Failure counter metric for this event
       */

    }, {
      key: "failureMetric",
      get: function get() {
        return this.getNamedMetric(KatalMetricTimedAttempt.FAILURE_SUFFIX);
      }
    }]);
    return KatalMetricTimedAttempt;
  }(_KatalMetricNamedObjectList.default);

  exports.default = KatalMetricTimedAttempt;
  (0, _defineProperty2.default)(KatalMetricTimedAttempt, "LATENCY_SUFFIX", 'Latency');
  (0, _defineProperty2.default)(KatalMetricTimedAttempt, "FAILURE_SUFFIX", 'Failure');

  /***/
},
/* 13 */
/***/function (module, exports) {

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validateSimpleString;

  var _typeof2 = _interopRequireDefault(__webpack_require__(7));

  var SIMPLE_STRING_PAT = /^[A-Za-z0-9.:@_/-]+$/;
  var SIMPLE_STRING_MAX_LEN = 127;
  /**
   * Check if the given value is valid to be published to KatalMetrics as a field value,
   * such as site, serviceName, methodName, or actionId (note this is not used to check values for string metrics).
   * It returns either undefined (no error), or an Error object describing the problem.
   *
   * To be published, it must be a non-empty string, less than 256 characters, containing only ASCII
   * letters, numbers, or these characters: .:@_/- (those are the PMET field value requirements).
   *
   * @param val String value to check
   * @param nameForError Name to use in the error message, if one is generated
   * @returns Error, or undefined if no error
   */

  function validateSimpleString(val, nameForError) {
    if (typeof val !== "string") {
      return new Error("Expected ".concat(nameForError, " to be a string, but it was a ").concat((0, _typeof2.default)(val)));
    }

    if (val.length > SIMPLE_STRING_MAX_LEN) {
      return new Error("Expected ".concat(nameForError, " to be less than ").concat(SIMPLE_STRING_MAX_LEN, " characters, but it was ").concat(val.length, " characters"));
    }

    if (val.length < 1) {
      return new Error("Expected ".concat(nameForError, " to be non-blank"));
    }

    if (!SIMPLE_STRING_PAT.test(val)) {
      return new Error("Expected ".concat(nameForError, " to contain only valid characters, but it was ").concat(val, ".  It can only contain letters, numbers, and these symbols: .:@_/-"));
    } // Couldn't find anything wrong, implicitly return undefined
  }

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  /**
   * Metric types.
   */

  var KatalMetricType;

  (function (KatalMetricType) {
    KatalMetricType["String"] = "String";
    KatalMetricType["Counter"] = "Counter";
    KatalMetricType["Timer"] = "Timer";
    KatalMetricType["List"] = "List";
  })(KatalMetricType || (KatalMetricType = {}));

  ;
  var _default = KatalMetricType;
  exports.default = _default;

  /***/
},
/* 16 */
/***/function (module, exports) {

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  module.exports = _assertThisInitialized;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  var getPrototypeOf = __webpack_require__(3);

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  module.exports = _superPropBase;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _get2 = _interopRequireDefault(__webpack_require__(9));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(8));

  var _ValidateSimpleInt = _interopRequireDefault(__webpack_require__(19));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Counter type.
   *
   * Can be used to count the number of times an event happened on a page, or as a simple 1/0 counter to track
   * success and failure.
   */

  var KatalMetricCounter = /*#__PURE__*/function (_KatalMetricObject) {
    (0, _inherits2.default)(KatalMetricCounter, _KatalMetricObject);

    var _super = _createSuper(KatalMetricCounter);
    /**
     * Create a new counter with the given name and value.
     *
     * @param name Counter name
     * @param value Counter value
     */

    function KatalMetricCounter(name) {
      var _this;

      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      (0, _classCallCheck2.default)(this, KatalMetricCounter);
      _this = _super.call(this, name);
      _this.value = value;
      return _this;
    }
    /**
     * Get the value for this counter
     *
     * @return Counter value
     */

    (0, _createClass2.default)(KatalMetricCounter, [{
      key: "value",
      get: function get() {
        return this._value;
      }
      /**
       * Set a new value for this counter
       *
       * @param value New value for this counter
       */

      , set: function set(value) {
        // Math.round will also coerce from a string if necessary, and return NaN if invalid
        this._value = Math.round(value);
      }
      /**
       * Gets the type for this counter.
       *
       * @return Always returns "Counter".
       */

    }, {
      key: "type",
      get: function get() {
        return _KatalMetricObject2.default.Types.Counter;
      }
      /**
       * Add a number to this counter.
       *
       * Can also be negative to subtract.
       *
       * @param addValue Amount to add to this counter
       */

    }, {
      key: "add",
      value: function add(addValue) {
        this.value += addValue;
      }
    }, {
      key: "canMonitor",
      get: function get() {
        return true;
      }
    }, {
      key: "validationError",
      value: function validationError() {
        var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricCounter.prototype), "validationError", this).call(this);
        if (superError) return superError;
        return (0, _ValidateSimpleInt.default)(this.value, "field value in Counter metrics object '".concat(this.name, "'"));
      }
    }]);
    return KatalMetricCounter;
  }(_KatalMetricObject2.default);

  exports.default = KatalMetricCounter;

  /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validateSimpleInt;

  var _typeof2 = _interopRequireDefault(__webpack_require__(7));
  /**
   * Number.isInteger is not in IE11, and letting Babel polyfill it added too much weight.
   * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   */

  var isInteger = function isInteger(val) {
    return isFinite(val) && Math.floor(val) === val;
  };
  /**
   * Check if the given value is valid to be published to KatalMetrics as an integer (Counter or Timer),
   * and return either undefined (no error), or an Error object describing the problem.
   *
   * @param val Value to check
   * @param nameForError Name to use when constructing the error message, if necessary
   * @returns Error, or undefined if no error
   */

  function validateSimpleInt(val, nameForError) {
    if (typeof val !== 'number') {
      return new Error("Expected ".concat(nameForError, " to have type 'number', but it was type '").concat((0, _typeof2.default)(val), "'"));
    }

    if (val < 0) {
      return new Error("Expected ".concat(nameForError, " to be positive, but it was ").concat(val));
    } // This will also catch NaN and Infinity


    if (!isInteger(val)) {
      return new Error("Expected ".concat(nameForError, " to be an integer, but it was ").concat(val));
    } // Couldn't find anything wrong, implicitly return undefined
  }

  ;

  /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _get2 = _interopRequireDefault(__webpack_require__(9));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(8));

  var _ValidateSimpleInt = _interopRequireDefault(__webpack_require__(19));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Timer type.
   *
   * Can be used to record a time.  This class requires explicit value; see KatalMetricTimerStopwatch for automatic
   * timing.
   */

  var KatalMetricTimer = /*#__PURE__*/function (_KatalMetricObject) {
    (0, _inherits2.default)(KatalMetricTimer, _KatalMetricObject);

    var _super = _createSuper(KatalMetricTimer);
    /**
     * Create a new timer metric.
     *
     * @param name Name for the metric
     * @param value Timer value in milliseconds
     */

    function KatalMetricTimer(name, value) {
      var _this;

      (0, _classCallCheck2.default)(this, KatalMetricTimer);
      _this = _super.call(this, name);
      _this.value = value;
      return _this;
    }
    /**
     * Get the value for this timer
     *
     * @return Timer value in milliseconds
     */

    (0, _createClass2.default)(KatalMetricTimer, [{
      key: "value",
      get: function get() {
        return this._value;
      }
      /**
       * Set the value for this timer
       *
       * @param value New timer value in milliseconds
       */

      , set: function set(value) {
        if (value == undefined) {
          this._value = value;
          return;
        } // Math.round will also coerce from a string if necessary, and return NaN if invalid


        this._value = Math.round(value);
      }
      /**
       * Get the type for this timer.
       *
       * @return Always returns "Timer".
       */

    }, {
      key: "type",
      get: function get() {
        return _KatalMetricObject2.default.Types.Timer;
      }
    }, {
      key: "canMonitor",
      get: function get() {
        return true;
      }
    }, {
      key: "validationError",
      value: function validationError() {
        var superError = (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimer.prototype), "validationError", this).call(this);
        if (superError) return superError;
        return (0, _ValidateSimpleInt.default)(this.value, "field value in Timer metrics object '".concat(this.name, "'"));
      }
    }]);
    return KatalMetricTimer;
  }(_KatalMetricObject2.default);

  exports.default = KatalMetricTimer;

  /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _set2 = _interopRequireDefault(__webpack_require__(22));

  var _get2 = _interopRequireDefault(__webpack_require__(9));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _KatalMetricTimer2 = _interopRequireDefault(__webpack_require__(20));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Subclass of KatalMetricTimer that can be started and stopped, and will record the elapsed time between starting and
   * stopping.  By default it will start when the object is created, and stopped when the value is retrieved with
   * the getter "value".
   */

  var KatalMetricTimerStopwatch = /*#__PURE__*/function (_KatalMetricTimer) {
    (0, _inherits2.default)(KatalMetricTimerStopwatch, _KatalMetricTimer);

    var _super = _createSuper(KatalMetricTimerStopwatch);
    /**
     * Create a new timer with the given name and starting time.  If no starting time is given, the current time is used.
     *
     * @param name Name for this timer
     * @param startTime Millisecond epoch time for the start time; defaults to now
     */

    function KatalMetricTimerStopwatch(name, startTime) {
      var _this;

      (0, _classCallCheck2.default)(this, KatalMetricTimerStopwatch);
      _this = _super.call(this, name, undefined);

      _this.start(startTime);

      _this._value = undefined;
      return _this;
    }
    /**
     * Re-start timer with the given start time, or the current time if none is given.
     *
     * @param startTime When the timer was started, in epoch milliseconds; defaults to now
     */

    (0, _createClass2.default)(KatalMetricTimerStopwatch, [{
      key: "start",
      value: function start(startTime) {
        this._startTime = startTime || this.now();
      }
      /**
       * Stop the timer and record the elapsed time.
       *
       * @param stopTime When the timer was stopped, in epoch milliseconds; defaults to now
       */

    }, {
      key: "stop",
      value: function stop(stopTime) {
        return this._stopTime = stopTime || this.now();
      }
      /**
       * Check if the timer has been stopped.
       *
       * @returns Whether the timer has been stopped yet
       */

    }, {
      key: "isStopped",
      get: function get() {
        return this._stopTime !== undefined;
      }
      /**
       * Get the elapsed time between when the timer was started and stopped; if the timer has not yet been stopped,
       * stop it first.
       *
       * @returns Elapsed time between when timer was started and stopped
       */

    }, {
      key: "value",
      get: function get() {
        if ((0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this) === undefined) {
          if (!this.isStopped) {
            this.stop();
          } // Rely on super.value setter to round


          (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this.stopTime - this.startTime, this, true);
        }

        return (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", this);
      }
      /**
       * Get when this timer was started.
       *
       * @return Start time, in epoch milliseconds
       */

      , set:
      /**
       * Set the value for this metric.  Note this will override the stopwatch behavior and just use the given value.
       *
       * @param value Value for this metric
       */
      function set(value) {
        (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricTimerStopwatch.prototype), "value", value, this, true);
      }
    }, {
      key: "startTime",
      get: function get() {
        return this._startTime;
      }
      /**
       * Get when this timer was stopped (or undefined if it is still running)
       *
       * @return Stop time, in epoch millseconds, or undefined if the stopwatch is still running
       */

    }, {
      key: "stopTime",
      get: function get() {
        return this._stopTime;
      }
    }, {
      key: "now",
      value: function now() {
        return performance.now();
      }
    }]);
    return KatalMetricTimerStopwatch;
  }(_KatalMetricTimer2.default);

  exports.default = KatalMetricTimerStopwatch;

  /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

  var superPropBase = __webpack_require__(17);

  var defineProperty = __webpack_require__(6);

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  module.exports = _set;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = firstMap;
  /**
   * Returns the first non-undefined value that results from running each value
   * in the given array through the mapper function.
   * @param array An array of values.
   * @param mapper A mapper function that should return a value or undefined.
   * @returns The first non-undefined value from the mapper function.
   */

  function firstMap(array, mapper) {
    var toReturn = undefined;
    array.some(function (val) {
      toReturn = mapper(val);
      return toReturn != null;
    });
    return toReturn;
  }

  ;

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _ValidateSimpleString = _interopRequireDefault(__webpack_require__(14));

  var _FirstMap = _interopRequireDefault(__webpack_require__(23));

  var _mergeLists = __webpack_require__(25);

  var _embedRequestId = __webpack_require__(27);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          (0, _defineProperty2.default)(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var REQUIRED_FIELDS = ['site', 'serviceName', 'methodName'];

  var KatalMetricsContext = /*#__PURE__*/function () {
    /**
     * Create a new metrics context with the given fields.
     *
     * @param contextFields Context fields value (default empty)
     */
    function KatalMetricsContext() {
      var contextFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck2.default)(this, KatalMetricsContext); // Copy fields so this is immutable

      this.context = _objectSpread({}, contextFields);
    }
    /**
     * Return a new KatalMetricsContext which is a copy of this context, with values added or overridden from
     * the given context.
     *
     * If the given context is null or empty, this method may return the original object as an optimization.
     *
     * @param thatContext Context to merge values from
     * @return New context with default values from this context, and values overridden or added by the given context.
     */

    (0, _createClass2.default)(KatalMetricsContext, [{
      key: "merge",
      value: function merge(thatContext) {
        if (!thatContext) return this; // Check for a common error

        if (thatContext instanceof KatalMetricsContext.Builder) {
          throw new Error("KatalMetricsContext.Builder object passed instead of KatalMetricsContext.  Try calling .build() method.");
        }

        var context = thatContext instanceof KatalMetricsContext ? thatContext.context : thatContext;

        var newContext = _objectSpread(_objectSpread(_objectSpread({}, this.context), context), {}, {
          relatedMetrics: (0, _mergeLists.mergeLists)(this.context.relatedMetrics, context.relatedMetrics),
          relatedMetricsSingleAction: (0, _mergeLists.mergeLists)(this.context.relatedMetricsSingleAction, context.relatedMetricsSingleAction)
        });

        return new KatalMetricsContext(newContext);
      }
      /**
       * Return a new context which is a copy of this context with relatedMetricsSingleAction removed.
       *
       * This is intended to be called when creating a new child publisher.
       *
       * @return Copy of this context, with relatedMetricsSingleAction removed
       */

    }, {
      key: "withoutRelatedMetricsSingleAction",
      value: function withoutRelatedMetricsSingleAction() {
        return new KatalMetricsContext(_objectSpread(_objectSpread({}, this.context), {}, {
          relatedMetricsSingleAction: undefined
        }));
      }
      /**
       * Get a context suitable for publication to the driver.
       *
       * This method strips out any private fields, and leaves only fields from the schema that the driver should publish.
       *
       * @return Context suitable for driver publication
       */

    }, {
      key: "driverContext",
      value: function driverContext() {
        // Don't publish relatedMetrics to the driver
        var newContextFields = _objectSpread({}, this.context);

        delete newContextFields["relatedMetrics"];
        delete newContextFields["relatedMetricsSingleAction"];
        delete newContextFields["requestId"];

        if (this.context.requestId) {
          newContextFields.actionId = (0, _embedRequestId.embedRequestId)(newContextFields.actionId, this.context.requestId);
        }

        return new KatalMetricsContext(newContextFields);
      }
      /**
       * Get a simple JavaScript object with a copy of the fields for this context.
       *
       * @return Simple Javascript object with a copy of the fields for this context
       */

    }, {
      key: "getFields",
      value: function getFields() {
        // Copy fields so this remains immutable
        return _objectSpread({}, this.context);
      }
      /**
       * Check for a validation error on this context.
       *
       * Returns the first validation error encountered if one is found, otherwise undefined.
       *
       * @returns Errors found with this context
       */

    }, {
      key: "validationError",
      value: function validationError() {
        var _this = this;

        var err; // Fields “site”, “serviceName”, “methodName”, and “metricKey” are required.

        err = (0, _FirstMap.default)(REQUIRED_FIELDS, function (field) {
          if (_this.context[field] == undefined) {
            return new Error("Field ".concat(field, " is required, but it is ").concat(_this.context[field]));
          }
        });
        if (err) return err;
        return (0, _FirstMap.default)(Object.keys(this.context), function (field) {
          return _this.validateField(field);
        });
      }
      /**
       * Validate an individual context field.
       *
       * @param field Name of field to validate
       * @returns Error found with this field, or undefined
       */

    }, {
      key: "validateField",
      value: function validateField(field) {
        var val = this.context[field];
        var nameForError = "field ".concat(field);

        switch (field) {
          // Strings which could be used as partition keys ("site" and "serviceName") cannot contain slashes, in
          // addition to the other restictions below.
          case 'site':
          case 'serviceName':
            if (val.indexOf('/') > -1) return new Error("Expected ".concat(nameForError, " to contain only valid characters, but it was ").concat(val, ".  It cannot contain a slash."));
          // Else fall through
          // Strings for fields “site”, “serviceName”, “methodName”, “metricKey” must match be valid PMET field names:
          // maximum length of 256, only letters, numbers, and the dot, colon, at-sign, underscore, forward-slash,
          // and slash characters (in short the regex ^[A-Za-z0-9.:@_/-]+$).

          case 'methodName':
          case 'actionId':
            return (0, _ValidateSimpleString.default)(val, nameForError);
        } // No error found, implicitly return undefined
      }
      /**
       * Builder class for KatalMetricsContext
       */

    }]);
    return KatalMetricsContext;
  }();

  exports.default = KatalMetricsContext;
  (0, _defineProperty2.default)(KatalMetricsContext, "Builder", /*#__PURE__*/function () {
    function _class2() {
      (0, _classCallCheck2.default)(this, _class2);
      (0, _defineProperty2.default)(this, "context", {});
    }

    (0, _createClass2.default)(_class2, [{
      key: "withSite",
      value: function withSite(site) {
        this.context.site = site;
        return this;
      }
    }, {
      key: "withServiceName",
      value: function withServiceName(serviceName) {
        this.context.serviceName = serviceName;
        return this;
      }
    }, {
      key: "withMethodName",
      value: function withMethodName(methodName) {
        this.context.methodName = methodName;
        return this;
      }
    }, {
      key: "withActionId",
      value: function withActionId(actionId) {
        this.context.actionId = actionId;
        return this;
      }
    }, {
      key: "withRequestId",
      value: function withRequestId(requestId) {
        this.context.requestId = requestId;
        return this;
      }
      /**
       * Replace any related metrics with the given list (see addRelatedMetrics to add instead of replace).
       *
       * Related metrics are metrics that are published whenever a new action is started.  They are used to relate the
       * action back to the context where it is happening, for example a request ID or a user identity.
       *
       * @param relatedMetrics Related metrics to publish when a new action is started for this context
       * @returns This builder object to continue building
       */

    }, {
      key: "withRelatedMetrics",
      value: function withRelatedMetrics() {
        for (var _len = arguments.length, relatedMetrics = new Array(_len), _key = 0; _key < _len; _key++) {
          relatedMetrics[_key] = arguments[_key];
        }

        this.context.relatedMetrics = relatedMetrics;
        return this;
      }
      /**
       * Add additional related metrics to this builder.  See withRelatedMetrics for more information.
       *
       * @param relatedMetrics Additional related metrics to publish when a new action is started for this context
       * @returns This builder object to continue building
       */

    }, {
      key: "addRelatedMetrics",
      value: function addRelatedMetrics() {
        for (var _len2 = arguments.length, relatedMetrics = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          relatedMetrics[_key2] = arguments[_key2];
        }

        this.context.relatedMetrics = (0, _mergeLists.mergeLists)(this.context.relatedMetrics, relatedMetrics);
        return this;
      }
      /**
       * Replace single-action related metrics with the given list (see addRelatedMetricsSingleAction to add instead of replace,
       * and withRelatedMetrics for more information about related metrics).
       *
       * Single-action related metrics are published when a new child metric publisher is created, but not included as
       * related metrics for the new child metric publisher, so are not published again if the child metric publisher
       * creates grandchild published metrics.
       *
       * @param metrics Related metrics
       * @returns This builder object to continue building
       */

    }, {
      key: "withRelatedMetricsSingleAction",
      value: function withRelatedMetricsSingleAction() {
        for (var _len3 = arguments.length, metrics = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          metrics[_key3] = arguments[_key3];
        }

        this.context.relatedMetricsSingleAction = metrics;
        return this;
      }
      /**
       * Add additional single-action related metrics to this builder.  See addRelatedMetricsSingleAction for more information.
       *
       * @param metrics Related metrics
       * @returns This builder object to continue building
       */

    }, {
      key: "addRelatedMetricsSingleAction",
      value: function addRelatedMetricsSingleAction() {
        for (var _len4 = arguments.length, metrics = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          metrics[_key4] = arguments[_key4];
        }

        this.context.relatedMetricsSingleAction = (0, _mergeLists.mergeLists)(this.context.relatedMetricsSingleAction, metrics);
        return this;
      }
      /**
       * Take the fields set in this builder and use them to create a new KatalMetricsContext.
       *
       * @return KatalMetricsContext object built with the parameters given to this builder
       */

    }, {
      key: "build",
      value: function build() {
        return new KatalMetricsContext(this.context);
      }
    }]);
    return _class2;
  }());

  /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mergeLists = mergeLists;

  var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(47)); // Helper method to merge two lists which could be undefined
  // Returns merged lists if either is defined, otherwise returns undefined


  function mergeLists(list1, list2) {
    if (list1 || list2) {
      return [].concat((0, _toConsumableArray2.default)(list1 || []), (0, _toConsumableArray2.default)(list2 || []));
    } else {
      return undefined;
    }
  }

  ;

  /***/
},
/* 26 */
/***/function (module, exports) {

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.embedRequestId = embedRequestId; // until we can add a requestId field to the andes schema we will embed it in the actionId

  function embedRequestId(actionId, requestId) {
    if (requestId) {
      return [requestId, actionId].join("::");
    }

    return actionId;
  }

  /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));
  /**
   * Abstract base class for a Katal metrics driver.
   */

  var KatalMetricsDriver = /*#__PURE__*/function () {
    function KatalMetricsDriver() {
      (0, _classCallCheck2.default)(this, KatalMetricsDriver);
    }

    (0, _createClass2.default)(KatalMetricsDriver, [{
      key: "publish",
      value:
      /**
       * Publish the given metric object with the given error handler and context.
       *
       * @param metricObject Metric object to publish.  Contains metricKey, isMonitor, type, and value.
       * @param context Context for publishing this metric.  Contains all other fields to be published.
       */
      function publish(metricObject, context) {
        throw new Error('KatalMetricsDriver is an abstract class, please choose a driver and use that instead');
      }
    }]);
    return KatalMetricsDriver;
  }();

  exports.default = KatalMetricsDriver;

  /***/
},
/* 29 */
/***/function (module, exports) {

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 30 */
/***/function (module, exports) {

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 31 */
/***/function (module, exports) {

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 32 */
/***/function (module, exports) {

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  __webpack_require__(54);

  var _KatalMetricsDriverSushi = __webpack_require__(55);
  /* istanbul ignore file */

  var _default = _KatalMetricsDriverSushi.KatalMetricsDriverSushi;
  exports.default = _default;

  /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__(35);

  /***/
},
/* 35 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */var _amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
  /* harmony import */var _amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */var _amzn_katal_metrics_driver_sushi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
  /* harmony import */var _amzn_katal_metrics_driver_sushi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amzn_katal_metrics_driver_sushi__WEBPACK_IMPORTED_MODULE_1__);

  window.P && window.P.register('IdentityKatalMetrics', function () {
    var metricsErrorHandler = function metricsErrorHandler(err) {
      console.error('SB SB err');
      console.error(err);
    };

    var initialMetricsContext = new _amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0__["Context"].Builder().withSite("Identity").withServiceName("MAPJSSDK").build();
    var makeMetricsDriver = new _amzn_katal_metrics_driver_sushi__WEBPACK_IMPORTED_MODULE_1___default.a.Builder().withDomainRealm("prod", "USAmazon").withErrorHandler(metricsErrorHandler).build();
    var makePublisher = new _amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0__["Publisher"](makeMetricsDriver, metricsErrorHandler, initialMetricsContext);
    var publisher = makePublisher.newChildActionPublisherForMethod('action');

    function publish() {
      publisher.publishCounterMonitor("littledharma", 1);
    }

    return {
      publish: publish
    };
  });

  /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Counter", {
    enumerable: true,
    get: function get() {
      return _KatalMetricCounter.default;
    }
  });
  Object.defineProperty(exports, "HttpRequest", {
    enumerable: true,
    get: function get() {
      return _KatalMetricHttpRequest.default;
    }
  });
  Object.defineProperty(exports, "Initialization", {
    enumerable: true,
    get: function get() {
      return _KatalMetricInitialization.default;
    }
  });
  Object.defineProperty(exports, "Object", {
    enumerable: true,
    get: function get() {
      return _KatalMetricObject.default;
    }
  });
  Object.defineProperty(exports, "String", {
    enumerable: true,
    get: function get() {
      return _KatalMetricString.default;
    }
  });
  Object.defineProperty(exports, "TimedAttempt", {
    enumerable: true,
    get: function get() {
      return _KatalMetricTimedAttempt.default;
    }
  });
  Object.defineProperty(exports, "Timer", {
    enumerable: true,
    get: function get() {
      return _KatalMetricTimer.default;
    }
  });
  Object.defineProperty(exports, "TimerStopwatch", {
    enumerable: true,
    get: function get() {
      return _KatalMetricTimerStopwatch.default;
    }
  });

  var _KatalMetricObject = _interopRequireDefault(__webpack_require__(8));

  var _KatalMetricString = _interopRequireDefault(__webpack_require__(11));

  var _KatalMetricCounter = _interopRequireDefault(__webpack_require__(18));

  var _KatalMetricTimer = _interopRequireDefault(__webpack_require__(20));

  var _KatalMetricTimerStopwatch = _interopRequireDefault(__webpack_require__(21));

  var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(12));

  var _KatalMetricInitialization = _interopRequireDefault(__webpack_require__(41));

  var _KatalMetricHttpRequest = _interopRequireDefault(__webpack_require__(42));

  /***/
},
/* 37 */
/***/function (module, exports) {

  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _KatalMetricObjectList = _interopRequireDefault(__webpack_require__(39));

  var _ObjectValuesPonyfill = _interopRequireDefault(__webpack_require__(40));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Metric object list that tracks metrics by name, and generates metrics prefixed with the name of this object.
   */

  var KatalMetricNamedObjectList = /*#__PURE__*/function (_KatalMetricObjectLis) {
    (0, _inherits2.default)(KatalMetricNamedObjectList, _KatalMetricObjectLis);

    var _super = _createSuper(KatalMetricNamedObjectList);
    /**
     * Create a new named object list.
     *
     * The name given here will be used to prefix all metrics.
     *
     * @param name Name of this metric
     */

    function KatalMetricNamedObjectList(name) {
      var _this;

      (0, _classCallCheck2.default)(this, KatalMetricNamedObjectList);
      _this = _super.call(this, name);
      _this.namedMetrics = {};
      return _this;
    }

    (0, _createClass2.default)(KatalMetricNamedObjectList, [{
      key: "metricList",
      get: function get() {
        return (0, _ObjectValuesPonyfill.default)(this.namedMetrics);
      }
      /**
       * Replace the metric with the given name with a new metric generated by the given function.
       *
       * If the newly created metric supports monitoring, its isMonitor flag will be set to the value of the
       * isMonitor flag for this containing object.
       *
       * @param subName Name of this sub-metric
       * @param metricCreator Function which takes the full name for this metric
       *        and returns a newly constructed KatalMetricObject with this name and an appropriate value
       */

    }, {
      key: "setNamedMetric",
      value: function setNamedMetric(subName, metricCreator) {
        var fullName = this.getNameForSubMetric(subName);
        var metric = metricCreator(fullName);

        if (metric.canMonitor) {
          metric.isMonitor = this.isMonitor;
        }

        this.namedMetrics[subName] = metric;
      }
      /**
       * If the given value is undefined or null, delete the metric with the give name; otherwise if the given named
       * metric already exists update its value; otherwise create a new metric of the given type and set its value.
       *
       * This specialized helper method is designed to deal with the common case of a value setter in a more complex
       * metric.  Outside of subclasses, other methods will probably prove more useful.
       *
       * If the value is null the metric will also be deleted.
       *
       * @param subName Name of metric to create or delete
       * @param newValueClass Class of new metric to create
       * @param newValue New value for this metric (or undefined to delete the metric)
       */

    }, {
      key: "setOrDeleteNamedMetricValue",
      value: function setOrDeleteNamedMetricValue(subName, newValueClass, newValue) {
        if (newValue == undefined) {
          this.deleteNamedMetric(subName);
        } else {
          var metric = this.getOrCreateNamedMetric(subName, function (name) {
            return new newValueClass(name, newValue);
          });
          metric.value = newValue;
        }
      }
      /**
       * Get the sub-metric with the given name if it exists, otherwise use the given function to create a new metric and
       * store and return that.
       *
       * @param subName Name of this sub-metric
       * @param metricCreator Function which takes the full name for this metric
       *        and returns a newly constructed KatalMetricObject with this name and an appropriate value
       * @return Metric object which was retrieved or created
       */

    }, {
      key: "getOrCreateNamedMetric",
      value: function getOrCreateNamedMetric(subName, metricCreator) {
        if (!this.namedMetrics[subName]) {
          this.setNamedMetric(subName, metricCreator);
        }

        return this.namedMetrics[subName];
      }
      /**
       * Return the given named sub-metric, if it exists.
       *
       * @param {string} subName Name of this sub-metric
       * @return {KatalMetricObject | undefined} Metric object with this name if it exists, otherwise undefined
       */

    }, {
      key: "getNamedMetric",
      value: function getNamedMetric(subName) {
        return this.namedMetrics[subName];
      }
      /**
       * Delete the given named sub-metric.
       *
       * @param subName Name of this sub-metric
       */

    }, {
      key: "deleteNamedMetric",
      value: function deleteNamedMetric(subName) {
        delete this.namedMetrics[subName];
      }
      /**
       * Get the value for the given metric, or undefined if the metric does not exist.
       *
       * @param subName Name of this sub-metric
       * @return Value for the given metric, or undefined if the metric does not exist
       */

    }, {
      key: "getNamedMetricValue",
      value: function getNamedMetricValue(subName) {
        var metric = this.getNamedMetric(subName);
        if (!metric) return undefined;
        return metric.value;
      }
      /**
       * Generate a name for the given sub-metric.
       *
       * @param subName Name of this sub-metric
       * @return Full name for this sub-metric
       */

    }, {
      key: "getNameForSubMetric",
      value: function getNameForSubMetric(subName) {
        return "".concat(this.name, ".").concat(subName);
      }
    }]);
    return KatalMetricNamedObjectList;
  }(_KatalMetricObjectList.default);

  exports.default = KatalMetricNamedObjectList;

  /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _get2 = _interopRequireDefault(__webpack_require__(9));

  var _set2 = _interopRequireDefault(__webpack_require__(22));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _KatalMetricObject2 = _interopRequireDefault(__webpack_require__(8));

  var _FirstMap = _interopRequireDefault(__webpack_require__(23));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Abstract metric that contains a list of other metrics; when it is published, the list of metrics is retrieved, and all
   * are published.
   */

  var KatalMetricObjectList = /*#__PURE__*/function (_KatalMetricObject) {
    (0, _inherits2.default)(KatalMetricObjectList, _KatalMetricObject);

    var _super = _createSuper(KatalMetricObjectList);
    /**
     * Create a new KatalMetricObjectList.
     *
     * @param name Name for this metric.  Not really used, but present for consistency with other metrics.
     */

    function KatalMetricObjectList(name) {
      (0, _classCallCheck2.default)(this, KatalMetricObjectList);
      return _super.call(this, name);
    }
    /**
     * Get the list of for this object
     *
     * @returns Array of metrics for this object
     */

    (0, _createClass2.default)(KatalMetricObjectList, [{
      key: "metricList",
      get: function get() {
        throw new Error('Subclass of KatalMetricObjectList must implement metricList getter');
      }
    }, {
      key: "isMonitor",
      get: // This just delegates to the superclass, but if we override the setter without overriding the getter
      // getting the property will always return undefined.
      function get() {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(KatalMetricObjectList.prototype), "isMonitor", this);
      },
      set: function set(isMonitor) {
        (0, _set2.default)((0, _getPrototypeOf2.default)(KatalMetricObjectList.prototype), "isMonitor", isMonitor, this, true);
        this.metricList.forEach(function (metric) {
          if (metric.canMonitor) {
            metric.isMonitor = isMonitor;
          }
        });
      }
    }, {
      key: "canMonitor",
      get: function get() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return _KatalMetricObject2.default.Types.List;
      }
      /**
       * If any of the contained metrics are invalid, return the first validation error encountered; otherwise return
       * undefined.
       *
       * Note that this isn't called by the publisher; it validates each sub-metric on its own.
       *
       * @returns Error found with submetric, if any; else undefined
       */

    }, {
      key: "validationError",
      value: function validationError() {
        // Doesn't make sense to check superclass error here, since it is the contained metrics that matter.
        return (0, _FirstMap.default)(this.metricList, function (metric) {
          return metric.validationError();
        });
      }
    }]);
    return KatalMetricObjectList;
  }(_KatalMetricObject2.default);

  exports.default = KatalMetricObjectList;

  /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var objectValues = Object.values ? Object.values : function (object) {
    return Object.keys(object).map(function (key) {
      return object[key];
    });
  };
  var _default = objectValues;
  exports.default = _default;

  /***/
},
/* 41 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(12));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Standardized metric for instrumenting application initialization.
   *
   * Under the hood it is a KatalMetricTimedAttempt with the name "Initialization".
   * That object will contain a metric suffixed with ".Latency" for the latency of this request, and a metric suffixed
   * with ".Failure" to record the failure or success of this request.
   *
   * By default the request will be tracked as a failure; to mark it as a success call the "setSuccess()" method.
   *
   * By default, these metrics will be created:
   *   Initialization.Latency - Latency for application initialization
   *   Initialization.Failure - Failure for this application initialization (1 for failure, 0 for success)
   */

  var KatalMetricInitialization = /*#__PURE__*/function (_KatalMetricTimedAtte) {
    (0, _inherits2.default)(KatalMetricInitialization, _KatalMetricTimedAtte);

    var _super = _createSuper(KatalMetricInitialization);
    /** The name for this metric. */

    /**
     * Create a new timed attempt metric named "Initialization", for recording latency and failure information about
     * your application's initialization.
     */

    function KatalMetricInitialization() {
      (0, _classCallCheck2.default)(this, KatalMetricInitialization);
      return _super.call(this, KatalMetricInitialization.INITIALIZE_METRIC_NAME);
    }

    return KatalMetricInitialization;
  }(_KatalMetricTimedAttempt.default);

  exports.default = KatalMetricInitialization;
  (0, _defineProperty2.default)(KatalMetricInitialization, "INITIALIZE_METRIC_NAME", 'Initialization');

  /***/
},
/* 42 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _inherits2 = _interopRequireDefault(__webpack_require__(4));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(5));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _KatalMetricTimedAttempt = _interopRequireDefault(__webpack_require__(12));

  var _KatalMetricString = _interopRequireDefault(__webpack_require__(11));

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf2.default)(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn2.default)(this, result);
    };
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * Standardized metric for instrumenting HTTP requests.
   *
   * Under the hood it is a KatalMetricTimedAttempt with the name you provide prefixed with "HTTPRequest.".
   * That object will contain a metric suffixed with ".Latency" for the latency of this request, and a metric suffixed
   * with ".Failure" to record the failure or success of this request.
   *
   * By default the request will be tracked as a failure; to mark it as a success call the "setSuccess()" method.
   *
   * It has additional properties which will be emitted if set; see url, statusCode, and statusText.
   *
   * For example, if you gave the name "Search", these metrics will be created:
   *   HTTPRequest.Search.Latency - Latency for this request
   *   HTTPRequest.Search.Failure - Failure for this request (1 for failure, 0 for success)
   */

  var KatalMetricHttpRequest = /*#__PURE__*/function (_KatalMetricTimedAtte) {
    (0, _inherits2.default)(KatalMetricHttpRequest, _KatalMetricTimedAtte);

    var _super = _createSuper(KatalMetricHttpRequest);
    /** The prefix for this metric. */

    /** The suffix for URL metrics of this class. */

    /** The suffix for HTTP response code metrics of this class. */

    /** The suffix for HTTP response text metrics of this class. */

    /**
     * Create a new HTTP Request timed attempt metric incorporating the given name.
     *
     * The name you give will be used to create a KatalMetricTimedAttempt with the provided name prefixed with "HTTPRequest.".
     *
     * @param name Name of this metric; resulting metrics will prefix this name with "HTTPRequest."
     */

    function KatalMetricHttpRequest(name) {
      (0, _classCallCheck2.default)(this, KatalMetricHttpRequest);
      return _super.call(this, "".concat(KatalMetricHttpRequest.HTTP_REQUEST_PREFIX, ".").concat(name));
    }
    /**
     * Set the url for this metric.
     *
     * A string metric will be added to the list of objects that will be published for this metric.  Its name will
     * be this metrics name suffixed with '.URL', and its value will be the URL value given here.
     *
     * @param value URL for this metric
     */

    (0, _createClass2.default)(KatalMetricHttpRequest, [{
      key: "url",
      get:
      /**
       * Get the URL for this metric, if defined.
       *
       * @return The URL for this metric, or undefined
       */
      function get() {
        return this.getNamedMetricValue(KatalMetricHttpRequest.URL_SUFFIX);
      }
      /**
       * Get the URL metric object associated with this metric, if defined.
       *
       * @return Associated URL metric object, or undefined
       */

      , set: function set(value) {
        this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.URL_SUFFIX, _KatalMetricString.default, value);
      }
    }, {
      key: "urlMetric",
      get: function get() {
        return this.getNamedMetric(KatalMetricHttpRequest.URL_SUFFIX);
      }
      /**
       * Set the HTTP response status code for this metric.
       *
       * A string metric will be added to the list of objects that will be published for this metric.  Its name will
       * be this metrics name suffixed with '.StatusCode', and its value will be the status code value given here.
       *
       * @param value HTTP response status code for this metric
       */

    }, {
      key: "statusCode",
      get:
      /**
       * Get the HTTP response status code for this metric, if defined.
       *
       * @return Associated HTTP response status code metric object, or undefined
       */
      function get() {
        return this.getNamedMetricValue(KatalMetricHttpRequest.STATUS_CODE_SUFFIX);
      }
      /**
       * Get the HTTP response status code metric object associated with this metric, if defined.
       *
       * @return HTTP response status code metric object, or undefined
       */

      , set: function set(value) {
        this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.STATUS_CODE_SUFFIX, _KatalMetricString.default, value);
      }
    }, {
      key: "statusCodeMetric",
      get: function get() {
        return this.getNamedMetric(KatalMetricHttpRequest.STATUS_CODE_SUFFIX);
      }
      /**
       * Set the HTTP response status text for this metric.
       *
       * A string metric will be added to the list of objects that will be published for this metric.  Its name will
       * be this metrics name suffixed with '.StatusText', and its value will be the status text value given here.
       *
       * @param statusText HTTP response status text for this metric, or undefined to remove
       */

    }, {
      key: "statusText",
      get:
      /**
       * Get the HTTP response status text for this metric, if defined.
       *
       * @return Associated HTTP response status text metric object, or undefined
       */
      function get() {
        return this.getNamedMetricValue(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX);
      }
      /**
       * Get the HTTP response status text for this metric, if defined.
       *
       * @return Associated HTTP response status text metric object, or undefined
       */

      , set: function set(value) {
        this.setOrDeleteNamedMetricValue(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX, _KatalMetricString.default, value);
      }
    }, {
      key: "statusTextMetric",
      get: function get() {
        return this.getNamedMetric(KatalMetricHttpRequest.STATUS_TEXT_SUFFIX);
      }
    }]);
    return KatalMetricHttpRequest;
  }(_KatalMetricTimedAttempt.default);

  exports.default = KatalMetricHttpRequest;
  (0, _defineProperty2.default)(KatalMetricHttpRequest, "HTTP_REQUEST_PREFIX", 'HTTPRequest');
  (0, _defineProperty2.default)(KatalMetricHttpRequest, "URL_SUFFIX", 'URL');
  (0, _defineProperty2.default)(KatalMetricHttpRequest, "STATUS_CODE_SUFFIX", 'StatusCode');
  (0, _defineProperty2.default)(KatalMetricHttpRequest, "STATUS_TEXT_SUFFIX", 'StatusText');

  /***/
},
/* 43 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  var _typeof = __webpack_require__(7);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

  var _createClass2 = _interopRequireDefault(__webpack_require__(2));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(6));

  var _v = _interopRequireDefault(__webpack_require__(44));

  var _KatalMetricsContext = _interopRequireDefault(__webpack_require__(24));

  var _KatalMetricObject = _interopRequireDefault(__webpack_require__(8));

  var KatalMetrics = _interopRequireWildcard(__webpack_require__(10));

  var _KatalMetricString = _interopRequireDefault(__webpack_require__(11));

  var _mergeLists = __webpack_require__(25);

  var _metricsExtension = __webpack_require__(52);

  var _embedRequestId = __webpack_require__(27);

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  var INITIALIZATION_METHOD_NAME = 'Initialization';
  /**
   * Default error handler if the user-supplied error handler fails or is unset.
   * Should never be called unless user-provided error handler misbehaves.
   */

  var DEFAULT_ERROR_HANDLER = function DEFAULT_ERROR_HANDLER(err) {
    console.error("Error publishing metrics:");
    console.error(err);
  };

  var PARENT_ACTION_ID_NAME = 'parentActionId';

  var getContextFields = function getContextFields(context) {
    if (context.context) {
      return context.context;
    } else {
      return context;
    }
  };
  /**
   * Class used for publishing metrics to Katal.  Contains a driver and a context.
   *
   * This class knows how to publish metrics, and how to create new publishers with a modified context.
   */

  var KatalMetricsPublisher = /*#__PURE__*/function () {
    /**
     * Create a new metrics publisher with the given driver and context
     *
     * @param driver Subclass of KatalMetricsDriver used to publish the metrics
     * @param errorHandler Handler for errors that occur while using this publisher
     * @param context Context for this metrics publisher; contains data to be included with every
     *     metric published using this publisher object.  Default is an empty context.
     */
    function KatalMetricsPublisher(driver) {
      var _this = this;

      var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ERROR_HANDLER;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _KatalMetricsContext.default();
      (0, _classCallCheck2.default)(this, KatalMetricsPublisher);
      (0, _defineProperty2.default)(this, "combinedErrorHandler", function (err) {
        try {
          _this.errorHandler(err);
        } catch (nextErr) {
          console.error("Error handling error publishing metrics:");
          console.error(nextErr);
          DEFAULT_ERROR_HANDLER(err);
        }
      }); // Check for a common error

      if (context instanceof _KatalMetricsContext.default.Builder) {
        throw new Error("KatalMetricsContext.Builder object passed instead of KatalMetricsContext.  Try calling .build() method.");
      }

      this.driver = driver;
      this.errorHandler = errorHandler;
      this.context = !(context instanceof _KatalMetricsContext.default) ? new _KatalMetricsContext.default(context) : context;
    }
    /**
     * Call the error-handler supplied by the user when this object was constructed; if that is unset or itself throws
     * an exception, calls the default error handler as a fallback, which will just log the error to the console.
     *
     * @param err Error object to handle
     */

    (0, _createClass2.default)(KatalMetricsPublisher, [{
      key: "withErrorHandling",
      value:
      /**
       * Helper method to wrap a function in the error handler.
       *
       * @param doTheThing Function to run under the wrapper
       * @return Return value from called function
       */
      function withErrorHandling(doTheThing) {
        try {
          return doTheThing();
        } catch (err) {
          this.combinedErrorHandler(err);
        }
      }
      /**
       * Helper method to return all the related metrics of base publisher and additionalContext.
       *
       * @param additionalContext Additional context to be included in the new publisher
       * @return Return all related metrics from base publisher and additionalContext.
       */

    }, {
      key: "getAdditionalRelatedMetrics",
      value: function getAdditionalRelatedMetrics(additionalContext) {
        var newContext = additionalContext instanceof _KatalMetricsContext.default ? additionalContext.context : additionalContext;
        var baseRelatedMetrics = this.getBaseRelatedMetrics();
        return (0, _mergeLists.mergeLists)(baseRelatedMetrics, newContext.relatedMetrics);
      }
      /**
       * Helper method to return all the related metrics of base publisher.
       *
       * @return Return all related metrics from the base publisher.
       */

    }, {
      key: "getBaseRelatedMetrics",
      value: function getBaseRelatedMetrics() {
        return (0, _mergeLists.mergeLists)(this.context.context.relatedMetrics, this.context.context.relatedMetricsSingleAction);
      }
      /**
       * Publish the given metric object.
       *
       * This method is guaranteed never to throw an exception.  If the metric object or context are invalid,
       * or any other exception is thrown while publishing, the publisher's error handler is called.  If the
       * publisher's error handler is unset or fails, the default error handler is called (see defaultErrorHandler).
       *
       * @param katalMetricObject Metric object to publish
       */

    }, {
      key: "publish",
      value: function publish(katalMetricObject) {
        var _this2 = this;

        this.withErrorHandling(function () {
          if (!katalMetricObject) {
            throw new Error("Cannot publish undefined/null metric object");
          }

          if (_KatalMetricObject.default.Types.List === katalMetricObject.type) {
            katalMetricObject.metricList.forEach(function (metric) {
              _this2.publish(metric);
            });
          } else {
            var driverContext = _this2.context.driverContext();

            var contextError = driverContext.validationError();
            if (contextError) throw contextError;
            var objectError = katalMetricObject.validationError();
            if (objectError) throw objectError;
            (0, _metricsExtension.dispatchMetricEvent)(katalMetricObject, driverContext);

            _this2.driver.publish(katalMetricObject, driverContext);
          }
        });
      }
      /**
       * Create a new publisher which is identical to this publisher, but with the given context fields merged into
       * the new publisher's context.
       *
       * @param additionalContext Additional context to be included in the new publisher
       * @returns New publisher identical to this one, but with an updated context
       */

    }, {
      key: "newChildPublisher",
      value: function newChildPublisher(additionalContext) {
        return new KatalMetricsPublisher(this.driver, this.errorHandler, this.context.merge(additionalContext));
      }
      /**
       * Begin a new action, and return a new publisher for metrics related to that action.
       *
       * Beginning a new action involves the following steps:
       *   1. Generate a new actionId for the action, randomly in the browser
       *   2. If there are any related metrics in the context, publish them
       *   3. Create and return a new publisher with this object's context, merged with any additional context given,
       *      merged with the actionId generated above.
       *
       * @param additionalContext Additional context to be included in the new publisher
       * @returns New publisher identical to this one, but with an updated context
       */

    }, {
      key: "newChildActionPublisher",
      value: function newChildActionPublisher(additionalContext) {
        var actionId = this._generateActionid(additionalContext);

        var newContext = this.context.withoutRelatedMetricsSingleAction().merge({
          actionId: actionId
        }).merge(additionalContext);
        var newPublisher = new KatalMetricsPublisher(this.driver, this.errorHandler, newContext);
        var allRelatedMetrics = additionalContext && !(additionalContext instanceof _KatalMetricsContext.default.Builder) ? this.getAdditionalRelatedMetrics(additionalContext) : this.getBaseRelatedMetrics();

        if (allRelatedMetrics) {
          allRelatedMetrics.forEach(function (metric) {
            newPublisher.publish(metric);
          });
        }

        return newPublisher;
      }
      /**
       * Begin a new chained child action, and return a new publisher for metrics related to that action.
       *
       * A chained action is handled the same way as in newChildActionPublisher, but additionally,
       * the returned publisher has a relatedMetricNoInherit named "parentActionId", with the newly
       * generated actionId as its value.
       *
       * The effect of this is that any further chained child actions can be connected back to this
       * action through the parentActionId, and so on recursively.
       *
       * @param additionalContext Additional context to be included in the new publisher
       * @returns New publisher identical to this one, but with an updated context
       */

    }, {
      key: "newChildActionPublisherChained",
      value: function newChildActionPublisherChained(additionalContext) {
        var actionId = this._generateActionid(additionalContext);

        var parentActionId = (0, _embedRequestId.embedRequestId)(actionId, this.context.context.requestId);
        var relatedMetricsSingleAction = [new _KatalMetricString.default(PARENT_ACTION_ID_NAME, parentActionId)];
        var newContext = new _KatalMetricsContext.default({
          actionId: actionId,
          relatedMetricsSingleAction: relatedMetricsSingleAction
        }).merge(additionalContext);
        return this.newChildActionPublisher(newContext);
      }
      /**
       * Helper method to create a new chained child action publisher with the given value for methodName.
       *
       * Apart from setting the methodName in the child context, this method is identical to newChildActionPublisherChained.
       *
       * @param methodName Method name for new publisher context
       * @param additionalContext Additional context to supply (optional)
       * @returns New publisher identical to this one, but with an updated context
       */

    }, {
      key: "newChildActionPublisherChainedForMethod",
      value: function newChildActionPublisherChainedForMethod(methodName, additionalContext) {
        return this.newChildActionPublisherChained(new _KatalMetricsContext.default({
          methodName: methodName
        }).merge(additionalContext));
      }
      /**
       * Helper method to create a new action publisher with the given value for methodName.
       *
       * Apart from setting the methodName in the child context, this method is identical to newChildActionPublisherForMethod.
       * @param methodName Method name for new publisher context
       * @param additionalContext Additional context to supply (optional)
       * @returns New publisher identical to this one, but with an updated context
       */

    }, {
      key: "newChildActionPublisherForMethod",
      value: function newChildActionPublisherForMethod(methodName, additionalContext) {
        return this.newChildActionPublisher(new _KatalMetricsContext.default({
          methodName: methodName
        }).merge(additionalContext));
      }
      /**
       * Helper method to create a new action for application initialization.  It will always have a methodName
       * of "Initialization"; otherwise this method is identical to newChildActionPublisherForMethod.
       *
       * @param additionalContext Additional context to be included in the new publisher
       * @returns New publisher identical to this one, but with an updated context
       */

    }, {
      key: "newChildActionPublisherForInitialization",
      value: function newChildActionPublisherForInitialization(additionalContext) {
        return this.newChildActionPublisherForMethod(INITIALIZATION_METHOD_NAME, additionalContext);
      }
      /**
       * Helper method to publish a string with the given name and value.
       *
       * @param name Metric name
       * @param value String value
       */

    }, {
      key: "publishString",
      value: function publishString(name, value) {
        this.publish(new KatalMetrics.Metric.String(name, value));
      }
      /**
       * Helper method to publish a string with the given name and value, truncated to the maximum size allowed by the
       * schema.
       *
       * @param name Metric name
       * @param value String value
       */

    }, {
      key: "publishStringTruncate",
      value: function publishStringTruncate(name, value) {
        var object = new KatalMetrics.Metric.String(name, value);
        object.truncate = true;
        this.publish(object);
      }
      /**
       * Helper method to publish a counter with the given name and value.
       *
       * @param name Metric name
       * @param value Counter value
       */

    }, {
      key: "publishCounter",
      value: function publishCounter(name, value) {
        this.publish(new KatalMetrics.Metric.Counter(name, value));
      }
      /**
       * Helper method to publish a timer with the given name and value.
       *
       * @param name Metric name
       * @param value Timer value
       */

    }, {
      key: "publishTimer",
      value: function publishTimer(name, value) {
        this.publish(new KatalMetrics.Metric.Timer(name, value));
      }
      /**
       * Helper method to publish a counter with the isMonitor flag set, and the given name and value.
       *
       * @param name Metric name
       * @param value Counter value
       */

    }, {
      key: "publishCounterMonitor",
      value: function publishCounterMonitor(name, value) {
        this.publish(new KatalMetrics.Metric.Counter(name, value).withMonitor());
      }
      /**
       * Helper method to publish a timer with the isMonitor flag set, and the given name and value.
       *
       * @param name Metric name
       * @param value Timer value
       */

    }, {
      key: "publishTimerMonitor",
      value: function publishTimerMonitor(name, value) {
        this.publish(new KatalMetrics.Metric.Timer(name, value).withMonitor());
      }
      /**
       * Private helper method to extract an actionId from a context if one is provided, and otherwise generate a new one.
       *
       * @returns Action ID string
       */

    }, {
      key: "_generateActionid",
      value: function _generateActionid(context) {
        if (context) {
          var fields = getContextFields(context);

          if (fields.actionId) {
            return fields.actionId;
          }
        }

        return (0, _v.default)();
      }
    }]);
    return KatalMetricsPublisher;
  }();

  exports.default = KatalMetricsPublisher;

  /***/
},
/* 44 */
/***/function (module, exports, __webpack_require__) {

  var rng = __webpack_require__(45);

  var bytesToUuid = __webpack_require__(46);

  function v4(options, buf, offset) {
    var i = buf && offset || 0;

    if (typeof options == 'string') {
      buf = options === 'binary' ? new Array(16) : null;
      options = null;
    }

    options = options || {};
    var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      for (var ii = 0; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || bytesToUuid(rnds);
  }

  module.exports = v4;

  /***/
},
/* 45 */
/***/function (module, exports) {

  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection
  // getRandomValues needs to be invoked in a context where "this" is a Crypto
  // implementation. Also, find the complete implementation of crypto on IE11.
  var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

  if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    module.exports = function whatwgRNG() {
      getRandomValues(rnds8);
      return rnds8;
    };
  } else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);

    module.exports = function mathRNG() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return rnds;
    };
  }

  /***/
},
/* 46 */
/***/function (module, exports) {

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];

  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }

  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

    return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
  }

  module.exports = bytesToUuid;

  /***/
},
/* 47 */
/***/function (module, exports, __webpack_require__) {

  var arrayWithoutHoles = __webpack_require__(48);

  var iterableToArray = __webpack_require__(49);

  var unsupportedIterableToArray = __webpack_require__(50);

  var nonIterableSpread = __webpack_require__(51);

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 48 */
/***/function (module, exports, __webpack_require__) {

  var arrayLikeToArray = __webpack_require__(26);

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }

  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 49 */
/***/function (module, exports) {

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 50 */
/***/function (module, exports, __webpack_require__) {

  var arrayLikeToArray = __webpack_require__(26);

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 51 */
/***/function (module, exports) {

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;

  /***/
},
/* 52 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.dispatchMetricEvent = dispatchMetricEvent;
  /**
   * Publish to external parties that are 
   * listening for katal.metrics.publish Custom Events
   */

  function dispatchMetricEvent(metric, context) {
    if (typeof window === 'undefined') {
      return;
    }

    dispatchCustomEvent(metric, context); // for legacy purposes, also publish to __KATAL_METRICS_EXTENSION__

    publishToMetricsExtension(metric, context);
  }

  function dispatchCustomEvent(metric, context) {
    if (typeof CustomEvent !== "function") {
      return;
    }

    var event = new CustomEvent('katal.metrics.publish', {
      detail: {
        metric: metric,
        context: context.getFields()
      }
    });
    window.dispatchEvent(event);
  }
  /**
   * @Deprecated
   * Publish to https://code.amazon.com/packages/KatalMetricsExtension
   * The extension injects a global __KATAL_METRICS_EXTENSION__ object with a
   * `publish` method.
   */

  function publishToMetricsExtension(metric, context) {
    var extension = window.__KATAL_METRICS_EXTENSION__;

    if (extension) {
      extension.publish(metric, context.getFields());
    }
  }

  /***/
},
/* 53 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DEFAULT_ERROR_HANDLER = void 0;

  var DEFAULT_ERROR_HANDLER = function DEFAULT_ERROR_HANDLER(err) {
    throw err;
  };

  exports.DEFAULT_ERROR_HANDLER = DEFAULT_ERROR_HANDLER;

  /***/
},
/* 54 */
/***/function (module, exports) {

  /* (ignored) */

  /***/},
/* 55 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(29);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KatalMetricsDriverSushi = void 0;

  var _objectSpread2 = _interopRequireDefault(__webpack_require__(56));

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(30));

  var _createClass2 = _interopRequireDefault(__webpack_require__(31));

  var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(57));

  var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(59));

  var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(32));

  var _inherits2 = _interopRequireDefault(__webpack_require__(60));

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(13));

  var _KatalMetricsDriver2 = _interopRequireDefault(__webpack_require__(28));

  var _KatalMetricType = _interopRequireDefault(__webpack_require__(15));

  var _katalSushiClient = _interopRequireDefault(__webpack_require__(62));

  var _temp;

  var KAT_STANDALONE_NEXUS_PRODUCER_ID = 'katal';
  var KAT_STANDALONE_DEFAULT_SOURCE_GROUPS = {
    test: 'com.amazon.eel.katal.metrics.core.nexus.gamma',
    prod: 'com.amazon.eel.katal.metrics.core.nexus'
  };

  var KatalMetricsDriverSushi = /*#__PURE__*/function (_KatalMetricsDriver) {
    (0, _inherits2.default)(KatalMetricsDriverSushi, _KatalMetricsDriver);

    function KatalMetricsDriverSushi(options) {
      var _this;

      (0, _classCallCheck2.default)(this, KatalMetricsDriverSushi);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KatalMetricsDriverSushi).call(this));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sushi", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "producerId", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sourceGroupId", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "errorHandler", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "combinedErrorHandler", function (err) {
        if (_this.errorHandler) {
          try {
            _this.errorHandler(err); // Return to avoid falling through to default error handler


            return;
          } catch (nextErr) {
            console.error("Error handling error publishing metrics:");
            console.error(nextErr); // Fall through
          }
        }

        _this.defaultErrorHandler(err);
      });
      var domain = options.domain,
          realm = options.realm,
          errorHandler = options.errorHandler,
          sushiClient = options.sushiClient,
          _options$sushiProduce = options.sushiProducer,
          producerId = _options$sushiProduce === void 0 ? KAT_STANDALONE_NEXUS_PRODUCER_ID : _options$sushiProduce,
          sushiClientOptions = options.sushiClientOptions,
          sushiClientTransportOverride = options.sushiClientTransportOverride; // custom source group always overrides defaults

      var sourceGroupId = options.sourceGroupId || KAT_STANDALONE_DEFAULT_SOURCE_GROUPS[domain] || KAT_STANDALONE_DEFAULT_SOURCE_GROUPS['test'];
      _this.sushi = sushiClient || _this.buildSushiClient(domain, realm, sourceGroupId, sushiClientOptions, sushiClientTransportOverride);
      _this.errorHandler = errorHandler;
      _this.producerId = producerId;
      _this.sourceGroupId = sourceGroupId;
      return _this;
    }

    (0, _createClass2.default)(KatalMetricsDriverSushi, [{
      key: "beforeUnload",

      /**
       * Register a callback to be called right before the page unloads. This
       * allows for any final metrics, such as page visit duration, to be sent
       * before the user navigates away from the page or closes the tab.
       * NOTE: This is an experimental API and may change in the future.
       * @param cb The callback to call.
       */
      value: function beforeUnload(cb) {
        this.sushi.onSushiUnload(cb);
      }
      /**
       * Default error handler if the user-supplied error handler fails or is unset.  Should never be called unless
       * user-provided error handler misbehaves.
       *
       * @param err Unhandled error object
       */

    }, {
      key: "defaultErrorHandler",
      value: function defaultErrorHandler(err) {
        console.error("Error publishing metrics:");
        console.error(err);
      }
      /**
       * Call the error-handler supplied by the user when this object was constructed; if that is unset or itself throws
       * an exception, calls the default error handler as a fallback, which will just log the error to the console.
       *
       * @param err Error object to handle
       */

    }, {
      key: "withErrorHandling",

      /**
       * Helper method to wrap a function in the error handler.
       *
       * @param doTheThing Function to run under the wrapper
       * @return Return value from called function
       */
      value: function withErrorHandling(doTheThing) {
        try {
          return doTheThing();
        } catch (err) {
          this.combinedErrorHandler(err);
        }
      }
    }, {
      key: "buildSushiClient",
      value: function buildSushiClient(domain, realm, sourceGroupId, sushiClientOptions, sushiClientTransportOverride) {
        if (!domain || !realm) {
          throw new Error('KatalMetricsDriverSushi requires a domain and realm to build a sushi client.');
        }

        return new _katalSushiClient.default(KatalMetricsDriverSushi.getRealmName(realm), sourceGroupId, this.combinedErrorHandler, sushiClientOptions, sushiClientTransportOverride);
      }
    }, {
      key: "publish",
      // TODO: errorHandler in this method is deprecated and is not referenced.
      // Tech debt: https://issues.amazon.com/issues/KAT-875
      value: function publish(metricObject, errorHandler, context) {
        var _this2 = this; // Support for new 2-argument form of publish, which does not pass the unused errorHandler object (KAT-875)


        var metricsContext = arguments.length < 3 ? arguments[1] : arguments[2];
        this.withErrorHandling(function () {
          // TODO: This logic is now moved into KatalMetricsPublisher, once everybody has that update we can remove this.
          // Tech debt: https://issues.amazon.com/issues/KAT-876
          if (_KatalMetricType.default.List === metricObject.type) {
            metricObject.metricList.forEach(function (metric) {
              _this2.publish(metric, metricsContext);
            });
            return;
          }

          var nexusSchema = _this2.mapObjectTypeToNexusSchema(metricObject.type);

          var fields = (0, _objectSpread2.default)({}, metricsContext.context, {
            metricKey: metricObject.name,
            value: metricObject.value
          });

          if (metricObject.isMonitor) {
            fields.isMonitor = true;
          } // Reset the event count back to 0, otherwise Sushi will stop publishing after 1K items (https://issues.amazon.com/issues/KAT-1534)


          _this2.sushi.reset();

          _this2.sushi.event(fields, _this2.producerId, nexusSchema, {
            "ssd": 1
          });
        });
      }
    }, {
      key: "mapObjectTypeToNexusSchema",
      value: function mapObjectTypeToNexusSchema(objectType) {
        switch (objectType) {
          case _KatalMetricType.default.String:
            return 'katal.client.metrics.String.2';

          case _KatalMetricType.default.Counter:
            return 'katal.client.metrics.Counter.3';

          case _KatalMetricType.default.Timer:
            return 'katal.client.metrics.Timer.2';

          default:
            throw new Error("Unknown type ".concat(objectType, " when publishing metric object."));
        }
      }
    }], [{
      key: "getRealmName",
      value: function getRealmName(realm) {
        switch (realm) {
          case 'NAAmazon':
          case 'USAmazon':
            return _katalSushiClient.default.REGIONS.NA;

          case 'EUAmazon':
            return _katalSushiClient.default.REGIONS.EU;

          case 'FEAmazon':
          case 'JPAmazon':
            return _katalSushiClient.default.REGIONS.FE;

          case 'CNAmazon':
            return _katalSushiClient.default.REGIONS.CN;

          default:
            // Let the SushiClient decide if this is bogus or not.
            return realm;
        }
      }
    }]);
    return KatalMetricsDriverSushi;
  }(_KatalMetricsDriver2.default);

  exports.KatalMetricsDriverSushi = KatalMetricsDriverSushi;
  (0, _defineProperty2.default)(KatalMetricsDriverSushi, "Builder", (_temp = /*#__PURE__*/function () {
    function _temp() {
      (0, _classCallCheck2.default)(this, _temp);
      (0, _defineProperty2.default)(this, "context", {});
    }

    (0, _createClass2.default)(_temp, [{
      key: "withSushiClient",
      value: function withSushiClient(sushiClient) {
        this.context.sushiClient = sushiClient;
        return this;
      }
    }, {
      key: "withDomainRealm",
      value: function withDomainRealm(domain, realm) {
        this.context.domain = domain;
        this.context.realm = realm;
        return this;
      }
    }, {
      key: "withCustomProducer",
      value: function withCustomProducer(sushiProducerId) {
        this.context.sushiProducer = sushiProducerId;
        return this;
      }
    }, {
      key: "withCustomSourceGroup",
      value: function withCustomSourceGroup(sourceGroupId) {
        this.context.sourceGroupId = sourceGroupId;
        return this;
      }
    }, {
      key: "withErrorHandler",
      value: function withErrorHandler(errorHandler) {
        this.context.errorHandler = errorHandler;
        return this;
      }
    }, {
      key: "withSushiClientOptions",
      value: function withSushiClientOptions(sushiClientOptions) {
        this.context.sushiClientOptions = sushiClientOptions;
        return this;
      }
    }, {
      key: "withSushiClientTransportOverride",
      value: function withSushiClientTransportOverride(sushiClientTransportOverride) {
        this.context.sushiClientTransportOverride = sushiClientTransportOverride;
        return this;
      }
    }, {
      key: "build",
      value: function build() {
        return new KatalMetricsDriverSushi(this.context);
      }
    }]);
    return _temp;
  }(), _temp));

  /***/
},
/* 56 */
/***/function (module, exports, __webpack_require__) {

  var defineProperty = __webpack_require__(13);

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  module.exports = _objectSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 57 */
/***/function (module, exports, __webpack_require__) {

  var _typeof = __webpack_require__(58)["default"];

  var assertThisInitialized = __webpack_require__(32);

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }

  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 58 */
/***/function (module, exports) {

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == _typeof3(Symbol.iterator) ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }

  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 59 */
/***/function (module, exports) {

  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 60 */
/***/function (module, exports, __webpack_require__) {

  var setPrototypeOf = __webpack_require__(61);

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 61 */
/***/function (module, exports) {

  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

  /***/
},
/* 62 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _interopRequireDefault = __webpack_require__(29);

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _defineProperty2 = _interopRequireDefault(__webpack_require__(13));

  var _classCallCheck2 = _interopRequireDefault(__webpack_require__(30));

  var _createClass2 = _interopRequireDefault(__webpack_require__(31));

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          (0, _defineProperty2.default)(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }
  /**
   * This class encapsulates two IIFEs that the Sushi library contains. A fake CSM and Window object are created and provided
   * to the functions so that they actually execute in a controlled environment away from any CSM code that might be executing
   * at the platform level within the page.
   *
   * The basic run order is the following:
   * 1. Build the mock CSM object, then build a mock Window object that references the CSM object as ue_csm
   * 2. Run the transportation-clients.js Script from SushiJavascriptClient providing the mocks. It will modify globals on the mock objects.
   * 3. Run the sushi-client.js script from SushiJavaScriptClient providing the mocks. It will create an instance of the sushi client and inject it into the CSM globals in the mocks.
   * 4. whenever event() is called, refer to the encapsulated csm object to add the event to the queue.
   */

  var SushiClient = /*#__PURE__*/function () {
    (0, _createClass2.default)(SushiClient, null, [{
      key: "createSushiUrl",
      value: function createSushiUrl(region, sourceGroup) {
        if (!sourceGroup) {
          throw new Error("Sushi Driver was not provided with a source group.");
        }

        var domain;

        switch (region) {
          case SushiClient.REGIONS.NA:
            domain = "unagi-na";
            break;

          case SushiClient.REGIONS.EU:
            domain = "unagi-eu";
            break;

          case SushiClient.REGIONS.FE:
            domain = "unagi-fe";
            break;

          case SushiClient.REGIONS.CN:
            domain = "unagi-cn";
            break;

          default:
            throw new Error("Unrecognized region '".concat(region, "' provided to SushiClient."));
        }

        return "https://".concat(domain, ".amazon.com/1/events/").concat(sourceGroup);
      }
    }, {
      key: "createCsmUserContext",
      value: function createCsmUserContext(sushiUrl) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return _objectSpread({
          hiPriFlushInterval: 1000,
          lowPriFlushInterval: 10000,
          requestId: "1",
          errorChannel: "jserr",
          sessionStorageWrapper: undefined,
          errorHandlerFunction: console.log,
          sushiUrl: sushiUrl
        }, options);
      }
      /**
       * Create a Sushi Client for a region and source group
       *
       * @param region Region in SushiClient.REGIONS
       * @param sourceGroup Sushi Eel source group
       * @param errorHandler Error handler function
       * @param options Additional CSM context overrides
       * @param clientOverride An optional transportation client for overriding the default clients (navigator.sendBeacon and XDomainRequest or XMLHttpRequest)
       */

    }, {
      key: "REGIONS",
      get: function get() {
        return {
          NA: "NA",
          EU: "EU",
          FE: "FE",
          CN: "CN"
        };
      }
    }]);

    function SushiClient() {
      var region = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SushiClient.REGIONS.NA;
      var sourceGroup = arguments.length > 1 ? arguments[1] : undefined;
      var errorHandler = arguments.length > 2 ? arguments[2] : undefined;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var clientOverride = arguments.length > 4 ? arguments[4] : undefined;
      (0, _classCallCheck2.default)(this, SushiClient);
      var sushiUrl = SushiClient.createSushiUrl(region, sourceGroup);
      var csmUserContext = SushiClient.createCsmUserContext(sushiUrl, options);
      this.ue_csm = this.setupMockCSMObject(csmUserContext);
      this.encapsulatedWindow = this.setupMockWindow(this.ue_csm);
      this.transportationClientCode(this.ue_csm, window);

      if (clientOverride) {
        this.ue_csm.ue._sBcn = {
          isSupported: true,
          send: function send(endpoint, payload) {
            clientOverride(endpoint, payload);
            return true;
          }
        };
      }

      this.clientCode(this.ue_csm, this.encapsulatedWindow);
      this.errorHandler = errorHandler;
    }

    (0, _createClass2.default)(SushiClient, [{
      key: "event",
      value: function event(data, producerId, schemaId, options) {
        var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        if (debug) {
          console.log("SushiClient wrapper publishing the following:", {
            data: data,
            producerId: producerId,
            schemaId: schemaId,
            options: options
          });
        }

        return this.ue_csm.ue.event(data, producerId, schemaId, options);
      }
      /**
       * If you plan to emit 1000 or more events per instantiated client,
       * call reset after calling event to allow the CSM client to continue sending events.
       */

    }, {
      key: "reset",
      value: function reset() {
        this.ue_csm.ue.event.reset();
      }
      /**
       * Register a callback that will be called just before each time metrics are
       * flushed to the network.
       * @param callback A function that sushi will call before flushes.
       */

    }, {
      key: "onSushiFlush",
      value: function onSushiFlush(callback) {
        this.ue_csm.ue.onSushiFlush(callback);
      }
      /**
       * Register a callback that will be called just before the page unloads.
       * This can be used to send any final metrics to sushi, such as page visit
       * duration or batched counters.
       * @param callback A function that sushi will call before unload.
       */

    }, {
      key: "onSushiUnload",
      value: function onSushiUnload(callback) {
        this.ue_csm.ue.onSushiUnload(callback);
      }
    }, {
      key: "setupMockCSMObject",
      value: function setupMockCSMObject(csmUserContext) {
        var _this = this;

        var execStub = function execStub(callback, attribution) {
          return callback;
        };

        var eventStub = function eventStub(log, producer, eventType) {
          console.warn("SushiClient CSM stub called in unsupported manner: event()");
        };

        var errorHandler = function errorHandler(logEvent, channel) {
          if (_this.errorHandler) {
            _this.errorHandler(logEvent);
          } else {
            console.log("An error has occurred in SushiClient channel " + channel, logEvent);
          }
        };

        var attachHandler = function attachHandler(evt, handler, container) {
          //TODO might be able to just use window.ue.attach?
          container = container || window; //ok to use real window global here.

          if (window.EventTarget && window.EventTarget.prototype && window.EventTarget.prototype.addEventListener) {
            window.EventTarget.prototype.addEventListener.call(container, evt, handler, !!window.ue_clf);
          } else if (container.addEventListener) {
            container.addEventListener(evt, handler, !!window.ue_clf);
          } else if (container.attachEvent) {
            container.attachEvent("on" + evt, handler);
          }
        };

        return {
          ue_hpsi: csmUserContext.hiPriFlushInterval,
          ue_lpsi: csmUserContext.lowPriFlushInterval,
          ue: {
            ssw: csmUserContext.sessionStorageWrapper,
            log: errorHandler,
            exec: execStub,
            event: eventStub,
            attach: attachHandler
          },
          ueLogError: csmUserContext.errorHandlerFunction,
          ue_surl: csmUserContext.sushiUrl,
          ue_id: csmUserContext.requestId,
          ue_err_chan: csmUserContext.errorChannel
        };
      }
    }, {
      key: "setupMockWindow",
      value: function setupMockWindow(ue_csm) {
        //apparently cannot ref the setTimeout function directly in some browsers so we have to wrap it.
        var timeoutWrapper = function timeoutWrapper(fn, timeout) {
          return window.setTimeout(fn, timeout);
        };

        return {
          ue_csm: ue_csm,
          ueLogError: ue_csm.ueLogError,
          ue: ue_csm.ue,
          setTimeout: timeoutWrapper
        };
      }
      /**
       * Code within function pulled directly from
       * https://code.amazon.com/packages/SushiJavaScriptClient/blobs/mainline/--/javascript/sushi-client.js
       */

    }, {
      key: "clientCode",
      value: function clientCode(ue_csm, window) {
        ue_csm.ue.exec(function (b, k) {
          function A() {
            for (var a = 0; a < arguments.length; a++) {
              var c = arguments[a];

              try {
                var h;

                if (c.isSupported) {
                  var b = t.buildPayload(l, e);
                  h = c.send(J, b);
                } else throw dummyException;

                return h;
              } catch (d) {}
            }

            B({
              m: "All supported clients failed",
              attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
              f: "sushi-client.js",
              logLevel: "ERROR"
            }, k.ue_err_chan || "jserr");
          }

          function m() {
            if (e.length) {
              for (var a = 0; a < n.length; a++) {
                n[a]();
              }

              A(d._sBcn || {}, d._ajx || {});
              e = [];
              f = {};
              l = {};
              u = v = q = w = 0;
            }
          }

          function K() {
            var a = new Date(),
                c = function c(a) {
              return 10 > a ? "0" + a : a;
            };

            return Date.prototype.toISOString ? a.toISOString() : a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + "." + String((a.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z";
          }

          function x(a) {
            try {
              return JSON.stringify(a);
            } catch (c) {}

            return null;
          }

          function C(a, c, h, g) {
            var p = !1;
            g = g || {};
            r++;
            r == D && B({
              m: "Max number of Sushi Logs exceeded",
              f: "sushi-client.js",
              logLevel: "ERROR",
              attribution: "CSMSushiClient_MAX_CALLS"
            }, k.ue_err_chan || "jserr");
            var f;
            if (f = !(r >= D)) (f = a && -1 < a.constructor.toString().indexOf("Object") && c && -1 < c.constructor.toString().indexOf("String") && h && -1 < h.constructor.toString().indexOf("String")) || L++;
            f && (d.count && d.count("Event:" + h, 1), a.producerId = a.producerId || c, a.schemaId = a.schemaId || h, a.timestamp = K(), c = Date.now ? Date.now() : +new Date(), h = Math.random().toString().substring(2, 12), a.messageId = b.ue_id + "-" + c + "-" + h, g && !g.ssd && (a.sessionId = a.sessionId || b.ue_sid, a.requestId = a.requestId || b.ue_id, a.obfuscatedMarketplaceId = a.obfuscatedMarketplaceId || b.ue_mid), (c = x(a)) ? (c = c.length, (e.length == M || q + c > N) && m(), q += c, a = {
              data: t.compressEvent(a)
            }, e.push(a), (g || {}).n ? 0 === E ? m() : u || (u = k.setTimeout(m, E)) : v || (v = k.setTimeout(m, O)), p = !0) : p = !1);
            !p && b.ue_int && console.error("Invalid JS Nexus API call");
            return p;
          }

          function F() {
            if (!G) {
              for (var a = 0; a < y.length; a++) {
                y[a]();
              }

              for (a = 0; a < n.length; a++) {
                n[a]();
              }

              e.length && (b.ue_sbuimp && b.ue && b.ue.ssw && (a = x({
                dct: l,
                evt: e
              }), b.ue.ssw("eeldata", a), b.ue.ssw("eelsts", "unk")), A(d._sBcn || {}));
              G = !0;
            }
          }

          function H(a) {
            y.push(a);
          }

          function I(a) {
            n.push(a);
          }

          var D = 1E3,
              M = 499,
              N = 524288,
              s = function s() {},
              d = b.ue || {},
              B = d.log || s,
              P = b.uex || s;

          (b.uet || s)("bb", "ue_sushi_v1", {
            wb: 1
          });

          var J = b.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
              Q = ["messageId", "timestamp"],
              z = "#",
              e = [],
              f = {},
              l = {},
              q = 0,
              w = 0,
              L = 0,
              r = 0,
              y = [],
              n = [],
              G = !1,
              u,
              v,
              E = void 0 === b.ue_hpsi ? 1E3 : b.ue_hpsi,
              O = void 0 === b.ue_lpsi ? 1E4 : b.ue_lpsi,
              t = function () {
            function a(a) {
              f[a] = z + w++;
              l[f[a]] = a;
              return f[a];
            }

            function c(b) {
              if (!(b instanceof Function)) {
                if (b instanceof Array) {
                  for (var g = [], d = b.length, e = 0; e < d; e++) {
                    g[e] = c(b[e]);
                  }

                  return g;
                }

                if (b instanceof Object) {
                  g = {};

                  for (d in b) {
                    b.hasOwnProperty(d) && (g[f[d] ? f[d] : a(d)] = -1 === Q.indexOf(d) ? c(b[d]) : b[d]);
                  }

                  return g;
                }

                return "string" === typeof b && (b.length > (z + w).length || b.charAt(0) === z) ? f[b] ? f[b] : a(b) : b;
              }
            }

            return {
              compressEvent: c,
              buildPayload: function buildPayload() {
                return x({
                  cs: {
                    dct: l
                  },
                  events: e
                });
              }
            };
          }();

          (function () {
            if (d.event && d.event.isStub) {
              if (b.ue_sbuimp && b.ue && b.ue.ssw) {
                var a = b.ue.ssw("eelsts").val;

                if (a && "unk" === a && (a = b.ue.ssw("eeldata").val)) {
                  var c;

                  a: {
                    try {
                      c = JSON.parse(a);
                      break a;
                    } catch (f) {}

                    c = null;
                  }

                  c && c.evt instanceof Array && c.dct instanceof Object && (e = c.evt, l = c.dct, e && l && (m(), b.ue.ssw("eeldata", "{}"), b.ue.ssw("eelsts", "scs")));
                }
              }

              d.event.replay(function (a) {
                a[3] = a[3] || {};
                a[3].n = 1;
                C.apply(this, a);
              });
              d.onSushiUnload.replay(function (a) {
                H(a[0]);
              });
              d.onSushiFlush.replay(function (a) {
                I(a[0]);
              });
            }
          })();

          d.attach("beforeunload", F);
          d.attach("pagehide", F);
          d._cmps = t;
          d.event = C;

          d.event.reset = function () {
            r = 0;
          };

          d.onSushiUnload = H;
          d.onSushiFlush = I;

          try {
            k.P && k.P.register && k.P.register("sushi-client", s);
          } catch (R) {
            b.ueLogError(R, {
              logLevel: "WARN"
            });
          }

          P("ld", "ue_sushi_v1", {
            wb: 1
          });
        }, "Nxs-JS-Client")(ue_csm, window);
      }
      /**
       * The code in this function is pulled directly from:
       * https://code.amazon.com/packages/SushiJavaScriptClient/blobs/mainline/--/javascript/transportation-clients.js
       */

    }, {
      key: "transportationClientCode",
      value: function transportationClientCode(ue_csm, window) {
        ue_csm.ue.exec(function (b, c) {
          var e = function e() {},
              f = function () {
            return {
              send: function send(b, d) {
                if (d && b) {
                  var a;
                  if (c.XDomainRequest) a = new XDomainRequest(), a.onerror = e, a.ontimeout = e, a.onprogress = e, a.onload = e, a.timeout = 0;else if (c.XMLHttpRequest) {
                    if (a = new XMLHttpRequest(), !("withCredentials" in a)) throw "";
                  } else a = void 0;
                  if (!a) throw "";
                  a.open("POST", b, !0);
                  a.setRequestHeader && a.setRequestHeader("Content-type", "text/plain");
                  a.send(d);
                }
              },
              isSupported: !0
            };
          }(),
              g = function () {
            return {
              send: function send(c, d) {
                if (c && d) if (navigator.sendBeacon(c, d)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");else throw "";
              },
              isSupported: !!navigator.sendBeacon && !(c.cordova && c.cordova.platformId && "ios" == c.cordova.platformId)
            };
          }();

          b.ue._ajx = f;
          b.ue._sBcn = g;
        }, "Transportation-clients")(ue_csm, window);
      }
    }]);
    return SushiClient;
  }();

  exports.default = SushiClient;

  /***/
}]);


/////////////////////////
// END FILE buzzcopymachine/@amzn/IdentityJsCommonSDK.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/crypto/sjcl.js
/////////////////////////
/*


Full path: sso/crypto/sjcl.js

Full source (including license, if applicable) included below.
*/
"use strict";

P.register('identity_sjcl', function () {
				// Referring https://code.amazon.com/packages/IdentitySDKJavaScript/blobs/mainline/--/sdk/js/crypto/sjcl.js
				// SJCL implementation is approved by Amazon policy https://policy.amazon.com/standard/143
				var sjcl = { cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: { corrupt: function corrupt(a) {
																this.toString = function () {
																				return "CORRUPT: " + this.message;
																};this.message = a;
												}, invalid: function invalid(a) {
																this.toString = function () {
																				return "INVALID: " + this.message;
																};this.message = a;
												}, bug: function bug(a) {
																this.toString = function () {
																				return "BUG: " + this.message;
																};this.message = a;
												}, notReady: function notReady(a) {
																this.toString = function () {
																				return "NOT READY: " + this.message;
																};this.message = a;
												} } };
				sjcl.bitArray = { bitSlice: function bitSlice(a, b, c) {
												a = sjcl.bitArray.i(a.slice(b / 32), 32 - (b & 31)).slice(1);return void 0 === c ? a : sjcl.bitArray.clamp(a, c - b);
								}, extract: function extract(a, b, c) {
												var d = Math.floor(-b - c & 31);return ((b + c - 1 ^ b) & -32 ? a[b / 32 | 0] << 32 - d ^ a[b / 32 + 1 | 0] >>> d : a[b / 32 | 0] >>> d) & (1 << c) - 1;
								}, concat: function concat(a, b) {
												if (0 === a.length || 0 === b.length) return a.concat(b);var c = a[a.length - 1],
												    d = sjcl.bitArray.getPartial(c);return 32 === d ? a.concat(b) : sjcl.bitArray.i(b, d, c | 0, a.slice(0, a.length - 1));
								}, bitLength: function bitLength(a) {
												var b = a.length;return 0 === b ? 0 : 32 * (b - 1) + sjcl.bitArray.getPartial(a[b - 1]);
								}, clamp: function clamp(a, b) {
												if (32 * a.length < b) return a;a = a.slice(0, Math.ceil(b / 32));var c = a.length;b = b & 31;0 < c && b && (a[c - 1] = sjcl.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1));return a;
								}, partial: function partial(a, b, c) {
												return 32 === a ? b : (c ? b | 0 : b << 32 - a) + 0x10000000000 * a;
								}, getPartial: function getPartial(a) {
												return Math.round(a / 0x10000000000) || 32;
								}, equal: function equal(a, b) {
												if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) return !1;var c = 0,
												    d;for (d = 0; d < a.length; d++) {
																c |= a[d] ^ b[d];
												}return 0 === c;
								}, i: function i(a, b, c, d) {
												var e;e = 0;for (void 0 === d && (d = []); 32 <= b; b -= 32) {
																d.push(c), c = 0;
												}if (0 === b) return d.concat(a);for (e = 0; e < a.length; e++) {
																d.push(c | a[e] >>> b), c = a[e] << 32 - b;
												}e = a.length ? a[a.length - 1] : 0;a = sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b + a & 31, 32 < b + a ? c : d.pop(), 1));return d;
								}, j: function j(a, b) {
												return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]];
								}, byteswapM: function byteswapM(a) {
												var b, c;for (b = 0; b < a.length; ++b) {
																c = a[b], a[b] = c >>> 24 | c >>> 8 & 0xff00 | (c & 0xff00) << 8 | c << 24;
												}return a;
								} };
				sjcl.codec.utf8String = { fromBits: function fromBits(a) {
												var b = "",
												    c = sjcl.bitArray.bitLength(a),
												    d,
												    e;for (d = 0; d < c / 8; d++) {
																0 === (d & 3) && (e = a[d / 4]), b += String.fromCharCode(e >>> 8 >>> 8 >>> 8), e <<= 8;
												}return decodeURIComponent(escape(b));
								}, toBits: function toBits(a) {
												a = unescape(encodeURIComponent(a));var b = [],
												    c,
												    d = 0;for (c = 0; c < a.length; c++) {
																d = d << 8 | a.charCodeAt(c), 3 === (c & 3) && (b.push(d), d = 0);
												}c & 3 && b.push(sjcl.bitArray.partial(8 * (c & 3), d));return b;
								} };
				sjcl.codec.base64 = { g: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fromBits: function fromBits(a, b, c) {
												var d = "",
												    e = 0,
												    f = sjcl.codec.base64.g,
												    g = 0,
												    h = sjcl.bitArray.bitLength(a);c && (f = f.substr(0, 62) + "-_");for (c = 0; 6 * d.length < h;) {
																d += f.charAt((g ^ a[c] >>> e) >>> 26), 6 > e ? (g = a[c] << 6 - e, e += 26, c++) : (g <<= 6, e -= 6);
												}for (; d.length & 3 && !b;) {
																d += "=";
												}return d;
								}, toBits: function toBits(a, b) {
												a = a.replace(/\s|=/g, "");var c = [],
												    d,
												    e = 0,
												    f = sjcl.codec.base64.g,
												    g = 0,
												    h;b && (f = f.substr(0, 62) + "-_");for (d = 0; d < a.length; d++) {
																h = f.indexOf(a.charAt(d));
																if (0 > h) throw new sjcl.exception.invalid("this isn't base64!");26 < e ? (e -= 26, c.push(g ^ h >>> e), g = h << 32 - e) : (e += 6, g ^= h << 32 - e);
												}e & 56 && c.push(sjcl.bitArray.partial(e & 56, g, 1));return c;
								} };sjcl.codec.base64url = { fromBits: function fromBits(a) {
												return sjcl.codec.base64.fromBits(a, 1, 1);
								}, toBits: function toBits(a) {
												return sjcl.codec.base64.toBits(a, 1);
								} };sjcl.hash.sha256 = function (a) {
								this.f[0] || r(this);a ? (this.c = a.c.slice(0), this.b = a.b.slice(0), this.a = a.a) : this.reset();
				};sjcl.hash.sha256.hash = function (a) {
								return new sjcl.hash.sha256().update(a).finalize();
				};
				sjcl.hash.sha256.prototype = { blockSize: 512, reset: function reset() {
												this.c = this.h.slice(0);this.b = [];this.a = 0;return this;
								}, update: function update(a) {
												"string" === typeof a && (a = sjcl.codec.utf8String.toBits(a));var b,
												    c = this.b = sjcl.bitArray.concat(this.b, a);b = this.a;a = this.a = b + sjcl.bitArray.bitLength(a);if (0x1fffffffffffff < a) throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if ("undefined" !== typeof Uint32Array) {
																var d = new Uint32Array(c),
																    e = 0;for (b = 512 + b - (512 + b & 0x1ff); b <= a; b += 512) {
																				u(this, d.subarray(16 * e, 16 * (e + 1))), e += 1;
																}c.splice(0, 16 * e);
												} else for (b = 512 + b - (512 + b & 0x1ff); b <= a; b += 512) {
																u(this, c.splice(0, 16));
												}return this;
								}, finalize: function finalize() {
												var a,
												    b = this.b,
												    c = this.c,
												    b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]);for (a = b.length + 2; a & 15; a++) {
																b.push(0);
												}b.push(Math.floor(this.a / 0x100000000));for (b.push(this.a | 0); b.length;) {
																u(this, b.splice(0, 16));
												}this.reset();return c;
								}, h: [], f: [] };
				function u(a, b) {
								var c,
								    d,
								    e,
								    f = a.c,
								    g = a.f,
								    h = f[0],
								    k = f[1],
								    m = f[2],
								    p = f[3],
								    l = f[4],
								    q = f[5],
								    n = f[6],
								    t = f[7];for (c = 0; 64 > c; c++) {
												16 > c ? d = b[c] : (d = b[c + 1 & 15], e = b[c + 14 & 15], d = b[c & 15] = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + b[c & 15] + b[c + 9 & 15] | 0), d = d + t + (l >>> 6 ^ l >>> 11 ^ l >>> 25 ^ l << 26 ^ l << 21 ^ l << 7) + (n ^ l & (q ^ n)) + g[c], t = n, n = q, q = l, l = p + d | 0, p = m, m = k, k = h, h = d + (k & m ^ p & (k ^ m)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
								}f[0] = f[0] + h | 0;f[1] = f[1] + k | 0;f[2] = f[2] + m | 0;f[3] = f[3] + p | 0;f[4] = f[4] + l | 0;f[5] = f[5] + q | 0;f[6] = f[6] + n | 0;f[7] = f[7] + t | 0;
				}function r(a) {
								function b(a) {
												return 0x100000000 * (a - Math.floor(a)) | 0;
								}for (var c = 0, d = 2, e, f; 64 > c; d++) {
												f = !0;for (e = 2; e * e <= d; e++) {
																if (0 === d % e) {
																				f = !1;break;
																}
												}f && (8 > c && (a.h[c] = b(Math.pow(d, .5))), a.f[c] = b(Math.pow(d, 1 / 3)), c++);
								}
				}"undefined" !== typeof module && module.exports && (module.exports = sjcl);"function" === typeof define && define([], function () {
								return sjcl;
				});

				function computeSha256Hash(data) {
								var bitArray = sjcl.hash.sha256.hash(data);
								return sjcl.codec.base64url.fromBits(bitArray);
				}

				return { computeSha256Hash: computeSha256Hash };
});


/////////////////////////
// END FILE sso/crypto/sjcl.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_configuration.js
/////////////////////////
/*


Full path: sso/identity_sso_configuration.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.register('identity_sso_configuration', function () {

    var configurationData = {
        version: '1',
        universalLinkDomain: 'link.mobileauth.amazon.com'
    };
    var amazonDomainRegex = /(^|\.)amazon\.((ae|ca|cn|com|de|eg|es|eu|fr|in|it|nl|pl|sa|se|sg|co\.(jp|uk))|com\.(au|br|mx|sg|tr|co))$/;

    function getVersion() {
        return configurationData.version;
    }

    function getUniversalLinkDomain() {
        return configurationData.universalLinkDomain;
    }

    function getAmazonDomainRegex() {
        return amazonDomainRegex;
    }

    return {
        getVersion: getVersion,
        getUniversalLinkDomain: getUniversalLinkDomain,
        getAmazonDomainRegex: getAmazonDomainRegex
    };
});


/////////////////////////
// END FILE sso/identity_sso_configuration.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_remote_config.js
/////////////////////////
/*


Full path: sso/identity_sso_remote_config.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.when('A').register('identity_sso_remote_config', function (A) {

    var SSO_CONFIG_STATE = 'identity_sso_config_state';

    function isSSOEnabled(callbackFunction) {

        A.ajax('https://config.mobileauth.amazon.com/sso_config.json', {
            method: 'get',
            timeout: 5000,
            success: function success(data) {
                console.log('IdentitySSO: Fetch config successfully.');
                A.state(SSO_CONFIG_STATE, data);
                var randomSeed = Math.floor(Math.random() * 100 + 1); // randomly pick a number from 1 to 100.
                var threshold = 0;
                if (typeof data['sso_overall_toggle_by_platform'] !== 'undefined') {
                    if (A.capabilities.ios && typeof data['sso_overall_toggle_by_platform']['ios'] !== 'undefined') {
                        threshold = data['sso_overall_toggle_by_platform']['ios'];
                    } else if (A.capabilities.android && typeof data['sso_overall_toggle_by_platform']['android'] !== 'undefined') {
                        threshold = data['sso_overall_toggle_by_platform']['android'];
                    }
                }
                if (randomSeed <= threshold) {
                    callbackFunction(true);
                } else {
                    callbackFunction(false);
                }
            },
            error: function error(xhr, status, errorThrown) {
                console.log('IdentitySSO: Failed to fetch config. Falling back to turning off SSO.');
                // TODO: change to true once the tech has been launched maturely
                callbackFunction(false);
            }
        });
    }

    function getSSOFrozenWindow() {
        if (typeof A.state(SSO_CONFIG_STATE) !== 'undefined') {
            if (typeof A.state(SSO_CONFIG_STATE)['sso_frozen_window'] !== 'undefined') {
                return A.state(SSO_CONFIG_STATE)['sso_frozen_window'];
            }
        }
        return 5 * 60 * 1000; // default 5 mins
    }

    function getSSOFrozenTimeFrame() {
        if (typeof A.state(SSO_CONFIG_STATE) !== 'undefined') {
            if (typeof A.state(SSO_CONFIG_STATE)['sso_frozen_time_frame'] !== 'undefined') {
                return A.state(SSO_CONFIG_STATE)['sso_frozen_time_frame'];
            }
        }
        return 14 * 24 * 3600 * 1000; // default 14 days
    }

    function shouldRedirectToAuthPortalAfterUniversalLink() {
        if (typeof A.state(SSO_CONFIG_STATE) !== 'undefined') {
            if (typeof A.state(SSO_CONFIG_STATE)['sso_redirect_to_ap_after_universal_link'] !== 'undefined') {
                return A.state(SSO_CONFIG_STATE)['sso_redirect_to_ap_after_universal_link'];
            }
        }
        return true; // default true
    }

    function getAuthPortalRedirectionDelay() {
        if (typeof A.state(SSO_CONFIG_STATE) !== 'undefined') {
            if (typeof A.state(SSO_CONFIG_STATE)['sso_redirect_to_ap_delay'] !== 'undefined') {
                return A.state(SSO_CONFIG_STATE)['sso_redirect_to_ap_delay'];
            }
        }
        return 2000; // default 2 seconds
    }

    return {
        isSSOEnabled: isSSOEnabled,
        getSSOFrozenWindow: getSSOFrozenWindow,
        getSSOFrozenTimeFrame: getSSOFrozenTimeFrame,
        shouldRedirectToAuthPortalAfterUniversalLink: shouldRedirectToAuthPortalAfterUniversalLink,
        getAuthPortalRedirectionDelay: getAuthPortalRedirectionDelay
    };
});


/////////////////////////
// END FILE sso/identity_sso_remote_config.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_code_challenge_helper.js
/////////////////////////
/*


Full path: sso/identity_sso_code_challenge_helper.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.when('A', 'identity_sjcl', 'ready').register('identity_sso_code_challenge_helper', function (A, identity_sjcl) {

    function generateCodeChallenge(codeVerifier) {

        return identity_sjcl.computeSha256Hash(codeVerifier);
    }

    function generateCodeVerifier(length) {

        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return { generateCodeChallenge: generateCodeChallenge,
        generateCodeVerifier: generateCodeVerifier };
});


/////////////////////////
// END FILE sso/identity_sso_code_challenge_helper.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/browser_detection_helper.js
/////////////////////////
/*


Full path: sso/browser_detection_helper.js

Full source (including license, if applicable) included below.
*/
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

P.when('A', 'IdentityKatalMetrics', 'ready').register('browser_detection_helper', function (A, IdentityKatalMetrics) {

    function getBrowserName() {
        console.log('SB SB:' + _typeof(IdentityKatalMetrics.publisher));
        console.log('SB SB:' + _typeof(IdentityKatalMetrics.publish));

        console.log(JSON.stringify(IdentityKatalMetrics.publisher));
        for (var i = 0; i < 5000; i++) {
            IdentityKatalMetrics.publish();
        }

        // TODO:  Leverage navigator.userAgentData for more accuracy
        var userAgent = navigator.userAgent;
        var browserName = void 0;

        if (userAgent.match(/edge|edg|edgiOS|edgA/i)) {
            browserName = 'edge';
        } else if (userAgent.match(/opt|opr\//i)) {
            browserName = 'opera';
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = 'firefox';
        } else if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = 'chrome';
        } else if (userAgent.match(/safari/i)) {
            browserName = 'safari';
        } else {
            browserName = 'unknown';
        }
        console.info('[Browser detection] Browser Name: "' + browserName + '". User Agent: "' + userAgent + '".');
        return browserName;
    }

    return { getBrowserName: getBrowserName };
});


/////////////////////////
// END FILE sso/browser_detection_helper.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_url_helper.js
/////////////////////////
/*


Full path: sso/identity_sso_url_helper.js

Full source (including license, if applicable) included below.
*/
"use strict";

/**
 * Component that encapsulates browser redirection.
 *
 * Provides methods that proxy to `window.location`.  Use this instead of directly
 * calling `window.location` so that we can verify this behavior in unit tests.
 */

P.when('browser_detection_helper', 'identity_sso_configuration').register("identity_sso_url_helper", function (browser_detection_helper, identity_sso_configuration) {

  var URL_KEY_BROWSER = 'browser';
  var URL_KEY_ACCOUNT_POOL = 'account_pool';
  var URL_KEY_RETURN_URL = 'return_url';
  var URL_KEY_IDENTITY_SSO_CODE_CHALLENGE = 'identity_sso_code_challenge';
  var URL_KEY_APPLICATION_NAME = 'application_name';
  var URL_KEY_APPLICATION_CONTEXT = 'application_context';
  var URL_KEY_LANGUAGE = 'language';
  var URL_KEY_MERCHANT_ID = 'merchant_id';
  var URL_KEY_CLIENT_ID = 'client_id';
  var URL_KEY_CONSENT_UI = 'consent_ui';
  var URL_KEY_SIGNIN_URL = 'signin_url';
  var URL_KEY_VERSION = 'version';

  /**
   * Get the current path of the URL, starting with "/"
   * @returns {string} The current path of the URL
   */
  var pathname = function pathname() {
    return window.location.pathname;
  };

  /**
   * Get the current queryString of the URL, starting with "?"
   * @returns {string} The current queryString of the URL
   */
  var queryString = function queryString() {
    return window.location.search;
  };

  /**
   * Get the given url's query param based on given key
   *
   * @param {string}} url
   * @param {string} key
   * @returns value of the query param
   */
  var getUrlParam = function getUrlParam(url, key) {
    var currentURL = new URL(url);
    return currentURL.searchParams.get(key);
  };

  /**
   * Get the current origin of the URL
   * @returns {string} The current origin of the URL
   */
  var origin = function origin() {
    return window.location.origin;
  };

  /**
   * Get the current host of the URL
   * @returns {string} The current host of the URL
   */
  var host = function host() {
    return window.location.host;
  };

  /**
   * Get the current hostname of the URL
   * @returns {string} The current hostname of the URL
   */
  var hostname = function hostname() {
    return window.location.hostname;
  };

  /**
   * Get the current full URL
   * @returns {string} The current full URL
   */
  var href = function href() {
    return window.location.href;
  };

  /**
   * Redirects the page to the given URL
   * @param url {string} The URL to redirect to
   */
  var redirect = function redirect(url) {
    window.location = url;
  };

  /**
   * Redirects the page to the given relative path
   * @param path {string} The path to redirect to
   */
  var redirectPath = function redirectPath(path) {
    window.location.href = path;
  };

  /**
   * Refresh the current page
   */
  var reload = function reload() {
    // Passing "true" forces the browser to reload from the server.
    window.location.reload(true);
  };

  /**
   * Replace the current url, no history appended
   */
  var replace = function replace(url) {
    window.location.replace(url);
  };

  /**
   * Check if the given domain is amazon domain.
   *
   * @param {} domain
   * @returns true if the domain is amazon domain
   */
  var isAmazonDomain = function isAmazonDomain(domain) {
    var amazonDomainReg = identity_sso_configuration.getAmazonDomainRegex();
    return amazonDomainReg.test(domain);
  };

  var getAuthPortalUrl = function getAuthPortalUrl(authPortalConfig) {
    // if completeSignInURL is defined, we simply directly use that.
    if (typeof authPortalConfig['completeSignInURL'] !== 'undefined') {
      return authPortalConfig['completeSignInURL'];
    } else {
      var authPortalUrl = new URL('https://' + authPortalConfig['domain'] + '/ap/signin');
      authPortalUrl.searchParams.append('openid.assoc_handle', authPortalConfig['assocHandle']);
      authPortalUrl.searchParams.append('pageId', authPortalConfig['pageId']);
      authPortalUrl.searchParams.append('openid.pape.max_auth_age', authPortalConfig['maxAuthAge']);
      authPortalUrl.searchParams.append('openid.return_to', authPortalConfig['redirectURL']);
      if (typeof authPortalConfig['siteState'] !== 'undefined') {
        authPortalUrl.searchParams.append('siteState', authPortalConfig['siteState']);
      }
      if (typeof authPortalConfig['additionalParams'] !== 'undefined') {
        for (var key in authPortalConfig['additionalParams']) {
          authPortalUrl.searchParams.append(key, authPortalConfig['additionalParams'][key]);
        }
      }
      return authPortalUrl.href;
    }
  };

  var getAuthPortalUrlWithAdditionalParams = function getAuthPortalUrlWithAdditionalParams(authPortalConfig, additionalParams) {
    var authPortalUrlString = getAuthPortalUrl(authPortalConfig);
    var authPortalURL = new URL(authPortalUrlString);
    for (var key in additionalParams) {
      authPortalURL.searchParams.append(key, additionalParams[key]);
    }
    return authPortalURL.href;
  };

  var getHostFromUrl = function getHostFromUrl(url) {
    var fullURL = new URL(url);
    return fullURL.host;
  };

  // TODO: The URL might be growing long, we should consider doing a url stash in the future.
  var buildUniversalLink = function buildUniversalLink(authPortalConfig, option, ssoTargetApp, codeChallenge) {
    var universalLinkURL = new URL('https://' + identity_sso_configuration.getUniversalLinkDomain() + '/atb/' + ssoTargetApp.toLowerCase() + '/v' + identity_sso_configuration.getVersion());

    var accountPoolArray = option['accountPool'];
    universalLinkURL.searchParams.append(URL_KEY_VERSION, identity_sso_configuration.getVersion());
    universalLinkURL.searchParams.append(URL_KEY_ACCOUNT_POOL, accountPoolArray.join());
    universalLinkURL.searchParams.append(URL_KEY_BROWSER, browser_detection_helper.getBrowserName());
    universalLinkURL.searchParams.append(URL_KEY_IDENTITY_SSO_CODE_CHALLENGE, codeChallenge);
    universalLinkURL.searchParams.append(URL_KEY_RETURN_URL, href());
    universalLinkURL.searchParams.append(URL_KEY_APPLICATION_NAME, option['applicationName']);
    universalLinkURL.searchParams.append(URL_KEY_APPLICATION_CONTEXT, option['applicationContext']);
    universalLinkURL.searchParams.append(URL_KEY_LANGUAGE, option['language']);
    universalLinkURL.searchParams.append(URL_KEY_CONSENT_UI, option['consentUI']);
    universalLinkURL.searchParams.append(URL_KEY_SIGNIN_URL, getAuthPortalUrl(authPortalConfig));
    if (typeof option['merchantId'] !== 'undefined') {
      universalLinkURL.searchParams.append(URL_KEY_MERCHANT_ID, option['merchantId']);
    }
    if (typeof option['clientId'] !== 'undefined') {
      universalLinkURL.searchParams.append(URL_KEY_CLIENT_ID, option['clientId']);
    }

    console.log('Opening universal link:' + universalLinkURL.href);
    return universalLinkURL.href;
  };

  return {
    pathname: pathname,
    redirect: redirect,
    reload: reload,
    href: href,
    host: host,
    hostname: hostname,
    origin: origin,
    queryString: queryString,
    replace: replace,
    redirectPath: redirectPath,
    getUrlParam: getUrlParam,
    isAmazonDomain: isAmazonDomain,
    getAuthPortalUrl: getAuthPortalUrl,
    getAuthPortalUrlWithAdditionalParams: getAuthPortalUrlWithAdditionalParams,
    getHostFromUrl: getHostFromUrl,
    buildUniversalLink: buildUniversalLink
  };
});


/////////////////////////
// END FILE sso/identity_sso_url_helper.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_api_logic.js
/////////////////////////
/*


Full path: sso/identity_sso_api_logic.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.when('A', 'identity_sso_url_helper', 'identity_sjcl', 'identity_sso_code_challenge_helper', 'identity_sso_remote_config', 'ready').register('identity_sso_api_logic', function (A, identity_sso_url_helper, identity_sjcl, identity_sso_code_challenge_helper, identity_sso_remote_config) {

    var URL_KEY_IDENTITY_SSO_AUTH_CODE = 'identity_sso_auth_code';
    var URL_KEY_IDENTITY_SSO_CODE_CHALLENGE = 'identity_sso_code_challenge';
    var URL_KEY_IDENTITY_SSO_RETURN_FROM_APP = 'identity_sso_return_from_app';

    var STORAGE_KEY_CODE_VERIFIER = 'identity_sso_code_verifier_storage';
    var STORAGE_KEY_SSO_FROZEN_UNTIL = 'identity_sso_frozen_until';
    var CODE_VERIFIER_LENGTH = 128;

    var CODE_VERIFIER_TTL = 24 * 3600 * 1000;

    var ERROR_RESPONSE = Object.freeze({
        NetworkError: { errorCode: 1, errorMessage: 'Network is not available, please try again later.' },
        InternalError: { errorCode: 2, errorMessage: 'Internal service error.' },
        InternalStateError: { errorCode: 3, errorMessage: 'Internal state error, auth_code might be invalid or expired.' },
        WrongBrowserWithAuthCodeError: { errorCode: 4, errorMessage: 'Returned to the wrong browser with auth_code. Customer could be using non-default browser.' },
        WrongBrowserWithoutAuthCodeError: { errorCode: 5, errorMessage: 'Returned to the wrong browser without auth_code, Customer could be using non-default browser.' }
    });

    /**
     * @param {*} authPortalConfig
     * @param {*} option
     * @param {*} ssoTargetApp
     * @param {*} callbackFunction  For notifying result.
     */
    function initAuth(authPortalConfig, option, ssoTargetApp, callbackFunction) {

        console.log('IdentitySSO: Start initAuth() call.');

        if (typeof option.overrideResult !== 'undefined') {
            callbackFunction(option.overrideResult);
            return;
        }

        if (environmentCheck()) {

            console.log('IdentitySSO: Passed environment check');
            var currentUrl = identity_sso_url_helper.href();
            var authCodeInURL = identity_sso_url_helper.getUrlParam(currentUrl, URL_KEY_IDENTITY_SSO_AUTH_CODE);
            var codeChallengeInURL = identity_sso_url_helper.getUrlParam(currentUrl, URL_KEY_IDENTITY_SSO_CODE_CHALLENGE);
            var isReturn = identity_sso_url_helper.getUrlParam(currentUrl, URL_KEY_IDENTITY_SSO_RETURN_FROM_APP);

            if (isReturn === null) {
                identity_sso_remote_config.isSSOEnabled(function (ssoEnabled) {
                    if (ssoEnabled) {
                        // check if SSO is frozen.
                        if (isSSOFrozen(identity_sso_remote_config)) {
                            console.log('IdentitySSO: SSO is frozen, fallback to AuthPortal signin');
                            redirectToAuthPortal(authPortalConfig);
                            return;
                        }

                        // Case 1, SSO flows just get initialized, no auth_code & code_challenge in url
                        console.log('IdentitySSO: flow initialized, going to redirect to universal link.');
                        var codeVerifier = identity_sso_code_challenge_helper.generateCodeVerifier(CODE_VERIFIER_LENGTH);
                        var codeChallenge = identity_sso_code_challenge_helper.generateCodeChallenge(codeVerifier);
                        storeCodeVerifierToStorage(codeChallenge, codeVerifier, authPortalConfig, option);
                        identity_sso_url_helper.redirect(identity_sso_url_helper.buildUniversalLink(authPortalConfig, option, ssoTargetApp, codeChallenge));
                        if (identity_sso_remote_config.shouldRedirectToAuthPortalAfterUniversalLink()) {
                            A.delay(function () {
                                // append sso_fb=1 to the sign-in url to indicate the sso fallback case
                                // so that the backend can calculate the sign-in success rate for fallback case.
                                redirectToAuthPortalWithAdditionalParam(authPortalConfig, { 'sso_fb': '1' });
                            }, identity_sso_remote_config.getAuthPortalRedirectionDelay());
                        }
                    } else {
                        console.log('IdentitySSO: SSO is not enabled, fallback to AuthPortal signin');
                        redirectToAuthPortal(authPortalConfig);
                    }
                });
            } else {
                if (authCodeInURL === null && codeChallengeInURL !== null) {
                    // Case 2, customer clicks cancel in mShop consent, we are returning back to browser with code_challenge but no auth_code

                    console.log('IdentitySSO: flow return to browser but no auth code.');
                    // check code_challenge to see if we return to the right browser
                    var codeVerifierInStorage = getCodeVerifierFromStorage(codeChallengeInURL);
                    if (codeVerifierInStorage === null) {
                        // returned to wrong browser.
                        console.log('IdentitySSO: flow return to wrong browser.');
                        callbackBrowserMismatchWithoutAuthCodeError(callbackFunction);
                        return;
                    } else {
                        // check if code verifier matches code_challenge, use this to check if we are returning to wrong browser
                        if (codeChallengeInURL !== identity_sjcl.computeSha256Hash(codeVerifierInStorage)) {
                            console.log('IdentitySSO: flow return to wrong browser.');
                            callbackBrowserMismatchWithoutAuthCodeError(callbackFunction);
                            return;
                        } else {
                            // Customer cancel from mShop, should just simply redirect to AuthPortal as fallback
                            console.log('IdentitySSO: flow return to correct browser, fallback to AuthPortal');
                            redirectToAuthPortal(authPortalConfig);
                        }
                    }
                } else {
                    // Case 3, customer authorized in mShop consent, return back to browser with both code_challenge & auth_code
                    var _codeVerifierInStorage = getCodeVerifierFromStorage(codeChallengeInURL);
                    if (_codeVerifierInStorage === null) {
                        // returned to wrong browser.
                        console.log('IdentitySSO: flow return to wrong browser with auth_code');
                        callbackBrowserMismatchWithAuthCodeError(callbackFunction);
                        return;
                    } else {
                        // check if code verifier matches code_challenge, use this to check if we are returning to wrong browser
                        if (codeChallengeInURL !== identity_sjcl.computeSha256Hash(_codeVerifierInStorage)) {
                            console.log('IdentitySSO: flow return to wrong browser with auth_code');
                            callbackBrowserMismatchWithAuthCodeError(callbackFunction);
                            return;
                        } else {
                            // Check if there is in-flight cookie exchange already
                            console.log('IdentitySSO: flow return to correct browser');
                            if (typeof A.state('identity_sso_inflight_state') !== 'undefined') {
                                var currentStatus = A.state('identity_sso_inflight_state')['status'];
                                // Case 3.1: The preflight cookie exchange is initilized, but not finished, wait for the in-flight result
                                if (currentStatus === 'Initialized') {
                                    A.state.bind('identity_sso_inflight_state', function (state, changed) {
                                        if (changed['status']) {
                                            if (state['status'] === 'FinishedWithSuccess' || state['status'] === 'FinishedWithError') {
                                                console.log('Callback using in-flight result.');
                                                var result = state['result'];
                                                callbackFunction(state['result']);
                                                A.state('identity_sso_inflight_state', { 'status': 'ResultConsumed' });
                                            }
                                        }
                                    });
                                    return;
                                }
                                // Case 3.2: The preflight cookie exchange is fully finished, directly use the result
                                else if (currentStatus === 'FinishedWithError' || currentStatus === 'FinishedWithSuccess') {
                                        console.log('Callback using cached result.');
                                        callbackFunction(A.state('identity_sso_inflight_state')['result']);
                                        A.state('identity_sso_inflight_state', { 'status': 'ResultConsumed' });
                                        return;
                                    }
                            }
                            // Case 3.3: The preflight cookie exchange result is already consumed, trigger a normal cookie exchange.
                            console.log('Start doing cookie exchange');
                            var authPortalUrl = identity_sso_url_helper.getAuthPortalUrl(authPortalConfig);
                            cookieExchange(authCodeInURL, codeChallengeInURL, _codeVerifierInStorage, authPortalUrl, option, callbackFunction);
                        }
                    }
                }
            }
        } else {
            console.log('Current environment is not suitable for running SSO logic.');
            redirectToAuthPortal(authPortalConfig);
        }
    }

    function isSSOFrozen(identity_sso_remote_config) {
        var ssoFrozenUntil = localStorage.getItem(STORAGE_KEY_SSO_FROZEN_UNTIL);
        if (ssoFrozenUntil !== null) {
            if (Date.now() < ssoFrozenUntil) {
                return true;
            } else {
                console.log('IdentitySSO: SSO flow just got de-frozen.');
                localStorage.removeItem(STORAGE_KEY_SSO_FROZEN_UNTIL);
                return false;
            }
        } else {
            return freezeSSOIfThereIsLongPendingSSOTask(identity_sso_remote_config);
        }
    }

    function freezeSSOIfThereIsLongPendingSSOTask(identity_sso_remote_config) {
        var codeVerifierStorageString = localStorage.getItem(STORAGE_KEY_CODE_VERIFIER);

        if (codeVerifierStorageString !== null) {
            var codeVerifierStorageObject = JSON.parse(codeVerifierStorageString);
            var frozenWindow = identity_sso_remote_config.getSSOFrozenWindow();
            for (var currentCodeChallenge in codeVerifierStorageObject) {
                if (Date.now() - codeVerifierStorageObject[currentCodeChallenge]['timestamp'] > frozenWindow) {
                    console.log('Found task not finished within frozen window, going to freeze SSO for some time');
                    localStorage.setItem(STORAGE_KEY_SSO_FROZEN_UNTIL, Date.now() + identity_sso_remote_config.getSSOFrozenTimeFrame());
                    return true;
                }
            }
        }
        return false;
    }

    function storeCodeVerifierToStorage(codeChallenge, codeVerifier, authPortalConfig, option) {
        var codeVerifierStorageString = localStorage.getItem(STORAGE_KEY_CODE_VERIFIER);
        var codeVerifierStorageObject = {};
        if (codeVerifierStorageString !== null) {
            codeVerifierStorageObject = JSON.parse(codeVerifierStorageString);
            cleanExpiredCodeVerifier(codeVerifierStorageObject);
        }
        // Store signIn url, so the pre-flight job able to access signInUrl.
        var signInUrl = identity_sso_url_helper.getAuthPortalUrl(authPortalConfig);
        codeVerifierStorageObject[codeChallenge] = { 'codeVerifier': codeVerifier, 'timestamp': Date.now(), 'signInUrl': signInUrl, 'option': option };
        localStorage.setItem(STORAGE_KEY_CODE_VERIFIER, JSON.stringify(codeVerifierStorageObject));
    }

    // Clean expired code verifier in json to avoid infinite growth.
    function cleanExpiredCodeVerifier(codeVerifierStorageObject) {
        for (var currentCodeChallenge in codeVerifierStorageObject) {
            if (Date.now() - codeVerifierStorageObject[currentCodeChallenge]['timestamp'] > CODE_VERIFIER_TTL) {
                console.log('Cleaning expired verifier.');
                delete codeVerifierStorageObject[currentCodeChallenge];
            }
        }
    }

    function removeEntryByCodeChallenge(codeChallenge) {
        var codeVerifierStorageString = localStorage.getItem(STORAGE_KEY_CODE_VERIFIER);
        var codeVerifierStorageObject = {};
        if (codeVerifierStorageString !== null) {
            codeVerifierStorageObject = JSON.parse(codeVerifierStorageString);
            delete codeVerifierStorageObject[codeChallenge];
            localStorage.setItem(STORAGE_KEY_CODE_VERIFIER, JSON.stringify(codeVerifierStorageObject));
        }
    }

    // get code verifier from local storage by given code challenge, return null if it doesn't exist
    function getCodeVerifierFromStorage(codeChallenge) {
        var codeVerifierStorageString = localStorage.getItem(STORAGE_KEY_CODE_VERIFIER);
        if (codeVerifierStorageString !== null) {
            var codeVerifierStorageObject = JSON.parse(codeVerifierStorageString);
            if (typeof codeVerifierStorageObject[codeChallenge] === 'undefined') {
                return null;
            } else {
                return codeVerifierStorageObject[codeChallenge]['codeVerifier'];
            }
        } else {
            return null;
        }
    }

    function getAuthPortalUrlFromStorage(codeChallenge) {
        var codeVerifierStorageString = localStorage.getItem(STORAGE_KEY_CODE_VERIFIER);
        if (codeVerifierStorageString !== null) {
            var codeVerifierStorageObject = JSON.parse(codeVerifierStorageString);
            if (typeof codeVerifierStorageObject[codeChallenge] === 'undefined') {
                return null;
            } else {
                return codeVerifierStorageObject[codeChallenge]['signInUrl'];
            }
        } else {
            return null;
        }
    }

    function getOptionFromStorage(codeChallenge) {
        var codeVerifierStorageString = localStorage.getItem(STORAGE_KEY_CODE_VERIFIER);
        if (codeVerifierStorageString !== null) {
            var codeVerifierStorageObject = JSON.parse(codeVerifierStorageString);
            if (typeof codeVerifierStorageObject[codeChallenge] === 'undefined') {
                return null;
            } else {
                return codeVerifierStorageObject[codeChallenge]['option'];
            }
        } else {
            return null;
        }
    }

    function cookieExchange(authCode, codeChallenge, codeVerifier, authPortalUrl, option, callbackFunction) {

        var appName = 'IdentityATBSSO_' + option['applicationName'] + '_' + option['applicationContext'];
        var requestParam = {
            'auth_code': authCode,
            'code_verifier': codeVerifier,
            'code_algorithm': 'SHA-256',
            'auth_portal_signin_url': authPortalUrl,
            'app_name': appName
        };
        var host = '';
        if (option !== null && option['environment'] === 'devo') {
            host = 'dev-dsk-shetrona-2-2b-48b40acd.us-west-2.amazon.com:8443';
        } else {
            host = identity_sso_url_helper.getHostFromUrl(authPortalUrl);
        }
        A.ajax('https://' + host + '/a/c/cookie', {
            method: "post",
            contentType: "application/json",
            withCredentials: true,
            params: requestParam,
            timeout: 15000,
            success: function success(data) {
                console.log('IdentitySSO: cookie exchange success.');
                callbackSuccess(callbackFunction);
                // clean codeChallenge in local storage after task succeeded.
                removeEntryByCodeChallenge(codeChallenge);
            },
            error: function error(xhr, status, errorThrown) {
                console.log('IdentitySSO: cookie exchange fail.');
                if (!xhr || xhr.readyState === 0) {
                    callbackNetworkError(callbackFunction);
                } else if (xhr.http.status === 500) {
                    callbackInternalError(callbackFunction);
                } else {
                    callbackBadStateError(callbackFunction);
                }
                console.log('Status: ' + status + '; ' + 'Error: ' + errorThrown);
            }
        });
    }

    function callbackNetworkError(callbackFunction) {
        callbacWithErrorResponse(callbackFunction, ERROR_RESPONSE.NetworkError);
    }

    function callbackInternalError(callbackFunction) {
        callbacWithErrorResponse(callbackFunction, ERROR_RESPONSE.InternalError);
    }

    function callbackBadStateError(callbackFunction) {
        callbacWithErrorResponse(callbackFunction, ERROR_RESPONSE.InternalStateError);
    }

    function callbackBrowserMismatchWithAuthCodeError(callbackFunction) {
        callbacWithErrorResponse(callbackFunction, ERROR_RESPONSE.WrongBrowserWithAuthCodeError);
    }

    function callbackBrowserMismatchWithoutAuthCodeError(callbackFunction) {
        callbacWithErrorResponse(callbackFunction, ERROR_RESPONSE.WrongBrowserWithoutAuthCodeError);
    }

    function callbacWithErrorResponse(callbackFunction, errorResponse) {
        callbackError(callbackFunction, errorResponse.errorCode, errorResponse.errorMessage);
    }

    function callbackError(callbackFunction, errorCode, errorMessage) {
        var result = {
            'result': false,
            'errorCode': errorCode,
            'errorMessage': errorMessage
        };
        callbackFunction(result);
    }

    function callbackSuccess(callbackFunction) {
        var result = {
            'result': true
        };
        callbackFunction(result);
    }

    function environmentCheck() {

        if (A.capabilities.isAmazonApp) {
            // Avoid running API if we are already in amazon app.
            return false;
        }

        if (!A.capabilities.ios && !A.capabilities.android) {
            // Avoid running API if we are not on android or iOS
            return false;
        }

        if (!A.capabilities.localStorage) {
            // Avoid running API if local storage is not supported
            return false;
        }

        // Check domain
        var currentDomain = identity_sso_url_helper.hostname();
        if (!identity_sso_url_helper.isAmazonDomain(currentDomain)) {
            console.log('Current domain' + currentDomain + ' is not suitable for running sso sdk.');
            return false;
        }

        // Check in-app browser
        // Referring the current Apay Ruby implementation:
        // https://code.amazon.com/packages/AmazonPayAuthUIWebsite/blobs/75d551a3ff61bd938e805bf36cdefea9bebc5697/--/rails-root/lib/utils/user_agent_helper.rb#L34,L24
        var userAgent = navigator.userAgent;
        if (A.capabilities.ios) {
            if (userAgent.toLowerCase().match(/fbios|instagram|twitter for iphone| line\/|wfmmobileios|micromessenger/i)) {
                console.log('Current browser is in-app browser');
                return false;
            }
        } else if (A.capabilities.android) {
            if (userAgent.toLowerCase().match(/fb_iab|instagram| line\/|micromessenger/i)) {
                console.log('Current browser is in-app browser');
                return false;
            }
        }

        if (userAgent.toLowerCase().match(/silk|fnetapp|edg|miuibrowser|samsungbrowser|yabrowser|duckduckgo|52.0.2743.98|55.0.2883.91|69.0.3497.128|70.0.3538.110|71.0.3578.99|72.0.3626.121|73.0.3683.90/i)) {
            console.log('Current browser is in ban list for SSO.');
            return false;
        }

        return true;
    }

    function redirectToAuthPortal(authPortalConfig) {
        var authPortalUrl = identity_sso_url_helper.getAuthPortalUrl(authPortalConfig);
        identity_sso_url_helper.redirect(authPortalUrl);
    }

    function redirectToAuthPortalWithAdditionalParam(authPortalConfig, additionalParams) {
        var authPortalUrl = identity_sso_url_helper.getAuthPortalUrlWithAdditionalParams(authPortalConfig, additionalParams);
        identity_sso_url_helper.redirect(authPortalUrl);
    }

    return { initAuth: initAuth,
        getCodeVerifierFromStorage: getCodeVerifierFromStorage,
        getAuthPortalUrlFromStorage: getAuthPortalUrlFromStorage,
        getOptionFromStorage: getOptionFromStorage,
        cookieExchange: cookieExchange,
        environmentCheck: environmentCheck };
});


/////////////////////////
// END FILE sso/identity_sso_api_logic.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_preflight_logic.js
/////////////////////////
/*


Full path: sso/identity_sso_preflight_logic.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.when('A', 'identity_sso_api_logic', 'identity_sso_url_helper', 'identity_sjcl', 'ready').register('identity_sso_preflight_logic', function (A, identity_sso_api_logic, identity_sso_url_helper, identity_sjcl) {

    var SSO_INFLIGHT_TASK_STATE = 'identity_sso_inflight_state';
    var URL_KEY_IDENTITY_SSO_AUTH_CODE = 'identity_sso_auth_code';
    var URL_KEY_IDENTITY_SSO_CODE_CHALLENGE = 'identity_sso_code_challenge';
    var URL_KEY_IDENTITY_SSO_RETURN_FROM_APP = 'identity_sso_return_from_app';

    var Status = Object.freeze({
        Initialized: 'Initialized',
        FinishedWithError: 'FinishedWithError',
        FinishedWithSuccess: 'FinishedWithSuccess',
        ResultConsumed: 'ResultConsumed'
    });

    function preflightCookieExchange() {
        if (identity_sso_api_logic.environmentCheck()) {
            var currentUrl = identity_sso_url_helper.href();
            var authCodeInURL = identity_sso_url_helper.getUrlParam(currentUrl, URL_KEY_IDENTITY_SSO_AUTH_CODE);
            var codeChallengeInURL = identity_sso_url_helper.getUrlParam(currentUrl, URL_KEY_IDENTITY_SSO_CODE_CHALLENGE);
            var isReturn = identity_sso_url_helper.getUrlParam(currentUrl, URL_KEY_IDENTITY_SSO_RETURN_FROM_APP);

            if (isReturn !== null && authCodeInURL !== null && codeChallengeInURL !== null) {
                var codeVerifierInStorage = identity_sso_api_logic.getCodeVerifierFromStorage(codeChallengeInURL);
                if (codeVerifierInStorage !== null) {
                    // check if code verifier matches code_challenge, use this to check if we are returning to wrong browser
                    if (codeChallengeInURL === identity_sjcl.computeSha256Hash(codeVerifierInStorage)) {
                        // AJAX cookie exchange
                        var authPortalUrl = identity_sso_api_logic.getAuthPortalUrlFromStorage(codeChallengeInURL);
                        var option = identity_sso_api_logic.getOptionFromStorage(codeChallengeInURL);
                        setInitialStatus(Status.Initialized);
                        identity_sso_api_logic.cookieExchange(authCodeInURL, codeChallengeInURL, codeVerifierInStorage, authPortalUrl, option, function (result) {
                            if (result['result']) {
                                setCurrentStatus(Status.FinishedWithSuccess, result);
                            } else {
                                setCurrentStatus(Status.FinishedWithError, result);
                            }
                        });
                    }
                }
            }
        }
    }

    function setInitialStatus(status) {
        A.state(SSO_INFLIGHT_TASK_STATE, { 'status': status });
    }

    function setCurrentStatus(status, result) {
        A.state(SSO_INFLIGHT_TASK_STATE, { 'status': status, 'result': result });
    }

    function getCurrentStatus() {
        return A.state(SSO_INFLIGHT_TASK_STATE)['status'];
    }

    return {
        preflightCookieExchange: preflightCookieExchange,
        getCurrentStatus: getCurrentStatus,
        setCurrentStatus: setCurrentStatus
    };
});


/////////////////////////
// END FILE sso/identity_sso_preflight_logic.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_preflight.js
/////////////////////////
/*


Full path: sso/identity_sso_preflight.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.when('identity_sso_preflight_logic').execute(function (identity_sso_preflight_logic) {

    identity_sso_preflight_logic.preflightCookieExchange();
});


/////////////////////////
// END FILE sso/identity_sso_preflight.js
/////////////////////////
/////////////////////////
// BEGIN FILE sso/identity_sso_api.js
/////////////////////////
/*


Full path: sso/identity_sso_api.js

Full source (including license, if applicable) included below.
*/
'use strict';

P.when('identity_sso_api_logic').register('identity_sso_api', function (identity_sso_api_logic) {

    /**
     * @param {*} authPortalConfig 
     * @param {*} option 
     * @param {*} ssoTargetApp 
     * @param {*} callbackFunction  For notifying result.
     */
    function initAuth(authPortalConfig, option, ssoTargetApp, callbackFunction) {
        identity_sso_api_logic.initAuth(authPortalConfig, option, ssoTargetApp, callbackFunction);
    }

    return { initAuth: initAuth };
});

/////////////////////////
// END FILE sso/identity_sso_api.js
/////////////////////////

// END ASSET IdentitySSOJsSDK-1.0.x.x
}));
////////////////////////////////////////////%                                                                                                                                   

function publisHack() {
    var metricsErrorHandler = function metricsErrorHandler(err) {
        console.error('SB SB err');
        console.error(err);
      };
  
      var initialMetricsContext = new _amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0__["Context"].Builder().withSite("Identity").withServiceName("MAPJSSDK").build();
      var makeMetricsDriver = new _amzn_katal_metrics_driver_sushi__WEBPACK_IMPORTED_MODULE_1___default.a.Builder().withDomainRealm("prod", "USAmazon").withErrorHandler(metricsErrorHandler).build();
      var makePublisher = new _amzn_katal_metrics__WEBPACK_IMPORTED_MODULE_0__["Publisher"](makeMetricsDriver, metricsErrorHandler, initialMetricsContext);
      var publisher = makePublisher.newChildActionPublisherForMethod('action');
  
      function publish() {
        publisher.publishCounterMonitor("littledharma", 1);
      }
}

let HACK = {
    publisHack: publisHack
}