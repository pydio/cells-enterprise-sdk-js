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
* The CertPutLicenseInfoResponse model module.
* @module model/CertPutLicenseInfoResponse
* @version 2.0
*/
export default class CertPutLicenseInfoResponse {
    /**
    * Constructs a new <code>CertPutLicenseInfoResponse</code>.
    * @alias module:model/CertPutLicenseInfoResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CertPutLicenseInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CertPutLicenseInfoResponse} obj Optional instance to populate.
    * @return {module:model/CertPutLicenseInfoResponse} The populated <code>CertPutLicenseInfoResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertPutLicenseInfoResponse();

            
            
            

            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
            if (data.hasOwnProperty('ErrorInvalid')) {
                obj['ErrorInvalid'] = ApiClient.convertToType(data['ErrorInvalid'], 'Boolean');
            }
            if (data.hasOwnProperty('ErrorWrite')) {
                obj['ErrorWrite'] = ApiClient.convertToType(data['ErrorWrite'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} Success
    */
    Success = undefined;
    /**
    * @member {Boolean} ErrorInvalid
    */
    ErrorInvalid = undefined;
    /**
    * @member {Boolean} ErrorWrite
    */
    ErrorWrite = undefined;








}

