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
import AuthPersonalAccessToken from './AuthPersonalAccessToken';





/**
* The AuthPatListResponse model module.
* @module model/AuthPatListResponse
* @version 2.0
*/
export default class AuthPatListResponse {
    /**
    * Constructs a new <code>AuthPatListResponse</code>.
    * @alias module:model/AuthPatListResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AuthPatListResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AuthPatListResponse} obj Optional instance to populate.
    * @return {module:model/AuthPatListResponse} The populated <code>AuthPatListResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthPatListResponse();

            
            
            

            if (data.hasOwnProperty('Tokens')) {
                obj['Tokens'] = ApiClient.convertToType(data['Tokens'], [AuthPersonalAccessToken]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/AuthPersonalAccessToken>} Tokens
    */
    Tokens = undefined;








}


