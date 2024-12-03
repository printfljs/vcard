import React from 'react';
import ContactsList from './contact-list';
import SocialList from './social-list';
import Footer from './footer';

const SideBarInfoMore: React.FC = () => {
  return (
    <div className="sidebar-info-more">
      <div className="separator"></div>
      <ContactsList />
      <div className="separator-no-line"></div>
      <SocialList />
      <div className="separator-footer"></div>
      <Footer />
    </div>
  );
};

export default SideBarInfoMore;
