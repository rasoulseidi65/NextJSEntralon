import React, {Component} from 'react';
import './LatestNews.css';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Typed from "react-typed";

class LatestNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFlipping: false
        }

        this.roles = ['Thinking about putting your property up for sale? Our latest research will give you an insight into conditions in your local market.',

            'Hoping to take advantage of the Government’s Starter Home scheme? You may want to consider other initiatives.\n' +
            'Read more at https://www.zoopla.co.uk/discover/property-news/government-fails-to-build-any-of-its-promised-starter-homes'
            ];
    }

    render() {

        return (

            <div>
                <div className="container">
                    <h2 className="text-center text-dark">Property News</h2>
                   
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <img className="p-1" src="/static/images/news/1.png"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className="textNews"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                            <div className="col-md-12">
                                <ListItem className="">
                                    <ListItemAvatar>
                                        <img className="p-1" src="/static/images/news/2.png"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className="textNews"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                            <div className="col-md-12">
                                <ListItem className="">
                                    <ListItemAvatar>
                                        <img className="p-1" src="/static/images/news/3.png"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className="textNews"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-12">
                                <ListItem className="">
                                    <ListItemAvatar>
                                        <img className="p-1" src="/static/images/news/3.png"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className="textNews"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                            <div className="col-md-12">
                                <ListItem className="">
                                    <ListItemAvatar>
                                        <img className="p-1" src="/static/images/news/2.png"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className="textNews"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                            <div className="col-md-12">
                                <ListItem className="">
                                    <ListItemAvatar>
                                        <img className="p-1" src="/static/images/news/1.png"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className="textNews"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                        </div>

                    </div>
                    <button type="button" className="btn-Read-news btn btn-outline-primary btn-rounded  btn-block">Read more property news</button>
                </div>

            </div>
        );
    }
}

export default LatestNews;
