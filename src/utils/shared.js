import React from 'react'
import PropTypes from 'prop-types'

export const SectionHeader = ({title, text}) => (
  <div class="section-header">
    <div className="divider"></div>
    <h2 className="title">{title}</h2>
    <p className="text">{text}</p>
  </div>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}
