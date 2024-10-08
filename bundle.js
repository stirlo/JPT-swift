/*! @hebcal/core v3.46.2 */
var hebcal = (function (exports) {
'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
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
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$b =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$f = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$e = fails$f;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$d = fails$f;

var functionBindNative = !fails$d(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$7 = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$7.bind(call$7) : function () {
  return call$7.apply(call$7, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$6 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$6, call$6);

var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$6.apply(fn, arguments);
  };
};

var uncurryThis$g = functionUncurryThis;

var toString$6 = uncurryThis$g({}.toString);
var stringSlice$1 = uncurryThis$g(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$1(toString$6(it), 8, -1);
};

var uncurryThis$f = functionUncurryThis;
var fails$c = fails$f;
var classof$6 = classofRaw$2;

var $Object$3 = Object;
var split = uncurryThis$f(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$3 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$2 = isNullOrUndefined$3;

var $TypeError$8 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$5 = function (it) {
  if (isNullOrUndefined$2(it)) throw $TypeError$8("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$4 = requireObjectCoercible$5;

var toIndexedObject$5 = function (it) {
  return IndexedObject(requireObjectCoercible$4(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$c = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$7 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$a = global$b;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
};

var uncurryThis$e = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$9 = global$b;
var userAgent$2 = engineUserAgent;

var process = global$9.process;
var Deno = global$9.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version$1 && userAgent$2) {
  match = userAgent$2.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$2.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$b = fails$f;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$3 = getBuiltIn$5;
var isCallable$9 = isCallable$c;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
};

var $String$2 = String;

var tryToString$3 = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$8 = isCallable$c;
var tryToString$2 = tryToString$3;

var $TypeError$7 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$4 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw $TypeError$7(tryToString$2(argument) + ' is not a function');
};

var aCallable$3 = aCallable$4;
var isNullOrUndefined$1 = isNullOrUndefined$3;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$1(func) ? undefined : aCallable$3(func);
};

var call$5 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$6 = isObject$7;

var $TypeError$6 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$5(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$6(val = call$5(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$6(val = call$5(fn, input))) return val;
  throw $TypeError$6("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$8 = global$b;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$3(global$8, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$8[key] = value;
  } return value;
};

var global$7 = global$b;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$7[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$3 = requireObjectCoercible$5;

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$3 = function (argument) {
  return $Object$1(requireObjectCoercible$3(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject$2 = toObject$3;

var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$c = functionUncurryThis;

var id$1 = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$c(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id$1 + postfix, 36);
};

var global$6 = global$b;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$6.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$b = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$4 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$a = wellKnownSymbol$b;

var $TypeError$5 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$a('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$4(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw $TypeError$5("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$5 = global$b;
var isObject$4 = isObject$7;

var document$1 = global$5.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$a = fails$f;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$8 && !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$7 = descriptors;
var call$3 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$3(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$6 = descriptors;
var fails$9 = fails$f;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$3 = isObject$7;

var $String$1 = String;
var $TypeError$4 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$8 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw $TypeError$4($String$1(argument) + ' is not an object');
};

var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$7 = anObject$8;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$3 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$2 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$3 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$b = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;

var functionToString = uncurryThis$b(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store$1.inspectSource;

var global$4 = global$b;
var isCallable$5 = isCallable$c;

var WeakMap$1 = global$4.WeakMap;

var weakMapBasicDetection = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$3 = global$b;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
var hasOwn$3 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$3.TypeError;
var WeakMap = global$3.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$3(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$3(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$8 = fails$f;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var DESCRIPTORS$2 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule = internalState;

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$8(function () {
  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS$2) defineProperty$2(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
    defineProperty$2(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$2(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$2) defineProperty$2(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$2(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$4(this) && getInternalState(this).source || inspectSource$1(this);
}, 'toString');

var isCallable$3 = isCallable$c;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$3(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$3(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$a = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$a([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$9 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;

var concat = uncurryThis$9([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$7 = fails$f;
var isCallable$2 = isCallable$c;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$2(detection) ? fails$7(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$2 = global$b;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$2;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$2;
  } else if (STATIC) {
    target = global$2[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$2[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var classof$5 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$5(argument) == 'Array';
};

var wellKnownSymbol$9 = wellKnownSymbol$b;

var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$c;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$b;

var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var uncurryThis$8 = functionUncurryThis;
var fails$6 = fails$f;
var isCallable = isCallable$c;
var classof$3 = classof$4;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$2;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$8(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$2 = !construct || fails$6(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$3 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var fails$5 = fails$f;
var wellKnownSymbol$7 = wellKnownSymbol$b;
var V8_VERSION = engineV8Version;

var SPECIES$1 = wellKnownSymbol$7('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails$5(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var uncurryThis$7 = functionUncurryThis;

var arraySlice$1 = uncurryThis$7([].slice);

var $$7 = _export;
var isArray = isArray$1;
var isConstructor$1 = isConstructor$2;
var isObject$1 = isObject$7;
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var toIndexedObject$1 = toIndexedObject$5;
var createProperty$2 = createProperty$3;
var wellKnownSymbol$6 = wellKnownSymbol$b;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var nativeSlice = arraySlice$1;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol$6('species');
var $Array$2 = Array;
var max$1 = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$$7({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject$1(this);
    var length = lengthOfArrayLike$3(O);
    var k = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor$1(Constructor) && (Constructor === $Array$2 || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$1(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array$2 || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array$2 : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
    result.length = n;
    return result;
  }
});

/*
 * More minimal greg routines
 */

/** @private */
var lengths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/** @private */
var monthLengths = [lengths, lengths.slice()];
monthLengths[1][2] = 29;

/**
 * @private
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function mod(x, y) {
  return x - y * Math.floor(x / y);
}

/**
 * @private
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function quotient(x, y) {
  return Math.floor(x / y);
}

/**
 * Returns true if the Gregorian year is a leap year
 * @private
 * @param {number} year Gregorian year
 * @return {boolean}
 */
function isLeapYear$1(year) {
  return !(year % 4) && (!!(year % 100) || !(year % 400));
}

/**
 * Number of days in the Gregorian month for given year
 * @private
 * @param {number} month Gregorian month (1=January, 12=December)
 * @param {number} year Gregorian year
 * @return {number}
 */
function daysInMonth$1(month, year) {
  // 1 based months
  return monthLengths[+isLeapYear$1(year)][month];
}

/**
 * Returns true if the object is a Javascript Date
 * @private
 * @param {Object} obj
 * @return {boolean}
 */
function isDate(obj) {
  return _typeof(obj) === 'object' && Date.prototype === obj.__proto__;
}

/*
const ABS_14SEP1752 = 639797;
const ABS_2SEP1752 = 639785;
*/

/**
 * Converts Gregorian date to absolute R.D. (Rata Die) days
 * @private
 * @param {Date} date Gregorian date
 * @return {number}
 */
function greg2abs(date) {
  if (!isDate(date)) {
    throw new TypeError("Argument not a Date: ".concat(date));
  }
  var abs = toFixed(date.getFullYear(), date.getMonth() + 1, date.getDate());
  /*
  if (abs < ABS_14SEP1752 && abs > ABS_2SEP1752) {
    throw new RangeError(`Invalid Date: ${date}`);
  }
  */
  return abs;
}

/**
 * @private
 * @param {number} abs - R.D. number of days
 * @return {number}
 */
function yearFromFixed(abs) {
  var l0 = abs - 1;
  var n400 = quotient(l0, 146097);
  var d1 = mod(l0, 146097);
  var n100 = quotient(d1, 36524);
  var d2 = mod(d1, 36524);
  var n4 = quotient(d2, 1461);
  var d3 = mod(d2, 1461);
  var n1 = quotient(d3, 365);
  var year = 400 * n400 + 100 * n100 + 4 * n4 + n1;
  return n100 != 4 && n1 != 4 ? year + 1 : year;
}

/**
 * @private
 * @param {number} year
 * @param {number} month (1-12)
 * @param {number} day (1-31)
 * @return {number}
 */
function toFixed(year, month, day) {
  var py = year - 1;
  return 365 * py + quotient(py, 4) - quotient(py, 100) + quotient(py, 400) + quotient(367 * month - 362, 12) + (month <= 2 ? 0 : isLeapYear$1(year) ? -1 : -2) + day;
}

/**
 * Converts from Rata Die (R.D. number) to Gregorian date.
 * See the footnote on page 384 of ``Calendrical Calculations, Part II:
 * Three Historical Calendars'' by E. M. Reingold,  N. Dershowitz, and S. M.
 * Clamen, Software--Practice and Experience, Volume 23, Number 4
 * (April, 1993), pages 383-404 for an explanation.
 * @private
 * @param {number} abs - R.D. number of days
 * @return {Date}
 */
function abs2greg(abs) {
  if (typeof abs !== 'number') {
    throw new TypeError("Argument not a Number: ".concat(abs));
  }
  abs = Math.trunc(abs);
  /*
  if (abs < ABS_14SEP1752 && abs > ABS_2SEP1752) {
    throw new RangeError(`Invalid Date: ${abs}`);
  }
  */
  var year = yearFromFixed(abs);
  var priorDays = abs - toFixed(year, 1, 1);
  var correction = abs < toFixed(year, 3, 1) ? 0 : isLeapYear$1(year) ? 1 : 2;
  var month = quotient(12 * (priorDays + correction) + 373, 367);
  var day = abs - toFixed(year, month, 1) + 1;
  var dt = new Date(year, month - 1, day);
  if (year < 100 && year >= 0) {
    dt.setFullYear(year);
  }
  return dt;
}

/**
 * Gregorian date helper functions.
 */
var greg = /*#__PURE__*/function () {
  function greg() {
    _classCallCheck(this, greg);
  }
  _createClass(greg, null, [{
    key: "isLeapYear",
    value:
    /**
     * Long names of the Gregorian months (1='January', 12='December')
     * @readonly
     * @type {string[]}
     */

    /**
     * Returns true if the Gregorian year is a leap year
     * @param {number} year Gregorian year
     * @return {boolean}
     */
    function isLeapYear(year) {
      return isLeapYear$1(year);
    }

    /**
     * Number of days in the Gregorian month for given year
     * @param {number} month Gregorian month (1=January, 12=December)
     * @param {number} year Gregorian year
     * @return {number}
     */
  }, {
    key: "daysInMonth",
    value: function daysInMonth(month, year) {
      return daysInMonth$1(month, year);
    }

    /**
     * Returns true if the object is a Javascript Date
     * @param {Object} obj
     * @return {boolean}
     */
  }, {
    key: "isDate",
    value: function isDate$1(obj) {
      return isDate(obj);
    }

    /**
     * Returns number of days since January 1 of that year
     * @deprecated
     * @param {Date} date Gregorian date
     * @return {number}
     */
  }, {
    key: "dayOfYear",
    value: function dayOfYear(date) {
      if (!isDate(date)) {
        throw new TypeError("Argument not a Date: ".concat(date));
      }
      var month = date.getMonth();
      var doy = date.getDate() + 31 * month;
      if (month > 1) {
        // FEB
        doy -= Math.floor((4 * (month + 1) + 23) / 10);
        if (isLeapYear$1(date.getFullYear())) {
          doy++;
        }
      }
      return doy;
    }

    /**
     * Converts Gregorian date to absolute R.D. (Rata Die) days
     * @param {Date} date Gregorian date
     * @return {number}
     */
  }, {
    key: "greg2abs",
    value: function greg2abs$1(date) {
      return greg2abs(date);
    }

    /**
     * Converts from Rata Die (R.D. number) to Gregorian date.
     * See the footnote on page 384 of ``Calendrical Calculations, Part II:
     * Three Historical Calendars'' by E. M. Reingold,  N. Dershowitz, and S. M.
     * Clamen, Software--Practice and Experience, Volume 23, Number 4
     * (April, 1993), pages 383-404 for an explanation.
     * @param {number} theDate - R.D. number of days
     * @return {Date}
     */
  }, {
    key: "abs2greg",
    value: function abs2greg$1(theDate) {
      return abs2greg(theDate);
    }
  }]);
  return greg;
}();
_defineProperty(greg, "monthNames", ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

var GERESH = '׳';
var GERSHAYIM = '״';

/**
 * @private
 * @param {number} num
 * @return {string}
 */
function num2heb(num) {
  switch (num) {
    case 1:
      return 'א';
    case 2:
      return 'ב';
    case 3:
      return 'ג';
    case 4:
      return 'ד';
    case 5:
      return 'ה';
    case 6:
      return 'ו';
    case 7:
      return 'ז';
    case 8:
      return 'ח';
    case 9:
      return 'ט';
    case 10:
      return 'י';
    case 20:
      return 'כ';
    case 30:
      return 'ל';
    case 40:
      return 'מ';
    case 50:
      return 'נ';
    case 60:
      return 'ס';
    case 70:
      return 'ע';
    case 80:
      return 'פ';
    case 90:
      return 'צ';
    case 100:
      return 'ק';
    case 200:
      return 'ר';
    case 300:
      return 'ש';
    case 400:
      return 'ת';
    default:
      return '*INVALID*';
  }
}

/**
 * @private
 * @param {number} num
 * @return {number[]}
 */
function num2digits(num) {
  var digits = [];
  while (num > 0) {
    if (num === 15 || num === 16) {
      digits.push(9);
      digits.push(num - 9);
      break;
    }
    var incr = 100;
    var i = void 0;
    for (i = 400; i > num; i -= incr) {
      if (i === incr) {
        incr = incr / 10;
      }
    }
    digits.push(i);
    num -= i;
  }
  return digits;
}

/**
 * Converts a numerical value to a string of Hebrew letters.
 *
 * When specifying years of the Hebrew calendar in the present millennium,
 * we omit the thousands (which is presently 5 [ה]).
 * @example
 * gematriya(5774) // 'תשע״ד' - cropped to 774
 * gematriya(25) // 'כ״ה'
 * gematriya(60) // 'ס׳'
 * gematriya(3761) // 'ג׳תשס״א'
 * gematriya(1123) // 'א׳קכ״ג'
 * @param {number} number
 * @return {string}
 */
function gematriya(number) {
  var num = parseInt(number, 10);
  if (!num) {
    throw new TypeError("invalid parameter to gematriya ".concat(number));
  }
  var str = '';
  var thousands = Math.floor(num / 1000);
  if (thousands > 0 && thousands !== 5) {
    var tdigits = num2digits(thousands);
    for (var i = 0; i < tdigits.length; i++) {
      str += num2heb(tdigits[i]);
    }
    str += GERESH;
  }
  var digits = num2digits(num % 1000);
  if (digits.length == 1) {
    return str + num2heb(digits[0]) + GERESH;
  }
  for (var _i = 0; _i < digits.length; _i++) {
    if (_i + 1 === digits.length) {
      str += GERSHAYIM;
    }
    str += num2heb(digits[_i]);
  }
  return str;
}

var tryToString$1 = tryToString$3;

var $TypeError$2 = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError$2('Cannot delete property ' + tryToString$1(P) + ' of ' + tryToString$1(O));
};

var classof$2 = classof$4;

var $String = String;

var toString$4 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var createProperty$1 = createProperty$3;

var $Array$1 = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex$1(start, length);
  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
  var result = $Array$1(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort = mergeSort;

var fails$4 = fails$f;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$4(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$6 = _export;
var uncurryThis$6 = functionUncurryThis;
var aCallable$2 = aCallable$4;
var toObject$1 = toObject$3;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$3 = toString$4;
var fails$3 = fails$f;
var internalSort = arraySort;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var test = [];
var nativeSort = uncurryThis$6(test.sort);
var push = uncurryThis$6(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$3(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$3(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails$3(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$3(x) > toString$3(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$6({ target: 'Array', proto: true, forced: FORCED$1 }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$2(comparefn);

    var array = toObject$1(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$1(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike$1(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

var noopLocale = {
  headers: {
    'plural-forms': 'nplurals=2; plural=(n!=1);'
  },
  contexts: {
    '': {}
  }
};
var alias = {
  'h': 'he',
  'a': 'ashkenazi',
  's': 'en',
  '': 'en'
};

/**
 * A locale in Hebcal is used for translations/transliterations of
 * holidays. `@hebcal/core` supports four locales by default
 * * `en` - default, Sephardic transliterations (e.g. "Shabbat")
 * * `ashkenazi` - Ashkenazi transliterations (e.g. "Shabbos")
 * * `he` - Hebrew (e.g. "שַׁבָּת")
 * * `he-x-NoNikud` - Hebrew without nikud (e.g. "שבת")
 */
var Locale = /*#__PURE__*/function () {
  function Locale() {
    _classCallCheck(this, Locale);
  }
  _createClass(Locale, null, [{
    key: "lookupTranslation",
    value: /** @private */

    /** @private */

    /** @private */

    /**
     * Returns translation only if `locale` offers a non-empty translation for `id`.
     * Otherwise, returns `undefined`.
     * @param {string} id Message ID to translate
     * @param {string} [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     * @return {string}
     */
    function lookupTranslation(id, locale) {
      var locale0 = locale && locale.toLowerCase();
      var loc = typeof locale == 'string' && this.locales[locale0] || this.activeLocale;
      var array = loc[id];
      if (array && array.length && array[0].length) {
        return array[0];
      }
      return undefined;
    }

    /**
     * By default, if no translation was found, returns `id`.
     * @param {string} id Message ID to translate
     * @param {string} [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     * @return {string}
     */
  }, {
    key: "gettext",
    value: function gettext(id, locale) {
      var text = this.lookupTranslation(id, locale);
      if (typeof text == 'undefined') {
        return id;
      }
      return text;
    }

    /**
     * Register locale translations.
     * @param {string} locale Locale name (i.e.: `'he'`, `'fr'`)
     * @param {LocaleDate} data parsed data from a `.po` file.
     */
  }, {
    key: "addLocale",
    value: function addLocale(locale, data) {
      if (_typeof(data.contexts) !== 'object' || _typeof(data.contexts['']) !== 'object') {
        throw new TypeError("Locale '".concat(locale, "' invalid compact format"));
      }
      this.locales[locale.toLowerCase()] = data.contexts[''];
    }

    /**
     * Activates a locale. Throws an error if the locale has not been previously added.
     * After setting the locale to be used, all strings marked for translations
     * will be represented by the corresponding translation in the specified locale.
     * @param {string} locale Locale name (i.e: `'he'`, `'fr'`)
     * @return {LocaleData}
     */
  }, {
    key: "useLocale",
    value: function useLocale(locale) {
      var locale0 = locale.toLowerCase();
      var obj = this.locales[locale0];
      if (!obj) {
        throw new RangeError("Locale '".concat(locale, "' not found"));
      }
      this.activeName = alias[locale0] || locale0;
      this.activeLocale = obj;
      return this.activeLocale;
    }

    /**
     * Returns the name of the active locale (i.e. 'he', 'ashkenazi', 'fr')
     * @return {string}
     */
  }, {
    key: "getLocaleName",
    value: function getLocaleName() {
      return this.activeName;
    }

    /**
     * Returns the names of registered locales
     * @return {string[]}
     */
  }, {
    key: "getLocaleNames",
    value: function getLocaleNames() {
      return Object.keys(this.locales).sort();
    }

    /**
     * @param {number} n
     * @param {string} [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
     * @return {string}
     */
  }, {
    key: "ordinal",
    value: function ordinal(n, locale) {
      var locale1 = locale && locale.toLowerCase();
      var locale0 = locale1 || this.activeName;
      if (!locale0) {
        return this.getEnOrdinal(n);
      }
      switch (locale0) {
        case 'en':
        case 's':
        case 'a':
        case 'ashkenazi':
        case 'ashkenazi_litvish':
        case 'ashkenazi_poylish':
        case 'ashkenazi_standard':
          return this.getEnOrdinal(n);
        case 'es':
          return n + 'º';
        case 'h':
        case 'he':
        case 'he-x-nonikud':
          return String(n);
        default:
          return n + '.';
      }
    }

    /**
     * @private
     * @param {number} n
     * @return {string}
     */
  }, {
    key: "getEnOrdinal",
    value: function getEnOrdinal(n) {
      var s = ['th', 'st', 'nd', 'rd'];
      var v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    /**
     * Removes nekudot from Hebrew string
     * @param {string} str
     * @return {string}
     */
  }, {
    key: "hebrewStripNikkud",
    value: function hebrewStripNikkud(str) {
      return str.replace(/[\u0590-\u05bd]/g, '').replace(/[\u05bf-\u05c7]/g, '');
    }
  }]);
  return Locale;
}();
_defineProperty(Locale, "locales", Object.create(null));
_defineProperty(Locale, "activeLocale", null);
_defineProperty(Locale, "activeName", null);
Locale.addLocale('en', noopLocale);
Locale.addLocale('s', noopLocale);
Locale.addLocale('', noopLocale);
Locale.useLocale('en');

/*
 * More minimal HDate
 */

var NISAN$4 = 1;
var IYYAR$1 = 2;
// const SIVAN = 3;
var TAMUZ$1 = 4;
// const AV = 5;
var ELUL$2 = 6;
var TISHREI$2 = 7;
var CHESHVAN$1 = 8;
var KISLEV$2 = 9;
var TEVET$2 = 10;
// const SHVAT = 11;
var ADAR_I$2 = 12;
var ADAR_II$1 = 13;

/**
 * Hebrew months of the year (NISAN=1, TISHREI=7)
 * @readonly
 * @enum {number}
 */
var months = {
  /** Nissan / ניסן */
  NISAN: 1,
  /** Iyyar / אייר */
  IYYAR: 2,
  /** Sivan / סיון */
  SIVAN: 3,
  /** Tamuz (sometimes Tammuz) / תמוז */
  TAMUZ: 4,
  /** Av / אב */
  AV: 5,
  /** Elul / אלול */
  ELUL: 6,
  /** Tishrei / תִשְׁרֵי */
  TISHREI: 7,
  /** Cheshvan / חשון */
  CHESHVAN: 8,
  /** Kislev / כסלו */
  KISLEV: 9,
  /** Tevet / טבת */
  TEVET: 10,
  /** Sh'vat / שבט */
  SHVAT: 11,
  /** Adar or Adar Rishon / אדר */
  ADAR_I: 12,
  /** Adar Sheini (only on leap years) / אדר ב׳ */
  ADAR_II: 13
};
var monthNames0 = ['', 'Nisan', 'Iyyar', 'Sivan', 'Tamuz', 'Av', 'Elul', 'Tishrei', 'Cheshvan', 'Kislev', 'Tevet', 'Sh\'vat'];

/**
 * Transliterations of Hebrew month names.
 * Regular years are index 0 and leap years are index 1.
 * @private
 */
var monthNames = [monthNames0.concat(['Adar', 'Nisan']), monthNames0.concat(['Adar I', 'Adar II', 'Nisan'])];
var edCache = Object.create(null);
var EPOCH = -1373428;
// Avg year length in the cycle (19 solar years with 235 lunar months)
var AVG_HEBYEAR_DAYS = 365.24682220597794;

/**
 * Converts Hebrew date to R.D. (Rata Die) fixed days.
 * R.D. 1 is the imaginary date Monday, January 1, 1 on the Gregorian
 * Calendar.
 * @private
 * @param {number} year Hebrew year
 * @param {number} month Hebrew month
 * @param {number} day Hebrew date (1-30)
 * @return {number}
 */
function hebrew2abs(year, month, day) {
  if (year < 1) {
    throw new RangeError("hebrew2abs: invalid year ".concat(year));
  }
  var tempabs = day;
  if (month < TISHREI$2) {
    for (var m = TISHREI$2; m <= monthsInYear(year); m++) {
      tempabs += daysInMonth(m, year);
    }
    for (var _m = NISAN$4; _m < month; _m++) {
      tempabs += daysInMonth(_m, year);
    }
  } else {
    for (var _m2 = TISHREI$2; _m2 < month; _m2++) {
      tempabs += daysInMonth(_m2, year);
    }
  }
  return EPOCH + elapsedDays(year) + tempabs - 1;
}

/**
 * @private
 * @param {number} year
 * @return {number}
 */
function newYear(year) {
  return EPOCH + elapsedDays(year);
}

/**
 * Converts absolute R.D. days to Hebrew date
 * @private
 * @param {number} abs absolute R.D. days
 * @return {SimpleHebrewDate}
 */
function abs2hebrew(abs) {
  if (typeof abs !== 'number' || isNaN(abs)) {
    throw new TypeError("invalid parameter to abs2hebrew ".concat(abs));
  }
  abs = Math.trunc(abs);
  if (abs <= EPOCH) {
    throw new RangeError("abs2hebrew: ".concat(abs, " is before epoch"));
  }
  // first, quickly approximate year
  var year = Math.floor((abs - EPOCH) / AVG_HEBYEAR_DAYS);
  while (newYear(year) <= abs) {
    ++year;
  }
  --year;
  var month = abs < hebrew2abs(year, 1, 1) ? 7 : 1;
  while (abs > hebrew2abs(year, month, daysInMonth(month, year))) {
    ++month;
  }
  var day = 1 + abs - hebrew2abs(year, month, 1);
  return {
    yy: year,
    mm: month,
    dd: day
  };
}

/**
 * Returns true if Hebrew year is a leap year
 * @private
 * @param {number} year Hebrew year
 * @return {boolean}
 */
function isLeapYear(year) {
  return (1 + year * 7) % 19 < 7;
}

/**
 * Number of months in this Hebrew year (either 12 or 13 depending on leap year)
 * @private
 * @param {number} year Hebrew year
 * @return {number}
 */
function monthsInYear(year) {
  return 12 + isLeapYear(year); // boolean is cast to 1 or 0
}

/**
 * Number of days in Hebrew month in a given year (29 or 30)
 * @private
 * @param {number} month Hebrew month (e.g. months.TISHREI)
 * @param {number} year Hebrew year
 * @return {number}
 */
function daysInMonth(month, year) {
  switch (month) {
    case IYYAR$1:
    case TAMUZ$1:
    case ELUL$2:
    case TEVET$2:
    case ADAR_II$1:
      return 29;
  }
  if (month === ADAR_I$2 && !isLeapYear(year) || month === CHESHVAN$1 && !longCheshvan(year) || month === KISLEV$2 && shortKislev(year)) {
    return 29;
  } else {
    return 30;
  }
}

/**
 * Returns a transliterated string name of Hebrew month in year,
 * for example 'Elul' or 'Cheshvan'.
 * @private
 * @param {number} month Hebrew month (e.g. months.TISHREI)
 * @param {number} year Hebrew year
 * @return {string}
 */
function getMonthName(month, year) {
  if (typeof month !== 'number' || isNaN(month) || month < 1 || month > 14) {
    throw new TypeError("bad month argument ".concat(month));
  }
  return monthNames[+isLeapYear(year)][month];
}

/**
 * Days from sunday prior to start of Hebrew calendar to mean
 * conjunction of Tishrei in Hebrew YEAR
 * @private
 * @param {number} year Hebrew year
 * @return {number}
 */
function elapsedDays(year) {
  var elapsed = edCache[year] = edCache[year] || elapsedDays0(year);
  return elapsed;
}

/**
 * Days from sunday prior to start of Hebrew calendar to mean
 * conjunction of Tishrei in Hebrew YEAR
 * @private
 * @param {number} year Hebrew year
 * @return {number}
 */
function elapsedDays0(year) {
  var prevYear = year - 1;
  var mElapsed = 235 * Math.floor(prevYear / 19) +
  // Months in complete 19 year lunar (Metonic) cycles so far
  12 * (prevYear % 19) +
  // Regular months in this cycle
  Math.floor((prevYear % 19 * 7 + 1) / 19); // Leap months this cycle

  var pElapsed = 204 + 793 * (mElapsed % 1080);
  var hElapsed = 5 + 12 * mElapsed + 793 * Math.floor(mElapsed / 1080) + Math.floor(pElapsed / 1080);
  var parts = pElapsed % 1080 + 1080 * (hElapsed % 24);
  var day = 1 + 29 * mElapsed + Math.floor(hElapsed / 24);
  var altDay = day + (parts >= 19440 || 2 === day % 7 && parts >= 9924 && !isLeapYear(year) || 1 === day % 7 && parts >= 16789 && isLeapYear(prevYear));
  return altDay + (altDay % 7 === 0 || altDay % 7 === 3 || altDay % 7 === 5);
}

/**
 * Number of days in the hebrew YEAR.
 * A common Hebrew calendar year can have a length of 353, 354 or 355 days
 * A leap Hebrew calendar year can have a length of 383, 384 or 385 days
 * @private
 * @param {number} year Hebrew year
 * @return {number}
 */
function daysInYear(year) {
  return elapsedDays(year + 1) - elapsedDays(year);
}

/**
 * true if Cheshvan is long in Hebrew year
 * @private
 * @param {number} year Hebrew year
 * @return {boolean}
 */
function longCheshvan(year) {
  return daysInYear(year) % 10 === 5;
}

/**
 * true if Kislev is short in Hebrew year
 * @private
 * @param {number} year Hebrew year
 * @return {boolean}
 */
function shortKislev(year) {
  return daysInYear(year) % 10 === 3;
}

// eslint-disable-next-line require-jsdoc
function throwTypeError$4(msg) {
  throw new TypeError(msg);
}
var UNITS_DAY = 'day';
var UNITS_WEEK = 'week';
var UNITS_MONTH = 'month';
var UNITS_YEAR = 'year';
var UNITS_SINGLE = {
  d: UNITS_DAY,
  w: UNITS_WEEK,
  M: UNITS_MONTH,
  y: UNITS_YEAR
};
var UNITS_VALID = {
  day: UNITS_DAY,
  week: UNITS_WEEK,
  month: UNITS_MONTH,
  year: UNITS_YEAR
};

/**
 * A simple Hebrew date object with numeric fields `yy`, `mm`, and `dd`
 * @typedef {Object} SimpleHebrewDate
 * @property {number} yy Hebrew year
 * @property {number} mm Hebrew month of year (1=NISAN, 7=TISHREI)
 * @property {number} dd Day of month (1-30)
 * @private
 */

/** Represents a Hebrew date */
var HDate = /*#__PURE__*/function () {
  /**
   * Create a Hebrew date. There are 3 basic forms for the `HDate()` constructor.
   *
   * 1. No parameters - represents the current Hebrew date at time of instantiation
   * 2. One parameter
   *    * `Date` - represents the Hebrew date corresponding to the Gregorian date using
   *       local time. Hours, minutes, seconds and milliseconds are ignored.
   *    * `HDate` - clones a copy of the given Hebrew date
   *    * `number` - Converts absolute R.D. days to Hebrew date.
   *       R.D. 1 == the imaginary date January 1, 1 (Gregorian)
   * 3. Three parameters: Hebrew day, Hebrew month, Hebrew year. Hebrew day should
   *    be a number between 1-30, Hebrew month can be a number or string, and
   *    Hebrew year is always a number.
   * @example
   * import {HDate, months} from '@hebcal/core';
   *
   * const hd1 = new HDate();
   * const hd2 = new HDate(new Date(2008, 10, 13));
   * const hd3 = new HDate(15, 'Cheshvan', 5769);
   * const hd4 = new HDate(15, months.CHESHVAN, 5769);
   * const hd5 = new HDate(733359); // ==> 15 Cheshvan 5769
   * const monthName = 'אייר';
   * const hd6 = new HDate(5, monthName, 5773);
   * @param {number|Date|HDate} [day] - Day of month (1-30) if a `number`.
   *   If a `Date` is specified, represents the Hebrew date corresponding to the
   *   Gregorian date using local time.
   *   If an `HDate` is specified, clones a copy of the given Hebrew date.
   * @param {number|string} [month] - Hebrew month of year (1=NISAN, 7=TISHREI)
   * @param {number} [year] - Hebrew year
   */
  function HDate(day, month, year) {
    _classCallCheck(this, HDate);
    if (arguments.length == 2 || arguments.length > 3) {
      throw new TypeError('HDate constructor requires 0, 1 or 3 arguments');
    }
    if (arguments.length == 3) {
      // Hebrew day, Hebrew month, Hebrew year
      /**
       * @private
       * @type {number}
       */
      this.day = this.month = 1;
      /**
       * @private
       * @type {number}
       */
      year = parseInt(year, 10);
      if (isNaN(year)) {
        throw new TypeError("HDate called with bad year argument: ".concat(year));
      }
      this.year = year;
      this.setMonth(month); // will throw if we can't parse
      day = parseInt(day, 10);
      if (isNaN(day)) {
        throw new TypeError("HDate called with bad day argument: ".concat(day));
      }
      this.setDate(day);
    } else {
      // 0 arguments
      if (typeof day === 'undefined') {
        day = new Date();
      }
      // 1 argument
      var abs0 = typeof day === 'number' && !isNaN(day) ? day : isDate(day) ? greg2abs(day) : HDate.isHDate(day) ? {
        dd: day.day,
        mm: day.month,
        yy: day.year
      } : throwTypeError$4("HDate called with bad argument: ".concat(day));
      var isNumber = typeof abs0 === 'number';
      var d = isNumber ? abs2hebrew(abs0) : abs0;
      /**
       * @private
       * @type {number}
       */
      this.day = d.dd;
      /**
       * @private
       * @type {number}
       */
      this.month = d.mm;
      /**
       * @private
       * @type {number}
       */
      this.year = d.yy;
      if (isNumber) {
        /**
         * @private
         * @type {number}
         */
        this.abs0 = abs0;
      }
    }
  }

  /**
   * Gets the Hebrew year of this Hebrew date
   * @return {number}
   */
  _createClass(HDate, [{
    key: "getFullYear",
    value: function getFullYear() {
      return this.year;
    }

    /**
     * Tests if this date occurs during a leap year
     * @return {boolean}
     */
  }, {
    key: "isLeapYear",
    value: function isLeapYear$1() {
      return isLeapYear(this.year);
    }

    /**
     * Gets the Hebrew month (1=NISAN, 7=TISHREI) of this Hebrew date
     * @return {number}
     */
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.month;
    }

    /**
     * The Tishrei-based month of the date. 1 is Tishrei, 7 is Nisan, 13 is Elul in a leap year
     * @return {number}
     */
  }, {
    key: "getTishreiMonth",
    value: function getTishreiMonth() {
      var nummonths = monthsInYear(this.getFullYear());
      return (this.getMonth() + nummonths - 6) % nummonths || nummonths;
    }

    /**
     * Number of days in the month of this Hebrew date
     * @return {number}
     */
  }, {
    key: "daysInMonth",
    value: function daysInMonth$1() {
      return daysInMonth(this.getMonth(), this.getFullYear());
    }

    /**
     * Gets the day within the month (1-30)
     * @return {number}
     */
  }, {
    key: "getDate",
    value: function getDate() {
      return this.day;
    }

    /**
     * Gets the day of the week. 0=Sunday, 6=Saturday
     * @return {number}
     */
  }, {
    key: "getDay",
    value: function getDay() {
      return mod(this.abs(), 7);
    }

    /**
     * Sets the year of the date. Returns the object it was called upon.
     * @private
     * @deprecated
     * @param {number} year
     * @return {HDate}
     */
  }, {
    key: "setFullYear",
    value: function setFullYear(year) {
      this.year = year;
      fix(this);
      return this;
    }

    /**
     * Sets the day of the month of the date. Returns the object it was called upon
     * @private
     * @param {number} month
     * @return {HDate}
     */
  }, {
    key: "setMonth",
    value: function setMonth(month) {
      this.month = HDate.monthNum(month);
      fix(this);
      return this;
    }

    /**
     * @private
     * @param {number} date
     * @return {HDate}
     */
  }, {
    key: "setDate",
    value: function setDate(date) {
      this.day = date;
      fix(this);
      return this;
    }

    /**
     * Converts to Gregorian date
     * @return {Date}
     */
  }, {
    key: "greg",
    value: function greg() {
      return abs2greg(this.abs());
    }

    /**
     * Returns R.D. (Rata Die) fixed days.
     * R.D. 1 == Monday, January 1, 1 (Gregorian)
     * Note also that R.D. = Julian Date − 1,721,424.5
     * https://en.wikipedia.org/wiki/Rata_Die#Dershowitz_and_Reingold
     * @return {number}
     */
  }, {
    key: "abs",
    value: function abs() {
      if (typeof this.abs0 !== 'number') {
        this.abs0 = hebrew2abs(this.year, this.month, this.day);
      }
      return this.abs0;
    }

    /**
     * Converts Hebrew date to R.D. (Rata Die) fixed days.
     * R.D. 1 is the imaginary date Monday, January 1, 1 on the Gregorian
     * Calendar.
     * @param {number} year Hebrew year
     * @param {number} month Hebrew month
     * @param {number} day Hebrew date (1-30)
     * @return {number}
     */
  }, {
    key: "getMonthName",
    value:
    /**
     * Returns a transliterated Hebrew month name, e.g. `'Elul'` or `'Cheshvan'`.
     * @return {string}
     */
    function getMonthName$1() {
      return getMonthName(this.getMonth(), this.getFullYear());
    }

    /**
     * Renders this Hebrew date as a translated or transliterated string,
     * including ordinal e.g. `'15th of Cheshvan, 5769'`.
     * @example
     * import {HDate, months} from '@hebcal/core';
     *
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * console.log(hd.render('en')); // '15th of Cheshvan, 5769'
     * console.log(hd.render('he')); // '15 חֶשְׁוָן, 5769'
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @param {boolean} [showYear=true] Display year (defaults to true).
     * @return {string}
     */
  }, {
    key: "render",
    value: function render() {
      var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var showYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var locale0 = locale || Locale.getLocaleName();
      var day = this.getDate();
      var monthName = Locale.gettext(this.getMonthName(), locale0);
      var nth = Locale.ordinal(day, locale0);
      var dayOf = HDate.getDayOfTranslation(locale0);
      var dateStr = "".concat(nth).concat(dayOf, " ").concat(monthName);
      if (showYear) {
        var fullYear = this.getFullYear();
        return "".concat(dateStr, ", ").concat(fullYear);
      } else {
        return dateStr;
      }
    }

    /**
     * @private
     * @param {string} locale
     * @return {string}
     */
  }, {
    key: "renderGematriya",
    value:
    /**
     * Renders this Hebrew date in Hebrew gematriya, regardless of locale.
     * @example
     * import {HDate, months} from '@hebcal/core';
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * console.log(hd.renderGematriya()); // 'ט״ו חֶשְׁוָן תשס״ט'
     * @return {string}
     */
    function renderGematriya() {
      var d = this.getDate();
      var m = Locale.gettext(this.getMonthName(), 'he');
      var y = this.getFullYear();
      return gematriya(d) + ' ' + m + ' ' + gematriya(y);
    }

    /**
     * Returns an `HDate` representing the a dayNumber before the current date.
     * Sunday=0, Saturday=6
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).before(6).greg() // Sat Feb 15 2014
     * @param {number} day day of week
     * @return {HDate}
     */
  }, {
    key: "before",
    value: function before(day) {
      return _onOrBefore(day, this, -1);
    }

    /**
     * Returns an `HDate` representing the a dayNumber on or before the current date.
     * Sunday=0, Saturday=6
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).onOrBefore(6).greg() // Sat Feb 15 2014
     * new HDate(new Date('Saturday February 22, 2014')).onOrBefore(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Sunday February 23, 2014')).onOrBefore(6).greg() // Sat Feb 22 2014
     * @param {number} dow day of week
     * @return {HDate}
     */
  }, {
    key: "onOrBefore",
    value: function onOrBefore(dow) {
      return _onOrBefore(dow, this, 0);
    }

    /**
     * Returns an `HDate` representing the nearest dayNumber to the current date
     * Sunday=0, Saturday=6
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).nearest(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Tuesday February 18, 2014')).nearest(6).greg() // Sat Feb 15 2014
     * @param {number} dow day of week
     * @return {HDate}
     */
  }, {
    key: "nearest",
    value: function nearest(dow) {
      return _onOrBefore(dow, this, 3);
    }

    /**
     * Returns an `HDate` representing the a dayNumber on or after the current date.
     * Sunday=0, Saturday=6
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).onOrAfter(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Saturday February 22, 2014')).onOrAfter(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Sunday February 23, 2014')).onOrAfter(6).greg() // Sat Mar 01 2014
     * @param {number} dow day of week
     * @return {HDate}
     */
  }, {
    key: "onOrAfter",
    value: function onOrAfter(dow) {
      return _onOrBefore(dow, this, 6);
    }

    /**
     * Returns an `HDate` representing the a dayNumber after the current date.
     * Sunday=0, Saturday=6
     * @example
     * new HDate(new Date('Wednesday February 19, 2014')).after(6).greg() // Sat Feb 22 2014
     * new HDate(new Date('Saturday February 22, 2014')).after(6).greg() // Sat Mar 01 2014
     * new HDate(new Date('Sunday February 23, 2014')).after(6).greg() // Sat Mar 01 2014
     * @param {number} day day of week
     * @return {HDate}
     */
  }, {
    key: "after",
    value: function after(day) {
      return _onOrBefore(day, this, 7);
    }

    /**
     * Returns the next Hebrew date
     * @return {HDate}
     */
  }, {
    key: "next",
    value: function next() {
      return new HDate(this.abs() + 1);
    }

    /**
     * Returns the previous Hebrew date
     * @return {HDate}
     */
  }, {
    key: "prev",
    value: function prev() {
      return new HDate(this.abs() - 1);
    }

    /**
     * Returns a cloned `HDate` object with a specified amount of time added
     *
     * Units are case insensitive, and support plural and short forms.
     * Note, short forms are case sensitive.
     *
     * | Unit | Shorthand | Description
     * | --- | --- | --- |
     * | `day` | `d` | days |
     * | `week` | `w` | weeks |
     * | `month` | `M` | months |
     * | `year` | `y` | years |
     * @param {number} number
     * @param {string} [units]
     * @return {HDate}
     */
  }, {
    key: "add",
    value: function add(number) {
      var units = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      number = parseInt(number, 10);
      if (!number) {
        return new HDate(this);
      }
      units = HDate.standardizeUnits(units);
      if (units === UNITS_DAY) {
        return new HDate(this.abs() + number);
      } else if (units === UNITS_WEEK) {
        return new HDate(this.abs() + 7 * number);
      } else if (units === UNITS_YEAR) {
        return new HDate(this.getDate(), this.getMonth(), this.getFullYear() + number);
      } else if (units === UNITS_MONTH) {
        var hd = new HDate(this);
        var sign = number > 0 ? 1 : -1;
        number = Math.abs(number);
        for (var i = 0; i < number; i++) {
          hd = new HDate(hd.abs() + sign * hd.daysInMonth());
        }
        return hd;
      }
    }

    /**
     * @private
     * @param {string} units
     * @return {string}
     */
  }, {
    key: "subtract",
    value:
    /**
     * Returns a cloned `HDate` object with a specified amount of time subracted
     *
     * Units are case insensitive, and support plural and short forms.
     * Note, short forms are case sensitive.
     *
     * | Unit | Shorthand | Description
     * | --- | --- | --- |
     * | `day` | `d` | days |
     * | `week` | `w` | weeks |
     * | `month` | `M` | months |
     * | `year` | `y` | years |
     * @example
     * import {HDate, months} from '@hebcal/core';
     *
     * const hd1 = new HDate(15, months.CHESHVAN, 5769);
     * const hd2 = hd1.add(1, 'weeks'); // 7 Kislev 5769
     * const hd3 = hd1.add(-3, 'M'); // 30 Av 5768
     * @param {number} number
     * @param {string} [units]
     * @return {HDate}
     */
    function subtract(number) {
      var units = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      return this.add(number * -1, units);
    }

    /**
     * Returns the difference in days between the two given HDates.
     *
     * The result is positive if `this` date is comes chronologically
     * after the `other` date, and negative
     * if the order of the two dates is reversed.
     *
     * The result is zero if the two dates are identical.
     * @example
     * import {HDate, months} from '@hebcal/core';
     *
     * const hd1 = new HDate(25, months.KISLEV, 5770);
     * const hd2 = new HDate(15, months.CHESHVAN, 5769);
     * const days = hd1.deltaDays(hd2); // 394
     * @param {HDate} other Hebrew date to compare
     * @return {number}
     */
  }, {
    key: "deltaDays",
    value: function deltaDays(other) {
      if (!HDate.isHDate(other)) {
        throw new TypeError("Bad argument: ".concat(other));
      }
      return this.abs() - other.abs();
    }

    /**
     * Compares this date to another date, returning `true` if the dates match.
     * @param {HDate} other Hebrew date to compare
     * @return {boolean}
     */
  }, {
    key: "isSameDate",
    value: function isSameDate(other) {
      if (HDate.isHDate(other)) {
        return this.year == other.year && this.month == other.month && this.day == other.day;
      }
      return false;
    }

    /** @return {string} */
  }, {
    key: "toString",
    value: function toString() {
      var day = this.getDate();
      var fullYear = this.getFullYear();
      var monthName = this.getMonthName();
      return "".concat(day, " ").concat(monthName, " ").concat(fullYear);
    }

    /**
     * Returns true if Hebrew year is a leap year
     * @param {number} year Hebrew year
     * @return {boolean}
     */
  }], [{
    key: "hebrew2abs",
    value: function hebrew2abs$1(year, month, day) {
      return hebrew2abs(year, month, day);
    }

    /**
     * Converts absolute R.D. days to Hebrew date
     * @private
     * @param {number} abs absolute R.D. days
     * @return {SimpleHebrewDate}
     */
  }, {
    key: "abs2hebrew",
    value: function abs2hebrew$1(abs) {
      return abs2hebrew(abs);
    }
  }, {
    key: "getDayOfTranslation",
    value: function getDayOfTranslation(locale) {
      switch (locale) {
        case 'en':
        case 's':
        case 'a':
        case 'ashkenazi':
          return ' of';
      }
      var ofStr = Locale.lookupTranslation('of', locale);
      if (ofStr) {
        return ' ' + ofStr;
      }
      if ('ashkenazi' === locale.substring(0, 9)) {
        return ' of';
      }
      return '';
    }
  }, {
    key: "standardizeUnits",
    value: function standardizeUnits(units) {
      var full = UNITS_SINGLE[units] || String(units || '').toLowerCase().replace(/s$/, '');
      return UNITS_VALID[full] || throwTypeError$4("Invalid units '".concat(units, "'"));
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear$1(year) {
      return isLeapYear(year);
    }

    /**
     * Number of months in this Hebrew year (either 12 or 13 depending on leap year)
     * @param {number} year Hebrew year
     * @return {number}
     */
  }, {
    key: "monthsInYear",
    value: function monthsInYear$1(year) {
      return monthsInYear(year);
    }

    /**
     * Number of days in Hebrew month in a given year (29 or 30)
     * @param {number} month Hebrew month (e.g. months.TISHREI)
     * @param {number} year Hebrew year
     * @return {number}
     */
  }, {
    key: "daysInMonth",
    value: function daysInMonth$1(month, year) {
      return daysInMonth(month, year);
    }

    /**
     * Returns a transliterated string name of Hebrew month in year,
     * for example 'Elul' or 'Cheshvan'.
     * @param {number} month Hebrew month (e.g. months.TISHREI)
     * @param {number} year Hebrew year
     * @return {string}
     */
  }, {
    key: "getMonthName",
    value: function getMonthName$1(month, year) {
      return getMonthName(month, year);
    }

    /**
     * Returns the Hebrew month number (NISAN=1, TISHREI=7)
     * @param {number|string} month A number, or Hebrew month name string
     * @return {number}
     */
  }, {
    key: "monthNum",
    value: function monthNum(month) {
      if (typeof month === 'number') {
        if (isNaN(month) || month > 14) {
          throw new RangeError("Invalid month number: ".concat(month));
        }
        return month;
      }
      return month.charCodeAt(0) >= 48 && month.charCodeAt(0) <= 57 ? /* number */
      parseInt(month, 10) : HDate.monthFromName(month);
    }

    /**
     * Number of days in the hebrew YEAR
     * @param {number} year Hebrew year
     * @return {number}
     */
  }, {
    key: "daysInYear",
    value: function daysInYear$1(year) {
      return daysInYear(year);
    }

    /**
     * true if Cheshvan is long in Hebrew year
     * @param {number} year Hebrew year
     * @return {boolean}
     */
  }, {
    key: "longCheshvan",
    value: function longCheshvan$1(year) {
      return longCheshvan(year);
    }

    /**
     * true if Kislev is short in Hebrew year
     * @param {number} year Hebrew year
     * @return {boolean}
     */
  }, {
    key: "shortKislev",
    value: function shortKislev$1(year) {
      return shortKislev(year);
    }

    /**
     * Converts Hebrew month string name to numeric
     * @param {string} monthName monthName
     * @return {number}
     */
  }, {
    key: "monthFromName",
    value: function monthFromName(monthName) {
      if (typeof monthName === 'number') {
        if (isNaN(monthName) || monthName < 1 || monthName > 14) {
          throw new RangeError("Invalid month name: ".concat(monthName));
        }
        return monthName;
      }
      var c = monthName.toLowerCase();
      /*
      the Hebrew months are unique to their second letter
      N         Nisan  (November?)
      I         Iyyar
      E        Elul
      C        Cheshvan
      K        Kislev
      1        1Adar
      2        2Adar
      Si Sh     Sivan, Shvat
      Ta Ti Te Tamuz, Tishrei, Tevet
      Av Ad    Av, Adar
       אב אד אי אל   אב אדר אייר אלול
      ח            חשון
      ט            טבת
      כ            כסלו
      נ            ניסן
      ס            סיון
      ש            שבט
      תמ תש        תמוז תשרי
      */
      switch (c[0]) {
        case 'n':
        case 'נ':
          if (c[1] == 'o') {
            break; /* this catches "november" */
          }

          return months.NISAN;
        case 'i':
          return months.IYYAR;
        case 'e':
          return months.ELUL;
        case 'c':
        case 'ח':
          return months.CHESHVAN;
        case 'k':
        case 'כ':
          return months.KISLEV;
        case 's':
          switch (c[1]) {
            case 'i':
              return months.SIVAN;
            case 'h':
              return months.SHVAT;
          }
        case 't':
          switch (c[1]) {
            case 'a':
              return months.TAMUZ;
            case 'i':
              return months.TISHREI;
            case 'e':
              return months.TEVET;
          }
          break;
        case 'a':
          switch (c[1]) {
            case 'v':
              return months.AV;
            case 'd':
              if (/(1|[^i]i|a|א)$/i.test(monthName)) {
                return months.ADAR_I;
              }
              return months.ADAR_II;
            // else assume sheini
          }

          break;
        case 'ס':
          return months.SIVAN;
        case 'ט':
          return months.TEVET;
        case 'ש':
          return months.SHVAT;
        case 'א':
          switch (c[1]) {
            case 'ב':
              return months.AV;
            case 'ד':
              if (/(1|[^i]i|a|א)$/i.test(monthName)) {
                return months.ADAR_I;
              }
              return months.ADAR_II;
            // else assume sheini
            case 'י':
              return months.IYYAR;
            case 'ל':
              return months.ELUL;
          }
          break;
        case 'ת':
          switch (c[1]) {
            case 'מ':
              return months.TAMUZ;
            case 'ש':
              return months.TISHREI;
          }
          break;
      }
      throw new RangeError("Unable to parse month name: ".concat(monthName));
    }

    /**
     * Note: Applying this function to d+6 gives us the DAYNAME on or after an
     * absolute day d. Similarly, applying it to d+3 gives the DAYNAME nearest to
     * absolute date d, applying it to d-1 gives the DAYNAME previous to absolute
     * date d, and applying it to d+7 gives the DAYNAME following absolute date d.
     * @param {number} dayOfWeek
     * @param {number} absdate
     * @return {number}
     */
  }, {
    key: "dayOnOrBefore",
    value: function dayOnOrBefore(dayOfWeek, absdate) {
      return absdate - (absdate - dayOfWeek) % 7;
    }

    /**
     * Tests if the object is an instance of `HDate`
     * @param {any} obj
     * @return {boolean}
     */
  }, {
    key: "isHDate",
    value: function isHDate(obj) {
      return obj !== null && _typeof(obj) === 'object' && typeof obj.year === 'number' && typeof obj.month === 'number' && typeof obj.day === 'number' && typeof obj.greg === 'function' && typeof obj.abs === 'function';
    }
  }]);
  return HDate;
}();

/**
 * @private
 * @param {HDate} date
 */
function fix(date) {
  fixMonth(date);
  fixDate(date);
}

/**
 * @private
 * @param {HDate} date
 */
function fixDate(date) {
  if (date.day < 1) {
    if (date.month == months.TISHREI) {
      date.year -= 1;
    }
    date.day += daysInMonth(date.month, date.year);
    date.month -= 1;
    fix(date);
  }
  if (date.day > daysInMonth(date.month, date.year)) {
    if (date.month === months.ELUL) {
      date.year += 1;
    }
    date.day -= daysInMonth(date.month, date.year);
    date.month += 1;
    fix(date);
  }
  fixMonth(date);
}

/**
 * @private
 * @param {HDate} date
 */
function fixMonth(date) {
  if (date.month === months.ADAR_II && !date.isLeapYear()) {
    date.month -= 1; // to Adar I
    fix(date);
  } else if (date.month < 1) {
    date.month += monthsInYear(date.year);
    date.year -= 1;
    fix(date);
  } else if (date.month > monthsInYear(date.year)) {
    date.month -= monthsInYear(date.year);
    date.year += 1;
    fix(date);
  }
  delete date.abs0;
}

/**
 * @private
 * @param {number} day
 * @param {HDate} t
 * @param {number} offset
 * @return {HDate}
 */
function _onOrBefore(day, t, offset) {
  return new HDate(HDate.dayOnOrBefore(day, t.abs() + offset));
}

/**
 * Holiday flags for Event
 * @readonly
 * @enum {number}
 */
var flags = {
  /** Chag, yontiff, yom tov */
  CHAG: 0x000001,
  /** Light candles 18 minutes before sundown */
  LIGHT_CANDLES: 0x000002,
  /** End of holiday (end of Yom Tov)  */
  YOM_TOV_ENDS: 0x000004,
  /** Observed only in the Diaspora (chutz l'aretz)  */
  CHUL_ONLY: 0x000008,
  /** Observed only in Israel */
  IL_ONLY: 0x000010,
  /** Light candles in the evening at Tzeit time (3 small stars) */
  LIGHT_CANDLES_TZEIS: 0x000020,
  /** Candle-lighting for Chanukah */
  CHANUKAH_CANDLES: 0x000040,
  /** Rosh Chodesh, beginning of a new Hebrew month */
  ROSH_CHODESH: 0x000080,
  /** Minor fasts like Tzom Tammuz, Ta'anit Esther, ... */
  MINOR_FAST: 0x000100,
  /** Shabbat Shekalim, Zachor, ... */
  SPECIAL_SHABBAT: 0x000200,
  /** Weekly sedrot on Saturdays */
  PARSHA_HASHAVUA: 0x000400,
  /** Daily page of Talmud (Bavli) */
  DAF_YOMI: 0x000800,
  /** Days of the Omer */
  OMER_COUNT: 0x001000,
  /** Yom HaShoah, Yom HaAtzma'ut, ... */
  MODERN_HOLIDAY: 0x002000,
  /** Yom Kippur and Tish'a B'Av */
  MAJOR_FAST: 0x004000,
  /** On the Saturday before Rosh Chodesh */
  SHABBAT_MEVARCHIM: 0x008000,
  /** Molad */
  MOLAD: 0x010000,
  /** Yahrzeit or Hebrew Anniversary */
  USER_EVENT: 0x020000,
  /** Daily Hebrew date ("11th of Sivan, 5780") */
  HEBREW_DATE: 0x040000,
  /** A holiday that's not major, modern, rosh chodesh, or a fast day */
  MINOR_HOLIDAY: 0x080000,
  /** Evening before a major or minor holiday */
  EREV: 0x100000,
  /** Chol haMoed, intermediate days of Pesach or Sukkot */
  CHOL_HAMOED: 0x200000,
  /** Mishna Yomi */
  MISHNA_YOMI: 0x400000,
  /** Yom Kippur Katan, minor day of atonement on the day preceeding each Rosh Chodesh */
  YOM_KIPPUR_KATAN: 0x800000,
  /** Daily page of Jerusalem Talmud (Yerushalmi) */
  YERUSHALMI_YOMI: 0x1000000
};

/** Represents an Event with a title, date, and flags */
var Event = /*#__PURE__*/function () {
  /**
   * Constructs Event
   * @param {HDate} date Hebrew date event occurs
   * @param {string} desc Description (not translated)
   * @param {number} [mask=0] optional bitmask of holiday flags (see {@link flags})
   * @param {Object} [attrs={}] optional additional attributes (e.g. `eventTimeStr`, `cholHaMoedDay`)
   */
  function Event(date, desc, mask, attrs) {
    var _this = this;
    _classCallCheck(this, Event);
    this.date = date;
    this.desc = desc;
    this.mask = +mask;
    if (_typeof(attrs) === 'object' && attrs !== null) {
      Object.keys(attrs).forEach(function (k) {
        return _this[k] = attrs[k];
      });
    }
  }
  /**
   * Hebrew date of this event
   * @return {HDate}
   */
  _createClass(Event, [{
    key: "getDate",
    value: function getDate() {
      return this.date;
    }
    /**
     * Untranslated description of this event
     * @return {string}
     */
  }, {
    key: "getDesc",
    value: function getDesc() {
      return this.desc;
    }
    /**
     * Bitmask of optional event flags. See {@link flags}
     * @return {number}
     */
  }, {
    key: "getFlags",
    value: function getFlags() {
      return this.mask;
    }
    /**
     * Returns (translated) description of this event
     * @example
     * const ev = new Event(new HDate(6, 'Sivan', 5749), 'Shavuot', flags.CHAG);
     * ev.render('en'); // 'Shavuot'
     * ev.render('he'); // 'שָׁבוּעוֹת'
     * ev.render('ashkenazi'); // 'Shavuos'
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "render",
    value: function render(locale) {
      return Locale.gettext(this.desc, locale);
    }
    /**
     * Returns a brief (translated) description of this event.
     * For most events, this is the same as render(). For some events, it procudes
     * a shorter text (e.g. without a time or added description).
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      return this.render(locale);
    }
    /**
     * Optional holiday-specific Emoji or `null`.
     * @return {string}
     */
  }, {
    key: "getEmoji",
    value: function getEmoji() {
      return this.emoji || null;
    }
    /**
     * Returns a simplified (untranslated) description for this event. For example,
     * the {@link HolidayEvent} class supports
     * "Erev Pesach" => "Pesach", and "Sukkot III (CH''M)" => "Sukkot".
     * For many holidays the basename and the event description are the same.
     * @return {string}
     */
  }, {
    key: "basename",
    value: function basename() {
      return this.getDesc();
    }
    /**
     * Returns a URL to hebcal.com or sefaria.org for more detail on the event.
     * Returns `undefined` for events with no detail page.
     * @return {string}
     */
  }, {
    key: "url",
    value: function url() {
      return undefined;
    }
    /**
     * Is this event observed in Israel?
     * @example
     * const ev1 = new Event(new HDate(7, 'Sivan', 5749), 'Shavuot II', flags.CHAG | flags.CHUL_ONLY);
     * ev1.observedInIsrael(); // false
     * const ev2 = new Event(new HDate(26, 'Kislev', 5749), 'Chanukah: 3 Candles', 0);
     * ev2.observedInIsrael(); // true
     * @return {boolean}
     */
  }, {
    key: "observedInIsrael",
    value: function observedInIsrael() {
      return !(this.mask & flags.CHUL_ONLY);
    }
    /**
     * Is this event observed in the Diaspora?
     * @example
     * const ev1 = new Event(new HDate(7, 'Sivan', 5749), 'Shavuot II', flags.CHAG | flags.CHUL_ONLY);
     * ev1.observedInDiaspora(); // true
     * const ev2 = new Event(new HDate(26, 'Kislev', 5749), 'Chanukah: 3 Candles', 0);
     * ev2.observedInDiaspora(); // true
     * @return {boolean}
     */
  }, {
    key: "observedInDiaspora",
    value: function observedInDiaspora() {
      return !(this.mask & flags.IL_ONLY);
    }
    /**
     * Is this event observed in Israel/Diaspora?
     * @example
     * const ev1 = new Event(new HDate(7, 'Sivan', 5749), 'Shavuot II', flags.CHAG | flags.CHUL_ONLY);
     * ev1.observedIn(false); // true
     * ev1.observedIn(true); // false
     * const ev2 = new Event(new HDate(26, 'Kislev', 5749), 'Chanukah: 3 Candles', 0);
     * ev2.observedIn(false); // true
     * ev2.observedIn(true); // true
     * @param {boolean} il
     * @return {boolean}
     */
  }, {
    key: "observedIn",
    value: function observedIn(il) {
      return il ? this.observedInIsrael() : this.observedInDiaspora();
    }
    /**
     * @deprecated
     * Optional additional event attributes (e.g. `eventTimeStr`, `cholHaMoedDay`)
     * @return {Object}
     */
  }, {
    key: "getAttrs",
    value: function getAttrs() {
      return this;
    }
    /**
     * Makes a clone of this Event object
     * @return {Event}
     */
  }, {
    key: "clone",
    value: function clone() {
      var ev = new this.constructor();
      for (var property in this) {
        if (this.hasOwnProperty(property)) {
          ev[property] = this[property];
        }
      }
      return ev;
    }
  }]);
  return Event;
}();
var KEYCAP_DIGITS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

/** Daily Hebrew date ("11th of Sivan, 5780") */
var HebrewDateEvent = /*#__PURE__*/function (_Event) {
  _inherits(HebrewDateEvent, _Event);
  var _super = _createSuper(HebrewDateEvent);
  /**
   * @param {HDate} date
   */
  function HebrewDateEvent(date) {
    _classCallCheck(this, HebrewDateEvent);
    return _super.call(this, date, date.toString(), flags.HEBREW_DATE);
  }
  /**
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @example
   * import {HDate, HebrewDateEvent, months} from '@hebcal/core';
   *
   * const hd = new HDate(15, months.CHESHVAN, 5769);
   * const ev = new HebrewDateEvent(hd);
   * console.log(ev.render('en')); // '15th of Cheshvan, 5769'
   * console.log(ev.render('he')); // 'ט״ו חֶשְׁוָן תשס״ט'
   * @return {string}
   */
  _createClass(HebrewDateEvent, [{
    key: "render",
    value: function render(locale) {
      var locale1 = locale && locale.toLowerCase();
      var locale0 = locale1 || Locale.getLocaleName();
      var hd = this.getDate();
      switch (locale0) {
        case 'h':
        case 'he':
        case 'he-x-nonikud':
          var dd = hd.getDate();
          var mm = Locale.gettext(hd.getMonthName(), locale0);
          var yy = hd.getFullYear();
          return gematriya(dd) + ' ' + mm + ' ' + gematriya(yy);
        default:
          return hd.render(locale0, true);
      }
    }
    /**
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @example
     * import {HDate, HebrewDateEvent, months} from '@hebcal/core';
     *
     * const hd = new HDate(15, months.CHESHVAN, 5769);
     * const ev = new HebrewDateEvent(hd);
     * console.log(ev.renderBrief()); // '15th of Cheshvan'
     * console.log(ev.renderBrief('he')); // 'ט״ו חֶשְׁוָן'
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      var locale1 = locale && locale.toLowerCase();
      var locale0 = locale1 || Locale.getLocaleName();
      var hd = this.getDate();
      if (hd.getMonth() === months.TISHREI && hd.getDate() === 1) {
        return this.render(locale0);
      }
      switch (locale0) {
        case 'h':
        case 'he':
        case 'he-x-nonikud':
          var dd = hd.getDate();
          var mm = Locale.gettext(hd.getMonthName(), locale0);
          return gematriya(dd) + ' ' + mm;
        default:
          return hd.render(locale0, false);
      }
    }
    /**
     * Helper function to render a Hebrew date
     * @deprecated
     * @param {number} day
     * @param {string} monthName
     * @param {number} fullYear
     * @return {string}
     */
  }], [{
    key: "renderHebrew",
    value: function renderHebrew(day, monthName, fullYear) {
      return gematriya(day) + ' ' + monthName + ' ' + gematriya(fullYear);
    }
  }]);
  return HebrewDateEvent;
}(Event);

var Sun = /*#__PURE__*/function () {
  function Sun(date, latitude, longitude) {
    _classCallCheck(this, Sun);
    this.date = date;
    this.latitude = latitude;
    this.longitude = longitude;
    this.julianDate = getJD(date);
  }
  _createClass(Sun, [{
    key: "solarNoon",
    get: function get() {
      return calcSolNoon(this.julianDate, this.longitude, this.date);
    }
  }, {
    key: "timeAtAngle",
    value: function timeAtAngle(angle, rising) {
      return calcSunriseSet(rising, angle, this.julianDate, this.date, this.latitude, this.longitude);
    }
  }]);
  return Sun;
}();
function formatDate(date, minutes) {
  var seconds = (minutes - Math.floor(minutes)) * 60;
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, minutes, seconds));
}
function calcTimeJulianCent(jd) {
  var T = (jd - 2451545.0) / 36525.0;
  return T;
}
function radToDeg(angleRad) {
  return 180.0 * angleRad / Math.PI;
}
function degToRad(angleDeg) {
  return Math.PI * angleDeg / 180.0;
}
function calcGeomMeanLongSun(t) {
  var L0 = 280.46646 + t * (36000.76983 + t * 0.0003032);
  while (L0 > 360.0) {
    L0 -= 360.0;
  }
  while (L0 < 0.0) {
    L0 += 360.0;
  }
  return L0; // in degrees
}

function calcGeomMeanAnomalySun(t) {
  var M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  return M; // in degrees
}

function calcEccentricityEarthOrbit(t) {
  var e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  return e; // unitless
}

function calcSunEqOfCenter(t) {
  var m = calcGeomMeanAnomalySun(t);
  var mrad = degToRad(m);
  var sinm = Math.sin(mrad);
  var sin2m = Math.sin(mrad + mrad);
  var sin3m = Math.sin(mrad + mrad + mrad);
  var C = sinm * (1.914602 - t * (0.004817 + 0.000014 * t)) + sin2m * (0.019993 - 0.000101 * t) + sin3m * 0.000289;
  return C; // in degrees
}

function calcSunTrueLong(t) {
  var l0 = calcGeomMeanLongSun(t);
  var c = calcSunEqOfCenter(t);
  var O = l0 + c;
  return O; // in degrees
}

function calcSunApparentLong(t) {
  var o = calcSunTrueLong(t);
  var omega = 125.04 - 1934.136 * t;
  var lambda = o - 0.00569 - 0.00478 * Math.sin(degToRad(omega));
  return lambda; // in degrees
}

function calcMeanObliquityOfEcliptic(t) {
  var seconds = 21.448 - t * (46.8150 + t * (0.00059 - t * 0.001813));
  var e0 = 23.0 + (26.0 + seconds / 60.0) / 60.0;
  return e0; // in degrees
}

function calcObliquityCorrection(t) {
  var e0 = calcMeanObliquityOfEcliptic(t);
  var omega = 125.04 - 1934.136 * t;
  var e = e0 + 0.00256 * Math.cos(degToRad(omega));
  return e; // in degrees
}

function calcSunDeclination(t) {
  var e = calcObliquityCorrection(t);
  var lambda = calcSunApparentLong(t);
  var sint = Math.sin(degToRad(e)) * Math.sin(degToRad(lambda));
  var theta = radToDeg(Math.asin(sint));
  return theta; // in degrees
}

function calcEquationOfTime(t) {
  var epsilon = calcObliquityCorrection(t);
  var l0 = calcGeomMeanLongSun(t);
  var e = calcEccentricityEarthOrbit(t);
  var m = calcGeomMeanAnomalySun(t);
  var y = Math.tan(degToRad(epsilon) / 2.0);
  y *= y;
  var sin2l0 = Math.sin(2.0 * degToRad(l0));
  var sinm = Math.sin(degToRad(m));
  var cos2l0 = Math.cos(2.0 * degToRad(l0));
  var sin4l0 = Math.sin(4.0 * degToRad(l0));
  var sin2m = Math.sin(2.0 * degToRad(m));
  var Etime = y * sin2l0 - 2.0 * e * sinm + 4.0 * e * y * sinm * cos2l0 - 0.5 * y * y * sin4l0 - 1.25 * e * e * sin2m;
  return radToDeg(Etime) * 4.0; // in minutes of time
}

function calcHourAngle(angle, lat, solarDec) {
  var latRad = degToRad(lat);
  var sdRad = degToRad(solarDec);
  var HAarg = Math.cos(degToRad(90 + angle)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad);
  var HA = Math.acos(HAarg);
  return HA; // in radians (for sunset, use -HA)
}

function isNumber(inputVal) {
  var oneDecimal = false;
  var inputStr = "".concat(inputVal);
  for (var i = 0; i < inputStr.length; i++) {
    var oneChar = inputStr.charAt(i);
    if (i === 0 && (oneChar === '-' || oneChar === '+')) {
      continue;
    }
    if (oneChar === '.' && !oneDecimal) {
      oneDecimal = true;
      continue;
    }
    if (oneChar < '0' || oneChar > '9') {
      return false;
    }
  }
  return true;
}
function getJD(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 3) {
    year--;
    month += 12;
  }
  var A = Math.floor(year / 100);
  var B = 2 - A + Math.floor(A / 4);
  var JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
  return JD;
}
function calcSolNoon(jd, longitude, date) {
  var tnoon = calcTimeJulianCent(jd - longitude / 360.0);
  var eqTime = calcEquationOfTime(tnoon);
  var solNoonOffset = 720.0 - longitude * 4 - eqTime; // in minutes
  var newt = calcTimeJulianCent(jd + solNoonOffset / 1440.0);
  eqTime = calcEquationOfTime(newt);
  var solNoonLocal = 720 - longitude * 4 - eqTime; // in minutes
  while (solNoonLocal < 0.0) {
    solNoonLocal += 1440.0;
  }
  while (solNoonLocal >= 1440.0) {
    solNoonLocal -= 1440.0;
  }
  return formatDate(date, solNoonLocal);
  // return timeString(solNoonLocal, 3);
}

function calcSunriseSetUTC(rise, angle, JD, latitude, longitude) {
  var t = calcTimeJulianCent(JD);
  var eqTime = calcEquationOfTime(t);
  var solarDec = calcSunDeclination(t);
  var hourAngle = calcHourAngle(angle, latitude, solarDec);
  //alert("HA = " + radToDeg(hourAngle));
  if (!rise) hourAngle = -hourAngle;
  var delta = longitude + radToDeg(hourAngle);
  var timeUTC = 720 - 4.0 * delta - eqTime; // in minutes
  return timeUTC;
}
function calcSunriseSet(rise, angle, JD, date, latitude, longitude)
// rise = 1 for sunrise, 0 for sunset
{
  var timeUTC = calcSunriseSetUTC(rise, angle, JD, latitude, longitude);
  var newTimeUTC = calcSunriseSetUTC(rise, angle, JD + timeUTC / 1440.0, latitude, longitude);
  if (isNumber(newTimeUTC)) {
    return formatDate(date, newTimeUTC);
  } else {
    // no sunrise/set found
    return new Date(NaN);
  }
}

var degreesBelowHorizon = {
  sunrise: 0.833,
  sunriseEnd: 0.3,
  twilight: 6,
  nauticalTwilight: 12,
  night: 18,
  goldenHour: -6
};
var SolarCalc = /*#__PURE__*/function () {
  function SolarCalc(date, latitude, longitude) {
    _classCallCheck(this, SolarCalc);
    this.date = date;
    this.lat = latitude;
    this.longitude = longitude;
    this.sun = new Sun(date, latitude, longitude);
  }
  _createClass(SolarCalc, [{
    key: "solarNoon",
    get: function get() {
      return this.sun.solarNoon;
    }
  }, {
    key: "sunrise",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.sunrise, true);
    }
  }, {
    key: "sunset",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.sunrise);
    }
  }, {
    key: "sunriseEnd",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.sunriseEnd, true);
    }
  }, {
    key: "sunsetStart",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.sunriseEnd, false);
    }
  }, {
    key: "civilDawn",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.twilight, true);
    }
  }, {
    key: "dawn",
    get: function get() {
      return this.civilDawn;
    }
  }, {
    key: "civilDusk",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.twilight, false);
    }
  }, {
    key: "dusk",
    get: function get() {
      return this.civilDusk;
    }
  }, {
    key: "nauticalDawn",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.nauticalTwilight, true);
    }
  }, {
    key: "nauticalDusk",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.nauticalTwilight, false);
    }
  }, {
    key: "nightStart",
    get: function get() {
      return this.astronomicalDusk;
    }
  }, {
    key: "astronomicalDusk",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.night, false);
    }
  }, {
    key: "astronomicalDawn",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.night, true);
    }
  }, {
    key: "nightEnd",
    get: function get() {
      return this.astronomicalDawn;
    }
  }, {
    key: "goldenHourStart",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.goldenHour, false);
    }
  }, {
    key: "goldenHourEnd",
    get: function get() {
      return this.sun.timeAtAngle(degreesBelowHorizon.goldenHour, true);
    }
  }]);
  return SolarCalc;
}();

var _formatters = {};

/**
 * @private
 * @param {string} tzid
 * @return {Intl.DateTimeFormat}
 */
function getFormatter$1(tzid) {
  var fmt = _formatters[tzid];
  if (fmt) return fmt;
  var f = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: tzid
  });
  _formatters[tzid] = f;
  return f;
}
var dateFormatRegex = /^(\d+).(\d+).(\d+),?\s+(\d+).(\d+).(\d+)/;

/**
 * @private
 * @param {string} tzid
 * @param {Date} date
 * @return {string}
 */
function getPseudoISO(tzid, date) {
  var str = getFormatter$1(tzid).format(date);
  var m = dateFormatRegex.exec(str);
  var hour = m[4];
  if (hour == '24') hour = '00';
  m[3] = pad4(m[3]);
  return "".concat(m[3], "-").concat(m[1], "-").concat(m[2], "T").concat(hour, ":").concat(m[5], ":").concat(m[6], "Z");
}

/**
 * @private
 * @param {string} tzid
 * @param {Date} date
 * @return {number}
 */
function getTimezoneOffset(tzid, date) {
  var utcStr = getPseudoISO('UTC', date);
  var localStr = getPseudoISO(tzid, date);
  var diffMs = new Date(utcStr).getTime() - new Date(localStr).getTime();
  return Math.ceil(diffMs / 1000 / 60);
}

/**
 * @private
 * @param {number} number
 * @return {string}
 */
function pad4(number) {
  if (number < 0) {
    return '-00' + pad4(-number);
  } else if (number < 10) {
    return '000' + number;
  } else if (number < 100) {
    return '00' + number;
  } else if (number < 1000) {
    return '0' + number;
  }
  return String(number);
}

// eslint-disable-next-line require-jsdoc
function throwTypeError$3(error) {
  throw new TypeError(error);
}

/**
 * @private
 * @param {number} number
 * @return {string}
 */
function pad2(number) {
  if (number < 10) {
    return '0' + number;
  }
  return String(number);
}

/**
 * @typedef {Object} ZmanimTimesResult
 * @property {Date} dawn
 * @property {Date} dusk
 * @property {Date} goldenHour
 * @property {Date} goldenHourEnd
 * @property {Date} nauticalDawn
 * @property {Date} nauticalDusk
 * @property {Date} night
 * @property {Date} nightEnd
 * @property {Date} solarNoon
 * @property {Date} sunrise
 * @property {Date} sunriseEnd
 * @property {Date} sunset
 * @property {Date} sunsetStart
 * @property {Date} alotHaShachar
 * @property {Date} misheyakir
 * @property {Date} misheyakirMachmir
 * @property {Date} tzeit
*/

/** Class representing halachic times */
var Zmanim = /*#__PURE__*/function () {
  /**
     * Initialize a Zmanim instance.
     * @param {Date|HDate} date Regular or Hebrew Date. If `date` is a regular `Date`,
     *    hours, minutes, seconds and milliseconds are ignored.
     * @param {number} latitude
     * @param {number} longitude
     */
  function Zmanim(date, latitude, longitude) {
    _classCallCheck(this, Zmanim);
    if (typeof latitude !== 'number') throw new TypeError('Invalid latitude');
    if (typeof longitude !== 'number') throw new TypeError('Invalid longitude');
    if (latitude < -90 || latitude > 90) {
      throw new RangeError("Latitude ".concat(latitude, " out of range [-90,90]"));
    }
    if (longitude < -180 || longitude > 180) {
      throw new RangeError("Longitude ".concat(longitude, " out of range [-180,180]"));
    }
    var dt = isDate(date) ? date : HDate.isHDate(date) ? date.greg() : throwTypeError$3("invalid date: ".concat(date));
    this.date = dt;
    this.solarCalc = new SolarCalc(this.date, latitude, longitude);
    this.sun = this.solarCalc.sun;
    this.latitude = latitude;
    this.longitude = longitude;
  }
  /**
   * @deprecated
   * @return {ZmanimTimesResult}
   */
  _createClass(Zmanim, [{
    key: "suntime",
    value: function suntime() {
      return {
        solarNoon: this.solarCalc.solarNoon,
        sunrise: this.sunrise(),
        sunset: this.sunset(),
        sunriseEnd: this.solarCalc.sunriseEnd,
        sunsetStart: this.solarCalc.sunsetStart,
        dawn: this.dawn(),
        dusk: this.dusk(),
        nauticalDawn: this.solarCalc.nauticalDawn,
        nauticalDusk: this.solarCalc.nauticalDusk,
        nightEnd: this.solarCalc.nightEnd,
        night: this.solarCalc.nightStart,
        goldenHourEnd: this.solarCalc.goldenHourEnd,
        goldenHour: this.solarCalc.goldenHourStart,
        alotHaShachar: this.alotHaShachar(),
        misheyakir: this.misheyakir(),
        misheyakirMachmir: this.misheyakirMachmir(),
        tzeit: this.tzeit()
      };
    }
    /**
     * Upper edge of the Sun appears over the eastern horizon in the morning (0.833° above horizon)
     * @return {Date}
     */
  }, {
    key: "sunrise",
    value: function sunrise() {
      return this.sun.timeAtAngle(0.833333, true);
    }
    /**
     * When the upper edge of the Sun disappears below the horizon (0.833° below horizon)
     * @return {Date}
     */
  }, {
    key: "sunset",
    value: function sunset() {
      return this.sun.timeAtAngle(0.833333, false);
    }
    /**
     * Civil dawn; Sun is 6° below the horizon in the morning
     * @return {Date}
     */
  }, {
    key: "dawn",
    value: function dawn() {
      return this.solarCalc.dawn;
    }
    /**
     * Civil dusk; Sun is 6° below the horizon in the evening
     * @return {Date}
     */
  }, {
    key: "dusk",
    value: function dusk() {
      return this.solarCalc.dusk;
    }
    /** @return {number} */
  }, {
    key: "hour",
    value: function hour() {
      return (this.sunset() - this.sunrise()) / 12; // ms in hour
    }
    /** @return {number} */
  }, {
    key: "hourMins",
    value: function hourMins() {
      // hour in ms / (1000 ms in s * 60 s in m) = mins in halachic hour
      return this.hour() / (1000 * 60);
    }
    /** @return {Date} */
  }, {
    key: "gregEve",
    value: function gregEve() {
      var prev = new Date(this.date);
      prev.setDate(prev.getDate() - 1);
      var zman = new Zmanim(prev, this.latitude, this.longitude);
      return zman.sunset();
    }
    /** @return {number} */
  }, {
    key: "nightHour",
    value: function nightHour() {
      return (this.sunrise() - this.gregEve()) / 12; // ms in hour
    }
    /** @return {number} */
  }, {
    key: "nightHourMins",
    value: function nightHourMins() {
      // hour in ms / (1000 ms in s * 60 s in m) = mins in halachic hour
      return this.nightHour() / (1000 * 60);
    }
    /**
       * @param {number} hours
       * @return {Date}
       */
  }, {
    key: "hourOffset",
    value: function hourOffset(hours) {
      return new Date(this.sunrise().getTime() + this.hour() * hours);
    }
    /**
     * Midday – Chatzot; Sunrise plus 6 halachic hours
     * @return {Date}
     */
  }, {
    key: "chatzot",
    value: function chatzot() {
      return this.hourOffset(6);
    }
    /**
     * Midnight – Chatzot; Sunset plus 6 halachic hours
     * @return {Date}
     */
  }, {
    key: "chatzotNight",
    value: function chatzotNight() {
      return new Date(this.sunrise().getTime() - this.nightHour() * 6);
    }
    /**
     * Dawn – Alot haShachar; Sun is 16.1° below the horizon in the morning
     * @return {Date}
     */
  }, {
    key: "alotHaShachar",
    value: function alotHaShachar() {
      return this.sun.timeAtAngle(16.1, true);
    }
    /**
     * Earliest talis & tefillin – Misheyakir; Sun is 11.5° below the horizon in the morning
     * @return {Date}
     */
  }, {
    key: "misheyakir",
    value: function misheyakir() {
      return this.sun.timeAtAngle(11.5, true);
    }
    /**
     * Earliest talis & tefillin – Misheyakir Machmir; Sun is 10.2° below the horizon in the morning
     * @return {Date}
     */
  }, {
    key: "misheyakirMachmir",
    value: function misheyakirMachmir() {
      return this.sun.timeAtAngle(10.2, true);
    }
    /**
     * Latest Shema (Gra); Sunrise plus 3 halachic hours, according to the Gra
     * @return {Date}
     */
  }, {
    key: "sofZmanShma",
    value: function sofZmanShma() {
      // Gra
      return this.hourOffset(3);
    }
    /**
     * Latest Shacharit (Gra); Sunrise plus 4 halachic hours, according to the Gra
     * @return {Date}
     */
  }, {
    key: "sofZmanTfilla",
    value: function sofZmanTfilla() {
      // Gra
      return this.hourOffset(4);
    }
    /**
     * Latest Shema (MGA); Sunrise plus 3 halachic hours, according to Magen Avraham
     * @return {Date}
     */
  }, {
    key: "sofZmanShmaMGA",
    value: function sofZmanShmaMGA() {
      // Magen Avraham
      var alot72 = this.sunriseOffset(-72, false);
      var tzeit72 = this.sunsetOffset(72, false);
      var temporalHour = (tzeit72 - alot72) / 12; // ms in hour
      return new Date(alot72.getTime() + 3 * temporalHour);
    }
    /**
     * Latest Shacharit (MGA); Sunrise plus 4 halachic hours, according to Magen Avraham
     * @return {Date}
     */
  }, {
    key: "sofZmanTfillaMGA",
    value: function sofZmanTfillaMGA() {
      // Magen Avraham
      var alot72 = this.sunriseOffset(-72, false);
      var tzeit72 = this.sunsetOffset(72, false);
      var temporalHour = (tzeit72 - alot72) / 12; // ms in hour
      return new Date(alot72.getTime() + 4 * temporalHour);
    }
    /**
     * Earliest Mincha – Mincha Gedola; Sunrise plus 6.5 halachic hours
     * @return {Date}
     */
  }, {
    key: "minchaGedola",
    value: function minchaGedola() {
      return this.hourOffset(6.5);
    }
    /**
     * Preferable earliest time to recite Minchah – Mincha Ketana; Sunrise plus 9.5 halachic hours
     * @return {Date}
     */
  }, {
    key: "minchaKetana",
    value: function minchaKetana() {
      return this.hourOffset(9.5);
    }
    /**
     * Plag haMincha; Sunrise plus 10.75 halachic hours
     * @return {Date}
     */
  }, {
    key: "plagHaMincha",
    value: function plagHaMincha() {
      return this.hourOffset(10.75);
    }
    /**
     * @param {number} [angle=8.5] optional time for solar depression.
     *   Default is 8.5 degrees for 3 small stars, use 7.083 degress for 3 medium-sized stars.
     * @return {Date}
     */
  }, {
    key: "tzeit",
    value: function tzeit() {
      var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8.5;
      return this.sun.timeAtAngle(angle, false);
    }
    /**
     * Alias for sunrise
     * @return {Date}
     */
  }, {
    key: "neitzHaChama",
    value: function neitzHaChama() {
      return this.sunrise();
    }
    /**
     * Alias for sunset
     * @return {Date}
     */
  }, {
    key: "shkiah",
    value: function shkiah() {
      return this.sunset();
    }

    /**
     * Uses timeFormat to return a date like '20:34'
     * @param {Date} dt
     * @param {Intl.DateTimeFormat} timeFormat
     * @return {string}
     */
  }, {
    key: "sunriseOffset",
    value:
    /**
     * Returns sunrise + `offset` minutes (either positive or negative).
     * @param {number} offset minutes
     * @param {boolean} roundMinute round time to nearest minute (default true)
     * @return {Date}
     */
    function sunriseOffset(offset) {
      var roundMinute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var sunrise = this.sunrise();
      if (isNaN(sunrise.getTime())) {
        return sunrise;
      }
      if (roundMinute) {
        // For positive offsets only, round up to next minute if needed
        if (offset > 0 && sunrise.getSeconds() >= 30) {
          offset++;
        }
        sunrise.setSeconds(0, 0);
      }
      return new Date(sunrise.getTime() + offset * 60 * 1000);
    }

    /**
     * Returns sunset + `offset` minutes (either positive or negative).
     * @param {number} offset minutes
     * @param {boolean} roundMinute round time to nearest minute (default true)
     * @return {Date}
     */
  }, {
    key: "sunsetOffset",
    value: function sunsetOffset(offset) {
      var roundMinute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var sunset = this.sunset();
      if (isNaN(sunset.getTime())) {
        return sunset;
      }
      if (roundMinute) {
        // For Havdalah only, round up to next minute if needed
        if (offset > 0 && sunset.getSeconds() >= 30) {
          offset++;
        }
        sunset.setSeconds(0, 0);
      }
      return new Date(sunset.getTime() + offset * 60 * 1000);
    }

    /**
     * Returns an array with sunset + offset Date object, and a 24-hour string formatted time.
     * @deprecated
     * @param {number} offset
     * @param {Intl.DateTimeFormat} timeFormat
     * @return {Object[]}
     */
  }, {
    key: "sunsetOffsetTime",
    value: function sunsetOffsetTime(offset, timeFormat) {
      var dt = this.sunsetOffset(offset, true);
      if (isNaN(dt.getTime())) {
        // `No sunset for ${location} on ${hd}`
        return [undefined, undefined];
      }
      var time = Zmanim.formatTime(dt, timeFormat);
      return [dt, time];
    }

    /**
     * Returns an array with tzeit Date object and a 24-hour string formatted time.
     * @deprecated
     * @param {number} angle degrees for solar depression.
     *   Default is 8.5 degrees for 3 small stars, use 7.083 degress for 3 medium-sized stars.
     * @param {Intl.DateTimeFormat} timeFormat
     * @return {Object[]}
     */
  }, {
    key: "tzeitTime",
    value: function tzeitTime(angle, timeFormat) {
      var dt = this.tzeit(angle);
      if (isNaN(dt.getTime())) {
        return [undefined, undefined];
      }
      var time = Zmanim.roundTime(dt);
      var timeStr = Zmanim.formatTime(time, timeFormat);
      return [time, timeStr];
    }
  }], [{
    key: "formatTime",
    value: function formatTime(dt, timeFormat) {
      var time = timeFormat.format(dt);
      var hm = time.split(':');
      if (hm[0] === '24') {
        return '00:' + hm[1];
      }
      return time;
    }

    /**
     * Discards seconds, rounding to nearest minute.
     * @param {Date} dt
     * @return {Date}
     */
  }, {
    key: "roundTime",
    value: function roundTime(dt) {
      var millis = dt.getTime();
      if (isNaN(millis)) {
        return dt;
      }
      // Round up to next minute if needed
      var millisOnly = dt.getMilliseconds();
      var seconds = dt.getSeconds();
      if (seconds === 0 && millisOnly === 0) {
        return dt;
      }
      var secAndMillis = seconds * 1000 + millisOnly;
      var delta = secAndMillis >= 30000 ? 60000 - secAndMillis : -1 * secAndMillis;
      return new Date(millis + delta);
    }

    /**
     * Get offset string (like "+05:00" or "-08:00") from tzid (like "Europe/Moscow")
     * @param {string} tzid
     * @param {Date} date
     * @return {string}
     */
  }, {
    key: "timeZoneOffset",
    value: function timeZoneOffset(tzid, date) {
      var offset = getTimezoneOffset(tzid, date);
      var offsetAbs = Math.abs(offset);
      var hours = Math.floor(offsetAbs / 60);
      var minutes = offsetAbs % 60;
      return (offset < 0 ? '+' : '-') + pad2(hours) + ':' + pad2(minutes);
    }

    /**
     * Returns a string like "2022-04-01T13:06:00-11:00"
     * @param {string} tzid
     * @param {Date} date
     * @return {string}
     */
  }, {
    key: "formatISOWithTimeZone",
    value: function formatISOWithTimeZone(tzid, date) {
      if (isNaN(date.getTime())) {
        return null;
      }
      return getPseudoISO(tzid, date).substring(0, 19) + Zmanim.timeZoneOffset(tzid, date);
    }
  }]);
  return Zmanim;
}();

var classicCities0 = [['Ashdod', 'IL', 31.79213, 34.64966, 'Asia/Jerusalem'], ['Atlanta', 'US', 33.749, -84.38798, 'America/New_York'], ['Austin', 'US', 30.26715, -97.74306, 'America/Chicago'], ['Baghdad', 'IQ', 33.34058, 44.40088, 'Asia/Baghdad'], ['Beer Sheva', 'IL', 31.25181, 34.7913, 'Asia/Jerusalem'], ['Berlin', 'DE', 52.52437, 13.41053, 'Europe/Berlin'], ['Baltimore', 'US', 39.29038, -76.61219, 'America/New_York'], ['Bogota', 'CO', 4.60971, -74.08175, 'America/Bogota'], ['Boston', 'US', 42.35843, -71.05977, 'America/New_York'], ['Budapest', 'HU', 47.49801, 19.03991, 'Europe/Budapest'], ['Buenos Aires', 'AR', -34.61315, -58.37723, 'America/Argentina/Buenos_Aires'], ['Buffalo', 'US', 42.88645, -78.87837, 'America/New_York'], ['Chicago', 'US', 41.85003, -87.65005, 'America/Chicago'], ['Cincinnati', 'US', 39.162, -84.45689, 'America/New_York'], ['Cleveland', 'US', 41.4995, -81.69541, 'America/New_York'], ['Dallas', 'US', 32.78306, -96.80667, 'America/Chicago'], ['Denver', 'US', 39.73915, -104.9847, 'America/Denver'], ['Detroit', 'US', 42.33143, -83.04575, 'America/Detroit'], ['Eilat', 'IL', 29.55805, 34.94821, 'Asia/Jerusalem'], ['Gibraltar', 'GI', 36.14474, -5.35257, 'Europe/Gibraltar'], ['Haifa', 'IL', 32.81841, 34.9885, 'Asia/Jerusalem'], ['Hawaii', 'US', 21.30694, -157.85833, 'Pacific/Honolulu'], ['Helsinki', 'FI', 60.16952, 24.93545, 'Europe/Helsinki'], ['Houston', 'US', 29.76328, -95.36327, 'America/Chicago'], ['Jerusalem', 'IL', 31.76904, 35.21633, 'Asia/Jerusalem'], ['Johannesburg', 'ZA', -26.20227, 28.04363, 'Africa/Johannesburg'], ['Kiev', 'UA', 50.45466, 30.5238, 'Europe/Kiev'], ['La Paz', 'BO', -16.5, -68.15, 'America/La_Paz'], ['Livingston', 'US', 40.79593, -74.31487, 'America/New_York'], ['Las Vegas', 'US', 36.17497, -115.13722, 'America/Los_Angeles'], ['London', 'GB', 51.50853, -0.12574, 'Europe/London'], ['Los Angeles', 'US', 34.05223, -118.24368, 'America/Los_Angeles'], ['Marseilles', 'FR', 43.29695, 5.38107, 'Europe/Paris'], ['Miami', 'US', 25.77427, -80.19366, 'America/New_York'], ['Minneapolis', 'US', 44.97997, -93.26384, 'America/Chicago'], ['Melbourne', 'AU', -37.814, 144.96332, 'Australia/Melbourne'], ['Mexico City', 'MX', 19.42847, -99.12766, 'America/Mexico_City'], ['Montreal', 'CA', 45.50884, -73.58781, 'America/Toronto'], ['Moscow', 'RU', 55.75222, 37.61556, 'Europe/Moscow'], ['New York', 'US', 40.71427, -74.00597, 'America/New_York'], ['Omaha', 'US', 41.25861, -95.93779, 'America/Chicago'], ['Ottawa', 'CA', 45.41117, -75.69812, 'America/Toronto'], ['Panama City', 'PA', 8.9936, -79.51973, 'America/Panama'], ['Paris', 'FR', 48.85341, 2.3488, 'Europe/Paris'], ['Pawtucket', 'US', 41.87871, -71.38256, 'America/New_York'], ['Petach Tikvah', 'IL', 32.08707, 34.88747, 'Asia/Jerusalem'], ['Philadelphia', 'US', 39.95233, -75.16379, 'America/New_York'], ['Phoenix', 'US', 33.44838, -112.07404, 'America/Phoenix'], ['Pittsburgh', 'US', 40.44062, -79.99589, 'America/New_York'], ['Providence', 'US', 41.82399, -71.41283, 'America/New_York'], ['Portland', 'US', 45.52345, -122.67621, 'America/Los_Angeles'], ['Saint Louis', 'US', 38.62727, -90.19789, 'America/Chicago'], ['Saint Petersburg', 'RU', 59.93863, 30.31413, 'Europe/Moscow'], ['San Diego', 'US', 32.71533, -117.15726, 'America/Los_Angeles'], ['San Francisco', 'US', 37.77493, -122.41942, 'America/Los_Angeles'], ['Sao Paulo', 'BR', -23.5475, -46.63611, 'America/Sao_Paulo'], ['Seattle', 'US', 47.60621, -122.33207, 'America/Los_Angeles'], ['Sydney', 'AU', -33.86785, 151.20732, 'Australia/Sydney'], ['Tel Aviv', 'IL', 32.08088, 34.78057, 'Asia/Jerusalem'], ['Tiberias', 'IL', 32.79221, 35.53124, 'Asia/Jerusalem'], ['Toronto', 'CA', 43.70011, -79.4163, 'America/Toronto'], ['Vancouver', 'CA', 49.24966, -123.11934, 'America/Vancouver'], ['White Plains', 'US', 41.03399, -73.76291, 'America/New_York'], ['Washington DC', 'US', 38.89511, -77.03637, 'America/New_York'], ['Worcester', 'US', 42.26259, -71.80229, 'America/New_York']];
var classicCities = Object.create(null);

// Zip-Codes.com TimeZone IDs
var ZIPCODES_TZ_MAP = {
  '0': 'UTC',
  '4': 'America/Puerto_Rico',
  // Atlantic (GMT -04:00)
  '5': 'America/New_York',
  //    Eastern  (GMT -05:00)
  '6': 'America/Chicago',
  //     Central  (GMT -06:00)
  '7': 'America/Denver',
  //      Mountain (GMT -07:00)
  '8': 'America/Los_Angeles',
  // Pacific  (GMT -08:00)
  '9': 'America/Anchorage',
  //   Alaska   (GMT -09:00)
  '10': 'Pacific/Honolulu',
  //   Hawaii-Aleutian Islands (GMT -10:00)
  '11': 'Pacific/Pago_Pago',
  //  American Samoa (GMT -11:00)
  '13': 'Pacific/Funafuti',
  //   Marshall Islands (GMT +12:00)
  '14': 'Pacific/Guam',
  //       Guam     (GMT +10:00)
  '15': 'Pacific/Palau',
  //      Palau    (GMT +9:00)
  '16': 'Pacific/Chuuk' //      Micronesia (GMT +11:00)
};

/** @private */
var timeFormatCache = Object.create(null);

/**
 * Gets a 24-hour time formatter (e.g. 07:41 or 20:03) from cache
 * or makes a new one if needed
 * @private
 * @param {string} tzid
 * @return {Intl.DateTimeFormat}
 */
function getFormatter(tzid) {
  var fmt = timeFormatCache[tzid];
  if (fmt) return fmt;
  var f = new Intl.DateTimeFormat('en-US', {
    timeZone: tzid,
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });
  timeFormatCache[tzid] = f;
  return f;
}

/** Class representing Location */
var Location = /*#__PURE__*/function () {
  /**
   * Initialize a Location instance
   * @param {number} latitude - Latitude as a decimal, valid range -90 thru +90 (e.g. 41.85003)
   * @param {number} longitude - Longitude as a decimal, valid range -180 thru +180 (e.g. -87.65005)
   * @param {boolean} il - in Israel (true) or Diaspora (false)
   * @param {string} tzid - Olson timezone ID, e.g. "America/Chicago"
   * @param {string} cityName - optional descriptive city name
   * @param {string} countryCode - ISO 3166 alpha-2 country code (e.g. "FR")
   * @param {string} geoid - optional string or numeric geographic ID
   */
  function Location(latitude, longitude, il, tzid, cityName, countryCode, geoid) {
    _classCallCheck(this, Location);
    var lat = typeof latitude === 'number' ? latitude : parseFloat(latitude);
    if (isNaN(lat) || lat < -90 || lat > 90) {
      throw new RangeError("Latitude ".concat(latitude, " out of range [-90,90]"));
    }
    var long = typeof longitude === 'number' ? longitude : parseFloat(longitude);
    if (isNaN(long) || long < -180 || long > 180) {
      throw new RangeError("Longitude ".concat(longitude, " out of range [-180,180]"));
    }
    this.latitude = lat;
    this.longitude = long;
    this.il = Boolean(il);
    this.tzid = tzid;
    this.name = cityName;
    this.cc = countryCode;
    this.geoid = geoid;
  }

  /** @return {number} */
  _createClass(Location, [{
    key: "getLatitude",
    value: function getLatitude() {
      return this.latitude;
    }

    /** @return {number} */
  }, {
    key: "getLongitude",
    value: function getLongitude() {
      return this.longitude;
    }

    /** @return {boolean} */
  }, {
    key: "getIsrael",
    value: function getIsrael() {
      return this.il;
    }

    /** @return {string} */
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Returns the location name, up to the first comma
     * @return {string}
     */
  }, {
    key: "getShortName",
    value: function getShortName() {
      var name = this.name;
      if (!name) return name;
      var comma = name.indexOf(', ');
      if (comma === -1) return name;
      if (this.cc === 'US' && name[comma + 2] === 'D') {
        if (name[comma + 3] === 'C') {
          return name.substring(0, comma + 4);
        } else if (name[comma + 3] === '.' && name[comma + 4] === 'C') {
          return name.substring(0, comma + 6);
        }
      }
      return name.substring(0, comma);
    }

    /** @return {string} */
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.cc;
    }

    /** @return {string} */
  }, {
    key: "getTzid",
    value: function getTzid() {
      return this.tzid;
    }

    /**
     * Gets a 24-hour time formatter (e.g. 07:41 or 20:03) for this location
     * @return {Intl.DateTimeFormat}
     */
  }, {
    key: "getTimeFormatter",
    value: function getTimeFormatter() {
      return getFormatter(this.tzid);
    }

    /** @return {string} */
  }, {
    key: "getGeoId",
    value: function getGeoId() {
      return this.geoid;
    }

    /**
     * Creates a location object from one of 60 "classic" Hebcal city names.
     * The following city names are supported:
     * 'Ashdod', 'Atlanta', 'Austin', 'Baghdad', 'Beer Sheva',
     * 'Berlin', 'Baltimore', 'Bogota', 'Boston', 'Budapest',
     * 'Buenos Aires', 'Buffalo', 'Chicago', 'Cincinnati', 'Cleveland',
     * 'Dallas', 'Denver', 'Detroit', 'Eilat', 'Gibraltar', 'Haifa',
     * 'Hawaii', 'Helsinki', 'Houston', 'Jerusalem', 'Johannesburg',
     * 'Kiev', 'La Paz', 'Livingston', 'Las Vegas', 'London', 'Los Angeles',
     * 'Marseilles', 'Miami', 'Minneapolis', 'Melbourne', 'Mexico City',
     * 'Montreal', 'Moscow', 'New York', 'Omaha', 'Ottawa', 'Panama City',
     * 'Paris', 'Pawtucket', 'Petach Tikvah', 'Philadelphia', 'Phoenix',
     * 'Pittsburgh', 'Providence', 'Portland', 'Saint Louis', 'Saint Petersburg',
     * 'San Diego', 'San Francisco', 'Sao Paulo', 'Seattle', 'Sydney',
     * 'Tel Aviv', 'Tiberias', 'Toronto', 'Vancouver', 'White Plains',
     * 'Washington DC', 'Worcester'
     * @param {string} name
     * @return {Location}
     */
  }, {
    key: "sunset",
    value:
    /**
     * @deprecated
     * @param {Date|HDate} hdate
     * @return {Date}
     */
    function sunset(hdate) {
      return new Zmanim(hdate, this.getLatitude(), this.getLongitude()).sunset();
    }

    /**
     * @deprecated
     * @param {Date|HDate} hdate
     * @param {number} [angle]
     * @return {Date}
     */
  }, {
    key: "tzeit",
    value: function tzeit(hdate, angle) {
      return new Zmanim(hdate, this.getLatitude(), this.getLongitude()).tzeit(angle);
    }

    /** @return {string} */
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this);
    }

    /**
     * Converts legacy Hebcal timezone to a standard Olson tzid.
     * @param {number} tz integer, GMT offset in hours
     * @param {string} dst 'none', 'eu', 'usa', or 'israel'
     * @return {string}
     */
  }], [{
    key: "lookup",
    value: function lookup(name) {
      return classicCities[name.toLowerCase()];
    }
  }, {
    key: "legacyTzToTzid",
    value: function legacyTzToTzid(tz, dst) {
      tz = +tz;
      if (dst == 'none') {
        if (tz == 0) {
          return 'UTC';
        } else {
          var plus = tz > 0 ? '+' : '';
          return "Etc/GMT".concat(plus).concat(tz);
        }
      } else if (tz == 2 && dst == 'israel') {
        return 'Asia/Jerusalem';
      } else if (dst == 'eu') {
        switch (tz) {
          case -2:
            return 'Atlantic/Cape_Verde';
          case -1:
            return 'Atlantic/Azores';
          case 0:
            return 'Europe/London';
          case 1:
            return 'Europe/Paris';
          case 2:
            return 'Europe/Athens';
        }
      } else if (dst == 'usa') {
        return ZIPCODES_TZ_MAP[String(tz * -1)];
      }
      return undefined;
    }

    /**
     * Converts timezone info from Zip-Codes.com to a standard Olson tzid.
     * @example
     * Location.getUsaTzid('AZ', 7, 'Y') // 'America/Denver'
     * @param {string} state two-letter all-caps US state abbreviation like 'CA'
     * @param {number} tz positive number, 5=America/New_York, 8=America/Los_Angeles
     * @param {string} dst single char 'Y' or 'N'
     * @return {string}
     */
  }, {
    key: "getUsaTzid",
    value: function getUsaTzid(state, tz, dst) {
      if (tz == 10 && state == 'AK') {
        return 'America/Adak';
      } else if (tz == 7 && state == 'AZ') {
        return dst == 'Y' ? 'America/Denver' : 'America/Phoenix';
      } else {
        return ZIPCODES_TZ_MAP[tz];
      }
    }

    /**
     * Builds a city description from geonameid string components
     * @deprecated
     * @param {string} cityName e.g. 'Tel Aviv' or 'Chicago'
     * @param {string} admin1 e.g. 'England' or 'Massachusetts'
     * @param {string} countryName full country name, e.g. 'Israel' or 'United States'
     * @return {string}
     */
  }, {
    key: "geonameCityDescr",
    value: function geonameCityDescr(cityName, admin1, countryName) {
      if (countryName == 'United States') countryName = 'USA';
      if (countryName == 'United Kingdom') countryName = 'UK';
      var cityDescr = cityName;
      if (countryName != 'Israel' && admin1 && admin1.indexOf(cityName) != 0) {
        cityDescr += ', ' + admin1;
      }
      if (countryName) {
        cityDescr += ', ' + countryName;
      }
      return cityDescr;
    }

    /**
     * Adds a location name for `Location.lookup()` only if the name isn't
     * already being used. Returns `false` if the name is already taken
     * and `true` if successfully added.
     * @param {string} cityName
     * @param {Location} location
     * @return {boolean}
     */
  }, {
    key: "addLocation",
    value: function addLocation(cityName, location) {
      var name = cityName.toLowerCase();
      if (classicCities[name]) {
        return false;
      }
      classicCities[name] = location;
      return true;
    }
  }]);
  return Location;
}();
classicCities0.forEach(function (city) {
  var location = new Location(city[2], city[3], city[1] == 'IL', city[4], city[0], city[1]);
  Location.addLocation(location.getName(), location);
});

var days = {
  FRI: 5,
  SAT: 6
};

/**
 * @private
 * @constant
 * This method returns the tzais (nightfall) based on the opinion of the
 * Geonim calculated as 30 minutes after sunset during the equinox
 * (on March 16, about 4 days before the astronomical equinox, the day that
 * a solar hour is 60 minutes) in Yerushalayim.
 * @see {https://kosherjava.com/zmanim/docs/api/com/kosherjava/zmanim/ComplexZmanimCalendar.html#getTzaisGeonim7Point083Degrees()}
 */
var TZEIT_3MEDIUM_STARS = 7.083;

/**
 * @private
 * @param {Event} e
 * @param {HDate} hd
 * @param {number} dow
 * @param {Location} location
 * @param {CalOptions} options
 * @return {Event}
 */
function makeCandleEvent(e, hd, dow, location, options) {
  var havdalahTitle = false;
  var useHavdalahOffset = dow == days.SAT;
  var mask = e ? e.getFlags() : flags.LIGHT_CANDLES;
  if (typeof e !== 'undefined') {
    // if linked event && dow == FRI, use Candle lighting time & title
    if (dow != days.FRI) {
      if (mask & (flags.LIGHT_CANDLES_TZEIS | flags.CHANUKAH_CANDLES)) {
        useHavdalahOffset = true;
      } else if (mask & flags.YOM_TOV_ENDS) {
        havdalahTitle = true;
        useHavdalahOffset = true;
      }
    }
  } else if (dow == days.SAT) {
    havdalahTitle = true;
    mask = flags.LIGHT_CANDLES_TZEIS;
  }
  // if offset is 0 or undefined, we'll use tzeit time
  var offset = useHavdalahOffset ? options.havdalahMins : options.candleLightingMins;
  var zmanim = new Zmanim(hd, location.getLatitude(), location.getLongitude());
  var time = offset ? zmanim.sunsetOffset(offset, true) : zmanim.tzeit(options.havdalahDeg);
  if (isNaN(time.getTime())) {
    return null; // no sunset
  }

  if (havdalahTitle) {
    return new HavdalahEvent(hd, mask, time, location, options.havdalahMins, e);
  } else {
    return new CandleLightingEvent(hd, mask, time, location, e);
  }
}

/** An event that has an `eventTime` and `eventTimeStr` */
var TimedEvent = /*#__PURE__*/function (_Event) {
  _inherits(TimedEvent, _Event);
  var _super = _createSuper(TimedEvent);
  /**
   * @param {HDate} date
   * @param {string} desc Description (not translated)
   * @param {number} mask
   * @param {Date} eventTime
   * @param {Location} location
   * @param {Event} linkedEvent
   */
  function TimedEvent(date, desc, mask, eventTime, location, linkedEvent) {
    var _this;
    _classCallCheck(this, TimedEvent);
    _this = _super.call(this, date, desc, mask);
    _this.eventTime = Zmanim.roundTime(eventTime);
    _this.location = location;
    var timeFormat = location.getTimeFormatter();
    _this.eventTimeStr = Zmanim.formatTime(_this.eventTime, timeFormat);
    if (typeof linkedEvent !== 'undefined') {
      _this.linkedEvent = linkedEvent;
    }
    return _this;
  }
  /**
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(TimedEvent, [{
    key: "render",
    value: function render(locale) {
      return Locale.gettext(this.getDesc(), locale) + ': ' + this.eventTimeStr;
    }
    /**
     * Returns translation of "Candle lighting" without the time.
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      return Locale.gettext(this.getDesc(), locale);
    }
  }]);
  return TimedEvent;
}(Event);

/** Havdalah after Shabbat or holiday */
var HavdalahEvent = /*#__PURE__*/function (_TimedEvent) {
  _inherits(HavdalahEvent, _TimedEvent);
  var _super2 = _createSuper(HavdalahEvent);
  /**
   * @param {HDate} date
   * @param {number} mask
   * @param {Date} eventTime
   * @param {Location} location
   * @param {number} havdalahMins
   * @param {Event} linkedEvent
   */
  function HavdalahEvent(date, mask, eventTime, location, havdalahMins, linkedEvent) {
    var _this2;
    _classCallCheck(this, HavdalahEvent);
    _this2 = _super2.call(this, date, 'Havdalah', mask, eventTime, location, linkedEvent);
    if (havdalahMins) {
      _this2.havdalahMins = havdalahMins;
    }
    return _this2;
  }
  /**
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(HavdalahEvent, [{
    key: "render",
    value: function render(locale) {
      return this.renderBrief(locale) + ': ' + this.eventTimeStr;
    }
    /**
     * Returns translation of "Havdalah" without the time.
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      var str = Locale.gettext(this.getDesc(), locale);
      if (this.havdalahMins) {
        var min = Locale.gettext('min', locale);
        str += " (".concat(this.havdalahMins, " ").concat(min, ")");
      }
      return str;
    }
    /** @return {string} */
  }, {
    key: "getEmoji",
    value: function getEmoji() {
      return '✨';
    }
  }]);
  return HavdalahEvent;
}(TimedEvent);

/** Candle lighting before Shabbat or holiday */
var CandleLightingEvent = /*#__PURE__*/function (_TimedEvent2) {
  _inherits(CandleLightingEvent, _TimedEvent2);
  var _super3 = _createSuper(CandleLightingEvent);
  /**
   * @param {HDate} date
   * @param {number} mask
   * @param {Date} eventTime
   * @param {Location} location
   * @param {Event} linkedEvent
   */
  function CandleLightingEvent(date, mask, eventTime, location, linkedEvent) {
    _classCallCheck(this, CandleLightingEvent);
    return _super3.call(this, date, 'Candle lighting', mask, eventTime, location, linkedEvent);
  }
  /** @return {string} */
  _createClass(CandleLightingEvent, [{
    key: "getEmoji",
    value: function getEmoji() {
      return '🕯️';
    }
  }]);
  return CandleLightingEvent;
}(TimedEvent);

/**
 * Makes a pair of events representing fast start and end times
 * @private
 * @param {Event} ev
 * @param {Location} location
 * @return {Event}
 */
function makeFastStartEnd(ev, location) {
  var desc = ev.getDesc();
  if (desc === 'Yom Kippur') {
    return ev;
  }
  ev = ev.clone();
  var hd = ev.getDate();
  var dt = hd.greg();
  var zmanim = new Zmanim(dt, location.getLatitude(), location.getLongitude());
  if (desc === 'Erev Tish\'a B\'Av') {
    var sunset = zmanim.sunset();
    ev.startEvent = makeTimedEvent(hd, sunset, 'Fast begins', ev, location);
  } else if (desc.substring(0, 11) === 'Tish\'a B\'Av') {
    ev.endEvent = makeTimedEvent(hd, zmanim.tzeit(TZEIT_3MEDIUM_STARS), 'Fast ends', ev, location);
  } else {
    var dawn = zmanim.alotHaShachar();
    ev.startEvent = makeTimedEvent(hd, dawn, 'Fast begins', ev, location);
    if (dt.getDay() !== 5 && !(hd.getDate() === 14 && hd.getMonth() === months.NISAN)) {
      ev.endEvent = makeTimedEvent(hd, zmanim.tzeit(TZEIT_3MEDIUM_STARS), 'Fast ends', ev, location);
    }
  }
  return ev;
}

/**
 * @private
 * @param {HDate} hd
 * @param {Date} time
 * @param {string} desc
 * @param {Event} ev
 * @param {Location} location
 * @return {TimedEvent}
 */
function makeTimedEvent(hd, time, desc, ev, location) {
  if (isNaN(time.getTime())) {
    return null;
  }
  return new TimedEvent(hd, desc, ev.getFlags(), time, location, ev);
}

/**
 * Makes a candle-lighting event for Chankah (not on Friday/Saturday)
 * @private
 * @param {Event} ev
 * @param {HDate} hd
 * @param {Location} location
 * @return {TimedEvent}
 */
function makeWeekdayChanukahCandleLighting(ev, hd, location) {
  var zmanim = new Zmanim(hd.greg(), location.getLatitude(), location.getLongitude());
  var candleLightingTime = zmanim.dusk();
  // const candleLightingTime = zmanim.tzeit(4.6667);
  return makeTimedEvent(hd, candleLightingTime, ev.getDesc(), ev, location);
}

var shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Represents a molad, the moment when the new moon is "born"
 */
var Molad = /*#__PURE__*/function () {
  /**
   * Calculates the molad for a Hebrew month
   * @param {number} year
   * @param {number} month
   */
  function Molad(year, month) {
    _classCallCheck(this, Molad);
    var m_adj = month - 7;
    if (m_adj < 0) {
      m_adj += HDate.monthsInYear(year);
    }
    var m_elapsed = 235 * Math.floor((year - 1) / 19) +
    // Months in complete 19 year lunar (Metonic) cycles so far
    12 * ((year - 1) % 19) +
    // Regular months in this cycle
    Math.floor((7 * ((year - 1) % 19) + 1) / 19) +
    // Leap months this cycle
    m_adj; // add elapsed months till the start of the molad of the month

    var p_elapsed = 204 + Math.floor(793 * (m_elapsed % 1080));
    var h_elapsed = 5 + 12 * m_elapsed + 793 * Math.floor(m_elapsed / 1080) + Math.floor(p_elapsed / 1080) - 6;
    var parts = p_elapsed % 1080 + 1080 * (h_elapsed % 24);
    var chalakim = parts % 1080;
    var day = 1 + 29 * m_elapsed + Math.floor(h_elapsed / 24);
    var dow = day % 7;
    this.year = year;
    this.month = month;
    this.dow = dow;
    this.hour = h_elapsed % 24;
    this.minutes = Math.floor(chalakim / 18);
    this.chalakim = chalakim % 18;
  }
  /**
   * @return {number}
   */
  _createClass(Molad, [{
    key: "getYear",
    value: function getYear() {
      return this.year;
    }
    /**
     * @return {number}
     */
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.month;
    }
    /**
     * @return {string}
     */
  }, {
    key: "getMonthName",
    value: function getMonthName() {
      return HDate.getMonthName(this.month, this.year);
    }
    /**
     * @return {number} Day of Week (0=Sunday, 6=Saturday)
     */
  }, {
    key: "getDow",
    value: function getDow() {
      return this.dow;
    }
    /**
     * @return {number} hour of day (0-23)
     */
  }, {
    key: "getHour",
    value: function getHour() {
      return this.hour;
    }
    /**
     * @return {number} minutes past hour (0-59)
     */
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      return this.minutes;
    }
    /**
     * @return {number} parts of a minute (0-17)
     */
  }, {
    key: "getChalakim",
    value: function getChalakim() {
      return this.chalakim;
    }
  }]);
  return Molad;
}();

/** Represents a Molad announcement on Shabbat Mevarchim */
var MoladEvent = /*#__PURE__*/function (_Event) {
  _inherits(MoladEvent, _Event);
  var _super = _createSuper(MoladEvent);
  /**
   * @param {HDate} date Hebrew date event occurs
   * @param {number} hyear molad year
   * @param {number} hmonth molad month
   */
  function MoladEvent(date, hyear, hmonth) {
    var _this;
    _classCallCheck(this, MoladEvent);
    var m = new Molad(hyear, hmonth);
    var monthName = m.getMonthName();
    _this = _super.call(this, date, "Molad ".concat(monthName, " ").concat(hyear), flags.MOLAD);
    _this.molad = m;
    return _this;
  }
  /**
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(MoladEvent, [{
    key: "render",
    value: function render(locale) {
      var m = this.molad;
      var monthName = m.getMonthName();
      var dow = shortDayNames[m.getDow()];
      var minutes = m.getMinutes();
      var hour = m.getHour();
      var chalakim = m.getChalakim();
      return "Molad ".concat(monthName, ": ").concat(dow, ", ").concat(minutes, " minutes and ").concat(chalakim, " chalakim after ").concat(hour, ":00");
    }
  }]);
  return MoladEvent;
}(Event);

var $$5 = _export;
var uncurryThis$5 = functionUncurryThis;
var toAbsoluteIndex = toAbsoluteIndex$4;

var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis$5([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$$5({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw $RangeError(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join(elements, '');
  }
});

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$4 = functionUncurryThis;
var requireObjectCoercible$2 = requireObjectCoercible$5;
var toString$2 = toString$4;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$4(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$2(requireObjectCoercible$2($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$2 = fails$f;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$2(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$4 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$4({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var sefirot = [null, 'Lovingkindness', 'Might', 'Beauty', 'Eternity', 'Splendor', 'Foundation', 'Majesty'];
var sefirotTranslit = [null, 'Chesed', 'Gevurah', 'Tiferet', 'Netzach', 'Hod', 'Yesod', 'Malkhut'];

/** Represents a day 1-49 of counting the Omer from Pesach to Shavuot */
var OmerEvent = /*#__PURE__*/function (_Event) {
  _inherits(OmerEvent, _Event);
  var _super = _createSuper(OmerEvent);
  /**
   * @param {HDate} date
   * @param {number} omerDay
   */
  function OmerEvent(date, omerDay) {
    var _this;
    _classCallCheck(this, OmerEvent);
    _this = _super.call(this, date, "Omer ".concat(omerDay), flags.OMER_COUNT, {
      omer: omerDay
    });
    if (omerDay < 1 || omerDay > 49) {
      throw new RangeError("Invalid Omer day ".concat(omerDay));
    }
    _this.weekNumber = Math.floor((omerDay - 1) / 7) + 1;
    _this.daysWithinWeeks = omerDay % 7 || 7;
    return _this;
  }
  /**
   * @param {string} lang
   * @return {string}
   */
  _createClass(OmerEvent, [{
    key: "sefira",
    value: function sefira() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      var week = sefirot[this.weekNumber];
      var dayWithinWeek = sefirot[this.daysWithinWeeks];
      switch (lang) {
        case 'he':
          var heWeek = Locale.gettext(week, 'he');
          var heDayWithinWeek = Locale.gettext(dayWithinWeek, 'he');
          var hePrefix = this.weekNumber === 2 || this.weekNumber === 6 ? 'שֶׁבִּ' : 'שֶׁבְּ';
          return "".concat(heDayWithinWeek, " ").concat(hePrefix).concat(heWeek).normalize();
        case 'translit':
          var translitWeek = sefirotTranslit[this.weekNumber];
          var translitDayWithinWeek = sefirotTranslit[this.daysWithinWeeks];
          var translitPrefix = this.weekNumber === 2 || this.weekNumber === 6 ? 'shebi' : "sheb'";
          return "".concat(translitDayWithinWeek, " ").concat(translitPrefix).concat(translitWeek);
        case 'en':
        default:
          return "".concat(dayWithinWeek, " within ").concat(week);
      }
    }
    /**
     * @todo use gettext()
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "render",
    value: function render(locale) {
      locale = locale || Locale.getLocaleName();
      var omer = this.omer;
      var nth = locale == 'he' ? gematriya(omer) : Locale.ordinal(omer, locale);
      return nth + ' ' + Locale.gettext('day of the Omer', locale);
    }
    /**
     * Returns translation of "Omer day 22" without ordinal numbers.
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      return Locale.gettext('Omer', locale) + ' ' + Locale.gettext('day', locale) + ' ' + this.omer;
    }
    /** @return {string} */
  }, {
    key: "getEmoji",
    value: function getEmoji() {
      if (typeof this.emoji === 'string') return this.emoji;
      var number = this.omer;
      if (number <= 20) {
        return String.fromCodePoint(9312 + number - 1);
      } else if (number <= 35) {
        // between 21 and 35 inclusive
        return String.fromCodePoint(12881 + number - 21);
      } else {
        // between 36 and 49 inclusive
        return String.fromCodePoint(12977 + number - 36);
      }
    }
    /** @return {number} */
  }, {
    key: "getWeeks",
    value: function getWeeks() {
      var day7 = this.daysWithinWeeks === 7;
      return day7 ? this.weekNumber : this.weekNumber - 1;
    }
    /** @return {number} */
  }, {
    key: "getDaysWithinWeeks",
    value: function getDaysWithinWeeks() {
      return this.daysWithinWeeks;
    }
    /**
     * @param {string} locale
     * @return {string}
     */
  }, {
    key: "getTodayIs",
    value: function getTodayIs(locale) {
      locale = locale || Locale.getLocaleName();
      if (typeof locale === 'string') {
        locale = locale.toLowerCase();
      }
      if (locale === 'he') {
        return getTodayIsHe(this.omer);
      } else if (locale === 'he-x-nonikud') {
        return Locale.hebrewStripNikkud(getTodayIsHe(this.omer));
      }
      var totalDaysStr = this.omer === 1 ? 'day' : 'days';
      var str = "Today is ".concat(this.omer, " ").concat(totalDaysStr);
      if (this.weekNumber > 1 || this.omer === 7) {
        var day7 = this.daysWithinWeeks === 7;
        var numWeeks = day7 ? this.weekNumber : this.weekNumber - 1;
        var weeksStr = numWeeks === 1 ? 'week' : 'weeks';
        str += ", which is ".concat(numWeeks, " ").concat(weeksStr);
        if (!day7) {
          var daysStr = this.daysWithinWeeks === 1 ? 'day' : 'days';
          str += " and ".concat(this.daysWithinWeeks, " ").concat(daysStr);
        }
      }
      return str + ' of the Omer';
    }
    /** @return {string} */
  }, {
    key: "url",
    value: function url() {
      return "https://www.hebcal.com/omer/".concat(this.getDate().getFullYear(), "/").concat(this.omer);
    }
  }]);
  return OmerEvent;
}(Event);

// adapted from pip hdate package (GPL)
// https://github.com/py-libhdate/py-libhdate/blob/master/hdate/date.py

var tens = ['', 'עֲשָׂרָה', 'עֶשְׂרִים', 'שְׁלוֹשִׁים', 'אַרְבָּעִים'];
var ones = ['', 'אֶחָד', 'שְׁנַיִם', 'שְׁלוֹשָׁה', 'אַרְבָּעָה', 'חֲמִשָׁה', 'שִׁשָׁה', 'שִׁבְעָה', 'שְׁמוֹנָה', 'תִּשְׁעָה'];
var shnei = 'שְׁנֵי';
var yamim = 'יָמִים';
var shneiYamim = shnei + ' ' + yamim;
var shavuot = 'שָׁבוּעוֹת';
var yom = 'יוֹם';
var yomEchad = yom + ' ' + ones[1];

/**
 * @private
 * @param {number} omer
 * @return {string}
 */
function getTodayIsHe(omer) {
  var ten = Math.floor(omer / 10);
  var one = omer % 10;
  var str = 'הַיוֹם ';
  if (10 < omer && omer < 20) {
    str += ones[one] + ' עָשָׂר';
  } else if (omer > 9) {
    str += ones[one];
    if (one) {
      str += ' וְ';
    }
  }
  if (omer > 2) {
    if (omer > 20 || omer === 10 || omer === 20) {
      str += tens[ten];
    }
    if (omer < 11) {
      str += ones[one] + ' ' + yamim + ' ';
    } else {
      str += ' ' + yom + ' ';
    }
  } else if (omer === 1) {
    str += yomEchad + ' ';
  } else {
    // omer == 2
    str += shneiYamim + ' ';
  }
  if (omer > 6) {
    str = str.trim(); // remove trailing space before comma
    str += ', שְׁהֵם ';
    var weeks = Math.floor(omer / 7);
    var days = omer % 7;
    if (weeks > 2) {
      str += ones[weeks] + ' ' + shavuot + ' ';
    } else if (weeks == 1) {
      str += 'שָׁבוּעַ' + ' ' + ones[1] + ' ';
    } else {
      // weeks == 2
      str += shnei + ' ' + shavuot + ' ';
    }
    if (days) {
      str += 'וְ';
      if (days > 2) {
        str += ones[days] + ' ' + yamim + ' ';
      } else if (days == 1) {
        str += yomEchad + ' ';
      } else {
        // days == 2
        str += shneiYamim + ' ';
      }
    }
  }
  str += 'לָעוֹמֶר';
  return str.normalize();
}

var osdate = new Date(1923, 8, 11);
var osday = greg2abs(osdate);
var nsday = greg2abs(new Date(1975, 5, 24));
var shas0 = [['Berachot', 64], ['Shabbat', 157], ['Eruvin', 105], ['Pesachim', 121], ['Shekalim', 22], ['Yoma', 88], ['Sukkah', 56], ['Beitzah', 40], ['Rosh Hashana', 35], ['Taanit', 31], ['Megillah', 32], ['Moed Katan', 29], ['Chagigah', 27], ['Yevamot', 122], ['Ketubot', 112], ['Nedarim', 91], ['Nazir', 66], ['Sotah', 49], ['Gitin', 90], ['Kiddushin', 82], ['Baba Kamma', 119], ['Baba Metzia', 119], ['Baba Batra', 176], ['Sanhedrin', 113], ['Makkot', 24], ['Shevuot', 49], ['Avodah Zarah', 76], ['Horayot', 14], ['Zevachim', 120], ['Menachot', 110], ['Chullin', 142], ['Bechorot', 61], ['Arachin', 34], ['Temurah', 34], ['Keritot', 28], ['Meilah', 22], ['Kinnim', 4], ['Tamid', 9], ['Midot', 5], ['Niddah', 73]].map(function (m) {
  return {
    name: m[0],
    blatt: m[1]
  };
});

// eslint-disable-next-line require-jsdoc
function throwTypeError$2(msg) {
  throw new TypeError(msg);
}

/**
 * Returns the Daf Yomi for given date
 */
var DafYomi = /*#__PURE__*/function () {
  /**
   * Initializes a daf yomi instance
   * @param {Date|HDate|number} gregdate Gregorian date
   */
  function DafYomi(gregdate) {
    _classCallCheck(this, DafYomi);
    var cday = typeof gregdate === 'number' && !isNaN(gregdate) ? gregdate : isDate(gregdate) ? greg2abs(gregdate) : HDate.isHDate(gregdate) ? gregdate.abs() : throwTypeError$2("non-date given to dafyomi: ".concat(gregdate));
    if (cday < osday) {
      throw new RangeError("Date ".concat(gregdate, " too early; Daf Yomi cycle began on ").concat(osdate));
    }
    var cno;
    var dno;
    if (cday >= nsday) {
      // "new" cycle
      cno = 8 + Math.floor((cday - nsday) / 2711);
      dno = (cday - nsday) % 2711;
    } else {
      // old cycle
      cno = 1 + Math.floor((cday - osday) / 2702);
      dno = (cday - osday) % 2702;
    }

    // Find the daf taking note that the cycle changed slightly after cycle 7.

    var total = 0;
    var blatt = 0;
    var count = -1;

    // Fix Shekalim for old cycles
    var shortShekalim = cno <= 7;
    var shas = shortShekalim ? shas0.slice() : shas0;
    if (shortShekalim) {
      shas[4] = {
        name: 'Shekalim',
        blatt: 13
      };
    }

    // Find the daf
    var j = 0;
    var dafcnt = 40;
    while (j < dafcnt) {
      count++;
      total = total + shas[j].blatt - 1;
      if (dno < total) {
        blatt = shas[j].blatt + 1 - (total - dno);
        // fiddle with the weird ones near the end
        switch (count) {
          case 36:
            blatt = blatt + 21;
            break;
          case 37:
            blatt = blatt + 24;
            break;
          case 38:
            blatt = blatt + 32;
            break;
        }
        // Bailout
        j = 1 + dafcnt;
      }
      j++;
    }
    this.name = shas[count].name;
    this.blatt = blatt;
  }
  /**
   * @return {number}
   */
  _createClass(DafYomi, [{
    key: "getBlatt",
    value: function getBlatt() {
      return this.blatt;
    }
    /**
     * @return {string}
     */
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * Formats (with translation) the dafyomi result as a string like "Pesachim 34"
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "render",
    value: function render(locale) {
      locale = locale || Locale.getLocaleName();
      if (typeof locale === 'string') {
        locale = locale.toLowerCase();
      }
      if (locale === 'he' || locale === 'he-x-nonikud') {
        return Locale.gettext(this.name, locale) + ' דף ' + gematriya(this.blatt);
      }
      return Locale.gettext(this.name, locale) + ' ' + this.blatt;
    }
  }]);
  return DafYomi;
}();
var dafYomiSefaria = {
  'Berachot': 'Berakhot',
  'Rosh Hashana': 'Rosh Hashanah',
  'Gitin': 'Gittin',
  'Baba Kamma': 'Bava Kamma',
  'Baba Metzia': 'Bava Metzia',
  'Baba Batra': 'Bava Batra',
  'Bechorot': 'Bekhorot',
  'Arachin': 'Arakhin',
  'Midot': 'Middot',
  'Shekalim': 'Jerusalem_Talmud_Shekalim'
};

/**
 * Event wrapper around a DafYomi instance
 */
var DafYomiEvent = /*#__PURE__*/function (_Event) {
  _inherits(DafYomiEvent, _Event);
  var _super = _createSuper(DafYomiEvent);
  /**
   * @param {HDate} date
   */
  function DafYomiEvent(date) {
    _classCallCheck(this, DafYomiEvent);
    var daf = new DafYomi(date.greg());
    return _super.call(this, date, daf.render('en'), flags.DAF_YOMI, {
      daf: daf
    });
  }
  /**
   * Returns Daf Yomi name including the 'Daf Yomi: ' prefix (e.g. "Daf Yomi: Pesachim 107").
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(DafYomiEvent, [{
    key: "render",
    value: function render(locale) {
      return Locale.gettext('Daf Yomi', locale) + ': ' + this.daf.render(locale);
    }
    /**
     * Returns Daf Yomi name without the 'Daf Yomi: ' prefix (e.g. "Pesachim 107").
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      return this.daf.render(locale);
    }
    /**
     * Returns a link to sefaria.org or dafyomi.org
     * @return {string}
     */
  }, {
    key: "url",
    value: function url() {
      var daf = this.daf;
      var tractate = daf.getName();
      var blatt = daf.getBlatt();
      if (tractate == 'Kinnim' || tractate == 'Midot') {
        return "https://www.dafyomi.org/index.php?masechta=meilah&daf=".concat(blatt, "a");
      } else {
        var name0 = dafYomiSefaria[tractate] || tractate;
        var name = name0.replace(/ /g, '_');
        return "https://www.sefaria.org/".concat(name, ".").concat(blatt, "a?lang=bi");
      }
    }
  }]);
  return DafYomiEvent;
}(Event);

var classofRaw = classofRaw$2;
var uncurryThis$3 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$3(fn);
};

var uncurryThis$2 = functionUncurryThisClause;
var aCallable$1 = aCallable$4;
var NATIVE_BIND = functionBindNative;

var bind$1 = uncurryThis$2(uncurryThis$2.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var call$2 = functionCall;
var anObject$5 = anObject$8;
var getMethod$1 = getMethod$3;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$5(iterator);
  try {
    innerResult = getMethod$1(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$2(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$5(innerResult);
  return value;
};

var anObject$4 = anObject$8;
var iteratorClose = iteratorClose$1;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$4(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var iterators = {};

var wellKnownSymbol$5 = wellKnownSymbol$b;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$5('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
};

var classof$1 = classof$4;
var getMethod = getMethod$3;
var isNullOrUndefined = isNullOrUndefined$3;
var Iterators = iterators;
var wellKnownSymbol$4 = wellKnownSymbol$b;

var ITERATOR$1 = wellKnownSymbol$4('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$1)
    || getMethod(it, '@@iterator')
    || Iterators[classof$1(it)];
};

var call$1 = functionCall;
var aCallable = aCallable$4;
var anObject$3 = anObject$8;
var tryToString = tryToString$3;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$1 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$3(call$1(iteratorMethod, argument));
  throw $TypeError$1(tryToString(argument) + ' is not iterable');
};

var bind = functionBindContext;
var call = functionCall;
var toObject = toObject$3;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var isConstructor = isConstructor$2;
var lengthOfArrayLike = lengthOfArrayLike$5;
var createProperty = createProperty$3;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var wellKnownSymbol$3 = wellKnownSymbol$b;

var ITERATOR = wellKnownSymbol$3('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var $$3 = _export;
var from = arrayFrom;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$$3({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});

var INCOMPLETE = 0;
var REGULAR = 1;
var COMPLETE = 2;

// eslint-disable-next-line require-jsdoc
function throwError(errorMessage) {
  throw new TypeError(errorMessage);
}

/**
 * Result of Sedra.lookup
 * @typedef {Object} SedraResult
 * @property {string[]} parsha Name of the parsha (or parshiyot) read on
 *     Hebrew date, e.g. `['Noach']` or `['Matot', 'Masei']`
 * @property {boolean} chag True if this is a regular parasha HaShavua
 *     Torah reading, false if it's a special holiday reading
 * @property {number|number[]} num the parsha number (or numbers) using 1-indexing.
 *     A `number` for a regular (single) parsha, and a `number[]` for a doubled parsha.
 *     For Parashat *Bereshit*, `num` would be equal to `1`, and for
 *     *Matot-Masei* it would be `[42, 43]`
 */

/**
 * Represents Parashah HaShavua for an entire Hebrew year
 */
var Sedra = /*#__PURE__*/function () {
  /**
   * Caculates the Parashah HaShavua for an entire Hebrew year
   * @param {number} hebYr - Hebrew year (e.g. 5749)
   * @param {boolean} il - Use Israel sedra schedule (false for Diaspora)
   */
  function Sedra(hebYr, il) {
    _classCallCheck(this, Sedra);
    // the Hebrew year
    hebYr = +hebYr;
    var longC = HDate.longCheshvan(hebYr);
    var shortK = HDate.shortKislev(hebYr);
    var type = this.type = longC && !shortK ? COMPLETE : !longC && shortK ? INCOMPLETE : REGULAR;
    this.year = hebYr;
    var rh0 = new HDate(1, months.TISHREI, hebYr);
    var rh = rh0.abs();
    var rhDay = this.roshHashanaDay = rh0.getDay() + 1;

    // find the first Saturday on or after Rosh Hashana
    this.firstSaturday = HDate.dayOnOrBefore(6, rh + 6);
    var leap = this.leap = +HDate.isLeapYear(hebYr);
    this.il = Boolean(il);
    var key = "".concat(leap).concat(rhDay).concat(type);
    if (types[key]) {
      this.key = key;
      this.theSedraArray = types[key];
    } else {
      var key2 = this.key = key + +this.il; // cast to num, then concat
      this.theSedraArray = types[key2];
    }
    if (!this.theSedraArray) {
      throw new Error("improper sedra year type ".concat(this.key, " calculated for ").concat(hebYr));
    }
  }

  /**
   * Returns the parsha (or parshiyot) read on Hebrew date
   * @param {HDate|number} hDate Hebrew date or R.D. days
   * @return {string[]}
   */
  _createClass(Sedra, [{
    key: "get",
    value: function get(hDate) {
      return this.lookup(hDate).parsha;
    }

    /**
     * Looks up parsha for the date, then returns a translated or transliterated string
     * @param {HDate|number} hDate Hebrew date or R.D. days
     * @param {string} [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale
     * @return {string}
     */
  }, {
    key: "getString",
    value: function getString(hDate, locale) {
      var parsha = this.get(hDate);
      var locale0 = locale || Locale.getLocaleName();
      var name = Locale.gettext(parsha[0], locale0);
      if (parsha.length == 2) {
        var hyphen = locale0 == 'he' ? '־' : '-';
        name += hyphen + Locale.gettext(parsha[1], locale0);
      }
      return Locale.gettext('Parashat', locale0) + ' ' + name;
    }

    /**
     * Checks to see if this day would be a regular parasha HaShavua
     * Torah reading or special holiday reading
     * @param {HDate|number} hDate Hebrew date or R.D. days
     * @return {boolean}
     */
  }, {
    key: "isParsha",
    value: function isParsha(hDate) {
      return !this.lookup(hDate).chag;
    }

    /**
     * Returns the date that a parsha occurs
     * @param {number|string|string[]} parsha
     * @return {HDate}
     */
  }, {
    key: "find",
    value: function find(parsha) {
      if (typeof parsha === 'number') {
        if (parsha > 53 || parsha < 0 && !isValidDouble(parsha)) {
          throw new RangeError("Invalid parsha number: ".concat(parsha));
        }
        var idx = this.theSedraArray.indexOf(parsha);
        if (idx === -1) {
          return null; // doesn't occur this year
        }

        return new HDate(this.firstSaturday + idx * 7);
      } else if (typeof parsha === 'string') {
        var num = parsha2id[parsha];
        if (typeof num === 'number') {
          return this.find(num);
        } else if (parsha.indexOf('-') !== -1) {
          return this.find(parsha.split('-'));
        } else {
          // try to find Saturday holiday like 'Yom Kippur'
          var _idx = this.theSedraArray.indexOf(parsha);
          if (_idx === -1) {
            return null; // doesn't occur this year
          }

          return new HDate(this.firstSaturday + _idx * 7);
        }
      } else if (Array.isArray(parsha) && parsha.length === 1 && typeof parsha[0] === 'string') {
        return this.find(parsha[0]);
      } else if (Array.isArray(parsha) && parsha.length === 2 && typeof parsha[0] === 'string' && typeof parsha[1] === 'string') {
        var p1 = parsha[0];
        var p2 = parsha[1];
        var num1 = parsha2id[p1];
        var num2 = parsha2id[p2];
        if (num2 === num1 + 1) {
          return this.find(-num1);
        } else {
          throw new RangeError("Unrecognized parsha name: ".concat(p1, "-").concat(p2));
        }
      } else {
        throw new TypeError("Invalid parsha argument: ".concat(parsha));
      }
    }

    /**
     * @private
     * @return {Object[]}
     */
  }, {
    key: "getSedraArray",
    value: function getSedraArray() {
      return this.theSedraArray;
    }

    /**
     * R.D. date of the first Saturday on or after Rosh Hashana
     * @return {number}
     */
  }, {
    key: "getFirstSaturday",
    value: function getFirstSaturday() {
      return this.firstSaturday;
    }

    /** @return {number} */
  }, {
    key: "getYear",
    value: function getYear() {
      return this.year;
    }

    /**
     * Returns an object describing the parsha on the first Saturday on or after absdate
     * @param {HDate|number} hDate Hebrew date or R.D. days
     * @return {SedraResult}
     */
  }, {
    key: "lookup",
    value: function lookup(hDate) {
      var absDate = typeof hDate === 'number' ? hDate : HDate.isHDate(hDate) ? hDate.abs() : throwError("Bad date argument: ".concat(hDate));

      // find the first saturday on or after today's date
      var saturday = HDate.dayOnOrBefore(6, absDate + 6);
      var weekNum = (saturday - this.firstSaturday) / 7;
      var index = this.theSedraArray[weekNum];
      if (typeof index === 'undefined') {
        var sedra = new Sedra(this.year + 1, this.il);
        return sedra.lookup(saturday); // must be next year
      }

      if (typeof index === 'string') {
        // Shabbat has a chag. Return a description
        return {
          parsha: [index],
          chag: true
        };
      }
      if (index >= 0) {
        return {
          parsha: [parshiot[index]],
          chag: false,
          num: index + 1
        };
      }
      var p1 = D(index); // undouble the parsha
      return {
        parsha: [parshiot[p1], parshiot[p1 + 1]],
        chag: false,
        num: [p1 + 1, p1 + 2]
      };
    }
  }]);
  return Sedra;
}();

/**
 * The 54 parshiyot of the Torah as transilterated strings
 * parshiot[0] == 'Bereshit', parshiot[1] == 'Noach', parshiot[53] == "Ha'Azinu".
 * @readonly
 * @type {string[]}
 */
var parshiot = ['Bereshit', 'Noach', 'Lech-Lecha', 'Vayera', 'Chayei Sara', 'Toldot', 'Vayetzei', 'Vayishlach', 'Vayeshev', 'Miketz', 'Vayigash', 'Vayechi', 'Shemot', 'Vaera', 'Bo', 'Beshalach', 'Yitro', 'Mishpatim', 'Terumah', 'Tetzaveh', 'Ki Tisa', 'Vayakhel', 'Pekudei', 'Vayikra', 'Tzav', 'Shmini', 'Tazria', 'Metzora', 'Achrei Mot', 'Kedoshim', 'Emor', 'Behar', 'Bechukotai', 'Bamidbar', 'Nasso', 'Beha\'alotcha', 'Sh\'lach', 'Korach', 'Chukat', 'Balak', 'Pinchas', 'Matot', 'Masei', 'Devarim', 'Vaetchanan', 'Eikev', 'Re\'eh', 'Shoftim', 'Ki Teitzei', 'Ki Tavo', 'Nitzavim', 'Vayeilech', 'Ha\'Azinu'];
var parsha2id = {};
for (var id = 0; id < parshiot.length; id++) {
  var name = parshiot[id];
  parsha2id[name] = id;
}

/**
 * @private
 * @param {number} id
 * @return {boolean}
 */
function isValidDouble(id) {
  switch (id) {
    case -21: // Vayakhel-Pekudei
    case -26: // Tazria-Metzora
    case -28: // Achrei Mot-Kedoshim
    case -31: // Behar-Bechukotai
    case -38: // Chukat-Balak
    case -41: // Matot-Masei
    case -50:
      // Nitzavim-Vayeilech
      return true;
  }
  return false;
}

/**
 * @private
 * @param {number} p
 * @return {number}
 */
function D(p) {
  // parsha doubler/undoubler
  return -p;
}
var RH = 'Rosh Hashana'; // 0
var YK = 'Yom Kippur'; // 1

var SUKKOT = 'Sukkot'; // 0
var CHMSUKOT = 'Sukkot Shabbat Chol ha-Moed'; // 0
var SHMINI = 'Shmini Atzeret'; // 0
var EOY = CHMSUKOT; // always Sukkot day 3, 5 or 6

var PESACH = 'Pesach'; // 25
var PESACH1 = 'Pesach I';
var CHMPESACH = 'Pesach Shabbat Chol ha-Moed'; // 25
var PESACH7 = 'Pesach VII'; // 25
var PESACH8 = 'Pesach VIII';
var SHAVUOT = 'Shavuot'; // 33

/**
 * Returns an array from start to end
 * @private
 * @param {number} start beginning number, inclusive
 * @param {number} stop ending number, inclusive
 * @return {number[]}
 */
function range$1(start, stop) {
  return Array.from({
    length: stop - start + 1
  }, function (v, k) {
    return k + start;
  });
}

/**
 * The ordinary year types (keviot)
 * names are leap/nonleap - day - incomplete/regular/complete - diaspora/Israel
 * @private
 * @readonly
 * @type {Object.<string, Object[]>}
 */
var types = {
  /* Hebrew year that starts on Monday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Tuesday. */
  // e.g. 5753
  '020': [51, 52].concat(EOY, range$1(0, 20), D(21), 23, 24, PESACH, 25, D(26), D(28), 30, D(31), range$1(33, 40), D(41), range$1(43, 49), D(50)),
  /* Hebrew year that starts on Monday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Thursday. */
  // e.g. 5756
  '0220': [51, 52].concat(EOY, range$1(0, 20), D(21), 23, 24, PESACH, 25, D(26), D(28), 30, D(31), 33, SHAVUOT, range$1(34, 37), D(38), 40, D(41), range$1(43, 49), D(50)),
  /* Hebrew year that starts on Thursday, is `regular' (Heshvan has 29
     * days and Kislev has 30 days), and has Passover start on Saturday. */
  // e.g. 5701
  '0510': [52].concat(YK, EOY, range$1(0, 20), D(21), 23, 24, PESACH1, PESACH8, 25, D(26), D(28), 30, D(31), range$1(33, 40), D(41), range$1(43, 50)),
  /* Hebrew year that starts on Thursday, is `regular' (Heshvan has 29
     * days and Kislev has 30 days), and has Passover start on Saturday. */
  // e.g. 5745
  '0511': [52].concat(YK, EOY, range$1(0, 20), D(21), 23, 24, PESACH, 25, D(26), D(28), range$1(30, 40), D(41), range$1(43, 50)),
  /* Hebrew year that starts on Thursday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Sunday. */
  // e.g. 5754
  '052': [52].concat(YK, CHMSUKOT, range$1(0, 24), PESACH7, 25, D(26), D(28), 30, D(31), range$1(33, 40), D(41), range$1(43, 50)),
  /* Hebrew year that starts on Saturday, is `incomplete' (Heshvan and Kislev
     * each have 29 days), and has Passover start on Sunday. */
  // e.g. 5761
  '070': [].concat(RH, 52, SUKKOT, SHMINI, range$1(0, 20), D(21), 23, 24, PESACH7, 25, D(26), D(28), 30, D(31), range$1(33, 40), D(41), range$1(43, 50)),
  /* Hebrew year that starts on Saturday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Tuesday. */
  // e.g. 5716
  '072': [].concat(RH, 52, SUKKOT, SHMINI, range$1(0, 20), D(21), 23, 24, CHMPESACH, 25, D(26), D(28), 30, D(31), range$1(33, 40), D(41), range$1(43, 49), D(50)),
  /* --  The leap year types (keviot) -- */
  /* Hebrew year that starts on Monday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Thursday. */
  // e.g. 5746
  '1200': [51, 52].concat(CHMSUKOT, range$1(0, 27), CHMPESACH, range$1(28, 33), SHAVUOT, range$1(34, 37), D(38), 40, D(41), range$1(43, 49), D(50)),
  /* Hebrew year that starts on Monday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Thursday. */
  // e.g. 5746
  '1201': [51, 52].concat(CHMSUKOT, range$1(0, 27), CHMPESACH, range$1(28, 40), D(41), range$1(43, 49), D(50)),
  /* Hebrew year that starts on Monday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Saturday. */
  // e.g.5752
  '1220': [51, 52].concat(CHMSUKOT, range$1(0, 27), PESACH1, PESACH8, range$1(28, 40), D(41), range$1(43, 50)),
  /* Hebrew year that starts on Monday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Saturday. */
  // e.g.5752
  '1221': [51, 52].concat(CHMSUKOT, range$1(0, 27), PESACH, range$1(28, 50)),
  /* Hebrew year that starts on Thursday, is `incomplete' (Heshvan and
     * Kislev both have 29 days), and has Passover start on Sunday. */
  // e.g. 5768
  '150': [52].concat(YK, CHMSUKOT, range$1(0, 28), PESACH7, range$1(29, 50)),
  /* Hebrew year that starts on Thursday, is `complete' (Heshvan and
     * Kislev both have 30 days), and has Passover start on Tuesday. */
  // eg. 5771
  '152': [52].concat(YK, CHMSUKOT, range$1(0, 28), CHMPESACH, range$1(29, 49), D(50)),
  /* Hebrew year that starts on Saturday, is `incomplete' (Heshvan and
     * Kislev each have 29 days), and has Passover start on Tuesday. */
  // e.g.5757
  '170': [].concat(RH, 52, SUKKOT, SHMINI, range$1(0, 27), CHMPESACH, range$1(28, 40), D(41), range$1(43, 49), D(50)),
  /* Hebrew year that starts on Saturday, is `complete' (Heshvan and
     * Kislev each have 30 days), and has Passover start on Thursday. */
  '1720': [].concat(RH, 52, SUKKOT, SHMINI, range$1(0, 27), CHMPESACH, range$1(28, 33), SHAVUOT, range$1(34, 37), D(38), 40, D(41), range$1(43, 49), D(50))
};

/* Hebrew year that starts on Monday, is `complete' (Heshvan and
 * Kislev each have 30 days), and has Passover start on Thursday. */
types['0221'] = types['020'];

/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Thursday. */
// e.g. 5715
types['0310'] = types['0220'];

/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Thursday. */
types['0311'] = types['020'];

/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Saturday. */
// e.g. 5715
types['1310'] = types['1220'];
/* Hebrew year that starts on Tuesday, is `regular' (Heshvan has 29
 * days and Kislev has 30 days), and has Passover start on Saturday. */
types['1311'] = types['1221'];

/* Hebrew year that starts on Saturday, is `complete' (Heshvan and
 * Kislev each have 30 days), and has Passover start on Thursday. */
types['1721'] = types['170'];

/**
 * Represents one of 54 weekly Torah portions, always on a Saturday
 */
var ParshaEvent = /*#__PURE__*/function (_Event) {
  _inherits(ParshaEvent, _Event);
  var _super = _createSuper(ParshaEvent);
  /**
   * @param {HDate} date
   * @param {string[]} parsha - untranslated name of single or double parsha,
   *   such as ['Bereshit'] or ['Achrei Mot', 'Kedoshim']
   * @param {boolean} il
   * @param {number|number[]} num
   */
  function ParshaEvent(date, parsha, il, num) {
    var _this;
    _classCallCheck(this, ParshaEvent);
    if (!Array.isArray(parsha) || parsha.length === 0 || parsha.length > 2) {
      throw new TypeError('Bad parsha argument');
    }
    var desc = 'Parashat ' + parsha.join('-');
    _this = _super.call(this, date, desc, flags.PARSHA_HASHAVUA);
    _this.parsha = parsha;
    _this.il = Boolean(il);
    _this.num = num || -1;
    return _this;
  }
  /**
   * @param {string} [locale] Optional locale name (i.e: `'he'`, `'fr'`). Defaults to active locale.
   * @return {string}
   */
  _createClass(ParshaEvent, [{
    key: "render",
    value: function render(locale) {
      var locale0 = locale || Locale.getLocaleName();
      var parsha = this.parsha;
      var name = Locale.gettext(parsha[0], locale);
      if (parsha.length == 2) {
        var hyphen = locale0 == 'he' ? '־' : '-';
        name += hyphen + Locale.gettext(parsha[1], locale);
      }
      var str = Locale.gettext('Parashat', locale) + ' ' + name;
      return str.normalize();
    }
    /** @return {string} */
  }, {
    key: "basename",
    value: function basename() {
      return this.parsha.join('-');
    }
    /** @return {string} */
  }, {
    key: "url",
    value: function url() {
      var year = this.getDate().greg().getFullYear();
      if (year < 100) {
        return undefined;
      }
      var dt = this.urlDateSuffix();
      var url = 'https://www.hebcal.com/sedrot/' + this.basename().toLowerCase().replace(/'/g, '').replace(/ /g, '-') + '-' + dt;
      return this.il ? url + '?i=on' : url;
    }

    /** @return {string} */
  }, {
    key: "urlDateSuffix",
    value: function urlDateSuffix() {
      var isoDateTime = this.getDate().greg().toISOString();
      var isoDate = isoDateTime.substring(0, isoDateTime.indexOf('T'));
      return isoDate.replace(/-/g, '');
    }
  }]);
  return ParshaEvent;
}(Event);

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty$1 = objectDefineProperty;

var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};

var anObject$2 = anObject$8;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject$2(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var global$1 = global$b;
var DESCRIPTORS$1 = descriptors;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var regExpFlags = regexpFlags;
var fails$1 = fails$f;

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp$1 = global$1.RegExp;
var RegExpPrototype = RegExp$1.prototype;

var FORCED = DESCRIPTORS$1 && fails$1(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp$1('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});

var SUN$2 = 0;
var TUE$1 = 2;
var FRI$2 = 5;
var SAT$3 = 6;
var NISAN$3 = months.NISAN;
var IYYAR = months.IYYAR;

/**
 * Yom HaShoah first observed in 1951.
 * When the actual date of Yom Hashoah falls on a Friday, the
 * state of Israel observes Yom Hashoah on the preceding
 * Thursday. When it falls on a Sunday, Yom Hashoah is observed
 * on the following Monday.
 * http://www.ushmm.org/remembrance/dor/calendar/
 * @private
 * @param {number} year
 * @return {HDate|null}
 */
function dateYomHaShoah(year) {
  if (year < 5711) {
    return null;
  }
  var nisan27dt = new HDate(27, NISAN$3, year);
  if (nisan27dt.getDay() === FRI$2) {
    nisan27dt = new HDate(26, NISAN$3, year);
  } else if (nisan27dt.getDay() === SUN$2) {
    nisan27dt = new HDate(28, NISAN$3, year);
  }
  return nisan27dt;
}

/**
 * Yom HaAtzma'ut only celebrated after 1948
 * @private
 * @param {number} year
 * @return {HDate|null}
 */
function dateYomHaZikaron(year) {
  if (year < 5708) {
    return null;
  }
  var day;
  var pesach = new HDate(15, NISAN$3, year);
  var pdow = pesach.getDay();
  if (pdow === SUN$2) {
    day = 2;
  } else if (pdow === SAT$3) {
    day = 3;
  } else if (year < 5764) {
    day = 4;
  } else if (pdow === TUE$1) {
    day = 5;
  } else {
    day = 4;
  }
  return new HDate(day, IYYAR, year);
}

var Nisan = months.NISAN;
var Iyyar = months.IYYAR;
var Sivan = months.SIVAN;
var Tamuz = months.TAMUZ;
var Av = months.AV;
var Elul = months.ELUL;
var Tishrei = months.TISHREI;
var Cheshvan = months.CHESHVAN;
var Kislev = months.KISLEV;
// const Tevet = months.TEVET;
var Shvat = months.SHVAT;
// const Adar1 = months.ADAR_I;
var Adar2 = months.ADAR_II;
var CHAG$1 = flags.CHAG;
var LIGHT_CANDLES$1 = flags.LIGHT_CANDLES;
var YOM_TOV_ENDS$1 = flags.YOM_TOV_ENDS;
var CHUL_ONLY$1 = flags.CHUL_ONLY;
var IL_ONLY$1 = flags.IL_ONLY;
var LIGHT_CANDLES_TZEIS$2 = flags.LIGHT_CANDLES_TZEIS;
var CHANUKAH_CANDLES$2 = flags.CHANUKAH_CANDLES;
// const MINOR_FAST = flags.MINOR_FAST;
var MAJOR_FAST$2 = flags.MAJOR_FAST;
var MINOR_HOLIDAY$2 = flags.MINOR_HOLIDAY;
var EREV$2 = flags.EREV;
var CHOL_HAMOED$1 = flags.CHOL_HAMOED;
var emojiPesach = '🫓';
var emojiSukkot = '🌿🍋';
var staticHolidays = [{
  mm: Tishrei,
  dd: 2,
  desc: 'Rosh Hashana II',
  flags: CHAG$1 | YOM_TOV_ENDS$1,
  emoji: '🍏🍯'
}, {
  mm: Tishrei,
  dd: 9,
  desc: 'Erev Yom Kippur',
  flags: EREV$2 | LIGHT_CANDLES$1
}, {
  mm: Tishrei,
  dd: 10,
  desc: 'Yom Kippur',
  flags: CHAG$1 | MAJOR_FAST$2 | YOM_TOV_ENDS$1
}, {
  mm: Tishrei,
  dd: 14,
  desc: 'Erev Sukkot',
  flags: CHUL_ONLY$1 | EREV$2 | LIGHT_CANDLES$1,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 15,
  desc: 'Sukkot I',
  flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$2,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 16,
  desc: 'Sukkot II',
  flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 17,
  desc: 'Sukkot III (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 1,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 18,
  desc: 'Sukkot IV (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 2,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 19,
  desc: 'Sukkot V (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 3,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 20,
  desc: 'Sukkot VI (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 4,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 22,
  desc: 'Shmini Atzeret',
  flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$2
}, {
  mm: Tishrei,
  dd: 23,
  desc: 'Simchat Torah',
  flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1
}, {
  mm: Tishrei,
  dd: 14,
  desc: 'Erev Sukkot',
  flags: IL_ONLY$1 | EREV$2 | LIGHT_CANDLES$1,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 15,
  desc: 'Sukkot I',
  flags: IL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 16,
  desc: 'Sukkot II (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 1,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 17,
  desc: 'Sukkot III (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 2,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 18,
  desc: 'Sukkot IV (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 3,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 19,
  desc: 'Sukkot V (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 4,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 20,
  desc: 'Sukkot VI (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 5,
  emoji: emojiSukkot
}, {
  mm: Tishrei,
  dd: 22,
  desc: 'Shmini Atzeret',
  flags: IL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1
}, {
  mm: Tishrei,
  dd: 21,
  desc: 'Sukkot VII (Hoshana Raba)',
  flags: LIGHT_CANDLES$1 | CHOL_HAMOED$1,
  chmDay: -1,
  emoji: emojiSukkot
}, {
  mm: Kislev,
  dd: 24,
  desc: 'Chanukah: 1 Candle',
  flags: EREV$2 | MINOR_HOLIDAY$2 | CHANUKAH_CANDLES$2,
  emoji: '🕎1️⃣'
}, {
  mm: Shvat,
  dd: 15,
  desc: 'Tu BiShvat',
  flags: MINOR_HOLIDAY$2,
  emoji: '🌳'
}, {
  mm: Adar2,
  dd: 13,
  desc: 'Erev Purim',
  flags: EREV$2 | MINOR_HOLIDAY$2,
  emoji: '🎭️📜'
}, {
  mm: Adar2,
  dd: 14,
  desc: 'Purim',
  flags: MINOR_HOLIDAY$2,
  emoji: '🎭️📜'
}, {
  mm: Adar2,
  dd: 15,
  desc: 'Shushan Purim',
  flags: MINOR_HOLIDAY$2,
  emoji: '🎭️📜'
},
// Pesach Israel
{
  mm: Nisan,
  dd: 14,
  desc: 'Erev Pesach',
  flags: IL_ONLY$1 | EREV$2 | LIGHT_CANDLES$1,
  emoji: '🫓🍷'
}, {
  mm: Nisan,
  dd: 15,
  desc: 'Pesach I',
  flags: IL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 16,
  desc: 'Pesach II (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 1,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 17,
  desc: 'Pesach III (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 2,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 18,
  desc: 'Pesach IV (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 3,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 19,
  desc: 'Pesach V (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 4,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 20,
  desc: 'Pesach VI (CH\'\'M)',
  flags: IL_ONLY$1 | CHOL_HAMOED$1 | LIGHT_CANDLES$1,
  chmDay: 5,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 21,
  desc: 'Pesach VII',
  flags: IL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: emojiPesach
},
// Pesach chutz l'aretz
{
  mm: Nisan,
  dd: 14,
  desc: 'Erev Pesach',
  flags: CHUL_ONLY$1 | EREV$2 | LIGHT_CANDLES$1,
  emoji: '🫓🍷'
}, {
  mm: Nisan,
  dd: 15,
  desc: 'Pesach I',
  flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$2,
  emoji: '🫓🍷'
}, {
  mm: Nisan,
  dd: 16,
  desc: 'Pesach II',
  flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 17,
  desc: 'Pesach III (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 1,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 18,
  desc: 'Pesach IV (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 2,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 19,
  desc: 'Pesach V (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1,
  chmDay: 3,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 20,
  desc: 'Pesach VI (CH\'\'M)',
  flags: CHUL_ONLY$1 | CHOL_HAMOED$1 | LIGHT_CANDLES$1,
  chmDay: 4,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 21,
  desc: 'Pesach VII',
  flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$2,
  emoji: emojiPesach
}, {
  mm: Nisan,
  dd: 22,
  desc: 'Pesach VIII',
  flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: emojiPesach
}, {
  mm: Iyyar,
  dd: 14,
  desc: 'Pesach Sheni',
  flags: MINOR_HOLIDAY$2
}, {
  mm: Iyyar,
  dd: 18,
  desc: 'Lag BaOmer',
  flags: MINOR_HOLIDAY$2,
  emoji: '🔥'
}, {
  mm: Sivan,
  dd: 5,
  desc: 'Erev Shavuot',
  flags: EREV$2 | LIGHT_CANDLES$1,
  emoji: '⛰️🌸'
}, {
  mm: Sivan,
  dd: 6,
  desc: 'Shavuot',
  flags: IL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: '⛰️🌸'
}, {
  mm: Sivan,
  dd: 6,
  desc: 'Shavuot I',
  flags: CHUL_ONLY$1 | CHAG$1 | LIGHT_CANDLES_TZEIS$2,
  emoji: '⛰️🌸'
}, {
  mm: Sivan,
  dd: 7,
  desc: 'Shavuot II',
  flags: CHUL_ONLY$1 | CHAG$1 | YOM_TOV_ENDS$1,
  emoji: '⛰️🌸'
}, {
  mm: Av,
  dd: 15,
  desc: 'Tu B\'Av',
  flags: MINOR_HOLIDAY$2,
  emoji: '❤️'
}, {
  mm: Elul,
  dd: 1,
  desc: 'Rosh Hashana LaBehemot',
  flags: MINOR_HOLIDAY$2,
  emoji: '🐑'
}, {
  mm: Elul,
  dd: 29,
  desc: 'Erev Rosh Hashana',
  flags: EREV$2 | LIGHT_CANDLES$1,
  emoji: '🍏🍯'
}];
var staticModernHolidays = [{
  firstYear: 5727,
  mm: Iyyar,
  dd: 28,
  desc: 'Yom Yerushalayim',
  chul: true
}, {
  firstYear: 5737,
  mm: Kislev,
  dd: 6,
  desc: 'Ben-Gurion Day',
  satPostponeToSun: true,
  friPostponeToSun: true
}, {
  firstYear: 5750,
  mm: Shvat,
  dd: 30,
  desc: 'Family Day'
}, {
  firstYear: 5758,
  mm: Cheshvan,
  dd: 12,
  desc: 'Yitzhak Rabin Memorial Day',
  friSatMovetoThu: true
}, {
  firstYear: 5764,
  mm: Iyyar,
  dd: 10,
  desc: 'Herzl Day',
  satPostponeToSun: true
}, {
  firstYear: 5765,
  mm: Tamuz,
  dd: 29,
  desc: 'Jabotinsky Day',
  satPostponeToSun: true
}, {
  firstYear: 5769,
  mm: Cheshvan,
  dd: 29,
  desc: 'Sigd',
  chul: true,
  suppressEmoji: true
}, {
  firstYear: 5777,
  mm: Nisan,
  dd: 10,
  desc: 'Yom HaAliyah',
  chul: true
}, {
  firstYear: 5777,
  mm: Cheshvan,
  dd: 7,
  desc: 'Yom HaAliyah School Observance'
}];

/** Represents a built-in holiday like Pesach, Purim or Tu BiShvat */
var HolidayEvent = /*#__PURE__*/function (_Event) {
  _inherits(HolidayEvent, _Event);
  var _super = _createSuper(HolidayEvent);
  /**
   * Constructs Holiday event
   * @param {HDate} date Hebrew date event occurs
   * @param {string} desc Description (not translated)
   * @param {number} [mask=0] optional holiday flags
   * @param {Object} [attrs={}]
   */
  function HolidayEvent(date, desc, mask, attrs) {
    _classCallCheck(this, HolidayEvent);
    return _super.call(this, date, desc, mask, attrs);
  }
  /** @return {string} */
  _createClass(HolidayEvent, [{
    key: "basename",
    value: function basename() {
      return this.getDesc().replace(/ \d{4}$/, '').replace(/ \(CH''M\)$/, '').replace(/ \(observed\)$/, '').replace(/ \(Hoshana Raba\)$/, '').replace(/ [IV]+$/, '').replace(/: \d Candles?$/, '').replace(/: 8th Day$/, '').replace(/^Erev /, '');
    }
    /** @return {string} */
  }, {
    key: "url",
    value: function url() {
      var year = this.getDate().greg().getFullYear();
      if (year < 100) {
        return undefined;
      }
      var url = 'https://www.hebcal.com/holidays/' + this.basename().toLowerCase().replace(/'/g, '').replace(/ /g, '-') + '-' + this.urlDateSuffix();
      return this.getFlags() & flags.IL_ONLY ? url + '?i=on' : url;
    }
    /** @return {string} */
  }, {
    key: "urlDateSuffix",
    value: function urlDateSuffix() {
      var year = this.getDate().greg().getFullYear();
      return year;
    }
    /** @return {string} */
  }, {
    key: "getEmoji",
    value: function getEmoji() {
      if (this.emoji) {
        return this.emoji;
      } else if (this.getFlags() & flags.SPECIAL_SHABBAT) {
        return '🕍';
      } else {
        return '✡️';
      }
    }
  }]);
  return HolidayEvent;
}(Event);
var roshChodeshStr = 'Rosh Chodesh';

/** Represents Rosh Chodesh, the beginning of a new month */
var RoshChodeshEvent = /*#__PURE__*/function (_HolidayEvent) {
  _inherits(RoshChodeshEvent, _HolidayEvent);
  var _super2 = _createSuper(RoshChodeshEvent);
  /**
   * Constructs Rosh Chodesh event
   * @param {HDate} date Hebrew date event occurs
   * @param {string} monthName Hebrew month name (not translated)
   */
  function RoshChodeshEvent(date, monthName) {
    _classCallCheck(this, RoshChodeshEvent);
    return _super2.call(this, date, "".concat(roshChodeshStr, " ").concat(monthName), flags.ROSH_CHODESH);
  }
  /**
   * Returns (translated) description of this event
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(RoshChodeshEvent, [{
    key: "render",
    value: function render(locale) {
      var monthName = this.getDesc().substring(roshChodeshStr.length + 1);
      return Locale.gettext(roshChodeshStr, locale) + ' ' + Locale.gettext(monthName, locale);
    }
    /** @return {string} */
  }, {
    key: "basename",
    value: function basename() {
      return this.getDesc();
    }
    /** @return {string} */
  }, {
    key: "getEmoji",
    value: function getEmoji() {
      return this.emoji || '🌒';
    }
  }]);
  return RoshChodeshEvent;
}(HolidayEvent);

/**
 * Because Asara B'Tevet often occurs twice in the same Gregorian year,
 * we subclass HolidayEvent to override the `url()` method.
 */
var AsaraBTevetEvent = /*#__PURE__*/function (_HolidayEvent2) {
  _inherits(AsaraBTevetEvent, _HolidayEvent2);
  var _super3 = _createSuper(AsaraBTevetEvent);
  /**
   * Constructs AsaraBTevetEvent
   * @param {HDate} date Hebrew date event occurs
   * @param {string} desc Description (not translated)
   * @param {number} [mask=0] optional holiday flags
   * @param {Object} [attrs={}]
   */
  function AsaraBTevetEvent(date, desc, mask, attrs) {
    _classCallCheck(this, AsaraBTevetEvent);
    return _super3.call(this, date, desc, mask, attrs);
  }
  /** @return {string} */
  _createClass(AsaraBTevetEvent, [{
    key: "urlDateSuffix",
    value: function urlDateSuffix() {
      var isoDateTime = this.getDate().greg().toISOString();
      var isoDate = isoDateTime.substring(0, isoDateTime.indexOf('T'));
      return isoDate.replace(/-/g, '');
    }
  }]);
  return AsaraBTevetEvent;
}(HolidayEvent);
var mevarchimChodeshStr = 'Shabbat Mevarchim Chodesh';

/** Represents Mevarchim haChodesh, the announcement of the new month */
var MevarchimChodeshEvent = /*#__PURE__*/function (_Event2) {
  _inherits(MevarchimChodeshEvent, _Event2);
  var _super4 = _createSuper(MevarchimChodeshEvent);
  /**
   * Constructs Mevarchim haChodesh event
   * @param {HDate} date Hebrew date event occurs
   * @param {string} monthName Hebrew month name (not translated)
   */
  function MevarchimChodeshEvent(date, monthName) {
    var _this;
    _classCallCheck(this, MevarchimChodeshEvent);
    _this = _super4.call(this, date, "".concat(mevarchimChodeshStr, " ").concat(monthName), flags.SHABBAT_MEVARCHIM);
    _this.monthName = monthName;
    var hyear = date.getFullYear();
    var hmonth = date.getMonth();
    var monNext = hmonth == HDate.monthsInYear(hyear) ? months.NISAN : hmonth + 1;
    var molad = new MoladEvent(date, hyear, monNext);
    _this.memo = molad.render('en');
    return _this;
  }
  /** @return {string} */
  _createClass(MevarchimChodeshEvent, [{
    key: "basename",
    value: function basename() {
      return this.getDesc();
    }
    /**
     * Returns (translated) description of this event
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "render",
    value: function render(locale) {
      return Locale.gettext(mevarchimChodeshStr, locale) + ' ' + Locale.gettext(this.monthName, locale);
    }
  }]);
  return MevarchimChodeshEvent;
}(Event);

/** Represents Rosh Hashana, the Jewish New Year */
var RoshHashanaEvent = /*#__PURE__*/function (_HolidayEvent3) {
  _inherits(RoshHashanaEvent, _HolidayEvent3);
  var _super5 = _createSuper(RoshHashanaEvent);
  /**
   * @private
   * @param {HDate} date Hebrew date event occurs
   * @param {number} hyear Hebrew year
   * @param {number} mask optional holiday flags
   */
  function RoshHashanaEvent(date, hyear, mask) {
    var _this2;
    _classCallCheck(this, RoshHashanaEvent);
    _this2 = _super5.call(this, date, "Rosh Hashana ".concat(hyear), mask, {
      emoji: '🍏🍯'
    });
    _this2.hyear = hyear;
    return _this2;
  }
  /**
   * Returns (translated) description of this event
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(RoshHashanaEvent, [{
    key: "render",
    value: function render(locale) {
      return Locale.gettext('Rosh Hashana', locale) + ' ' + this.hyear;
    }
  }]);
  return RoshHashanaEvent;
}(HolidayEvent);
var ykk = 'Yom Kippur Katan';

/** Represents Rosh Hashana, the Jewish New Year */
var YomKippurKatanEvent = /*#__PURE__*/function (_HolidayEvent4) {
  _inherits(YomKippurKatanEvent, _HolidayEvent4);
  var _super6 = _createSuper(YomKippurKatanEvent);
  /**
   * @private
   * @param {HDate} date Hebrew date event occurs
   * @param {string} nextMonthName name of the upcoming month
   */
  function YomKippurKatanEvent(date, nextMonthName) {
    var _this3;
    _classCallCheck(this, YomKippurKatanEvent);
    _this3 = _super6.call(this, date, "".concat(ykk, " ").concat(nextMonthName), flags.MINOR_FAST | flags.YOM_KIPPUR_KATAN);
    _this3.nextMonthName = nextMonthName;
    _this3.memo = "Minor Day of Atonement on the day preceeding Rosh Chodesh ".concat(nextMonthName);
    return _this3;
  }
  /** @return {string} */
  _createClass(YomKippurKatanEvent, [{
    key: "basename",
    value: function basename() {
      return this.getDesc();
    }
    /**
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "render",
    value: function render(locale) {
      return Locale.gettext(ykk, locale) + ' ' + Locale.gettext(this.nextMonthName, locale);
    }
    /**
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      return Locale.gettext(ykk, locale);
    }
    /** @return {string} */
  }, {
    key: "url",
    value: function url() {
      return undefined;
    }
  }]);
  return YomKippurKatanEvent;
}(HolidayEvent);
var SUN$1 = 0;
// const MON = 1;
var TUE = 2;
// const WED = 3;
var THU = 4;
var FRI$1 = 5;
var SAT$2 = 6;
var NISAN$2 = months.NISAN;
// const IYYAR = months.IYYAR;
// const SIVAN = months.SIVAN;
var TAMUZ = months.TAMUZ;
var AV = months.AV;
var ELUL$1 = months.ELUL;
var TISHREI$1 = months.TISHREI;
// const CHESHVAN = months.CHESHVAN;
var KISLEV$1 = months.KISLEV;
var TEVET$1 = months.TEVET;
// const SHVAT = months.SHVAT;
var ADAR_I$1 = months.ADAR_I;
// const ADAR_II = months.ADAR_II;

var CHAG = flags.CHAG;
// const LIGHT_CANDLES = flags.LIGHT_CANDLES;
// const YOM_TOV_ENDS = flags.YOM_TOV_ENDS;
// const CHUL_ONLY = flags.CHUL_ONLY;
// const IL_ONLY = flags.IL_ONLY;
var LIGHT_CANDLES_TZEIS$1 = flags.LIGHT_CANDLES_TZEIS;
var CHANUKAH_CANDLES$1 = flags.CHANUKAH_CANDLES;
var MINOR_FAST$1 = flags.MINOR_FAST;
var SPECIAL_SHABBAT$1 = flags.SPECIAL_SHABBAT;
var MODERN_HOLIDAY$1 = flags.MODERN_HOLIDAY;
var MAJOR_FAST$1 = flags.MAJOR_FAST;
var MINOR_HOLIDAY$1 = flags.MINOR_HOLIDAY;
var EREV$1 = flags.EREV;
// const CHOL_HAMOED = flags.CHOL_HAMOED;

/**
 * Avoid dependency on ES6 Map object
 * @private
 */
var SimpleMap = /*#__PURE__*/function () {
  function SimpleMap() {
    _classCallCheck(this, SimpleMap);
  }
  _createClass(SimpleMap, [{
    key: "has",
    value:
    /**
     * @param {string} key
     * @return {boolean}
     */
    function has(key) {
      return typeof this[key] !== 'undefined';
    }
    /**
     * @param {string} key
     * @return {any}
     */
  }, {
    key: "get",
    value: function get(key) {
      return this[key];
    }
    /**
     * @param {string} key
     * @param {any} val
     */
  }, {
    key: "set",
    value: function set(key, val) {
      this[key] = val;
    }
    /**
     * @return {string[]}
     */
  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this);
    }
  }]);
  return SimpleMap;
}();
var sedraCache = new SimpleMap();

/**
 * @private
 * @param {number} hyear
 * @param {boolean} il
 * @return {Sedra}
 */
function getSedra_(hyear, il) {
  var cacheKey = "".concat(hyear, "-").concat(il ? 1 : 0);
  var sedra = sedraCache.get(cacheKey);
  if (!sedra) {
    sedra = new Sedra(hyear, il);
    sedraCache.set(cacheKey, sedra);
  }
  return sedra;
}
var emojiIsraelFlag = {
  emoji: '🇮🇱'
};
var chanukahEmoji = '🕎';
var yearCache = Object.create(null);

/**
 * Lower-level holidays interface, which returns a `Map` of `Event`s indexed by
 * `HDate.toString()`. These events must filtered especially for `flags.IL_ONLY`
 * or `flags.CHUL_ONLY` depending on Israel vs. Diaspora holiday scheme.
 * @private
 * @param {number} year Hebrew year
 * @return {Map<string,Event[]>}
 */
function getHolidaysForYear_(year) {
  if (typeof year !== 'number') {
    throw new TypeError("bad Hebrew year: ".concat(year));
  } else if (year < 1 || year > 32658) {
    throw new RangeError("Hebrew year ".concat(year, " out of range 1-32658"));
  }
  var cached = yearCache[year];
  if (cached) {
    return cached;
  }
  var RH = new HDate(1, TISHREI$1, year);
  var pesach = new HDate(15, NISAN$2, year);
  var h = new SimpleMap();
  // eslint-disable-next-line require-jsdoc
  function add() {
    for (var _len = arguments.length, events = new Array(_len), _key = 0; _key < _len; _key++) {
      events[_key] = arguments[_key];
    }
    // for (const ev of events) {
    events.forEach(function (ev) {
      var key = ev.date.toString();
      var arr = h.get(key);
      if (_typeof(arr) === 'object') {
        if (arr[0].getFlags() & flags.EREV) {
          arr.unshift(ev);
        } else {
          arr.push(ev);
        }
      } else {
        h.set(key, [ev]);
      }
    });
  }
  staticHolidays.forEach(function (h) {
    var hd = new HDate(h.dd, h.mm, year);
    var ev = new HolidayEvent(hd, h.desc, h.flags);
    if (h.emoji) ev.emoji = h.emoji;
    if (h.chmDay) ev.cholHaMoedDay = h.chmDay;
    add(ev);
  });

  // standard holidays that don't shift based on year
  add(new RoshHashanaEvent(RH, year, CHAG | LIGHT_CANDLES_TZEIS$1));

  // Variable date holidays
  add(new HolidayEvent(new HDate(3 + (RH.getDay() == THU), TISHREI$1, year), 'Tzom Gedaliah', MINOR_FAST$1));
  // first SAT after RH
  add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, 7 + RH.abs())), 'Shabbat Shuva', SPECIAL_SHABBAT$1));
  // yes, we know Kislev 30-32 are wrong
  // HDate() corrects the month automatically
  for (var candles = 2; candles <= 8; candles++) {
    var hd = new HDate(23 + candles, KISLEV$1, year);
    add(new HolidayEvent(hd, "Chanukah: ".concat(candles, " Candles"), MINOR_HOLIDAY$1 | CHANUKAH_CANDLES$1, {
      chanukahDay: candles - 1,
      emoji: chanukahEmoji + KEYCAP_DIGITS[candles]
    }));
  }
  add(new HolidayEvent(new HDate(32, KISLEV$1, year), 'Chanukah: 8th Day', MINOR_HOLIDAY$1, {
    chanukahDay: 8,
    emoji: chanukahEmoji
  }));
  add(new AsaraBTevetEvent(new HDate(10, TEVET$1, year), 'Asara B\'Tevet', MINOR_FAST$1));
  var pesachAbs = pesach.abs();
  add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, pesachAbs - 43)), 'Shabbat Shekalim', SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, pesachAbs - 30)), 'Shabbat Zachor', SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(pesachAbs - (pesach.getDay() == TUE ? 33 : 31)), 'Ta\'anit Esther', MINOR_FAST$1));
  add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, pesachAbs - 14) - 7), 'Shabbat Parah', SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, pesachAbs - 14)), 'Shabbat HaChodesh', SPECIAL_SHABBAT$1), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, pesachAbs - 1)), 'Shabbat HaGadol', SPECIAL_SHABBAT$1), new HolidayEvent(
  // if the fast falls on Shabbat, move to Thursday
  pesach.prev().getDay() == SAT$2 ? pesach.onOrBefore(THU) : new HDate(14, NISAN$2, year), 'Ta\'anit Bechorot', MINOR_FAST$1));
  add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, new HDate(1, TISHREI$1, year + 1).abs() - 4)), 'Leil Selichot', MINOR_HOLIDAY$1, {
    emoji: '🕍'
  }));
  if (pesach.getDay() == SUN$1) {
    add(new HolidayEvent(new HDate(16, months.ADAR_II, year), 'Purim Meshulash', MINOR_HOLIDAY$1));
  }
  if (HDate.isLeapYear(year)) {
    add(new HolidayEvent(new HDate(14, ADAR_I$1, year), 'Purim Katan', MINOR_HOLIDAY$1, {
      emoji: '🎭️'
    }));
    add(new HolidayEvent(new HDate(15, ADAR_I$1, year), 'Shushan Purim Katan', MINOR_HOLIDAY$1, {
      emoji: '🎭️'
    }));
  }
  var nisan27dt = dateYomHaShoah(year);
  if (nisan27dt) {
    add(new HolidayEvent(nisan27dt, 'Yom HaShoah', MODERN_HOLIDAY$1));
  }
  var yomHaZikaronDt = dateYomHaZikaron(year);
  if (yomHaZikaronDt) {
    add(new HolidayEvent(yomHaZikaronDt, 'Yom HaZikaron', MODERN_HOLIDAY$1, emojiIsraelFlag), new HolidayEvent(yomHaZikaronDt.next(), 'Yom HaAtzma\'ut', MODERN_HOLIDAY$1, emojiIsraelFlag));
  }
  staticModernHolidays.forEach(function (h) {
    if (year >= h.firstYear) {
      var _hd = new HDate(h.dd, h.mm, year);
      var dow = _hd.getDay();
      if (h.friSatMovetoThu && (dow === FRI$1 || dow === SAT$2)) {
        _hd = _hd.onOrBefore(THU);
      } else if (h.friPostponeToSun && dow === FRI$1) {
        _hd = new HDate(_hd.abs() + 2);
      } else if (h.satPostponeToSun && dow === SAT$2) {
        _hd = _hd.next();
      }
      var mask = h.chul ? MODERN_HOLIDAY$1 : MODERN_HOLIDAY$1 | flags.IL_ONLY;
      var ev = new HolidayEvent(_hd, h.desc, mask);
      if (!h.suppressEmoji) {
        ev.emoji = '🇮🇱';
      }
      add(ev);
    }
  });
  var tamuz17 = new HDate(17, TAMUZ, year);
  var tamuz17attrs;
  if (tamuz17.getDay() == SAT$2) {
    tamuz17 = new HDate(18, TAMUZ, year);
    tamuz17attrs = {
      observed: true
    };
  }
  add(new HolidayEvent(tamuz17, 'Tzom Tammuz', MINOR_FAST$1, tamuz17attrs));
  var av9dt = new HDate(9, AV, year);
  var av9title = 'Tish\'a B\'Av';
  var av9attrs;
  if (av9dt.getDay() == SAT$2) {
    av9dt = av9dt.next();
    av9attrs = {
      observed: true
    };
    av9title += ' (observed)';
  }
  var av9abs = av9dt.abs();
  add(new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, av9abs)), 'Shabbat Chazon', SPECIAL_SHABBAT$1), new HolidayEvent(av9dt.prev(), 'Erev Tish\'a B\'Av', EREV$1 | MAJOR_FAST$1, av9attrs), new HolidayEvent(av9dt, av9title, MAJOR_FAST$1, av9attrs), new HolidayEvent(new HDate(HDate.dayOnOrBefore(SAT$2, av9abs + 7)), 'Shabbat Nachamu', SPECIAL_SHABBAT$1));
  var monthsInYear = HDate.monthsInYear(year);
  for (var month = 1; month <= monthsInYear; month++) {
    var monthName = HDate.getMonthName(month, year);
    if ((month == NISAN$2 ? HDate.daysInMonth(HDate.monthsInYear(year - 1), year - 1) : HDate.daysInMonth(month - 1, year)) == 30) {
      add(new RoshChodeshEvent(new HDate(1, month, year), monthName));
      add(new RoshChodeshEvent(new HDate(30, month - 1, year), monthName));
    } else if (month !== TISHREI$1) {
      add(new RoshChodeshEvent(new HDate(1, month, year), monthName));
    }
    if (month == ELUL$1) {
      continue;
    }

    // Don't worry about month overrun; will get "Nisan" for month=14
    var nextMonthName = HDate.getMonthName(month + 1, year);
    add(new MevarchimChodeshEvent(new HDate(29, month, year).onOrBefore(SAT$2), nextMonthName));
  }

  // Begin: Yom Kippur Katan
  // start at Iyyar because one may not fast during Nisan
  for (var _month = months.IYYAR; _month <= monthsInYear; _month++) {
    var nextMonth = _month + 1;
    // Yom Kippur Katan is not observed on the day before Rosh Hashanah.
    // Not observed prior to Rosh Chodesh Cheshvan because Yom Kippur has just passed.
    // Not observed before Rosh Chodesh Tevet, because that day is Hanukkah.
    if (nextMonth === months.TISHREI || nextMonth === months.CHESHVAN || nextMonth === months.TEVET) {
      continue;
    }
    var _ykk = new HDate(29, _month, year);
    var dow = _ykk.getDay();
    if (dow === FRI$1 || dow === SAT$2) {
      _ykk = _ykk.onOrBefore(THU);
    }
    var _nextMonthName = HDate.getMonthName(nextMonth, year);
    var ev = new YomKippurKatanEvent(_ykk, _nextMonthName);
    add(ev);
  }
  var sedra = getSedra_(year, false);
  var beshalachHd = sedra.find(15);
  add(new HolidayEvent(beshalachHd, 'Shabbat Shirah', SPECIAL_SHABBAT$1));

  // Birkat Hachamah appears only once every 28 years
  var birkatHaChama = getBirkatHaChama(year);
  if (birkatHaChama) {
    var _hd2 = new HDate(birkatHaChama);
    add(new HolidayEvent(_hd2, 'Birkat Hachamah', MINOR_HOLIDAY$1, {
      emoji: '☀️'
    }));
  }
  yearCache[year] = h;
  return h;
}

