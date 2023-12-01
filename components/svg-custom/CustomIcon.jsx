const CustomIcon = ({ iconType }) => {
  let svgContent;

  if (iconType === "facebook") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 7 12"
        fill="none"
      >
        <path
          d="M5.96068 6.69903L6.29126 4.54369L4.2233 4.54369L4.2233 3.14563C4.2233 2.55583 4.51165 1.98058 5.43786 1.98058L6.37864 1.98058L6.37864 0.145631C6.37864 0.145631 5.52524 0 4.70971 0C3.00583 0 1.8932 1.03252 1.8932 2.90097L1.8932 4.54369L0 4.54369L0 6.69903L1.8932 6.69903L1.8932 11.9097C2.2733 11.9694 2.66214 12 3.05825 12C3.45437 12 3.8432 11.9694 4.2233 11.9097L4.2233 6.69903L5.96068 6.69903Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (iconType === "twitter") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 14 12"
        fill="none"
      >
        <path
          d="M6.7978 3.19219L6.82815 3.71122L6.32236 3.64767C4.48129 3.40404 2.87288 2.57782 1.50725 1.1902L0.839609 0.501686L0.667641 1.01013C0.303473 2.14353 0.536136 3.34048 1.29482 4.14552C1.69945 4.5904 1.60841 4.65396 0.91042 4.38914C0.667641 4.3044 0.45521 4.24085 0.434978 4.27263C0.364168 4.34677 0.606946 5.31069 0.799146 5.69202C1.06216 6.22165 1.59829 6.74068 2.18501 7.04787L2.68068 7.2915L2.09396 7.30209C1.52748 7.30209 1.50725 7.31268 1.56794 7.53512C1.77026 8.22364 2.56941 8.95452 3.45959 9.2723L4.08677 9.49474L3.54052 9.8337C2.73126 10.321 1.78038 10.5964 0.829493 10.6175C0.374284 10.6281 0 10.6705 0 10.7023C0 10.8082 1.23412 11.4014 1.95234 11.6344C4.107 12.3229 6.66629 12.0264 8.58829 10.8506C9.95392 10.0138 11.3195 8.35075 11.9568 6.74068C12.3008 5.88269 12.6447 4.315 12.6447 3.56293C12.6447 3.07567 12.6751 3.01212 13.2415 2.42953C13.5754 2.09056 13.889 1.71983 13.9496 1.6139C14.0508 1.41264 14.0407 1.41264 13.5248 1.59272C12.6649 1.91049 12.5436 1.86812 12.9684 1.39146C13.282 1.0525 13.6563 0.438131 13.6563 0.258058C13.6563 0.22628 13.5046 0.279243 13.3326 0.374576C13.1505 0.480501 12.7459 0.639389 12.4424 0.734722L11.8961 0.914795L11.4005 0.565241C11.1273 0.374576 10.7429 0.162725 10.5406 0.0991699C10.0247 -0.0491255 9.2357 -0.0279404 8.77037 0.14154C7.5059 0.618204 6.70676 1.84694 6.7978 3.19219Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (iconType === "instagram") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.0005 2C6.371 2 6.1665 2.00712 5.5265 2.03625C4.88775 2.0655 4.45175 2.16663 4.07025 2.315C3.67562 2.46825 3.34088 2.67325 3.00738 3.00688C2.67362 3.34037 2.46862 3.67513 2.31487 4.06962C2.16612 4.45125 2.06487 4.88737 2.03612 5.52587C2.0075 6.16587 2 6.3705 2 8C2 9.6295 2.00725 9.83337 2.03625 10.4734C2.06562 11.1121 2.16675 11.5481 2.315 11.9296C2.46837 12.3242 2.67337 12.659 3.007 12.9925C3.34037 13.3263 3.67513 13.5317 4.0695 13.685C4.45125 13.8334 4.88737 13.9345 5.526 13.9637C6.166 13.9929 6.37037 14 7.99975 14C9.62937 14 9.83325 13.9929 10.4732 13.9637C11.112 13.9345 11.5485 13.8334 11.9302 13.685C12.3247 13.5317 12.659 13.3263 12.9924 12.9925C13.3261 12.659 13.5311 12.3243 13.6849 11.9297C13.8324 11.5481 13.9336 11.112 13.9636 10.4735C13.9924 9.8335 13.9999 9.6295 13.9999 8C13.9999 6.3705 13.9924 6.166 13.9636 5.526C13.9336 4.88725 13.8324 4.45125 13.6849 4.06975C13.5311 3.67512 13.3261 3.34037 12.9924 3.00688C12.6586 2.67312 12.3249 2.46812 11.9299 2.315C11.5474 2.16663 11.1111 2.0655 10.4724 2.03625C9.83238 2.00712 9.62862 2 7.99863 2H8.0005ZM7.46224 3.08124C7.56675 3.08107 7.67918 3.08112 7.80051 3.08118L8.00049 3.08124C9.60249 3.08124 9.79236 3.08699 10.425 3.11574C11.01 3.14249 11.3275 3.24024 11.539 3.32236C11.819 3.43111 12.0186 3.56111 12.2285 3.77111C12.4385 3.98111 12.5685 4.18111 12.6775 4.46111C12.7596 4.67236 12.8575 4.98986 12.8841 5.57486C12.9129 6.20736 12.9191 6.39736 12.9191 7.99861C12.9191 9.59986 12.9129 9.78986 12.8841 10.4224C12.8574 11.0074 12.7596 11.3249 12.6775 11.5361C12.5687 11.8161 12.4385 12.0155 12.2285 12.2254C12.0185 12.4354 11.8191 12.5654 11.539 12.6741C11.3277 12.7566 11.01 12.8541 10.425 12.8809C9.79249 12.9096 9.60249 12.9159 8.00049 12.9159C6.39836 12.9159 6.20849 12.9096 5.57599 12.8809C4.99099 12.8539 4.67349 12.7561 4.46186 12.674C4.18186 12.5652 3.98186 12.4352 3.77186 12.2252C3.56186 12.0152 3.43186 11.8157 3.32286 11.5356C3.24074 11.3244 3.14286 11.0069 3.11624 10.4219C3.08749 9.78936 3.08174 9.59936 3.08174 7.99711C3.08174 6.39486 3.08749 6.20586 3.11624 5.57336C3.14299 4.98836 3.24074 4.67086 3.32286 4.45936C3.43161 4.17936 3.56186 3.97936 3.77186 3.76936C3.98186 3.55936 4.18186 3.42936 4.46186 3.32036C4.67336 3.23786 4.99099 3.14036 5.57599 3.11349C6.12949 3.08849 6.34399 3.08099 7.46224 3.07974V3.08124ZM10.4832 4.79729C10.4832 4.39967 10.8057 4.07754 11.2032 4.07754V4.07729C11.6007 4.07729 11.9232 4.39979 11.9232 4.79729C11.9232 5.19479 11.6007 5.51729 11.2032 5.51729C10.8057 5.51729 10.4832 5.19479 10.4832 4.79729ZM8.00036 4.9187C6.2988 4.91877 4.91924 6.29837 4.91924 7.99995C4.91924 9.70158 6.29886 11.0806 8.00049 11.0806C9.70212 11.0806 11.0812 9.70158 11.0812 7.99995C11.0812 6.29833 9.70199 4.9187 8.00036 4.9187ZM10.0005 8.00005C10.0005 6.89542 9.10501 6.00005 8.00051 6.00005C6.89589 6.00005 6.00051 6.89542 6.00051 8.00005C6.00051 9.10455 6.89589 10 8.00051 10C9.10501 10 10.0005 9.10455 10.0005 8.00005Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (iconType === "burger") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 12H20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M5 17H20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M5 7H20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    );
  } else if (iconType === "close") {
    svgContent = (
      <svg
        fill="currentColor"
        width="24"
        height="24"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z" />
      </svg>
    );
  } else if (iconType === "note") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.61145 0.0857547C9.71798 0.16611 9.78061 0.29181 9.78061 0.425248V2.54207C9.78076 2.54849 9.78076 2.5549 9.78061 2.56128V8.39309C9.78061 9.15254 9.27716 9.81998 8.54693 10.0286L7.79851 10.2425C6.87386 10.5066 5.95342 9.81235 5.95342 8.85069C5.95342 8.20444 6.38183 7.63648 7.00322 7.45894L8.31328 7.08463C8.6784 6.98031 8.93013 6.64659 8.93013 6.26687V3.11523L3.8272 4.57321V10.0941C3.8272 10.8535 3.32375 11.521 2.59351 11.7296L1.84509 11.9434C0.92044 12.2076 0 11.5133 0 10.5517C0 9.90541 0.428412 9.33745 1.0498 9.15991L2.35987 8.78561C2.72498 8.68129 2.97671 8.34757 2.97671 7.96784V4.26185C2.97656 4.25542 2.97656 4.24901 2.97671 4.24262V2.12622C2.97671 1.93636 3.10257 1.7695 3.28513 1.71734L9.23855 0.0163654C9.36685 -0.0202928 9.50492 0.00539916 9.61145 0.0857547Z"
          fill="white"
        />
      </svg>
    );
  } else if (iconType === "phone") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 3.71429C2 2.76751 2.76751 2 3.71429 2H4.49807C4.98972 2 5.41827 2.3346 5.53751 2.81157L6.16939 5.3391C6.27395 5.75731 6.11768 6.19746 5.77281 6.45611L5.0336 7.01051C4.95684 7.06808 4.94015 7.15239 4.96171 7.21125C5.61058 8.98256 7.01744 10.3894 8.78875 11.0383C8.84761 11.0598 8.93192 11.0432 8.98949 10.9664L9.5439 10.2272C9.80254 9.88232 10.2427 9.72605 10.6609 9.83061L13.1884 10.4625C13.6654 10.5817 14 11.0103 14 11.5019V12.2857C14 13.2325 13.2325 14 12.2857 14H11C6.02944 14 2 9.97056 2 5V3.71429Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (iconType === "arrowRight") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="156"
        height="60"
        viewBox="0 0 156 60"
        fill="currentColor"
      >
        <rect x="120" width="12" height="12" fill="#0DDBCC" />
        <rect x="132" y="12" width="12" height="12" fill="#0DDBCC" />
        <rect x="144" y="24" width="12" height="12" fill="#0DDBCC" />
        <rect x="120" y="24" width="12" height="12" fill="#0DDBCC" />
        <rect x="96" y="24" width="12" height="12" fill="#0DDBCC" />
        <rect x="72" y="24" width="12" height="12" fill="#0DDBCC" />
        <rect x="48" y="24" width="12" height="12" fill="#0DDBCC" />
        <rect x="24" y="24" width="12" height="12" fill="#0DDBCC" />
        <rect y="24" width="12" height="12" fill="#0DDBCC" />
        <rect x="132" y="36" width="12" height="12" fill="#0DDBCC" />
        <rect x="120" y="48" width="12" height="12" fill="#0DDBCC" />
      </svg>
    );
  } else if (iconType === "greaterThan") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
      >
        <rect width="4" height="4" fill="currentColor" />
        <rect x="4" y="4" width="4" height="4" fill="currentColor" />
        <rect x="8" y="8" width="4" height="4" fill="currentColor" />
        <rect x="4" y="12" width="4" height="4" fill="currentColor" />
        <rect y="16" width="4" height="4" fill="currentColor" />
      </svg>
    );
  } else if (iconType === "chevron") {
    svgContent = (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="7.08333" height="7.08333" fill="#004892" />
        <rect
          x="7.08325"
          y="7.08301"
          width="7.08333"
          height="7.08333"
          fill="#004892"
        />
        <rect
          x="14.1667"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#004892"
        />
        <rect
          x="7.08325"
          y="21.25"
          width="7.08333"
          height="7.08333"
          fill="#004892"
        />
        <rect y="28.333" width="7.08333" height="7.08333" fill="#004892" />
      </svg>
    );
  } else if (iconType === "left-arrow") {
    svgContent = (
      <svg
        width="50"
        height="22"
        viewBox="0 0 92 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="70" width="7.08333" height="7.08333" fill="#0DDBCC" />
        <rect
          x="77.0833"
          y="7.08301"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="84.1666"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="70"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="56"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="28"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="14"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect y="14.167" width="7.08333" height="7.08333" fill="#0DDBCC" />
        <rect
          x="42"
          y="14.167"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="77.0833"
          y="21.25"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
        <rect
          x="70"
          y="28.333"
          width="7.08333"
          height="7.08333"
          fill="#0DDBCC"
        />
      </svg>
    );
  } else if (iconType === "star") {
    svgContent = (
      <svg
        width="46"
        height="44"
        viewBox="0 0 46 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Star 1"
          d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (iconType === "carouselChevron") {
    svgContent = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="86"
        viewBox="0 0 85 86"
        fill="none"
      >
        <rect
          x="1.5"
          y="2"
          width="82"
          height="82"
          fill="#004892"
          stroke="#004892"
          stroke-width="3"
        />
        <rect
          x="31.875"
          y="25.292"
          width="7.08333"
          height="7.08333"
          fill="currentColor"
        />
        <rect
          x="38.9583"
          y="32.375"
          width="7.08333"
          height="7.08333"
          fill="currentColor"
        />
        <rect
          x="46.0417"
          y="39.459"
          width="7.08333"
          height="7.08333"
          fill="currentColor"
        />
        <rect
          x="38.9583"
          y="46.542"
          width="7.08333"
          height="7.08333"
          fill="currentColor"
        />
        <rect
          x="31.875"
          y="53.625"
          width="7.08333"
          height="7.08333"
          fill="currentColor"
        />
      </svg>
    );
  }
  return <>{svgContent}</>;
};
export default CustomIcon;