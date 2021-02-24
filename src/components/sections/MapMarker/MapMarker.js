import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.3513816197005!2d75.71907831496503!3d29.154315982214857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123329a2c6788d%3A0xec428262180d4cd1!2sR%20D%20CITY%20CENTER!5e0!3m2!1sen!2sin!4v1614157423025!5m2!1sen!2sin" width="100%" height="450" style={{"border":0}} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </Section>
  );
};

export default mapMarker;
