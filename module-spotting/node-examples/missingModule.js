exports.a = function () { console.log('Can\'t touch this'); };
module.exports.b = function () { console.log('Nah na na na, nah na, nah na'); };

module.exports = {
  c: function() { console.log('This had better do all those other things...'); }
};

module.exports.d = function() { console.log('hmmm... something\'s missing.'); }
exports.e = 'A message of love and peace an how we can all just get along if we tried.';