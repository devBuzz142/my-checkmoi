const MY_KEY: { [key: string]: string } = {};

export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(MY_KEY[key], JSON.stringify(value));
};

export const getLocalStorageItem = (key: string, defaultValue?: any) => {
  try {
    const storedValue = localStorage.getItem(MY_KEY[key]);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export const removeLocalStorageItem = (key: string) =>
  localStorage.removeItem(MY_KEY[key]);

export const setSessionItem = (key: string, value: any) => {
  sessionStorage.setItem(MY_KEY[key], value);
};

export const getSessioinItem = (key: string, defaultValue?: any) => {
  try {
    const storedValue = sessionStorage.getItem(MY_KEY[key]);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export const removeSessionItem = (key: string) =>
  sessionStorage.removeItem(MY_KEY[key]);
