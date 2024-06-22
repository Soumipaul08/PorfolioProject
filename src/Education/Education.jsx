import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import './Education.css'

function Education() {
  return (
    <>
    <div className='container education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Top recent projects
        </h2>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={ <MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Education



