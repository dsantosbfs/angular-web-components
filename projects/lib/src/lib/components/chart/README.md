# Chart component
Componente de graficos utilizando a lib ChartJs

## Parameters
| Name          | Type                           |
|---------------|--------------------------------|
| data*         | ChartDatasets                  |
| labels*       | string[]                       |
| options       | ChartOptions                   |
| type*         | ChartType                      |


\* *Parâmetros obrigatórios*

Para mais informações sobre os tipos de dados e as opções [Veja a documentação do ChartJs](https://www.chartjs.org/docs/latest/)

## Example
~~~~
<lib-chart
  [data]="[
      {
        "data": [20, 8, 10],
        "label": "0 a 18 anos"
      },
      {
        "data": [20, 6, 8],
        "label": "19 a 59 anos"
      },
      {
        "data": [1, 15, 5],
        "label": "Acima de 59 anos"
      }
    ]"
  [labels]="["Piora", "Igual", "Melhora"]"
  [options]=""
  type="bar"
>
</lib-chart>
~~~~
