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
import JobsActionOutputFilter from './JobsActionOutputFilter';
import JobsContextMetaFilter from './JobsContextMetaFilter';
import JobsDataSourceSelector from './JobsDataSourceSelector';
import JobsIdmSelector from './JobsIdmSelector';
import JobsNodesSelector from './JobsNodesSelector';
import JobsTriggerFilter from './JobsTriggerFilter';





/**
* The EntSelectorTemplate model module.
* @module model/EntSelectorTemplate
* @version 2.0
*/
export default class EntSelectorTemplate {
    /**
    * Constructs a new <code>EntSelectorTemplate</code>.
    * @alias module:model/EntSelectorTemplate
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EntSelectorTemplate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EntSelectorTemplate} obj Optional instance to populate.
    * @return {module:model/EntSelectorTemplate} The populated <code>EntSelectorTemplate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntSelectorTemplate();

            
            
            

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AsFilter')) {
                obj['AsFilter'] = ApiClient.convertToType(data['AsFilter'], 'Boolean');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('NodesSelector')) {
                obj['NodesSelector'] = JobsNodesSelector.constructFromObject(data['NodesSelector']);
            }
            if (data.hasOwnProperty('IdmSelector')) {
                obj['IdmSelector'] = JobsIdmSelector.constructFromObject(data['IdmSelector']);
            }
            if (data.hasOwnProperty('ActionOutputFilter')) {
                obj['ActionOutputFilter'] = JobsActionOutputFilter.constructFromObject(data['ActionOutputFilter']);
            }
            if (data.hasOwnProperty('ContextMetaFilter')) {
                obj['ContextMetaFilter'] = JobsContextMetaFilter.constructFromObject(data['ContextMetaFilter']);
            }
            if (data.hasOwnProperty('DataSourceSelector')) {
                obj['DataSourceSelector'] = JobsDataSourceSelector.constructFromObject(data['DataSourceSelector']);
            }
            if (data.hasOwnProperty('TriggerFilter')) {
                obj['TriggerFilter'] = JobsTriggerFilter.constructFromObject(data['TriggerFilter']);
            }
        }
        return obj;
    }

    /**
    * @member {String} Name
    */
    Name = undefined;
    /**
    * @member {Boolean} AsFilter
    */
    AsFilter = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {String} Description
    */
    Description = undefined;
    /**
    * @member {module:model/JobsNodesSelector} NodesSelector
    */
    NodesSelector = undefined;
    /**
    * @member {module:model/JobsIdmSelector} IdmSelector
    */
    IdmSelector = undefined;
    /**
    * @member {module:model/JobsActionOutputFilter} ActionOutputFilter
    */
    ActionOutputFilter = undefined;
    /**
    * @member {module:model/JobsContextMetaFilter} ContextMetaFilter
    */
    ContextMetaFilter = undefined;
    /**
    * @member {module:model/JobsDataSourceSelector} DataSourceSelector
    */
    DataSourceSelector = undefined;
    /**
    * @member {module:model/JobsTriggerFilter} TriggerFilter
    */
    TriggerFilter = undefined;








}


