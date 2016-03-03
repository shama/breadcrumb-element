var breadcrumb = require('../index.js')
var bel = require('bel')

var trail = 'some/long/path/for/breadcrumb'.split('/')

function render (selected) {
  var app = bel`<div>
    <h3>Selected: ${selected}</h3>
    ${breadcrumb(trail, function (picked) {
      app.update(render(picked.join(',')))
    })}
  </div>`
  return app
}

document.body.appendChild(render('none'))
