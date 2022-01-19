import React, { useState } from "react";
import data from "../../../Utils/staticData.json";
import profile from "../../../assets/profile.png";
import grp from "../../../assets/grpIcon.png";
import { FontSize } from "../../../Utils/FontSize";
function Planning({ userData, setUserdata }) {
  const styles = {
    container: {
      display: "flex",
      maxWidth: "80%",
      margin: "auto",
      justifyContent: "space-between",
    },
    heading: {
      fontSize: FontSize.Title,
    },
    subHeading:{
        fontSize:FontSize.SubTitle,
        opacity: "0.7",
        marginBottom:'40px'
    },
    subcontainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "40%",
      maxWidth: "180px",
      textAlign: "left",
      padding: "15px",
      cursor: "pointer",
      border: "2px solid rgb(0 0 0 / 5%)",
      borderRadius: "5px",
    },
    subcontainerselected: {
      display: "flex",
      width: "40%",
      maxWidth: "180px",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      padding: "15px",
      border: "2px solid #664de4",
      borderRadius: "5px",
    },
    img: {
      width: "30px",
    },
    title: {
      fontSize: FontSize.subHeading,
        fontWeight: "bold",
       margin:"20px 0px 10px 0px",
    },
    para: {
      fontSize: FontSize.paragraph,
      maxWidth: "95%",
      opacity: "0.7",
    },
  };
  return (
    <div style={{marginBottom: "20px"}}>
      <h2 style={styles.heading}>{data.step_3.title}</h2>
      <div style={styles.subHeading}>{data.step_3.subtitle}</div>
      <div style={styles.container}>
        <div
          onClick={() => setUserdata({ ...userData, for: "self" })}
          style={
            userData.for == 'self' ? styles.subcontainerselected : styles.subcontainer
          }
        >
          <img style={styles.img} src={profile} alt="profile" />
          <div style={styles.title}>For myself</div>
          <div style={styles.para}>
            Write better.think more clearly.Stay organized.
          </div>
        </div>
        <div
          onClick={() => setUserdata({ ...userData, for: "group" })}
          style={
            userData.for==='group' ? styles.subcontainerselected : styles.subcontainer
          }
        >
          <img style={styles.img} src={grp} alt="grp" />
          <div style={styles.title}>With my team</div>
          <div style={styles.para}>
            Wikis, docs, tasks & projects, all in one place.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planning;
