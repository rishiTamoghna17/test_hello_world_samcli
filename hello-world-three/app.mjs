/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
// const { capital } = require('../new_libraby/dist/index_bundle') 
// import { capital } from '../../test_react/new_libraby/dist/index_bundle.mjs'
// import { capital } from '../new_libraby/dist/index_bundle.mjs'
// const libpack = require('../new_libraby/dist/index_bundle.js')
// import { capital } from 'libpack';

import { capital } from '/opt/queries.js';
export const lambdaHandler = async (event, context) => {
    try {
        let str = "hello world";
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: capital(str),
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
