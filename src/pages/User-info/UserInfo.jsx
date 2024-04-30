import React, { useState } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";
import PersonalInformation from "./Personal-info/PersonalInformation";
import OrderDetails from "./OrderDetails/OrderDetails";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
  const [selectedTab, setSelectedTab] = useState(0);
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

  const handleActive = (data) => {
    setActive(data);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
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
          <PersonalInformation
            active={active}
            flag={"personalInformation"}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            toast={toast}
            getValues={getValues}
          />
          <OrderDetails
            selectedTab={selectedTab}
            handleChange={handleChange}
            active={active}
            flag={"myOrders"}
          />
        </Box>
      </Box>
    </Container>
  );
}
