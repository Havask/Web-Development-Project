import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
            
              <Para>havard.skjerstein@gmail.com</Para>
              <Para>(+47) 94792097</Para>

             
             
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
            <Language>{t("Address")}</Language>
              <Para>Hjalmar Johansens gate 232</Para>
              <Para>9007 Tromsø</Para>
              <Para>Norge</Para>
            </Col>
          </Row>
          <Row justify="space-between">
   
    
          </Row>
        </Container>
      </FooterSection>

    </>
  );
};

export default withTranslation()(Footer);
