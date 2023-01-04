const each = require('lodash/fp/each')
const fastify = require('fastify')
const fastifyStatic = require('fastify-static')
const path = require('path')
const FastifyAuth = require('fastify-auth');
const jwt = require('jsonwebtoken')
module.exports = ({ routes, LoggerConfig }) => {

  const server = fastify({
    logger: LoggerConfig
  })

  // server.addHook('preHandler', async (req, reply) => {
  //   console.log('fourth')
  // })

  server.addHook('preHandler', async (req, res) => {
    
    const token = req.body.token;
    console.log("aaaaaaaaaaaaaaa",token)
    if (!token) {
      console.log("denied")
        return "Access denied";
        
    }

    try {
        const verified = jwt.decodeToken(token);
        req.user = verified;
        
    } catch (err) {
      return "Invalid token" ;
    }

  })
  each(path => {

    server.route(path)
  })(routes)
  /**
   * Setup Docs and Coverage static file serving
   */
  server.register(fastifyStatic, {
    root: path.join(__dirname, '../..'),
    redirect: true
  })
  // server.get('/docs/', (req, res) => { res.sendFile('docs/') })
  // server.get('/coverage/', (req, res) => { res.sendFile('coverage/') })

  return server
}
