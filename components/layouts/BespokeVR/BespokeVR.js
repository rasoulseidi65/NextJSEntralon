import React, {Component} from 'react';
import './BespokeVR.css';
// import './animat.js';
class BespokeVr extends Component {
    render() {
        return (
            <div className="background-vr mt-4 mb-4 border border-info">
                <div className="container row d-flex">
                    <div className="col-md-6">
                        <h2 className="text-white ml-5 mt-2">Virtual Reality</h2>
                        <h6 className="text-white ml-5 text-VR">
                        VR is a new comer to a real estate industry heavily.
 afocused on customer experience and ease of access.
There exist many points inreal estate  that VR  solves for renters and investors.
These include buying or renting  a property sight unseen,touring homes with potintial renters,envisioning fix and flips,and so much more.
In short, VR is changing the real estate world.
                        </h6>

                    </div>
                    <div className="col-md-6">
                        <img className="VR-gif float-right" src="/static/images/VirtualReality.gif"/>
                        
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default BespokeVr;
