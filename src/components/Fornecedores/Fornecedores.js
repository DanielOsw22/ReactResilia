import axios from 'axios';

const fornecedores = axios.create({
    baseURL: 'https://hamburgueria-resilia.herokuapp.com/fornecedor'
});

export default fornecedores