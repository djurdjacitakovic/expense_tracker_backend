
function myLogger(req,res,next)
{
    const today = new Date(Date.now());
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(`Time: ${today.toUTCString()}, URL: ${fullUrl}`);
    next();
}

module.exports = myLogger;
