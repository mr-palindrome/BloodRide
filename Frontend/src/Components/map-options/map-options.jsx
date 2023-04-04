import React from 'react';
import CustomButton from '../custom-button/button';
import "../../Styles/map-options.scss";

const MapOptions = () => {
    return (
        <div id='map-options'>
            <CustomButton children={"Hospital"} />
            <CustomButton children={"Blood Bank"} />
            <CustomButton children={"Pathalogy"} />
            <CustomButton children={"Blood Donors"} />
            <CustomButton children={"Medical stores"} />
        </div>
    )
};

export default MapOptions;