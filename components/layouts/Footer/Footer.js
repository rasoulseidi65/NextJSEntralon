import React, {Component} from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="page-footer  mt-2 font-small grey lighten-4">

                    <div className="background pb-2 pt-2">
                        <div className="container">


                            <div className="row d-flex align-items-center">


                                {/*<div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">*/}
                                {/*    <h6 className="mb-0">Get connected with us on social networks!</h6>*/}
                                {/*</div>*/}



                                <div className="col-md-6 col-lg-7 text-center text-white">
                                    <div className="row ">
                                       
                                        <div className="col-md-9">
                                            <a className="fb-ic">
                                                <i className="fa fa-facebook-square  mr-4 fa-3x"> </i>
                                            </a>
                                            <a className="tw-ic">
                                                <i className="fa fa-twitter  mr-4 fa-3x"> </i>
                                            </a>
                                            <a className="gplus-ic">
                                                <i className="fa fa-linkedin-square  mr-4 fa-3x"> </i>
                                            </a>
                                            <a className="li-ic">
                                                <i className="fa fa-youtube-play mr-4 fa-3x"> </i>
                                            </a>
                                            <a className="ins-ic">
                                                <i className="fa fa-instagram mr-4 fa-3x"> </i>
                                            </a>
                                            <a className="ins-ic">
                                                <i className="fa fa-pinterest  fa-3x"> </i>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 col-lg-5 text-center text-md-left text-white mb-md-0">

                                   <div className="row">
                                       

                                       <div className="col-md-4">
                                           <img className="google-play" src="/static/images/google-play.png"/>
                                       </div>
                                       <div className="col-md-4">
                                           <img className="google-play" src="/static/images/appstore.png"/>
                                       </div>
                                   </div>

                                </div>

                            </div>


                        </div>
                    </div>


                    <div className="container text-center text-md-left mt-5">


                        <div className="row mt-3 dark-grey-text">


                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">


                                <h6 className="text-uppercase font-weight-bold">Company name</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"/>
                                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipisicing elit.</p>

                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                                <h6 className="text-uppercase font-weight-bold">Products</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"/>
                                    <p>
                                        <a className="dark-grey-text" href="#!">MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a className="dark-grey-text" href="#!">MDWordPress</a>
                                    </p>
                                    <p>
                                        <a className="dark-grey-text" href="#!">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a className="dark-grey-text" href="#!">Bootstrap Angular</a>
                                    </p>

                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">


                                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"/>
                                <p>
                                        <a className="dark-grey-text" href="#!">Your Account</a>
                                    </p>
                                    <p>
                                        <a className="dark-grey-text" href="#!">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a className="dark-grey-text" href="#!">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a className="dark-grey-text" href="#!">Help</a>
                                    </p>

                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"/>
                                    <p>
                                        <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fa fa-envelope mr-3"></i> info@example.com</p>
                                    <p>
                                        <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p>
                                        <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>

                            </div>


                        </div>


                    </div>



                    <div className="footer-copyright text-center  py-3">© 2019 Copyright:
                        <a className="text-white" href="https://ENTRALON.com/"> ENTRALON.com</a>
                    </div>


                </footer>
                <style jsx>
                    {
                        `
                        hr{
                        width:60px;
                        }
                        .background{
                        background-color:#e0e0e0;
                      
                        }
                        `
                    }
                </style>

            </div>
        );
    }
}

export default Footer;
