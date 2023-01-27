'use strict';

/**
 * media-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::media-test.media-test');
