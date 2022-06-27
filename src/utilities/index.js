export const setStorageLanguage = (language) => {
  localStorage.setItem("language", language);
};

export const getStorageLanguage = () => {
  localStorage.getItem("language");
};

export const validateString = (string) => {
  return string?.match(/^[A-Za-zא-ת]+$/);
};

export const validateEmail = (email) => {
  return email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};
