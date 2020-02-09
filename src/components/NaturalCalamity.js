import React, { Component } from 'react';
//import FormRadio1 from './FormRadio1.js';
//import './Donation.css';

class NaturalCalamity extends Component {
    

    constructor(props){
        super(props);

        this.state = {
            idDonation : '',
            FIrstName : '',
            LastName : '',
            DonationCategory : '',
            Amount : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleidDonation = this.handleidDonation.bind(this);
        this.handleFIrstName = this.handleFIrstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleDonationCategory = this.handleDonationCategory.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
       }




       handleidDonation = (e) => {
        this.setState({idDonation: e.target.value});
     }

     handleFIrstName = (e) => {
        this.setState({FIrstName: e.target.value});
     }

     handleLastName = (e) => {
        this.setState({LastName: e.target.value});
     }

     handleDonationCategory = (e) => {
        this.setState({DonationCategory: e.target.value});
     }

     handleAmount = (e) => {
        this.setState({Amount: e.target.value});
     }

     


    handleSubmit = (e) =>
    { 
        e.preventDefault();
       // var id=document.getElementById("idDonation").value;
        //console.log(id);
        console.log(this.state.idDonation);
        console.log(this.state.FIrstName);
        console.log(this.state.LastName);
        console.log(this.state.DonationCategory);
        console.log(this.state.Amount);

       
        //console.log(document.modalNaturalForm.Amount.value);
        fetch('/api/Donations', {
            method: 'post',
            body: {
             "idDonation": this.state.idDonation,
             "FIrstName": this.state.FIrstName,
             "LastName": this.state.LastName,
             "DonationCategory": this.state.DonationCategory,
             "Amount": this.state.Amount
                   }
                       });

        
    }
   

    

    render() {
        return (
            
            <div class="container wow fadeIn">
                <div class="section-header">
                    <h2 class="section-title">Category</h2>
                    <p class="section-description"></p>
                </div>


                <div class="row">
                    <div class="row-lg-6  row-md-9  wow fadeInUp" data-wow-delay="0.2s">
                        <div class="box">
                            <div class="icon">
                                
                            </div>
                            <img src="/images/natural.jpg" alt=" " />
                            

                            <div class="modal fade" onSubmit={this.handleSubmit} id="modalNaturalForm" tabindex="-1" role="dialog"
                                aria-labelledby="myModalLabel" aria-hidden="true" method="post" name="modalNaturalForm">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header text-center">
                                            <h4 class="modal-title w-100 font-weight-bold">Natural calamity</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body mx-3">

                                            <div class="md-form mb-5">

                                                <input ref="idDonation" type="text" name="idDonation" id="form1-id"
                                                    class="form-control validate" value={this.state.idDonation} onChange={this.handleidDonation}></input>
                                                <label data-error="wrong" data-success="right"
                                                    for="defaultForm-id">ID</label>
                                            </div>

                                            <div class="md-form mb-5">

                                                <input ref="FIrstname" type="text" name="FIrstname" id="Form1-Fname"
                                                    class="form-control validate" value={this.state.FIrstName} onChange={this.handleFIrstName}></input>
                                                <label data-error="wrong" data-success="right"
                                                    for="defaultForm-Fname">First Name</label>
                                            </div>

                                            <div class="md-form mb-4">

                                                <input ref="LastName" type="text" name="LastName" id="Form1-Lname"
                                                    class="form-control validate" value={this.state.LastName} onChange={this.handleLastName}></input>
                                                <label data-error="wrong" data-success="right"
                                                    for="defaultForm-Lname">Last Name</label>
                                            </div>
                                            <div class="md-form mb-3">

                                                
                                            <input ref="DonationCateogry" type="text" name="DonationCateogry" id="Form1-dc"
                                                    class="form-control validate" value={this.state.DonationCategory} onChange={this.handleDonationCategory}></input>
                                                <label data-error="wrong" data-success="right"
                                                    for="defaultForm-Lname">Category (e.g. Flood, Bushfire, Earthquake, Tsunami etc)</label>
   
                                            </div>


                                            <div class="md-form mb-4">

                                                <input ref="Amount" type="text" name="Amount" id="Form1-Amount"
                                                    class="form-control validate" value={this.state.Amount} onChange={this.handleAmount}></input>
                                                <label data-error="wrong" data-success="right"
                                                    for="defaultForm-Amount">Amount </label>
                                            </div>


                                        </div>
                                        <div class="modal-footer d-flex justify-content-center">
                                            <button type="submit" onClick={this.handleSubmit}>Submit</button>
                                            <p id="demo"></p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center">
                                <a href="#modalNaturalForm" class="btn btn-default btn-rounded mb-4" data-toggle="modal"
                                    data-target="#modalNaturalForm">
                                    <h4>Natural calamity</h4>
                                </a>
                            </div>
                            <p class="description">Natural disasters kill on average 60,000 people per year, globally.
                                This correspondece to 0.1% of global population of the deaths over the past decade.
                                Please help us in helping them to survive through this horrible tragedies.
                            </p>
                        
                </div>

            </div>

            </div>

            </div>
            

        );
    
}
}


export default NaturalCalamity;
