import express from 'express';

const app = express();
//app.get('/',(req,res)=>{
    //res.send('Server is ready')
//})

const port = process.env.PORT || 3000;

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A Joke',
            content:'This is a joke',

        },
        {
            id:2,
            title:'Another Joke',
            content:'This is another joke',
        },
        {
            id:3,
            title:'This is the third joke',
            content:'This is joke number three'
        },
        {
            id:4,
            title:'This is joke number four',
            content:'This is the fourth joke'
        }
    ];
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
})