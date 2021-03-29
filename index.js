const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv')
dotenv.config()
const routes = require('./routes')


const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });
    await server.start();
    server.route(routes)
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();