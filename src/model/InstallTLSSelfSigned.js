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
 * The InstallTLSSelfSigned model module.
 * @module model/InstallTLSSelfSigned
 * @version 2.0
 */
class InstallTLSSelfSigned {
    /**
     * Constructs a new <code>InstallTLSSelfSigned</code>.
     * @alias module:model/InstallTLSSelfSigned
     */
    constructor() { 
        
        InstallTLSSelfSigned.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstallTLSSelfSigned</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallTLSSelfSigned} obj Optional instance to populate.
     * @return {module:model/InstallTLSSelfSigned} The populated <code>InstallTLSSelfSigned</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallTLSSelfSigned();

            if (data.hasOwnProperty('Hostnames')) {
                obj['Hostnames'] = ApiClient.convertToType(data['Hostnames'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} Hostnames
 */
InstallTLSSelfSigned.prototype['Hostnames'] = undefined;






export default InstallTLSSelfSigned;

