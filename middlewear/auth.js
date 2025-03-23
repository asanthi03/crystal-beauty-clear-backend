import jwt from "jsonwebtoken";


// //token request recieve and middlewear
export default function verifyJwt
    (req, res, next) {
    const header = req.header("Authorization");
    if (header != null) {
        const token = header.replace("Bearer ", "")  //remove the bearer space part
        jwt.verify(token, "random456", (err, decoded) => {
            console.log(decoded) // get the info from token
            if (decoded != null) {
                req.user = decoded
            }
        })
    }
    next()
}
