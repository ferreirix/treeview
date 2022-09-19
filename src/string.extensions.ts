export {};

// https://stackoverflow.com/a/43301891/2457870
// eslint-disable-next-line
String.prototype.trimChars = function (chars: string): string {
  var l = 0;
  var r = this.length - 1;
  while (chars.indexOf(this[l]) >= 0 && l < r) l++;
  while (chars.indexOf(this[r]) >= 0 && r >= l) r--;
  return this.substring(l, r + 1);
};
