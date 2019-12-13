export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "ap-northeast-2",
        BUCKET: "notes-app-uploaded-files-s3"
    },
    apiGateway: {
        REGION: "ap-northeast-2",
        URL: "https://4o8nodqnu5.execute-api.ap-northeast-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "ap-northeast-2",
        USER_POOL_ID: "ap-northeast-2_7ItNVSrOK",
        APP_CLIENT_ID: "5p3kdms63f98fv1b4t3ilpa009",
        IDENTITY_POOL_ID: "ap-northeast-2:d4e009f3-9991-4e96-8074-6183c08396f0"
    }
};
