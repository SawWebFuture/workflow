var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('This is a the Greatest Coffee Script');

fill;
