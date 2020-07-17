import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles, onSelect, category }) => {
  // plua one to account for the "all" category 
  const index = category ? muscles.findIndex(group => group === category) + 1 : 0 

  const onIndexSelect = (e, index) => {
     onSelect(index === 0 ? "" : muscles[index - 1]);
  }
  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map((mGroup) => (
          <Tab key={mGroup} label={mGroup} />
        ))}
      </Tabs>
    </Paper>
  );
};
