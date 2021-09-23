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
import ReportsSharedResourcesRequest from '../model/ReportsSharedResourcesRequest';
import ReportsSharedResourcesResponse from '../model/ReportsSharedResourcesResponse';

/**
* AuditDataService service.
* @module api/AuditDataServiceApi
* @version 2.0
*/
export default class AuditDataServiceApi {

    /**
    * Constructs a new AuditDataServiceApi. 
    * @alias module:api/AuditDataServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * [Enterprise Only] Audit all shares across the application
     * @param {module:model/ReportsSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportsSharedResourcesResponse} and HTTP response
     */
    sharedResourcesWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sharedResources");
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
      let returnType = ReportsSharedResourcesResponse;

      return this.apiClient.callApi(
        '/audit/data/shares', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * [Enterprise Only] Audit all shares across the application
     * @param {module:model/ReportsSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportsSharedResourcesResponse}
     */
    sharedResources(body) {
      return this.sharedResourcesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
