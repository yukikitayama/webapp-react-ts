import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Display from "./Display";
import InputForm from "./InputForm";

type InputDisplayProps = {
  open: boolean;
  onClose: () => void;
};

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: 'background.paper'
  // boxShadow: 24,
  // p: 4
};

const InputDisplay = ({ open, onClose }: InputDisplayProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <Display title="Add a new coding log">
          <InputForm onClose={onClose} />
        </Display>
      </Box>
    </Modal>
  );
};

export default InputDisplay;
