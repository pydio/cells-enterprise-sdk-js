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
import AuthOAuth2ConnectorPydioConfigConnector from './AuthOAuth2ConnectorPydioConfigConnector';





/**
* The AuthOAuth2ConnectorPydioConfig model module.
* @module model/AuthOAuth2ConnectorPydioConfig
* @version 2.0
*/
export default class AuthOAuth2ConnectorPydioConfig {
    /**
    * Constructs a new <code>AuthOAuth2ConnectorPydioConfig</code>.
    * @alias module:model/AuthOAuth2ConnectorPydioConfig
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AuthOAuth2ConnectorPydioConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AuthOAuth2ConnectorPydioConfig} obj Optional instance to populate.
    * @return {module:model/AuthOAuth2ConnectorPydioConfig} The populated <code>AuthOAuth2ConnectorPydioConfig</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOAuth2ConnectorPydioConfig();

            
            
            

            if (data.hasOwnProperty('pydioconnectors')) {
                obj['pydioconnectors'] = ApiClient.convertToType(data['pydioconnectors'], [AuthOAuth2ConnectorPydioConfigConnector]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/AuthOAuth2ConnectorPydioConfigConnector>} pydioconnectors
    */
    pydioconnectors = undefined;








}

