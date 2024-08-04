import { type FormEvent, type ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import { useCustomDispatch, useCustomSelector } from "../store/hooks";
import { closeFormDialog } from "../store/layout-slice";
import LeetCodeForm from "./forms/LeetCodeForm";
import PerformanceForm from "./forms/PerformanceForm";
import { getAuthToken } from "../utils/auth";

const FormDialog = () => {
  const isFormDialogOpen = useCustomSelector(
    (state) => state.layout.isFormDialogOpen
  );
  const formType = useCustomSelector((state) => state.layout.formType);
  const dispatch = useCustomDispatch();
  const isAuth = useCustomSelector((state) => state.auth.isAuthenticated);

  let form: ReactNode = <div>modal children</div>;
  if (formType === "leetcode") {
    form = <LeetCodeForm />;
  } else if (formType === "performance") {
    form = <PerformanceForm />;
  }

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd.entries());

    let body: any;
    let url: string;
    if (formType === "leetcode") {
      url = `${process.env.REACT_APP_API_URL}/coding/log`;
      body = JSON.stringify({
        date: data.date,
        number: data.number,
        level: data.level,
        language: data.language,
        title: data.title,
        topics: data.topics,
        pickedFrom: data.pickedFrom,
        understanding: data.understanding === "" ? null : +data.understanding,
        minuteSpent: data.minuteSpent === "" ? null : +data.minuteSpent,
        firstTime: data.firstTime === "" ? null : +data.firstTime,
        optimized: data.optimized === "" ? null : +data.optimized,
        sawSolution: data.sawSolution === "" ? null : +data.sawSolution,
        needReview: data.newReview === "" ? null : +data.needReview,
        noEditorial: data.noEditorial === "" ? null : +data.noEditorial,
        goodProblem: data.goodProblem === "" ? null : +data.goodProblem,
        comment: data.comment === "" ? null : data.comment,
        resource: data.resource === "" ? null : data.resource,
      });
    } else {
      url = `${process.env.REACT_APP_API_URL}/music/performance`;
      body = JSON.stringify(data);
    }

    try {
      const token = getAuthToken();
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });
      const json = await response.json();

      console.log(json);

      dispatch(closeFormDialog());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog
      open={isFormDialogOpen}
      onClose={() => dispatch(closeFormDialog())}
      PaperProps={{ component: "form", onSubmit: formSubmitHandler }}
    >
      <DialogTitle>Dialog title</DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog content text</DialogContentText>
        {/* <PerformanceForm /> */}
        {form}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeFormDialog())}>Cancel</Button>
        <Button type="submit" variant="contained" disabled={!isAuth}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
