import React from "react";

function Ripple() {
  return (
    <svg style={{margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto'}} width="207px" height="207px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" r="41.9894" fill="none" stroke="#292664" strokeWidth="2">
        <animate attributeName="r" repeatCount="indefinite" dur="3.7037037037037033s" values="0;42" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-1.8518518518518516s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="3.7037037037037033s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-1.8518518518518516s"></animate>
      </circle>
      <circle cx="50" cy="50" r="26.9694" fill="none" stroke="#667395" strokeWidth="2">
        <animate attributeName="r" repeatCount="indefinite" dur="3.7037037037037033s" values="0;42" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="3.7037037037037033s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
      </circle>
    </svg>
  )
};
export default Ripple;