/**
 * Birkat Hachamah appears only once every 28 years.
 * Although almost always in Nisan, it can occur in Adar II.
 *   - 27 Adar II 5461 (Gregorian year 1701)
 *   - 29 Adar II 5993 (Gregorian year 2233)
 *
 * Due to drift, this will eventually slip into Iyyar
 *   - 2 Iyyar 7141 (Gregorian year 3381)
 * @private
 * @param {number} year
 * @return {number}
 */
function getBirkatHaChama(year) {
  var leap = HDate.isLeapYear(year);
  var startMonth = leap ? months.ADAR_II : NISAN$2;
  var startDay = leap ? 20 : 1;
  var baseRd = HDate.hebrew2abs(year, startMonth, startDay);
  for (var day = 0; day <= 40; day++) {
    var abs = baseRd + day;
    var elapsed = abs + 1373429;
    if (elapsed % 10227 == 172) {
      return abs;
    }
  }
  return 0;
}

var mishnayot = [{k:"Berakhot",v:[5,8,6,7,5,8,5,8,5]},{k:"Peah",v:[6,8,8,11,8,11,8,9]},{k:"Demai",v:[4,5,6,7,11,12,8]},{k:"Kilayim",v:[9,11,7,9,8,9,8,6,10]},{k:"Sheviit",v:[8,10,10,10,9,6,7,11,9,9]},{k:"Terumot",v:[10,6,9,13,9,6,7,12,7,12,10]},{k:"Maasrot",v:[8,8,10,6,8]},{k:"Maaser Sheni",v:[7,10,13,12,15]},{k:"Challah",v:[9,8,10,11]},{k:"Orlah",v:[9,17,9]},{k:"Bikkurim",v:[11,11,12,5]},{k:"Shabbat",v:[11,7,6,2,4,10,4,7,7,6,6,6,7,4,3,8,8,3,6,5,3,6,5,5]},{k:"Eruvin",v:[10,6,9,11,9,10,11,11,4,15]},{k:"Pesachim",v:[7,8,8,9,10,6,13,8,11,9]},{k:"Shekalim",v:[7,5,4,9,6,6,7,8]},{k:"Yoma",v:[8,7,11,6,7,8,5,9]},{k:"Sukkah",v:[11,9,15,10,8]},{k:"Beitzah",v:[10,10,8,7,7]},{k:"Rosh Hashanah",v:[9,9,8,9]},{k:"Taanit",v:[7,10,9,8]},{k:"Megillah",v:[11,6,6,10]},{k:"Moed Katan",v:[10,5,9]},{k:"Chagigah",v:[8,7,8]},{k:"Yevamot",v:[4,10,10,13,6,6,6,6,6,9,7,6,13,9,10,7]},{k:"Ketubot",v:[10,10,9,12,9,7,10,8,9,6,6,4,11]},{k:"Nedarim",v:[4,5,11,8,6,10,9,7,10,8,12]},{k:"Nazir",v:[7,10,7,7,7,11,4,2,5]},{k:"Sotah",v:[9,6,8,5,5,4,8,7,15]},{k:"Gittin",v:[6,7,8,9,9,7,9,10,10]},{k:"Kiddushin",v:[10,10,13,14]},{k:"Bava Kamma",v:[4,6,11,9,7,6,7,7,12,10]},{k:"Bava Metzia",v:[8,11,12,12,11,8,11,9,13,6]},{k:"Bava Batra",v:[6,14,8,9,11,8,4,8,10,8]},{k:"Sanhedrin",v:[6,5,8,5,5,6,11,7,6,6,6]},{k:"Makkot",v:[10,8,16]},{k:"Shevuot",v:[7,5,11,13,5,7,8,6]},{k:"Eduyot",v:[14,10,12,12,7,3,9,7]},{k:"Avodah Zarah",v:[9,7,10,12,12]},{k:"Avot",v:[18,16,18,22,23,11]},{k:"Horayot",v:[5,7,8]},{k:"Zevachim",v:[4,5,6,6,8,7,6,12,7,8,8,6,8,10]},{k:"Menachot",v:[4,5,7,5,9,7,6,7,9,9,9,5,11]},{k:"Chullin",v:[7,10,7,7,5,7,6,6,8,4,2,5]},{k:"Bekhorot",v:[7,9,4,10,6,12,7,10,8]},{k:"Arakhin",v:[4,6,5,4,6,5,5,7,8]},{k:"Temurah",v:[6,3,5,4,6,5,6]},{k:"Keritot",v:[7,6,10,3,8,9]},{k:"Meilah",v:[4,9,8,6,5,6]},{k:"Tamid",v:[4,5,9,3,6,3,4]},{k:"Middot",v:[9,6,8,7,4]},{k:"Kinnim",v:[4,5,6]},{k:"Kelim",v:[9,8,8,4,11,4,6,11,8,8,9,8,8,8,6,8,17,9,10,7,3,10,5,17,9,9,12,10,8,4]},{k:"Oholot",v:[8,7,7,3,7,7,6,6,16,7,9,8,6,7,10,5,5,10]},{k:"Negaim",v:[6,5,8,11,5,8,5,10,3,10,12,7,12,13]},{k:"Parah",v:[4,5,11,4,9,5,12,11,9,6,9,11]},{k:"Tahorot",v:[9,8,8,13,9,10,9,9,9,8]},{k:"Mikvaot",v:[8,10,4,5,6,11,7,5,7,8]},{k:"Niddah",v:[7,7,7,7,9,14,5,4,11,8]},{k:"Makhshirin",v:[6,11,8,10,11,8]},{k:"Zavim",v:[6,4,3,7,12]},{k:"Tevul Yom",v:[5,8,6,7]},{k:"Yadayim",v:[5,4,5,8]},{k:"Oktzin",v:[6,10,12]}];

