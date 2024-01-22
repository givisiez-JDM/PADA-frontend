import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}

body {
    font-family: 'Poppins' !important;
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

:focus {
    outline: 0;
}

button {
    cursor: pointer;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

img {
    border: 0;
    margin: 0;
    padding: 0;
    max-width: 100%;
    height: auto;
}

body {
    font-weight: 'Poppins';
}

input,
button,
select {
    font-family: 'Poppins';
}

body.loading {
    overflow-y: hidden;
}
  


`
