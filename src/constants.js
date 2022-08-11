export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
  primary: "340deg 65% 47%",
  secondary: "240deg 60% 63%",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  laptop: 1300,
  tablet: 950,
  phone: 600,
};

export const QUERIES = {
  laptopAndLow: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  tabletAndLow: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  phoneAndLow: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
};
