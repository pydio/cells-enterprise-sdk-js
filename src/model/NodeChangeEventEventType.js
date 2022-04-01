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
* Enum class NodeChangeEventEventType.
* @enum {}
* @readonly
*/
export default class NodeChangeEventEventType {
    
        /**
         * value: "CREATE"
         * @const
         */
        "CREATE" = "CREATE";

    
        /**
         * value: "READ"
         * @const
         */
        "READ" = "READ";

    
        /**
         * value: "UPDATE_PATH"
         * @const
         */
        "UPDATE_PATH" = "UPDATE_PATH";

    
        /**
         * value: "UPDATE_CONTENT"
         * @const
         */
        "UPDATE_CONTENT" = "UPDATE_CONTENT";

    
        /**
         * value: "UPDATE_META"
         * @const
         */
        "UPDATE_META" = "UPDATE_META";

    
        /**
         * value: "UPDATE_USER_META"
         * @const
         */
        "UPDATE_USER_META" = "UPDATE_USER_META";

    
        /**
         * value: "DELETE"
         * @const
         */
        "DELETE" = "DELETE";

    

    /**
    * Returns a <code>NodeChangeEventEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/NodeChangeEventEventType} The enum <code>NodeChangeEventEventType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

