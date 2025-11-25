import { Hono } from 'hono'
import { swaggerUI } from '@hono/swagger-ui'

const app = new Hono()

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

app.post('/canex-ocr', (c) => {
  return c.json({
    "DocumentNo": "0000142079",
    "Weight_In": 18100,
    "Weight_Out": 46180,
    "Weight_Diff": 28080
  })
})

app.get('/doc', (c) => {
  return c.json({
    openapi: '3.0.0',
    info: {
      title: 'Canex OCR API',
      version: '1.0.0',
      description: 'API for Canex OCR operations'
    },
    paths: {
      '/canex-ocr': {
        get: {
          summary: 'Get OCR data',
          responses: {
            200: {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      DocumentNo: { type: 'string' },
                      Weight_In: { type: 'number' },
                      Weight_Out: { type: 'number' },
                      Weight_Diff: { type: 'number' }
                    }
                  }
                }
              }
            }
          }
        },
        post: {
          summary: 'Post OCR data',
          responses: {
            200: {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      DocumentNo: { type: 'string' },
                      Weight_In: { type: 'number' },
                      Weight_Out: { type: 'number' },
                      Weight_Diff: { type: 'number' }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })
})

app.get('/swagger', swaggerUI({ url: '/doc' }))

export default app
