import { storiesOf } from '@storybook/angular';
import { select, withKnobs } from '@storybook/addon-knobs';

import { ChartComponent } from './chart.component';

import readme from './README.md';
import { ChartModule } from './chart.module';

const stories = storiesOf('Chart', module);

const options: any = {
  Line: {
    datasets: [
     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
   ],
   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
   type: 'line',
   options: {
     responsive: true,
     scales: { xAxes: [{}], yAxes: [{}] },
   }
  },
  Bar: {
    datasets: [
     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
   ],
   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
   type: 'bar',
   options: {
     responsive: true,
     scales: { xAxes: [{}], yAxes: [{}] },
   }
  },
  Radar: {
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ],
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    type: 'radar',
    options: {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
    }
  },
  Doughnut: {
    datasets: [
      {name: 'A partir de 7%', count: 1043, color: '#15E0E0'},
      {name: 'Abaixo de 7%', count: 563, color: '#3C2892'},
      {name: 'Sem exame', count: 510, color: '#A0A9BA'},
    ],
    type: 'doughnut',
    options: {
      doughnutHoleSize: 0.75,
      legend: {
        style: {
          lineColor: '#A0A9BA',
          fontColor: '#1E1E1E'
        }
      }
    }
  }
};

stories.addDecorator(withKnobs);

stories.add('default', () => ({
  component: ChartComponent,
  moduleMetadata: {
    imports: [ChartModule]
  },
  props: {
    chartData: select('Data', options, options.Bar),
  },
  template: `
    <lib-chart
      [type]="chartData.type"
      [data]="chartData.datasets"
      [labels]="chartData.labels"
      [options]="chartData.options"
    >
    </lib-chart>
		`
}),
{
  notes: { markdown: readme },
});
