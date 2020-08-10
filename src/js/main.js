import './slider';
import './modules/modals'
import modals from './modules/modals'
import tabs from './modules/tabs'
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    modals()
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click' )
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
    forms() 

})