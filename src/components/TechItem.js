import React from 'react';

/**
 * Este componente, como não vair estado/state e nem manipular alguma informacao,
 * pode ser usado no formato de function
 * o this nao pode acessar os valores de outra classe
 * NENHUM COMPONENTE NAO CONSEGUE ACESSAR VARIAVEIS OU ESTADO
 * PARA ISTO USA-SE A PROPRIEDADE, e elas sao obtidas nos parametros deste componente
 * o key deve estar no componente que importa
 * ....
 * Como este componente é uma funcao, pode receber como parametro
 * TechItem (props) {
 *   props.tech
 * }
 * SE ESTE COMPONENTE FOSSE DE CLASSE
 * TERIA QUE USAR: this.props.tech
 * ....
 * Nao consegue usar this.handleDelete do TechList e não pode ser criado este método aqui
 * porque não tem acesso ao estado do TechList....
 * Portanto ela deve ser recebida como uma propriedade que é uma funçãp
 * onDelete={() => this.handleDelete(tech)}
 * ....
 */
function TechItem({ tech, onDelete }) {
  // para colocar em mais linhas, use um parenteses
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li> // cada elemento precisa do key
  );
}

export default TechItem;
