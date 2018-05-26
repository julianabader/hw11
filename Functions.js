var data = require("./data/arch.json"),
    mongoose = require('mongoose'),
   
    Schema =require("./modelExports");


    var result,bol,arr;


    mongoose.connect(mongoose.connect('mongodb://julianab:nouray+1994@ds225840.mlab.com:25840/db_ringapp2018'));
    var db = mongoose.connection;
    module.exports = {
        getAll:()=>{
                ArchSchema.find({},
                    (err,archives)=>{
                        if(err) console.log(`error: ${err}`);
                        result = archives[0];
            },
                err=>{
                    console.log(`connection error:${err}`);
                });
                return result;
            },
        getbyID:(id)=>{
           archSchema.find({},
                (err,archives)=>{
                    if(err) console.log(`error: ${err}`);
                    arr= archives[0].Archives;
                    if(id-1<=arr.length-1){
                        result = arr[id-1];
                        bol = true;
                    }
                    else{
                        bol = false;
                    }
                err=>{
                    console.log(`connection error:${err}`);
                    }
                }   
           ); 
                if(bol){
                    bol = false;
                    return ({"name":result.name});
                }
                if(!bol){
                    return ({"Error":"Not Found"});
                }

        },
        search:(id,name)=>{
            archSchema.find({},
                 (err,archives)=>{
                    if(err) console.log(`error: ${err}`);
                    arr= archives[0].archives;
                    if(arr[id-1].name==name&&id-1<=arr.length){
                            result = arr[id-1];
                            bol = true;   
                    }
                     else{
                         bol = false;
                    }
                 err=>{
                     console.log(`connection error:${err}`);
                    }
                 }   
            ); 
            if(bol){
                bol = false;
                return({"name": result.name,
                        "age":result.age,
                        "address":result.address
                    });
            }
            if(!bol){
                return ({"Error":"Not Found"});
            }
        }
}

