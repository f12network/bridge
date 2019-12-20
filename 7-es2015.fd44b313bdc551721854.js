(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/bnc-onboard/dist/esm/dapper-ffdb3c6a.js":
/*!**************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/dapper-ffdb3c6a.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-9ad8443b.js */ "./node_modules/bnc-onboard/dist/esm/validation-9ad8443b.js");
/* harmony import */ var _content_1bb71708_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-1bb71708.js */ "./node_modules/bnc-onboard/dist/esm/content-1bb71708.js");


var dapperIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABKVBMVEVHcEzf2eXn0enj2+fh3ebf3ebvy+/g2OXk1+ng3ubi3ujh3efh4Ojg4Onh3+ji3+nq1O3g5evg3ObnxdntsM7woMT1ibn5fLPh2efk0uL7cKz/XqD/Vpv/WJz/UZj/Wp39aKff3uf/WZ3/Y6Psvdf/hbf/n8b/qcz/ebD/lMD/bqn/4O3//v//////xdz/8vj/ttTm3+39+P3s3fvjy/jcvvb/6fLp1/qubuuJKuKhVuiCH+DNpfKTPOR/GeD/1ebp2u2oYuqEIeD38P3x5vzBkPC3fe2nYumlXuj3lcbs1vHu1vPy0/T6icCcTeb0z/X5qtv3vOn1zfX2xvD2zff5oNT1zvf0zPTxyvH1zfXzyvP1zfb0zPT4s+P1zPXty+30zPTzy/P0zPQJmk/TAAAAY3RSTlMACTBHZIhYIxOn3ez07sX3d+248fP2+Po77/z///////6r///x////////////////7v//////////////////7///////////9u3ycPj/7fPw8+/u9NlWocav16fytVe6sWDohgwWAAADF0lEQVR4AXSPtdrkRhAAq3tmpF3pp2OOLjIzw6v45Rw5MT6AU1Po1OEx/gvC6fau9hhKWN9XQ8LzyBYkx955jufC2Zi2GWzLxsxfHZaWdHJTwEPWdfaXQznsk0GEkenD6OgqvxiWdS/EfiYbAN/QFgzSjv5ceP5YJU5bnFRcLcg69+jJ6+2TcNdZVY8UmSeYhya0FtZTGQA0qxSzwoM+d04NFOOYz7UjIMCsMClKDbxM9i4P3fBoRgmyF1/ZodSdxexTeD4rIQZeiQx0lP0UZk1nNHnQ7O7R2WG+MxWVbIagc6VKwQoVcR+UDJjti6GyCtmyL3ThQqqsmKlWKrAtV6pYXUgGUemPgzV5rG8Eqa8ehxhOIEVMahIrG22/tBSLkN3rscd6Pbag4dTRMs2VOsY4GlA0e2UuixhTB8OBdGW4suhVIzdiVVMXRbIe3H3/nJVVoXQATRSvGYtw9H7neS+nfY9DdA1FzHHFPMaIE07vr5IMy4OrK23hgc+QNlNadep0PIlJKRlideZUUgbjY7itn8InhyOqJZuya5PCzqDp1kun4h8QhcN/6NlRTguCTx0bAww5ZE+rCukCh9oxkQ04Gh4ZtdBtP18rVPRH3JzRAXTqJN8Yk/k93LYJCgS57tg0Fdre9LHaWLOzHjf7lF2YLZ/yW31Ie23sW6rjh2myvdi0JOvYEtMAdDcDw8MH59oFXt0fhzJtjVuQbFn0o4CS+JSwzKc0catP6veboCvb2k1P89VtspRAHJKMbMqhSF6txrYfA9rfndWnGuYPj1eqqKTQx0QUgdB3IfraswRAaZpFuR6EABbUIAJSeEY3bU/iEYGNqQJ4MwKawJY9QFbVzBN0AxPf7jRt/oTXY+WYoI66+VhGeR3+ZiANP+nvGeRTM15DjhGscr1ZG8R3LYTAywTzTwKw8MC/HwxCceG/2CuA+YQwMdhXDsx/GyM2zjuIX2v7JwEKdvRA5sPTDQyH3xsCfCdrY4sbewsm9lmCIjCU+oMxhZTz/xf4A+7t3yCCFamU5Fr2A1HicvyKXY7d00D3ghkAxraU/JeFj1kAAAAASUVORK5CYII=";
var dapperIcon2x = "data:image/png;base64,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";

function dapper() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var preferred = options.preferred;
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
    name: 'preferred',
    value: preferred,
    type: 'boolean',
    optional: true
  });
  return {
    name: 'Dapper',
    iconSrc: dapperIcon,
    iconSrcSet: dapperIcon2x,
    wallet: function wallet(helpers) {
      var createModernProviderInterface, getProviderName, provider;
      return regeneratorRuntime.async(function wallet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              createModernProviderInterface = helpers.createModernProviderInterface, getProviderName = helpers.getProviderName;
              provider = window.ethereum;
              return _context.abrupt("return", {
                provider: provider,
                "interface": provider && getProviderName(provider) === 'Dapper' ? createModernProviderInterface(provider) : null
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    link: 'https://www.meetdapper.com/',
    installMessage: _content_1bb71708_js__WEBPACK_IMPORTED_MODULE_1__["e"],
    desktop: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (dapper);

/***/ })

}]);