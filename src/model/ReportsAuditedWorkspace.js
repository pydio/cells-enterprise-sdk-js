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
import IdmRole from './IdmRole';
import IdmUser from './IdmUser';
import IdmWorkspace from './IdmWorkspace';





/**
* The ReportsAuditedWorkspace model module.
* @module model/ReportsAuditedWorkspace
* @version 2.0
*/
export default class ReportsAuditedWorkspace {
    /**
    * Constructs a new <code>ReportsAuditedWorkspace</code>.
    * @alias module:model/ReportsAuditedWorkspace
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ReportsAuditedWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReportsAuditedWorkspace} obj Optional instance to populate.
    * @return {module:model/ReportsAuditedWorkspace} The populated <code>ReportsAuditedWorkspace</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportsAuditedWorkspace();

            
            
            

            if (data.hasOwnProperty('Workspace')) {
                obj['Workspace'] = IdmWorkspace.constructFromObject(data['Workspace']);
            }
            if (data.hasOwnProperty('UsersReadCount')) {
                obj['UsersReadCount'] = ApiClient.convertToType(data['UsersReadCount'], 'Number');
            }
            if (data.hasOwnProperty('UsersWriteCount')) {
                obj['UsersWriteCount'] = ApiClient.convertToType(data['UsersWriteCount'], 'Number');
            }
            if (data.hasOwnProperty('OwnerUser')) {
                obj['OwnerUser'] = IdmUser.constructFromObject(data['OwnerUser']);
            }
            if (data.hasOwnProperty('RolesRead')) {
                obj['RolesRead'] = ApiClient.convertToType(data['RolesRead'], [IdmRole]);
            }
            if (data.hasOwnProperty('RolesWrite')) {
                obj['RolesWrite'] = ApiClient.convertToType(data['RolesWrite'], [IdmRole]);
            }
            if (data.hasOwnProperty('BrokenLink')) {
                obj['BrokenLink'] = ApiClient.convertToType(data['BrokenLink'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/IdmWorkspace} Workspace
    */
    Workspace = undefined;
    /**
    * @member {Number} UsersReadCount
    */
    UsersReadCount = undefined;
    /**
    * @member {Number} UsersWriteCount
    */
    UsersWriteCount = undefined;
    /**
    * @member {module:model/IdmUser} OwnerUser
    */
    OwnerUser = undefined;
    /**
    * @member {Array.<module:model/IdmRole>} RolesRead
    */
    RolesRead = undefined;
    /**
    * @member {Array.<module:model/IdmRole>} RolesWrite
    */
    RolesWrite = undefined;
    /**
    * @member {Boolean} BrokenLink
    */
    BrokenLink = undefined;








}

