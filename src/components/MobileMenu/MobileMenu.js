/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onClick={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </CloseButton>
        <MainContent>
          <Side />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Side>
            <Footer>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
          </Side>
        </MainContent>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background: ${COLORS.white};
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 32px;
  padding-bottom: 32px;
`;

const Side = styled.div`
  flex: 1;

  &:last-of-type {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: auto;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;

  color: ${COLORS.gray[500]};
`;

export default MobileMenu;