var cycleStartDate = new Date(1947, 4, 20);
var mishnaYomiStart = greg2abs(cycleStartDate);
var numMishnayot = 4192;
var numDays = numMishnayot / 2;

/**
 * Describes a mishna to be read
 * @typedef {Object} MishnaYomi
 * @property {string} k tractate name in Sephardic transliteration (e.g. "Berakhot", "Moed Katan")
 * @property {string} v verse (e.g. "2:1")
 */

// eslint-disable-next-line require-jsdoc
function throwTypeError$1(msg) {
  throw new TypeError(msg);
}

/**
 * A program of daily learning in which participants study two Mishnahs
 * each day in order to finish the entire Mishnah in ~6 years.
 */
var MishnaYomiIndex = /*#__PURE__*/function () {
  /**
   * Initializes a Mishna Yomi instance
   */
  function MishnaYomiIndex() {
    _classCallCheck(this, MishnaYomiIndex);
    var tmp = Array(numMishnayot);
    var i = 0;
    var _iterator = _createForOfIteratorHelper(mishnayot),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tractate = _step.value;
        var v = tractate.v;
        for (var chap = 1; chap <= v.length; chap++) {
          var numv = v[chap - 1];
          for (var verse = 1; verse <= numv; verse++) {
            tmp[i++] = {
              k: tractate.k,
              v: "".concat(chap, ":").concat(verse)
            };
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var days = Array(numDays);
    for (var j = 0; j < numDays; j++) {
      var k = j * 2;
      days[j] = [tmp[k], tmp[k + 1]];
    }
    /** @type {MishnaYomi[]} */
    this.days = days;
  }

  /**
   * Looks up a Mishna Yomi
   * @param {Date|HDate|number} date Gregorian date
   * @return {MishnaYomi[]}
   */
  _createClass(MishnaYomiIndex, [{
    key: "lookup",
    value: function lookup(date) {
      var abs = typeof date === 'number' && !isNaN(date) ? date : isDate(date) ? greg2abs(date) : HDate.isHDate(date) ? date.abs() : throwTypeError$1("Invalid date: ".concat(date));
      if (abs < mishnaYomiStart) {
        var s = date.toISOString().substring(0, 10);
        throw new RangeError("Date ".concat(s, " too early; Mishna Yomi cycle began on 1947-05-20"));
      }
      var dayNum = (abs - mishnaYomiStart) % numDays;
      return this.days[dayNum];
    }
  }]);
  return MishnaYomiIndex;
}();

/**
 * @private
 * @param {MishnaYomi[]} mishnaYomi
 * @param {string} locale
 * @return {string}
 */
function formatMyomi(mishnaYomi, locale) {
  var k1 = mishnaYomi[0].k;
  var cv1 = mishnaYomi[0].v;
  var mishna1 = Locale.gettext(k1, locale) + ' ' + cv1;
  var k2 = mishnaYomi[1].k;
  var cv2 = mishnaYomi[1].v;
  if (k1 !== k2) {
    return mishna1 + '-' + Locale.gettext(k2, locale) + ' ' + cv2;
  }
  var p1 = cv1.split(':');
  var p2 = cv2.split(':');
  if (p1[0] === p2[0]) {
    return mishna1 + '-' + p2[1];
  }
  return mishna1 + '-' + cv2;
}

/**
 * Event wrapper around a Mishna Yomi instance
 */
var MishnaYomiEvent = /*#__PURE__*/function (_Event) {
  _inherits(MishnaYomiEvent, _Event);
  var _super = _createSuper(MishnaYomiEvent);
  /**
   * @param {HDate} date
   * @param {MishnaYomi[]} mishnaYomi
   */
  function MishnaYomiEvent(date, mishnaYomi) {
    _classCallCheck(this, MishnaYomiEvent);
    return _super.call(this, date, formatMyomi(mishnaYomi, null), flags.MISHNA_YOMI, {
      mishnaYomi: mishnaYomi
    });
  }
  /**
   * Returns Mishna Yomi name (e.g. "Bava Metzia 10:5-6" or "Berakhot 9:5-Peah 1:1").
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(MishnaYomiEvent, [{
    key: "render",
    value: function render(locale) {
      return formatMyomi(this.mishnaYomi, locale);
    }
    /**
     * Returns a link to sefaria.org
     * @return {string}
     */
  }, {
    key: "url",
    value: function url() {
      var mishnaYomi = this.mishnaYomi;
      var k1 = mishnaYomi[0].k;
      var mishna = k1 === 'Avot' ? 'Pirkei' : 'Mishnah';
      var name = k1.replace(/ /g, '_');
      var prefix = "https://www.sefaria.org/".concat(mishna, "_").concat(name);
      var cv1 = mishnaYomi[0].v;
      if (k1 !== mishnaYomi[1].k) {
        var _verse = cv1.replace(':', '.');
        return "".concat(prefix, ".").concat(_verse, "?lang=bi");
      }
      var cv2 = mishnaYomi[1].v;
      var p1 = cv1.split(':');
      var p2 = cv2.split(':');
      var verse1 = p1.join('.');
      var verse2 = p1[0] === p2[0] ? p2[1] : p2.join('.');
      return "".concat(prefix, ".").concat(verse1, "-").concat(verse2, "?lang=bi");
    }
  }]);
  return MishnaYomiEvent;
}(Event);

