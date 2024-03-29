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
 * The EntJobVersion model module.
 * @module model/EntJobVersion
 * @version 2.0
 */
class EntJobVersion {
    /**
     * Constructs a new <code>EntJobVersion</code>.
     * @alias module:model/EntJobVersion
     */
    constructor() { 
        
        EntJobVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntJobVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntJobVersion} obj Optional instance to populate.
     * @return {module:model/EntJobVersion} The populated <code>EntJobVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntJobVersion();

            if (data.hasOwnProperty('Date')) {
                obj['Date'] = ApiClient.convertToType(data['Date'], 'Number');
            }
            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('Job')) {
                obj['Job'] = JobsJob.constructFromObject(data['Job']);
            }
            if (data.hasOwnProperty('JobID')) {
                obj['JobID'] = ApiClient.convertToType(data['JobID'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Date
 */
EntJobVersion.prototype['Date'] = undefined;

/**
 * @member {String} ID
 */
EntJobVersion.prototype['ID'] = undefined;

/**
 * @member {module:model/JobsJob} Job
 */
EntJobVersion.prototype['Job'] = undefined;

/**
 * @member {String} JobID
 */
EntJobVersion.prototype['JobID'] = undefined;

/**
 * @member {String} Label
 */
EntJobVersion.prototype['Label'] = undefined;






export default EntJobVersion;

