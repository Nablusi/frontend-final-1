import React, { useState } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";
import PersonalInformation from "./Personal-info/PersonalInformation";
import OrderDetails from "./OrderDetails/OrderDetails";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
  const [selectedTab, setSelectedTab] = useState(0);
  const handleActive = (data) => {
    setActive(data);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Container>
      {/* <TitleUserInformation title={"Personal Information"} /> */}
      <TitleUserInformation title={"My Orders"} />
      <Box display={"flex"} marginBlock={"24px"}>
        <UserInfoSideBar active={active} handleActive={handleActive} />
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          {/* <PersonalInformation /> */}
          <OrderDetails selectedTab={selectedTab}
          handleChange={handleChange}/>
        </Box>
      </Box>
    </Container>
  );
}
