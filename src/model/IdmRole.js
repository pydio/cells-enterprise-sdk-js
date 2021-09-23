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
import ServiceResourcePolicy from './ServiceResourcePolicy';





/**
* The IdmRole model module.
* @module model/IdmRole
* @version 2.0
*/
export default class IdmRole {
    /**
    * Constructs a new <code>IdmRole</code>.
    * Role represents a generic set of permissions that can be applied to any users or groups.
    * @alias module:model/IdmRole
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IdmRole</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmRole} obj Optional instance to populate.
    * @return {module:model/IdmRole} The populated <code>IdmRole</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmRole();

            
            
            

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('IsTeam')) {
                obj['IsTeam'] = ApiClient.convertToType(data['IsTeam'], 'Boolean');
            }
            if (data.hasOwnProperty('GroupRole')) {
                obj['GroupRole'] = ApiClient.convertToType(data['GroupRole'], 'Boolean');
            }
            if (data.hasOwnProperty('UserRole')) {
                obj['UserRole'] = ApiClient.convertToType(data['UserRole'], 'Boolean');
            }
            if (data.hasOwnProperty('LastUpdated')) {
                obj['LastUpdated'] = ApiClient.convertToType(data['LastUpdated'], 'Number');
            }
            if (data.hasOwnProperty('AutoApplies')) {
                obj['AutoApplies'] = ApiClient.convertToType(data['AutoApplies'], ['String']);
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = ApiClient.convertToType(data['Policies'], [ServiceResourcePolicy]);
            }
            if (data.hasOwnProperty('PoliciesContextEditable')) {
                obj['PoliciesContextEditable'] = ApiClient.convertToType(data['PoliciesContextEditable'], 'Boolean');
            }
            if (data.hasOwnProperty('ForceOverride')) {
                obj['ForceOverride'] = ApiClient.convertToType(data['ForceOverride'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} Uuid
    */
    Uuid = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {Boolean} IsTeam
    */
    IsTeam = undefined;
    /**
    * @member {Boolean} GroupRole
    */
    GroupRole = undefined;
    /**
    * @member {Boolean} UserRole
    */
    UserRole = undefined;
    /**
    * @member {Number} LastUpdated
    */
    LastUpdated = undefined;
    /**
    * @member {Array.<String>} AutoApplies
    */
    AutoApplies = undefined;
    /**
    * @member {Array.<module:model/ServiceResourcePolicy>} Policies
    */
    Policies = undefined;
    /**
    * @member {Boolean} PoliciesContextEditable
    */
    PoliciesContextEditable = undefined;
    /**
    * Is used in a stack of roles, this one will always be applied last.
    * @member {Boolean} ForceOverride
    */
    ForceOverride = undefined;








}


