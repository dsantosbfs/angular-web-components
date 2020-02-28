export class DoughnutChart {
  private canvas;
  private centerX;
  private centerY;
  private context;
  private options;
  private pieRadius;
  private data;

  constructor(config) {
    this.data = config.data;
    this.options = config.options.options;
    this.canvas = config.options.canvas;
    this.context = this.canvas.getContext('2d');

    this.setCanvasSize();

    window.addEventListener('resize', () => {
      this.setCanvasSize();
    });
  }

  private setCanvasSize(): void {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetWidth / 2;

    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;

    this.pieRadius = Math.min(this.centerX, this.centerY) / 3;

    this.draw();
  }

  private drawPieSlice(radius, startAngle, endAngle, color): void {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.moveTo(this.centerX, this.centerY);
    this.context.arc(this.centerX, this.centerY, radius, startAngle, endAngle);
    this.context.closePath();
    this.context.fill();
  }

  public draw(): void {
    let totalValue = 0;
    let val;
    let offset = 0;
    let startAngle = 0;
    let position;

    this.context.strokeStyle = this.options.legend.style.lineColor;

    if (this.options.doughnutHoleSize) {
      offset = (this.pieRadius * this.options.doughnutHoleSize) / 2 + 15;
    }

    for (const item in this.data) {
      if (this.data.hasOwnProperty(item)) {
        totalValue += this.data[item].count;
      }
    }

    const legendStartSize = (offset + this.pieRadius / 2);
    const legendEndSize = (15 + offset + this.pieRadius / 2);

    for (const item in this.data) {
      if (this.data.hasOwnProperty(item)) {
        val = this.data[item];
        const sliceAngle = 2 * Math.PI * val.count / totalValue;
        const labelText = `${val.count} pacientes`;

        this.drawPieSlice(
          this.pieRadius,
          startAngle,
          startAngle + sliceAngle,
          val.color
        );

        // Legend
        const legendCos = Math.cos(startAngle + sliceAngle / 2);
        const legendSin = Math.sin(startAngle + sliceAngle / 2);
        const legendStartPositionX = this.centerX + legendStartSize * legendCos;
        const legendStartPositionY = this.centerY + legendStartSize * legendSin;
        const legendEndPositionX = this.centerX + legendEndSize * legendCos;
        const legendEndPositionY = this.centerY + legendEndSize * legendSin;

        this.context.fillStyle = this.options.legend.style.fontColor;
        this.context.font = '16px Arial';
        const textWidth = this.context.measureText(labelText).width;

        if (legendEndPositionX < this.centerX) {
          position = legendEndPositionX - 10 - textWidth;
        } else {
          position = legendEndPositionX + 10 + textWidth;
        }

        this.context.beginPath();
        this.context.moveTo(legendStartPositionX, legendStartPositionY);
        this.context.lineTo(legendEndPositionX, legendEndPositionY);
        this.context.lineTo(position, legendEndPositionY);
        this.context.stroke();

        if (position > this.centerX) {
          position = position - textWidth;
        }

        this.context.fillText(labelText, position, legendEndPositionY - 10);
        this.context.font = '12px Arial';
        this.context.fillText(val.name, position, legendEndPositionY + 18);

        startAngle += sliceAngle;
      }
    }

    // if is a doughnut chart
    if (this.options.doughnutHoleSize) {
      this.drawPieSlice(
        this.options.doughnutHoleSize * this.pieRadius,
        0,
        2 * Math.PI,
        '#fff'
      );
    }
  }
}
