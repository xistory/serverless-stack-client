const dev = {
    STRIPE_KEY: "pk_test_RE8iU25msFs1fTlOXLQo6dOm00FEkRL3jC",
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-uavndyiopfr9"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://il74ar0qfl.execute-api.ap-northeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_o1BPrC5l8",
    APP_CLIENT_ID: "4vpk1uab2alcosb9ttb5pdecf1",
    IDENTITY_POOL_ID: "ap-northeast-2:13b49dab-df9e-4280-9f2a-da4f45115ef4"
  }
};

const prod = {
    STRIPE_KEY: "pk_test_RE8iU25msFs1fTlOXLQo6dOm00FEkRL3jC",
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-kgveytwbp1bq"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://b3431gz7b8.execute-api.ap-northeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_pPjp3yI5M",
    APP_CLIENT_ID: "5skmmi89fkivh9gi3pqmhjqt4v",
    IDENTITY_POOL_ID: "ap-northeast-2:63b44ca7-e5df-47dd-80af-f0aac2eed0b7"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
