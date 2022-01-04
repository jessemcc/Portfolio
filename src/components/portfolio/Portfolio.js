import React from 'react';
import TempProjectImg from "../../media/logo_cyber_jesse.jpg";
import PortfolioFiller from "../../media/portfolio_filler.png";

export const Portfolio = () => {
    return (
        <div>
            <div>
                <h2>Portfolio</h2>
            </div>
            <div>
                <div>
                    <h5>Website 1</h5>
                    <img src={TempProjectImg} />
                </div>
                <div>
                    <h5>Website 2</h5>
                    <img src={TempProjectImg} />
                </div>
                <div>
                    <h5>Website 3</h5>
                    <img src={TempProjectImg} />
                </div>
                <div>
                    <h5>Website 4</h5>
                    <img src={TempProjectImg} />
                </div>
                <div>
                    <h5>Website 5</h5>
                    <img src={TempProjectImg} />
                </div>
            </div>
            <div>
                <img src={PortfolioFiller} />
            </div>
        </div>
    )
}