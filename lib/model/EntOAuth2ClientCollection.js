"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthOAuth2ClientConfig = _interopRequireDefault(require("./AuthOAuth2ClientConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntOAuth2ClientCollection model module.
 * @module model/EntOAuth2ClientCollection
 * @version 2.0
 */
var EntOAuth2ClientCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntOAuth2ClientCollection</code>.
   * @alias module:model/EntOAuth2ClientCollection
   */
  function EntOAuth2ClientCollection() {
    _classCallCheck(this, EntOAuth2ClientCollection);

    EntOAuth2ClientCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntOAuth2ClientCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntOAuth2ClientCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntOAuth2ClientCollection} obj Optional instance to populate.
     * @return {module:model/EntOAuth2ClientCollection} The populated <code>EntOAuth2ClientCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntOAuth2ClientCollection();

        if (data.hasOwnProperty('staticClients')) {
          obj['staticClients'] = _ApiClient["default"].convertToType(data['staticClients'], [_AuthOAuth2ClientConfig["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntOAuth2ClientCollection;
}();
/**
 * @member {Array.<module:model/AuthOAuth2ClientConfig>} staticClients
 */


EntOAuth2ClientCollection.prototype['staticClients'] = undefined;
var _default = EntOAuth2ClientCollection;
exports["default"] = _default;
//# sourceMappingURL=EntOAuth2ClientCollection.js.map
