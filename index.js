import morgan from 'morgan'
import passport from 'passport'
import { Strategy as jwtStrategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import server from './config/server'
import {authentication} from './routes'
const PORT = 5000 || process.env.PORT

// const server = Express()


morgan('dev')


server.use(passport.initialize())


server.use('/authentication', authentication)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})