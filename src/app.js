// const {envs} = require('./config/env');
import {envs} from ('./config/env');

// const {startServer}=require('./server/server');
import {startServer} from ('./server/server');


const main = () =>{
    // console.log(envs)
    startServer({
        port:envs.PORT,
        public_path:envs.PUBIC_PATH
    })
}

//funcion autoconvocada usando los parentesis, agnostica por que la funcion no lleva nombre no lleva nombre y asyncronica
(async()=>{
    main()
})()


