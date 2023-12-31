import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="page-footer">
      <div className="footer-signature-container">
        <p className="copyright">©2024 Simple Travelers</p>
        <p className="link-gdpr">
          <Link href={'/zasadypouzivaniaosobnychudajov'}>Zásady používania osobných údajov</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
