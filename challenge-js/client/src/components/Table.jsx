import React from 'react';

function Table() {
    return (
        <div class="col">
            <table class="table table-bordered" id="tabela">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col" class="alignCenterText">Participation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" class="alignCenterText">1</th>
                        <td>Carlos</td>
                        <td>Moura</td>
                        <td class="alignCenterText">5%</td>
                        </tr>
                        <tr>
                        <th scope="row" class="alignCenterText">2</th>
                        <td>Fernanda</td>
                        <td>Oliveira</td>
                        <td class="alignCenterText">15%</td>
                        </tr>
                        <tr>
                        <th scope="row" class="alignCenterText">3</th>
                        <td>Hugo</td>
                        <td>Silva</td>
                        <td class="alignCenterText">20%</td>
                        </tr>
                        <tr>
                        <th scope="row" class="alignCenterText">4</th>
                        <td>Eliza</td>
                        <td>Souza</td>
                        <td class="alignCenterText">20%</td>
                        </tr>
                        <tr>
                        <th scope="row" class="alignCenterText">5</th>
                        <td>Anderson</td>
                        <td>Santos</td>
                        <td class="alignCenterText">40%</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;