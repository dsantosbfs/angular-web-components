# Button component
Componente de botão

## Parameters
| Name        | Type                             |
|-------------|----------------------------------|
| appearence  | string [primary\*\*, secundary]  |
| disabled    | boolean                          |
| label*      | string                           |
| loading     | boolean                          |
| size        | string [normal\*\*, small]       |
| type        | string [button\*\*, submit]      |

\* *Parâmetros obrigatórios*

\*\* *Valores default*

## Events
| Name        | Parameters                   |
|-------------|------------------------------|
| $click      | $event                       |


# Sizes

small: height = 32px
normal: height = 48px


## Example
~~~~
<lib-button
  ($click)="myFunction($event)"
  disabled="false"
  label="Button Label"
  loading="false"
  appearence="secundary"
  type="button"
></lib-button>
~~~~
