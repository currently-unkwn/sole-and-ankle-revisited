/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

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

        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  display: flex;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;

  color: var(--color-gray-500);
`;

export default MobileMenu;
