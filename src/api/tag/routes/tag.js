'use strict';

/**
 * tag router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tag.tag', {
    prefix: '',
    only: ['find', 'findOne'],
    except: [],
    config: {
    find: {
      auth: false, // disabling the Strapi JWT auth for this route
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
},
});
