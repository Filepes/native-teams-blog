'use client';

import {
  FooterContainer,
  FooterContent,
  FooterLeft,
  LogoSection,
  FooterRight,
  LinksSection,
  LinkColumn,
  LinkTitle,
  LinkList,
  LinkItem,
  FooterBottom,
  FooterSeparator,
  CopyrightText,
  PolicyLinks,
  PolicyLink,
} from './Footer.styled';
import { NativeTeamsLogoWithText } from '@/ui/icons/NativeTeamsLogoSvg';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <LogoSection>
            <NativeTeamsLogoWithText />
          </LogoSection>
        </FooterLeft>
        <FooterRight>
          <LinksSection>
            <LinkColumn>
              <LinkTitle>PLATFORM</LinkTitle>
              <LinkList>
                <LinkItem>Employer of Record</LinkItem>
                <LinkItem>PEO Services</LinkItem>
                <LinkItem>Company as a Service</LinkItem>
                <LinkItem>Work Payments</LinkItem>
                <LinkItem>Global Payroll</LinkItem>
                <LinkItem>Tax Management</LinkItem>
                <LinkItem>Expenses Management</LinkItem>
              </LinkList>
            </LinkColumn>
            <LinkColumn>
              <LinkTitle>INFORMATION</LinkTitle>
              <LinkList>
                <LinkItem>Legal Entity</LinkItem>
                <LinkItem>Client Invoicing</LinkItem>
                <LinkItem>Payment Requests</LinkItem>
                <LinkItem>Global Mobility</LinkItem>
                <LinkItem>Employees Benefits</LinkItem>
                <LinkItem>For Startups</LinkItem>
              </LinkList>
            </LinkColumn>
            <LinkColumn>
              <LinkTitle>COMPANY</LinkTitle>
              <LinkList>
                <LinkItem>About</LinkItem>
                <LinkItem>Our Countries</LinkItem>
                <LinkItem>Affiliates</LinkItem>
                <LinkItem>Partnerships</LinkItem>
                <LinkItem>Charity</LinkItem>
                <LinkItem>Data & Security</LinkItem>
                <LinkItem>Book a demo</LinkItem>
                <LinkItem>Contact</LinkItem>
              </LinkList>
            </LinkColumn>
          </LinksSection>
        </FooterRight>
      </FooterContent>
      <FooterSeparator />
      <FooterBottom>
        <CopyrightText>© Native Teams Limited</CopyrightText>
        <PolicyLinks>
          <PolicyLink>Cookie Policy</PolicyLink>
          <span>|</span>
          <PolicyLink>Privacy Policy</PolicyLink>
          <span>|</span>
          <PolicyLink>Terms & Conditions</PolicyLink>
        </PolicyLinks>
      </FooterBottom>
    </FooterContainer>
  );
};
