# Select component
Campo do tipo select

## Parameters
| Name           | Type          |
|----------------|---------------|
| label*         | string        |
| data*          | array         |
| disabled       | boolean       |

\* *Parâmetros obrigatórios*

## Events
| Name        | Parameters                   |
|-------------|------------------------------|
| $onSelect   | $event                       |

## Example
~~~~
<lib-select
  ($onSelect)="myFunction($event)"
  data="[{ label: 'option 1', value: 1 }]" 
  label="Select box"
></lib-select>
~~~~
