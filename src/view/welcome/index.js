import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useStyles from './styles';
import LogoBig from '/public/img/logo-big.svg';
import { photos } from './photos';

const Welcome = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div className={classes.wrapper}>
      <header className={classes.pageHeader}>
        <Link to="/welcome" className="logo">
          <img src={LogoBig} alt="SpendTrack" />
        </Link>
        <ul className="links">
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="">About us</Link>
          </li>
          <li>
            <Link to="">Team</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="/login" className="lastElementWelcome">
              Login
            </Link>
          </li>
        </ul>
        <button className={classes.burgerMenuToggle} onClick={toggleMenu}>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="2" fill="black" />
            <rect y="8" width="18" height="2" fill="black" />
          </svg>
        </button>
        <div className={classes.burgerMenu} style={{ display: menuVisible ? 'block' : 'none' }}>
          <ul>
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Team</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>

      <main className={classes.welcome} style={{ display: menuVisible ? 'none' : 'flex' }}>
        <section className={classes.welcomeInfo}>
          <h1>
            Simple. <br /> <span>Your friends.</span>
          </h1>
          <section className={classes.welcomeBox}>
            <h1>
              <em>Spendtrack.</em>
            </h1>
            <p>
              Welcome to the new generation of <br /> cryptocurrency social media platform
            </p>
            <a href="/register">Get started</a>
          </section>
        </section>
        <div className={classes.welcomeImages}>
          <div className={`${classes.welcomeCol} ${classes.welcomeColLeft}`}>
            <img src={photos.Left1} />
            <img src={photos.Left2} />
            <img src={photos.Left3} />
            <img src={photos.Left4} />
            <img src={photos.Left5} />
            <img src={photos.Left6} />
            <img src={photos.Left7} />
            <img src={photos.Left8} />
            <img src={photos.Left9} />
            <img src={photos.Left10} />
            <img src={photos.Left11} />
          </div>
          <div className={`${classes.welcomeCol} ${classes.welcomeColCenter}`}>
            <img src={photos.Center1} />
            <img src={photos.Center2} />
            <img src={photos.Center3} />
            <img src={photos.Center4} />
            <img src={photos.Center5} />
            <img src={photos.Center6} />
            <img src={photos.Center7} />
            <img src={photos.Center8} />
            <img src={photos.Center9} />
            <img src={photos.Center10} />
          </div>
          <div className={`${classes.welcomeCol} ${classes.welcomeColRight}`}>
            <img src={photos.Left1} />
            <img src={photos.Left2} />
            <img src={photos.Left3} />
            <img src={photos.Left4} />
            <img src={photos.Left5} />
            <img src={photos.Left6} />
            <img src={photos.Left7} />
            <img src={photos.Left8} />
            <img src={photos.Left9} />
            <img src={photos.Left10} />
            <img src={photos.Left11} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
