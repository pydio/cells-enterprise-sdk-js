"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogListLogRequest = _interopRequireDefault(require("../model/LogListLogRequest"));

var _LogTimeRangeRequest = _interopRequireDefault(require("../model/LogTimeRangeRequest"));

var _RestLogMessageCollection = _interopRequireDefault(require("../model/RestLogMessageCollection"));

var _RestTimeRangeResultCollection = _interopRequireDefault(require("../model/RestTimeRangeResultCollection"));

var _RpcStatus = _interopRequireDefault(require("../model/RpcStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EnterpriseLogService service.
* @module api/EnterpriseLogServiceApi
* @version 2.0
*/
var EnterpriseLogServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnterpriseLogServiceApi. 
  * @alias module:api/EnterpriseLogServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnterpriseLogServiceApi(apiClient) {
    _classCallCheck(this, EnterpriseLogServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * [Enterprise Only] Auditable Logs, in Json or CSV format
   * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
   */


  _createClass(EnterpriseLogServiceApi, [{
    key: "auditWithHttpInfo",
    value: function auditWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling audit");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestLogMessageCollection["default"];
      return this.apiClient.callApi('/log/audit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */

  }, {
    key: "audit",
    value: function audit(body) {
      return this.auditWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Retrieves aggregated audit logs to generate charts
     * @param {module:model/LogTimeRangeRequest} body TimeRangeRequest contains the parameter to configure the query to  retrieve the number of audit events of this type for a given time range defined by last timestamp and a range type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestTimeRangeResultCollection} and HTTP response
     */

  }, {
    key: "auditChartDataWithHttpInfo",
    value: function auditChartDataWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling auditChartData");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestTimeRangeResultCollection["default"];
      return this.apiClient.callApi('/log/audit/chartdata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Retrieves aggregated audit logs to generate charts
     * @param {module:model/LogTimeRangeRequest} body TimeRangeRequest contains the parameter to configure the query to  retrieve the number of audit events of this type for a given time range defined by last timestamp and a range type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestTimeRangeResultCollection}
     */

  }, {
    key: "auditChartData",
    value: function auditChartData(body) {
      return this.auditChartDataWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
     */

  }, {
    key: "auditExportWithHttpInfo",
    value: function auditExportWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling auditExport");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestLogMessageCollection["default"];
      return this.apiClient.callApi('/log/audit/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */

  }, {
    key: "auditExport",
    value: function auditExport(body) {
      return this.auditExportWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Enterprise Only] Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
     */

  }, {
    key: "syslogExportWithHttpInfo",
    value: function syslogExportWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syslogExport");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestLogMessageCollection["default"];
      return this.apiClient.callApi('/log/sys/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * [Enterprise Only] Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */

  }, {
    key: "syslogExport",
    value: function syslogExport(body) {
      return this.syslogExportWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EnterpriseLogServiceApi;
}();

exports["default"] = EnterpriseLogServiceApi;
//# sourceMappingURL=EnterpriseLogServiceApi.js.map
