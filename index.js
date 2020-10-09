const express = require("express"); //calls express (install with npm install express --save)

const app = express(); //can sometimes be referred to as server. Involks express.
const PORT = 5000; 

app.get("/", (req, res) =>{ 
    //When port is run, serve user this data
    res.json ({ hello: "world" });
});

app.get('/hello', (req, res) => {
    res.json({ hello: "me" })
});

app.listen(5000, () => {
    console.log(`*** Server running on http://localhost${PORT} ***`)
}); 

//api should have 4 oporations: CRUD. Create Read Update Delete.
//
//Read: GET request