var vilnaStartDate = new Date(1980, 1, 2);
/**
 * Yerushalmi Yomi configuration for Vilna Edition
 * @readonly
 */
var vilna = {
  startDate: vilnaStartDate,
  startAbs: greg2abs(vilnaStartDate),
  skipYK9Av: true,
  shas: [['Berakhot', 68], ['Peah', 37], ['Demai', 34], ['Kilayim', 44], ['Sheviit', 31], ['Terumot', 59], ['Maasrot', 26], ['Maaser Sheni', 33], ['Challah', 28], ['Orlah', 20], ['Bikkurim', 13], ['Shabbat', 92], ['Eruvin', 65], ['Pesachim', 71], ['Beitzah', 22], ['Rosh Hashanah', 22], ['Yoma', 42], ['Sukkah', 26], ['Taanit', 26], ['Shekalim', 33], ['Megillah', 34], ['Chagigah', 22], ['Moed Katan', 19], ['Yevamot', 85], ['Ketubot', 72], ['Sotah', 47], ['Nedarim', 40], ['Nazir', 47], ['Gittin', 54], ['Kiddushin', 48], ['Bava Kamma', 44], ['Bava Metzia', 37], ['Bava Batra', 34], ['Shevuot', 44], ['Makkot', 9], ['Sanhedrin', 57], ['Avodah Zarah', 37], ['Horayot', 19], ['Niddah', 13]]
};
var schottensteinStartDate = new Date(2022, 10, 14);
/**
 * Yerushalmi Yomi configuration for Schottenstein Edition
 * @readonly
 */
