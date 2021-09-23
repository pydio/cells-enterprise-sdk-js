"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CertLicenseStatsResponse = _interopRequireDefault(require("../model/CertLicenseStatsResponse"));

var _CertPutLicenseInfoRequest = _interopRequireDefault(require("../model/CertPutLicenseInfoRequest"));

var _CertPutLicenseInfoResponse = _interopRequireDefault(require("../model/CertPutLicenseInfoResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LicenseService service.
* @module api/LicenseServiceApi
* @version 2.0
*/
var LicenseServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LicenseServiceApi. 
  * @alias module:api/LicenseServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LicenseServiceApi(apiClient) {
    _classCallCheck(this, LicenseServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Display statistics about licenses usage
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.forceRefresh 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertLicenseStatsResponse} and HTTP response
   */


  _createClass(LicenseServiceApi, [{
    key: "licenseStatsWithHttpInfo",
    value: function licenseStatsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'ForceRefresh': opts['forceRefresh']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CertLicenseStatsResponse["default"];
      return this.apiClient.callApi('/license/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Display statistics about licenses usage
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceRefresh 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertLicenseStatsResponse}
     */

  }, {
    key: "licenseStats",
    value: function licenseStats(opts) {
      return this.licenseStatsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Update License String
     * @param {module:model/CertPutLicenseInfoRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertPutLicenseInfoResponse} and HTTP response
     */

  }, {
    key: "putLicenseInfoWithHttpInfo",
    value: function putLicenseInfoWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putLicenseInfo");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CertPutLicenseInfoResponse["default"];
      return this.apiClient.callApi('/license/update', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Update License String
     * @param {module:model/CertPutLicenseInfoRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertPutLicenseInfoResponse}
     */

  }, {
    key: "putLicenseInfo",
    value: function putLicenseInfo(body) {
      return this.putLicenseInfoWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LicenseServiceApi;
}();

exports["default"] = LicenseServiceApi;
//# sourceMappingURL=LicenseServiceApi.js.map
