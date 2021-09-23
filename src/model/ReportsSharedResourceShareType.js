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
* Enum class ReportsSharedResourceShareType.
* @enum {}
* @readonly
*/
export default class ReportsSharedResourceShareType {
    
        /**
         * value: "ANY"
         * @const
         */
        ANY = "ANY";

    
        /**
         * value: "WORKSPACE"
         * @const
         */
        WORKSPACE = "WORKSPACE";

    
        /**
         * value: "CELL"
         * @const
         */
        CELL = "CELL";

    
        /**
         * value: "LINK"
         * @const
         */
        LINK = "LINK";

    

    /**
    * Returns a <code>ReportsSharedResourceShareType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ReportsSharedResourceShareType} The enum <code>ReportsSharedResourceShareType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


