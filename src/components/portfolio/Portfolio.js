import React from 'react';
import TempProjectImg from "../../media/logo_cyber_jesse.jpg";
import PortfolioStyle from "./Portfolio.module.scss";

export const Portfolio = () => {
    return (
        <div className={PortfolioStyle.portContainer}>
            <div className={PortfolioStyle.portTitle}>
                <h2>Portfolio</h2>
            </div>
            <div className={PortfolioStyle.portProjectContainer}>
                <div className={PortfolioStyle.portSoloProjectContainer}>
                    <h5>Website 1</h5>
                    <img src={TempProjectImg} className={PortfolioStyle.portProjectImg} />
                </div>
                <div className={PortfolioStyle.portSoloProjectContainer}>
                    <h5>Website 2</h5>
                    <img src={TempProjectImg} className={PortfolioStyle.portProjectImg} />
                </div>
                <div className={PortfolioStyle.portSoloProjectContainer}>
                    <h5>Website 3</h5>
                    <img src={TempProjectImg} className={PortfolioStyle.portProjectImg} />
                </div>
            </div>
        </div>
    )
}