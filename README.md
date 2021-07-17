<h1 align="center">
  Akron Stock Music
</h1>

## Background
A place for non-profits to configure stock music made by artists from Akron, OH.

## Supporting Services/Technologies
- Built with [GatsbyJS](https://www.gatsbyjs.org/) v2.19 (CLI v2.10)
- Server-side functionality written in [NodeJS](https://nodejs.org/) v12.11.1
- UI Components made with [ReactJS](https://reactjs.org/) v16.13
- CMS is [Contentful](https://www.contentful.com/)
- Data requests made using [GraphQL](https://graphql.org/)
- CI/CD and hosting through [Netlify](https://www.netlify.com/)
- Monitoring through [Google Analytics](https://analytics.google.com/)

## Local Development

### Configuration Steps
This site requires a `.env` file with the following properties:

```
accessToken
spaceId
trackingId
```

The `spaceID` and `accessToken` are from Contentful.<br/>
The `trackingId` is from Google Analytics

You'll also need to add these three environment variables in Netlify by going to Setting > Build & Deploy > Environment.

### Setup
`npm i` - Install your dependencies<br/>
Then Either<br/>
`gatsby develop` - Build the assets in development mode and start a web server<br/>
Or (Hopefully before you commit!)<br/>
`gatsby build` - Build the assets in production mode<br/>
`gatsby serve` - Serve the assets in production mode<br/>

### Running Tests Locally
Lol

## Deploying With Netlify
1. Follow [this guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) to connect Netlify and GitHub and deploy the site
2. Enable Netlify forms through their UI

## Things To Note
- Since Gatsby pre-runs all of your GraphQL queries when the site is built, you'll need to re-deploy when content changes are made in Contetful unless you follow [this guide](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/) on setting up a build hook that Contentful can kick off on publish.

- Static pages for each blog in Contentful are built in the `gatsby-node.js` file using the `./template/genre.js` file as a template and using the `name` property from Contentful as the URL slug.

- When you update your Node version (and maybe other times?) you'll need to use the "Clear Cache And Deploy" in Netlify instead of the regular deploy trigger.

## Content Model
You'll need to set the content model up in Contenful to ensure your GraphQL queries will work. Contact me and I'll ship the model over.
