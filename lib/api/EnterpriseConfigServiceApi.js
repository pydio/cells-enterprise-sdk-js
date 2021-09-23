"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthOAuth2ClientConfig = _interopRequireDefault(require("../model/AuthOAuth2ClientConfig"));

var _AuthOAuth2ConnectorCollection = _interopRequireDefault(require("../model/AuthOAuth2ConnectorCollection"));

var _AuthOAuth2ConnectorConfig = _interopRequireDefault(require("../model/AuthOAuth2ConnectorConfig"));

var _EntDeleteVersioningPolicyResponse = _interopRequireDefault(require("../model/EntDeleteVersioningPolicyResponse"));

var _EntDeleteVirtualNodeResponse = _interopRequireDefault(require("../model/EntDeleteVirtualNodeResponse"));

var _EntExternalDirectoryCollection = _interopRequireDefault(require("../model/EntExternalDirectoryCollection"));

var _EntExternalDirectoryConfig = _interopRequireDefault(require("../model/EntExternalDirectoryConfig"));

var _EntExternalDirectoryResponse = _interopRequireDefault(require("../model/EntExternalDirectoryResponse"));

var _EntListSitesResponse = _interopRequireDefault(require("../model/EntListSitesResponse"));

var _EntOAuth2ClientCollection = _interopRequireDefault(require("../model/EntOAuth2ClientCollection"));

var _EntOAuth2ClientResponse = _interopRequireDefault(require("../model/EntOAuth2ClientResponse"));

var _EntOAuth2ConnectorCollection = _interopRequireDefault(require("../model/EntOAuth2ConnectorCollection"));

var _EntOAuth2ConnectorResponse = _interopRequireDefault(require("../model/EntOAuth2ConnectorResponse"));

var _TreeNode = _interopRequireDefault(require("../model/TreeNode"));

