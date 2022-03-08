const createToken = (token) => {
  try {
    const jwt = JSON.stringify(token);
    createCookie("authorization", jwt, 1);
  } 
  catch(err) {
    return undefined;
  }
};

const readToken = () => {
  try {
    const jwt = getCookie("authorization");
    if (jwt === null) {
      return undefined;
    }
    return JSON.parse(jwt);
  } catch (err) {
    return undefined;
  }
}

function createCookie(name, value, days) {
  var expires;
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
  }
  else {
      expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

const getCookie = name => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '')
}
