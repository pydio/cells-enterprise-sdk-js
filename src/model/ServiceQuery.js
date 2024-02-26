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
import ProtobufAny from './ProtobufAny';
import ServiceOperationType from './ServiceOperationType';
import ServiceResourcePolicyQuery from './ServiceResourcePolicyQuery';

/**
 * The ServiceQuery model module.
 * @module model/ServiceQuery
 * @version 2.0
 */
class ServiceQuery {
    /**
     * Constructs a new <code>ServiceQuery</code>.
     * @alias module:model/ServiceQuery
     */
    constructor() { 
        
        ServiceQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceQuery} obj Optional instance to populate.
     * @return {module:model/ServiceQuery} The populated <code>ServiceQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceQuery();

            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'String');
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = ApiClient.convertToType(data['Offset'], 'String');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = ServiceOperationType.constructFromObject(data['Operation']);
            }
            if (data.hasOwnProperty('ResourcePolicyQuery')) {
                obj['ResourcePolicyQuery'] = ServiceResourcePolicyQuery.constructFromObject(data['ResourcePolicyQuery']);
            }
            if (data.hasOwnProperty('SortDesc')) {
                obj['SortDesc'] = ApiClient.convertToType(data['SortDesc'], 'Boolean');
            }
            if (data.hasOwnProperty('SortField')) {
                obj['SortField'] = ApiClient.convertToType(data['SortField'], 'String');
            }
            if (data.hasOwnProperty('SubQueries')) {
                obj['SubQueries'] = ApiClient.convertToType(data['SubQueries'], [ProtobufAny]);
            }
            if (data.hasOwnProperty('groupBy')) {
                obj['groupBy'] = ApiClient.convertToType(data['groupBy'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Limit
 */
ServiceQuery.prototype['Limit'] = undefined;

/**
 * @member {String} Offset
 */
ServiceQuery.prototype['Offset'] = undefined;

/**
 * @member {module:model/ServiceOperationType} Operation
 */
ServiceQuery.prototype['Operation'] = undefined;

/**
 * @member {module:model/ServiceResourcePolicyQuery} ResourcePolicyQuery
 */
ServiceQuery.prototype['ResourcePolicyQuery'] = undefined;

/**
 * @member {Boolean} SortDesc
 */
ServiceQuery.prototype['SortDesc'] = undefined;

/**
 * @member {String} SortField
 */
ServiceQuery.prototype['SortField'] = undefined;

/**
 * @member {Array.<module:model/ProtobufAny>} SubQueries
 */
ServiceQuery.prototype['SubQueries'] = undefined;

/**
 * @member {Number} groupBy
 */
ServiceQuery.prototype['groupBy'] = undefined;






export default ServiceQuery;

