# Toast component

## Parameters
| Name        | Type                                  |
|-------------|---------------------------------------|
| show        | boolean                               |
| message*    | string                                |
| timer       | boolean [3s\*\*]                      |
| type        | string [success\*\*, warning, error]  |

\* *Parâmetros obrigatórios*

\*\* *Valores default*

## Events
| Name        | Parameters                   |
|-------------|------------------------------|
| $close      | $event                       |


## Example
~~~~
<lib-toast
  ($click)="myFunction($event)"
  show="false"
  message="Toast message"
  timer="5"
  type="success"
></lib-toast>
~~~~
