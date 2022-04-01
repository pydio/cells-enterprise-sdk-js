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

/**
 * The TreeWorkspaceRelativePath model module.
 * @module model/TreeWorkspaceRelativePath
 * @version 2.0
 */
class TreeWorkspaceRelativePath {
    /**
     * Constructs a new <code>TreeWorkspaceRelativePath</code>.
     * @alias module:model/TreeWorkspaceRelativePath
     */
    constructor() { 
        
        TreeWorkspaceRelativePath.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TreeWorkspaceRelativePath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeWorkspaceRelativePath} obj Optional instance to populate.
     * @return {module:model/TreeWorkspaceRelativePath} The populated <code>TreeWorkspaceRelativePath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeWorkspaceRelativePath();

            if (data.hasOwnProperty('Path')) {
                obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
            }
            if (data.hasOwnProperty('WsLabel')) {
                obj['WsLabel'] = ApiClient.convertToType(data['WsLabel'], 'String');
            }
            if (data.hasOwnProperty('WsScope')) {
                obj['WsScope'] = ApiClient.convertToType(data['WsScope'], 'String');
            }
            if (data.hasOwnProperty('WsSlug')) {
                obj['WsSlug'] = ApiClient.convertToType(data['WsSlug'], 'String');
            }
            if (data.hasOwnProperty('WsUuid')) {
                obj['WsUuid'] = ApiClient.convertToType(data['WsUuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Path
 */
TreeWorkspaceRelativePath.prototype['Path'] = undefined;

/**
 * @member {String} WsLabel
 */
TreeWorkspaceRelativePath.prototype['WsLabel'] = undefined;

/**
 * @member {String} WsScope
 */
TreeWorkspaceRelativePath.prototype['WsScope'] = undefined;

/**
 * @member {String} WsSlug
 */
TreeWorkspaceRelativePath.prototype['WsSlug'] = undefined;

/**
 * @member {String} WsUuid
 */
TreeWorkspaceRelativePath.prototype['WsUuid'] = undefined;






export default TreeWorkspaceRelativePath;

