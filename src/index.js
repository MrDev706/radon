const express = require('express');
var bodyParser = require('body-parser'); 

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mdw1 = function (req, res, next) {
    let curDate = new Date()
    let struct = curDate.getDate() + " " +
                curDate.getDay() + " " +
                curDate.getMonth();
    let Ip = req.ip
    let path = req.originalUrl 

    console.log("result is ${Ip}" + Ip + curDate + struct + path)
    next()

}
app.use(mdw1)






mongoose.connect("mongodb+srv://ddutta706:Kp9AhM76EvHSQyYk@cluster0.levfaad.mongodb.net/test", {
    useNewUrlParser: true
}).then(() => console.log("mongdb conection succsesfull"))
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

