import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Table from './Table';
import Chart from './Chart';

function App() {
    return (
        <div>
            <Navbar />
            <Title />
            <div className="container row chart-table">
                <Table />
                <Chart />
            </div>
        </div>
    );
}

export default App;