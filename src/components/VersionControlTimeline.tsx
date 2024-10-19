import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const VersionControlTimeline: React.FC = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1970s"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Source Code Control System (SCCS)</h3>
        <p>One of the earliest version control systems, developed for Unix.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1980s"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Revision Control System (RCS)</h3>
        <p>Improved upon SCCS, introducing the concept of branching.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1990s"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Concurrent Versions System (CVS)</h3>
        <p>Introduced networked development and simultaneous editing.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2000s"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Apache Subversion (SVN)</h3>
        <p>Improved upon CVS with atomic commits and better branching/merging.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2005"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Git</h3>
        <p>Developed by Linus Torvalds, introducing distributed version control.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default VersionControlTimeline