/**
 * Pydio Cells Enterprise Rest API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IdmPolicyGroup from '../model/IdmPolicyGroup';
import IpbanIPsCollection from '../model/IpbanIPsCollection';
import IpbanListBansCollection from '../model/IpbanListBansCollection';
import IpbanUnbanRequest from '../model/IpbanUnbanRequest';
import IpbanUnbanResponse from '../model/IpbanUnbanResponse';
import RestDeleteResponse from '../model/RestDeleteResponse';
import RpcStatus from '../model/RpcStatus';

/**
* EnterprisePolicyService service.
* @module api/EnterprisePolicyServiceApi
* @version 2.0
*/
export default class EnterprisePolicyServiceApi {

    /**
    * Constructs a new EnterprisePolicyServiceApi. 
    * @alias module:api/EnterprisePolicyServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * [Enterprise Only] Delete a security policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.ownerUuid 
     * @param {module:model/String} opts.resourceGroup  (default to 'rest')
     * @param {Number} opts.lastUpdated 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
     */
    deletePolicyWithHttpInfo(uuid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deletePolicy");
      }

      let pathParams = {
        'Uuid': uuid
      };
      let queryParams = {
        'Name': opts['name'],
        'Description': opts['description'],
        'OwnerUuid': opts['ownerUuid'],
        'ResourceGroup': opts['resourceGroup'],
        'LastUpdated': opts['lastUpdated']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RestDeleteResponse;
      return this.apiClient.callApi(
        '/policy/{Uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [Enterprise Only] Delete a security policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.ownerUuid 
     * @param {module:model/String} opts.resourceGroup  (default to 'rest')
     * @param {Number} opts.lastUpdated 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */
    deletePolicy(uuid, opts) {
      return this.deletePolicyWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] List banned IPs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanListBansCollection} and HTTP response
     */
    listBansWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IpbanListBansCollection;
      return this.apiClient.callApi(
        '/policy/ipbans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [Enterprise Only] List banned IPs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanListBansCollection}
     */
    listBans() {
      return this.listBansWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] List white/black lists
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanIPsCollection} and HTTP response
     */
    listIPsWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listIPs");
      }

      let pathParams = {
        'Name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IpbanIPsCollection;
      return this.apiClient.callApi(
        '/policy/iplists/{Name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [Enterprise Only] List white/black lists
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanIPsCollection}
     */
    listIPs(name) {
      return this.listIPsWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] Update or create a security policy
     * @param {module:model/IdmPolicyGroup} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmPolicyGroup} and HTTP response
     */
    putPolicyWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putPolicy");
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
      let returnType = IdmPolicyGroup;
      return this.apiClient.callApi(
        '/policy', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [Enterprise Only] Update or create a security policy
     * @param {module:model/IdmPolicyGroup} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmPolicyGroup}
     */
    putPolicy(body) {
      return this.putPolicyWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] List banned IPs
     * @param {module:model/IpbanUnbanRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanUnbanResponse} and HTTP response
     */
    unbanWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling unban");
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
      let returnType = IpbanUnbanResponse;
      return this.apiClient.callApi(
        '/policy/ipbans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [Enterprise Only] List banned IPs
     * @param {module:model/IpbanUnbanRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanUnbanResponse}
     */
    unban(body) {
      return this.unbanWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * [Enterprise Only] Update white/black lists
     * @param {module:model/IpbanIPsCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IpbanIPsCollection} and HTTP response
     */
    updateIPsWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateIPs");
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
      let returnType = IpbanIPsCollection;
      return this.apiClient.callApi(
        '/policy/iplists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * [Enterprise Only] Update white/black lists
     * @param {module:model/IpbanIPsCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IpbanIPsCollection}
     */
    updateIPs(body) {
      return this.updateIPsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
