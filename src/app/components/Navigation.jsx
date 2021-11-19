import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
    <div>
        <div>
            <Link to = "/dashboard"> 
                <h1>
                    MyApp
                </h1>
            </Link>
        </div>
        <div>
            <Link to = "/"> 
                <h1>
                    Home
                </h1>
            </Link>
        </div>
    </div>
    

);

export const ConnectedNavigation = connect(state=>state)(Navigation);