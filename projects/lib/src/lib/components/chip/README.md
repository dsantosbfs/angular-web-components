# Chip component
Componente de badge

## Parameters
| Name        | Type                         |
|-------------|------------------------------|
| label*      | string                       |
| remove      | any                          |
| small       | boolean                      |

\* *Parâmetros obrigatórios*

\*\* *Valores default*

## Events
| Name        | Parameters                   |
|-------------|------------------------------|
| $onRemove   | $event                       |

Anything you pass in "remove" input, is returned to you in $onRemove callback as parameter

## Example
~~~~
<lib-chip
  label="Chip Label"
></lib-chip>
~~~~
