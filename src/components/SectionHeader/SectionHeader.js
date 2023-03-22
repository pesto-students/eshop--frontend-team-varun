import React from 'react';
import "./sectionHeader.css"

const SectionHeader = (props) => {
  return (
    <p className="section-header-title mx-5">{props.title}</p>
  )
}

export default SectionHeader;