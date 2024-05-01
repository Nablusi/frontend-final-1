import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../../theme/Theme";
import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useOutletContext } from "react-router-dom";

export default function PersonalInformation() {
  const [register, handleSubmit, errors, onSubmit, toast, getValues, userData] =
    useOutletContext();

  return (
    <Box width={"95% "}>
      <Box height={"60px"}>
        <Typography
          borderBottom={"1px solid #e0e0e0"}
          fontSize={"1.25rem"}
          color={theme.palette.primary.sectionTitle}
          lineHeight={"2.20"}
        >
          Personal Information
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width={"384px"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
      >
        <Avatar
          alt="Remy Sharp"
          src={require("../../../assets/image/frieren.webp")}
          sx={{
            width: "80px",
            height: "80px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "38px",

            width: "136px",
            bgcolor: theme.palette.primary.carouselColor,
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "8px",
          }}
        >
          Upload
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            height: "44px",
            width: "136px",
            border: `2px solid ${theme.palette.primary.error}`,
            color: theme.palette.primary.error,
            borderRadius: "8px",
          }}
        >
          Delete
        </Button>
      </Box>
      <Box marginBlock={"24px"}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid" }}>
          <Box display={"flex"} gap={"12px"} marginBlock={"8px"}>
            <Box display={"flex"} flexDirection={"column"} width={"35%"}>
              <label>First Name</label>
              <Box
                bgcolor={"#f1f1f1"}
                height={"52px"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"4px"}
              >
                <input
                  defaultValue={userData?.firstName}
                  type="text"
                  {...register("firstName", { required: true })}
                  style={{
                    backgroundColor: "#f1f1f1",
                    border: 0,
                    height: "20px",
                    width: "90%",
                    padding: "16px 12px 16px 16px",
                  }}
                />
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"35%"}>
              <label>Last Name</label>
              <Box
                bgcolor={"#f1f1f1"}
                height={"52px"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"4px"}
              >
                <input
                  defaultValue={userData?.lastName}
                  type="text"
                  {...register("lastName", { required: true })}
                  style={{
                    backgroundColor: "#f1f1f1",
                    border: 0,
                    height: "20px",
                    width: "90%",
                    padding: "16px 12px 16px 16px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <label style={{ marginBlock: "8px 4px" }}>Email</label>
          <Box
            bgcolor={"#f1f1f1"}
            height={"52px"}
            width={"65%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
          >
            <input
              defaultValue={userData?.email}
              type="email"
              {...register("email", { required: true })}
              style={{
                backgroundColor: "#f1f1f1",
                border: 0,
                height: "20px",
                width: "95%",
                padding: "16px 12px 16px 16px",
              }}
            />
          </Box>
          <label style={{ marginBlock: "8px 4px" }}>Mobile Number</label>
          <Box
            bgcolor={"#f1f1f1"}
            height={"52px"}
            width={"35%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
          >
            <input
              defaultValue={userData?.phone}
              type="tel"
              {...register("mobileNumber", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              style={{
                backgroundColor: "#f1f1f1",
                border: 0,
                height: "20px",
                width: "95%",
                padding: "16px 12px 16px 16px",
              }}
            />
          </Box>

          <label style={{ marginBlock: "27px 4px" }}>>Date Of Birth</label>
          <Box
            bgcolor={"#f1f1f1"}
            height={"52px"}
            width={"035%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
          >
            <input
              type="date"
              {...register("date", { required: true })}
              style={{
                backgroundColor: "#f1f1f1",
                border: 0,
                height: "20px",
                width: "95%",
                padding: "16px 12px 16px 16px",
              }}
            />
          </Box>

          <Box height={"60px"} marginBlock={"40px 24px"}>
            <Typography
              borderBottom={"1px solid #e0e0e0"}
              fontSize={"1.25rem"}
              color={theme.palette.primary.sectionTitle}
              lineHeight={"2.20"}
            >
              Change Password
            </Typography>
          </Box>
          <label style={{ marginBlock: "16px 4px" }}>Current Password</label>
          <Box
            bgcolor={"#f1f1f1"}
            height={"52px"}
            width={"035%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
          >
            <input
              type="password"
              {...register("currentPassword", {
                required: true,
                pattern: /^.{8,}$/,
              })}
              style={{
                backgroundColor: "#f1f1f1",
                border: 0,
                height: "20px",
                width: "95%",
                padding: "16px 12px 16px 16px",
              }}
            />
          </Box>
          <label style={{ marginBlock: "16px 4px" }}>New Password</label>
          <Box
            bgcolor={"#f1f1f1"}
            height={"52px"}
            width={"035%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
          >
            <input
              type="password"
              {...register("newPassword", {
                required: true,
                pattern: /^.{8,}$/,
              })}
              style={{
                backgroundColor: "#f1f1f1",
                border: 0,
                height: "20px",
                width: "95%",
                padding: "16px 12px 16px 16px",
              }}
            />
          </Box>
          <label style={{ marginBlock: "16px 4px" }}>Confirm Password</label>
          <Box
            bgcolor={"#f1f1f1"}
            height={"52px"}
            width={"035%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
          >
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                pattern: /^.{8,}$/,
              })}
              style={{
                backgroundColor: "#f1f1f1",
                border: 0,
                height: "20px",
                width: "95%",
                padding: "16px 12px 16px 16px",
              }}
            />
          </Box>
          <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
            <input
              value={"Save Changes"}
              type="submit"
              style={{
                backgroundColor: theme.palette.primary.carouselColor,
                color: "white",
                border: 0,
                height: "36px",
                width: "136px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                if (errors.firstName) {
                  toast.error("First Name is required");
                }
                if (errors.lastName) {
                  toast.error("Last Name is required");
                }
                if (errors.email) {
                  toast.error("Email is required");
                }
                if (errors.mobileNumber) {
                  toast.error(
                    "Mobile Number is required and should only contain 10 numbers"
                  );
                }
                if (errors.date) {
                  toast.error("Date of Birth is required");
                }
                if (errors.currentPassword) {
                  toast.error(
                    "Current Password is required and must be at least 8 characters long"
                  );
                }
                if (errors.newPassword) {
                  toast.error(
                    "New Password is required and must be at least 8 characters long"
                  );
                }
                if (errors.confirmPassword) {
                  toast.error(
                    "Confirm Password is required and must be at least 8 characters long"
                  );
                }

                const formData = getValues(); // Access form data

                if (formData.newPassword !== formData.confirmPassword) {
                  toast.error("New Password and Confirm Password do not match");
                }
              }}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
