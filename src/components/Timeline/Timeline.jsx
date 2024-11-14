import "../../App";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "", color: "black" }}>
      <h1>Hackathon Event Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>14 NOV</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Registration Starts</h3>
          <p>Participants can start registering for the hackathon.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>11 DEC</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Registration Ends</h3>
          <p>Final date for participants to register for the event.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>12 DEC</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">SUSTAIN-AI-THON STARTS</h3>
          <p>The hackathon officially kicks off.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>Review 1</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">PPT Submission</h3>
          <p>
            <ul>
              <li>Checking novelty, feasibility</li>
              <li>Feedback provided</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>Review 2</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">GITHUB Submission</h3>
          <p>
            <ul>
              <li>Monitoring progress</li>
              <li>Plagiarism checks conducted</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>Review 3</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Final Judgement</h3>
          <p>
            <ul>
              <li>Working prototype evaluation</li>
              <li>Scope of the prototype assessed</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date={<span style={{ color: "white" }}>13 DEC</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">FINAL EVALUATION & WINNERS ANNOUNCEMENT</h3>
          <p>Winners of the hackathon are announced.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}