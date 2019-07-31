import React from "react";
import TitleImage from "./TitleImage";
import SaleRouting from "./SaleRouting";
import Video from "./Video";
import Images from "./Images";
import FeedBack from "./FeedBack";
import Description from "./Description";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <TitleImage />
            {/* <SaleRouting /> */}
            <Video />
            <Images />
            <Description />
            <FeedBack />
            <Footer />
        </div>
    );
};

export default App;
