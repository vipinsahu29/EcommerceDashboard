import { allNav } from "./allNav";

export const getNav = (role) => {
  const finalNav = [];

  finalNav.forEach((item) => {
    if (role === item.role) {
      console.log('----,',item)
      finalNav.push(item);
    }
  });
  return allNav;
};
