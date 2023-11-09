import { http } from 'msw'

// Mock Data
export const makeupData = [
  {
    "id": 1048,
    "brand": "colourpop",
    "name": "Lippie Pencil",
  },
  {
    "id": 1047,
    "brand": "colourpop",
    "name": "Blotted Lip",
  },
  {
    "id": 1045,
    "brand": "colourpop",
    "name": "No Filter Foundation",
  },
]

export const handlers = [
  http.get('http://makeup-api.herokuapp.com/api/v1/products.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(makeupData))
  }),
]