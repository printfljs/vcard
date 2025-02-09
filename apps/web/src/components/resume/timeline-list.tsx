import React from "react";
import TimelineItem from "./timeline-item";
import { TimelineItemProps } from "./timeline-item";

interface TimelineListProps {
  items: TimelineItemProps[];
}

function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="timeline-list">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </ol>
  );
};


export default TimelineList;
