import React from "react";
import Title from "../title/Title";

export default function Hero ({ title, description }) {
    return(
        <article>
            <div>
                <div>
                <Title text={title}/>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    )
}