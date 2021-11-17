import { createGlobalStyle } from "styled-components";
interface BrandColors {
  white: string;
  yellow100: string;
  yellow400: string;
  blue100: string;
  blue400: string;
}
/* Brand Colors */
const brandColors: BrandColors = {
  white: "#fff",
  yellow100: "#FBD784",
  yellow400: "#a17a1f",
  blue100: "#354147",
  blue400: "#0B1D26",
} as const;

export default createGlobalStyle`
 :root {
  --ds-button-color-primary: ${brandColors.yellow100};
  --ds-button-color-secondary: ${brandColors.yellow400};
  --ds-button-color-tertiary: ${brandColors.white};
  --ds-ff-primary: "Spectral";
  --ds-ff-secondary: "sans-serif";
  --ds-transition: all .3s ease-out;
  --ds-spacing: ".25rem";
  --ds-radius: "1rem"; 
  --ds-bg-color: ${brandColors.blue400},
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: var(--ds-ff-primary);
  background: ${brandColors.blue100};
  line-height: 1.5;
  
}
h1,h2,h3,h4,h5{
  letter-spacing: var(--ds-spacing);
  line-height: 1.25;
  margin-bottom:.75rem;
  text-transform: capitalize;
}
h1{
  font-size: 4.75rem;
}
h2{
  font-size: 4rem;
}

p{
  margin-bottom: 1.25rem;
}
a{
  text-decoration: none;
}
`;
