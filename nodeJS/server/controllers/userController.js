const ApiError = require('../error/ApiError');
class UserController {
    async registration(req, res){

    };

    async login(req, res){
        
    };

    async check(req, res, next){
        const query = req.query;
        if(!query.id){
            return next(ApiError.badRequest('Не задан ID'));
        }
        res.json(query.id);
    };
}

module.exports = new UserController();