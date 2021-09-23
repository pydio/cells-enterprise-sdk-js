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
import JobsJob from './JobsJob';





/**
* The EntPutJobTemplateResponse model module.
* @module model/EntPutJobTemplateResponse
* @version 2.0
*/
export default class EntPutJobTemplateResponse {
    /**
    * Constructs a new <code>EntPutJobTemplateResponse</code>.
    * @alias module:model/EntPutJobTemplateResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EntPutJobTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EntPutJobTemplateResponse} obj Optional instance to populate.
    * @return {module:model/EntPutJobTemplateResponse} The populated <code>EntPutJobTemplateResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntPutJobTemplateResponse();

            
            
            

            if (data.hasOwnProperty('Job')) {
                obj['Job'] = JobsJob.constructFromObject(data['Job']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/JobsJob} Job
    */
    Job = undefined;








}


