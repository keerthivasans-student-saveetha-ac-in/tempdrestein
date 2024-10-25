import React from "react";
import "./footer.scss";
import styled from "styled-components";
import dresteinLogo from "../../assets/dresteinLogo.svg";
import Avatar from "@mui/joy/Avatar";
import { Link } from "react-router-dom";
import Chip from "@mui/joy/Chip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../Admin/contexts/AdminContext";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "@mui/material";
const Footer = () => {
  const [views, setViews] = useState(localStorage.getItem("value"));

  useEffect(() => {
    setViews(parseInt(views));
  }, []);

  const LogoHead = styled.div`
    display: flex;
    width: fit-content;
    gap: 0.5rem;
    align-items: center;
    @media screen and (max-width: 600px) {
      width: 80%;
      margin-left: 3rem;
      justify-content: flex-start;
    }
  `;

  const DLogo = styled.img`
    width: 20%;
    @media screen and (max-width: 600px) {
    }
  `;
  const EventLogo = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
    }
  `;
  const DresteinLetter = styled.p`
    font-size: 2.2vw;
    font-family: Azonix, sans-serif;
    color: rgb(255, 255, 255);
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 7vw;
    }
  `;

  const Year = styled.p`
    font-size: 1vw;
    font-family: "Azonix", sans-serif;
    font-weight: 800;
    color: rgb(255, 255, 255);
    text-align: center;
    height: auto;
    letter-spacing: 0.8em;
    @media screen and (max-width: 600px) {
      font-size: 3vw;
    }
  `;

  return (
    <div className="footer">
      <div className="flex container">
        <div className="block">
          <LogoHead>
            <DLogo src={dresteinLogo} alt="DresteinLogo" />
            <EventLogo>
              <DresteinLetter color="red">DRESTEIN</DresteinLetter>
              <Year>2 0 2 4</Year>
            </EventLogo>
          </LogoHead>
          <div className="desc">
            15<sup>th</sup> National Level Inter Collegiate Technical and Management Fest
          </div>
          <p
            style={{
              margin: "8px 0",
            }}
          >
           <h4 className="heading" align="center">Site Views</h4>
          </p>
          <Card
            sx={{
              border: "1px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h1>{views}</h1>
            <VisibilityIcon
              sx={{
                fontSize: "50px",
              }}
            />
          </Card>
        </div>
        
        <div className="block">
          <h4 className="heading" align="center">CO-ORDINATORS</h4>
          <a href="https://www.saveetha.ac.in/index.php/2-uncategorised/489-dr-k-suresh-kumar-m-tech-ph-d"  target="_blank" class="links">
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent", margin: "20px 0 " }}
            startDecorator={
              <Avatar
                size="lg"
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                // src="PeopleAssets/co1.webp"
                src="PeopleAssets/coordinators/co1 (white).webp"
              />
            }
          >
            Dr. K. SURESH KUMAR
          </Chip>
          </a>

          <a href="https://www.saveetha.ac.in/index.php/departments/mechanical-engineering?id=661"  target="_blank" class="links">
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar
                size="sm"
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                // src="PeopleAssets/co2.webp"
                src="PeopleAssets/coordinators/co2 (white).webp"
              />
            }
          >
          Dr. N. RAJA RAJESWARI
          </Chip>
          </a>
          
          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }} align="center"
          >
            WEBSITE CO-ORDINATORS
          </h4>

          <a href="https://www.linkedin.com/in/sugavarathan-l-400a46256/"  target="_blank" class="links">
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`PeopleAssets/webcoordinators/webco1 (white).png`} />
            }
            >
            SUGAVARATHAN L
          </Chip>
          </a>

          <a href="https://www.linkedin.com/in/keerthivasanswaminathan/"   target="_blank"class="links"> 
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`PeopleAssets/webcoordinators/webco2 (white).jpg`} />
            }
            >
             KEERTHIVASAN S
          </Chip>
          </a>

          <a href="https://www.linkedin.com/in/roop-sagar-s-l-602aa8290/"  target="_blank" class="links">
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`PeopleAssets/webcoordinators/webco3 (white).jpg`} />
            }
            >
            ROOP SAGAR S L
          </Chip>
          </a>

          <a href="https://www.linkedin.com/in/divya-dharshini-r-2a3921291/"  target="_blank" class="links">
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`PeopleAssets/webcoordinators/webco4 (white).png`} />
            }
            >
            DIVYA DHARSHINI R
          </Chip>
          </a>

          <a href="https://www.linkedin.com/in/tanessha-kannan-1bbab92a6/"  target="_blank" class="links">
          <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`PeopleAssets/webcoordinators/webco5 (white).jpg`} />
            }
            >
            TANEESHA KANNAN
          </Chip>
          </a>

        </div>
        

        <div className="block">
        <h4 className="heading" align="center" >DSC MEMBERS</h4>
        
        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            ALMA JOECIN E (AGRI) - 7305894860
        </Chip>
        
        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            NARENDAR N (AGRI) - 7418034369
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            BALASABARISH K J (BIO - MED) - 7845976785
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            DHANUSH S (CHEM) - 8637432631
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            GEOFFREY MICHAEL G (EIE) - 8940107410
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            VISAKAN G (MECH) - 7094998410
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            GOWTHAM I K (MED) - 8778508044
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            ANN BLESSY PHILIPS (SCOFT) - 6369544215
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
              // <Avatar size="sm" src={`PeopleAssets/dscmembers/dsc1.webp`} />
            }
            >
            YAMUNAASRI T S (SCOFT) - 9884497722
        </Chip>
  
        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            SHYAM S (SCOFT) - 6381519904
        </Chip>

        <Chip
            size="lg"
            style={{ backgroundColor: "transparent" }}
            startDecorator={
              <Avatar size="sm" src={`/static/images/avatar/1.jpg`} />
            }
            >
            TEJUSVE KABEER F (SCOFT) - 9600139114
        </Chip>
          
        </div>
        
        <div className="block">
          <h4 className="heading">USEFUL LINKS</h4>
          <a href="#" className="links">
            Home
          </a>
          
          <a href="/Departments#" className="links">
            Departments
          </a>

          <Link to="/form.jsx" className="links">
            Register
          </Link>
          
          <Link to="/form" className="links">
            Events
          </Link>
          
          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            SOCIALS
          </h4>
          <div class="social-links">
            
            <a
              target="_blank" 
              href="https://www.instagram.com/dresteinofficial/"
            >
              <FaInstagram />
            </a>
            
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61567521531098"
            >
              <FaFacebook />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/dresteinofficial"
            >
              <FaLinkedinIn />
            </a>

            <a target="_blank" href="https://x.com/dresteinoffi/">
              <FaTwitter />
            </a>

            <a
              target="_blank"
              href="https://in.pinterest.com/saveethaengineering/"
            >
              <FaPinterest />
            </a>

          </div>
        </div>

        <div className="block">
          <h4 className="heading">LOCATION</h4>
          <p className="address">
            Saveetha Nagar, Sriperumbadur Taluk, Kanchipuram - Chennai Rd,
            Chennai, Tamil Nadu - 602 105.
          </p>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                style={{
                  borderRadius: "20px",
                }}
                class="gmap_iframe"
                width="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=250&height=250&hl=en&q=New%20SEC%20Campus&t=&z=19&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © Drestein 2024 - Saveetha Engineering College. All rights reserved
      </div>
    </div>
  );
};

export default Footer;