var schottenstein = {
  startDate: schottensteinStartDate,
  startAbs: greg2abs(schottensteinStartDate),
  skipYK9Av: false,
  shas: [['Berakhot', 94], ['Peah', 73], ['Demai', 77], ['Kilayim', 84], ['Sheviit', 87], ['Terumot', 107], ['Maasrot', 46], ['Maaser Sheni', 59], ['Challah', 49], ['Orlah', 42], ['Bikkurim', 26], ['Shabbat', 113], ['Eruvin', 71], ['Pesachim', 86], ['Shekalim', 61], ['Yoma', 57], ['Sukkah', 33], ['Beitzah', 49], ['Rosh Hashanah', 27], ['Taanit', 31], ['Megillah', 41], ['Chagigah', 28], ['Moed Katan', 23], ['Yevamot', 88], ['Ketubot', 77], ['Nedarim', 42], ['Nazir', 53], ['Sotah', 52], ['Gittin', 53], ['Kiddushin', 53], ['Bava Kamma', 40], ['Bava Metzia', 35], ['Bava Batra', 39], ['Sanhedrin', 75], ['Shevuot', 49], ['Avodah Zarah', 34], ['Makkot', 11], ['Horayot', 18], ['Niddah', 11]]
};

// eslint-disable-next-line require-jsdoc
function throwTypeError(msg) {
  throw new TypeError(msg);
}
var SUN = 0;
var SAT$1 = 6;

