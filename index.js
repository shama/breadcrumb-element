var bel = require('bel')

module.exports = function (trail, onselected) {
  var prev = []
  return bel`<ul>
    ${trail.map(function (part) {
      prev.push(part)
      var crumb = prev.slice(0)
      return bel`<li>
        <button onclick=${function () {
          onselected(crumb)
        }}>${part}</button>
      </li>`
    })}
  </ul>`
}
