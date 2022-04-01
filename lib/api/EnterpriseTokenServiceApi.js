"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthPatListResponse = _interopRequireDefault(require("../model/AuthPatListResponse"));

var _EntListAccessTokensRequest = _interopRequireDefault(require("../model/EntListAccessTokensRequest"));

var _EntPersonalAccessTokenRequest = _interopRequireDefault(require("../model/EntPersonalAccessTokenRequest"));

var _EntPersonalAccessTokenResponse = _interopRequireDefault(require("../model/EntPersonalAccessTokenResponse"));

var _RestRevokeResponse = _interopRequireDefault(require("../model/RestRevokeResponse"));

var _RpcStatus = _interopRequireDefault(require("../model/RpcStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterpriseTokenService service.
* @module api/EnterpriseTokenServiceApi
* @version 2.0
*/
var EnterpriseTokenServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterpriseTokenServiceApi. 
  * @alias module:api/EnterpriseTokenServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterpriseTokenServiceApi(apiClient) {
    _classCallCheck(this, EnterpriseTokenServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Generate a personal access token
   * @param {module:model/EntPersonalAccessTokenRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPersonalAccessTokenResponse} and HTTP response
   */


  _createClass(EnterpriseTokenServiceApi, [{
    key: "generatePersonalAccessTokenWithHttpInfo",
    value: function generatePersonalAccessTokenWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling generatePersonalAccessToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntPersonalAccessTokenResponse["default"];
      return this.apiClient.callApi('/auth/token/personal', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate a personal access token
     * @param {module:model/EntPersonalAccessTokenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPersonalAccessTokenResponse}
     */

  }, {
    key: "generatePersonalAccessToken",
    value: function generatePersonalAccessToken(body) {
      return this.generatePersonalAccessTokenWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate a personal access token
     * @param {module:model/EntPersonalAccessTokenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPersonalAccessTokenResponse} and HTTP response
     */

  }, {
    key: "impersonatePersonalAccessTokenWithHttpInfo",
    value: function impersonatePersonalAccessTokenWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling impersonatePersonalAccessToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntPersonalAccessTokenResponse["default"];
      return this.apiClient.callApi('/auth/token/impersonate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate a personal access token
     * @param {module:model/EntPersonalAccessTokenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPersonalAccessTokenResponse}
     */

  }, {
    key: "impersonatePersonalAccessToken",
    value: function impersonatePersonalAccessToken(body) {
      return this.impersonatePersonalAccessTokenWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List generated personal access tokens, eventually filtering by user
     * @param {module:model/EntListAccessTokensRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthPatListResponse} and HTTP response
     */

  }, {
    key: "listPersonalAccessTokensWithHttpInfo",
    value: function listPersonalAccessTokensWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listPersonalAccessTokens");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AuthPatListResponse["default"];
      return this.apiClient.callApi('/auth/tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List generated personal access tokens, eventually filtering by user
     * @param {module:model/EntListAccessTokensRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthPatListResponse}
     */

  }, {
    key: "listPersonalAccessTokens",
    value: function listPersonalAccessTokens(body) {
      return this.listPersonalAccessTokensWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a personal access token based on its Uuid
     * @param {String} tokenId Pass a specific Token ID to be revoked. If empty, request will use current JWT
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRevokeResponse} and HTTP response
     */

  }, {
    key: "revokePersonalAccessTokenWithHttpInfo",
    value: function revokePersonalAccessTokenWithHttpInfo(tokenId) {
      var postBody = null; // verify the required parameter 'tokenId' is set

      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling revokePersonalAccessToken");
      }

      var pathParams = {
        'TokenId': tokenId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestRevokeResponse["default"];
      return this.apiClient.callApi('/auth/tokens/{TokenId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a personal access token based on its Uuid
     * @param {String} tokenId Pass a specific Token ID to be revoked. If empty, request will use current JWT
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRevokeResponse}
     */

  }, {
    key: "revokePersonalAccessToken",
    value: function revokePersonalAccessToken(tokenId) {
      return this.revokePersonalAccessTokenWithHttpInfo(tokenId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterpriseTokenServiceApi;
}();

exports["default"] = EnterpriseTokenServiceApi;
//# sourceMappingURL=EnterpriseTokenServiceApi.js.map
