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
import IpbanBannedConnection from './IpbanBannedConnection';

/**
 * The IpbanListBansCollection model module.
 * @module model/IpbanListBansCollection
 * @version 2.0
 */
class IpbanListBansCollection {
    /**
     * Constructs a new <code>IpbanListBansCollection</code>.
     * @alias module:model/IpbanListBansCollection
     */
    constructor() { 
        
        IpbanListBansCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IpbanListBansCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IpbanListBansCollection} obj Optional instance to populate.
     * @return {module:model/IpbanListBansCollection} The populated <code>IpbanListBansCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IpbanListBansCollection();

            if (data.hasOwnProperty('Bans')) {
                obj['Bans'] = ApiClient.convertToType(data['Bans'], [IpbanBannedConnection]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IpbanBannedConnection>} Bans
 */
IpbanListBansCollection.prototype['Bans'] = undefined;






export default IpbanListBansCollection;

