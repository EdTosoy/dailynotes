import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const CardItem = ({ title, category, details }) => {
  return (
    <Card variant="elevation" elevation={2}>
      <CardHeader
        action={
          <>
            <IconButton aria-label="delete">
              <FavoriteBorderIcon color="secondary" />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteOutlineIcon />
            </IconButton>
          </>
        }
        title={title}
        subheader={category}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" component="p">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};
