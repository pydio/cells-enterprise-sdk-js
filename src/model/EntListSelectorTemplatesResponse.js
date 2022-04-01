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
 * The EntListSelectorTemplatesResponse model module.
 * @module model/EntListSelectorTemplatesResponse
 * @version 2.0
 */
class EntListSelectorTemplatesResponse {
    /**
     * Constructs a new <code>EntListSelectorTemplatesResponse</code>.
     * @alias module:model/EntListSelectorTemplatesResponse
     */
    constructor() { 
        
        EntListSelectorTemplatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntListSelectorTemplatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntListSelectorTemplatesResponse} obj Optional instance to populate.
     * @return {module:model/EntListSelectorTemplatesResponse} The populated <code>EntListSelectorTemplatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntListSelectorTemplatesResponse();

            if (data.hasOwnProperty('Templates')) {
                obj['Templates'] = ApiClient.convertToType(data['Templates'], [EntSelectorTemplate]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EntSelectorTemplate>} Templates
 */
EntListSelectorTemplatesResponse.prototype['Templates'] = undefined;






export default EntListSelectorTemplatesResponse;

