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
import JobsActionOutputFilter from './JobsActionOutputFilter';
import JobsContextMetaFilter from './JobsContextMetaFilter';
import JobsDataSourceSelector from './JobsDataSourceSelector';
import JobsIdmSelector from './JobsIdmSelector';
import JobsNodesSelector from './JobsNodesSelector';
import JobsTriggerFilter from './JobsTriggerFilter';
import JobsUsersSelector from './JobsUsersSelector';

/**
 * The JobsAction model module.
 * @module model/JobsAction
 * @version 2.0
 */
class JobsAction {
    /**
     * Constructs a new <code>JobsAction</code>.
     * @alias module:model/JobsAction
     */
    constructor() { 
        
        JobsAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsAction} obj Optional instance to populate.
     * @return {module:model/JobsAction} The populated <code>JobsAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsAction();

            if (data.hasOwnProperty('ActionOutputFilter')) {
                obj['ActionOutputFilter'] = JobsActionOutputFilter.constructFromObject(data['ActionOutputFilter']);
            }
            if (data.hasOwnProperty('BreakAfter')) {
                obj['BreakAfter'] = ApiClient.convertToType(data['BreakAfter'], 'Boolean');
            }
            if (data.hasOwnProperty('Bypass')) {
                obj['Bypass'] = ApiClient.convertToType(data['Bypass'], 'Boolean');
            }
            if (data.hasOwnProperty('ChainedActions')) {
                obj['ChainedActions'] = ApiClient.convertToType(data['ChainedActions'], [JobsAction]);
            }
            if (data.hasOwnProperty('ContextMetaFilter')) {
                obj['ContextMetaFilter'] = JobsContextMetaFilter.constructFromObject(data['ContextMetaFilter']);
            }
            if (data.hasOwnProperty('DataSourceFilter')) {
                obj['DataSourceFilter'] = JobsDataSourceSelector.constructFromObject(data['DataSourceFilter']);
            }
            if (data.hasOwnProperty('DataSourceSelector')) {
                obj['DataSourceSelector'] = JobsDataSourceSelector.constructFromObject(data['DataSourceSelector']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('FailedFilterActions')) {
                obj['FailedFilterActions'] = ApiClient.convertToType(data['FailedFilterActions'], [JobsAction]);
            }
            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('IdmFilter')) {
                obj['IdmFilter'] = JobsIdmSelector.constructFromObject(data['IdmFilter']);
            }
            if (data.hasOwnProperty('IdmSelector')) {
                obj['IdmSelector'] = JobsIdmSelector.constructFromObject(data['IdmSelector']);
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('NodesFilter')) {
                obj['NodesFilter'] = JobsNodesSelector.constructFromObject(data['NodesFilter']);
            }
            if (data.hasOwnProperty('NodesSelector')) {
                obj['NodesSelector'] = JobsNodesSelector.constructFromObject(data['NodesSelector']);
            }
            if (data.hasOwnProperty('Parameters')) {
                obj['Parameters'] = ApiClient.convertToType(data['Parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'String');
            }
            if (data.hasOwnProperty('TriggerFilter')) {
                obj['TriggerFilter'] = JobsTriggerFilter.constructFromObject(data['TriggerFilter']);
            }
            if (data.hasOwnProperty('UsersFilter')) {
                obj['UsersFilter'] = JobsUsersSelector.constructFromObject(data['UsersFilter']);
            }
            if (data.hasOwnProperty('UsersSelector')) {
                obj['UsersSelector'] = JobsUsersSelector.constructFromObject(data['UsersSelector']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JobsActionOutputFilter} ActionOutputFilter
 */
JobsAction.prototype['ActionOutputFilter'] = undefined;

/**
 * @member {Boolean} BreakAfter
 */
JobsAction.prototype['BreakAfter'] = undefined;

/**
 * @member {Boolean} Bypass
 */
JobsAction.prototype['Bypass'] = undefined;

/**
 * @member {Array.<module:model/JobsAction>} ChainedActions
 */
JobsAction.prototype['ChainedActions'] = undefined;

/**
 * @member {module:model/JobsContextMetaFilter} ContextMetaFilter
 */
JobsAction.prototype['ContextMetaFilter'] = undefined;

/**
 * @member {module:model/JobsDataSourceSelector} DataSourceFilter
 */
JobsAction.prototype['DataSourceFilter'] = undefined;

/**
 * @member {module:model/JobsDataSourceSelector} DataSourceSelector
 */
JobsAction.prototype['DataSourceSelector'] = undefined;

/**
 * @member {String} Description
 */
JobsAction.prototype['Description'] = undefined;

/**
 * @member {Array.<module:model/JobsAction>} FailedFilterActions
 */
JobsAction.prototype['FailedFilterActions'] = undefined;

/**
 * @member {String} ID
 */
JobsAction.prototype['ID'] = undefined;

/**
 * @member {module:model/JobsIdmSelector} IdmFilter
 */
JobsAction.prototype['IdmFilter'] = undefined;

/**
 * @member {module:model/JobsIdmSelector} IdmSelector
 */
JobsAction.prototype['IdmSelector'] = undefined;

/**
 * @member {String} Label
 */
JobsAction.prototype['Label'] = undefined;

/**
 * @member {module:model/JobsNodesSelector} NodesFilter
 */
JobsAction.prototype['NodesFilter'] = undefined;

/**
 * @member {module:model/JobsNodesSelector} NodesSelector
 */
JobsAction.prototype['NodesSelector'] = undefined;

/**
 * @member {Object.<String, String>} Parameters
 */
JobsAction.prototype['Parameters'] = undefined;

/**
 * @member {String} Timeout
 */
JobsAction.prototype['Timeout'] = undefined;

/**
 * @member {module:model/JobsTriggerFilter} TriggerFilter
 */
JobsAction.prototype['TriggerFilter'] = undefined;

/**
 * @member {module:model/JobsUsersSelector} UsersFilter
 */
JobsAction.prototype['UsersFilter'] = undefined;

/**
 * @member {module:model/JobsUsersSelector} UsersSelector
 */
JobsAction.prototype['UsersSelector'] = undefined;






export default JobsAction;

