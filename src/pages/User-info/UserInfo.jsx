import React, { useState } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../services/Hooks/useAxios";
import { Outlet } from "react-router-dom";

export default function UserInfo() {
  const id = localStorage.getItem("id") || sessionStorage.getItem("id");
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const [active, setActive] = useState("personalInformation");
  const { res: userData } = useAxios(
    `https://backend-final-1-latest.onrender.com/api/users/${id}`,
    token
  );
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    if (data.newPassword === data.confirmPassword) {
      console.log(data);
    }
  };
  // console.log(watch("firstName"));


  const [selectedOrderTab, setSelectedOrderTab] = useState(0);
  const handleActive = (data) => {
    setActive(data);
  };

  const handleChange = (event, newValue) => {
    setSelectedOrderTab(newValue);
  };

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
            context={[
              active,
              register,
              handleSubmit,
              errors,
              onSubmit,
              toast,
              getValues,
              userData,
              selectedOrderTab,
              handleChange,
            ]}
          />

        </Box>
      </Box>
    </Container>
  );
}
