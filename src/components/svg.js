import React from 'react'
import PropTypes from 'prop-types'

const icons = {
  marketing: {
    shape: (
      <React.Fragment>
        <path d="M18 20C18 18.8954 18.8954 18 20 18H42C43.1046 18 44 18.8954 44 20V42C44 43.1046 43.1046 44 42 44H20C18.8954 44 18 43.1046 18 42V20Z"/>
        <path d="M10.0005 30H8.00049C5.79135 30 4.00049 28.2091 4.00049 26V8C4.00049 5.79086 5.79135 4 8.00049 4H26.0005C28.2096 4 30.0005 5.79086 30.0005 8V10"/>
      </React.Fragment>
    ),
    viewBox: '0 0 48 48',
  },
  branding: {
    shape: (
      <React.Fragment>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3997 5.38013L35.7197 16.7001C40.2978 21.2753 41.6686 28.158 39.1927 34.1381C36.7168 40.1181 30.882 44.0175 24.4097 44.0175C17.9373 44.0175 12.1025 40.1181 9.62657 34.1381C7.15069 28.158 8.52151 21.2753 13.0996 16.7001L24.3997 5.38013Z" />
      </React.Fragment>
    ),
    viewBox: '0 0 48 48',
  },
  ecommerce: {
    shape: (
      <React.Fragment>
        <path d="M16 46C18.2091 46 20 44.2091 20 42C20 39.7909 18.2091 38 16 38C13.7909 38 12 39.7909 12 42C12 44.2091 13.7909 46 16 46Z"  />
        <path d="M40 46C42.2091 46 44 44.2091 44 42C44 39.7909 42.2091 38 40 38C37.7909 38 36 39.7909 36 42C36 44.2091 37.7909 46 40 46Z" />
        <path d="M11.3395 12H45.9995L42.6395 28.78C42.262 30.6805 40.5767 32.0371 38.6395 32H17.4995C15.4785 32.0171 13.7622 30.524 13.4995 28.52L10.4595 5.48C10.1988 3.49119 8.50534 2.00304 6.49951 2H1.99951" />
      </React.Fragment>
    ),
    viewBox: '0 0 48 48',
  },
  design: {
    shape: (
      <React.Fragment>
        <path d="M24.0005 44C35.0462 44 44.0005 35.0457 44.0005 24C44.0005 12.9543 35.0462 4 24.0005 4C12.9548 4 4.00049 12.9543 4.00049 24C4.00049 35.0457 12.9548 44 24.0005 44Z"  />
        <path d="M4.00049 24H44.0005"  />
        <path d="M24.0005 4C29.003 9.47671 31.846 16.5841 32.0005 24C31.846 31.4159 29.003 38.5233 24.0005 44C18.9979 38.5233 16.155 31.4159 16.0005 24C16.155 16.5841 18.9979 9.47671 24.0005 4V4Z"   />
      </React.Fragment>
    ),
    viewBox: '0 0 48 48',
  },
  menu: {
    shape: (
      <React.Fragment>
        <path  d="M7.1504 12h15.6M3.25 6h19.5M3.25 18h19.5"/>
      </React.Fragment>
    ),
    viewBox: '0 0 26 24',
  },
  arrow: {
    shape: (
      <React.Fragment>
        <path d="M1 20L14 33M14 33L27 20M14 33V0" />
      </React.Fragment>
    ),
    viewBox: '0 0 48 48',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, className, strokeWidth }) => (
  <svg
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    width={`${width}px`}
    left={left}
    top={top}
    className={className}
    strokeWidth={strokeWidth}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  fill: PropTypes.string,
  width: PropTypes.number,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
}

SVG.defaultProps = {
  stroke: 'currentColor',
  width: 24,
  fill: 'none',
  className: 'icon',
  strokeWidth: 2,
}
