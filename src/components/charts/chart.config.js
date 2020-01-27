export const data = {
  datasets: [{
    label:           '',
    backgroundColor: 'rgba(3, 169, 244, 1)',
    borderColor:     'rgba(3, 124, 197, 1)',
  }],
};

export const options = {
  legend:              false,
  maintainAspectRatio: false,
  layout:              {
    padding: {
      left:   10,
      right:  20,
      top:    20,
      bottom: 30,
    },
  },
  scales: {
    xAxes: [{
      maxBarThickness: 40,
    }],
  },
  tooltips: {
    backgroundColor: 'rgba(244,246,249,1)',
    titleFontColor:  'rgba(155,155,155,1)',
    bodyFontColor:   'rgba(155,155,155,1)',
    displayColors:   false,
    bodyFontStyle:   'bold',
    borderWidth:     1,
    borderColor:     'rgba(216,221,230,1)',
    caretSize:       8,
    xPadding:        12,
    yPadding:        12,
    callbacks:       {
      title: () => '',
      label: (tooltipItem) => {
        let label = '';

        if (label) label += ': ';

        label += Math.round(tooltipItem.yLabel * 100) / 100;
        return label;
      },
    },
  },
};
