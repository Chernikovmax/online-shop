import React from "react";

export const PaymentMethodsIcons = props => {
  const wrapperStyles = {
    width: `${props.type === "small" ? "200px" : "500px"}`,
    height: `${props.type === "small" ? "30px" : "75px"}`,
    display: "flex",
    justifyContent: "space-between"
  };

  const border = color => {
    return {
      borderRadius: "2px",
      border: `1px solid ${color}`,
      boxSizing: "content-box",
      paddingBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
    };
  };
  const svgStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: `${props.type === "small" ? "40px" : "100px"}`,
    height: `${props.type === "small" ? "30px" : "75px"}`
  };
  return (
    <div style={wrapperStyles}>
      <div style={border("#2394BC")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 291.764 291.764"
          viewBox="0 0 291.764 291.764"
          style={svgStyles}
        >
          <path
            fill="#2394BC"
            d="M119.259 100.23l-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
          />
          <path
            fill="#EFC75E"
            d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
          />
        </svg>
      </div>
      <div style={border("#E52836")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 504 504"
          version="1.1"
          viewBox="0 0 504 504"
          xmlSpace="preserve"
          style={svgStyles}
        >
          <path
            fill="#FFB600"
            d="M504 252c0 83.2-67.2 151.2-151.2 151.2-83.2 0-151.2-68-151.2-151.2 0-83.2 67.2-151.2 150.4-151.2 84.8 0 152 68 152 151.2z"
          />
          <path
            fill="#F7981D"
            d="M352.8 100.8c83.2 0 151.2 68 151.2 151.2 0 83.2-67.2 151.2-151.2 151.2-83.2 0-151.2-68-151.2-151.2"
          />
          <path
            fill="#FF8500"
            d="M352.8 100.8c83.2 0 151.2 68 151.2 151.2 0 83.2-67.2 151.2-151.2 151.2"
          />
          <path
            fill="#FF5050"
            d="M149.6 100.8C67.2 101.6 0 168.8 0 252s67.2 151.2 151.2 151.2c39.2 0 74.4-15.2 101.6-39.2 5.6-4.8 10.4-10.4 15.2-16h-31.2c-4-4.8-8-10.4-11.2-15.2h53.6c3.2-4.8 6.4-10.4 8.8-16h-71.2c-2.4-4.8-4.8-10.4-6.4-16h83.2c4.8-15.2 8-31.2 8-48 0-11.2-1.6-21.6-3.2-32h-92.8c.8-5.6 2.4-10.4 4-16h83.2c-1.6-5.6-4-11.2-6.4-16H216c2.4-5.6 5.6-10.4 8.8-16h53.6c-3.2-5.6-7.2-11.2-12-16h-29.6c4.8-5.6 9.6-10.4 15.2-15.2-26.4-24.8-62.4-39.2-101.6-39.2 0-1.6 0-1.6-.8-1.6z"
          />
          <path
            fill="#E52836"
            d="M0 252c0 83.2 67.2 151.2 151.2 151.2 39.2 0 74.4-15.2 101.6-39.2 5.6-4.8 10.4-10.4 15.2-16h-31.2c-4-4.8-8-10.4-11.2-15.2h53.6c3.2-4.8 6.4-10.4 8.8-16h-71.2c-2.4-4.8-4.8-10.4-6.4-16h83.2c4.8-15.2 8-31.2 8-48 0-11.2-1.6-21.6-3.2-32h-92.8c.8-5.6 2.4-10.4 4-16h83.2c-1.6-5.6-4-11.2-6.4-16H216c2.4-5.6 5.6-10.4 8.8-16h53.6c-3.2-5.6-7.2-11.2-12-16h-29.6c4.8-5.6 9.6-10.4 15.2-15.2-26.4-24.8-62.4-39.2-101.6-39.2h-.8"
          />
          <path
            fill="#CB2026"
            d="M151.2 403.2c39.2 0 74.4-15.2 101.6-39.2 5.6-4.8 10.4-10.4 15.2-16h-31.2c-4-4.8-8-10.4-11.2-15.2h53.6c3.2-4.8 6.4-10.4 8.8-16h-71.2c-2.4-4.8-4.8-10.4-6.4-16h83.2c4.8-15.2 8-31.2 8-48 0-11.2-1.6-21.6-3.2-32h-92.8c.8-5.6 2.4-10.4 4-16h83.2c-1.6-5.6-4-11.2-6.4-16H216c2.4-5.6 5.6-10.4 8.8-16h53.6c-3.2-5.6-7.2-11.2-12-16h-29.6c4.8-5.6 9.6-10.4 15.2-15.2-26.4-24.8-62.4-39.2-101.6-39.2h-.8"
          />
          <g fill="#FFF">
            <path d="M204.8 290.4l2.4-13.6c-.8 0-2.4.8-4 .8-5.6 0-6.4-3.2-5.6-4.8l4.8-28h8.8l2.4-15.2h-8l1.6-9.6h-16s-9.6 52.8-9.6 59.2c0 9.6 5.6 13.6 12.8 13.6 4.8 0 8.8-1.6 10.4-2.4zM210.4 264.8c0 22.4 15.2 28 28 28 12 0 16.8-2.4 16.8-2.4l3.2-15.2s-8.8 4-16.8 4c-17.6 0-14.4-12.8-14.4-12.8H260s2.4-10.4 2.4-14.4c0-10.4-5.6-23.2-23.2-23.2-16.8-1.6-28.8 16-28.8 36zm28-23.2c8.8 0 7.2 10.4 7.2 11.2H228c0-.8 1.6-11.2 10.4-11.2zM340 290.4l3.2-17.6s-8 4-13.6 4c-11.2 0-16-8.8-16-18.4 0-19.2 9.6-29.6 20.8-29.6 8 0 14.4 4.8 14.4 4.8l2.4-16.8s-9.6-4-18.4-4c-18.4 0-36.8 16-36.8 46.4 0 20 9.6 33.6 28.8 33.6 6.4 0 15.2-2.4 15.2-2.4zM116.8 227.2c-11.2 0-19.2 3.2-19.2 3.2L95.2 244s7.2-3.2 17.6-3.2c5.6 0 10.4.8 10.4 5.6 0 3.2-.8 4-.8 4h-7.2c-13.6 0-28.8 5.6-28.8 24 0 14.4 9.6 17.6 15.2 17.6 11.2 0 16-7.2 16.8-7.2l-.8 6.4H132l6.4-44c0-19.2-16-20-21.6-20zm3.2 36c0 2.4-1.6 15.2-11.2 15.2-4.8 0-6.4-4-6.4-6.4 0-4 2.4-9.6 14.4-9.6 2.4.8 3.2.8 3.2.8zM153.6 292c4 0 24 .8 24-20.8 0-20-19.2-16-19.2-24 0-4 3.2-5.6 8.8-5.6 2.4 0 11.2.8 11.2.8l2.4-14.4s-5.6-1.6-15.2-1.6c-12 0-24 4.8-24 20.8 0 18.4 20 16.8 20 24 0 4.8-5.6 5.6-9.6 5.6-7.2 0-14.4-2.4-14.4-2.4l-2.4 14.4c.8 1.6 4.8 3.2 18.4 3.2zM472.8 214.4l-3.2 21.6s-6.4-8-15.2-8c-14.4 0-27.2 17.6-27.2 38.4 0 12.8 6.4 26.4 20 26.4 9.6 0 15.2-6.4 15.2-6.4l-.8 5.6h16l12-76.8-16.8-.8zm-7.2 42.4c0 8.8-4 20-12.8 20-5.6 0-8.8-4.8-8.8-12.8 0-12.8 5.6-20.8 12.8-20.8 5.6 0 8.8 4 8.8 13.6zM29.6 291.2l9.6-57.6 1.6 57.6H52l20.8-57.6-8.8 57.6h16.8l12.8-76.8H67.2l-16 47.2-.8-47.2H27.2l-12.8 76.8h15.2zM277.6 291.2c4.8-26.4 5.6-48 16.8-44 1.6-10.4 4-14.4 5.6-18.4h-3.2c-7.2 0-12.8 9.6-12.8 9.6l1.6-8.8h-15.2L260 292h17.6v-.8zM376.8 227.2c-11.2 0-19.2 3.2-19.2 3.2l-2.4 13.6s7.2-3.2 17.6-3.2c5.6 0 10.4.8 10.4 5.6 0 3.2-.8 4-.8 4h-7.2c-13.6 0-28.8 5.6-28.8 24 0 14.4 9.6 17.6 15.2 17.6 11.2 0 16-7.2 16.8-7.2l-.8 6.4H392l6.4-44c.8-19.2-16-20-21.6-20zm4 36c0 2.4-1.6 15.2-11.2 15.2-4.8 0-6.4-4-6.4-6.4 0-4 2.4-9.6 14.4-9.6 2.4.8 2.4.8 3.2.8zM412 291.2c4.8-26.4 5.6-48 16.8-44 1.6-10.4 4-14.4 5.6-18.4h-3.2c-7.2 0-12.8 9.6-12.8 9.6l1.6-8.8h-15.2L394.4 292H412v-.8z" />
          </g>
          <g fill="#DCE5E5">
            <path d="M180 279.2c0 9.6 5.6 13.6 12.8 13.6 5.6 0 10.4-1.6 12-2.4l2.4-13.6c-.8 0-2.4.8-4 .8-5.6 0-6.4-3.2-5.6-4.8l4.8-28h8.8l2.4-15.2h-8l1.6-9.6M218.4 264.8c0 22.4 7.2 28 20 28 12 0 16.8-2.4 16.8-2.4l3.2-15.2s-8.8 4-16.8 4c-17.6 0-14.4-12.8-14.4-12.8H260s2.4-10.4 2.4-14.4c0-10.4-5.6-23.2-23.2-23.2-16.8-1.6-20.8 16-20.8 36zm20-23.2c8.8 0 10.4 10.4 10.4 11.2H228c0-.8 1.6-11.2 10.4-11.2zM340 290.4l3.2-17.6s-8 4-13.6 4c-11.2 0-16-8.8-16-18.4 0-19.2 9.6-29.6 20.8-29.6 8 0 14.4 4.8 14.4 4.8l2.4-16.8s-9.6-4-18.4-4c-18.4 0-28.8 16-28.8 46.4 0 20 1.6 33.6 20.8 33.6 6.4 0 15.2-2.4 15.2-2.4zM95.2 244.8s7.2-3.2 17.6-3.2c5.6 0 10.4.8 10.4 5.6 0 3.2-.8 4-.8 4h-7.2c-13.6 0-28.8 5.6-28.8 24 0 14.4 9.6 17.6 15.2 17.6 11.2 0 16-7.2 16.8-7.2l-.8 6.4H132l6.4-44c0-18.4-16-19.2-22.4-19.2m12 34.4c0 2.4-9.6 15.2-19.2 15.2-4.8 0-6.4-4-6.4-6.4 0-4 2.4-9.6 14.4-9.6 2.4.8 11.2.8 11.2.8zM136 290.4s4.8 1.6 18.4 1.6c4 0 24 .8 24-20.8 0-20-19.2-16-19.2-24 0-4 3.2-5.6 8.8-5.6 2.4 0 11.2.8 11.2.8l2.4-14.4s-5.6-1.6-15.2-1.6c-12 0-16 4.8-16 20.8 0 18.4 12 16.8 12 24 0 4.8-5.6 5.6-9.6 5.6M469.6 236s-6.4-8-15.2-8c-14.4 0-19.2 17.6-19.2 38.4 0 12.8-1.6 26.4 12 26.4 9.6 0 15.2-6.4 15.2-6.4l-.8 5.6h16l12-76.8m-20.8 41.6c0 8.8-7.2 20-16 20-5.6 0-8.8-4.8-8.8-12.8 0-12.8 5.6-20.8 12.8-20.8 5.6 0 12 4 12 13.6zM29.6 291.2l9.6-57.6 1.6 57.6H52l20.8-57.6-8.8 57.6h16.8l12.8-76.8h-20l-22.4 47.2-.8-47.2h-8.8l-27.2 76.8h15.2zM260.8 291.2h16.8c4.8-26.4 5.6-48 16.8-44 1.6-10.4 4-14.4 5.6-18.4h-3.2c-7.2 0-12.8 9.6-12.8 9.6l1.6-8.8M355.2 244.8s7.2-3.2 17.6-3.2c5.6 0 10.4.8 10.4 5.6 0 3.2-.8 4-.8 4h-7.2c-13.6 0-28.8 5.6-28.8 24 0 14.4 9.6 17.6 15.2 17.6 11.2 0 16-7.2 16.8-7.2l-.8 6.4H392l6.4-44c0-18.4-16-19.2-22.4-19.2m12 34.4c0 2.4-9.6 15.2-19.2 15.2-4.8 0-6.4-4-6.4-6.4 0-4 2.4-9.6 14.4-9.6 3.2.8 11.2.8 11.2.8zM395.2 291.2H412c4.8-26.4 5.6-48 16.8-44 1.6-10.4 4-14.4 5.6-18.4h-3.2c-7.2 0-12.8 9.6-12.8 9.6l1.6-8.8" />
          </g>
        </svg>
      </div>
      <div style={border("#E52836")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 504 504"
          viewBox="0 0 504 504"
          style={svgStyles}
        >
          <path
            fill="#07A9E2"
            d="M252 364c30.4-27.2 49.6-67.2 49.6-112s-19.2-84-49.6-112c-26.4-24-62.4-39.2-100.8-39.2C68 100.8 0 168.8 0 252s68 150.4 151.2 150.4c38.4.8 74.4-14.4 100.8-38.4z"
          />
          <path
            fill="#009DDD"
            d="M0 252c0 83.2 68 150.4 151.2 150.4 39.2 0 74.4-14.4 100.8-39.2 30.4-27.2 49.6-67.2 49.6-112S282.4 168 252 140c-26.4-24-62.4-39.2-100.8-39.2"
          />
          <path
            fill="#0284CC"
            d="M252 140c-26.4-24-62.4-39.2-100.8-39.2H144C96.8 135.2 66.4 190.4 66.4 252s30.4 116.8 76.8 150.4h7.2c39.2 0 74.4-14.4 100.8-39.2 30.4-27.2 49.6-67.2 49.6-112S282.4 168 252 140z"
          />
          <path
            fill="#FF2957"
            d="M353.6 100.8c-39.2 0-74.4 14.4-101.6 39.2-5.6 4.8-10.4 10.4-15.2 16h30.4c4 4.8 8 10.4 11.2 16h-53.6c-3.2 5.6-6.4 10.4-8.8 16h71.2c2.4 5.6 4.8 10.4 6.4 16h-83.2c-1.6 5.6-3.2 10.4-4.8 16h92.8c2.4 10.4 3.2 20.8 3.2 32 0 16.8-2.4 32.8-8 48h-83.2c1.6 5.6 4 10.4 6.4 16H288c-2.4 5.6-5.6 11.2-8.8 16h-53.6c3.2 5.6 7.2 11.2 11.2 16h30.4c-4.8 5.6-9.6 11.2-15.2 16 27.2 24 62.4 39.2 101.6 39.2 83.2 0 150.4-67.2 150.4-150.4 0-84-67.2-152-150.4-152z"
          />
          <path
            fill="#ED1C2E"
            d="M353.6 100.8c-39.2 0-74.4 14.4-101.6 39.2-5.6 4.8-10.4 10.4-15.2 16h30.4c4 4.8 8 10.4 11.2 16h-53.6c-3.2 5.6-6.4 10.4-8.8 16h71.2c2.4 5.6 4.8 10.4 6.4 16h-83.2c-1.6 5.6-3.2 10.4-4.8 16h92.8c2.4 10.4 3.2 20.8 3.2 32 0 16.8-2.4 32.8-8 48h-83.2c1.6 5.6 4 10.4 6.4 16H288c-2.4 5.6-5.6 11.2-8.8 16h-53.6c3.2 5.6 7.2 11.2 11.2 16h30.4c-4.8 5.6-9.6 11.2-15.2 16 27.2 24 62.4 39.2 101.6 39.2 83.2 0 150.4-67.2 150.4-150.4"
          />
          <path
            fill="#0466B5"
            d="M252 364c30.4-27.2 49.6-67.2 49.6-112s-19.2-84-49.6-112v224z"
          />
          <path
            fill="#FFF"
            d="M452 284.8c0-2.4 2.4-4.8 4.8-4.8s4.8 2.4 4.8 4.8-2.4 4.8-4.8 4.8-4.8-2.4-4.8-4.8zm4.8 4c2.4 0 3.2-1.6 3.2-4s-1.6-3.2-3.2-3.2c-2.4 0-4 1.6-4 3.2s2.4 4 4 4zm0-2.4h-.8v-4H458.4l.8.8c0 .8 0 .8-.8.8l.8 1.6h-.8l-.8-1.6h-.8v2.4zm0-2.4h.8v-.8h-.8v.8z"
          />
          <path
            fill="#D1094B"
            d="M252 140c-5.6 4.8-10.4 10.4-15.2 16h30.4c4 4.8 8 10.4 11.2 16h-53.6c-3.2 5.6-6.4 10.4-8.8 16h71.2c2.4 5.6 4.8 10.4 6.4 16h-83.2c-1.6 5.6-3.2 10.4-4.8 16h92.8c2.4 10.4 3.2 20.8 3.2 32 0 16.8-2.4 32.8-8 48h-83.2c1.6 5.6 4 10.4 6.4 16H288c-2.4 5.6-5.6 11.2-8.8 16h-53.6c3.2 5.6 7.2 11.2 11.2 16h30.4c-4.8 5.6-9.6 11.2-15.2 16 27.2 24 62.4 39.2 101.6 39.2h7.2c46.4-33.6 76.8-88.8 76.8-150.4S407.2 136 360.8 102.4h-7.2C314.4 100.8 279.2 116 252 140z"
          />
          <path
            fill="#FFF"
            d="M132 289.6L112.8 289.6 124 231.2 98.4 289.6 81.6 289.6 78.4 231.2 67.2 289.6 50.4 289.6 64.8 212.8 94.4 212.8 96 260.8 116.8 212.8 147.2 212.8z"
          />
          <g fill="#DCE5E5">
            <path d="M113.6 256l11.2-24.8-8.8 46.4c.8 4 1.6 8.8 3.2 12.8H132l14.4-76.8h-28c-3.2 12-5.6 25.6-5.6 39.2.8.8.8 1.6.8 3.2zM341.6 288.8c-5.6 1.6-8.8 2.4-13.6 2.4-9.6 0-14.4-4.8-14.4-13.6 0-1.6 0-3.2.8-5.6l.8-6.4.8-4.8 8.8-47.2h18.4l-2.4 14.4h9.6l-2.4 14.4h-9.6l-4.8 25.6c0 .8-.8 2.4-.8 2.4 0 3.2 2.4 4.8 6.4 4.8 2.4 0 4 0 4.8-.8l-2.4 14.4zM396.8 228c-1.6-.8-1.6-.8-2.4-.8s-1.6 0-1.6-.8h-2.4c-6.4 0-10.4 2.4-16 10.4l1.6-9.6h-16.8L348 289.6h19.2c6.4-38.4 9.6-44.8 18.4-44.8h2.4l2.4.8 6.4-17.6zM267.2 247.2c0 8 4.8 13.6 14.4 16.8 8 3.2 8.8 4 8.8 7.2 0 4-3.2 5.6-11.2 5.6-5.6 0-11.2-.8-16.8-2.4l-2.4 14.4h.8l3.2.8h4.8c4.8.8 8 .8 10.4.8 20 0 29.6-6.4 29.6-20.8 0-8.8-4-13.6-13.6-17.6-8-3.2-8.8-4-8.8-6.4 0-3.2 3.2-4.8 9.6-4.8 3.2 0 8.8 0 13.6.8l2.4-14.4c-4.8-.8-12-.8-16.8-.8-20.8 0-28 9.6-28 20.8zM192.8 289.6h-15.2v-6.4c-4.8 4.8-11.2 7.2-20 7.2-10.4 0-16.8-7.2-16.8-16.8 0-15.2 12-24 32.8-24h8c.8-2.4.8-3.2.8-4 0-4-3.2-5.6-12-5.6-5.6 0-11.2.8-15.2 1.6l-2.4.8h-1.6l2.4-13.6c9.6-2.4 15.2-3.2 22.4-3.2 16 0 24.8 6.4 24.8 18.4 0 3.2 0 5.6-1.6 12.8l-4 22.4-.8 4-.8 3.2v2.4l-.8.8zm-13.6-28h-4c-10.4 0-16 3.2-16 9.6 0 4 2.4 6.4 6.4 6.4 8 0 13.6-6.4 13.6-16zM254.4 288c-6.4 1.6-12.8 2.4-19.2 2.4-20.8 0-32-9.6-32-28 0-21.6 13.6-36.8 32.8-36.8 15.2 0 24.8 8.8 24.8 22.4 0 4.8-.8 8.8-2.4 15.2h-37.6v2.4c0 7.2 5.6 11.2 16 11.2 7.2 0 12.8-.8 19.2-4l-1.6 15.2zm-9.6-36.8V248c0-4.8-3.2-8-8.8-8s-10.4 4-12 11.2h20.8z" />
          </g>
          <g fill="#FFF">
            <path d="M455.2 261.6c-3.2 20.8-17.6 29.6-36.8 29.6-20.8 0-29.6-12.8-29.6-28.8 0-21.6 14.4-36.8 36.8-36.8 19.2 0 29.6 12.8 29.6 28v8zm-20-8c0-6.4-2.4-12-10.4-12-9.6 0-15.2 11.2-15.2 21.6 0 8 4 13.6 10.4 13.6 4 0 12.8-5.6 14.4-15.2.8-3.2.8-5.6.8-8z" />
            <path d="M389.6 269.6c.8-5.6 1.6-12 1.6-17.6v-1.6c-.8 4-1.6 8-1.6 12.8-.8 1.6-.8 4 0 6.4z" />
          </g>
        </svg>
      </div>
      <div style={border("#2394BC")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 488.8 488.8"
          viewBox="0 0 488.8 488.8"
          style={svgStyles}
        >
          <path
            fill="#32A6CE"
            d="M381.6 200.4c-12 0-21.6 3.2-29.6 4.8l-2.4 18.4c4-1.6 15.2-4.8 24.8-5.6 9.6 0 15.2 1.6 13.6 10.4-28.8 0-48 5.6-52 24.8-5.6 32 29.6 32.8 43.2 18.4l-1.6 8.8h25.6l11.2-52c4-21.6-15.2-28.8-32.8-28zm1.6 53.6c-1.6 6.4-7.2 8.8-13.6 9.6-5.6 0-10.4-3.2-7.2-9.6 3.2-4.8 10.4-4.8 16-4.8h6.4c-.8-.8-1.6 2.4-1.6 4.8z"
          />
          <path
            fill="#1A80AD"
            d="M349.6 223.6c4-1.6 15.2-4.8 24.8-5.6 9.6 0 15.2 1.6 13.6 10.4-28.8 0-48 5.6-52 24.8-5.6 32 29.6 32.8 43.2 18.4l-1.6 8.8h25.6l11.2-52c4.8-21.6-15.2-27.2-32.8-27.2m1.6 52.8c-1.6 6.4-7.2 8.8-13.6 9.6-5.6 0-10.4-3.2-7.2-9.6 3.2-4.8 10.4-4.8 16-4.8h6.4c-.8-.8-1.6 2.4-1.6 4.8z"
          />
          <path
            fill="#32A6CE"
            d="M436 176.4L415.2 280.4 440.8 280.4 462.4 176.4z"
          />
          <path
            fill="#1A80AD"
            d="M454.4 176.4L415.2 280.4 440.8 280.4 462.4 176.4 436 176.4 436 176.4z"
          />
          <path
            fill="#32A6CE"
            d="M316.8 176.4h-47.2l-20.8 104h28l7.2-32h20c19.2 0 35.2-11.2 39.2-31.2 4-23.2-12.8-40.8-26.4-40.8zm-.8 36c-1.6 7.2-8.8 12-16 12h-12.8l5.6-24h13.6c7.2 0 11.2 4.8 9.6 12z"
          />
          <path
            fill="#1A80AD"
            d="M316.8 176.4h-32l-36.8 104h28l7.2-32h20c19.2 0 35.2-11.2 39.2-31.2 4.8-23.2-12-40.8-25.6-40.8zm-.8 36c-1.6 7.2-8.8 12-16 12h-12.8l5.6-24h13.6c7.2 0 11.2 4.8 9.6 12z"
          />
          <path
            fill="#21789E"
            d="M132 200.4c-12 0-21.6 3.2-28.8 4.8l-2.4 18.4c3.2-1.6 15.2-4.8 24.8-5.6 9.6 0 15.2 1.6 13.6 10.4-28 0-47.2 5.6-51.2 24.8-5.6 32 28.8 32.8 42.4 18.4l-1.6 8.8h25.6l11.2-52c4-21.6-16-28.8-33.6-28zm2.4 53.6c-1.6 6.4-7.2 8.8-13.6 9.6-5.6 0-10.4-3.2-6.4-9.6 3.2-4.8 10.4-4.8 15.2-4.8h6.4c-.8-.8-1.6 2.4-1.6 4.8z"
          />
          <path
            fill="#1A5B80"
            d="M101.6 223.6c3.2-1.6 15.2-4.8 24.8-5.6 9.6 0 15.2 1.6 13.6 10.4-28 0-47.2 5.6-51.2 24.8-5.6 32 28.8 32.8 42.4 18.4l-2.4 8.8h25.6l11.2-52c4.8-21.6-15.2-27.2-32.8-27.2m1.6 52.8c-1.6 6.4-7.2 8.8-13.6 9.6-5.6 0-10.4-3.2-6.4-9.6 3.2-4.8 10.4-4.8 15.2-4.8h6.4c-.8-.8-1.6 2.4-1.6 4.8z"
          />
          <path
            fill="#21789E"
            d="M176 200.4L201.6 200.4 205.6 245.2 231.2 200.4 257.6 200.4 196.8 312.4 168 312.4 186.4 278.8z"
          />
          <path
            fill="#1A5B80"
            d="M201.6 202L205.6 246 231.2 200.4 257.6 200.4 196.8 312.4 168 312.4 186.4 279.6"
          />
          <path
            fill="#21789E"
            d="M68.8 176.4h-48L0 280.4h28l7.2-32h20c19.2 0 35.2-11.2 39.2-31.2 4.8-23.2-12-40.8-25.6-40.8zm-.8 36c-1.6 7.2-8.8 12-16 12H39.2l5.6-24h13.6c7.2 0 11.2 4.8 9.6 12z"
          />
          <path
            fill="#1A5B80"
            d="M68.8 176.4H47.2L0 280.4h28l7.2-32h20c19.2 0 35.2-11.2 39.2-31.2 4.8-23.2-12-40.8-25.6-40.8zm-.8 36c-1.6 7.2-8.8 12-16 12H39.2l5.6-24h13.6c7.2 0 11.2 4.8 9.6 12z"
          />
          <g fill="#06435E">
            <path d="M127.2 228.4c-21.6 1.6-36 8-39.2 24-5.6 32 28.8 32.8 42.4 18.4l-1.6 9.6h25.6l4-19.2-31.2-32.8zm7.2 25.6c-1.6 6.4-7.2 8.8-13.6 9.6-5.6 0-10.4-3.2-6.4-9.6 3.2-4.8 10.4-4.8 15.2-4.8h6.4c-.8-.8-1.6 2.4-1.6 4.8z" />
            <path d="M207.2 244.4L205.6 246.8 222.4 262.8 257.6 200.4 231.2 200.4z" />
            <path d="M28 280.4L35.2 248.4 2.4 280.4z" />
          </g>
          <g fill="#2273AA">
            <path d="M276 280.4L283.2 246.8 283.2 247.6 250.4 280.4z" />
            <path d="M376 228.4c-21.6 1.6-36 8-39.2 24-5.6 32 29.6 32.8 43.2 18.4l-2.4 9.6h25.6l4-19.2-31.2-32.8zm7.2 25.6c-1.6 6.4-7.2 8.8-13.6 9.6-5.6 0-10.4-3.2-7.2-9.6 3.2-4.8 10.4-4.8 16-4.8h6.4c-.8-.8-1.6 2.4-1.6 4.8z" />
            <path d="M433.6 233.2L415.2 280.4 440.8 280.4 448 248.4z" />
          </g>
          <g fill="#32A6CE">
            <path d="M468 193.2V182h-4v-1.6h10.4v1.6h-4v11.2H468zM476 193.2v-12.8h2.4l3.2 8.8c0 .8.8 1.6.8 1.6 0-.8 0-.8.8-2.4l3.2-8.8h2.4v12.8h-1.6v-11.2l-4 11.2h-2.4l-4-11.2v11.2h-.8v.8z" />
          </g>
        </svg>
      </div>
    </div>
  );
};
