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


import ApiClient from '../ApiClient';





/**
* The EntListAccessTokensRequest model module.
* @module model/EntListAccessTokensRequest
* @version 2.0
*/
export default class EntListAccessTokensRequest {
    /**
    * Constructs a new <code>EntListAccessTokensRequest</code>.
    * @alias module:model/EntListAccessTokensRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EntListAccessTokensRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EntListAccessTokensRequest} obj Optional instance to populate.
    * @return {module:model/EntListAccessTokensRequest} The populated <code>EntListAccessTokensRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntListAccessTokensRequest();

            
            
            

            if (data.hasOwnProperty('ByUser')) {
                obj['ByUser'] = ApiClient.convertToType(data['ByUser'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} ByUser
    */
    ByUser = undefined;








}


