import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

import Link from 'next/link';

import { urlFor } from '../lib/client';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> 2022 | TalkWorld Store | All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
