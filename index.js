const express = require("express");
const app = express();
const product = require("./api/product");
const pixel = require("./api/pixel");

app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/api/increabpixel.gif", pixel);
app.use("/api/pixel", pixel);
app.get('/increabpixel.js', function(req, res) {
    res.sendFile(`${__dirname}/public/increabpixel.js`)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
