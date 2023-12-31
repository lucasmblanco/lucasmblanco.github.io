import * as React from "react";

function NavMobileIcon(props) {
  return (
    <svg viewBox="0 0 100 125" width="1em" height="1em" {...props} className="nav-mobile-icon">
      <path  stroke="currentColor"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M45 25h10v10H45zM15 55h10v10H15zM25 45h10v10H25zM35 35h10v10H35zM55 35h10v10H55zM65 45h10v10H65zM75 55h10v10H75zM85 65v10H15V65H5v20h90V65z" />
    </svg>
  );
}

const MemoNavMobileIcon = React.memo(NavMobileIcon);
export default MemoNavMobileIcon;
