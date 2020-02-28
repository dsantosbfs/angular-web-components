# Card Group component
O componente Card Group é utilizado para criar um grupo de conteúdo com titulo e possíbilidade de adicionar algum conteúdo no header do component

## Parameters
| Name          | Type                           |
|---------------|--------------------------------|
| label         | string                         |


## Example
~~~~
<lib-card-group
  [label]="Label"
>
  // Para adicionar algum conteúdo no header você deve seguir a estrutura abaixo colocando uma div com a key word header como atributo
  <div header>
    <lib-button
      label="Example Button Label"
    >
    </lib-button>
  </div>
  // Para adicionar algum conteúdo no body você deve seguir a estrutura abaixo colocando uma div com a key word body como atributo
  <div body>
    Example of card group content
  </div>
</lib-card-group>
~~~~
