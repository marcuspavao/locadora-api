const admin = (req, res, next) => {
    if(req.jwt.id ===1){
        next();
    }
    else{
        res.status(400).json({message:"Somente usuários administrativos podem executar essa função."});
    }
}
module.exports = admin;