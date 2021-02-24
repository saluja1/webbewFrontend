import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+91 9996847294</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>info@webbew.in</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='https://www.facebook.com/webbewtech' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='https://twitter.com/webbewtech' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='https://www.instagram.com/webbewtech/' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;
