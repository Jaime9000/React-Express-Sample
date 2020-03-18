/* UPDATE ON WTF EXPRESS IS ACTUALLY DOING
    ESSENTIALLy: Everytime the cliet (browser) wants to get somthing from the source (AKA our files aka the server),
    it will try to access the information based on these 'routes' we are servering.
    Then we specify the path or group of files it can look it with app.use()
    Then we handle requests for get()-ing data from our files(the server) for the client
    OR we will post() data or files from the client to the server
    
    Details:
        --> Each time a app.get() or app.post() makes a request to the server 
        --> the server responds with designaited logic based on the type of request
        --> At that point the server as the option to access body data from the request object / send a response back / store data from request object body into the database
                -->Should be noted that often times even if the main purpose of, for example, a POST request is to push user generated data to the server coming from a form, or any other input generated by the
                    --client/user we will often send a response back to the client anyway. This could be for recycling of the same data they just input/ sending a HTTP status code as part of the body of the response
                    /or simply sending a message telling the user the data was saved successfully which the client can handle and display on the webpage. 
                    --This data similarrly can be accessed as part of the body of the response object and accessed with fetch() on the client side. 





*///



//import express from 'express'
//const import {createConnection} from "typeorm"
const express = require('express')
const path = require('path');

const app = express();

//serve the static files from the react app which is speciefied with the clien/build direcotires  
app.use(express.static(path.join(__dirname, 'client'))); //npm'build'

//API END POINT THAT returns short list of items
///the first paramater defines where we can retreive this data from when asking for it on the client-side
app.get('/api/getList', (request,response) =>{
    var list = [
        {name: "Mane", age: 26 }, {name: "Firmino", age: 28 }, {name: "Salah", age: 27 }]
    
    //convert list to JSON
    response.json(list);
    console.log('Sent list of items');
});
app.post('/api/getList', (request, response) =>{

    const item = request.body.item
    
    //convert list to JSON
    response.json({ message: "your data was saved successfully" });
    console.log('Sent list of items');
});


//handles all requestuest that aren't handled by those above 

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+ '/index.html'));
})



const port = process.env.PORT || 5000;

app.listen(port);
console.log("App is listening on port", +port);





