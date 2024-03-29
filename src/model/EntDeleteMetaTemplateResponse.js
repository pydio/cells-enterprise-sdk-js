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
 * The EntDeleteMetaTemplateResponse model module.
 * @module model/EntDeleteMetaTemplateResponse
 * @version 2.0
 */
class EntDeleteMetaTemplateResponse {
    /**
     * Constructs a new <code>EntDeleteMetaTemplateResponse</code>.
     * @alias module:model/EntDeleteMetaTemplateResponse
     */
    constructor() { 
        
        EntDeleteMetaTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntDeleteMetaTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntDeleteMetaTemplateResponse} obj Optional instance to populate.
     * @return {module:model/EntDeleteMetaTemplateResponse} The populated <code>EntDeleteMetaTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntDeleteMetaTemplateResponse();

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
EntDeleteMetaTemplateResponse.prototype['Success'] = undefined;






export default EntDeleteMetaTemplateResponse;

