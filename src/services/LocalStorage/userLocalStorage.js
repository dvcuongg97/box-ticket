export const userLocalStorage = {
  set: (user) => {
    const data = JSON.stringify(user);
    localStorage.setItem("USER", data);
  },
  get: () => {
    const data = localStorage.getItem("USER");
    return JSON.parse(data);
  },
  remove: () => {
    localStorage.removeItem("USER");
  },
};
