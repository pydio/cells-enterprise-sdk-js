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
* Enum class ServiceResourcePolicyPolicyEffect.
* @enum {}
* @readonly
*/
export default class ServiceResourcePolicyPolicyEffect {
    
        /**
         * value: "deny"
         * @const
         */
        "deny" = "deny";

    
        /**
         * value: "allow"
         * @const
         */
        "allow" = "allow";

    

    /**
    * Returns a <code>ServiceResourcePolicyPolicyEffect</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ServiceResourcePolicyPolicyEffect} The enum <code>ServiceResourcePolicyPolicyEffect</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