/**
 * Using the Vilna edition, the Yerushalmi Daf Yomi program takes
 * ~4.25 years or 51 months.
 * Unlike the Daf Yomi Bavli cycle, this Yerushalmi cycle skips both
 * Yom Kippur and Tisha B'Av (returning `null`).
 * The page numbers are according to the Vilna
 * Edition which is used since 1900.
 *
 * The Schottenstein edition uses different page numbers and takes
 * ~6 years to complete.
 *
 * Throws an exception if the date is before Daf Yomi Yerushalmi
 * cycle began (2 February 1980 for Vilna,
 * 14 November 2022 for Schottenstein).
 *
 * @param {HDate|Date|number} date - Hebrew or Gregorian date
 * @param {any} config - either vilna or schottenstein
 * @return {any}
 */
function yerushalmiYomi(date, config) {
  if (_typeof(config) !== 'object' || !Array.isArray(config.shas)) {
    throw new Error('invalid yerushalmi config');
  }
  var cday = typeof date === 'number' && !isNaN(date) ? date : isDate(date) ? greg2abs(date) : HDate.isHDate(date) ? date.abs() : throwTypeError("non-date given to dafyomi: ".concat(date));
  var startAbs = config.startAbs;
  if (cday < startAbs) {
    throw new RangeError("Date ".concat(date, " too early; Yerushalmi Yomi cycle began on ").concat(config.startDate));
  }
  var hd = new HDate(cday);
  // No Daf for Yom Kippur and Tisha B'Av
  if (config.skipYK9Av && skipDay(hd)) {
    return null;
  }
  var shas = config.shas;
  var numDapim = 0;
  for (var j = 0; j < shas.length; j++) {
    numDapim += shas[j][1];
  }
  var prevCycle = startAbs;
  var nextCycle = startAbs;
  while (cday >= nextCycle) {
    prevCycle = nextCycle;
    nextCycle += numDapim;
    nextCycle += numSpecialDays(config, prevCycle, nextCycle);
  }
  var total = cday - prevCycle - numSpecialDays(config, prevCycle, cday);
  for (var _j = 0; _j < shas.length; _j++) {
    var masechet = shas[_j];
    if (total < masechet[1]) {
      return {
        name: masechet[0],
        blatt: total + 1
      };
    }
    total -= masechet[1];
  }
  throw new Error('Interal error, this code should be unreachable');
}

/**
 * @private
 * @param {HDate} hd
 * @return {boolean}
 */
function skipDay(hd) {
  if (hd.getMonth() === months.TISHREI && hd.getDate() === 10 || hd.getMonth() === months.AV && (hd.getDate() === 9 && hd.getDay() !== SAT$1 || hd.getDate() === 10 && hd.getDay() === SUN)) {
    return true;
  }
  return false;
}

/**
 * @private
 * @param {any} config
 * @param {number} startAbs
 * @param {number} endAbs
 * @return {number}
 */
function numSpecialDays(config, startAbs, endAbs) {
  if (!config.skipYK9Av) {
    return 0;
  }
  var startYear = new HDate(startAbs).getFullYear();
  var endYear = new HDate(endAbs).getFullYear();
  var specialDays = 0;
  for (var year = startYear; year <= endYear; year++) {
    var ykAbs = new HDate(10, months.TISHREI, year).abs();
    if (ykAbs >= startAbs && ykAbs <= endAbs) {
      specialDays++;
    }
    var av9dt = new HDate(9, months.AV, year);
    if (av9dt.getDay() == SAT$1) {
      av9dt = av9dt.next();
    }
    var av9abs = av9dt.abs();
    if (av9abs >= startAbs && av9abs <= endAbs) {
      specialDays++;
    }
  }
  return specialDays;
}

/**
 * Event wrapper around a Yerushalmi Yomi result
 */
var YerushalmiYomiEvent = /*#__PURE__*/function (_Event) {
  _inherits(YerushalmiYomiEvent, _Event);
  var _super = _createSuper(YerushalmiYomiEvent);
  /**
   * @param {HDate} date
   * @param {any} daf
   */
  function YerushalmiYomiEvent(date, daf) {
    _classCallCheck(this, YerushalmiYomiEvent);
    return _super.call(this, date, "".concat(daf.name, " ").concat(daf.blatt), flags.YERUSHALMI_YOMI, {
      daf: daf
    });
  }
  /**
   * Returns name of tractate and page (e.g. "Yerushalmi Beitzah 21").
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @return {string}
   */
  _createClass(YerushalmiYomiEvent, [{
    key: "render",
    value: function render(locale) {
      var prefix = Locale.gettext('Yerushalmi', locale);
      return prefix + ' ' + this.renderBrief(locale);
    }
    /**
     * Returns name of tractate and page (e.g. "Beitzah 21").
     * @param {string} [locale] Optional locale name (defaults to active locale).
     * @return {string}
     */
  }, {
    key: "renderBrief",
    value: function renderBrief(locale) {
      locale = locale || Locale.getLocaleName();
      if (typeof locale === 'string') {
        locale = locale.toLowerCase();
      }
      var name = Locale.gettext(this.daf.name, locale);
      if (locale === 'he' || locale === 'he-x-nonikud') {
        return name + ' דף ' + gematriya(this.daf.blatt);
      }
      return name + ' ' + this.daf.blatt;
    }
  }]);
  return YerushalmiYomiEvent;
}(Event);

var NISAN$1 = months.NISAN;
var CHESHVAN = months.CHESHVAN;
var KISLEV = months.KISLEV;
var TEVET = months.TEVET;
var SHVAT = months.SHVAT;
var ADAR_I = months.ADAR_I;
var ADAR_II = months.ADAR_II;

/**
 * @private
 * @param {number} hyear Hebrew year
 * @param {Date|HDate} gdate Gregorian or Hebrew date of death
 * @return {HDate} anniversary occurring in hyear
 */
function getYahrzeit_(hyear, gdate) {
  var orig = HDate.isHDate(gdate) ? gdate : new HDate(gdate);
  var hDeath = {
    yy: orig.getFullYear(),
    mm: orig.getMonth(),
    dd: orig.getDate()
  };
  if (hyear <= hDeath.yy) {
    // `Hebrew year ${hyear} occurs on or before original date in ${hDeath.yy}`
    return undefined;
  }
  if (hDeath.mm == CHESHVAN && hDeath.dd == 30 && !longCheshvan(hDeath.yy + 1)) {
    // If it's Heshvan 30 it depends on the first anniversary;
    // if that was not Heshvan 30, use the day before Kislev 1.
    hDeath = abs2hebrew(hebrew2abs(hyear, KISLEV, 1) - 1);
  } else if (hDeath.mm == KISLEV && hDeath.dd == 30 && shortKislev(hDeath.yy + 1)) {
    // If it's Kislev 30 it depends on the first anniversary;
    // if that was not Kislev 30, use the day before Teveth 1.
    hDeath = abs2hebrew(hebrew2abs(hyear, TEVET, 1) - 1);
  } else if (hDeath.mm == ADAR_II) {
    // If it's Adar II, use the same day in last month of year (Adar or Adar II).
    hDeath.mm = monthsInYear(hyear);
  } else if (hDeath.mm == ADAR_I && hDeath.dd == 30 && !isLeapYear(hyear)) {
    // If it's the 30th in Adar I and year is not a leap year
    // (so Adar has only 29 days), use the last day in Shevat.
    hDeath.dd = 30;
    hDeath.mm = SHVAT;
  }
  // In all other cases, use the normal anniversary of the date of death.

  // advance day to rosh chodesh if needed
  if (hDeath.mm == CHESHVAN && hDeath.dd == 30 && !longCheshvan(hyear)) {
    hDeath.mm = KISLEV;
    hDeath.dd = 1;
  } else if (hDeath.mm == KISLEV && hDeath.dd == 30 && shortKislev(hyear)) {
    hDeath.mm = TEVET;
    hDeath.dd = 1;
  }
  return new HDate(hDeath.dd, hDeath.mm, hyear);
}

/**
 * @private
 * @param {number} hyear Hebrew year
 * @param {Date|HDate} gdate Gregorian or Hebrew date of event
 * @return {HDate} anniversary occurring in `hyear`
 */
function getBirthdayOrAnniversary_(hyear, gdate) {
  var orig = HDate.isHDate(gdate) ? gdate : new HDate(gdate);
  var origYear = orig.getFullYear();
  if (hyear <= origYear) {
    // `Hebrew year ${hyear} occurs on or before original date in ${origYear}`
    return undefined;
  }
  var isOrigLeap = isLeapYear(origYear);
  var month = orig.getMonth();
  var day = orig.getDate();
  if (month == ADAR_I && !isOrigLeap || month == ADAR_II && isOrigLeap) {
    month = monthsInYear(hyear);
  } else if (month == CHESHVAN && day == 30 && !longCheshvan(hyear)) {
    month = KISLEV;
    day = 1;
  } else if (month == KISLEV && day == 30 && shortKislev(hyear)) {
    month = TEVET;
    day = 1;
  } else if (month == ADAR_I && day == 30 && isOrigLeap && !isLeapYear(hyear)) {
    month = NISAN$1;
    day = 1;
  }
  return new HDate(day, month, hyear);
}

var version="3.46.2";

var headers$1={"plural-forms":"nplurals=2; plural=(n > 1);"};var contexts$1={"":{Berachot:["Berachos"],Shabbat:["Shabbos"],Taanit:["Taanis"],Yevamot:["Yevamos"],Ketubot:["Kesubos"],"Baba Batra":["Baba Basra"],Makkot:["Makkos"],Shevuot:["Shevuos"],Horayot:["Horayos"],Menachot:["Menachos"],Bechorot:["Bechoros"],Keritot:["Kerisos"],Midot:["Midos"],"Achrei Mot":["Achrei Mos"],Bechukotai:["Bechukosai"],"Beha'alotcha":["Beha'aloscha"],Bereshit:["Bereshis"],Chukat:["Chukas"],"Erev Shavuot":["Erev Shavuos"],"Erev Sukkot":["Erev Sukkos"],"Ki Tavo":["Ki Savo"],"Ki Teitzei":["Ki Seitzei"],"Ki Tisa":["Ki Sisa"],Matot:["Matos"],"Purim Katan":["Purim Koton"],Tazria:["Sazria"],"Shabbat Chazon":["Shabbos Chazon"],"Shabbat HaChodesh":["Shabbos HaChodesh"],"Shabbat HaGadol":["Shabbos HaGadol"],"Shabbat Nachamu":["Shabbos Nachamu"],"Shabbat Parah":["Shabbos Parah"],"Shabbat Shekalim":["Shabbos Shekalim"],"Shabbat Shuva":["Shabbos Shuvah"],"Shabbat Zachor":["Shabbos Zachor"],Shavuot:["Shavuos"],"Shavuot I":["Shavuos I"],"Shavuot II":["Shavuos II"],Shemot:["Shemos"],"Shmini Atzeret":["Shmini Atzeres"],"Simchat Torah":["Simchas Torah"],Sukkot:["Sukkos"],"Sukkot I":["Sukkos I"],"Sukkot II":["Sukkos II"],"Sukkot II (CH''M)":["Sukkos II (CH''M)"],"Sukkot III (CH''M)":["Sukkos III (CH''M)"],"Sukkot IV (CH''M)":["Sukkos IV (CH''M)"],"Sukkot V (CH''M)":["Sukkos V (CH''M)"],"Sukkot VI (CH''M)":["Sukkos VI (CH''M)"],"Sukkot VII (Hoshana Raba)":["Sukkos VII (Hoshana Raba)"],"Ta'anit Bechorot":["Ta'anis Bechoros"],"Ta'anit Esther":["Ta'anis Esther"],Toldot:["Toldos"],Vaetchanan:["Vaeschanan"],Yitro:["Yisro"],"Vezot Haberakhah":["Vezos Haberakhah"],Parashat:["Parshas"],"Leil Selichot":["Leil Selichos"],"Shabbat Mevarchim Chodesh":["Shabbos Mevorchim Chodesh"],"Shabbat Shirah":["Shabbos Shirah"],Tevet:["Teves"],"Asara B'Tevet":["Asara B'Teves"],Berakhot:["Berakhos"],Sheviit:["Sheviis"],Terumot:["Terumos"],Maasrot:["Maasros"],Eduyot:["Eduyos"],Avot:["Avos"],Bekhorot:["Bekhoros"],Middot:["Middos"],Oholot:["Oholos"],Tahorot:["Tahoros"],Mikvaot:["Mikvaos"],"Alot HaShachar":["Alos HaShachar"],"Kriat Shema, sof zeman":["Krias Shema, sof zman"],"Tefilah, sof zeman":["Tefilah, sof zman"],"Kriat Shema, sof zeman (MGA)":["Krias Shema, sof zman (MGA)"],"Tefilah, sof zeman (MGA)":["Tefilah, sof zman (MGA)"],"Chatzot HaLailah":["Chatzos HaLailah"],"Chatzot hayom":["Chatzos"],"Tzeit HaKochavim":["Tzeis HaKochavim"],"Birkat Hachamah":["Birkas Hachamah"],"Shushan Purim Katan":["Shushan Purim Koton"]}};var poAshkenazi = {headers:headers$1,contexts:contexts$1};

