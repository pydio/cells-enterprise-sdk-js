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
import ServiceResourcePolicy from './ServiceResourcePolicy';

/**
 * The EntMetaTemplate model module.
 * @module model/EntMetaTemplate
 * @version 2.0
 */
class EntMetaTemplate {
    /**
     * Constructs a new <code>EntMetaTemplate</code>.
     * @alias module:model/EntMetaTemplate
     */
    constructor() { 
        
        EntMetaTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntMetaTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntMetaTemplate} obj Optional instance to populate.
     * @return {module:model/EntMetaTemplate} The populated <code>EntMetaTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntMetaTemplate();

            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Meta')) {
                obj['Meta'] = ApiClient.convertToType(data['Meta'], 'String');
            }
            if (data.hasOwnProperty('Namespace')) {
                obj['Namespace'] = ApiClient.convertToType(data['Namespace'], 'String');
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = ApiClient.convertToType(data['Policies'], [ServiceResourcePolicy]);
            }
            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Label
 */
EntMetaTemplate.prototype['Label'] = undefined;

/**
 * @member {String} Meta
 */
EntMetaTemplate.prototype['Meta'] = undefined;

/**
 * @member {String} Namespace
 */
EntMetaTemplate.prototype['Namespace'] = undefined;

/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */
EntMetaTemplate.prototype['Policies'] = undefined;

/**
 * @member {String} Uuid
 */
EntMetaTemplate.prototype['Uuid'] = undefined;






export default EntMetaTemplate;

