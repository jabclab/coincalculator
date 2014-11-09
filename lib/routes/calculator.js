/**
 * @file Route to take an amount in pounds and pence and return
 *       minimum number of coins which make up that ammount.
 * @author Jake Clarkson
 */
var Joi = require('joi');

// Hapi route definition.
module.exports = {
	method: 'GET',
	path: '/coins',
	config: {
		handler: calculateCoins,
		validate: {
			query: {
				pounds: Joi.number().integer().min(0).required(),
				pence: Joi.number().integer().min(0).max(99).required()
			}
		}
	}
};

// Hapi route handler.
function calculateCoins(request, reply) {
	reply('success');
}
