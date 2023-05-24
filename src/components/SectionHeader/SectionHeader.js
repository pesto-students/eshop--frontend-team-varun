import React from 'react';
import "./sectionHeader.css"

const SectionHeader = (props) => {
  return (
    <p className="section-header-title mb-0" style={{marginLeft: "40px"}}>{props.title}</p>
  )
}

export default SectionHeader;