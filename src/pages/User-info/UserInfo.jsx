import React, { useState } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import PersonalInformation from "./Personal-information/PersonalInformation";
import { Container } from "@mui/system";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
  const handleActive = (data) => {
    setActive(data);
  };
  return (
    <Container>
      <PersonalInformation />

      <UserInfoSideBar active={active} handleActive={handleActive} />
    </Container>
  );
}
