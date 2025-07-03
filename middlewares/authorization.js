
// cek apakah febrian yang di buku tamu rolenya admin?

async function authorization(req, res, next) {
    try {
        const bukuTamu = req.user

        if (bukuTamu.role === "admin") {
            next()
        }else {
            throw {
                status: 403,
                message: "Forbiden asscess"
            }
        }

    } catch (error) {
        next(error)
    }
}

module.exports = authorization