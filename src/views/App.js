import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

const images = [
  { url: "./upcoming_1.png" },
  { url: "./upcoming_2.png" },
  { url: "./upcoming_1.png" },
];

class App extends Component {
  render() {
    return (
      <div>
        <div className='main-banner'>
          <div className='logos-container'>
            <div className='logo'>
              <img src='./header_logo.png' className='logo-image' />
            </div>
            <div className='delivery'>
              <img src='./express.png' className='express-image' />
            </div>
          </div>

          <div className='links-container'>
            <a>HOME</a>
            <a>MENU</a>
            <a>OUR STORY</a>
            <a>CONTACT US</a>
          </div>

          <div className='hungry-container'>
            <img src='./Spaghetti.png' className='spaghetti-image' />
            <div className='order-container'>
              <img src='./hungry.png' className='order-image' />
              <br />
              <a className='order-button'>ORDER NOW</a>
            </div>
            <div className='platter-container'>
              <img src='./plate.png' className='plate-image' />
            </div>
          </div>
        </div>

        <div className='choose-container'>
          <img src='./choose.png' className='choose-image' />
          <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
          <div className='platters-container'>
            <div className='plate-container'>
              <img src='./platter_1.png' className='plate-image' />
              <h3>LORUM IPSUM DOLOR</h3>
              <p style={{ marginBottom: '30px' }}>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>
              <a className='order-button'>ORDER NOW</a>
            </div>
            <div className='plate-container'>
              <img src='./platter_2.png' className='plate-image' />
              <h3>LORUM IPSUM DOLOR</h3>
              <p style={{ marginBottom: '30px' }}>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>
              <a className='order-button'>ORDER NOW</a>
            </div>
            <div className='plate-container'>
              <img src='./platter_3.png' className='plate-image' />
              <h3>LORUM IPSUM DOLOR</h3>
              <p style={{ marginBottom: '30px' }}>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>
              <a className='order-button'>ORDER NOW</a>
            </div>
          </div>
        </div>

        <div className='discover-container'>
          <img src='./discover.png' className='discover-image' />
          <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>

          <div className="carousel">
            <Carousel autoPlay infiniteLoop showStatus={false}>
              <div>
                <img src="./upcoming_1.png" />
              </div>
              <div>
                <img src="./upcoming_2.png" />
              </div>
              <div>
                <img src="./upcoming_3.png" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className='try-container'>
          <img src='./try_it.png' className='try-image' />
        </div>

        <div className='reservation-container'>
          <img src='./reservation.png' className='reservation-image' />
          <br />
          <div className='form-container'>
            <div className='form-partition'>
              <input className='field' name='name' placeholder='Name' />
              <input className='field' name='date' placeholder='Date' />
              <input className='field' name='people' placeholder='People' />
            </div>
            <div className='form-partition'>
              <input className='field' name='email' placeholder='Email' />
              <input className='field' name='time' placeholder='Time' />
              <button className='find-button'>FIND TABLE</button>
            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='logos-container'>
            <div className='logo'>
              <img src='./footer_logo.png' className='logo-image' />
            </div>
            <div className='delivery'>
            </div>
          </div>

          <div className='hungry-container'>
            <div className='order-container'>
              <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum
                Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum
                Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum
                Lorum Ipsum Lorum Ipsum.
              </p>
            </div>
            <div className='info-container'>
              <div className='location-container'>
                <div className='location-image'>
                  <img src='./Location Icon.png' className='location' />
                </div>
                <div className='location-text'>
                  Main Road, Building Name, Country
                </div>
              </div>
              <div className='email-container'>
                <div className='email-image'>
                  <img src='./Email.png' className='email' />
                </div>
                <div className='email-text'>
                  info@companyname.com
                </div>
              </div>
            </div>
          </div>

          <div className='rights-container'>
            <div className='rights-text'>
              <p>&copy; Company Name. All Rights Reserved</p>
            </div>
            <div className='social-container'>
              <a href=''>
                <img src='./Instagram.png' className='social-image' />
              </a>
              <a href=''>
                <img src='./Twitter.png' className='social-image' />
              </a>
              <a href=''>
                <img src='./Facebook.png' className='social-image' />
              </a>
              <a href=''>
                <img src='./WhatsApp.png' className='social-image' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
