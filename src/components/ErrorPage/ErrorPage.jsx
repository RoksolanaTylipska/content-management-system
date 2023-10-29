import React from 'react';
import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

function ErrorPage() {

  return (
    <div className='error-page'>
      <h1 className='error-page-title'>
        Oops!
      </h1>

      <p className='error-page-text'>This page doesn't exist...</p>

      <img
        src='https://www.bbitrix.ru/upload/medialibrary/1d4/1d4bc838a0107b1b52418ce53e6715e8.png'
        alt='Oops! John Travolta'
        className='error-page-img'
      />

      <NavLink
        className={'error-page-button'}
        to={'/'}
      >
        Go home
      </NavLink>
    </div>
  );
}

export default ErrorPage;

