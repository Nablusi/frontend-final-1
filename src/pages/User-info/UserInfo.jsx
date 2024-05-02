import React, { useState, useEffect } from "react";

import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../services/Hooks/useAxios";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../services/utils/getToken";
import { getUserId } from "../../services/utils/getUserId";

export default function UserInfo() {
  const [selectedOrderTab, setSelectedOrderTab] = useState(0);
  const [active, setActive] = useState("personalInformation");
  const [selectedTab, setSelectedTab] = useState("0");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [tempFilteredOrders, setTempFilteredOrders] = useState([]);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const id = localStorage.getItem("id") || sessionStorage.getItem("id");
  const { res: userData } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/users/${id}`,
    token
  );

  //////////////////////////////////////////
  const onSubmit = (data) => {
    if (data.newPassword === data.confirmPassword) {
      console.log(data);
    }
  };

  const handleActive = (data) => {
    setActive(data);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          ` https://backend-final-1-latest.onrender.com/api/orders/user/${getUserId()}`,
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );

        setFilteredOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    // console.log("useEffect triggered with selectedTab:", selectedTab);
    let filtered = [];
    if (filteredOrders && filteredOrders.length > 0) {
      if (selectedTab === "0") {
        filtered = [];
        filteredOrders.forEach((order) => {
          if (order.status === "done") {
            filtered.push(order);
          }
        });
      } else if (selectedTab === "1") {
        filtered = [];

        filteredOrders.forEach((order) => {
          if (order.status === "pending") {
            filtered.push(order);
          }
        });
      } else if (selectedTab === "2") {
        filtered = [];

        filteredOrders.forEach((order) => {
          if (order.status === "closed") {
            filtered.push(order);
          }
        });
      }
    }
    setTempFilteredOrders(filtered);
  }, [selectedTab, filteredOrders]);
  return (
    <Container>
      <Toaster reverseOrder={false} />

      <TitleUserInformation
        active={active}
        flag={"personalInformation"}
        title={"Personal Information"}
      />
      <TitleUserInformation
        active={active}
        flag={"myOrders"}
        title={"My Orders"}
      />

      <Box display={"flex"} marginBlock={"24px"}>
        <UserInfoSideBar active={active} handleActive={handleActive} />
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Outlet
            context={{
              register,
              handleSubmit,
              errors,
              onSubmit,
              toast,
              getValues,
              userData,
              selectedOrderTab,
              handleChange,
              setValue,
              selectedTab,
              tempFilteredOrders,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
