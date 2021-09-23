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
* Enum class ListLogRequestLogFormat.
* @enum {}
* @readonly
*/
export default class ListLogRequestLogFormat {
    
        /**
         * value: "JSON"
         * @const
         */
        JSON = "JSON";

    
        /**
         * value: "CSV"
         * @const
         */
        CSV = "CSV";

    
        /**
         * value: "XLSX"
         * @const
         */
        XLSX = "XLSX";

    

    /**
    * Returns a <code>ListLogRequestLogFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ListLogRequestLogFormat} The enum <code>ListLogRequestLogFormat</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


