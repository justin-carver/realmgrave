import 'source-map-support/register';

import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
const fastify = Fastify({ logger: true });

// Declare a route
fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return { message: JSON.stringify(reply.context) };
});

// Run the server!
const start = async (): Promise<void> => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
