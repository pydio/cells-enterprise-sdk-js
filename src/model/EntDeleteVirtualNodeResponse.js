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
* The EntDeleteVirtualNodeResponse model module.
* @module model/EntDeleteVirtualNodeResponse
* @version 2.0
*/
export default class EntDeleteVirtualNodeResponse {
    /**
    * Constructs a new <code>EntDeleteVirtualNodeResponse</code>.
    * @alias module:model/EntDeleteVirtualNodeResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EntDeleteVirtualNodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EntDeleteVirtualNodeResponse} obj Optional instance to populate.
    * @return {module:model/EntDeleteVirtualNodeResponse} The populated <code>EntDeleteVirtualNodeResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntDeleteVirtualNodeResponse();

            
            
            

            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} Success
    */
    Success = undefined;








}

