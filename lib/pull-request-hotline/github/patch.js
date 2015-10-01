var diff = require('diff');

function Patch(patchStr) {
  this.patch = diff(patchStr);
  this._lineMap = this_generateMapping();
}

Patch.prototype = {
  _generateMapping: function () {
    var map = {};
    var patchLineCount = 0;

    this.patch.hunks.forEach(function(hunk) {
      var newFilePosition = hunk.newStart;

      hunk.lines.forEach(function(patchLine) {
        patchLineCount++;

        if (patchLine.charAt(0) === '-') {
          return;
        }

        map[newFilePosition] = patchLineCount;
        newFilePosition++;
      });
    });

    return map;
  },

  findLine: function (line) {
    if (!this._lineMap[line]) {
      throw new Error('Line not found in diff: ' + line);
    }

    return this._lineMap[line]
  }
}

module.exports = Patch;
