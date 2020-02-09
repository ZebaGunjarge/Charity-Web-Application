import React from 'react';
import about from './about.css';




class About extends React.Component {
   render() {
      return (
        <section id="about">
        <div class="container">
                <div class="row about-container">

                    <div class="col-lg-6 content order-lg-1 order-2">
                        <h1 class="title">Few Words About Us</h1>
                        <p>
                            Ummid the name itself says a ray of hope.A HOPE TO STUDY, by igniting the inner spark in youth is a Non-Profit Organisation (NPO) and Public Benefit Organisation.Learn more and get involved! You can make a difference in the lives of the animals and people
                            we serve.We rely on your donations to do what we do, so please DONATE NOW or go to the HOW TO HELP section of this site to find out what else you can do to care for India's street animals.
                        </p>



                    </div>

                    <div class="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                </div>

            </div>
            </section>
      );
   }
}
export default About;