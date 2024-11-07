import * as React from "react";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

const duration = 4000;

function chamaAlert() {
  setAlertVisible(true);
  setTimeout(() => {
    setAlertVisible(false);
  }, duration);
}

export default function AlertComponent({ message, severity }) {
    const [alertVisible, setAlertVisible] = useState(false)

    useEffect(() => {
        if(message) {
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, duration);
        }
    }, [message])

    return (
        alertVisible && <Alert severity={severity}>{message}</Alert>
    )
}
