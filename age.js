const yourAge = (date) =>
  Math.floor((Date.now() - Date.parse(date)) / 31536000000);
