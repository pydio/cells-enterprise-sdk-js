"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmPolicyGroup = _interopRequireDefault(require("../model/IdmPolicyGroup"));

var _IpbanIPsCollection = _interopRequireDefault(require("../model/IpbanIPsCollection"));

var _IpbanListBansCollection = _interopRequireDefault(require("../model/IpbanListBansCollection"));

var _IpbanUnbanRequest = _interopRequireDefault(require("../model/IpbanUnbanRequest"));

var _IpbanUnbanResponse = _interopRequireDefault(require("../model/IpbanUnbanResponse"));

var _RestDeleteResponse = _interopRequireDefault(require("../model/RestDeleteResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterprisePolicyService service.
* @module api/EnterprisePolicyServiceApi
* @version 2.0
*/
var EnterprisePolicyServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterprisePolicyServiceApi. 
  * @alias module:api/EnterprisePolicyServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterprisePolicyServiceApi(apiClient) {
    _classCallCheck(this, EnterprisePolicyServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Delete a security policy
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */


  _createClass(EnterprisePolicyServiceApi, [{
    key: "deletePolicyWithHttpInfo",
    value: function deletePolicyWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deletePolicy");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteResponse["default"];
      return this.apiClient.callApi('/policy/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Delete a security policy
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */

  }, {
    key: "deletePolicy",
    value: function deletePolicy(uuid) {
      return this.deletePolicyWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List banned IPs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanListBansCollection} and HTTP response
     */

  }, {
    key: "listBansWithHttpInfo",
    value: function listBansWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IpbanListBansCollection["default"];
      return this.apiClient.callApi('/policy/ipbans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List banned IPs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanListBansCollection}
     */

  }, {
    key: "listBans",
    value: function listBans() {
      return this.listBansWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List white/black lists
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanIPsCollection} and HTTP response
     */

  }, {
    key: "listIPsWithHttpInfo",
    value: function listIPsWithHttpInfo(name) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listIPs");
      }

      var pathParams = {
        'Name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IpbanIPsCollection["default"];
      return this.apiClient.callApi('/policy/iplists/{Name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List white/black lists
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanIPsCollection}
     */

  }, {
    key: "listIPs",
    value: function listIPs(name) {
      return this.listIPsWithHttpInfo(name).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Update or create a security policy
     * @param {module:model/IdmPolicyGroup} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmPolicyGroup} and HTTP response
     */

  }, {
    key: "putPolicyWithHttpInfo",
    value: function putPolicyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putPolicy");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmPolicyGroup["default"];
      return this.apiClient.callApi('/policy', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Update or create a security policy
     * @param {module:model/IdmPolicyGroup} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmPolicyGroup}
     */

  }, {
    key: "putPolicy",
    value: function putPolicy(body) {
      return this.putPolicyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List banned IPs
     * @param {module:model/IpbanUnbanRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanUnbanResponse} and HTTP response
     */

  }, {
    key: "unbanWithHttpInfo",
    value: function unbanWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling unban");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IpbanUnbanResponse["default"];
      return this.apiClient.callApi('/policy/ipbans', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List banned IPs
     * @param {module:model/IpbanUnbanRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanUnbanResponse}
     */

  }, {
    key: "unban",
    value: function unban(body) {
      return this.unbanWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Update white/black lists
     * @param {module:model/IpbanIPsCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanIPsCollection} and HTTP response
     */

  }, {
    key: "updateIPsWithHttpInfo",
    value: function updateIPsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateIPs");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IpbanIPsCollection["default"];
      return this.apiClient.callApi('/policy/iplists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Update white/black lists
     * @param {module:model/IpbanIPsCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanIPsCollection}
     */

  }, {
    key: "updateIPs",
    value: function updateIPs(body) {
      return this.updateIPsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterprisePolicyServiceApi;
}();

exports["default"] = EnterprisePolicyServiceApi;
//# sourceMappingURL=EnterprisePolicyServiceApi.js.map
