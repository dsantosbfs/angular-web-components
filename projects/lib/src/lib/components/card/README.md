# Card component
O componente Card é utilizado para apresentar informações

## Parameters
| Name          | Type                            |
|---------------|---------------------------------|
| data*         | CardInterface                   |
| status        | string [normal\*\*, warning]    |
| type          | string [default\*\*, big-number]|

\* *Parâmetros obrigatórios*

\*\* *Valores default*

## Example default
~~~~
<lib-card
  data="{ 
    title: 'Card title'
    description: 'Card description'
    helper: 'Text to card helper'
  }"
>
  Card content
</lib-card>
~~~~

## Example big-number
~~~~
<lib-card
  data="{ 
    title: 'Card title'
    number: 2
    helper: 'Text to card helper'
  }"
></lib-card>
~~~~
