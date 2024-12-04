import React from "react";
import { useOutletContext } from "react-router-dom";

const About = () => {
    const {name} = useOutletContext();
    return (<>
    <h1>About</h1>
    {name}
    </>)
}
export default About;