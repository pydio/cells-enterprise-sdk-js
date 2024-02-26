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
import JobsIdmSelectorType from './JobsIdmSelectorType';
import JobsSelectorRange from './JobsSelectorRange';
import ServiceQuery from './ServiceQuery';

/**
 * The JobsIdmSelector model module.
 * @module model/JobsIdmSelector
 * @version 2.0
 */
class JobsIdmSelector {
    /**
     * Constructs a new <code>JobsIdmSelector</code>.
     * @alias module:model/JobsIdmSelector
     */
    constructor() { 
        
        JobsIdmSelector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsIdmSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsIdmSelector} obj Optional instance to populate.
     * @return {module:model/JobsIdmSelector} The populated <code>JobsIdmSelector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsIdmSelector();

            if (data.hasOwnProperty('All')) {
                obj['All'] = ApiClient.convertToType(data['All'], 'Boolean');
            }
            if (data.hasOwnProperty('ClearInput')) {
                obj['ClearInput'] = ApiClient.convertToType(data['ClearInput'], 'Boolean');
            }
            if (data.hasOwnProperty('Collect')) {
                obj['Collect'] = ApiClient.convertToType(data['Collect'], 'Boolean');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('FanOutInput')) {
                obj['FanOutInput'] = ApiClient.convertToType(data['FanOutInput'], 'Boolean');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
            if (data.hasOwnProperty('Range')) {
                obj['Range'] = JobsSelectorRange.constructFromObject(data['Range']);
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = JobsIdmSelectorType.constructFromObject(data['Type']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} All
 */
JobsIdmSelector.prototype['All'] = undefined;

/**
 * @member {Boolean} ClearInput
 */
JobsIdmSelector.prototype['ClearInput'] = undefined;

/**
 * @member {Boolean} Collect
 */
JobsIdmSelector.prototype['Collect'] = undefined;

/**
 * @member {String} Description
 */
JobsIdmSelector.prototype['Description'] = undefined;

/**
 * @member {Boolean} FanOutInput
 */
JobsIdmSelector.prototype['FanOutInput'] = undefined;

/**
 * @member {String} Label
 */
JobsIdmSelector.prototype['Label'] = undefined;

/**
 * @member {module:model/ServiceQuery} Query
 */
JobsIdmSelector.prototype['Query'] = undefined;

/**
 * @member {module:model/JobsSelectorRange} Range
 */
JobsIdmSelector.prototype['Range'] = undefined;

/**
 * @member {String} Timeout
 */
JobsIdmSelector.prototype['Timeout'] = undefined;

/**
 * @member {module:model/JobsIdmSelectorType} Type
 */
JobsIdmSelector.prototype['Type'] = undefined;






export default JobsIdmSelector;

