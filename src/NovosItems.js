import React, { component } from 'react';

export default class NovosItems extends React.Component {
    state = {
      nome: '',
      preco:'',
      quantidade: '',
      imagem: ''
    };
   
    handleChange = (event) => {
      const input = event.target;
      const value = input.value;
   
      this.setState({ [input.name]: value });
    };
   
    handleFormSubmit = () => {
        let dataCadastro = localStorage.getItem('dataItems');
        let newData = dataCadastro ? JSON.parse(dataCadastro): [];

        const newCadastro = {nome: this.state.nome, preco: this.state.preco, quantidade: this.state.quantidade, imagem: this.state.imagem}
        newData.push(newCadastro);

        localStorage.setItem('dataItems', JSON.stringify(newData));
    
      };
    render() {
        return (
            <section>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                    Nome:<br></br> <input name="user" value={this.state.user} onChange={this.handleChange}/>
                    </label>
                    <br></br>
                    <label>
                    Preço:<br></br> <input name="preco" value={this.state.preco} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                    Quantidade:<br></br> <input name="quantidade" value={this.state.quantidade} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                    Imagem:<br></br> <input name="imagem" value={this.state.imagem} onChange={this.handleChange}/>
                    </label><br></br>

                    <button type="submit">Enviar</button>
                </form>
            </section>
      );
    } 
  }