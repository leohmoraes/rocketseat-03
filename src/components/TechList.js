import React, { Component } from 'react';

class TechList extends Component {
    state = { // todo o estado/STATE é imutável
        newTech: '', //variavel para armazenar o novo valor
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native',
        ]
    };

    /**
     * Toda a vez que criamos uma funcao propria dentro do componente no estilo de classe
     * esta funcao precisa ser escrita no formato de arrow function
     * de outra forma ela nunca terá acesso a variavel this
     * o this permitirá alterar o state.newTech.> 
     */
    handleInputChange = e => {
        // console.log(e.target.value) // valor do input
        // this.state.newTech =  e.target.value; // ERRO: O estado é imutável, para alterar use um método do compomente
        this.setState({ newTech: e.target.value }); // atualiza a propriedade do state newTech
    }

    handleSubmit = e => {
        e.preventDefault(); // impede o submit e a atualizacao da pagina
        console.log(this.state.newTech)

        /**
         * Precisa criar um novo array
         * copiar as informacoes
         * e adicionar no final o novo valor
         * Para remover não daria para usar um Slide, sempre precisará criar um array
         */
        this.setState({ 
            techs: [... this.state.techs, this.state.newTech ], // ... spread operation
            newTech: ''
        }); 
    }

    render() { // metodo obrigatorio
        // console.log(this.state);

        return (
            //<> // fragment
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(
                        tech => <li key={tech}>{tech}</li> //cada elemento precisa do key
                    )} 
                </ul>
                <input 
                   type="text" 
                   onChange={this.handleInputChange} 
                   value={this.state.newTech} 
                />
                <button type="submit">Enviar</button>
            </form>
            //</>
        );
    }
}

export default TechList;

/**
 * O React nao permite inserir dois elementos sem um elemento "pai"
 * Use um fragmento <> </> para criar um container de elementos
 */
