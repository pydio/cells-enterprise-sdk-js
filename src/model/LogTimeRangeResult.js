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
* The LogTimeRangeResult model module.
* @module model/LogTimeRangeResult
* @version 2.0
*/
export default class LogTimeRangeResult {
    /**
    * Constructs a new <code>LogTimeRangeResult</code>.
    * TimeRangeResult represents one point of a graph.
    * @alias module:model/LogTimeRangeResult
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LogTimeRangeResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LogTimeRangeResult} obj Optional instance to populate.
    * @return {module:model/LogTimeRangeResult} The populated <code>LogTimeRangeResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogTimeRangeResult();

            
            
            

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Start')) {
                obj['Start'] = ApiClient.convertToType(data['Start'], 'Number');
            }
            if (data.hasOwnProperty('End')) {
                obj['End'] = ApiClient.convertToType(data['End'], 'Number');
            }
            if (data.hasOwnProperty('Count')) {
                obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
            }
            if (data.hasOwnProperty('Relevance')) {
                obj['Relevance'] = ApiClient.convertToType(data['Relevance'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} Name
    */
    Name = undefined;
    /**
    * @member {Number} Start
    */
    Start = undefined;
    /**
    * @member {Number} End
    */
    End = undefined;
    /**
    * @member {Number} Count
    */
    Count = undefined;
    /**
    * @member {Number} Relevance
    */
    Relevance = undefined;








}


