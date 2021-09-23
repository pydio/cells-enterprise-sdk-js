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
* The JobsPutJobRequest model module.
* @module model/JobsPutJobRequest
* @version 2.0
*/
export default class JobsPutJobRequest {
    /**
    * Constructs a new <code>JobsPutJobRequest</code>.
    * @alias module:model/JobsPutJobRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JobsPutJobRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsPutJobRequest} obj Optional instance to populate.
    * @return {module:model/JobsPutJobRequest} The populated <code>JobsPutJobRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsPutJobRequest();

            
            
            

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


