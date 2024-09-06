/// Summary: CORS (preflight and headers)
const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization");

    if (req.method === "OPTIONS") {
        console.log(res.headers)
        return res.status(200).end()
    }

    next();
}

module.exports = cors
