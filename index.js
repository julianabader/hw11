var     express = require ('express'),
        app = express(),
        bodyParser = require('body-parser'),
        port = process.env.PORT || 3000,
        func = require("./functions");

        app.use(bodyParser.urlencoded({ extended:true }));



    app.get('/getAll/',
    (req,res)=>{
        res.status(200).json(func.getAll());
    });
    
    
    app.post('/getarchbyID/:id/',
    (req,res)=>{
        res.status(200).json(func.getbyID(req.params.id));
    });
    
    app.get('/search/:id/:name',
    (req,res)=>{
        res.status(200).json(func.search(req.params.id,req.params.name));
    });  

    app.all('*',
    (req,res)=>{
        console.log('Input');
        res.sendFile(`${__dirname}/index.html`);
    });

app.listen(port,()=>{
    console.log(`listening port : ${port}`);
});

