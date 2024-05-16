const express=require('express');
const bodyParser = require("body-parser");
const app=express();
const PORT=5000;

app.use(express.json());

const users=[
    {
        id:1,
        firstname:"Prashansa",
        lastname:"Prakash",
        age:20
    },
    {
        id:2,
        firstname:"Eliana",
        lastname:"Prakash",
        age:20
    }
]

//ROUTES

app.get('/',(req,res)=>{
    res.send("This is the homepage");
})


app.get('/api/users/',(req,res)=>{
    res.send(users);
})

app.get("/api/users/:id", (req, res) => {
    const  {id}  = req.params; 
    const foundUser = users.find((user) => user.id ===id);
    console.log(foundUser);
    return res.send(foundUser);
});

app.post("/api/users/",(req,res)=>{
    const user=req.body
    users.push(user)
    res.send(user)
})

app.put("/api/users/:id",(req,res)=>{
    const {id}=req.params
    const updateUser=req.body
    const index=users.findIndex((user)=>user.id==id)
    users[index]={...users[index],...updateUser}
    res.send(users[index])
})




// app.get('/api/users/:id',(req,res)=>{
//     const {uid}=req.params
//     console.log(`${uid}`);
//     const foundUser=users.find((user)=>user.id===uid);
//     res.send(foundUser)
// })



app.listen(PORT,()=>console.log(`Server running on PORT, ${PORT}`));