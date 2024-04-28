import React, { useState } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";
import PersonalInformation from "./Personal-info/PersonalInformation";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
  const handleActive = (data) => {
    setActive(data);
  };
  return (
    <Container>
      <TitleUserInformation title={"Personal Information"} />
      <Box display={"flex"} marginBlock={"24px"}>
        <UserInfoSideBar active={active} handleActive={handleActive} />
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <PersonalInformation />
        </Box>
      </Box>
    </Container>
  );
}
