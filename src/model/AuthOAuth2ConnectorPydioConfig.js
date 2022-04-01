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

import ApiClient from '../ApiClient';
import AuthOAuth2ConnectorPydioConfigConnector from './AuthOAuth2ConnectorPydioConfigConnector';

/**
 * The AuthOAuth2ConnectorPydioConfig model module.
 * @module model/AuthOAuth2ConnectorPydioConfig
 * @version 2.0
 */
class AuthOAuth2ConnectorPydioConfig {
    /**
     * Constructs a new <code>AuthOAuth2ConnectorPydioConfig</code>.
     * @alias module:model/AuthOAuth2ConnectorPydioConfig
     */
    constructor() { 
        
        AuthOAuth2ConnectorPydioConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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


}

/**
 * @member {Array.<module:model/AuthOAuth2ConnectorPydioConfigConnector>} pydioconnectors
 */
AuthOAuth2ConnectorPydioConfig.prototype['pydioconnectors'] = undefined;






export default AuthOAuth2ConnectorPydioConfig;

