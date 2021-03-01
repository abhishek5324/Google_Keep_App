import React from "react";
const d = new Date();
const currYear = d.getFullYear();

function Footer()
{
    return <footer><p>Copyright © {currYear}</p></footer>
}
export default Footer;