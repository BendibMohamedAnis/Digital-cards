import React from "react"

export default function Info(){
    return(
        
        <div className="info">
            
            <img src={require("../assets/person.png")} className="info-img" alt="PersonImg"/>
            
                <ul className="info-text-list">
                    <li id="name">BENDIB Mohamed Anis</li>
                    <li id="profession">Software Engineer</li>
                    <li id="related">React,Python,C++ </li>
                </ul>

                <div className="btns"> 

                    <a type="button" rel="noreferrer" id="btn-email" href="https://google.com/" target="_blank">E-Mail</a>
                    <a type="button" rel="noreferrer" href="https://google.com/" id="btn-linkedin" target="_blank">Linkedin</a>
                </div>
        </div>
        
    )
}