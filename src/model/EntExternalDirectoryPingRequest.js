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
import AuthLdapServerConfig from './AuthLdapServerConfig';

/**
 * The EntExternalDirectoryPingRequest model module.
 * @module model/EntExternalDirectoryPingRequest
 * @version 2.0
 */
class EntExternalDirectoryPingRequest {
    /**
     * Constructs a new <code>EntExternalDirectoryPingRequest</code>.
     * @alias module:model/EntExternalDirectoryPingRequest
     */
    constructor() { 
        
        EntExternalDirectoryPingRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntExternalDirectoryPingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntExternalDirectoryPingRequest} obj Optional instance to populate.
     * @return {module:model/EntExternalDirectoryPingRequest} The populated <code>EntExternalDirectoryPingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntExternalDirectoryPingRequest();

            if (data.hasOwnProperty('Bind')) {
                obj['Bind'] = ApiClient.convertToType(data['Bind'], 'Boolean');
            }
            if (data.hasOwnProperty('Config')) {
                obj['Config'] = AuthLdapServerConfig.constructFromObject(data['Config']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Bind
 */
EntExternalDirectoryPingRequest.prototype['Bind'] = undefined;

/**
 * @member {module:model/AuthLdapServerConfig} Config
 */
EntExternalDirectoryPingRequest.prototype['Config'] = undefined;






export default EntExternalDirectoryPingRequest;

