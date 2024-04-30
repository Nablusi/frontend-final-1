import React, { useState , useEffect } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";
import PersonalInformation from "./Personal-info/PersonalInformation";
import { MyOrders } from "./MyOrders/MyOrders";
import { selectedTab } from "./MyOrders/MyOrdersStyles";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
  const handleActive = (data) => {
    setActive(data);
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChanges = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const [filteredOrders, setFilteredOrders] = useState([]);

    /*useEffect(() => {
    let filtered = [];
    if (selectedTab === 0) {
      filtered = orders.filter(order => order.status === 'completed');
    } else if (selectedTab === 1) {
      filtered = orders.filter(order => order.status === 'processing');
    } else if (selectedTab === 2) {
      filtered = orders.filter(order => order.status === 'cancelled');
    }
    setFilteredOrders(filtered);
  }, [selectedTab]);*/
  return (
    <Container>
      <TitleUserInformation title={"Personal Information"} />
      <Box display={"flex"}  marginBlock={"24px"}>
        <UserInfoSideBar active={active} handleActive={handleActive} />
        <Box width={"100%"} flexGrow={1} display={"flex"} justifyContent={"center"}>
        <MyOrders handleChange={handleChanges} selectedTab={selectedTab} />
        </Box>
      </Box>
    </Container>
  );
}
