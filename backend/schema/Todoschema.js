const mongoose=require('mongoose');


const Todoschema=mongoose.Schema({


    

    text:{
        type:"String",
        required:[true,"please provide text"]
    }





     

},
{timestamps:true})

module.exports=mongoose.model('Todo',Todoschema);