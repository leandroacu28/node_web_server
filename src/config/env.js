import env from 'dotenv';
env.config();
// require('dotenv').config();

import  envvar from 'env-var';
// const {get}=require('env-var');

export const envs ={
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

