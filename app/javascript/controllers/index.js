// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { registerControllersFrom } from "@hotwired/stimulus-importmap-autoloader"
import controller from '../controllers/application_controller'

registerControllersFrom("controllers", application)

import consumer from '../channels/consumer'
application.consumer = consumer

import StimulusReflex from 'stimulus_reflex'
StimulusReflex.initialize(application, { controller, isolate: true })
StimulusReflex.debug = process.env.RAILS_ENV === 'development'
