"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntDeleteActionTemplateResponse = _interopRequireDefault(require("../model/EntDeleteActionTemplateResponse"));

var _EntDeleteJobTemplateResponse = _interopRequireDefault(require("../model/EntDeleteJobTemplateResponse"));

var _EntDeleteJobVersionResponse = _interopRequireDefault(require("../model/EntDeleteJobVersionResponse"));

var _EntDeleteSelectorTemplateResponse = _interopRequireDefault(require("../model/EntDeleteSelectorTemplateResponse"));

var _EntDocTemplatesResponse = _interopRequireDefault(require("../model/EntDocTemplatesResponse"));

var _EntJobHookResponse = _interopRequireDefault(require("../model/EntJobHookResponse"));

var _EntListActionTemplatesRequest = _interopRequireDefault(require("../model/EntListActionTemplatesRequest"));

var _EntListActionTemplatesResponse = _interopRequireDefault(require("../model/EntListActionTemplatesResponse"));

var _EntListJobTemplatesRequest = _interopRequireDefault(require("../model/EntListJobTemplatesRequest"));

var _EntListJobTemplatesResponse = _interopRequireDefault(require("../model/EntListJobTemplatesResponse"));

var _EntListJobVersionsResponse = _interopRequireDefault(require("../model/EntListJobVersionsResponse"));

var _EntListSelectorTemplatesRequest = _interopRequireDefault(require("../model/EntListSelectorTemplatesRequest"));

var _EntListSelectorTemplatesResponse = _interopRequireDefault(require("../model/EntListSelectorTemplatesResponse"));

var _EntPlaygroundRequest = _interopRequireDefault(require("../model/EntPlaygroundRequest"));

var _EntPlaygroundResponse = _interopRequireDefault(require("../model/EntPlaygroundResponse"));

var _EntPutActionTemplateRequest = _interopRequireDefault(require("../model/EntPutActionTemplateRequest"));

var _EntPutActionTemplateResponse = _interopRequireDefault(require("../model/EntPutActionTemplateResponse"));

var _EntPutJobTemplateRequest = _interopRequireDefault(require("../model/EntPutJobTemplateRequest"));

var _EntPutJobTemplateResponse = _interopRequireDefault(require("../model/EntPutJobTemplateResponse"));

var _EntPutSelectorTemplateRequest = _interopRequireDefault(require("../model/EntPutSelectorTemplateRequest"));

var _EntPutSelectorTemplateResponse = _interopRequireDefault(require("../model/EntPutSelectorTemplateResponse"));

