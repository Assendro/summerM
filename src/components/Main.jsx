import React from "react";
import Header from "./Header";
import Videos from "./Videos";
import './main.scss'

const Main = () => {
    return (
        <div className="container">
            <Header />
            <Videos />           

        </div>
    )
}

export default Main;