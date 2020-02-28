# Pagination component
Componente de paginação

## Parameters
| Name        | Type                         |
|-------------|------------------------------|
| collection* | array                        |


\* *Parâmetros obrigatórios*

\*\* *Valores default*

## Events
| Name        | Parameters                   |
|-------------|------------------------------|
| $paginate   | $event                       |

The paginate event returns your collection paginated

## Example
~~~~
<lib-pagination
  ($paginate)="myFunction($event)"
  collection="[ ... ]"
></lib-pagination>
~~~~

