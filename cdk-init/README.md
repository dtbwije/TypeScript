# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

````aiignore
  aws configure --profile tharanga
  aws sts get-caller-identity --profile tharanga --query Account --output text
  cdk bootstrap --profile tharanga
  npm run build

````


{                                                                                                                                                                                                                                                                        
"arn": "arn:aws:codebuild:eu-central-1:912715453939:token/github"
}
