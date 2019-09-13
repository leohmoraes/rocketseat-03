import React, { Component } from 'react';
import TechItem from './TechItem';


/**
 * O componente em formato de classe, pode ter estado e variaveis
 * que sao alteradas via metodos existentes,
 * estes metodos devem estar neste mesmo componente.
 * Ao contrario do componente em formato de funcao
 * que nao consegue acessar as variaveis de outro componente
 * e pode receber variaveis, objetos, classes, componente e funcoes via propriedade do elemento
 * ....
 **/

class TechList extends Component {
    state = { // todo o estado/STATE é imutável
        newTech: '', //variavel para armazenar o novo valor
        techs: [
            // 'Node.JS',
            // 'ReactJS',
            // 'React Native',
        ]
    };

    /**
     * Ciclo de vida de um componente: 1
     * Executado assim que o componente aparece na tela
     */
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if(techs) {
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    /** 
     * Ciclo de vida de um componente: 2
     * O mais importante. Executado sempre que houver alteracoes nas props do componente ou no estado/state
     * Visualiza no DevTools, Application, LocalStorage
     */
    // componentDidUpdate(prevProps, prevState) {
    componentDidUpdate(_, prevState) { // nao será usado o primeiro argumento
        // this.props, this.state
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem( 'techs', JSON.stringify(this.state.techs)); //localstorage nao aceita array, transformado JSON
        }
    }

    /**
     * Ciclo de vida de um componente: 3
     * Pouco usado. Executado quando o component deixa de existir
     */
    componenteWillUnmount(){
        /*
        Poderia ser usado no TechItem, 
        por exemplo, em algum motivo se tivesse no componentDidMount um evento eventListener 
        ele fica ouvindo o evento do usuario, o cursor por exemplo, ele não morre quando o componente finaliza.
        entao WillUnmounte seria usada para limpar uma sujeira na aplicação e reseta o estado antes do uso
        */
    }

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

    /**
     * Botao Remover, recebe um item e filtra todos os itens que diferem deste item. 
     */
    handleDelete = (tech) => {
        // console.log("tech delete",tech)
        this.setState({ 
            techs: this.state.techs.filter(t => t !== tech) 
        })
    }

    /**
     * Observacoes
     * onClick={this.handleDelete(tech)} = executa assim que percorre o item
     * onClick={() => this.handleDelete(tech)} = usando uma arrow function, ele roda somente apos o click
     */
    render() { // metodo obrigatorio
        // console.log(this.state);

        return (
            //<> // fragment
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(
                        tech => 
                        (
                            <TechItem  
                            key={tech} 
                            tech={tech} 
                            onDelete={() => this.handleDelete(tech)}
                            />
                        )
                        // ( // para colocar em mais linhas, use um parenteses
                        //     <li key={tech}>
                        //         {tech} 
                        //         <button onClick={() => this.handleDelete(tech)} type="button">Remover</button> 
                        //     </li> //cada elemento precisa do key
                        // )
                    )} 
                    <TechItem teste="testando sem a variavel tech" />
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

 /**
    Duas formas de definir valores padroes em componentes em formato de classe
    Fora da classe!
    TechList.defaultProps = {
        tech: 'Default item',
    };

    ...{
    static defaultProps = {
        tech: 'Default item',
    };
    ...
    }

    Declarar as propTypes no compenente formato de classe
    ...{
    static propTypes = {
        // nao mostrou um exemplo
    };
    ...
  */
