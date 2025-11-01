import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {Construct} from "constructs";
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as cdk from 'aws-cdk-lib';
import {SecretValue} from "aws-cdk-lib";

export class DatabaseStack extends cdk.Stack {
    constructor(scope:Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'mainVPC',{
            ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
            maxAzs: 2,
        });

        const databaseCredentials = new secretsmanager.Secret(this, 'TemplatedSecret', {
            generateSecretString: {
                secretStringTemplate: JSON.stringify({ username: 'postgres' }),
                generateStringKey: 'password',
                excludeCharacters: '/@"',
                excludePunctuation: true,
                includeSpace: false
            },
        });

        // 3. Create the Aurora cluster
        const cluster = new rds.DatabaseCluster(this, 'AuroraCluster', {
            engine: rds.DatabaseClusterEngine.auroraPostgres({
                version: rds.AuroraPostgresEngineVersion.VER_14_12,
            }),
            credentials: rds.Credentials.fromUsername('adminuser', { password: SecretValue.unsafePlainText('7959866cacc02c2d243ecfe177464fe6') }),
            defaultDatabaseName: 'postgresdatabase',
            writer: rds.ClusterInstance.provisioned('writer',{
                publiclyAccessible: false,
            }),
            readers:[
                rds.ClusterInstance.provisioned('reader')
            ],
            storageType: rds.DBClusterStorageType.AURORA_IOPT1,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },
            vpc,
        });

        // Optional: Output cluster endpoint
        new cdk.CfnOutput(this, 'DBEndpoint', {
            value: cluster.clusterEndpoint.hostname,
        });
    }

}