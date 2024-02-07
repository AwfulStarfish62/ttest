import React from "react";
import coverImage from '../assets/top-cover-image.png';
import "./style.css";

export const TopPoster = () => {
    return (
        <div className="alert">
            <div className="image">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="frame">
                <div className="title">
                    <b>Black Friday</b>
                </div>
                <div className="title">
                    <div className="text-max">
                        , 24-27 Nov
                    </div>
                </div>
                <div className="vector"/>
                <div className="title">
                    <b className="title-gold">
                       10%OFF
                    </b>
                </div>
                <div className="vector"/>
                <div className="title">
                    <span className="text-mid">Use code </span>
                    <b className="text-mid title-gold">10FRIDAY</b>
                    <span className="text-max"> at checkout</span>
                </div>
            </div>
            <div className="button-container" onClick={() => alert("Click!")}>
                <button className="button">
                    <div className="buy-button">
                        <b className="button-text">Shop now</b>
                    </div>
                </button>
            </div>
        </div>
    );
};
