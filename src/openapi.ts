export const openApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Canex OCR API',
    version: '1.0.0',
    description: 'API for Canex OCR operations'
  },
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key'
      }
    }
  },
  security: [
    {
      ApiKeyAuth: []
    }
  ],
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
    },
    '/canex-secure-ocr': {
      get: {
        summary: 'Get secure OCR data',
        security: [{ ApiKeyAuth: [] }],
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
          },
          401: {
            description: 'Unauthorized'
          }
        }
      },
      post: {
        summary: 'Post secure OCR data',
        security: [{ ApiKeyAuth: [] }],
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
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    }
  }
}
