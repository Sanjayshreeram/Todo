const {Router}=require('express');
const {getnotes,createnotes,updatenotes,Deletenotes}=require('../controller/todocontroller')

const route=Router();

route.get('/',getnotes);
route.post('/create',createnotes);
route.post('/update',updatenotes);
route.post('/delete',Deletenotes);


module.exports=route;