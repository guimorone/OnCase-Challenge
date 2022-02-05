import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

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

function Chart() {
    return (
        <div className="col" id="chart">
            <Doughnut data={{
            labels: initialNames,
            datasets: [
                {
                    id: 1,
                    label: 'Participation',
                    data: initialValues,
                    backgroundColor: backgroundColors,
                },
                ],
            }}
            options={{
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
            }}
            />
        </div>
    );
}

export default Chart;