var _TreeVersioningPolicy = _interopRequireDefault(require("../model/TreeVersioningPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterpriseConfigService service.
* @module api/EnterpriseConfigServiceApi
* @version 2.0
*/
var EnterpriseConfigServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterpriseConfigServiceApi. 
  * @alias module:api/EnterpriseConfigServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterpriseConfigServiceApi(apiClient) {
    _classCallCheck(this, EnterpriseConfigServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Delete external directory
   * @param {String} configId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryResponse} and HTTP response
   */


  _createClass(EnterpriseConfigServiceApi, [{
    key: "deleteExternalDirectoryWithHttpInfo",
    value: function deleteExternalDirectoryWithHttpInfo(configId) {
      var postBody = null; // verify the required parameter 'configId' is set

      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling deleteExternalDirectory");
      }

      var pathParams = {
        'ConfigId': configId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryResponse["default"];
      return this.apiClient.callApi('/config/directories/{ConfigId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Delete external directory
     * @param {String} configId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryResponse}
     */

  }, {
    key: "deleteExternalDirectory",
    value: function deleteExternalDirectory(configId) {
      return this.deleteExternalDirectoryWithHttpInfo(configId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} clientID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ClientResponse} and HTTP response
     */

  }, {
    key: "deleteOAuth2ClientWithHttpInfo",
    value: function deleteOAuth2ClientWithHttpInfo(clientID) {
      var postBody = null; // verify the required parameter 'clientID' is set

      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling deleteOAuth2Client");
      }

      var pathParams = {
        'ClientID': clientID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ClientResponse["default"];
      return this.apiClient.callApi('/config/oauth2clients/{ClientID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} clientID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ClientResponse}
     */

  }, {
    key: "deleteOAuth2Client",
    value: function deleteOAuth2Client(clientID) {
      return this.deleteOAuth2ClientWithHttpInfo(clientID).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorResponse} and HTTP response
     */

  }, {
    key: "deleteOAuth2ConnectorWithHttpInfo",
    value: function deleteOAuth2ConnectorWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOAuth2Connector");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorResponse["default"];
      return this.apiClient.callApi('/config/oauth2connectors/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Delete an oauth2 client
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorResponse}
     */

  }, {
    key: "deleteOAuth2Connector",
    value: function deleteOAuth2Connector(id) {
      return this.deleteOAuth2ConnectorWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete a versioning policy
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteVersioningPolicyResponse} and HTTP response
     */

  }, {
    key: "deleteVersioningPolicyWithHttpInfo",
    value: function deleteVersioningPolicyWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteVersioningPolicy");
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
      var returnType = _EntDeleteVersioningPolicyResponse["default"];
      return this.apiClient.callApi('/config/versioning/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Delete a versioning policy
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteVersioningPolicyResponse}
     */

  }, {
    key: "deleteVersioningPolicy",
    value: function deleteVersioningPolicy(uuid) {
      return this.deleteVersioningPolicyWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete a virtual node
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteVirtualNodeResponse} and HTTP response
     */

  }, {
    key: "deleteVirtualNodeWithHttpInfo",
    value: function deleteVirtualNodeWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteVirtualNode");
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
      var returnType = _EntDeleteVirtualNodeResponse["default"];
      return this.apiClient.callApi('/config/virtualnodes/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Delete a virtual node
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteVirtualNodeResponse}
     */

  }, {
    key: "deleteVirtualNode",
    value: function deleteVirtualNode(uuid) {
      return this.deleteVirtualNodeWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List additional user directories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryCollection} and HTTP response
     */

  }, {
    key: "listExternalDirectoriesWithHttpInfo",
    value: function listExternalDirectoriesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryCollection["default"];
      return this.apiClient.callApi('/config/directories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List additional user directories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryCollection}
     */

  }, {
    key: "listExternalDirectories",
    value: function listExternalDirectories() {
      return this.listExternalDirectoriesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List oauth2 clients
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ClientCollection} and HTTP response
     */

  }, {
    key: "listOAuth2ClientsWithHttpInfo",
    value: function listOAuth2ClientsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ClientCollection["default"];
      return this.apiClient.callApi('/config/oauth2clients', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List oauth2 clients
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ClientCollection}
     */

  }, {
    key: "listOAuth2Clients",
    value: function listOAuth2Clients() {
      return this.listOAuth2ClientsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List oauth2 connectors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorCollection} and HTTP response
     */

  }, {
    key: "listOAuth2ConnectorsWithHttpInfo",
    value: function listOAuth2ConnectorsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorCollection["default"];
      return this.apiClient.callApi('/config/oauth2connectors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List oauth2 connectors
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorCollection}
     */

  }, {
    key: "listOAuth2Connectors",
    value: function listOAuth2Connectors() {
      return this.listOAuth2ConnectorsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] List configured sites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListSitesResponse} and HTTP response
     */

  }, {
    key: "listSitesWithHttpInfo",
    value: function listSitesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntListSitesResponse["default"];
      return this.apiClient.callApi('/config/sites', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] List configured sites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListSitesResponse}
     */

  }, {
    key: "listSites",
    value: function listSites() {
      return this.listSitesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create an external directory
     * @param {String} configId 
     * @param {module:model/EntExternalDirectoryConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntExternalDirectoryResponse} and HTTP response
     */

  }, {
    key: "putExternalDirectoryWithHttpInfo",
    value: function putExternalDirectoryWithHttpInfo(configId, body) {
      var postBody = body; // verify the required parameter 'configId' is set

      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling putExternalDirectory");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putExternalDirectory");
      }

      var pathParams = {
        'ConfigId': configId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntExternalDirectoryResponse["default"];
      return this.apiClient.callApi('/config/directories/{ConfigId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Add/Create an external directory
     * @param {String} configId 
     * @param {module:model/EntExternalDirectoryConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntExternalDirectoryResponse}
     */

  }, {
    key: "putExternalDirectory",
    value: function putExternalDirectory(configId, body) {
      return this.putExternalDirectoryWithHttpInfo(configId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} clientID 
     * @param {module:model/AuthOAuth2ClientConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ClientResponse} and HTTP response
     */

  }, {
    key: "putOAuth2ClientWithHttpInfo",
    value: function putOAuth2ClientWithHttpInfo(clientID, body) {
      var postBody = body; // verify the required parameter 'clientID' is set

      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling putOAuth2Client");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putOAuth2Client");
      }

      var pathParams = {
        'ClientID': clientID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ClientResponse["default"];
      return this.apiClient.callApi('/config/oauth2clients/{ClientID}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} clientID 
     * @param {module:model/AuthOAuth2ClientConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ClientResponse}
     */

  }, {
    key: "putOAuth2Client",
    value: function putOAuth2Client(clientID, body) {
      return this.putOAuth2ClientWithHttpInfo(clientID, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} id 
     * @param {module:model/AuthOAuth2ConnectorConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorResponse} and HTTP response
     */

  }, {
    key: "putOAuth2ConnectorWithHttpInfo",
    value: function putOAuth2ConnectorWithHttpInfo(id, body) {
      var postBody = body; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putOAuth2Connector");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putOAuth2Connector");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorResponse["default"];
      return this.apiClient.callApi('/config/oauth2connectors/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {String} id 
     * @param {module:model/AuthOAuth2ConnectorConfig} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorResponse}
     */

  }, {
    key: "putOAuth2Connector",
    value: function putOAuth2Connector(id, body) {
      return this.putOAuth2ConnectorWithHttpInfo(id, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {module:model/AuthOAuth2ConnectorCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntOAuth2ConnectorResponse} and HTTP response
     */

  }, {
    key: "putOAuth2ConnectorsWithHttpInfo",
    value: function putOAuth2ConnectorsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putOAuth2Connectors");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntOAuth2ConnectorResponse["default"];
      return this.apiClient.callApi('/config/oauth2connectors', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Add/Create a new oauth2 client
     * @param {module:model/AuthOAuth2ConnectorCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntOAuth2ConnectorResponse}
     */

  }, {
    key: "putOAuth2Connectors",
    value: function putOAuth2Connectors(body) {
      return this.putOAuth2ConnectorsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Create or update a versioning policy
     * @param {String} uuid 
     * @param {module:model/TreeVersioningPolicy} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeVersioningPolicy} and HTTP response
     */

  }, {
    key: "putVersioningPolicyWithHttpInfo",
    value: function putVersioningPolicyWithHttpInfo(uuid, body) {
      var postBody = body; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling putVersioningPolicy");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putVersioningPolicy");
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
      var returnType = _TreeVersioningPolicy["default"];
      return this.apiClient.callApi('/config/versioning/{Uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Create or update a versioning policy
     * @param {String} uuid 
     * @param {module:model/TreeVersioningPolicy} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeVersioningPolicy}
     */

  }, {
    key: "putVersioningPolicy",
    value: function putVersioningPolicy(uuid, body) {
      return this.putVersioningPolicyWithHttpInfo(uuid, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Create or update a virtual node
     * @param {String} uuid 
     * @param {module:model/TreeNode} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeNode} and HTTP response
     */

  }, {
    key: "putVirtualNodeWithHttpInfo",
    value: function putVirtualNodeWithHttpInfo(uuid, body) {
      var postBody = body; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling putVirtualNode");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putVirtualNode");
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
      var returnType = _TreeNode["default"];
      return this.apiClient.callApi('/config/virtualnodes/{Uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Enterprise Only] Create or update a virtual node
     * @param {String} uuid 
     * @param {module:model/TreeNode} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeNode}
     */

  }, {
    key: "putVirtualNode",
    value: function putVirtualNode(uuid, body) {
      return this.putVirtualNodeWithHttpInfo(uuid, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterpriseConfigServiceApi;
}();

exports["default"] = EnterpriseConfigServiceApi;
//# sourceMappingURL=EnterpriseConfigServiceApi.js.map
