import express from 'express';
// const express = require('express');

import path from 'path';
// const path = require('path'); //propio de node, para leer nuestras carpetas del proyecto

export const startServer = (options)=>{
    const {port,public_path='public'}=options;
    console.log(port);
    console.log(public_path);
    
    //vamos a hacer una constante app de express
    const app =express();

    //para usar midelware si sala palabra use(express)

    app.use(express.static(public_path)) // contenido estatiico que ponemos disponible
    
    //ante le pedidido de cualquier tipo de url,(*), vamos a devolver el index.html, en esta ruta cualquier llamada va a redirigir al index.html
    app.get('*',(req,res)=>{
        const indexPath= path.join(__dirname+`../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //abrir un puerto y poner a escuchar el servidor en ese puerto
    app.listen(port,()=>{
        console.log(`escuchando en el puerto: ${port}`);
    })

}

