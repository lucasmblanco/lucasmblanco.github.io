import * as React from "react";

function QuestionMark(props) {
  return (
    <svg viewBox="0 0 100 100" width="1em" height="1em" {...props}>
      <path
        stroke="currentColor"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2} d="M70.825 26.713v-4.9h-4.9v-4.9h-4.9v-2.45H38.962v2.45h-4.9v4.9h-4.9v4.9h-4.9v19.612H31.613v4.9h9.8v-4.9h-4.9V29.163h2.45v-2.45h19.613v2.45h2.45v17.162h-2.45v4.9h-4.9v4.9H46.325v12.25h9.8v-9.8H63.475v-4.9h4.9v-4.9h4.9v-4.9h2.462V26.713h-2.462zM56.125 73.287h-9.8v2.45h-2.463V83.087h2.463v2.45h9.8v-2.45h2.45V75.738h-2.45z" />
    </svg>
  );
}

const MemoQuestionMark = React.memo(QuestionMark);
export default MemoQuestionMark;
