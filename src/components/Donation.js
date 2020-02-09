import React, { Component } from 'react';

import './Donation.css';

class Donation extends Component {
    constructor() {
        super();
        this.state = {
            Donations: []
        }


    }

    componentDidMount() {
        fetch('/api/Donations')
            .then(res => res.json())
            .then(Donations => this.setState({ Donations }, () => console.log('Donations fetched...',
                Donations)));

    }

    render() {
        return (
            <footer id="footer">
            <div class="container ">
                <h2>Donations</h2>
                <table class="table ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Donation Category</th>
                            <th>Amount</th>

                        </tr>
                    </thead>
                    <tbody>


                        <tr>

                            <td>{this.state.Donations.map(Donations =>
                                <li> {Donations.idDonation} </li>
                                )}
                            </td>

                            <td>{this.state.Donations.map(Donations =>
                                <li> {Donations.FIrstName} </li>
                            )}
                            </td>

                            <td>{this.state.Donations.map(Donations =>
                                <li> {Donations.LastName} </li>
                            )}
                            </td>

                            <td>{this.state.Donations.map(Donations =>
                                <li> {Donations.DonationCategory} </li>
                            )}
                            </td>

                            <td>{this.state.Donations.map(Donations =>
                                <li> {Donations.Amount} </li>
                            )}
                            </td>

                        </tr>




                    </tbody>
                </table>
            </div>

            </footer>



        );
    
}
}
export default Donation;
