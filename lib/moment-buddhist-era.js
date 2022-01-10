(function (root, factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    define(['moment'], factory) // AMD
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('moment')) // Node
  } else {
    factory(root.moment) // Browser
  }
}(this, function (moment) {
  const proto = moment.prototype
  const oldFormat = proto.format

  moment.buddhistEra = function buddhistEra (value) {
    if (value === undefined) {
      if (this._buddhistEra === undefined) {
        this._buddhistEra = true
      }

      return this._buddhistEra
    } else {
      this._buddhistEra = value

      return this
    }
  }

  moment.fn.format = function (inputString, options) {
    const buddhistEra = options && typeof options.be === 'boolean'
      ? options.be
      : moment.buddhistEra()

    if (buddhistEra) {
      const christianYear = this.year()
      const yearBias = 543
      const buddhishYear = String(christianYear + yearBias)

      if (!inputString) {
        inputString = this.isUTC()
          ? moment.defaultFormatUtc
          : moment.defaultFormat
      }

      const result = inputString.replace('YYYY', buddhishYear).replace('YY', buddhishYear.substring(2, 4))

      return oldFormat.bind(this)(result).replace(christianYear, buddhishYear)
    }

    return oldFormat.bind(this)(inputString)
  }

  return moment
}))
