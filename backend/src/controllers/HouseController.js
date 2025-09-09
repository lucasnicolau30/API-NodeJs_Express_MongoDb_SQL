// metodos {

// index: listagem de sessoes
// store: criar uma sessao
// show: quando queremos listar uma unica sessao
// update: quando queremos atualizar uma sessao 
// destroy: quando queremos deleter uma sessao

//}
import House from '../models/House';

class HouseController{

    async store(req, res){

        const {thumbnail, description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: thumbnail,
            description,
            price,
            location,
            status,
        });

        return res.json(house);
    }

}

export default new HouseController();