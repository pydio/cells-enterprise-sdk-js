"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthOAuth2ConnectorGithubConfigOrg model module.
 * @module model/AuthOAuth2ConnectorGithubConfigOrg
 * @version 2.0
 */
var AuthOAuth2ConnectorGithubConfigOrg = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorGithubConfigOrg</code>.
   * @alias module:model/AuthOAuth2ConnectorGithubConfigOrg
   */
  function AuthOAuth2ConnectorGithubConfigOrg() {
    _classCallCheck(this, AuthOAuth2ConnectorGithubConfigOrg);

    AuthOAuth2ConnectorGithubConfigOrg.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorGithubConfigOrg, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorGithubConfigOrg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorGithubConfigOrg} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorGithubConfigOrg} The populated <code>AuthOAuth2ConnectorGithubConfigOrg</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorGithubConfigOrg();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('teams')) {
          obj['teams'] = _ApiClient["default"].convertToType(data['teams'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorGithubConfigOrg;
}();
/**
 * @member {String} name
 */


AuthOAuth2ConnectorGithubConfigOrg.prototype['name'] = undefined;
/**
 * @member {Array.<String>} teams
 */

AuthOAuth2ConnectorGithubConfigOrg.prototype['teams'] = undefined;
var _default = AuthOAuth2ConnectorGithubConfigOrg;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorGithubConfigOrg.js.map
