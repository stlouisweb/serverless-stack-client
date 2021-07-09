const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-jeremyp",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://kaizr266qh.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_87d9gcNC7",
      APP_CLIENT_ID: "5f40g7p1b1c0j8ec6kfranl6up",
      IDENTITY_POOL_ID: "us-east-1:d31ab68e-106e-4e2e-9795-27ea124eb79f",
    },
  };
  
  export default config;