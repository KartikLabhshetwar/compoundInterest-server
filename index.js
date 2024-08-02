const express = require("express");
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors())

app.get('/compoundinterest', function(req, res){
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const amount = principal * Math.pow((1 + rate / 100), time)
    const ci = amount - principal;

    res.json({
        amount: amount,
        compoundInterest: ci
    })
})


app.listen(PORT)