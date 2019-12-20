"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  //if (process.env.NODE_ENV === "production" || pluginOptions.includeInDevelopment) {
    return setPostBodyComponents([_react2.default.createElement("script", {
      key: "gatsby-plugin-pardot",
      dangerouslySetInnerHTML: {
        __html: "\n            piAId = '" + pluginOptions.piAId + "';\n            piCId = '" + pluginOptions.piCId + "';\n            piHostname = 'pi.pardot.com';\n            (function() {\n              function async_load(){\n                var s = document.createElement('script'); s.type = 'text/javascript';\n                s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';\n                var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);\n              }\n              if(window.attachEvent) { window.attachEvent('onload', async_load); }\n              else { window.addEventListener('load', async_load, false); }\n            })();\n          "
      }
    })]);
  //}
};