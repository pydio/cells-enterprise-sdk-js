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
import EntSelectorTemplate from './EntSelectorTemplate';

/**
 * The EntPutSelectorTemplateRequest model module.
 * @module model/EntPutSelectorTemplateRequest
 * @version 2.0
 */
class EntPutSelectorTemplateRequest {
    /**
     * Constructs a new <code>EntPutSelectorTemplateRequest</code>.
     * @alias module:model/EntPutSelectorTemplateRequest
     */
    constructor() { 
        
        EntPutSelectorTemplateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntPutSelectorTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPutSelectorTemplateRequest} obj Optional instance to populate.
     * @return {module:model/EntPutSelectorTemplateRequest} The populated <code>EntPutSelectorTemplateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntPutSelectorTemplateRequest();

            if (data.hasOwnProperty('Template')) {
                obj['Template'] = EntSelectorTemplate.constructFromObject(data['Template']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EntSelectorTemplate} Template
 */
EntPutSelectorTemplateRequest.prototype['Template'] = undefined;






export default EntPutSelectorTemplateRequest;

