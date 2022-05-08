import React from "react";
import COLORS from "utils/Colors";
import "./styleLogo.css";

const LogoIcon = ({ color }) => {
  const { innerWidth: width } = window;

  const strokeColor = color || COLORS.lightestnavy;
  const style = { stroke: strokeColor };
  return (
    <div className="container-logo">
      <svg
        style={{
          zoom: width > 1000 ? 1 : 0.6,
        }}
        className="logo-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="439"
        height="363">
        {/* <!-- Outer Ring --> */}
        <path
          className="outer-ring stroke"
          style={style}
          d="M112.529 6.02777C102.987 12.1915 95.9745 32.3755 89.9498 42C69.6964 74.3555 50.3162 107.316 30.6011 140C24.7777 149.654 19.0789 159.386 13.189 169C10.9626 172.634 6.46944 177.487 6.6929 182C6.91083 186.402 11.1769 191.373 13.4244 195C19.3949 204.636 25.2671 214.334 31.189 224C50.9435 256.244 69.9865 288.948 90.0502 321C95.9562 330.435 103.475 351.426 113.185 356.972C120.644 361.232 137.49 358 146 358L229 358L299 358C305.913 358 320.573 360.782 326.471 356.972C336.508 350.49 344.275 329.208 350.4 319C369.431 287.28 388.486 255.543 407.811 224C413.921 214.027 419.982 204.03 426 194C428.186 190.357 432.466 185.455 432.332 181C432.195 176.461 427.852 171.732 425.601 168L408 139C388.749 106.918 369.622 74.6577 349.681 43C343.35 32.9487 336.264 12.662 326.39 6.02777C320.015 1.74423 302.603 5 295 5L210 5L140 5C133.087 5 118.427 2.21759 112.529 6.02777z"
        />

        {/* <!-- SA --> */}

        <path
          className="stroke"
          style={style}
          d="M79 48L80 49L79 48M159 270C167.088 287.333 194.715 285.958 207.999 275.606C222.243 264.508 227.385 246.153 233.424 230C235.989 223.142 237.771 211.894 242.702 206.43C249.712 198.662 272.01 195.835 282 193C282 212.887 283.685 234.678 288.63 254C291.069 263.531 294.866 273.045 304 277.954C329.398 291.604 357.713 270.241 373.714 252C377.982 247.134 387.253 238.724 387.907 232C388.514 225.765 382.616 216.528 380 211L379 211C369.949 223.6 360.185 235.77 347 244.301C342.894 246.958 336.13 251.471 331.108 248.806C326.979 246.616 326.115 241.171 325.438 237C323.575 225.522 322.902 213.589 322.09 202C318.781 154.798 311.976 107.298 311 60C298.052 58.3636 275.656 55.2159 264.214 63.0857C256.288 68.5369 253.079 87.2967 249.6 96C240.852 117.887 232.307 139.924 224.05 162C220.675 171.023 217.801 185.387 211.351 192.61C206.708 197.809 195.602 202.095 189 204C187.857 177.778 167.112 151.773 155.753 129C150.809 119.088 143.827 106.462 146.139 95C149.849 76.608 176.847 75.9391 185.867 90.0038C194.945 104.161 185.24 115.601 181 129C186.859 129 199.459 131.397 204.363 127.972C208.181 125.305 209.677 118.192 210.975 114C215.899 98.0865 213.617 79.7879 202.384 67.0903C184.288 46.6335 146.662 48.1186 125 61.4668C100.542 76.5377 96.0143 102.687 105.811 128C108.408 134.71 119 149.926 117.335 156.896C116.138 161.906 104.947 166.41 101 169.375C90.5083 177.257 81.7059 186.949 76.3125 199C63.7994 226.96 76.4648 264.64 107 273.961C125.122 279.492 141.56 274.76 159 270M76 53L77 54L76 53z"
        />

        {/* <!-- A angle inner --> */}
        <path className="stroke" style={style} d="M275 110L259.308 153L250 181L281 171L277.285 128L275 110z" />

        {/* <!-- S inner circle --> */}
        <path
          className="stroke"
          style={style}
          d="M1 177L2 178L1 177M131 177C123.158 180.666 115.369 185.813 109.439 192.17C104.707 197.243 100.977 203.279 99.159 210C95.9919 221.707 98.4591 235.584 108.015 243.671C119.508 253.396 140.4 251.91 146.891 237C149.116 231.891 149.121 226.469 148.985 221C148.838 215.069 147.011 209.428 144.716 204C140.812 194.766 136.054 185.66 131 177M438 178L439 179L438 178z"
        />

        {/* <!-- S and A joint --> */}
        <path
          className="stroke"
          style={style}
          d="M189 208C189 234.096 182.217 252.724 159 267L159 268C166.023 265.337 172.664 260.104 177 254L178 254C182.77 257.595 187.798 254.708 190.637 249.985C195.978 241.096 200.613 229.071 203 219L190 226L189 208M422 210L423 211L422 210z"
        />
      </svg>
    </div>
  );
};

export default LogoIcon;
