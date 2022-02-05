// Adicionar e remover dados do gráfico
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach(dataset => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach(dataset => {
        dataset.data.pop();
    });
    chart.update();
}

const initialValues = [20, 5, 20, 15, 40]
const initialNames = [
    'Hugo Silva',
    'Carlos Moura',
    'Eliza Souza',
    'Fernanda Oliveira',
    'Anderson Santos'
]

const backgroundColors = [
    '#2D97DE',
    '#15BA9A',
    '#9C56B9',
    '#BDC3C7',
    '#E94A35',
    '#000000',
    '#41220A',
    '#DA588C',
    '#EBCC0D',
    '#9F0508',
    '#005900',
    '#7BE60F',
    '#009ECB'
]

const data = {
    labels: initialNames,
    datasets: [{
      label: 'Participation',
      data: initialValues,
      backgroundColor: backgroundColors,
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
    $('#chart'),
    config
);

myChart.update('active');

// quando clicar em send
/*$('button').click(function(){
    addData(myChart, 'Guilherme', 10);
});*/