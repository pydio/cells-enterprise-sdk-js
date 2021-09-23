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
* The AuthOAuth2ConnectorPydioConfigConnector model module.
* @module model/AuthOAuth2ConnectorPydioConfigConnector
* @version 2.0
*/
export default class AuthOAuth2ConnectorPydioConfigConnector {
    /**
    * Constructs a new <code>AuthOAuth2ConnectorPydioConfigConnector</code>.
    * @alias module:model/AuthOAuth2ConnectorPydioConfigConnector
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AuthOAuth2ConnectorPydioConfigConnector</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AuthOAuth2ConnectorPydioConfigConnector} obj Optional instance to populate.
    * @return {module:model/AuthOAuth2ConnectorPydioConfigConnector} The populated <code>AuthOAuth2ConnectorPydioConfigConnector</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOAuth2ConnectorPydioConfigConnector();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} type
    */
    type = undefined;








}

