"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntCreateNodeTemplateRequest = _interopRequireDefault(require("../model/EntCreateNodeTemplateRequest"));

var _EntCreateNodeTemplateResponse = _interopRequireDefault(require("../model/EntCreateNodeTemplateResponse"));

var _EntDeleteMetaTemplateResponse = _interopRequireDefault(require("../model/EntDeleteMetaTemplateResponse"));

var _EntDeleteNodeTemplateResponse = _interopRequireDefault(require("../model/EntDeleteNodeTemplateResponse"));

var _EntListMetaTemplateResponse = _interopRequireDefault(require("../model/EntListMetaTemplateResponse"));

var _EntPutMetaTemplateRequest = _interopRequireDefault(require("../model/EntPutMetaTemplateRequest"));

var _EntPutMetaTemplateResponse = _interopRequireDefault(require("../model/EntPutMetaTemplateResponse"));

var _RpcStatus = _interopRequireDefault(require("../model/RpcStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterpriseTemplatesService service.
* @module api/EnterpriseTemplatesServiceApi
* @version 2.0
*/
var EnterpriseTemplatesServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterpriseTemplatesServiceApi. 
  * @alias module:api/EnterpriseTemplatesServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterpriseTemplatesServiceApi(apiClient) {
    _classCallCheck(this, EnterpriseTemplatesServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a template from a specific node
   * @param {module:model/EntCreateNodeTemplateRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntCreateNodeTemplateResponse} and HTTP response
   */


  _createClass(EnterpriseTemplatesServiceApi, [{
    key: "createNodeTemplateWithHttpInfo",
    value: function createNodeTemplateWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNodeTemplate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntCreateNodeTemplateResponse["default"];
      return this.apiClient.callApi('/templates/node', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a template from a specific node
     * @param {module:model/EntCreateNodeTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntCreateNodeTemplateResponse}
     */

  }, {
    key: "createNodeTemplate",
    value: function createNodeTemplate(body) {
      return this.createNodeTemplateWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an arbitrary metadata template
     * @param {String} templateUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteMetaTemplateResponse} and HTTP response
     */

  }, {
    key: "deleteMetaTemplateWithHttpInfo",
    value: function deleteMetaTemplateWithHttpInfo(templateUuid) {
      var postBody = null; // verify the required parameter 'templateUuid' is set

      if (templateUuid === undefined || templateUuid === null) {
        throw new Error("Missing the required parameter 'templateUuid' when calling deleteMetaTemplate");
      }

      var pathParams = {
        'TemplateUuid': templateUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteMetaTemplateResponse["default"];
      return this.apiClient.callApi('/templates/meta/{TemplateUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an arbitrary metadata template
     * @param {String} templateUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteMetaTemplateResponse}
     */

  }, {
    key: "deleteMetaTemplate",
    value: function deleteMetaTemplate(templateUuid) {
      return this.deleteMetaTemplateWithHttpInfo(templateUuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a template from a specific node
     * @param {String} templateUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteNodeTemplateResponse} and HTTP response
     */

  }, {
    key: "deleteNodeTemplateWithHttpInfo",
    value: function deleteNodeTemplateWithHttpInfo(templateUuid) {
      var postBody = null; // verify the required parameter 'templateUuid' is set

      if (templateUuid === undefined || templateUuid === null) {
        throw new Error("Missing the required parameter 'templateUuid' when calling deleteNodeTemplate");
      }

      var pathParams = {
        'TemplateUuid': templateUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteNodeTemplateResponse["default"];
      return this.apiClient.callApi('/templates/node/{TemplateUuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a template from a specific node
     * @param {String} templateUuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteNodeTemplateResponse}
     */

  }, {
    key: "deleteNodeTemplate",
    value: function deleteNodeTemplate(templateUuid) {
      return this.deleteNodeTemplateWithHttpInfo(templateUuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Store an arbitrary metadata template
     * @param {Object} opts Optional parameters
     * @param {String} opts.namespace 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListMetaTemplateResponse} and HTTP response
     */

  }, {
    key: "listMetaTemplatesWithHttpInfo",
    value: function listMetaTemplatesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'Namespace': opts['namespace']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntListMetaTemplateResponse["default"];
      return this.apiClient.callApi('/templates/meta', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Store an arbitrary metadata template
     * @param {Object} opts Optional parameters
     * @param {String} opts.namespace 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListMetaTemplateResponse}
     */

  }, {
    key: "listMetaTemplates",
    value: function listMetaTemplates(opts) {
      return this.listMetaTemplatesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Store an arbitrary metadata template
     * @param {module:model/EntPutMetaTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPutMetaTemplateResponse} and HTTP response
     */

  }, {
    key: "putMetaTemplateWithHttpInfo",
    value: function putMetaTemplateWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putMetaTemplate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntPutMetaTemplateResponse["default"];
      return this.apiClient.callApi('/templates/meta', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Store an arbitrary metadata template
     * @param {module:model/EntPutMetaTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPutMetaTemplateResponse}
     */

  }, {
    key: "putMetaTemplate",
    value: function putMetaTemplate(body) {
      return this.putMetaTemplateWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterpriseTemplatesServiceApi;
}();

exports["default"] = EnterpriseTemplatesServiceApi;
//# sourceMappingURL=EnterpriseTemplatesServiceApi.js.map
