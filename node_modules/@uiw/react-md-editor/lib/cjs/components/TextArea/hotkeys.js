"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InsertTextAtPosition = _interopRequireDefault(require("../../utils/InsertTextAtPosition"));

var _commands = require("../../commands");

var _list = require("../../commands/list");

/**
 * - `13` - `Enter`
 * - `9` - `Tab`
 */
function stopPropagation(e) {
  e.stopPropagation();
  e.preventDefault();
}

var _default = function _default(options, e) {
  var target = e.target;
  var starVal = target.value.substr(0, target.selectionStart);
  var valArr = starVal.split('\n');
  var currentLineStr = valArr[valArr.length - 1];
  var textArea = new _commands.TextAreaTextApi(target);

  if (!options.tabSize) {
    options.tabSize = 2;
  }
  /**
   * `9` - `Tab`
   */


  if (e.keyCode === 9) {
    stopPropagation(e);
    var space = new Array(options.tabSize + 1).join(' ');
    var val = space;

    if (target.selectionStart !== target.selectionEnd) {
      var _star = target.value.substring(0, target.selectionStart).split('\n');

      var _end = target.value.substring(0, target.selectionEnd).split('\n');

      var modifiedTextLine = [];

      _end.forEach(function (item, idx) {
        if (item !== _star[idx]) {
          modifiedTextLine.push(item);
        }
      });

      var modifiedText = modifiedTextLine.join('\n');
      var oldSelectText = target.value.substring(target.selectionStart, target.selectionEnd);
      var newStarNum = target.value.substring(0, target.selectionStart).length;
      textArea.setSelectionRange({
        start: target.value.indexOf(modifiedText),
        end: target.selectionEnd
      });
      var modifiedTextObj = (0, _list.insertBeforeEachLine)(modifiedText, space);
      textArea.replaceSelection(modifiedTextObj.modifiedText);
      textArea.setSelectionRange({
        start: newStarNum + options.tabSize,
        end: newStarNum + oldSelectText.length + modifiedTextLine.length * options.tabSize
      });
    } else {
      return (0, _InsertTextAtPosition.default)(target, val);
    }
  } else if (e.keyCode === 13 && /^-\s/.test(currentLineStr)) {
    /**
     * `13` - `Enter`
     */
    stopPropagation(e);
    return (0, _InsertTextAtPosition.default)(target, "\n- ");
  }
};

exports.default = _default;
module.exports = exports.default; 
//# sourceMappingURL=hotkeys.js.map