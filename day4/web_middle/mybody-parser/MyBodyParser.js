

module.exports = {
    json: function () {
        return function (req, res, next) {
            console.log(req.method);
            if (req.method === 'POST') {
                let body = '';
                req.on('data', function (data) {
                    body = body +  data;
                });

                req.on('end', function () {
                    console.log('use   ', body);
                    const bodyObj = JSON.parse(body);
                    console.log(bodyObj.name);
                    console.log(bodyObj.gender);
                    req.body = bodyObj;
                    next()
                })

            } else {
                next()
            }
        }
    }
}
