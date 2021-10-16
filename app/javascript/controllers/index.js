// this is commented because isnt working

// import { application } from "controllers/application"
// import { registerControllersFrom } from "@hotwired/stimulus-importmap-autoloader"
// import StimulusReflex from 'stimulus_reflex'
// import consumer from '../channels/consumer'
// import controller from '../controllers/application_controller'
// registerControllersFrom("controllers", application)
// StimulusReflex.initialize(application, { consumer, controller, isolate: true })
// StimulusReflex.debug = process.env.RAILS_ENV === 'development'





// code this works....
import { application } from "controllers/application"
import { registerControllersFrom } from "@hotwired/stimulus-importmap-autoloader"
registerControllersFrom("controllers", application)
