import dotenv from "dotenv";
dotenv.config();

export default{
    app: {
        port: process.env.PORT
    },
    gcVariables: {
        projectId: process.env.GC_PROJECT_ID,
        keyFilename: process.env.GC_KEYFILE_NAME,
        bucketName: process.env.GC_BUCKET_NAME
    }
}
