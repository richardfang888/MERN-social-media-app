import { useState, useEffect } from "react";
import { IconButton, Badge, Modal } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import WidgetWrapper from "./WidgetWrapper";

function NotificationButton() {
    const [open, setOpen] = useState(false);
    const [hasSeenNotifications, setHasSeenNotifications] = useState(
      localStorage.getItem("hasSeenNotifications") === "false"
    );

    useEffect(() => {
      if (hasSeenNotifications) {
        localStorage.setItem("hasSeenNotifications", "true");
      }
    }, [hasSeenNotifications]);

    return (
      <>
        <IconButton color="inherit" onClick={() => setOpen(true)}>
          <Badge badgeContent={hasSeenNotifications ? 0 : 1} color="error">
            <NotificationsIcon sx={{ fontSize: "25px" }} />
          </Badge>
        </IconButton>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setHasSeenNotifications(true);
          }}
          onOpen={() => setHasSeenNotifications(true)}
        >
            <WidgetWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <p>placeholder 1</p>
            <p>placeholder 2</p>
            <p>placeholder 3</p>
          </div>
          </WidgetWrapper>
        </Modal>
      </>
    );
  }
export default NotificationButton;