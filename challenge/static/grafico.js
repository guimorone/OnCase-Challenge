const data = {
    labels: [
      'Hugo Silva',
      'Carlos Moura',
      'Eliza Souza',
      'Fernanda Oliveira',
      'Anderson Santos'
    ],
    datasets: [{
      label: 'Participation',
      data: [20, 5, 20, 15, 40],
      backgroundColor: [
        '#2D97DE',
        '#15BA9A',
        '#9C56B9',
        '#BDC3C7',
        '#E94A35'
      ],
      hoverOffset: 4
    }]
  };
const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'right', // posicionar os labels na direita
                labels: {
                    font: {
                        size: 30
                    }
                }
            }
        },
        title: {
            display: false,
        },
    }
};

const myChart = new Chart(
    document.getElementById('chart'),
    config
);