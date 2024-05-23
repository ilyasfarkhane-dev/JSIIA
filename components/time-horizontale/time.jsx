import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import AdjustIcon from "@mui/icons-material/Adjust";

function CustomTimelineItem({ date, icon: Icon, title, popoverContent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <Icon sx={{ color: "blue" }} /> {/* Apply blue color to the icon */}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          component="span"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {title}
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{popoverContent}</Typography>
        </Popover>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function CustomizedTimeline() {
  return (
    <div className="">
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-[100px]">
        Processus de Participation
      </h2>

      <Timeline position="alternate">
        <CustomTimelineItem
          date="01 Avril"
          icon={AdjustIcon}
          title="Début des soumissions"
          popoverContent="The submissions start on this date."
        />
        <CustomTimelineItem
          date="20 Mai"
          icon={AdjustIcon}
          title="Notification des acceptations"
          popoverContent="Submissions close on this date."
        />
        <CustomTimelineItem
          date="01 Juin"
          icon={AdjustIcon}
          title="Date limite des enregistrements"
          popoverContent="Results will be announced on this date."
        />
        <CustomTimelineItem
          date="06 Juin 2024"
          icon={AdjustIcon}
          title="Début du congrès"
          popoverContent="Results will be announced on this date."
        />
      </Timeline>
    </div>
  );
}
