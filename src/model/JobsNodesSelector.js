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
 * The JobsNodesSelector model module.
 * @module model/JobsNodesSelector
 * @version 2.0
 */
class JobsNodesSelector {
    /**
     * Constructs a new <code>JobsNodesSelector</code>.
     * @alias module:model/JobsNodesSelector
     */
    constructor() { 
        
        JobsNodesSelector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsNodesSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsNodesSelector} obj Optional instance to populate.
     * @return {module:model/JobsNodesSelector} The populated <code>JobsNodesSelector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsNodesSelector();

            if (data.hasOwnProperty('All')) {
                obj['All'] = ApiClient.convertToType(data['All'], 'Boolean');
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
            if (data.hasOwnProperty('Pathes')) {
                obj['Pathes'] = ApiClient.convertToType(data['Pathes'], ['String']);
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} All
 */
JobsNodesSelector.prototype['All'] = undefined;

/**
 * @member {Boolean} Collect
 */
JobsNodesSelector.prototype['Collect'] = undefined;

/**
 * @member {String} Description
 */
JobsNodesSelector.prototype['Description'] = undefined;

/**
 * @member {Boolean} FanOutInput
 */
JobsNodesSelector.prototype['FanOutInput'] = undefined;

/**
 * @member {String} Label
 */
JobsNodesSelector.prototype['Label'] = undefined;

/**
 * @member {Array.<String>} Pathes
 */
JobsNodesSelector.prototype['Pathes'] = undefined;

/**
 * @member {module:model/ServiceQuery} Query
 */
JobsNodesSelector.prototype['Query'] = undefined;

/**
 * @member {String} Timeout
 */
JobsNodesSelector.prototype['Timeout'] = undefined;






export default JobsNodesSelector;

