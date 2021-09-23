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
* The EntConnector model module.
* @module model/EntConnector
* @version 2.0
*/
export default class EntConnector {
    /**
    * Constructs a new <code>EntConnector</code>.
    * @alias module:model/EntConnector
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EntConnector</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EntConnector} obj Optional instance to populate.
    * @return {module:model/EntConnector} The populated <code>EntConnector</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntConnector();

            
            
            

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} Id
    */
    Id = undefined;
    /**
    * @member {String} Name
    */
    Name = undefined;
    /**
    * @member {String} Type
    */
    Type = undefined;








}