Locale.addLocale('ashkenazi', poAshkenazi);
Locale.addLocale('a', poAshkenazi);

var headers={"plural-forms":"nplurals=2; plural=(n > 1);"};var contexts={"":{Berachot:["ברכות"],Shabbat:["שַׁבָּת"],Eruvin:["עירובין"],Pesachim:["פסחים"],Shekalim:["שקלים"],Yoma:["יומא"],Sukkah:["סוכה"],Beitzah:["ביצה"],Taanit:["תענית"],Megillah:["מגילה"],"Moed Katan":["מועד קטן"],Chagigah:["חגיגה"],Yevamot:["יבמות"],Ketubot:["כתובות"],Nedarim:["נדרים"],Nazir:["נזיר"],Sotah:["סוטה"],Gitin:["גיטין"],Kiddushin:["קידושין"],"Baba Kamma":["בבא קמא"],"Baba Metzia":["בבא מציעא"],"Baba Batra":["בבא בתרא"],Sanhedrin:["סנהדרין"],Makkot:["מכות"],Shevuot:["שבועות"],"Avodah Zarah":["עבודה זרה"],Horayot:["הוריות"],Zevachim:["זבחים"],Menachot:["מנחות"],Chullin:["חולין"],Bechorot:["בכורות"],Arachin:["ערכין"],Temurah:["תמורה"],Keritot:["כריתות"],Meilah:["מעילה"],Kinnim:["קינים"],Tamid:["תמיד"],Midot:["מדות"],Niddah:["נדה"],"Daf Yomi":["דַף יוֹמִי"],Parashat:["פָּרָשַׁת"],"Achrei Mot":["אַחֲרֵי מוֹת"],Balak:["בָּלָק"],Bamidbar:["בְּמִדְבַּר"],Bechukotai:["בְּחֻקֹּתַי"],"Beha'alotcha":["בְּהַעֲלֹתְךָ"],Behar:["בְּהַר"],Bereshit:["בְּרֵאשִׁית"],Beshalach:["בְּשַׁלַּח"],Bo:["בֹּא"],"Chayei Sara":["חַיֵּי שָֹרָה"],Chukat:["חֻקַּת"],Devarim:["דְּבָרִים"],Eikev:["עֵקֶב"],Emor:["אֱמוֹר"],"Ha'Azinu":["הַאֲזִינוּ"],Kedoshim:["קְדשִׁים"],"Ki Tavo":["כִּי־תָבוֹא"],"Ki Teitzei":["כִּי־תֵצֵא"],"Ki Tisa":["כִּי תִשָּׂא"],Korach:["קוֹרַח"],"Lech-Lecha":["לֶךְ־לְךָ"],Masei:["מַסְעֵי"],Matot:["מַּטּוֹת"],Metzora:["מְּצֹרָע"],Miketz:["מִקֵּץ"],Mishpatim:["מִּשְׁפָּטִים"],Nasso:["נָשׂא"],Nitzavim:["נִצָּבִים"],Noach:["נֹחַ"],Pekudei:["פְקוּדֵי"],Pinchas:["פִּינְחָס"],"Re'eh":["רְאֵה"],"Sh'lach":["שְׁלַח־לְךָ"],Shemot:["שְׁמוֹת"],Shmini:["שְּׁמִינִי"],Shoftim:["שׁוֹפְטִים"],Tazria:["תַזְרִיעַ"],Terumah:["תְּרוּמָה"],Tetzaveh:["תְּצַוֶּה"],Toldot:["תּוֹלְדוֹת"],Tzav:["צַו"],Vaera:["וָאֵרָא"],Vaetchanan:["וָאֶתְחַנַּן"],Vayakhel:["וַיַּקְהֵל"],Vayechi:["וַיְחִי"],Vayeilech:["וַיֵּלֶךְ"],Vayera:["וַיֵּרָא"],Vayeshev:["וַיֵּשֶׁב"],Vayetzei:["וַיֵּצֵא"],Vayigash:["וַיִּגַּשׁ"],Vayikra:["וַיִּקְרָא"],Vayishlach:["וַיִּשְׁלַח"],"Vezot Haberakhah":["וְזֹאת הַבְּרָכָה"],Yitro:["יִתְרוֹ"],"Asara B'Tevet":["עֲשָׂרָה בְּטֵבֵת"],"Candle lighting":["הַדלָקָת נֵרוֹת"],Chanukah:["חֲנוּכָּה"],"Chanukah: 1 Candle":["חֲנוּכָּה: א׳ נֵר"],"Chanukah: 2 Candles":["חֲנוּכָּה: ב׳ נֵרוֹת"],"Chanukah: 3 Candles":["חֲנוּכָּה: ג׳ נֵרוֹת"],"Chanukah: 4 Candles":["חֲנוּכָּה: ד׳ נֵרוֹת"],"Chanukah: 5 Candles":["חֲנוּכָּה: ה׳ נֵרוֹת"],"Chanukah: 6 Candles":["חֲנוּכָּה: ו׳ נֵרוֹת"],"Chanukah: 7 Candles":["חֲנוּכָּה: ז׳ נֵרוֹת"],"Chanukah: 8 Candles":["חֲנוּכָּה: ח׳ נֵרוֹת"],"Chanukah: 8th Day":["חֲנוּכָּה: יוֹם ח׳"],"Days of the Omer":["סְפִירַת הָעוֹמֶר"],Omer:["עוֹמֶר"],"day of the Omer":["בָּעוֹמֶר"],"Erev Pesach":["עֶרֶב פֶּסַח"],"Erev Purim":["עֶרֶב פּוּרִים"],"Erev Rosh Hashana":["עֶרֶב רֹאשׁ הַשָּׁנָה"],"Erev Shavuot":["עֶרֶב שָׁבוּעוֹת"],"Erev Simchat Torah":["עֶרֶב שִׂמְחַת תּוֹרָה"],"Erev Sukkot":["עֶרֶב סוּכּוֹת"],"Erev Tish'a B'Av":["עֶרֶב תִּשְׁעָה בְּאָב"],"Erev Yom Kippur":["עֶרֶב יוֹם כִּפּוּר"],Havdalah:["הַבדָלָה"],"Lag BaOmer":["ל״ג בָּעוֹמֶר"],"Leil Selichot":["סליחות"],Pesach:["פֶּסַח"],"Pesach I":["פֶּסַח א׳"],"Pesach II":["פֶּסַח ב׳"],"Pesach II (CH''M)":["פֶּסַח ב׳ (חוה״מ)"],"Pesach III (CH''M)":["פֶּסַח ג׳ (חוה״מ)"],"Pesach IV (CH''M)":["פֶּסַח ד׳ (חוה״מ)"],"Pesach Sheni":["פֶּסַח שני"],"Pesach V (CH''M)":["פֶּסַח ה׳ (חוה״מ)"],"Pesach VI (CH''M)":["פֶּסַח ו׳ (חוה״מ)"],"Pesach VII":["פֶּסַח ז׳"],"Pesach VIII":["פֶּסַח ח׳"],Purim:["פּוּרִים"],"Purim Katan":["פּוּרִים קָטָן"],"Rosh Chodesh %s":["רֹאשׁ חוֹדֶשׁ %s"],"Rosh Chodesh":["רֹאשׁ חוֹדֶשׁ"],Adar:["אַדָר"],"Adar I":["אַדָר א׳"],"Adar II":["אַדָר ב׳"],Av:["אָב"],Cheshvan:["חֶשְׁוָן"],Elul:["אֱלוּל"],Iyyar:["אִיָיר"],Kislev:["כִּסְלֵו"],Nisan:["נִיסָן"],"Sh'vat":["שְׁבָט"],Sivan:["סִיוָן"],Tamuz:["תַּמּוּז"],Tevet:["טֵבֵת"],Tishrei:["תִשְׁרֵי"],"Rosh Hashana":["רֹאשׁ הַשָּׁנָה"],"Rosh Hashana I":["רֹאשׁ הַשָּׁנָה א׳"],"Rosh Hashana II":["רֹאשׁ הַשָּׁנָה ב׳"],"Shabbat Chazon":["שַׁבָּת חֲזוֹן"],"Shabbat HaChodesh":["שַׁבָּת הַחֹדֶשׁ"],"Shabbat HaGadol":["שַׁבָּת הַגָּדוֹל"],"Shabbat Machar Chodesh":["שַׁבָּת מָחָר חוֹדֶשׁ"],"Shabbat Nachamu":["שַׁבָּת נַחֲמוּ"],"Shabbat Parah":["שַׁבָּת פּרה"],"Shabbat Rosh Chodesh":["שַׁבָּת רֹאשׁ חוֹדֶשׁ"],"Shabbat Shekalim":["שַׁבָּת שְׁקָלִים"],"Shabbat Shuva":["שַׁבָּת שׁוּבָה"],"Shabbat Zachor":["שַׁבָּת זָכוֹר"],Shavuot:["שָׁבוּעוֹת"],"Shavuot I":["שָׁבוּעוֹת א׳"],"Shavuot II":["שָׁבוּעוֹת ב׳"],"Shmini Atzeret":["שְׁמִינִי עֲצֶרֶת"],"Shushan Purim":["שׁוּשָׁן פּוּרִים"],Sigd:["סיגד"],"Simchat Torah":["שִׂמְחַת תּוֹרָה"],Sukkot:["סוּכּוֹת"],"Sukkot I":["סוּכּוֹת א׳"],"Sukkot II":["סוּכּוֹת ב׳"],"Sukkot II (CH''M)":["סוּכּוֹת ב׳ (חוה״מ)"],"Sukkot III (CH''M)":["סוּכּוֹת ג׳ (חוה״מ)"],"Sukkot IV (CH''M)":["סוּכּוֹת ד׳ (חוה״מ)"],"Sukkot V (CH''M)":["סוּכּוֹת ה׳ (חוה״מ)"],"Sukkot VI (CH''M)":["סוּכּוֹת ו׳ (חוה״מ)"],"Sukkot VII (Hoshana Raba)":["סוּכּוֹת ז׳ (הוֹשַׁעְנָא רַבָּה)"],"Ta'anit Bechorot":["תַּעֲנִית בְּכוֹרוֹת"],"Ta'anit Esther":["תַּעֲנִית אֶסְתֵּר"],"Tish'a B'Av":["תִּשְׁעָה בְּאָב"],"Tu B'Av":["טוּ בְּאָב"],"Tu BiShvat":["טוּ בִּשְׁבָט"],"Tu B'Shvat":["טוּ בִּשְׁבָט"],"Tzom Gedaliah":["צוֹם גְּדַלְיָה"],"Tzom Tammuz":["צוֹם תָּמוּז"],"Yom HaAtzma'ut":["יוֹם הָעַצְמָאוּת"],"Yom HaShoah":["יוֹם הַשּׁוֹאָה"],"Yom HaZikaron":["יוֹם הַזִּכָּרוֹן"],"Yom Kippur":["יוֹם כִּפּוּר"],"Yom Yerushalayim":["יוֹם יְרוּשָׁלַיִם"],"Yom HaAliyah":["יוֹם הַעֲלִיָּה"],"Yom HaAliyah School Observance":["שְׁמִירָת בֵּית הַסֵפֶר לְיוֹם הַעֲלִיָּה"],"Pesach I (on Shabbat)":["פֶּסַח יוֹם א׳ (בְּשַׁבָּת)"],"Pesach Chol ha-Moed Day 1":["פֶּסַח חוֹל הַמּוֹעֵד יוֹם א׳"],"Pesach Chol ha-Moed Day 2":["פֶּסַח חוֹל הַמּוֹעֵד יוֹם ב׳"],"Pesach Chol ha-Moed Day 3":["פֶּסַח חוֹל הַמּוֹעֵד יוֹם ג׳"],"Pesach Chol ha-Moed Day 4":["פֶּסַח חוֹל הַמּוֹעֵד יוֹם ד׳"],"Pesach Chol ha-Moed Day 5":["פֶּסַח חוֹל הַמּוֹעֵד יוֹם ה׳"],"Pesach Shabbat Chol ha-Moed":["פֶּסַח שַׁבָּת חוֹל הַמּוֹעֵד"],"Shavuot II (on Shabbat)":["שָׁבוּעוֹת יוֹם ב׳ (בְּשַׁבָּת)"],"Rosh Hashana I (on Shabbat)":["רֹאשׁ הַשָּׁנָה יוֹם א׳ (בְּשַׁבָּת)"],"Yom Kippur (on Shabbat)":["יוֹם כִּפּוּר (בְּשַׁבָּת)"],"Yom Kippur (Mincha, Traditional)":["יוֹם כִּפּוּר מִנחָה"],"Yom Kippur (Mincha, Alternate)":["יוֹם כִּפּוּר מִנחָה"],"Sukkot I (on Shabbat)":["סוּכּוֹת יוֹם א׳ (בְּשַׁבָּת)"],"Sukkot Chol ha-Moed Day 1":["סוּכּוֹת חוֹל הַמּוֹעֵד יוֹם א׳"],"Sukkot Chol ha-Moed Day 2":["סוּכּוֹת חוֹל הַמּוֹעֵד יוֹם ב׳"],"Sukkot Chol ha-Moed Day 3":["סוּכּוֹת חוֹל הַמּוֹעֵד יוֹם ג׳"],"Sukkot Chol ha-Moed Day 4":["סוּכּוֹת חוֹל הַמּוֹעֵד יוֹם ד׳"],"Sukkot Chol ha-Moed Day 5":["סוּכּוֹת חוֹל הַמּוֹעֵד יוֹם ה׳"],"Sukkot Shabbat Chol ha-Moed":["סוּכּוֹת שַׁבָּת חוֹל הַמּוֹעֵד"],"Sukkot Final Day (Hoshana Raba)":["סוּכּוֹת ז׳ (הוֹשַׁעְנָא רַבָּה)"],"Rosh Chodesh Adar":["רֹאשׁ חוֹדֶשׁ אַדָר"],"Rosh Chodesh Adar I":["רֹאשׁ חוֹדֶשׁ אַדָר א׳"],"Rosh Chodesh Adar II":["רֹאשׁ חוֹדֶשׁ אַדָר ב׳"],"Rosh Chodesh Av":["רֹאשׁ חוֹדֶשׁ אָב"],"Rosh Chodesh Cheshvan":["רֹאשׁ חוֹדֶשׁ חֶשְׁוָן"],"Rosh Chodesh Elul":["רֹאשׁ חוֹדֶשׁ אֱלוּל"],"Rosh Chodesh Iyyar":["רֹאשׁ חוֹדֶשׁ אִיָיר"],"Rosh Chodesh Kislev":["רֹאשׁ חוֹדֶשׁ כִּסְלֵו"],"Rosh Chodesh Nisan":["רֹאשׁ חוֹדֶשׁ נִיסָן"],"Rosh Chodesh Sh'vat":["רֹאשׁ חוֹדֶשׁ שְׁבָט"],"Rosh Chodesh Sivan":["רֹאשׁ חוֹדֶשׁ סִיוָן"],"Rosh Chodesh Tamuz":["רֹאשׁ חוֹדֶשׁ תָּמוּז"],"Rosh Chodesh Tevet":["רֹאשׁ חוֹדֶשׁ טֵבֵת"],min:["דקות"],"Fast begins":["תחילת הַצוֹם"],"Fast ends":["סִיּוּם הַצוֹם"],"Rosh Hashana LaBehemot":["רֹאשׁ הַשָּׁנָה לְמַעְשַׂר בְּהֵמָה"],"Tish'a B'Av (observed)":["תִּשְׁעָה בְּאָב נִדחֶה"],"Shabbat Mevarchim Chodesh":["שַׁבָּת מברכים חוֹדֶשׁ"],"Shabbat Shirah":["שַׁבָּת שִׁירָה"],"Chatzot HaLailah":["חֲצוֹת הַלַיְלָה"],"Alot haShachar":["עֲלוֹת הַשַּׁחַר"],Misheyakir:["משיכיר - זמן ציצית ותפילין"],"Misheyakir Machmir":["משיכיר - זמן ציצית ותפילין"],Dawn:["דִּימְדּוּמֵי בּוֹקֵר"],Sunrise:["הַנֵץ הַחַמָּה"],"Kriat Shema, sof zeman":["סוֹף זְמַן קְרִיאַת שְׁמַע גר״א"],"Tefilah, sof zeman":["סוֹף זְמַן תְּפִלָּה גר״א"],"Kriat Shema, sof zeman (MGA)":["סוֹף זְמַן קְרִיאַת שְׁמַע מג״א"],"Tefilah, sof zeman (MGA)":["סוֹף זְמַן תְּפִלָּה מג״א"],"Chatzot hayom":["חֲצוֹת הַיּוֹם"],"Mincha Gedolah":["מִנְחָה גְּדוֹלָה"],"Mincha Ketanah":["מִנְחָה קְטַנָּה"],"Plag HaMincha":["פְּלַג הַמִּנְחָה"],Dusk:["דִּימְדּוּמֵי עֶרֶב"],Sunset:["שְׁקִיעָה"],"Nightfall - End of ordained fasts":["לַיְלָה - גמר תעניות דרבנן"],"Tzeit HaKochavim":["צֵאת כוכבים"],Lovingkindness:["חֶֽסֶד"],Might:["גְבוּרָה"],Beauty:["תִּפאֶרֶת"],Eternity:["נֶּֽצַח"],Splendor:["הוֹד"],Foundation:["יְּסוֹד"],Majesty:["מַּלְכוּת"],day:["יוֹם"],"Chanukah Day 1":["חֲנוּכָּה יוֹם א׳"],"Chanukah Day 2":["חֲנוּכָּה יוֹם ב׳"],"Chanukah Day 3":["חֲנוּכָּה יוֹם ג׳"],"Chanukah Day 4":["חֲנוּכָּה יוֹם ד׳"],"Chanukah Day 5":["חֲנוּכָּה יוֹם ה׳"],"Chanukah Day 6":["חֲנוּכָּה יוֹם ו׳"],"Chanukah Day 7":["חֲנוּכָּה יוֹם ז׳"],"Chanukah Day 7 (on Rosh Chodesh)":["חֲנוּכָּה יוֹם ז׳ (רֹאשׁ חוֹדֶשׁ)"],"Chanukah Day 8":["חֲנוּכָּה יוֹם ח׳"],"Chanukah Day 1 (on Shabbat)":["חֲנוּכָּה יוֹם א׳ (בְּשַׁבָּת)"],"Chanukah Day 2 (on Shabbat)":["חֲנוּכָּה יוֹם ב׳ (בְּשַׁבָּת)"],"Chanukah Day 3 (on Shabbat)":["חֲנוּכָּה יוֹם ג׳ (בְּשַׁבָּת)"],"Chanukah Day 4 (on Shabbat)":["חֲנוּכָּה יוֹם ד׳ (בְּשַׁבָּת)"],"Chanukah Day 5 (on Shabbat)":["חֲנוּכָּה יוֹם ה׳ (בְּשַׁבָּת)"],"Chanukah Day 7 (on Shabbat)":["חֲנוּכָּה יוֹם ז׳ (בְּשַׁבָּת)"],"Chanukah Day 8 (on Shabbat)":["חֲנוּכָּה יוֹם ח׳ (בְּשַׁבָּת)"],"Shabbat Rosh Chodesh Chanukah":["שַׁבָּת רֹאשׁ חוֹדֶשׁ חֲנוּכָּה"],Berakhot:["ברכות"],Peah:["פאה"],Demai:["דמאי"],Kilayim:["כלאים"],Sheviit:["שביעית"],Terumot:["תרומות"],Maasrot:["מעשרות"],"Maaser Sheni":["מעשר שני"],Challah:["חלה"],Orlah:["ערלה"],Bikkurim:["ביכורים"],"Rosh Hashanah":["ראש השנה"],Gittin:["גיטין"],"Bava Kamma":["בבא קמא"],"Bava Metzia":["בבא מציעא"],"Bava Batra":["בבא בתרא"],Eduyot:["עדיות"],Avot:["אבות"],Bekhorot:["בכורות"],Arakhin:["ערכין"],Middot:["מדות"],Kelim:["כלים"],Oholot:["אהלות"],Negaim:["נגעים"],Parah:["פרה"],Tahorot:["טהרות"],Mikvaot:["מקואות"],Makhshirin:["מכשירין"],Zavim:["זבים"],"Tevul Yom":["טבול יום"],Yadayim:["ידים"],Oktzin:["עוקצים"],"Yom Kippur Katan":["יוֹם כִּפּוּר קָטָן"],"Family Day":["יוֹם הַמִּשׁפָּחָה"],"Yitzhak Rabin Memorial Day":["יוֹם הַזִּכָּרוֹן ליצחק רבין"],"Jabotinsky Day":["יוֹם ז׳בוטינסקי"],"Herzl Day":["יוֹם הרצל"],"Ben-Gurion Day":["יוֹם בן־גוריון"],"Birkat Hachamah":["בִרְכַּת הַחַמָּה"],"Shushan Purim Katan":["שׁוּשָׁן פּוּרִים קָטָן"],"Purim Meshulash":["פּוּרִים מְשׁוּלָּשׁ"],"after sunset":["אחרי השקיעה"],Yerushalmi:["יְרוּשַׁלְמִי"]}};var poHe = {headers:headers,contexts:contexts};

Locale.addLocale('he', poHe);
Locale.addLocale('h', poHe);
var heStrs = poHe.contexts[''];
var heNoNikud = {};
Object.keys(heStrs).forEach(function (key) {
  heNoNikud[key] = [Locale.hebrewStripNikkud(heStrs[key][0])];
});
var poHeNoNikud = {
  headers: poHe.headers,
  contexts: {
    '': heNoNikud
  }
};
Locale.addLocale('he-x-NoNikud', poHeNoNikud);

var isObject = isObject$7;
var classof = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$b;

var MATCH$1 = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$1 = wellKnownSymbol$b;

