import { useRef } from "react";
import styled, { keyframes } from "styled-components";

const Border = styled.path`
  stroke-width: 3;
  stroke-dasharray: 139.62081909179688;
  animation: dash 3s ease-in-out infinite;

  @keyframes dash {
    0% {
      stroke-dashoffset: 139.62081909179688;
    }
    20% {
      stroke-dashoffset: 0;
    }
    80% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -139.62081909179688;
    }
  }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateY(5px) scaleY(1.1);
  }
  20% {
    transform: translateY(0) scaleY(1);
  }
  75% {
    transform: translateY(0) scaleY(1);
  }
  100% {
    transform: translateY(5px) scaleY(1.1);
  }
`;

const Arrow = styled.path`
  animation: ${arrowAnimation} 3s ease-out infinite;
`;

export const ScrollDownIcon = () => {
  const cref = useRef<SVGPathElement>(null);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.734"
      height="51.841"
      viewBox="0 0 39.734 51.841"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="사각형_35"
            width="39.734"
            height="51.841"
            transform="translate(0 0)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g
        id="그룹_45"
        data-name="그룹 45"
        transform="translate(0 0)"
        clipPath="url(#clip-path)"
      >
        <Border
          id="패스_410"
          data-name="패스 410"
          d="M19.867,50.341h0A18.367,18.367,0,0,1,1.5,31.974V19.867a18.367,18.367,0,0,1,36.734,0V31.974A18.367,18.367,0,0,1,19.867,50.341Z"
          fill="none"
          stroke="#f4ffff"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <Arrow
          ref={cref}
          id="패스_411"
          d="M19.9,22.661h0a1.125,1.125,0,0,1-1.125-1.125V8.563a1.125,1.125,0,0,1,2.25,0V21.536A1.126,1.126,0,0,1,19.9,22.661"
          fill="#f4ffff"
        />
        <Arrow
          id="패스_412"
          d="M20.627,22.387h0a1.126,1.126,0,0,1-1.591,0l-5.679-5.678a1.125,1.125,0,0,1,1.591-1.592L20.627,20.8a1.126,1.126,0,0,1,0,1.591"
          fill="#f4ffff"
        />
        <Arrow
          id="패스_413"
          data-name="패스 413"
          d="M19.107,22.387h0a1.126,1.126,0,0,0,1.591,0l5.679-5.678a1.125,1.125,0,1,0-1.591-1.592L19.107,20.8a1.126,1.126,0,0,0,0,1.591"
          fill="#f4ffff"
        />
      </g>
    </svg>
  );
};
