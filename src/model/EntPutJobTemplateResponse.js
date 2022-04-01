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
import JobsJob from './JobsJob';

/**
 * The EntPutJobTemplateResponse model module.
 * @module model/EntPutJobTemplateResponse
 * @version 2.0
 */
class EntPutJobTemplateResponse {
    /**
     * Constructs a new <code>EntPutJobTemplateResponse</code>.
     * @alias module:model/EntPutJobTemplateResponse
     */
    constructor() { 
        
        EntPutJobTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntPutJobTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntPutJobTemplateResponse} obj Optional instance to populate.
     * @return {module:model/EntPutJobTemplateResponse} The populated <code>EntPutJobTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntPutJobTemplateResponse();

            if (data.hasOwnProperty('Job')) {
                obj['Job'] = JobsJob.constructFromObject(data['Job']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JobsJob} Job
 */
EntPutJobTemplateResponse.prototype['Job'] = undefined;






export default EntPutJobTemplateResponse;

