"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntFrontLoginConnectorsResponse = _interopRequireDefault(require("../model/EntFrontLoginConnectorsResponse"));

var _RpcStatus = _interopRequireDefault(require("../model/RpcStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterpriseFrontendService service.
* @module api/EnterpriseFrontendServiceApi
* @version 2.0
*/
var EnterpriseFrontendServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterpriseFrontendServiceApi. 
  * @alias module:api/EnterpriseFrontendServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterpriseFrontendServiceApi(apiClient) {
    _classCallCheck(this, EnterpriseFrontendServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Handle Login Connectors
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntFrontLoginConnectorsResponse} and HTTP response
   */


  _createClass(EnterpriseFrontendServiceApi, [{
    key: "frontLoginConnectorsWithHttpInfo",
    value: function frontLoginConnectorsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntFrontLoginConnectorsResponse["default"];
      return this.apiClient.callApi('/frontend/login/connectors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Handle Login Connectors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntFrontLoginConnectorsResponse}
     */

  }, {
    key: "frontLoginConnectors",
    value: function frontLoginConnectors() {
      return this.frontLoginConnectorsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterpriseFrontendServiceApi;
}();

exports["default"] = EnterpriseFrontendServiceApi;
//# sourceMappingURL=EnterpriseFrontendServiceApi.js.map
