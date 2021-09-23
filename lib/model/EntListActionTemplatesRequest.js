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

/**
* The EntListActionTemplatesRequest model module.
* @module model/EntListActionTemplatesRequest
* @version 2.0
*/
var EntListActionTemplatesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EntListActionTemplatesRequest</code>.
  * @alias module:model/EntListActionTemplatesRequest
  * @class
  */
  function EntListActionTemplatesRequest() {
    _classCallCheck(this, EntListActionTemplatesRequest);
  }
  /**
  * Constructs a <code>EntListActionTemplatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EntListActionTemplatesRequest} obj Optional instance to populate.
  * @return {module:model/EntListActionTemplatesRequest} The populated <code>EntListActionTemplatesRequest</code> instance.
  */


  _createClass(EntListActionTemplatesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntListActionTemplatesRequest();
      }

      return obj;
    }
  }]);

  return EntListActionTemplatesRequest;
}();

exports["default"] = EntListActionTemplatesRequest;
//# sourceMappingURL=EntListActionTemplatesRequest.js.map
