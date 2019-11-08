import React from 'react';
import Typed from 'react-typed';
import SearchBox from "../components/layouts/SearchBox/SearchBox";
import BaseLayout from '../components/layouts/BaseLayout';
import CountriesProperties from '../components/layouts/CountriesProperties/Properties';
import LatestNews from "../components/layouts/LatestNews/LatestNews";
import BespokeVr from "../components/layouts/BespokeVR/BespokeVR";
import Awards from '../components/layouts/Awards/awards';
import Footer from "../components/layouts/Footer/Footer";
import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Tech Lover', 'Team Player', 'Course Creator', 'React.js', 'Angular'];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 60000);
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout {...this.props.auth}
                  headerType="index"
                  title="Entralon">
        <div>
          <div className="">
              <SearchBox/>
              <CountriesProperties/>
              <BespokeVr/>
              <LatestNews/>
          
          <Awards/>
          <Footer/>
          </div>

        </div>
      </BaseLayout>
    )
  }
}



export default Index;

