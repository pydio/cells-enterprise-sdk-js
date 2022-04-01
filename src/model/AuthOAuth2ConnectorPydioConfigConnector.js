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

/**
 * The AuthOAuth2ConnectorPydioConfigConnector model module.
 * @module model/AuthOAuth2ConnectorPydioConfigConnector
 * @version 2.0
 */
class AuthOAuth2ConnectorPydioConfigConnector {
    /**
     * Constructs a new <code>AuthOAuth2ConnectorPydioConfigConnector</code>.
     * @alias module:model/AuthOAuth2ConnectorPydioConfigConnector
     */
    constructor() { 
        
        AuthOAuth2ConnectorPydioConfigConnector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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


}

/**
 * @member {Number} id
 */
AuthOAuth2ConnectorPydioConfigConnector.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AuthOAuth2ConnectorPydioConfigConnector.prototype['name'] = undefined;

/**
 * @member {String} type
 */
AuthOAuth2ConnectorPydioConfigConnector.prototype['type'] = undefined;






export default AuthOAuth2ConnectorPydioConfigConnector;

