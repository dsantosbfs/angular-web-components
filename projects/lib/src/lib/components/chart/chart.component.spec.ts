import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';

import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartsModule,
      ],
      declarations: [
        ChartComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;

    component.type = 'bar';
    component.data = [
      {
        data: [0, 1],
        label: 'Pré-diabetes'
      },
      {
        data: [1, 2],
        label: 'Diabetes'
      }
    ];
    component.labels = [' Abril 2019' , ' Maio 2019' ];
    component.options = {
      legend: {
        display: false
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should config a line chart', () => {
    const mockData = [
      {
        data: [0, 1],
        label: 'Pré-diabetes'
      },
      {
        data: [1, 2],
        label: 'Diabetes'
      }
    ];

    component.type = 'line';
    component.data = mockData;

    fixture.detectChanges();

    expect(component.datasets).toEqual(mockData as any);
  });

  it('should config a bar chart with no data', () => {
    const mockData = [];

    component.type = 'bar';
    component.data = mockData;

    fixture.detectChanges();

    expect(component.datasets).toBe(null);
  });

  it('should config a bar chart with one dimension', () => {
    const mockData = [{
      data: [15, 34, 8],
      label: 'Pacientes'
    }];

    component.type = 'bar';
    component.data = mockData;

    fixture.detectChanges();

    expect(component.datasets[0].data).toEqual(mockData[0].data as any);
  });

  it('should not sets datasets', () => {
    component.datasets = undefined;

    component.data = null;

    fixture.detectChanges();

    expect(component.datasets).toBe(undefined);
  });

  it('should creates doughnut chart', () => {
    component.type = 'doughnut';

    fixture.detectChanges();

    component.data = [
      {name: 'A partir de 7%', count: 1043, color: '#15E0E0'},
      {name: 'Abaixo de 7%', count: 563, color: '#3C2892'},
      {name: 'Sem exame', count: 510, color: '#A0A9BA'},
    ];

    component.options = {
      doughnutHoleSize: 0.75,
      legend: {
        style: {
          lineColor: '#A0A9BA',
          fontColor: '#1E1E1E'
        }
      }
    };

    expect(component.type).toBe('doughnut');
  });

  it('should creates pizza chart', () => {
    component.type = 'doughnut';

    fixture.detectChanges();

    component.data = [
      {name: 'A partir de 7%', count: 1043, color: '#15E0E0'},
      {name: 'Abaixo de 7%', count: 563, color: '#3C2892'},
      {name: 'Sem exame', count: 510, color: '#A0A9BA'},
    ];

    component.options = {
      legend: {
        style: {
          lineColor: '#A0A9BA',
          fontColor: '#1E1E1E'
        }
      }
    };

    expect(component.type).toBe('doughnut');
  });
});
