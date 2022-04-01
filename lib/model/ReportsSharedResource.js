"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportsAuditedWorkspace = _interopRequireDefault(require("./ReportsAuditedWorkspace"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReportsSharedResource model module.
 * @module model/ReportsSharedResource
 * @version 2.0
 */
var ReportsSharedResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportsSharedResource</code>.
   * @alias module:model/ReportsSharedResource
   */
  function ReportsSharedResource() {
    _classCallCheck(this, ReportsSharedResource);

    ReportsSharedResource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportsSharedResource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportsSharedResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportsSharedResource} obj Optional instance to populate.
     * @return {module:model/ReportsSharedResource} The populated <code>ReportsSharedResource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportsSharedResource();

        if (data.hasOwnProperty('ChildrenSharedResources')) {
          obj['ChildrenSharedResources'] = _ApiClient["default"].convertToType(data['ChildrenSharedResources'], 'Number');
        }

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }

        if (data.hasOwnProperty('Workspaces')) {
          obj['Workspaces'] = _ApiClient["default"].convertToType(data['Workspaces'], [_ReportsAuditedWorkspace["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ReportsSharedResource;
}();
/**
 * @member {Number} ChildrenSharedResources
 */


ReportsSharedResource.prototype['ChildrenSharedResources'] = undefined;
/**
 * @member {module:model/TreeNode} Node
 */

ReportsSharedResource.prototype['Node'] = undefined;
/**
 * @member {Array.<module:model/ReportsAuditedWorkspace>} Workspaces
 */

ReportsSharedResource.prototype['Workspaces'] = undefined;
var _default = ReportsSharedResource;
exports["default"] = _default;
//# sourceMappingURL=ReportsSharedResource.js.map
