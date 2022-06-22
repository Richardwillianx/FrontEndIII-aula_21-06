import { Grid, Typography } from "@mui/material";
import CustomPaper from "../../components/CustomPaper";

export default function Home() {
  return (
    <Grid container>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Typography variant="h1" color="primary">
            Título 01
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <CustomPaper title="text 01" />
        </Grid>
        <Grid item xs={4}>
          <CustomPaper title="text 02" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" color="secondary">
            Título 04
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
