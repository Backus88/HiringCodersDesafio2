import React, { component } from 'react';

export default class Cadastro extends React.Component {
    state = {
      user: '',
      sobrenome:'',
      email: '',
      cep: '',
      numero: ''
    };
   
    handleChange = (event) => {
      const input = event.target;
      const value = input.value;
   
      this.setState({ [input.name]: value });
    };
   
    handleFormSubmit = () => {
        let dataCadastro = localStorage.getItem('dataCadastro');
        let newData = dataCadastro ? JSON.parse(dataCadastro): [];

        const newCadastro = {nome: this.state.user, sobrenome: this.state.sobrenome, email: this.state.email, cep: this.state.cep, numero: this.state.numero}
        newData.push(newCadastro);

        localStorage.setItem('dataCadastro', JSON.stringify(newData));
    
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
                    Sobrenome:<br></br> <input name="sobrenome" value={this.state.sobrenome} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                     Email:<br></br> <input name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                    Cep:<br></br> <input name="cep" value={this.state.cep} onChange={this.handleChange}/>
                    </label><br></br>
                    <label>
                    Numero:<br></br> <input name="numero" value={this.state.numero} onChange={this.handleChange}/>
                    </label><br></br>
                
                    <button type="submit">Enviar</button>
                </form>
                </section>
      );
    } 
  }