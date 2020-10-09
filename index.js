const express = require("express"); //calls express (install with npm install express --save)
const app = express();
const PORT = 5000;


app.listen(5000, () => {
    console.log(`*** Server running on http://localhost${PORT} ***`)
});