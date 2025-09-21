module.exports = {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN, // Clerk issuer domain
      applicationID: "convex", // must match JWT audience
    },
  ],
}; 