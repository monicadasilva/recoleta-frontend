import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
/* CSS RESET */
html, body, div, span, applet, object, iframe,
p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;;
    vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
/* CSS RESET  FIM*/    
  }
  :root{
  --primary-one:          #64FA70;
  --primary-zero:         #4FE385;
  --primary-one-plus:     #74E34F;

  --secondary-one:        #D6C9FB;
  --secondary-zero:       #9E7DFA;
  --secondary-one-plus:   #68627A;

  --black-one:            #4D4D4D;
  --black-zero:           #262626;
  --black-one-plus:       #000000;

  --black-one:            #4D4D4D;
  --black-zero:           #262626;
  --black-one-plus:       #000000;

  --white-one-negative:   #DFDFDF;
  --white-zero:           #FBFCFF;
  --white-one-plus:       #FFFFFF;
  --white-two-plus:       #F4F4F4;

  --error:                #FF1A25;
  --success:              #317A37;
  --warnig:               #FEDC00;
  --info:                 #D0E2F8
} 
  
`;
