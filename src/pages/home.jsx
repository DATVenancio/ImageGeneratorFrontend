import React, { useEffect,useState } from "react";
import { Helmet } from "react-helmet";

import "./styles/home.css";
import { useTranslation } from "react-i18next";
import ImageComponent from "../components/home/image_component";
import ImageButton from "../components/home/image_button";




const About = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [t,i18next] = useTranslation("global")
    const homeInfo =t("home",{returnObjects:true})
    //const url="https://danielvenancio.pythonanywhere.com/teste";
    const url = "http://localhost:5000/teste";
    const getImage = async (label) => {
        try {
            const response = await fetch(url,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'label':label}),
            });
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImageSrc(imageUrl);
        } catch (error) {
            console.error('Error fetching the image:', error);
        }
    };


    return (
        <React.Fragment>
            <div className="home-title">
                {homeInfo.title}
            </div>
            <div className="home-subtitle">
                {homeInfo.subtitle}
            </div>
            <div className="">
                <ImageComponent
                imageSrc={imageSrc}
                initial_text={homeInfo.initial_image_text}
                />
            </div>
            <div className="home-buttons-container">
                <div className="home-buttons">
                    {homeInfo.buttons.map((button,index)=>(
                        <ImageButton
                        text={button.text}
                        label={button.label}
                        onClick={getImage}
                        />

                    ))}

                </div>
            </div>
            

        </React.Fragment>
        

    );
};

export default About;
