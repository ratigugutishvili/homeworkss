// // const fetch = require('node-fetch')
// // const {writeFile} = require('fs')

// // fetch('https://jsonplaceholder.typicode.com/posts/')
// //     .then((res) =>{
// //         const stringed = JSON.stringify(res)
// //         writeFile('data.json', stringed, function(err){
// //             console.log('done');
// //         })
// //     })
// //     .catch((res) =>{console.log('failed');})
// // const http = require("http"); 
// // const posts = [
// //     {
// //         name: "post 1"
// //     },
// //     {
// //         name: "post2"
// //     }
// // ]

// // res.setHeader("Content-Type", "application/json");

// // const users = [
// //     {
// //         id: 1,
// //         name: "george"
// //     },
// //     {
// //         id: 2,
// //         name:"alex"
// //     }
// // ]

// // create a server object:
// // http
// //   .createServer(function (req, res) {
// //     switch (req.url) {
// //       case "/":
// //         res.setHeader("Content-Type", " text/html");
// //         res.writeHead(200);
// //         res.end("<div>hello word</div>");
// //         break;
// //         case "/posts":
// //             res.setHeader("Content-Type", "application/json");
// //             res.writeHead(200);
// //             res.end(JSON.stringify(posts));
// //             break;
// //             case "/users":
// //                 res.setHeader("Content-Type", "application/json");
// //                 res.writeHead(404);
// //                 res.end(JSON.stringify({ error: "Resource not found" }));
// //                 break;
// //       default:
// //         res.writeHead(404);
// //         res.end(JSON.stringify({ error: "Resource not found" }));
// //     }
// //   })
// //   .listen(8080);


// // DAVALEBA 1 


// const moment = require('moment')



// console.log(moment("20230910", "YYYYMMDD").from("20230616", "YYYYMMDD"));







// // create a server object:
// // http
// //   .createServer(function (req, res) {
// //     switch (req.url) {
// //       case "/":
// //         res.setHeader('Content-Type', 'text/html');
// //         res.writeHead(200);
// //         res.sendFile(__dirname + "/index.html");
// //         res.end('./index.js');

// //         break;
// //       default:
// //         res.writeHead(404);
// //         res.end(JSON.stringify({ error: "Resource not found" }));
// //     }
// //   })
// //   .listen(8080);





// const express = require("express");
// const app = express();
// var http = require("http");
// app.listen(3000, () => {
//   console.log("Application started and Listening on port 3000");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//     res.redirect('/rati')
// });

// app.get("/rati", (req, res)=>{
//     res.end('rameee')
// })

const program = require('commander')
const moment = require('moment')
const {writeFile} = require('fs')
const {readFile} = require('fs')


program
.option('-amount <char>')
.option('-type <char>')
.option('-category <char>')
.option('-delete <char>')
.option('-search <char>')

program.parse()
const options = {amount: program.opts().Amount, type:program.opts().Type,category:program.opts().Category}
const finale = {...options,date: moment().format('MMMM Do YYYY, h:mm:ss a'),id: Date.now()}
readFile('rame.json', 'utf8', function(err, data)
{
    if(program.opts().Amount !== undefined){
        if(err)
        {
            const finalarr = [finale]
            writeFile('rame.json', JSON.stringify(finalarr),function(err){
                if(err)
                {
                    console.log('failed');
                }
                console.log('done');
            })
            return
        }
        setTimeout(function(){
            const maindata = JSON.parse(data)
            writeFile('rame.json', JSON.stringify(maindata.concat(finale)),function(err){
                if(err)
                {
                    console.log('failed');
                }
                console.log('done');
            })
        },1000)
    }
})


readFile('rame.json', 'utf8', function(err, data){
    if(err){
        console.log('object doesnt exist');
        return
    }
    const finaldata = JSON.parse(data)
    const objectweneed = finaldata.filter((el)=>{
        return el.id !=  program.opts().Delete
    })
    writeFile('rame.json', JSON.stringify(objectweneed), function(err){
        if(err){
            console.log('ERORR');
        }
        console.log('DONEE');
    })
})


readFile('rame.json', 'utf8', function(err,data){
    if (data !== undefined) {
        const maindata = JSON.parse(data)
        if (program.opts().Search !== undefined) {
            const filtered = maindata.filter((el)=>{
                return Object.values(el).includes(program.opts().Search);
            })
            console.log(filtered);
        }
    }
})