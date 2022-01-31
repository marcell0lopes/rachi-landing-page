import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
--blue: #0F9AFE;
--white: #fff;
--white-200: #EFF8FF;

--gray-light: #dbdbdb;
 --gray: #6e7275;
 --grey-200: #293145;

}

*{
  margin:0;
  padding: 0;   
}

html{
  @media (max-width: 1080px){
    font-size: 93.5%;
  }

  @media (max-width: 720px){
    font-size: 85%;
  }
}

h1, h2, h3, h4, h5, h6, strong, button{
  font-family: 'Sora', sans-serif;
  font-weight: 600;
}

p, textarea, input, li {
  font-family: 'Inter';
}
`;
