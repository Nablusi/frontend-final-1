import { useState } from "react";
import SignUp from "./SignUP/SignUp";
import { Snackbar } from "@mui/material";
import theme from "../../theme/Theme";
import SignIn from "./SignIn/SignIn";
import { useParams } from "react-router-dom";

export default function Sign() {
  const { signtype } = useParams();
  const [postRes, setPostRes] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    vertical: "top",
    horizontal: "center",
  });
  const { open, message, vertical, horizontal } = toast;
  const handleFirstName = (event) => {
    let value = event.target.value;
    const regex = /^[a-zA-Z\s]+$/;
    if (value !== "" && regex.test(value)) {
      setFirstName(value);
    } else {
      if (value === "") {
        setFirstName("");
      } else {
        console.log("First name should contain only letters and spaces");
      }
    }
  };
  const handleLastName = (event) => {
    let value = event.target.value;
    const regex = /^[a-zA-Z\s]+$/;
    if (value !== "" && regex.test(value)) {
      setLastName(value);
    } else {
      if (value === "") {
        setLastName("");
      } else {
        console.log("Last name should contain only letters and spaces");
      }
    }
  };
  const handleEmail = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const checkEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handlePhoneNumber = (event) => {
    let value = event.target.value;
    setPhoneNumber(value);
  };
  const checkPhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;

    if (regex.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  };

  const handlePassword = (event) => {
    let value = event.target.value;
    setPassword(value);
  };

  const checkPassword = (password) => {
    const regex = /^[\w!@#$%^&*()\-_=+{};:,<.>]{8,}$/;
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  const handleLocation = (event) => {
    let value = event.target.value;
    setLocation(value);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={open}
        message={message}
        key={vertical + horizontal}
        sx={{
          "& .MuiSnackbarContent-root": {
            bgcolor: `${theme.palette.primary.carouselColor} `,
          },
        }}
      />
      {signtype === "signup" ? (
        <SignUp
          postRes={postRes}
          setPostRes={setPostRes}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          password={password}
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleEmail={handleEmail}
          checkEmail={checkEmail}
          handlePhoneNumber={handlePhoneNumber}
          checkPhoneNumber={checkPhoneNumber}
          handlePassword={handlePassword}
          checkPassword={checkPassword}
          location={location}
          handleLocation={handleLocation}
          setToast={setToast}
        />
      ) : (
        <SignIn
          postRes={postRes}
          setPostRes={setPostRes}
          email={email}
          handleEmail={handleEmail}
          checkEmail={checkEmail}
          password={password}
          handlePassword={handlePassword}
          checkPassword={checkPassword}
          setToast={setToast}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
      )}
    </>
  );
}
