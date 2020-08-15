
var Random = null;
Random = {
  range: function (min, max) {
    return min + Math.random() * (max - min);
  },
  rangeInt: function (min, max) {
    return Math.floor(Random.range(min, max));
  },
  pick: function (array) {
    return array[Random.rangeInt(0, array.length)];
  },
  pickAndRemove: function (array) {
    var i = Random.rangeInt(0, array.length);
    var item = array[i];
    array.splice(i, 1);
    return item;
  }
};
