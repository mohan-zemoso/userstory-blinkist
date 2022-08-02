import { Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail";
import ProgressBar from "../../atoms/ProgressBar";
import Iconlabel from "../../molecules/IconLabel";
interface Props {
  author?: string;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const BookCard = ({ author, name, onClick }: Props) => {
  return (
    <div onClick={onClick}>
      <Grid container>
        <Grid item>
          <BookDetailThumbnail />
        </Grid>
        <Grid item>
          <Typography>{author}</Typography>
          <Typography>{name}</Typography>
          <Iconlabel />
          <Stack alignItems="flex-end">
            <Icon />
          </Stack>
          <ProgressBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookCard;
