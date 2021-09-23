/**
 * Pydio Cells Enterprise Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import LogListLogRequest from '../model/LogListLogRequest';
import LogTimeRangeRequest from '../model/LogTimeRangeRequest';
import RestLogMessageCollection from '../model/RestLogMessageCollection';
import RestTimeRangeResultCollection from '../model/RestTimeRangeResultCollection';

/**
* EnterpriseLogService service.
* @module api/EnterpriseLogServiceApi
* @version 2.0
*/
export default class EnterpriseLogServiceApi {

    /**
    * Constructs a new EnterpriseLogServiceApi. 
    * @alias module:api/EnterpriseLogServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
     */
    auditWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling audit");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestLogMessageCollection;

      return this.apiClient.callApi(
        '/log/audit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */
    audit(body) {
      return this.auditWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] Retrieves aggregated audit logs to generate charts
     * @param {module:model/LogTimeRangeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestTimeRangeResultCollection} and HTTP response
     */
    auditChartDataWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling auditChartData");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestTimeRangeResultCollection;

      return this.apiClient.callApi(
        '/log/audit/chartdata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * [Enterprise Only] Retrieves aggregated audit logs to generate charts
     * @param {module:model/LogTimeRangeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestTimeRangeResultCollection}
     */
    auditChartData(body) {
      return this.auditChartDataWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
     */
    auditExportWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling auditExport");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestLogMessageCollection;

      return this.apiClient.callApi(
        '/log/audit/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * [Enterprise Only] Auditable Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */
    auditExport(body) {
      return this.auditExportWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
     */
    syslogExportWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syslogExport");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestLogMessageCollection;

      return this.apiClient.callApi(
        '/log/sys/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * [Enterprise Only] Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */
    syslogExport(body) {
      return this.syslogExportWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
