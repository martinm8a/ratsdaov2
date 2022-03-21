import React from "react";
// import {Button} from "./Button.js";
// import {Link} from "react-router-dom";
import "./ReviewSection.css";
import {useTranslation} from "react-i18next"

function ReviewSection() {
  const [t, i18n] = useTranslation("global");
  return (
    
    <>
      <div
        className={t("paper.lightBg") ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title1")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc1")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title2")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc2")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title3")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc3")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title4")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc4")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title5")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc5")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title6")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc6")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title7")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc7")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title8")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc8")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title9")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc9")}
                </p>
          </div>
          <div className="home__hero-img-wrapper2">
                <img src={t("paper.img")} alt={ t("paper.alt") } className="home__hero-img2" />
          </div>
          <div className="container">
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc10")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title11")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc11")}
                </p>
          </div>
          <div className="container">
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >{t("paper.desc12")}
                </p>
          </div>
          <div className="home__hero-img-wrapper2">
                <img src={t("paper.img2")} alt={ t("paper.alt2") } className="home__hero-img2" />
          </div>
          <div className="container">
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >{t("paper.desc13")}
                </p>
          </div>
          <div className="home__hero-img-wrapper2">
                <img src={t("paper.img3")} alt={ t("paper.alt3") } className="home__hero-img2" />
          </div>
      </div>
      <div className="container">
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc14")}
                </p>
        </div>
        <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title15")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc15")}
                </p>
          </div>
          <div className="home__hero-img-wrapper2">
                <img src={t("paper.img4")} alt={ t("paper.alt4") } className="home__hero-img2" />
          </div>          
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title16")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc16")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title17")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc17")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title18")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc18")}
                </p>
          </div>
          <div className="container">
                <div className="top-line">{}</div>
                <h1 className={t("paper.lightText")  ? "heading" : "heading dark"}>
                {t("paper.title19")}{" "}
                </h1>
                <p
                  className={
                    t("paper.lightTextDesc")
                      ? "home__hero-subtitleC"
                      : "home__hero-subtitleC dark "
                  }
                >
                  {t("paper.desc19")}
                </p>
          </div>
    </>
  );
}

export default ReviewSection;
