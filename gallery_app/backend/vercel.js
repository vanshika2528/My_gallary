{
    "version": 2,
    "rewrites": [
      { "src": "./index.js", "use": "@vercel/node" }
    ],
        "routes":[
        {
            "src":"/(.*)",
            "dest":"/"
        }
        ],
    "env": {
      "MONGODB_URI": "@mongodb_uri"
    }
  }
