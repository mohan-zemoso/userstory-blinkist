import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header";
import BookDetails from "../../organisms/BookDetails";
import { Grid } from "@mui/material";
import Kindle from "../../organisms/Kindle";
const BookDetailPage = () => {
  const [data, setData] = useState();
  const [value, setValue] = useState(0);

  const handleChange = (
    e: React.MouseEventHandler<SVGSVGElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  useEffect(() => {}, []);
  return (
    <div>
      {value === 0 && (
        <Grid>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <BookDetails data={data} />
          </Grid>
        </Grid>
      )}
      {value === 1 && (
        <Grid>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <BookDetails data={data} />
            <Kindle />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default BookDetailPage;
