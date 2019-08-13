import React from "react";
import { LogoLightIcon } from "../../icons";
import { PaymentMethodsIcons } from "../../icons";
import { FooterNavigation } from "./FooterNavigation";
import { FooterTopic } from "./FooterTopic";
import { topics } from "../../../content/";
import "./FooterInfo.css";

export function FooterInfo() {
  return (
    <div className="footer-info">
      <LogoLightIcon />
      <div className="footer-content">
        <div className="footer-content__item">
          <span className="footer-content__item-title">ABOUT</span>
          <p className="footer-content__item-text">
            Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis.
            Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer
            ac sem.
          </p>
          <PaymentMethodsIcons type={"small"} />
        </div>
        <div className="footer-content__item">
          <span className="footer-content__item-title">QUESTIONS</span>
          <FooterNavigation />
        </div>
        <div className="footer-content__item">
          <span className="footer-content__item-title">TOPICS</span>
          {topics.map(topic => (
            <FooterTopic key={topic.id} topic={topic} />
          ))}
        </div>
        <div className="footer-content__item">
          <span className="footer-content__item-title">CONTACTS</span>
          <address className="contacts">
            <div className="row-align">
              <span className="contacts__title">C.</span>
              <span>Divisima ltd.</span>
            </div>
            <div className="row-align">
              <span className="contacts__title">B.</span>
              <span>
                190068, Saint-Petersburg, Kazanskaya street, h.60, BOX 42
              </span>
            </div>
            <div className="row-align">
              <span className="contacts__title">T.</span>
              <span>
                <a className="contacts__link" href="tel:+79967965266">
                  +7-996-796-52-66
                </a>
              </span>
            </div>
            <div className="row-align">
              <span className="contacts__title">E.</span>
              <span>
                <a
                  className="contacts__link"
                  href="mailto:chernik.max@gmail.com"
                >
                  chernik.max@gmail.com
                </a>
              </span>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
