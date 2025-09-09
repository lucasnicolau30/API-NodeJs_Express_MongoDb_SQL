// metodos {

// index: listagem de sessoes
// store: criar uma sessao
// show: quando queremos listar uma unica sessao
// update: quando queremos atualizar uma sessao 
// destroy: quando queremos deleter uma sessao

//}

class HouseController{

    async store(req, res){
        console.log(req.body);
        console.log(req.file);

        return res.json( {ok: true} );
    }

}

export default new HouseController();