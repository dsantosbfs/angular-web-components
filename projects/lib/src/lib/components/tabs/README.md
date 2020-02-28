# Tabs component
Componente de tabs

## Parameters
| Name          | Type                           |
|---------------|--------------------------------|
| data*         | object                         |

\* *Parâmetros obrigatórios*

## Example
~~~~
<lib-tabs
  [data]="[
      {
        label: 'Tab 1',
        id: 'tab1',
        active: true
      },
      {
        label: 'Tab 2',
        id: 'tab2'
      },
      {
        label: 'Tab 3',
        id: 'tab3'
      },
   ]"
>
  <div id="tab1">Content 1</div>
  <div id="tab2">Content 2</div>
  <div id="tab3">Content 3</div>
</lib-tabs>
~~~~
