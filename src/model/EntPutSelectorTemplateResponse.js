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
 * The EntPutSelectorTemplateResponse model module.
 * @module model/EntPutSelectorTemplateResponse
 * @version 2.0
 */
class EntPutSelectorTemplateResponse {
    /**
     * Constructs a new <code>EntPutSelectorTemplateResponse</code>.
     * @alias module:model/EntPutSelectorTemplateResponse
     */
    constructor() { 
        
        EntPutSelectorTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntPutSelectorTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPutSelectorTemplateResponse} obj Optional instance to populate.
     * @return {module:model/EntPutSelectorTemplateResponse} The populated <code>EntPutSelectorTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntPutSelectorTemplateResponse();

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
EntPutSelectorTemplateResponse.prototype['Success'] = undefined;






export default EntPutSelectorTemplateResponse;

