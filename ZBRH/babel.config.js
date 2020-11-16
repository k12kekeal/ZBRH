// babel.config.js

//https://github.com/facebook/jest/issues/6933#issuecomment-465026945
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react'],
};




// module.exports = {
//   presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
// };



