module.exports = function() {
  var client = './public/'

  var config = {
    temp: client + 'temp/',
    css: client + 'css/',
    sass: './sass/**/*.scss'
  }

  return config
}
