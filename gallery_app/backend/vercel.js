{
    "version": 2,
    "builds": [
      { "src": "package.json", "use": "@vercel/node" }
    ],
    "env": {
      "MONGODB_URI": "@mongodb_uri"
    }
  }
