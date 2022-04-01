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
import ServiceQuery from './ServiceQuery';

/**
 * The JobsActionOutputFilter model module.
 * @module model/JobsActionOutputFilter
 * @version 2.0
 */
class JobsActionOutputFilter {
    /**
     * Constructs a new <code>JobsActionOutputFilter</code>.
     * @alias module:model/JobsActionOutputFilter
     */
    constructor() { 
        
        JobsActionOutputFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsActionOutputFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsActionOutputFilter} obj Optional instance to populate.
     * @return {module:model/JobsActionOutputFilter} The populated <code>JobsActionOutputFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsActionOutputFilter();

            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Description
 */
JobsActionOutputFilter.prototype['Description'] = undefined;

/**
 * @member {String} Label
 */
JobsActionOutputFilter.prototype['Label'] = undefined;

/**
 * @member {module:model/ServiceQuery} Query
 */
JobsActionOutputFilter.prototype['Query'] = undefined;






export default JobsActionOutputFilter;

