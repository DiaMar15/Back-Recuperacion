import { defineConfig } from '@adonisjs/cors'

/**
 * Configuration options to tweak the CORS policy. The following
 * options are documented on the official documentation website.
 *
 * https://docs.adonisjs.com/guides/security/cors
 */
const corsConfig = defineConfig({
  enabled: true,

  // ✅ solo permite tu frontend en desarrollo
  origin: ['http://localhost:5173'],

  methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],

  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})

export default corsConfig
