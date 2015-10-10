$ = require 'jquery'

do fill = (item = 'This is a the Greatest Coffee Script') ->
  $('.tagline').append "#{item}"
fill