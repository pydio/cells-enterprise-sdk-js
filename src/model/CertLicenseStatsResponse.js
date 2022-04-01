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
import CertLicenseInfo from './CertLicenseInfo';

/**
 * The CertLicenseStatsResponse model module.
 * @module model/CertLicenseStatsResponse
 * @version 2.0
 */
class CertLicenseStatsResponse {
    /**
     * Constructs a new <code>CertLicenseStatsResponse</code>.
     * @alias module:model/CertLicenseStatsResponse
     */
    constructor() { 
        
        CertLicenseStatsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertLicenseStatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertLicenseStatsResponse} obj Optional instance to populate.
     * @return {module:model/CertLicenseStatsResponse} The populated <code>CertLicenseStatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertLicenseStatsResponse();

            if (data.hasOwnProperty('ActivePeers')) {
                obj['ActivePeers'] = ApiClient.convertToType(data['ActivePeers'], 'String');
            }
            if (data.hasOwnProperty('ActiveUsers')) {
                obj['ActiveUsers'] = ApiClient.convertToType(data['ActiveUsers'], 'String');
            }
            if (data.hasOwnProperty('License')) {
                obj['License'] = CertLicenseInfo.constructFromObject(data['License']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} ActivePeers
 */
CertLicenseStatsResponse.prototype['ActivePeers'] = undefined;

/**
 * @member {String} ActiveUsers
 */
CertLicenseStatsResponse.prototype['ActiveUsers'] = undefined;

/**
 * @member {module:model/CertLicenseInfo} License
 */
CertLicenseStatsResponse.prototype['License'] = undefined;






export default CertLicenseStatsResponse;

