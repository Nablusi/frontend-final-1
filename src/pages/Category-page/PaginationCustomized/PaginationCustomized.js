import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import theme from "../../../theme/Theme";
export function PaginationCustomized({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      //   onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      //   onPageChange(currentPage + 1);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      {<Button
        variant="contained"
        disabled={currentPage === totalPages}
        onClick={handlePrevClick}
        sx={{
          bgcolor: "#f1f1f1",
          color: "#626262",
          borderRadius: "10px !important",
          boxShadow: "0",
        }}
      >
        Prev
      </Button> ? (
        currentPage > 1
      ) : null}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        hideNextButton={true}
        hidePrevButton={true}
        shape="rounded"
        sx={{
          bgcolor: "#f1f1f1",
          borderRadius: "10px !important",
          display: "flex",
          "& .Mui-selected": {
            bgcolor: `${theme.palette.primary.carouselColor} !important `, // Change to your desired color
            color: theme.palette.primary.textWhiteColor,
            height: "25px",
            width: "40px",
            borderRadius: "7px",
          },
        }}
      />
      <Button
        variant="contained"
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
        sx={{
          bgcolor: "#f1f1f1",
          color: "#626262",
          borderRadius: "10px !important",
          boxShadow: "0",
          "&:hover": {
            bgcolor: theme.palette.primary.carouselColor,
            color: theme.palette.primary.textWhiteColor,
          },
        }}
      >
        Next
      </Button>
    </Stack>
  );
}
