var express = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

app.get('/api/whoami', (req, res) => {
    console.log(JSON.stringify(req.headers, undefined, 2));
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers['accept-language'].match(/^[^,]+/)[0];
    var os = req.headers['user-agent'].match(/^\S+ \(([^)]+)\)/)[1];

    res.send({
        ipaddress: ip,
        language: language,
        software: os
    });
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});