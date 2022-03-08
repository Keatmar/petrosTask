import React, { useState, useEffect, useRef, Fragment } from 'react';
import LogoBig from '/public/img/logo-desktop.svg';
import style from './styles';
import { default as Rectangle } from '/public/img/icon-rectangle.svg';
import { default as RectanglePress } from '/public/img/icon-rectangle-press.svg';
import { default as Notification } from '/public/img/icon-notification.svg';
import { default as NotificationPress } from '/public/img/icon-notification-press.svg';

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

  function onHoverRectangle(event) {
    if (event.type == 'mouseleave' && !rectanglePressed.pressed)
      setRectanglePressed((prev) => ({ ...prev, value: false }));
    if (event.type == 'mouseenter' && !rectanglePressed.pressed)
      setRectanglePressed((prev) => ({ ...prev, value: true }));
  }

  function onClickRectangle() {
    setRectanglePressed({ value: !rectanglePressed.pressed, pressed: !rectanglePressed.pressed });
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
    <div>
      <div className={classes.root}>
        <img src={LogoBig} />
        <div className={classes.rightElements}>
          <img
            src={rectanglePressed.value ? RectanglePress : Rectangle}
            onClick={onClickRectangle}
            onMouseEnter={onHoverRectangle}
            onMouseLeave={onHoverRectangle}
          />
          <img
            src={notificationPressed.value ? NotificationPress : Notification}
            onClick={onClickNotification}
            onMouseEnter={onHoverNotification}
            onMouseLeave={onHoverNotification}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBar;
