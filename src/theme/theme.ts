const themes: { [key: string]: { logo: string; primary: string } } = {
  react: {
    logo: "/react.svg",
    primary: "#087EA4",
  },
  angular: {
    logo: "/angular.png",
    primary: "#DD0031",
  },
  vue: {
    logo: "/vue.png",
    primary: "#41B883",
  },
  default: {
    logo: "/next.svg",
    primary: "#000",
  },
};
export const getTheme = (subdomain: string | null) => {
  if (!subdomain) return themes.default;
  return themes[subdomain] || themes.default;
};
