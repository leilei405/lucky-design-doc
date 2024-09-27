import React, { FC, useState } from "react";
import classNames from "classnames";
import { AlertProps } from "./types";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

export const Alert: FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false);
  const {
    title,
    description,
    type = "default",
    onClose,
    closable = true,
  } = props;

  const classes = classNames("lucky-alert", {
    [`lucky-alert-${type}`]: type,
  });

  const titleClass = classNames("lucky-alert-title", {
    "bold-title": description,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };

  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="lucky-alert-desc">{description}</p>}
        {closable && (
          <span className="lucky-alert-close" onClick={handleClose}>
            <Icon icon="times" />
          </span>
        )}
      </div>
    </Transition>
  );
};

export default Alert;
