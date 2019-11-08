import React, {Component} from 'react';
import './CountriesProperties.css';
import Swiper from 'react-id-swiper';
const params = {
    slidesPerView: 4,
    spaceBetween: 10,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   }

}
class Properties extends Component {
    render() {
        return (
            <div className="container mt-5 mb-3">
                <h1 className="text-center"> Browse properties by the countries</h1>
                <div className="">
                      <Swiper {...params}>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1 h-100">
                    <img className="card-img-top " src="/static/images/country/uk.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5  className="mt-3">for sale in UK</h5>
                </div>


            </div>
        </div>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1 h-100">
                    <img className="card-img-top " src="/static/images/country/spain.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mt-3">for sale in Spain</h5>
                </div>

            </div>
        </div>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1 h-100">
                    <img className="card-img-top " src="/static/images/country/cyprus.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mt-3">for sale in Cyprus</h5>
                </div>

            </div>
        </div>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1 h-100">
                    <img className="card-img-top " src="/static/images/country/portugal.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mt-3">for sale in Portugal</h5>
                </div>

            </div>
        </div>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1 h-100">
                    <img className="card-img-top " src="/static/images/country/turkey.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mt-3">for sale in Turkey</h5>
                </div>

            </div>
        </div>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1 h-100">
                    <img className="card-img-top " src="/static/images/country/Greece.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white  animated fadeInUp delay-05s ">
                    <h5 className="mt-3"> for sale in Greece</h5>
                </div>

            </div>
        </div>
        <div className="">
            <div className="card card-cascade h-100 border border-info">
                <div className="view view-cascade overlay pulse1  h-100">
                    <img className="card-img-top " src="/static/images/country/ua.jpeg"
                         alt="Card image cap"/>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mt-2">for sale in United Arab Emirates</h5>
                </div>

            </div>
        </div>

    </Swiper>
                       </div>


            </div>
        );
    }
}

export default Properties;