var _EntRestoreJobVersionResponse = _interopRequireDefault(require("../model/EntRestoreJobVersionResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject5"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject6"));

var _JobsDeleteJobResponse = _interopRequireDefault(require("../model/JobsDeleteJobResponse"));

var _JobsPutJobRequest = _interopRequireDefault(require("../model/JobsPutJobRequest"));

var _JobsPutJobResponse = _interopRequireDefault(require("../model/JobsPutJobResponse"));

var _RpcStatus = _interopRequireDefault(require("../model/RpcStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SchedulerService service.
* @module api/SchedulerServiceApi
* @version 2.0
*/
var SchedulerServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SchedulerServiceApi. 
  * @alias module:api/SchedulerServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SchedulerServiceApi(apiClient) {
    _classCallCheck(this, SchedulerServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Templates management for actions
   * @param {String} templateName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteActionTemplateResponse} and HTTP response
   */


  _createClass(SchedulerServiceApi, [{
    key: "deleteActionTemplateWithHttpInfo",
    value: function deleteActionTemplateWithHttpInfo(templateName) {
      var postBody = null; // verify the required parameter 'templateName' is set

      if (templateName === undefined || templateName === null) {
        throw new Error("Missing the required parameter 'templateName' when calling deleteActionTemplate");
      }

      var pathParams = {
        'TemplateName': templateName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteActionTemplateResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/actions/{TemplateName}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for actions
     * @param {String} templateName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteActionTemplateResponse}
     */

  }, {
    key: "deleteActionTemplate",
    value: function deleteActionTemplate(templateName) {
      return this.deleteActionTemplateWithHttpInfo(templateName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Delete a job from the scheduler
     * @param {String} jobID 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cleanableJobs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsDeleteJobResponse} and HTTP response
     */

  }, {
    key: "deleteJobWithHttpInfo",
    value: function deleteJobWithHttpInfo(jobID, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'jobID' is set

      if (jobID === undefined || jobID === null) {
        throw new Error("Missing the required parameter 'jobID' when calling deleteJob");
      }

      var pathParams = {
        'JobID': jobID
      };
      var queryParams = {
        'CleanableJobs': opts['cleanableJobs']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _JobsDeleteJobResponse["default"];
      return this.apiClient.callApi('/scheduler/jobs/{JobID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Delete a job from the scheduler
     * @param {String} jobID 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cleanableJobs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsDeleteJobResponse}
     */

  }, {
    key: "deleteJob",
    value: function deleteJob(jobID, opts) {
      return this.deleteJobWithHttpInfo(jobID, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for Jobs
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteJobTemplateResponse} and HTTP response
     */

  }, {
    key: "deleteJobTemplateWithHttpInfo",
    value: function deleteJobTemplateWithHttpInfo(name) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteJobTemplate");
      }

      var pathParams = {
        'Name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteJobTemplateResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/jobs/{Name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for Jobs
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteJobTemplateResponse}
     */

  }, {
    key: "deleteJobTemplate",
    value: function deleteJobTemplate(name) {
      return this.deleteJobTemplateWithHttpInfo(name).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} jobID 
     * @param {String} versionID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteJobVersionResponse} and HTTP response
     */

  }, {
    key: "deleteJobVersionWithHttpInfo",
    value: function deleteJobVersionWithHttpInfo(jobID, versionID, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'jobID' is set

      if (jobID === undefined || jobID === null) {
        throw new Error("Missing the required parameter 'jobID' when calling deleteJobVersion");
      } // verify the required parameter 'versionID' is set


      if (versionID === undefined || versionID === null) {
        throw new Error("Missing the required parameter 'versionID' when calling deleteJobVersion");
      }

      var pathParams = {
        'JobID': jobID,
        'VersionID': versionID
      };
      var queryParams = {
        'Type': opts['type']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteJobVersionResponse["default"];
      return this.apiClient.callApi('/scheduler/versions/{JobID}/{VersionID}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} jobID 
     * @param {String} versionID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteJobVersionResponse}
     */

  }, {
    key: "deleteJobVersion",
    value: function deleteJobVersion(jobID, versionID, opts) {
      return this.deleteJobVersionWithHttpInfo(jobID, versionID, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for filters
     * @param {String} templateName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDeleteSelectorTemplateResponse} and HTTP response
     */

  }, {
    key: "deleteSelectorTemplateWithHttpInfo",
    value: function deleteSelectorTemplateWithHttpInfo(templateName) {
      var postBody = null; // verify the required parameter 'templateName' is set

      if (templateName === undefined || templateName === null) {
        throw new Error("Missing the required parameter 'templateName' when calling deleteSelectorTemplate");
      }

      var pathParams = {
        'TemplateName': templateName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDeleteSelectorTemplateResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/selectors/{TemplateName}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for filters
     * @param {String} templateName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDeleteSelectorTemplateResponse}
     */

  }, {
    key: "deleteSelectorTemplate",
    value: function deleteSelectorTemplate(templateName) {
      return this.deleteSelectorTemplateWithHttpInfo(templateName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Run a code sample
     * @param {module:model/EntPlaygroundRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPlaygroundResponse} and HTTP response
     */

  }, {
    key: "executePlaygroundCodeWithHttpInfo",
    value: function executePlaygroundCodeWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executePlaygroundCode");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntPlaygroundResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/playground', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Run a code sample
     * @param {module:model/EntPlaygroundRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPlaygroundResponse}
     */

  }, {
    key: "executePlaygroundCode",
    value: function executePlaygroundCode(body) {
      return this.executePlaygroundCodeWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for actions
     * @param {module:model/EntListActionTemplatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListActionTemplatesResponse} and HTTP response
     */

  }, {
    key: "listActionTemplatesWithHttpInfo",
    value: function listActionTemplatesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listActionTemplates");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntListActionTemplatesResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/actions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for actions
     * @param {module:model/EntListActionTemplatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListActionTemplatesResponse}
     */

  }, {
    key: "listActionTemplates",
    value: function listActionTemplates(body) {
      return this.listActionTemplatesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntDocTemplatesResponse} and HTTP response
     */

  }, {
    key: "listDocTemplatesWithHttpInfo",
    value: function listDocTemplatesWithHttpInfo(type) {
      var postBody = null; // verify the required parameter 'type' is set

      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling listDocTemplates");
      }

      var pathParams = {
        'Type': type
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntDocTemplatesResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/docs/{Type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntDocTemplatesResponse}
     */

  }, {
    key: "listDocTemplates",
    value: function listDocTemplates(type) {
      return this.listDocTemplatesWithHttpInfo(type).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for Jobs
     * @param {module:model/EntListJobTemplatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListJobTemplatesResponse} and HTTP response
     */

  }, {
    key: "listJobTemplatesWithHttpInfo",
    value: function listJobTemplatesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listJobTemplates");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntListJobTemplatesResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/jobs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for Jobs
     * @param {module:model/EntListJobTemplatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListJobTemplatesResponse}
     */

  }, {
    key: "listJobTemplates",
    value: function listJobTemplates(body) {
      return this.listJobTemplatesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} jobID 
     * @param {module:model/InlineObject5} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListJobVersionsResponse} and HTTP response
     */

  }, {
    key: "listJobVersionsWithHttpInfo",
    value: function listJobVersionsWithHttpInfo(jobID, body) {
      var postBody = body; // verify the required parameter 'jobID' is set

      if (jobID === undefined || jobID === null) {
        throw new Error("Missing the required parameter 'jobID' when calling listJobVersions");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listJobVersions");
      }

      var pathParams = {
        'JobID': jobID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntListJobVersionsResponse["default"];
      return this.apiClient.callApi('/scheduler/versions/{JobID}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} jobID 
     * @param {module:model/InlineObject5} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListJobVersionsResponse}
     */

  }, {
    key: "listJobVersions",
    value: function listJobVersions(jobID, body) {
      return this.listJobVersionsWithHttpInfo(jobID, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for filters
     * @param {module:model/EntListSelectorTemplatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntListSelectorTemplatesResponse} and HTTP response
     */

  }, {
    key: "listSelectorTemplatesWithHttpInfo",
    value: function listSelectorTemplatesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listSelectorTemplates");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntListSelectorTemplatesResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/selectors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for filters
     * @param {module:model/EntListSelectorTemplatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntListSelectorTemplatesResponse}
     */

  }, {
    key: "listSelectorTemplates",
    value: function listSelectorTemplates(body) {
      return this.listSelectorTemplatesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for actions
     * @param {module:model/EntPutActionTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPutActionTemplateResponse} and HTTP response
     */

  }, {
    key: "putActionTemplateWithHttpInfo",
    value: function putActionTemplateWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putActionTemplate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntPutActionTemplateResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/actions', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for actions
     * @param {module:model/EntPutActionTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPutActionTemplateResponse}
     */

  }, {
    key: "putActionTemplate",
    value: function putActionTemplate(body) {
      return this.putActionTemplateWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Put a job in the scheduler
     * @param {module:model/JobsPutJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsPutJobResponse} and HTTP response
     */

  }, {
    key: "putJobWithHttpInfo",
    value: function putJobWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putJob");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JobsPutJobResponse["default"];
      return this.apiClient.callApi('/scheduler/jobs', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Put a job in the scheduler
     * @param {module:model/JobsPutJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsPutJobResponse}
     */

  }, {
    key: "putJob",
    value: function putJob(body) {
      return this.putJobWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for Jobs
     * @param {String} name 
     * @param {module:model/EntPutJobTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPutJobTemplateResponse} and HTTP response
     */

  }, {
    key: "putJobTemplateWithHttpInfo",
    value: function putJobTemplateWithHttpInfo(name, body) {
      var postBody = body; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling putJobTemplate");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putJobTemplate");
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
      var returnType = _EntPutJobTemplateResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/jobs/{Name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for Jobs
     * @param {String} name 
     * @param {module:model/EntPutJobTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPutJobTemplateResponse}
     */

  }, {
    key: "putJobTemplate",
    value: function putJobTemplate(name, body) {
      return this.putJobTemplateWithHttpInfo(name, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Templates management for filters
     * @param {module:model/EntPutSelectorTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntPutSelectorTemplateResponse} and HTTP response
     */

  }, {
    key: "putSelectorTemplateWithHttpInfo",
    value: function putSelectorTemplateWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putSelectorTemplate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntPutSelectorTemplateResponse["default"];
      return this.apiClient.callApi('/scheduler/templates/selectors', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Templates management for filters
     * @param {module:model/EntPutSelectorTemplateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntPutSelectorTemplateResponse}
     */

  }, {
    key: "putSelectorTemplate",
    value: function putSelectorTemplate(body) {
      return this.putSelectorTemplateWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} jobID 
     * @param {String} versionID 
     * @param {module:model/InlineObject6} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntRestoreJobVersionResponse} and HTTP response
     */

  }, {
    key: "restoreJobVersionWithHttpInfo",
    value: function restoreJobVersionWithHttpInfo(jobID, versionID, body) {
      var postBody = body; // verify the required parameter 'jobID' is set

      if (jobID === undefined || jobID === null) {
        throw new Error("Missing the required parameter 'jobID' when calling restoreJobVersion");
      } // verify the required parameter 'versionID' is set


      if (versionID === undefined || versionID === null) {
        throw new Error("Missing the required parameter 'versionID' when calling restoreJobVersion");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling restoreJobVersion");
      }

      var pathParams = {
        'JobID': jobID,
        'VersionID': versionID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntRestoreJobVersionResponse["default"];
      return this.apiClient.callApi('/scheduler/versions/{JobID}/{VersionID}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} jobID 
     * @param {String} versionID 
     * @param {module:model/InlineObject6} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntRestoreJobVersionResponse}
     */

  }, {
    key: "restoreJobVersion",
    value: function restoreJobVersion(jobID, versionID, body) {
      return this.restoreJobVersionWithHttpInfo(jobID, versionID, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} hookSlug 
     * @param {module:model/InlineObject4} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntJobHookResponse} and HTTP response
     */

  }, {
    key: "triggerHookWithHttpInfo",
    value: function triggerHookWithHttpInfo(hookSlug, body) {
      var postBody = body; // verify the required parameter 'hookSlug' is set

      if (hookSlug === undefined || hookSlug === null) {
        throw new Error("Missing the required parameter 'hookSlug' when calling triggerHook");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling triggerHook");
      }

      var pathParams = {
        'HookSlug': hookSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EntJobHookResponse["default"];
      return this.apiClient.callApi('/scheduler/hooks/{HookSlug}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} hookSlug 
     * @param {module:model/InlineObject4} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntJobHookResponse}
     */

  }, {
    key: "triggerHook",
    value: function triggerHook(hookSlug, body) {
      return this.triggerHookWithHttpInfo(hookSlug, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SchedulerServiceApi;
}();

exports["default"] = SchedulerServiceApi;
//# sourceMappingURL=SchedulerServiceApi.js.map
