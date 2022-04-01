"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthOAuth2ConnectorGithubConfigOrg = _interopRequireDefault(require("./AuthOAuth2ConnectorGithubConfigOrg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthOAuth2ConnectorGithubConfig model module.
 * @module model/AuthOAuth2ConnectorGithubConfig
 * @version 2.0
 */
var AuthOAuth2ConnectorGithubConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthOAuth2ConnectorGithubConfig</code>.
   * @alias module:model/AuthOAuth2ConnectorGithubConfig
   */
  function AuthOAuth2ConnectorGithubConfig() {
    _classCallCheck(this, AuthOAuth2ConnectorGithubConfig);

    AuthOAuth2ConnectorGithubConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthOAuth2ConnectorGithubConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthOAuth2ConnectorGithubConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOAuth2ConnectorGithubConfig} obj Optional instance to populate.
     * @return {module:model/AuthOAuth2ConnectorGithubConfig} The populated <code>AuthOAuth2ConnectorGithubConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthOAuth2ConnectorGithubConfig();

        if (data.hasOwnProperty('clientID')) {
          obj['clientID'] = _ApiClient["default"].convertToType(data['clientID'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient["default"].convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('hostName')) {
          obj['hostName'] = _ApiClient["default"].convertToType(data['hostName'], 'String');
        }

        if (data.hasOwnProperty('loadAllGroups')) {
          obj['loadAllGroups'] = _ApiClient["default"].convertToType(data['loadAllGroups'], 'Boolean');
        }

        if (data.hasOwnProperty('orgs')) {
          obj['orgs'] = _ApiClient["default"].convertToType(data['orgs'], [_AuthOAuth2ConnectorGithubConfigOrg["default"]]);
        }

        if (data.hasOwnProperty('redirectURI')) {
          obj['redirectURI'] = _ApiClient["default"].convertToType(data['redirectURI'], 'String');
        }

        if (data.hasOwnProperty('rootCA')) {
          obj['rootCA'] = _ApiClient["default"].convertToType(data['rootCA'], 'String');
        }

        if (data.hasOwnProperty('teamNameField')) {
          obj['teamNameField'] = _ApiClient["default"].convertToType(data['teamNameField'], 'String');
        }

        if (data.hasOwnProperty('useLoginAsID')) {
          obj['useLoginAsID'] = _ApiClient["default"].convertToType(data['useLoginAsID'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AuthOAuth2ConnectorGithubConfig;
}();
/**
 * @member {String} clientID
 */


AuthOAuth2ConnectorGithubConfig.prototype['clientID'] = undefined;
/**
 * @member {String} clientSecret
 */

AuthOAuth2ConnectorGithubConfig.prototype['clientSecret'] = undefined;
/**
 * @member {String} hostName
 */

AuthOAuth2ConnectorGithubConfig.prototype['hostName'] = undefined;
/**
 * @member {Boolean} loadAllGroups
 */

AuthOAuth2ConnectorGithubConfig.prototype['loadAllGroups'] = undefined;
/**
 * @member {Array.<module:model/AuthOAuth2ConnectorGithubConfigOrg>} orgs
 */

AuthOAuth2ConnectorGithubConfig.prototype['orgs'] = undefined;
/**
 * @member {String} redirectURI
 */

AuthOAuth2ConnectorGithubConfig.prototype['redirectURI'] = undefined;
/**
 * @member {String} rootCA
 */

AuthOAuth2ConnectorGithubConfig.prototype['rootCA'] = undefined;
/**
 * @member {String} teamNameField
 */

AuthOAuth2ConnectorGithubConfig.prototype['teamNameField'] = undefined;
/**
 * @member {Boolean} useLoginAsID
 */

AuthOAuth2ConnectorGithubConfig.prototype['useLoginAsID'] = undefined;
var _default = AuthOAuth2ConnectorGithubConfig;
exports["default"] = _default;
//# sourceMappingURL=AuthOAuth2ConnectorGithubConfig.js.map
