import cepServices from '../services/cepService';

class CepController {
    //http://localhost:3333/cep/01200030
    show = (req, res) => {
        const { cep } = req.params;

        //url do viacep
        const url = `${cep}/json`;

        cepServices.get(url).then(response => {
            res.json(response.data);
        });
    }

    //http://localhost:3333/cep?uf=RS&cidade=Porto Alegre&rua=A
    query = (req, res) =>{
        const { uf, cidade, rua } = req.query;

        //montar url no padrão viaCep
        //RS/Porto Alegre/Domingos/json/
        const url = `${uf}/${cidade}/${rua}/json`;

        cepServices.get(url).then(response => {
            res.json(response.data);
        }).catch(error => res.send(error));
    }
}

export default new CepController();