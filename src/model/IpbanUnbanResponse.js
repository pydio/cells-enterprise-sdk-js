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
 * The IpbanUnbanResponse model module.
 * @module model/IpbanUnbanResponse
 * @version 2.0
 */
class IpbanUnbanResponse {
    /**
     * Constructs a new <code>IpbanUnbanResponse</code>.
     * @alias module:model/IpbanUnbanResponse
     */
    constructor() { 
        
        IpbanUnbanResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IpbanUnbanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IpbanUnbanResponse} obj Optional instance to populate.
     * @return {module:model/IpbanUnbanResponse} The populated <code>IpbanUnbanResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IpbanUnbanResponse();

            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Success
 */
IpbanUnbanResponse.prototype['Success'] = undefined;






export default IpbanUnbanResponse;

