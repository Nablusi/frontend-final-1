import React, { useState , useEffect } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";
import PersonalInformation from "./Personal-info/PersonalInformation";
import { MyOrders } from "./MyOrders/MyOrders";
import { selectedTab } from "./MyOrders/MyOrdersStyles";
import axios from "axios";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
  const handleActive = (data) => {
    setActive(data);
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChanges = (event, newValue) => {
    setSelectedTab(newValue);
    console.log('selected tab is',selectedTab , 'newvalue is ',newValue);
  };
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://backend-final-1-latest.onrender.com/api/orders/user/20",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJpYXQiOjE3MTQ1NzkzOTV9.3bERkDj1cZjYFWzH_h57tF9Lno5dYCq3a8IGrjuoFIo",
            },
          }
        );
        console.log(response.data);
        setFilteredOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  

  // useEffect(() => {
  //   const storedUserId = localStorage.getItem('userId');
  //   if (storedUserId) {
  //     setUserId(storedUserId);
  //   }
  // }, []);

  
  useEffect(() => {
    console.log('useEffect triggered with selectedTab:', selectedTab);
    let filtered = [];
    if (filteredOrders && filteredOrders.length > 0) {
      if (selectedTab === 0) {
        filtered = filteredOrders.filter((order) => order.status === "approved");
      }  else if (selectedTab === 2) {
        filtered = filteredOrders.filter((order) => order.status === "done");
      }
    }
    setFilteredOrders(filtered);
    
  }, [selectedTab]);
  console.log('filteredorders is', filteredOrders);
  
  return (
    <Container>
      <TitleUserInformation title={"Personal Information"} />
      <Box display={"flex"}  marginBlock={"24px"}>
        <UserInfoSideBar active={active} handleActive={handleActive} />
        <Box width={"100%"} flexGrow={1} display={"flex"} justifyContent={"center"}>
        <MyOrders handleChange={handleChanges} selectedTab={selectedTab} filteredOrders={filteredOrders} />
        </Box>
      </Box>
    </Container>
  );
}
