import { Hono } from 'hono'
import { swaggerUI } from '@hono/swagger-ui'
import { openApiSpec } from './openapi'

const app = new Hono()

// Middleware for API key authentication
app.use('/canex-secure-ocr/*', async (c, next) => {
  const apiKey = c.req.header('x-api-key')
  if (!apiKey || apiKey !== 'ABC123XYZ') {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  await next()
})

app.get('/', (c) => {
  return c.text('hello sandbox')
})

app.get('/canex-ocr', (c) => {
  return c.json({
    "DocumentNo": "0000142079",
    "Weight_In": 18100,
    "Weight_Out": 46180,
    "Weight_Diff": 28080
  })
})
app.get('/canex-secure-ocr', (c) => {
  return c.json({
    "DocumentNo": "G000111222",
    "Weight_In": 29900,
    "Weight_Out": 29000,
    "Weight_Diff": 900
  })
})

app.post('/canex-secure-ocr', (c) => {
  return c.json({
    "DocumentNo": "P000111222",
    "Weight_In": 29900,
    "Weight_Out": 29000,
    "Weight_Diff": 900
  })
})

app.post('/canex-ocr', (c) => {
  return c.json({
    "DocumentNo": "0000142079",
    "Weight_In": 18100,
    "Weight_Out": 46180,
    "Weight_Diff": 28080
  })
})

app.get('/doc', (c) => {
  return c.json(openApiSpec)
})

app.get('/swagger', swaggerUI({ url: '/doc' }))

export default app
