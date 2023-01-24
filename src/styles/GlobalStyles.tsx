import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
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
        font: inherit;
        vertical-align: baseline;
    }

    :root {
        /* .scroll::-webkit-scrollbar {
            display: none;
        } */
        @media (max-width: 767px) {
            font-size: 12px;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 14px;
        }
        @media (min-width: 1024px) {
            font-size: 16px;
        }
        
    }
    
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }

    body {
        overflow-x: hidden;
        line-height: 1;
        font-family: "SCoreDream";
        background-color: #080808;
        letter-spacing: -0.1em;
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
`;
