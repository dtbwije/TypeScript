import * as cdk from 'aws-cdk-lib'
import {Construct} from "constructs";
import * as ecr from 'aws-cdk-lib/aws-ecr'
import * as codebuild from "aws-cdk-lib/aws-codebuild"
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as iam from "aws-cdk-lib/aws-iam";
import {SecretValue} from "aws-cdk-lib";

export class AppStack extends cdk.Stack {
    constructor(scope: Construct, id:string, props: cdk.StackProps) {
        super(scope, id, props);

        const repository = new ecr.Repository(this, 'Repository', {
            imageScanOnPush: true,
        });

        const user = new iam.User(this, 'User');
        ecr.AuthorizationToken.grantRead(user);
        ecr.

        const gitHubSource = codebuild.Source.gitHub({
            owner: 'dtbwije',
            repo: 'TypeScript', // optional, default: undefined if unspecified will create organization webhook
            webhook: true, // optional, default: true if `webhookFilters` were provided, false otherwise
            webhookTriggersBatchBuild: true, // optional, default is false
            webhookFilters: [
                codebuild.FilterGroup
                    .inEventOf(codebuild.EventAction.PUSH)
                    .andBranchIs('main')
            ], // optional, by default all pushes and Pull Requests will trigger a build
            reportBuildStatus: true
        })

        const codeBuild = new codebuild.Project(this, 'TypeScript', {
            source: gitHubSource,
            environment: {
                buildImage: codebuild.LinuxBuildImage.STANDARD_7_0,
            },

            buildSpec: codebuild.BuildSpec.fromObject({
                version: '0.2',
                phases: {
                    build: {
                        commands: [
                            'echo "Hello, CodeBuild!"',
                        ],
                    },
                },
            }),
        });

        const fn = new lambda.Function(this, 'testFunction', {
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'index.handler',
            code: lambda.Code.fromInline(`
                exports.handler = async function(event) {
                  return {
                    statusCode: 200,
                    body: JSON.stringify('Hello but wild!'),
                  };
                };
              `),
        });

        /*const rule = new events.Rule(this, 'rule', {
            eventPattern: {
                source: ["aws.ec2"],
            },
        });

        rule.addTarget(new targets.LambdaFunction(fn, {
            deadLetterQueue: queue, // Optional: add a dead letter queue
            maxEventAge: Duration.hours(2), // Optional: set the maxEventAge retry policy
            retryAttempts: 2, // Optional: set the max number of retry attempts
        }));
        repository.onImageScanCompleted('ImageScanComplete')
            .target*/
    }
}