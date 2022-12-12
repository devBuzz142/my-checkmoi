import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          position: relative;

          margin: 0;
          padding: 0;
          border: nene;

          color: inherit;

          :not(h1, h2, h3, h4, h5, h6) {
            font: inherit;
          }
        }

        *,
        ::after,
        ::before {
          box-sizing: border-box;
          /* flex-shrink: 0; */
          //  content의 크기가 반드시 유지되는 것을 원칙으로 해야하는가? 나중에 결정할 것
        }

        // 사실상 <html>
        :root {
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
          cursor: default;
          line-height: 1.5;
          overflow-wrap: break-word;
          -moz-tab-size: 4;
          tab-size: 4;
        }

        html,
        body {
          height: 100%;
        }

        #root {
          height: 100%;
        }

        img,
        picture,
        video,
        canvas,
        svg {
          display: block; // inline으로 되어있으면 자꾸 하단에 4px씩 여백이 생긴다!
          max-width: 100%; // 뼈지나오지 않게
        }

        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;

          border: 0;
          background: none;

          cursor: pointer;

          &:disabled {
            cursor: not-allowed;
          }
        }

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;

          border: none;
          border-radius: 0px;
        }

        input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;

          border: 0;
          background: none;

          resize: none;

          &:focus {
            outline: none;
          }
        }

        textarea {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;

          border: 0;
          background: none;

          resize: none;
          overflow: visible;

          &:focus {
            outline: none;
          }
        }

        a {
          text-decoration: none;
        }

        ol,
        ul,
        li {
          list-style: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
