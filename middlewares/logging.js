
function myLogger(req,res,next)
{
    const d= new Date(Date.now());
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + ", " +d.getHours() + ":" + d.getMinutes()+"h";
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(`Time: ${datestring}, URL: ${fullUrl}`);
    next();
}

module.exports = myLogger;
