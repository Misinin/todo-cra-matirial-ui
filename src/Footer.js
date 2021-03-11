import PT from "prop-types";

import { Tab, Tabs } from "@material-ui/core";

const Footer = (props) => {
  const { className, filter, setFilter } = props;

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <footer className={`${className}`}>
      <Tabs
        value={filter}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleChange}
      >
        <Tab label="All" />
        <Tab label="Done" />
        <Tab label="Active" />
      </Tabs>
    </footer>
  );
};

Footer.PT = {
  className: PT.string,
  filter: PT.number.isRequired,
  setFilter: PT.func.isRequired,
};

export default Footer;
