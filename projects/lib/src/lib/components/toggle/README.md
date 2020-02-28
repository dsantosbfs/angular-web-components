# Toggle component

## Parameters
| Name        | Type                         |
|-------------|------------------------------|
| label       | string                       |
| disabled    | boolean                      |
| value       | any                      |


\* *Parâmetros obrigatórios*

\*\* *Valores default*

## Events
| Name        | Parameters                   |
|-------------|------------------------------|
| $onChange   | $event                       |

$onChange interface

~~~~
{
  value: any,
  checked: boolean
}
~~~~

## Example
~~~~
<lib-toggle
  ($onChange)="myFunction($event)"
  [label]="label"
  [value]="{ test: true }"
></lib-toggle>
~~~~

