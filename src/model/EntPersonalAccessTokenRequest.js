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
* The EntPersonalAccessTokenRequest model module.
* @module model/EntPersonalAccessTokenRequest
* @version 2.0
*/
export default class EntPersonalAccessTokenRequest {
    /**
    * Constructs a new <code>EntPersonalAccessTokenRequest</code>.
    * @alias module:model/EntPersonalAccessTokenRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EntPersonalAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EntPersonalAccessTokenRequest} obj Optional instance to populate.
    * @return {module:model/EntPersonalAccessTokenRequest} The populated <code>EntPersonalAccessTokenRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntPersonalAccessTokenRequest();

            
            
            

            if (data.hasOwnProperty('UserLogin')) {
                obj['UserLogin'] = ApiClient.convertToType(data['UserLogin'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('ExpiresAt')) {
                obj['ExpiresAt'] = ApiClient.convertToType(data['ExpiresAt'], 'String');
            }
            if (data.hasOwnProperty('AutoRefresh')) {
                obj['AutoRefresh'] = ApiClient.convertToType(data['AutoRefresh'], 'Number');
            }
            if (data.hasOwnProperty('Scopes')) {
                obj['Scopes'] = ApiClient.convertToType(data['Scopes'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} UserLogin
    */
    UserLogin = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {String} ExpiresAt
    */
    ExpiresAt = undefined;
    /**
    * @member {Number} AutoRefresh
    */
    AutoRefresh = undefined;
    /**
    * @member {Array.<String>} Scopes
    */
    Scopes = undefined;








}


