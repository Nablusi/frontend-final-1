import React, { useState } from "react";
import UserInfoSideBar from "../../components/User-Info-SideBar/UserInfoSideBar";
import { Box, Container } from "@mui/system";
import TitleUserInformation from "./Title-User-information/TitleUserInformation";
import PersonalInformation from "./Personal-info/PersonalInformation";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function UserInfo() {
  const [active, setActive] = useState("personalInformation");
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
  return (
    <Container>
      <Toaster reverseOrder={false} />

      <TitleUserInformation title={"Personal Information"} />
      <Box display={"flex"} marginBlock={"24px"}>
        <UserInfoSideBar active={active} handleActive={handleActive} />
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <PersonalInformation
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            toast={toast}
            getValues={getValues}
          />
        </Box>
      </Box>
    </Container>
  );
}
