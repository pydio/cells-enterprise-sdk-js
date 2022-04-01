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
import NodeChangeEventEventType from './NodeChangeEventEventType';
import TreeNode from './TreeNode';

/**
 * The TreeNodeChangeEvent model module.
 * @module model/TreeNodeChangeEvent
 * @version 2.0
 */
class TreeNodeChangeEvent {
    /**
     * Constructs a new <code>TreeNodeChangeEvent</code>.
     * @alias module:model/TreeNodeChangeEvent
     */
    constructor() { 
        
        TreeNodeChangeEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TreeNodeChangeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeNodeChangeEvent} obj Optional instance to populate.
     * @return {module:model/TreeNodeChangeEvent} The populated <code>TreeNodeChangeEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeNodeChangeEvent();

            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Optimistic')) {
                obj['Optimistic'] = ApiClient.convertToType(data['Optimistic'], 'Boolean');
            }
            if (data.hasOwnProperty('Silent')) {
                obj['Silent'] = ApiClient.convertToType(data['Silent'], 'Boolean');
            }
            if (data.hasOwnProperty('Source')) {
                obj['Source'] = TreeNode.constructFromObject(data['Source']);
            }
            if (data.hasOwnProperty('Target')) {
                obj['Target'] = TreeNode.constructFromObject(data['Target']);
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = NodeChangeEventEventType.constructFromObject(data['Type']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} Metadata
 */
TreeNodeChangeEvent.prototype['Metadata'] = undefined;

/**
 * @member {Boolean} Optimistic
 */
TreeNodeChangeEvent.prototype['Optimistic'] = undefined;

/**
 * @member {Boolean} Silent
 */
TreeNodeChangeEvent.prototype['Silent'] = undefined;

/**
 * @member {module:model/TreeNode} Source
 */
TreeNodeChangeEvent.prototype['Source'] = undefined;

/**
 * @member {module:model/TreeNode} Target
 */
TreeNodeChangeEvent.prototype['Target'] = undefined;

/**
 * @member {module:model/NodeChangeEventEventType} Type
 */
TreeNodeChangeEvent.prototype['Type'] = undefined;






export default TreeNodeChangeEvent;

