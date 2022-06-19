'use strict'

module.exports = (app) => {
    const indexController = require('./../Controller/IndexController');
    const sectionsController = require('./../Controller/SectionController');
    const searchSections = require('../Controller/SearchSections');
    const labsController = require('../Controller/LabsController');

    app.route('/').get(indexController.index);
    app.route('/sections').get(sectionsController.sections);
    app.route('/labsbd').get(labsController.labs);
    app.route('/search').get(searchSections.sections);
}