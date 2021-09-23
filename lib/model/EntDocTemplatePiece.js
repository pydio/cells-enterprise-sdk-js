"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EntDocTemplatePiece model module.
* @module model/EntDocTemplatePiece
* @version 2.0
*/
var EntDocTemplatePiece = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntDocTemplatePiece</code>.
  * @alias module:model/EntDocTemplatePiece
  * @class
  */
  function EntDocTemplatePiece() {
    _classCallCheck(this, EntDocTemplatePiece);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Context", undefined);

    _defineProperty(this, "Short", undefined);

    _defineProperty(this, "Long", undefined);
  }
  /**
  * Constructs a <code>EntDocTemplatePiece</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntDocTemplatePiece} obj Optional instance to populate.
  * @return {module:model/EntDocTemplatePiece} The populated <code>EntDocTemplatePiece</code> instance.
  */


  _createClass(EntDocTemplatePiece, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntDocTemplatePiece();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Context')) {
          obj['Context'] = _ApiClient["default"].convertToType(data['Context'], 'String');
        }

        if (data.hasOwnProperty('Short')) {
          obj['Short'] = _ApiClient["default"].convertToType(data['Short'], 'String');
        }

        if (data.hasOwnProperty('Long')) {
          obj['Long'] = _ApiClient["default"].convertToType(data['Long'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return EntDocTemplatePiece;
}();

exports["default"] = EntDocTemplatePiece;
//# sourceMappingURL=EntDocTemplatePiece.js.map
