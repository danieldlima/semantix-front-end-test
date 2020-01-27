export const dataConfig = {
  labels:   [],
  datasets: [{
    label:                     'today',
    fill:                      false,
    lineTension:               0.1,
    backgroundColor:           'rgba(191,63,255,1)',
    borderColor:               'rgba(191,63,255,1)',
    borderCapStyle:            'square',
    borderDash:                [],
    borderDashOffset:          0.0,
    borderJoinStyle:           'miter',
    pointBorderColor:          'rgba(191,63,255,1)',
    pointBackgroundColor:      'white',
    pointBorderWidth:          3,
    pointHoverRadius:          8,
    pointHoverBackgroundColor: 'rgba(191,63,255,1)',
    pointHoverBorderColor:     'rgba(191,63,255,1)',
    pointHoverBorderWidth:     3,
    pointRadius:               4,
    pointHitRadius:            10,
    data:                      [],
    spanGaps:                  false,
  }, {
    label:                     'yesterday',
    fill:                      false,
    lineTension:               0.1,
    backgroundColor:           'rgba(48,63,159,1)',
    borderColor:               'rgba(48,63,159,1)',
    borderCapStyle:            'butt',
    borderDash:                [],
    borderDashOffset:          0.0,
    borderJoinStyle:           'miter',
    pointBorderColor:          'rgba(48,63,159,1)',
    pointBackgroundColor:      'white',
    pointBorderWidth:          3,
    pointHoverRadius:          8,
    pointHoverBackgroundColor: 'rgba(48,63,159,1)',
    pointHoverBorderColor:     'rgba(48,63,159,1)',
    pointHoverBorderWidth:     3,
    pointRadius:               4,
    pointHitRadius:            10,
    data:                      [],
    spanGaps:                  false,
  },

  ],
};

export const options = {
  legend: {
    textDirection: 'ltr',
    rtl:           false,
    position:      'top',
    align:         'end',
    offset:        true,
    labels:        {
      usePointStyle: true,
      boxWidth:      100,
      padding:       20,
    },
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      left:   20,
      right:  20,
      top:    0,
      bottom: 30,
    },
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
      scaleLabel: {
        display:     false,
        labelString: '',
        fontSize:    20,
      },
    }],
  },
};
