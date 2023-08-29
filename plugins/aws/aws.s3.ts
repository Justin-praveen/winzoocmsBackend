import fp from 'fastify-plugin'
import { S3 } from "aws-sdk"

export interface S3PluginOptions {
  // AWS S3 plugin options here
  accessKeyId: string    // access key =  AKIAXQ5TK265LADHQDVA
  secretAccessKey: string  // secretkey = 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
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<S3PluginOptions>(async (fastify, opts) => {
  
  const s3 = new S3(opts)  
  //Decorate S3 instance
  fastify.decorate('S3', s3)
  //Decorate Bucket Name
  fastify.decorate('S3BucketName', "imageBucketName" as string)

})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    S3: S3;
    S3BucketName: string;
  }
}