var MATCH = wellKnownSymbol$1('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$2 = _export;
var uncurryThis$1 = functionUncurryThisClause;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$2;
var toString$1 = toString$4;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$5;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis$1(''.startsWith);
var stringSlice = uncurryThis$1(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$2({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$1(requireObjectCoercible$1(this));
    notARegExp$1(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$1(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$1 = anObject$8;
var toIndexedObject = toIndexedObject$5;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$1(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn = getBuiltIn$5;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject = anObject$8;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol = wellKnownSymbol$b;
var create = objectCreate;
var defineProperty = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $$1 = _export;
var $includes = arrayIncludes.includes;
var fails = fails$f;
var addToUnscopables = addToUnscopables$1;

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$1({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var $ = _export;
var uncurryThis = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$5;
var toString = toString$4;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var NONE$1 = 0;
var HALF = 1;
var WHOLE = 2;

/**
 * @private
 * @param {Event[]} events
 * @param {HDate} hdate
 * @return {number}
 */
function hallel_(events, hdate) {
  var whole = events.filter(function (ev) {
    /** @type {string} */
    var desc = ev.getDesc();
    /** @type {HDate} */
    var hd = ev.getDate();
    var month = hd.getMonth();
    var mday = hd.getDate();
    return desc.startsWith('Chanukah') || desc.startsWith('Shavuot') || desc.startsWith('Sukkot') || month === months.NISAN && (mday === 15 || mday === 16) && ev.getFlags() & flags.CHAG ||
    // Pesach
    desc === 'Yom HaAtzma\'ut' || desc === 'Yom Yerushalayim';
  }).map(function (ev) {
    return ev.getDate().abs();
  });
  var abs = hdate.abs();
  if (whole.includes(abs)) {
    return WHOLE;
  }
  var half = events.filter(function (ev) {
    var desc = ev.getDesc();
    return ev.getFlags() & flags.ROSH_CHODESH || desc.startsWith('Pesach') && desc !== 'Pesach I' && desc !== 'Pesach II';
  }).map(function (ev) {
    return ev.getDate().abs();
  });
  if (half.includes(abs)) {
    return HALF;
  }
  return NONE$1;
}

/**
 * @private
 * @param {number} start
 * @param {number} end
 * @return {number[]}
 */
function range(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
var cache = Object.create(null);
var NONE = {
  shacharit: false,
  mincha: false,
  allCongs: false
};

/**
 * @private
 * @param {HDate} hdate
 * @param {boolean} il
 * @return {TachanunResult}
 */
function tachanun_(hdate, il) {
  return tachanun0(hdate, il, true);
}

/**
 * @private
 * @param {HDate} hdate
 * @param {boolean} il
 * @param {boolean} checkNext
 * @return {TachanunResult}
 */
function tachanun0(hdate, il, checkNext) {
  var year = hdate.getFullYear();
  var key = "".concat(year, "-").concat(il ? 1 : 0);
  var dates = cache[key] = cache[key] || tachanunYear(year, il);
  var abs = hdate.abs();
  if (dates.none.indexOf(abs) > -1) {
    return NONE;
  }
  var dow = hdate.getDay();
  var ret = {
    shacharit: false,
    mincha: false,
    allCongs: false
  };
  if (dates.some.indexOf(abs) === -1) {
    ret.allCongs = true;
  }
  if (dow !== 6) {
    ret.shacharit = true;
  }
  var tomorrow = abs + 1;
  if (checkNext && dates.yesPrev.indexOf(tomorrow) === -1) {
    var tmp = tachanun0(new HDate(tomorrow), il, false);
    ret.mincha = tmp.shacharit;
  } else {
    ret.mincha = dow !== 5;
  }
  if (ret.allCongs && !ret.mincha && !ret.shacharit) {
    return NONE;
  }
  return ret;
}

/**
 * @private
 * @param {number} year
 * @param {boolean} il
 * @return {*}
 */
function tachanunYear(year, il) {
  var leap = HDate.isLeapYear(year);
  var monthsInYear = 12 + leap;
  var av9dt = new HDate(9, months.AV, year);
  if (av9dt.getDay() === 6) {
    av9dt = av9dt.next();
  }
  var shushPurim = new HDate(15, months.ADAR_II, year);
  if (shushPurim.getDay() === 6) {
    shushPurim = shushPurim.next();
  }
  var none = [].concat(
  // Rosh Chodesh - 1st of every month. Also includes RH day 1 (1 Tishrei)
  range(1, monthsInYear).map(function (month) {
    return new HDate(1, month, year);
  }),
  // Rosh Chodesh - 30th of months that have one
  range(1, monthsInYear).filter(function (month) {
    return HDate.daysInMonth(month, year) === 30;
  }).map(function (month) {
    return new HDate(30, month, year);
  }), new HDate(2, months.TISHREI, year),
  // Rosh Hashana II
  // entire month of Nisan
  range(1, HDate.daysInMonth(months.NISAN, year)).map(function (mday) {
    return new HDate(mday, months.NISAN, year);
  }), new HDate(18, months.IYYAR, year),
  // Lag BaOmer
  // Rosh Chodesh Sivan thru Isru Chag
  range(1, 8 - (il ? 1 : 0)).map(function (mday) {
    return new HDate(mday, months.SIVAN, year);
  }), av9dt,
  // Tisha B'Av
  new HDate(15, months.AV, year),
  // Tu B'Av
  new HDate(29, months.ELUL, year),
  // Erev Rosh Hashanah
  // Erev Yom Kippur thru Isru Chag
  range(9, 24 - (il ? 1 : 0)).map(function (mday) {
    return new HDate(mday, months.TISHREI, year);
  }),
  // Chanukah
  range(25, 33).map(function (mday) {
    return new HDate(mday, months.KISLEV, year);
  }), new HDate(15, months.SHVAT, year),
  // Tu BiShvat
  new HDate(14, months.ADAR_II, year),
  // Purim
  shushPurim, leap ? new HDate(14, months.ADAR_I, year) : [] // Purim Katan
  );

  var some = [].concat(
  // Until 14 Sivan
  range(1, 13).map(function (mday) {
    return new HDate(mday, months.SIVAN, year);
  }),
  // Until after Rosh Chodesh Cheshvan
  range(20, 31).map(function (mday) {
    return new HDate(mday, months.TISHREI, year);
  }), new HDate(14, months.IYYAR, year),
  // Pesach Sheini
  // Yom HaAtzma'ut, which changes based on day of week
  year >= 5708 ? dateYomHaZikaron(year).next() : [],
  // Yom Yerushalayim
  year >= 5727 ? new HDate(28, months.IYYAR, year) : []);
  var yesPrev = [].concat(new HDate(29, months.ELUL, year - 1),
  // Erev Rosh Hashanah
  new HDate(9, months.TISHREI, year),
  // Erev Yom Kippur
  new HDate(14, months.IYYAR, year) // Pesach Sheini
  );

  return {
    none: none.map(function (hd) {
      return hd.abs();
    }).sort(),
    some: some.map(function (hd) {
      return hd.abs();
    }).sort(),
    yesPrev: yesPrev.map(function (hd) {
      return hd.abs();
    }).sort()
  };
}

var FRI = 5;
var SAT = 6;
var NISAN = months.NISAN;
// const IYYAR = months.IYYAR;
var SIVAN = months.SIVAN;
// const TAMUZ = months.TAMUZ;
// const AV = months.AV;
var ELUL = months.ELUL;
var TISHREI = months.TISHREI;
var LIGHT_CANDLES = flags.LIGHT_CANDLES;
var YOM_TOV_ENDS = flags.YOM_TOV_ENDS;
var CHUL_ONLY = flags.CHUL_ONLY;
var IL_ONLY = flags.IL_ONLY;
var LIGHT_CANDLES_TZEIS = flags.LIGHT_CANDLES_TZEIS;
var CHANUKAH_CANDLES = flags.CHANUKAH_CANDLES;
var MINOR_FAST = flags.MINOR_FAST;
var SPECIAL_SHABBAT = flags.SPECIAL_SHABBAT;
var MODERN_HOLIDAY = flags.MODERN_HOLIDAY;
var MAJOR_FAST = flags.MAJOR_FAST;
var ROSH_CHODESH = flags.ROSH_CHODESH;
var PARSHA_HASHAVUA = flags.PARSHA_HASHAVUA;
var DAF_YOMI = flags.DAF_YOMI;
var OMER_COUNT = flags.OMER_COUNT;
var SHABBAT_MEVARCHIM = flags.SHABBAT_MEVARCHIM;
var MINOR_HOLIDAY = flags.MINOR_HOLIDAY;
var EREV = flags.EREV;
var CHOL_HAMOED = flags.CHOL_HAMOED;
var unrecognizedAlreadyWarned = Object.create(null);
var RECOGNIZED_OPTIONS = {
  location: 1,
  year: 1,
  isHebrewYear: 1,
  month: 1,
  numYears: 1,
  start: 1,
  end: 1,
  candlelighting: 1,
  candleLightingMins: 1,
  havdalahMins: 1,
  havdalahDeg: 1,
  sedrot: 1,
  il: 1,
  noMinorFast: 1,
  noModern: 1,
  shabbatMevarchim: 1,
  noRoshChodesh: 1,
  noSpecialShabbat: 1,
  noHolidays: 1,
  dafyomi: 1,
  mishnaYomi: 1,
  omer: 1,
  molad: 1,
  ashkenazi: 1,
  locale: 1,
  addHebrewDates: 1,
  addHebrewDatesForEvents: 1,
  appendHebrewToSubject: 1,
  mask: 1,
  userMask: 1,
  yomKippurKatan: 1,
  hour12: 1,
  yerushalmi: 1,
  yerushalmiEdition: 1
};

/**
 * @private
 * @param {CalOptions} options
 */
function warnUnrecognizedOptions(options) {
  Object.keys(options).forEach(function (k) {
    if (typeof RECOGNIZED_OPTIONS[k] === 'undefined' && !unrecognizedAlreadyWarned[k]) {
      console.warn("Ignoring unrecognized HebrewCalendar option: ".concat(k));
      unrecognizedAlreadyWarned[k] = true;
    }
  });
}

/**
 * A bit like Object.assign(), but just a shallow copy
 * @private
 * @param {any} target
 * @param {any} source
 * @return {any}
 */
function shallowCopy(target, source) {
  Object.keys(source).forEach(function (k) {
    return target[k] = source[k];
  });
  return target;
}
var israelCityOffset = {
  'Jerusalem': 40,
  'Haifa': 30,
  'Zikhron Ya\'aqov': 30,
  'Zikhron Ya\'akov': 30,
  'Zikhron Yaakov': 30,
  'Zichron Ya\'akov': 30,
  'Zichron Yaakov': 30
};
var geoIdCandleOffset = {
  '281184': 40,
  // Jerusalem
  '294801': 30,
  // Haifa
  '293067': 30 // Zikhron Yaakov
};

/**
 * Modifies options in-place
 * @private
 * @param {CalOptions} options
 */
function checkCandleOptions(options) {
  if (!options.candlelighting) {
    return;
  }
  var location = options.location;
  if (typeof location === 'undefined' || !location instanceof Location) {
    throw new TypeError('options.candlelighting requires valid options.location');
  }
  if (typeof options.havdalahMins === 'number' && typeof options.havdalahDeg === 'number') {
    throw new TypeError('options.havdalahMins and options.havdalahDeg are mutually exclusive');
  }
  var min = parseInt(options.candleLightingMins, 10) || 18;
  if (location.getIsrael() && Math.abs(min) === 18) {
    var geoid = location.getGeoId();
    var offset0 = geoIdCandleOffset[geoid];
    if (typeof offset0 === 'number') {
      min = offset0;
    }
    var offset = israelCityOffset[location.getShortName()];
    if (typeof offset === 'number') {
      min = offset;
    }
  }
  options.candleLightingMins = -1 * Math.abs(min);
  if (typeof options.havdalahMins === 'number') {
    options.havdalahMins = Math.abs(options.havdalahMins);
  } else if (typeof options.havdalahDeg === 'number') {
    options.havdalahDeg = Math.abs(options.havdalahDeg);
  } else {
    options.havdalahDeg = 8.5;
  }
}

/**
 * Options to configure which events are returned
 * @typedef {Object} CalOptions
 * @property {Location} location - latitude/longitude/tzid used for candle-lighting
 * @property {number} year - Gregorian or Hebrew year
 * @property {boolean} isHebrewYear - to interpret year as Hebrew year
 * @property {number} month - Gregorian or Hebrew month (to filter results to a single month)
 * @property {number} numYears - generate calendar for multiple years (default 1)
 * @property {Date|HDate|number} start - use specific start date (requires end date)
 * @property {Date|HDate|number} end - use specific end date (requires start date)
 * @property {boolean} candlelighting - calculate candle-lighting and havdalah times
 * @property {number} candleLightingMins - minutes before sundown to light candles (default 18)
 * @property {number} havdalahMins - minutes after sundown for Havdalah (typical values are 42, 50, or 72).
 *      If `undefined` (the default), calculate Havdalah according to Tzeit Hakochavim -
 *      Nightfall (the point when 3 small stars are observable in the night time sky with
 *      the naked eye). If `0`, Havdalah times are supressed.
 * @property {number} havdalahDeg - degrees for solar depression for Havdalah.
 *      Default is 8.5 degrees for 3 small stars. use 7.083 degress for 3 medium-sized stars.
 *      If `0`, Havdalah times are supressed.
 * @property {boolean} sedrot - calculate parashah hashavua on Saturdays
 * @property {boolean} il - Israeli holiday and sedra schedule
 * @property {boolean} noMinorFast - suppress minor fasts
 * @property {boolean} noModern - suppress modern holidays
 * @property {boolean} noRoshChodesh - suppress Rosh Chodesh
 * @property {boolean} shabbatMevarchim - add Shabbat Mevarchim
 * @property {boolean} noSpecialShabbat - suppress Special Shabbat
 * @property {boolean} noHolidays - suppress regular holidays
 * @property {boolean} dafyomi - Babylonian Talmud Daf Yomi
 * @property {boolean} yerushalmi - Jerusalem Talmud (Yerushalmi) Yomi
 * @property {number} yerushalmiEdition - Use 1 for Vilna, 2 for Schottenstein
 * @property {boolean} mishnaYomi - include Mishna Yomi
 * @property {boolean} omer - include Days of the Omer
 * @property {boolean} molad - include event announcing the molad
 * @property {boolean} ashkenazi - use Ashkenazi transliterations for event titles (default Sephardi transliterations)
 * @property {string} locale - translate event titles according to a locale
 *      Default value is `en`, also built-in are `he` and `ashkenazi`.
 *      Additional locales (such as `ru` or `fr`) are provided by the
 *      {@link https://github.com/hebcal/hebcal-locales @hebcal/locales} package
 * @property {boolean} addHebrewDates - print the Hebrew date for the entire date range
 * @property {boolean} addHebrewDatesForEvents - print the Hebrew date for dates with some events
 * @property {number} mask - use bitmask from `flags` to filter events
 * @property {boolean} yomKippurKatan - include Yom Kippur Katan (default `false`).
 *      יוֹם כִּפּוּר קָטָן is a minor day of atonement occurring monthly on the day preceeding each Rosh Chodesh.
 *      Yom Kippur Katan is omitted in Elul (on the day before Rosh Hashanah),
 *      Tishrei (Yom Kippur has just passed), Kislev (due to Chanukah)
 *      and Nisan (fasting not permitted during Nisan).
 *      When Rosh Chodesh occurs on Shabbat or Sunday, Yom Kippur Katan is observed on the preceding Thursday.
 *      See {@link https://en.wikipedia.org/wiki/Yom_Kippur_Katan#Practices Wikipedia Yom Kippur Katan practices}
 * @property {boolean} hour12 - Whether to use 12-hour time (as opposed to 24-hour time).
 *      Possible values are `true` and `false`; the default is locale dependent.
 */

/**
 * @typedef {Object} TachanunResult
 * @property {boolean} shacharit Tachanun is said at Shacharit
 * @property {boolean} mincha Tachanun is said at Mincha
 * @property {boolean} allCongs All congregations say Tachanun on the day
 */

/**
 * Gets the R.D. days for a number, Date, or HDate
 * @private
 * @param {Date|HDate|number} d
 * @return {number}
 */
function getAbs(d) {
  if (typeof d == 'number') return d;
  if (isDate(d)) return greg2abs(d);
  if (HDate.isHDate(d)) return d.abs();
  throw new TypeError("Invalid date type: ".concat(d));
}

/**
 * Parse options object to determine start & end days
 * @private
 * @param {CalOptions} options
 * @return {number[]}
 */
function getStartAndEnd(options) {
  if (options.start && !options.end || options.end && !options.start) {
    throw new TypeError('Both options.start and options.end are required');
  } else if (options.start && options.end) {
    return [getAbs(options.start), getAbs(options.end)];
  }
  var isHebrewYear = Boolean(options.isHebrewYear);
  var theYear = typeof options.year !== 'undefined' ? parseInt(options.year, 10) : isHebrewYear ? new HDate().getFullYear() : new Date().getFullYear();
  if (isNaN(theYear)) {
    throw new RangeError("Invalid year ".concat(options.year));
  } else if (isHebrewYear && theYear < 1) {
    throw new RangeError("Invalid Hebrew year ".concat(theYear));
  } else if (theYear == 0) {
    throw new RangeError("Invalid Gregorian year ".concat(theYear));
  }
  var theMonth = NaN;
  if (options.month) {
    if (isHebrewYear) {
      theMonth = HDate.monthNum(options.month);
    } else {
      theMonth = options.month;
    }
  }
  var numYears = parseInt(options.numYears, 10) || 1;
  if (isHebrewYear) {
    var startDate = new HDate(1, theMonth || TISHREI, theYear);
    var startAbs = startDate.abs();
    var endAbs = options.month ? startAbs + startDate.daysInMonth() : new HDate(1, TISHREI, theYear + numYears).abs() - 1;
    // for full Hebrew year, start on Erev Rosh Hashana which
    // is technically in the previous Hebrew year
    // (but conveniently lets us get candle-lighting time for Erev)
    if (!theMonth) {
      startAbs--;
    }
    return [startAbs, endAbs];
  } else {
    var gregMonth = options.month ? theMonth - 1 : 0;
    var startGreg = new Date(theYear, gregMonth, 1);
    if (theYear < 100) {
      startGreg.setFullYear(theYear);
    }
    var _startAbs = greg2abs(startGreg);
    var _endAbs;
    if (options.month) {
      _endAbs = _startAbs + daysInMonth$1(theMonth, theYear) - 1;
    } else {
      var endYear = theYear + numYears;
      var endGreg = new Date(endYear, 0, 1);
      if (endYear < 100) {
        endGreg.setFullYear(endYear);
      }
      _endAbs = greg2abs(endGreg) - 1;
    }
    return [_startAbs, _endAbs];
  }
}

/**
 * Mask to filter Holiday array
 * @private
 * @param {CalOptions} options
 * @return {number}
 */
function getMaskFromOptions(options) {
  if (typeof options.mask === 'number') {
    var m = options.mask;
    if (m & ROSH_CHODESH) delete options.noRoshChodesh;
    if (m & MODERN_HOLIDAY) delete options.noModern;
    if (m & MINOR_FAST) delete options.noMinorFast;
    if (m & SPECIAL_SHABBAT) delete options.noSpecialShabbat;
    if (m & PARSHA_HASHAVUA) options.sedrot = true;
    if (m & DAF_YOMI) options.dafyomi = true;
    if (m & OMER_COUNT) options.omer = true;
    if (m & SHABBAT_MEVARCHIM) options.shabbatMevarchim = true;
    if (m & flags.MISHNA_YOMI) options.mishnaYomi = true;
    if (m & flags.YOM_KIPPUR_KATAN) options.yomKippurKatan = true;
    if (m & flags.YERUSHALMI_YOMI) options.yerushalmi = true;
    options.userMask = true;
    return m;
  }
  var il = options.il || options.location && options.location.il || false;
  var mask = 0;

  // default options
  if (!options.noHolidays) {
    mask |= ROSH_CHODESH | YOM_TOV_ENDS | MINOR_FAST | SPECIAL_SHABBAT | MODERN_HOLIDAY | MAJOR_FAST | MINOR_HOLIDAY | EREV | CHOL_HAMOED | LIGHT_CANDLES | LIGHT_CANDLES_TZEIS | CHANUKAH_CANDLES;
  }
  if (options.candlelighting) {
    mask |= LIGHT_CANDLES | LIGHT_CANDLES_TZEIS | YOM_TOV_ENDS;
  }
  // suppression of defaults
  if (options.noRoshChodesh) {
    mask &= ~ROSH_CHODESH;
  }
  if (options.noModern) {
    mask &= ~MODERN_HOLIDAY;
  }
  if (options.noMinorFast) {
    mask &= ~MINOR_FAST;
  }
  if (options.noSpecialShabbat) {
    mask &= ~SPECIAL_SHABBAT;
    mask &= ~SHABBAT_MEVARCHIM;
  }
  if (il) {
    mask |= IL_ONLY;
  } else {
    mask |= CHUL_ONLY;
  }
  // non-default options
  if (options.sedrot) {
    mask |= PARSHA_HASHAVUA;
  }
  if (options.dafyomi) {
    mask |= DAF_YOMI;
  }
  if (options.mishnaYomi) {
    mask |= flags.MISHNA_YOMI;
  }
  if (options.omer) {
    mask |= OMER_COUNT;
  }
  if (options.shabbatMevarchim) {
    mask |= SHABBAT_MEVARCHIM;
  }
  if (options.yomKippurKatan) {
    mask |= flags.YOM_KIPPUR_KATAN;
  }
  if (options.yerushalmi) {
    mask |= flags.YERUSHALMI_YOMI;
  }
  return mask;
}
var MASK_LIGHT_CANDLES = LIGHT_CANDLES | LIGHT_CANDLES_TZEIS | CHANUKAH_CANDLES | YOM_TOV_ENDS;
var defaultLocation = new Location(0, 0, false, 'UTC');
var hour12cc = {
  US: 1,
  CA: 1,
  BR: 1,
  AU: 1,
  NZ: 1,
  DO: 1,
  PR: 1,
  GR: 1,
  IN: 1,
  KR: 1,
  NP: 1,
  ZA: 1
};

/**
 * @private
 * @param {Event} ev
 * @return {boolean}
 */
function observedInIsrael(ev) {
  return ev.observedInIsrael();
}

/**
 * @private
 * @param {Event} ev
 * @return {boolean}
 */
function observedInDiaspora(ev) {
  return ev.observedInDiaspora();
}
var yearArrayCache = Object.create(null);

/**
 * HebrewCalendar is the main interface to the `@hebcal/core` library.
 * This namespace is used to calculate holidays, rosh chodesh, candle lighting & havdalah times,
 * Parashat HaShavua, Daf Yomi, days of the omer, and the molad.
 * Event names can be rendered in several languges using the `locale` option.
 */
var HebrewCalendar = /*#__PURE__*/function () {
  function HebrewCalendar() {
    _classCallCheck(this, HebrewCalendar);
  }
  _createClass(HebrewCalendar, null, [{
    key: "calendar",
    value:
    /**
     * Calculates holidays and other Hebrew calendar events based on {@link CalOptions}.
     *
     * Each holiday is represented by an {@link Event} object which includes a date,
     * a description, flags and optional attributes.
     * If given no options, returns holidays for the Diaspora for the current Gregorian year.
     *
     * The date range returned by this function can be controlled by:
     * * `options.year` - Gregorian (e.g. 1993) or Hebrew year (e.g. 5749)
     * * `options.isHebrewYear` - to interpret `year` as Hebrew year
     * * `options.numYears` - generate calendar for multiple years (default 1)
     * * `options.month` - Gregorian or Hebrew month (to filter results to a single month)
     *
     * Alternatively, specify start and end days with `Date` or {@link HDate} instances:
     * * `options.start` - use specific start date (requires `end` date)
     * * `options.end` - use specific end date (requires `start` date)
     *
     * Unless `options.noHolidays == true`, default holidays include:
     * * Major holidays - Rosh Hashana, Yom Kippur, Pesach, Sukkot, etc.
     * * Minor holidays - Purim, Chanukah, Tu BiShvat, Lag BaOmer, etc.
     * * Minor fasts - Ta'anit Esther, Tzom Gedaliah, etc. (unless `options.noMinorFast`)
     * * Special Shabbatot - Shabbat Shekalim, Zachor, etc. (unless `options.noSpecialShabbat`)
     * * Modern Holidays - Yom HaShoah, Yom HaAtzma'ut, etc. (unless `options.noModern`)
     * * Rosh Chodesh (unless `options.noRoshChodesh`)
     *
     * Holiday and Torah reading schedules differ between Israel and the Disapora.
     * Set `options.il=true` to use the Israeli schedule.
     *
     * Additional non-default event types can be specified:
     * * Parashat HaShavua - weekly Torah Reading on Saturdays (`options.sedrot`)
     * * Counting of the Omer (`options.omer`)
     * * Babylonian Talmud Daf Yomi (`options.dafyomi`)
     * * Jerusalem Talmud (Yerushalmi) Yomi (`options.yerushalmi`)
     * * Mishna Yomi (`options.mishnaYomi`)
     * * Shabbat Mevarchim HaChodesh on Saturday before Rosh Chodesh (`options.shabbatMevarchim`)
     * * Molad announcement on Saturday before Rosh Chodesh (`options.molad`)
     * * Yom Kippur Katan (`options.yomKippurKatan`)
     *
     * Candle-lighting and Havdalah times are approximated using latitude and longitude
     * specified by the {@link Location} class. The `Location` class contains a small
     * database of cities with their associated geographic information and time-zone information.
     * If you ever have any doubts about Hebcal's times, consult your local halachic authority.
     * If you enter geographic coordinates above the arctic circle or antarctic circle,
     * the times are guaranteed to be wrong.
     *
     * To add candle-lighting options, set `options.candlelighting=true` and set
     * `options.location` to an instance of `Location`. By default, candle lighting
     * time is 18 minutes before sundown (40 minutes for Jerusalem,
     * 30 minutes for Haifa and Zikhron Ya'akov) and Havdalah is
     * calculated according to Tzeit Hakochavim - Nightfall (the point when 3 small stars
     * are observable in the night time sky with the naked eye). The default Havdalah
     * option (Tzeit Hakochavim) is calculated when the sun is 8.5° below the horizon.
     * These defaults can be changed using these options:
     * * `options.candleLightingMins` - minutes before sundown to light candles
     * * `options.havdalahMins` - minutes after sundown for Havdalah (typical values are 42, 50, or 72).
     *    Havdalah times are supressed when `options.havdalahMins=0`.
     * * `options.havdalahDeg` - degrees for solar depression for Havdalah.
     *    Default is 8.5 degrees for 3 small stars. Use 7.083 degress for 3 medium-sized stars.
     *    Havdalah times are supressed when `options.havdalahDeg=0`.
     *
     * If both `options.candlelighting=true` and `options.location` is specified,
     * Chanukah candle-lighting times and minor fast start/end times will also be generated.
     * Chanukah candle-lighting is at dusk (when the sun is 6.0° below the horizon in the evening)
     * on weekdays, at regular candle-lighting time on Fridays, and at regular Havdalah time on
     * Saturday night (see above).
     *
     * Minor fasts begin at Alot HaShachar (sun is 16.1° below the horizon in the morning) and
     * end when 3 medium-sized stars are observable in the night sky (sun is 7.083° below the horizon
     * in the evening).
     *
     * Two options also exist for generating an Event with the Hebrew date:
     * * `options.addHebrewDates` - print the Hebrew date for the entire date range
     * * `options.addHebrewDatesForEvents` - print the Hebrew date for dates with some events
     *
     * Lastly, translation and transliteration of event titles is controlled by
     * `options.locale` and the {@link Locale} API.
     * `@hebcal/core` supports three locales by default:
     * * `en` - default, Sephardic transliterations (e.g. "Shabbat")
     * * `ashkenazi` - Ashkenazi transliterations (e.g. "Shabbos")
     * * `he` - Hebrew (e.g. "שַׁבָּת")
     *
     * Additional locales (such as `ru` or `fr`) are supported by the
     * {@link https://github.com/hebcal/hebcal-locales @hebcal/locales} package
     *
     * @example
     * import {HebrewCalendar, HDate, Location, Event} from '@hebcal/core';
     * const options = {
     *   year: 1981,
     *   isHebrewYear: false,
     *   candlelighting: true,
     *   location: Location.lookup('San Francisco'),
     *   sedrot: true,
     *   omer: true,
     * };
     * const events = HebrewCalendar.calendar(options);
     * for (const ev of events) {
     *   const hd = ev.getDate();
     *   const date = hd.greg();
     *   console.log(date.toLocaleDateString(), ev.render('en'), hd.toString());
     * }
     * @param {CalOptions} [options={}]
     * @return {Event[]}
     */
    function calendar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      options = shallowCopy({}, options); // so we can modify freely
      checkCandleOptions(options);
      var location = options.location = options.location || defaultLocation;
      var il = options.il = options.il || location.il || false;
      options.mask = getMaskFromOptions(options);
      if (options.ashkenazi || options.locale) {
        if (options.locale && typeof options.locale !== 'string') {
          throw new TypeError("Invalid options.locale: ".concat(options.locale));
        }
        var locale = options.ashkenazi ? 'ashkenazi' : options.locale;
        var translationObj = Locale.useLocale(locale);
        if (!translationObj) {
          throw new TypeError("Locale '".concat(locale, "' not found; did you forget to import @hebcal/locales?"));
        }
      } else {
        Locale.useLocale('en');
      }
      var evts = [];
      var sedra;
      var holidaysYear;
      var beginOmer;
      var endOmer;
      var currentYear = -1;
      var startAndEnd = getStartAndEnd(options);
      warnUnrecognizedOptions(options);
      var startAbs = startAndEnd[0];
      var endAbs = startAndEnd[1];
      var startGreg = abs2greg(startAbs);
      if (startGreg.getFullYear() < 100) {
        options.candlelighting = false;
      }
      var mishnaYomiIndex;
      if (options.mishnaYomi) {
        mishnaYomiIndex = new MishnaYomiIndex();
      }
      var yerushalmiCfg = options.yerushalmiEdition === 2 ? schottenstein : vilna;
      var _loop = function _loop(abs) {
        var hd = new HDate(abs);
        var hyear = hd.getFullYear();
        if (hyear != currentYear) {
          currentYear = hyear;
          holidaysYear = getHolidaysForYear_(currentYear);
          if (options.sedrot && currentYear >= 3762) {
            sedra = getSedra_(currentYear, il);
          }
          if (options.omer) {
            beginOmer = HDate.hebrew2abs(currentYear, NISAN, 16);
            endOmer = HDate.hebrew2abs(currentYear, SIVAN, 5);
          }
        }
        var prevEventsLength = evts.length;
        var dow = hd.getDay();
        var candlesEv = undefined;
        var ev = holidaysYear.get(hd.toString()) || [];
        ev.forEach(function (e) {
          candlesEv = appendHolidayAndRelated(evts, e, options, candlesEv, dow);
        });
        if (options.sedrot && dow == SAT && hyear >= 3762) {
          var parsha0 = sedra.lookup(abs);
          if (!parsha0.chag) {
            evts.push(new ParshaEvent(hd, parsha0.parsha, il, parsha0.num));
          }
        }
        if (options.dafyomi && hyear >= 5684) {
          evts.push(new DafYomiEvent(hd));
        }
        if (options.yerushalmi && abs >= yerushalmiCfg.startAbs) {
          var daf = yerushalmiYomi(abs, yerushalmiCfg);
          // daf will be null to signal no Yerushalmi Yomi on YK and 9Av
          if (daf != null) {
            evts.push(new YerushalmiYomiEvent(hd, daf));
          }
        }
        if (options.mishnaYomi && abs >= mishnaYomiStart) {
          var mishnaYomi = mishnaYomiIndex.lookup(abs);
          evts.push(new MishnaYomiEvent(hd, mishnaYomi));
        }
        if (options.omer && abs >= beginOmer && abs <= endOmer) {
          var omer = abs - beginOmer + 1;
          var omerEv = new OmerEvent(hd, omer);
          if (options.candlelighting) {
            var zmanim = new Zmanim(hd.prev(), location.getLatitude(), location.getLongitude());
            var tzeit = zmanim.tzeit(7.0833);
            if (!isNaN(tzeit.getTime())) {
              omerEv.alarm = tzeit;
            }
          }
          evts.push(omerEv);
        }
        var hmonth = hd.getMonth();
        if (options.molad && dow == SAT && hmonth != ELUL && hd.getDate() >= 23 && hd.getDate() <= 29) {
          var monNext = hmonth == HDate.monthsInYear(hyear) ? NISAN : hmonth + 1;
          evts.push(new MoladEvent(hd, hyear, monNext));
        }
        if (!candlesEv && options.candlelighting && (dow == FRI || dow == SAT)) {
          candlesEv = makeCandleEvent(undefined, hd, dow, location, options);
          if (dow === FRI && candlesEv && sedra) {
            candlesEv.memo = sedra.getString(abs);
          }
        }
        // suppress Havdalah when options.havdalahMins=0 or options.havdalahDeg=0
        if (candlesEv instanceof HavdalahEvent && (options.havdalahMins === 0 || options.havdalahDeg === 0)) {
          candlesEv = null;
        }
        if (candlesEv) {
          evts.push(candlesEv);
        }
        if (options.addHebrewDates || options.addHebrewDatesForEvents && prevEventsLength != evts.length) {
          var e2 = new HebrewDateEvent(hd);
          if (prevEventsLength == evts.length) {
            evts.push(e2);
          } else {
            evts.splice(prevEventsLength, 0, e2);
          }
        }
      };
      for (var abs = startAbs; abs <= endAbs; abs++) {
        _loop(abs);
      }
      return evts;
    }

    /**
     * Calculates a birthday or anniversary (non-yahrzeit).
     * `hyear` must be after original `gdate` of anniversary.
     * Returns `undefined` when requested year preceeds or is same as original year.
     *
     * Hebcal uses the algorithm defined in "Calendrical Calculations"
     * by Edward M. Reingold and Nachum Dershowitz.
     *
     * The birthday of someone born in Adar of an ordinary year or Adar II of
     * a leap year is also always in the last month of the year, be that Adar
     * or Adar II. The birthday in an ordinary year of someone born during the
     * first 29 days of Adar I in a leap year is on the corresponding day of Adar;
     * in a leap year, the birthday occurs in Adar I, as expected.
     *
     * Someone born on the thirtieth day of Marcheshvan, Kislev, or Adar I
     * has his birthday postponed until the first of the following month in
     * years where that day does not occur. [Calendrical Calculations p. 111]
     * @example
     * import {HebrewCalendar} from '@hebcal/core';
     * const dt = new Date(2014, 2, 2); // '2014-03-02' == '30 Adar I 5774'
     * const hd = HebrewCalendar.getBirthdayOrAnniversary(5780, dt); // '1 Nisan 5780'
     * console.log(hd.greg().toLocaleDateString('en-US')); // '3/26/2020'
     * @param {number} hyear Hebrew year
     * @param {Date|HDate} gdate Gregorian or Hebrew date of event
     * @return {HDate} anniversary occurring in `hyear`
     */
  }, {
    key: "getBirthdayOrAnniversary",
    value: function getBirthdayOrAnniversary(hyear, gdate) {
      return getBirthdayOrAnniversary_(hyear, gdate);
    }

    /**
     * Calculates yahrzeit.
     * `hyear` must be after original `gdate` of death.
     * Returns `undefined` when requested year preceeds or is same as original year.
     *
     * Hebcal uses the algorithm defined in "Calendrical Calculations"
     * by Edward M. Reingold and Nachum Dershowitz.
     *
     * The customary anniversary date of a death is more complicated and depends
     * also on the character of the year in which the first anniversary occurs.
     * There are several cases:
     *
     * * If the date of death is Marcheshvan 30, the anniversary in general depends
     *   on the first anniversary; if that first anniversary was not Marcheshvan 30,
     *   use the day before Kislev 1.
     * * If the date of death is Kislev 30, the anniversary in general again depends
     *   on the first anniversary — if that was not Kislev 30, use the day before
     *   Tevet 1.
     * * If the date of death is Adar II, the anniversary is the same day in the
     *   last month of the Hebrew year (Adar or Adar II).
     * * If the date of death is Adar I 30, the anniversary in a Hebrew year that
     *   is not a leap year (in which Adar only has 29 days) is the last day in
     *   Shevat.
     * * In all other cases, use the normal (that is, same month number) anniversary
     *   of the date of death. [Calendrical Calculations p. 113]
     * @example
     * import {HebrewCalendar} from '@hebcal/core';
     * const dt = new Date(2014, 2, 2); // '2014-03-02' == '30 Adar I 5774'
     * const hd = HebrewCalendar.getYahrzeit(5780, dt); // '30 Sh\'vat 5780'
     * console.log(hd.greg().toLocaleDateString('en-US')); // '2/25/2020'
     * @param {number} hyear Hebrew year
     * @param {Date|HDate} gdate Gregorian or Hebrew date of death
     * @return {HDate} anniversary occurring in hyear
     */
  }, {
    key: "getYahrzeit",
    value: function getYahrzeit(hyear, gdate) {
      return getYahrzeit_(hyear, gdate);
    }

    /**
     * Lower-level holidays interface, which returns a `Map` of `Event`s indexed by
     * `HDate.toString()`. These events must filtered especially for `flags.IL_ONLY`
     * or `flags.CHUL_ONLY` depending on Israel vs. Diaspora holiday scheme.
     * @function
     * @param {number} year Hebrew year
     * @return {Map<string,Event[]>}
     */
  }, {
    key: "getHolidaysForYear",
    value: function getHolidaysForYear(year) {
      return getHolidaysForYear_(year);
    }

    /**
     * Returns an array of holidays for the year
     * @param {number} year Hebrew year
     * @param {boolean} il use the Israeli schedule for holidays
     * @return {Event[]}
     */
  }, {
    key: "getHolidaysForYearArray",
    value: function getHolidaysForYearArray(year, il) {
      var cacheKey = "".concat(year, "-").concat(il ? 1 : 0);
      var events = yearArrayCache[cacheKey];
      if (events) {
        return events;
      }
      var yearMap = getHolidaysForYear_(year);
      var startAbs = HDate.hebrew2abs(year, TISHREI, 1);
      var endAbs = HDate.hebrew2abs(year + 1, TISHREI, 1) - 1;
      events = [];
      var myFilter = il ? observedInIsrael : observedInDiaspora;
      for (var absDt = startAbs; absDt <= endAbs; absDt++) {
        var hd = new HDate(absDt);
        var holidays = yearMap.get(hd.toString());
        if (holidays) {
          var filtered = holidays.filter(myFilter);
          events = events.concat(filtered);
        }
      }
      yearArrayCache[cacheKey] = events;
      return events;
    }

    /**
     * Returns an array of Events on this date (or undefined if no events)
     * @param {HDate|Date|number} date Hebrew Date, Gregorian date, or absolute R.D. day number
     * @param {boolean} [il] use the Israeli schedule for holidays
     * @return {Event[]}
     */
  }, {
    key: "getHolidaysOnDate",
    value: function getHolidaysOnDate(date, il) {
      var hd = HDate.isHDate(date) ? date : new HDate(date);
      var yearMap = getHolidaysForYear_(hd.getFullYear());
      var events = yearMap.get(hd.toString());
      if (typeof il === 'undefined' || typeof events === 'undefined') {
        return events;
      }
      var myFilter = il ? observedInIsrael : observedInDiaspora;
      return events.filter(myFilter);
    }

    /**
     * Helper function to format a 23-hour (00:00-23:59) time in US format ("8:13pm") or
     * keep as "20:13" for any other locale/country. Uses {@link CalOptions} to determine
     * locale.
     * If `options.hour12` is `false`, locale is ignored and always returns 24-hour time.
     * If `options.hour12` is `true`, locale is ignored and always returns 12-hour time.
     * @param {string} timeStr - original time like "20:30"
     * @param {string} suffix - "p" or "pm" or " P.M.". Add leading space if you want it
     * @param {CalOptions} options
     * @return {string}
     */
  }, {
    key: "reformatTimeStr",
    value: function reformatTimeStr(timeStr, suffix, options) {
      if (typeof timeStr !== 'string') throw new TypeError("Bad timeStr: ".concat(timeStr));
      var cc = options.location && options.location.cc || (options.il ? 'IL' : 'US');
      if (typeof options.hour12 !== 'undefined' && !options.hour12) {
        return timeStr;
      }
      if (!options.hour12 && typeof hour12cc[cc] === 'undefined') {
        return timeStr;
      }
      var hm = timeStr.split(':');
      var hour = parseInt(hm[0], 10);
      if (hour < 12 && suffix) {
        suffix = suffix.replace('p', 'a').replace('P', 'A');
      } else if (hour > 12) {
        hour = hour % 12;
      }
      return "".concat(hour, ":").concat(hm[1]).concat(suffix);
    }

    /** @return {string} */
  }, {
    key: "version",
    value: function version$1() {
      return version;
    }

    /**
     * Convenience function to create an instance of `Sedra` or reuse a previously
     * created and cached instance.
     * @function
     * @param {number} hyear
     * @param {boolean} il
     * @return {Sedra}
     */
  }, {
    key: "getSedra",
    value: function getSedra(hyear, il) {
      return getSedra_(hyear, il);
    }

    /**
     * Return a number containing information on what Hallel is said on that day.
     *
     * Whole Hallel is said on Chanukah, the first Yom Tov of Pesach, Shavuot, Sukkot,
     * Yom Ha'atzmaut, and Yom Yerushalayim.
     *
     * Half Hallel is said on Rosh Chodesh (not Rosh Hashanah), and the last 6 days of Pesach.
     *
     * The number is one of the following values:
     *
     * 0 - No Hallel
     * 1 - Half Hallel
     * 2 - Whole Hallel
     *
     * @param {HDate} hdate
     * @param {boolean} il
     * @return {number}
     */
  }, {
    key: "hallel",
    value: function hallel(hdate, il) {
      var events = HebrewCalendar.getHolidaysForYearArray(hdate.getFullYear(), il);
      return hallel_(events, hdate);
    }

    /**
     * Return details on what Tachanun (or Tzidchatcha on Shabbat) is said on `hdate`.
     *
     * Tachanun is not said on Rosh Chodesh, the month of Nisan, Lag Baomer,
     * Rosh Chodesh Sivan until Isru Chag, Tisha B'av, 15 Av, Erev Rosh Hashanah,
     * Rosh Hashanah, Erev Yom Kippur until after Simchat Torah, Chanukah,
     * Tu B'shvat, Purim and Shushan Purim, and Purim and Shushan Purim Katan.
     *
     * In some congregations Tachanun is not said until from Rosh Chodesh Sivan
     * until 14th Sivan, Sukkot until after Rosh Chodesh Cheshvan, Pesach Sheini,
     * Yom Ha'atzmaut, and Yom Yerushalayim.
     *
     * Tachanun is not said at Mincha on days before it is not said at Shacharit.
     *
     * Tachanun is not said at Shacharit on Shabbat, but is at Mincha, usually.
     * @param {HDate} hdate
     * @param {boolean} il
     * @return {TachanunResult}
     */
  }, {
    key: "tachanun",
    value: function tachanun(hdate, il) {
      return tachanun_(hdate, il);
    }
  }]);
  return HebrewCalendar;
}();

/**
 * Appends the Event `ev` to the `events` array. Also may add related
 * timed events like candle-lighting or fast start/end
 * @private
 * @param {Event[]} events
 * @param {Event} ev
 * @param {CalOptions} options
 * @param {Event} candlesEv
 * @param {number} dow
 * @return {Event}
 */
function appendHolidayAndRelated(events, ev, options, candlesEv, dow) {
  var il = options.il;
  if (!ev.observedIn(il)) {
    return candlesEv; // holiday isn't observed here; bail out early
  }

  var eFlags = ev.getFlags();
  if (!options.yomKippurKatan && eFlags & flags.YOM_KIPPUR_KATAN || options.noModern && eFlags & MODERN_HOLIDAY) {
    return candlesEv; // bail out early
  }

  var location = options.location;
  var isMajorFast = Boolean(eFlags & MAJOR_FAST);
  var isMinorFast = Boolean(eFlags & MINOR_FAST);
  if (options.candlelighting && (isMajorFast || isMinorFast)) {
    ev = makeFastStartEnd(ev, location);
    if (ev.startEvent && (isMajorFast || isMinorFast && !options.noMinorFast)) {
      events.push(ev.startEvent);
    }
  }
  if (eFlags & options.mask || !eFlags && !options.userMask) {
    if (options.candlelighting && eFlags & MASK_LIGHT_CANDLES) {
      var hd = ev.getDate();
      candlesEv = makeCandleEvent(ev, hd, dow, location, options);
      if (eFlags & CHANUKAH_CANDLES && candlesEv && !options.noHolidays) {
        var chanukahEv = dow === FRI || dow === SAT ? candlesEv : makeWeekdayChanukahCandleLighting(ev, hd, location);
        var attrs = {
          eventTime: chanukahEv.eventTime,
          eventTimeStr: chanukahEv.eventTimeStr,
          location: location
        };
        if (ev.chanukahDay) attrs.chanukahDay = ev.chanukahDay;
        if (ev.emoji) attrs.emoji = ev.emoji;
        // Replace Chanukah event with a clone that includes candle lighting time.
        // For clarity, allow a "duplicate" candle lighting event to remain for Shabbat
        ev = new HolidayEvent(ev.getDate(), ev.getDesc(), eFlags, attrs);
        candlesEv = undefined;
      }
    }
    if (options.yomKippurKatan && eFlags & flags.YOM_KIPPUR_KATAN) {
      events.push(ev);
    } else if (!options.noHolidays) {
      events.push(ev); // the original event itself
    }
  }

  if (ev.endEvent && (isMajorFast || isMinorFast && !options.noMinorFast)) {
    events.push(ev.endEvent);
  }
  return candlesEv;
}

exports.AsaraBTevetEvent = AsaraBTevetEvent;
exports.CandleLightingEvent = CandleLightingEvent;
exports.DafYomi = DafYomi;
exports.DafYomiEvent = DafYomiEvent;
exports.Event = Event;
exports.HDate = HDate;
exports.HavdalahEvent = HavdalahEvent;
exports.HebrewCalendar = HebrewCalendar;
exports.HebrewDateEvent = HebrewDateEvent;
exports.HolidayEvent = HolidayEvent;
exports.Locale = Locale;
exports.Location = Location;
exports.MevarchimChodeshEvent = MevarchimChodeshEvent;
exports.MishnaYomiEvent = MishnaYomiEvent;
exports.MishnaYomiIndex = MishnaYomiIndex;
exports.Molad = Molad;
exports.MoladEvent = MoladEvent;
exports.OmerEvent = OmerEvent;
exports.ParshaEvent = ParshaEvent;
exports.RoshChodeshEvent = RoshChodeshEvent;
exports.RoshHashanaEvent = RoshHashanaEvent;
exports.Sedra = Sedra;
exports.TimedEvent = TimedEvent;
exports.YerushalmiYomiEvent = YerushalmiYomiEvent;
exports.Zmanim = Zmanim;
exports.flags = flags;
exports.gematriya = gematriya;
exports.greg = greg;
exports.months = months;
exports.parshiot = parshiot;
exports.schottenstein = schottenstein;
exports.version = version;
exports.vilna = vilna;
exports.yerushalmiYomi = yerushalmiYomi;

return exports;

})({});
