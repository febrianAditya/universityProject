

function errorHandler(err, req, res, next) {
    console.log(err, "==> INI TERPANGGIL DI ERROR HANDLER");
    let statusCode = err.status || 500
    let messageCode = err.message || "Internal Server Error"
    res.status(statusCode).json({
        message: messageCode
    })
}


module.exports = errorHandler