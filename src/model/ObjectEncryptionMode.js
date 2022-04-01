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
* Enum class ObjectEncryptionMode.
* @enum {}
* @readonly
*/
export default class ObjectEncryptionMode {
    
        /**
         * value: "CLEAR"
         * @const
         */
        "CLEAR" = "CLEAR";

    
        /**
         * value: "MASTER"
         * @const
         */
        "MASTER" = "MASTER";

    
        /**
         * value: "USER"
         * @const
         */
        "USER" = "USER";

    
        /**
         * value: "USER_PWD"
         * @const
         */
        "USER_PWD" = "USER_PWD";

    

    /**
    * Returns a <code>ObjectEncryptionMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ObjectEncryptionMode} The enum <code>ObjectEncryptionMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

