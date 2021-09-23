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
import ReportsSharedResourceShareType from './ReportsSharedResourceShareType';
import TreeNodeType from './TreeNodeType';





/**
* The ReportsSharedResourcesRequest model module.
* @module model/ReportsSharedResourcesRequest
* @version 2.0
*/
export default class ReportsSharedResourcesRequest {
    /**
    * Constructs a new <code>ReportsSharedResourcesRequest</code>.
    * @alias module:model/ReportsSharedResourcesRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ReportsSharedResourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ReportsSharedResourcesRequest} obj Optional instance to populate.
    * @return {module:model/ReportsSharedResourcesRequest} The populated <code>ReportsSharedResourcesRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportsSharedResourcesRequest();

            
            
            

            if (data.hasOwnProperty('RootPath')) {
                obj['RootPath'] = ApiClient.convertToType(data['RootPath'], 'String');
            }
            if (data.hasOwnProperty('ShareType')) {
                obj['ShareType'] = ReportsSharedResourceShareType.constructFromObject(data['ShareType']);
            }
            if (data.hasOwnProperty('OwnerUUID')) {
                obj['OwnerUUID'] = ApiClient.convertToType(data['OwnerUUID'], 'String');
            }
            if (data.hasOwnProperty('UsersReadCountMin')) {
                obj['UsersReadCountMin'] = ApiClient.convertToType(data['UsersReadCountMin'], 'Number');
            }
            if (data.hasOwnProperty('UsersReadCountMax')) {
                obj['UsersReadCountMax'] = ApiClient.convertToType(data['UsersReadCountMax'], 'Number');
            }
            if (data.hasOwnProperty('LastUpdatedBefore')) {
                obj['LastUpdatedBefore'] = ApiClient.convertToType(data['LastUpdatedBefore'], 'Number');
            }
            if (data.hasOwnProperty('LastUpdatedSince')) {
                obj['LastUpdatedSince'] = ApiClient.convertToType(data['LastUpdatedSince'], 'Number');
            }
            if (data.hasOwnProperty('RolesReadUUIDs')) {
                obj['RolesReadUUIDs'] = ApiClient.convertToType(data['RolesReadUUIDs'], ['String']);
            }
            if (data.hasOwnProperty('RolesReadAND')) {
                obj['RolesReadAND'] = ApiClient.convertToType(data['RolesReadAND'], 'Boolean');
            }
            if (data.hasOwnProperty('NodeType')) {
                obj['NodeType'] = TreeNodeType.constructFromObject(data['NodeType']);
            }
            if (data.hasOwnProperty('NodeSizeMin')) {
                obj['NodeSizeMin'] = ApiClient.convertToType(data['NodeSizeMin'], 'Number');
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = ApiClient.convertToType(data['Offset'], 'Number');
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} RootPath
    */
    RootPath = undefined;
    /**
    * @member {module:model/ReportsSharedResourceShareType} ShareType
    */
    ShareType = undefined;
    /**
    * @member {String} OwnerUUID
    */
    OwnerUUID = undefined;
    /**
    * @member {Number} UsersReadCountMin
    */
    UsersReadCountMin = undefined;
    /**
    * @member {Number} UsersReadCountMax
    */
    UsersReadCountMax = undefined;
    /**
    * @member {Number} LastUpdatedBefore
    */
    LastUpdatedBefore = undefined;
    /**
    * @member {Number} LastUpdatedSince
    */
    LastUpdatedSince = undefined;
    /**
    * @member {Array.<String>} RolesReadUUIDs
    */
    RolesReadUUIDs = undefined;
    /**
    * @member {Boolean} RolesReadAND
    */
    RolesReadAND = undefined;
    /**
    * @member {module:model/TreeNodeType} NodeType
    */
    NodeType = undefined;
    /**
    * @member {Number} NodeSizeMin
    */
    NodeSizeMin = undefined;
    /**
    * @member {Number} Offset
    */
    Offset = undefined;
    /**
    * @member {Number} Limit
    */
    Limit = undefined;








}


