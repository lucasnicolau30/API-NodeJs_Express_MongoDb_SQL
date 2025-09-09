// metodos {

// index: listagem de sessoes
// store: criar uma sessao
// show: quando queremos listar uma unica sessao
// update: quando queremos atualizar uma sessao 
// destroy: quando queremos deleter uma sessao

//}

import User from '../models/User';

class SessionController{

    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        // let user = await User.create({ email });

        return res.json(user);
    }

}

export default new SessionController();