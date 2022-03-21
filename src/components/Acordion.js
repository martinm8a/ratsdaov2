import { useState } from 'react'
import {useTranslation} from "react-i18next"
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'
import "./pages/ReviewSection.css";
import "./Acordion.css"

const Acordion = () => {
  const [t, i18n] = useTranslation("global");

  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(i);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <div className="wrapper">
        <div className="accordion">
          {t("interview", { returnObjects: true })
          .map((item, i) => (
            <>
              <div className="item">
                <div className="title" onClick={() => toggle(i)}key={i}>
                    <h2>{item.question}</h2>
                    <span>{clicked === i ? <FiMinus /> : <FiPlus />}</span>
                </div >
                <div className={clicked === i ? "content show" : "content"} >
                    <p>{item.answer}</p>
                </div  >
              </div>
            </>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Acordion