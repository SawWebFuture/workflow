$ = require 'jquery'

do fill = (item = 'This is a the Best Coffee Script') ->
  $('.tagline').append "#{item}"
fill