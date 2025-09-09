// metodos {

// index: listagem de sessoes
// store: criar uma sessao
// show: quando queremos listar uma unica sessao
// update: quando queremos atualizar uma sessao 
// destroy: quando queremos deleter uma sessao

//}
import House from '../models/House';
import User from '../models/User';

class HouseController{

    async index(req, res){
        
        const { status } = req.query;

        const houses = await House.find({ status });

        return res.json(houses);
    }

    async store(req, res){

        const {thumbnail, description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail,
            description,
            price,
            location,
            status,
        });

        return res.json(house);
    }

    async update(req, res){

        const { house_id } = req.params;

        const {thumbnail, description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        if(String(user._id) !== String(houses.user)){
            return res.status(401).json({ error: 'Nao autorizado' });
        }

        await House.updateOne({ _id: house_id }, {
            user: user_id,
            thumbnail,
            description,
            price,
            location,
            status,
        })

        return res.send();
    }

}

export default new HouseController();