import { FastifyInstance } from "fastify";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify 
 * @param {Object} options 
 */
async function routes (fastify: FastifyInstance, options: Object){
    fastify.get('/', async (request, reply) => {
        return{hello: 'new world, all the boys and girls'}
    })
}

export default routes;