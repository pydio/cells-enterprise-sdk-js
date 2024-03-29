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
 * The LogTimeRangeRequest model module.
 * @module model/LogTimeRangeRequest
 * @version 2.0
 */
class LogTimeRangeRequest {
    /**
     * Constructs a new <code>LogTimeRangeRequest</code>.
     * TimeRangeRequest contains the parameter to configure the query to  retrieve the number of audit events of this type for a given time range defined by last timestamp and a range type.
     * @alias module:model/LogTimeRangeRequest
     */
    constructor() { 
        
        LogTimeRangeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogTimeRangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogTimeRangeRequest} obj Optional instance to populate.
     * @return {module:model/LogTimeRangeRequest} The populated <code>LogTimeRangeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogTimeRangeRequest();

            if (data.hasOwnProperty('MsgId')) {
                obj['MsgId'] = ApiClient.convertToType(data['MsgId'], 'String');
            }
            if (data.hasOwnProperty('RefTime')) {
                obj['RefTime'] = ApiClient.convertToType(data['RefTime'], 'Number');
            }
            if (data.hasOwnProperty('TimeRangeType')) {
                obj['TimeRangeType'] = ApiClient.convertToType(data['TimeRangeType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} MsgId
 */
LogTimeRangeRequest.prototype['MsgId'] = undefined;

/**
 * @member {Number} RefTime
 */
LogTimeRangeRequest.prototype['RefTime'] = undefined;

/**
 * @member {String} TimeRangeType
 */
LogTimeRangeRequest.prototype['TimeRangeType'] = undefined;






export default LogTimeRangeRequest;

