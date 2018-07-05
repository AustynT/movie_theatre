import React, { Component } from 'react';

export default class Location extends Component {
  render() {
    return (

    <div class="location__container">  

      <div class="location__title">
        <h1>Movie Locations</h1>
      </div>  

        <div class ="location">

            <div class="location__af">
                <h2>Bottega Movies 9</h2>
                <h4>American Fork</h4>
            </div>

            <div class="location__draper">
                <h2>Bottega Movies XD</h2>
                <h4>Draper</h4>
            </div>


            <div class="location__layton">
                <h2>Bottega Landing XD</h2>
                <h4>Layton</h4>
            </div>

        </div>

        <div class ="locationsTwo">

            <div class="locationsTwo__or">
                <h2>Bottega Movies 16</h2>
                <h4>Orem</h4>
            </div>

            <div class="locationsTwo__sj">
                <h2>Bottega Movies 21</h2>
                <h4>South Jordan</h4>
            </div>


            <div class="locationsTwo__lehi">
                <h2>Bottega Landing 11</h2>
                <h4>Lehi</h4>
            </div>

        </div>

        <div class="locationfaq__title">
            <h1>FAQ</h1>
        </div>

            <div class="locationsfaq">
                <div class="locationsfaq__vr">
                    <h4>VIP Room FAQ</h4>
                    <h6>Information about The VIP room, making reservations</h6>
                </div>

                <div class="locationsfaq__giftcard">
                    <h4>Gift Cards FAQ</h4>
                    <h6>Information on buying, registering, reloading and purchasing</h6>
                </div>


                <div class="locationsfaq__movieclub">
                    <h4>Movie Club FAQ</h4>
                    <h6>Browse the Frequently Asked Questions to learn more about Movie Club</h6>
                </div>
            </div>


             <div class="locationabout__title">
                <h1>About Bottega</h1>
             </div>

            <div class="locationabout">
                <div class="locationabout__au">
                   <img src="http://www.patrickbetdavid.com/wp-content/uploads/2016/10/movies-red.jpg" title=""></img>
                    <h4>About Us</h4>
                    <h6>Learn more about our Theatres</h6>
                </div>

                <div class="locationabout__cu">
                <img src="http://www.patrickbetdavid.com/wp-content/uploads/2016/10/movies-red.jpg" title=""></img>
                    <h4>Contact Us</h4>
                    <h6>We're here to help. contact us for guest services or more information</h6>
                </div>


                <div class="locationabout__ad">
                <img src="https://thehaletelescope.com/wp-content/uploads/2017/08/war-movies.jpg" title=""></img>
                    <h4>Advertise with Us</h4>
                    <h6>We offer several advertising avenues for reaching moviegoers</h6>
                </div>
            </div>


    </div>

    );
  }
}