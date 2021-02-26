#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CognitoAwsBackendStack } from '../lib/cognito-aws-backend-stack';

const app = new cdk.App();
new CognitoAwsBackendStack(app, 'CognitoAwsBackendStack');
