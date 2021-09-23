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
* Enum class ObjectEncryptionMode.
* @enum {}
* @readonly
*/
export default class ObjectEncryptionMode {
    
        /**
         * value: "CLEAR"
         * @const
         */
        CLEAR = "CLEAR";

    
        /**
         * value: "MASTER"
         * @const
         */
        MASTER = "MASTER";

    
        /**
         * value: "USER"
         * @const
         */
        USER = "USER";

    
        /**
         * value: "USER_PWD"
         * @const
         */
        USER_PWD = "USER_PWD";

    

    /**
    * Returns a <code>ObjectEncryptionMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ObjectEncryptionMode} The enum <code>ObjectEncryptionMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


