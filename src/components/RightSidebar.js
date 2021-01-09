import React, { useState } from "react";
import Tabs from "../reusableComponents/Tabs";
import Utilization from "../reusableComponents/Utilization";
import UtilizationText from "../reusableComponents/UtilizationText";

const RightSidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className={`right-sidebar ${expanded ? "expanded" : ""}`}>
      <div className="expand-button" onClick={() => setExpanded(!expanded)} />
      <div className="content">
        <Tabs
          active={active}
          setActive={setActive}
          titles={["Utilization Bars", "Utilization Text"]}
        >
          <Utilization available={48} regularRides={17} carpool={23} />
          <UtilizationText available={48} regularRides={17} carpool={23} />
        </Tabs>
      </div>
    </div>
  );
};

export default RightSidebar;