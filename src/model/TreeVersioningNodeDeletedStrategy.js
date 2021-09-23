/**
 * Pydio Cells Enterprise Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';


/**
* Enum class TreeVersioningNodeDeletedStrategy.
* @enum {}
* @readonly
*/
export default class TreeVersioningNodeDeletedStrategy {
    
        /**
         * value: "KeepAll"
         * @const
         */
        KeepAll = "KeepAll";

    
        /**
         * value: "KeepLast"
         * @const
         */
        KeepLast = "KeepLast";

    
        /**
         * value: "KeepNone"
         * @const
         */
        KeepNone = "KeepNone";

    

    /**
    * Returns a <code>TreeVersioningNodeDeletedStrategy</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TreeVersioningNodeDeletedStrategy} The enum <code>TreeVersioningNodeDeletedStrategy</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


