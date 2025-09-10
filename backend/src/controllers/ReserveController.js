import Reserve from "../models/Reserve";

class ReserveController{

    async store(req, res){

        const { user_id } = req.headers;
        const { house_id } = req.params;
        const { date } = req.body;


        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date,
        });

        // dar mais informações
        // sintaxe nova do mongoose 6
        await reserve.populate([{ path: 'house' }, { path: 'user' }]);
        
        return res.json(reserve);
    }
}

export default new ReserveController(); 