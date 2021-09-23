"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsActionOutputFilter = _interopRequireDefault(require("./JobsActionOutputFilter"));

var _JobsContextMetaFilter = _interopRequireDefault(require("./JobsContextMetaFilter"));

var _JobsDataSourceSelector = _interopRequireDefault(require("./JobsDataSourceSelector"));

var _JobsIdmSelector = _interopRequireDefault(require("./JobsIdmSelector"));

var _JobsNodesSelector = _interopRequireDefault(require("./JobsNodesSelector"));

var _JobsTriggerFilter = _interopRequireDefault(require("./JobsTriggerFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntSelectorTemplate model module.
* @module model/EntSelectorTemplate
* @version 2.0
*/
var EntSelectorTemplate = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntSelectorTemplate</code>.
  * @alias module:model/EntSelectorTemplate
  * @class
  */
  function EntSelectorTemplate() {
    _classCallCheck(this, EntSelectorTemplate);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "AsFilter", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "NodesSelector", undefined);

    _defineProperty(this, "IdmSelector", undefined);

    _defineProperty(this, "ActionOutputFilter", undefined);

    _defineProperty(this, "ContextMetaFilter", undefined);

    _defineProperty(this, "DataSourceSelector", undefined);

    _defineProperty(this, "TriggerFilter", undefined);
  }
  /**
  * Constructs a <code>EntSelectorTemplate</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntSelectorTemplate} obj Optional instance to populate.
  * @return {module:model/EntSelectorTemplate} The populated <code>EntSelectorTemplate</code> instance.
  */


  _createClass(EntSelectorTemplate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntSelectorTemplate();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('AsFilter')) {
          obj['AsFilter'] = _ApiClient["default"].convertToType(data['AsFilter'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('NodesSelector')) {
          obj['NodesSelector'] = _JobsNodesSelector["default"].constructFromObject(data['NodesSelector']);
        }

        if (data.hasOwnProperty('IdmSelector')) {
          obj['IdmSelector'] = _JobsIdmSelector["default"].constructFromObject(data['IdmSelector']);
        }

        if (data.hasOwnProperty('ActionOutputFilter')) {
          obj['ActionOutputFilter'] = _JobsActionOutputFilter["default"].constructFromObject(data['ActionOutputFilter']);
        }

        if (data.hasOwnProperty('ContextMetaFilter')) {
          obj['ContextMetaFilter'] = _JobsContextMetaFilter["default"].constructFromObject(data['ContextMetaFilter']);
        }

        if (data.hasOwnProperty('DataSourceSelector')) {
          obj['DataSourceSelector'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceSelector']);
        }

        if (data.hasOwnProperty('TriggerFilter')) {
          obj['TriggerFilter'] = _JobsTriggerFilter["default"].constructFromObject(data['TriggerFilter']);
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return EntSelectorTemplate;
}();

exports["default"] = EntSelectorTemplate;
//# sourceMappingURL=EntSelectorTemplate.js.map
