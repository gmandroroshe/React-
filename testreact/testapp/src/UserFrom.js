import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const UserForm = (props) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#00000" }}>
          User Form
        </Typography>
      </Grid>
      <Grid>
        <Typography
          component={"lable"}
          htmlfor="id"
          sx={{
            color: "#00000",
            mariginRight: "20px",
            fontSize: "15px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <input type="number" id="id" name="id" />
      </Grid>
    </Grid>
  );
};
export default UserForm;
