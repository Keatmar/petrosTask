import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { default as LogoBig } from '/public/img/logo.svg';
import style from './styles';
import { default as RectangleIcon } from '/public/img/icons/rectangle.svg';
import { default as RectanglePressIcon } from '/public/img/icons/rectangle-press.svg';
import { default as NotificationIcon } from '/public/img/icons/notification.svg';
import { default as NotificationPressIcon } from '/public/img/icons/notification-press.svg';
import { default as SearchIcon } from '/public/img/icons/search.svg';
import { default as DefaultAvatar } from '/public/img/avatar-default.png';
import { default as Burger } from '/public/img/icons/burger.svg';

const MainBar = (props) => {
  const classes = style();
  const [rectanglePressed, setRectanglePressed] = useState({
    value: false,
    pressed: false
  });

  const [notificationPressed, setNotificationPressed] = useState({
    value: false,
    pressed: false
  });

  const [showDialog, setShowDialog] = useState(false);
  const [username, setUsername] = useState('petros');
  const [avatar, setAvatar] = useState(null);
  function onHoverRectangle(event) {
    if (event.type == 'mouseleave' && !rectanglePressed.pressed)
      setRectanglePressed((prev) => ({ ...prev, value: false }));
    if (event.type == 'mouseenter' && !rectanglePressed.pressed)
      setRectanglePressed((prev) => ({ ...prev, value: true }));
  }
  function onClickRectangle() {
    setRectanglePressed({ value: !rectanglePressed.pressed, pressed: !rectanglePressed.pressed });
    setShowDialog(!showDialog);
  }

  function onHoverNotification(event) {
    if (event.type == 'mouseleave' && !notificationPressed.pressed)
      setNotificationPressed((prev) => ({ ...prev, value: false }));
    if (event.type == 'mouseenter' && !notificationPressed.pressed)
      setNotificationPressed((prev) => ({ ...prev, value: true }));
  }

  function onClickNotification() {
    setNotificationPressed({ value: !notificationPressed.pressed, pressed: !notificationPressed.pressed });
  }

  return (
    <div className={classes.root}>
      <div className={classes.mainBarRoot}>
        <div>
          <img src={LogoBig} className={classes.logo} />
        </div>
        <div className={classes.searchBar}>
          <img src={SearchIcon} />
          <input placeholder="Search your friends..." />
        </div>
        <div className={classes.rightElements}>
          <label>{username}</label>
          <img src={avatar ? avatar : DefaultAvatar} />
          <img
            className={classes.notificationIcon}
            src={rectanglePressed.value ? RectanglePressIcon : RectangleIcon}
            onClick={onClickRectangle}
            onMouseEnter={onHoverRectangle}
            onMouseLeave={onHoverRectangle}
          />
          <img
            src={notificationPressed.value ? NotificationPressIcon : NotificationIcon}
            onClick={onClickNotification}
            onMouseEnter={onHoverNotification}
            onMouseLeave={onHoverNotification}
          />
        </div>
      </div>
      {showDialog && (
        <div className={classes.information}>
          <label>Information</label>
          <div className={classes.info}>
            <img src={avatar ? avatar : DefaultAvatar} />
            <div className={classes.infoDetails}>
              <h5>{username}</h5>
              <Link to="" className={classes.seeProfile}>
                See your profile
              </Link>
            </div>
          </div>
          <hr />
          <div className={classes.informationLink}>
            <Link to="">Settings & Privacy</Link>
            <Link to="">Help & Support</Link>
            <a>Log Out</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBar;
