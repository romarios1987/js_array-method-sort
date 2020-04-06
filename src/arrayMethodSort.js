'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // for (let i = 0, endArray = this.length - 1; i < endArray; i++) {
    //   let isSwapped = false;
    //
    //   for (let j = 0, endJ = endArray - i; j < endJ; j++) {
    //     if ((!compareFunction && (String(this[j]) > String(this[j + 1])))
    // eslint-disable-next-line max-len
    //       || (compareFunction && compareFunction(this[j], this[j + 1]) > 0)) {
    //       const cachedItem = this[j];
    //
    //       this[j] = this[j + 1];
    //       this[j + 1] = cachedItem;
    //       isSwapped = true;
    //     }
    //   }
    //
    //   if (!isSwapped) {
    //     break;
    //   }
    // }
    //
    // return this;

    let temp;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if ((!compareFunction && this[j].toString() > this[j + 1].toString())
          || (compareFunction && +compareFunction(this[j], this[j + 1]) > 0)) {
          temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
