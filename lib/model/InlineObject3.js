"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeChangeLog = _interopRequireDefault(require("./TreeChangeLog"));

var _TreeNodeType = _interopRequireDefault(require("./TreeNodeType"));

var _TreeWorkspaceRelativePath = _interopRequireDefault(require("./TreeWorkspaceRelativePath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 2.0
 */
var InlineObject3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject3</code>.
   * @alias module:model/InlineObject3
   */
  function InlineObject3() {
    _classCallCheck(this, InlineObject3);

    InlineObject3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject3();

        if (data.hasOwnProperty('AppearsIn')) {
          obj['AppearsIn'] = _ApiClient["default"].convertToType(data['AppearsIn'], [_TreeWorkspaceRelativePath["default"]]);
        }

        if (data.hasOwnProperty('Commits')) {
          obj['Commits'] = _ApiClient["default"].convertToType(data['Commits'], [_TreeChangeLog["default"]]);
        }

        if (data.hasOwnProperty('Etag')) {
          obj['Etag'] = _ApiClient["default"].convertToType(data['Etag'], 'String');
        }

        if (data.hasOwnProperty('MTime')) {
          obj['MTime'] = _ApiClient["default"].convertToType(data['MTime'], 'String');
        }

        if (data.hasOwnProperty('MetaStore')) {
          obj['MetaStore'] = _ApiClient["default"].convertToType(data['MetaStore'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ApiClient["default"].convertToType(data['Mode'], 'Number');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _TreeNodeType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject3;
}();
/**
 * @member {Array.<module:model/TreeWorkspaceRelativePath>} AppearsIn
 */


InlineObject3.prototype['AppearsIn'] = undefined;
/**
 * @member {Array.<module:model/TreeChangeLog>} Commits
 */

InlineObject3.prototype['Commits'] = undefined;
/**
 * @member {String} Etag
 */

InlineObject3.prototype['Etag'] = undefined;
/**
 * @member {String} MTime
 */

InlineObject3.prototype['MTime'] = undefined;
/**
 * @member {Object.<String, String>} MetaStore
 */

InlineObject3.prototype['MetaStore'] = undefined;
/**
 * @member {Number} Mode
 */

InlineObject3.prototype['Mode'] = undefined;
/**
 * @member {String} Path
 */

InlineObject3.prototype['Path'] = undefined;
/**
 * @member {String} Size
 */

InlineObject3.prototype['Size'] = undefined;
/**
 * @member {module:model/TreeNodeType} Type
 */

InlineObject3.prototype['Type'] = undefined;
var _default = InlineObject3;
exports["default"] = _default;
//# sourceMappingURL=InlineObject3.js.map
