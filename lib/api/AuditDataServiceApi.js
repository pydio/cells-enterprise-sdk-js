"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportsSharedResourcesRequest = _interopRequireDefault(require("../model/ReportsSharedResourcesRequest"));

var _ReportsSharedResourcesResponse = _interopRequireDefault(require("../model/ReportsSharedResourcesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AuditDataService service.
* @module api/AuditDataServiceApi
* @version 2.0
*/
var AuditDataServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuditDataServiceApi. 
  * @alias module:api/AuditDataServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuditDataServiceApi(apiClient) {
    _classCallCheck(this, AuditDataServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Audit all shares across the application
   * @param {module:model/ReportsSharedResourcesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportsSharedResourcesResponse} and HTTP response
   */


  _createClass(AuditDataServiceApi, [{
    key: "sharedResourcesWithHttpInfo",
    value: function sharedResourcesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sharedResources");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ReportsSharedResourcesResponse["default"];
      return this.apiClient.callApi('/audit/data/shares', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Audit all shares across the application
     * @param {module:model/ReportsSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportsSharedResourcesResponse}
     */

  }, {
    key: "sharedResources",
    value: function sharedResources(body) {
      return this.sharedResourcesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuditDataServiceApi;
}();

exports["default"] = AuditDataServiceApi;
//# sourceMappingURL=AuditDataServiceApi.js.map
