/*
 * @Author: Harry
 * @Date: 2022-07-31 11:47:00
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-07-31 11:58:08
 * @FilePath: \markdown-it\lib\index.js
 */
'use strict';

module.exports = function MdCustomAttrPugin(md, type, mdOptions = null) {
  var defaultRenderer = md.renderer.rules[type];

  md.renderer.rules[type] = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    if (mdOptions) {
      for (let i in mdOptions) {
        token.attrSet(i, mdOptions[i])
      }
    }
    return defaultRenderer(tokens, idx, options, env, self);
  };
};
