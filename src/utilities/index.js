export const setStorageLanguage = (language) => {
  localStorage.setItem("language", language);
};

export const getStorageLanguage = () => {
  localStorage.getItem("language");
};
