import {
  Avatar,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material";
import React from "react";

import { InfoOutlined, SendRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { getCurrentStatusColor } from "../../../utils/get-payment-colors";
import getColorFromText from "../../../utils/getColorFromText";

const StatRoot = styled("div", {
  name: "MuiStat", // The component name
  slot: "root", // The slot name
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  letterSpacing: "-0.025em",
  fontWeight: 600,
}));

const StatValue = styled("div", {
  name: "MuiStat",
  slot: "value",
})(({ theme }) => ({
  ...theme.typography.h5,
}));

const StatUnit = styled("div", {
  name: "MuiStat",
  slot: "unit",
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const TenantCard: React.FC<{ tenantData: any }> = ({ tenantData }) => {

  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2} sx={{ marginRight: 1 }}>
            <Avatar
              sx={{
                bgcolor: getColorFromText(tenantData.name),
                width: 45,
                height: 45,
              }}
              variant={"rounded"}
            >
              {tenantData.name.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" gutterBottom>
              {tenantData.name}
            </Typography>
            <Typography variant="body2">{tenantData.contact_number}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <InfoOutlined />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 1 }}
        >
          <Grid item xs={6}>
            <StatRoot>
              <StatUnit>Rent Amount:</StatUnit>
              <StatValue>{tenantData.rent_amount}</StatValue>
            </StatRoot>
          </Grid>
          <Grid item xs={6}>
            <StatRoot>
              <StatUnit>Current Payment:</StatUnit>
              <StatValue sx={{color: getCurrentStatusColor(tenantData.current_payment,tenantData.rent_amount)}}>{tenantData.current_payment}</StatValue>
            </StatRoot>
          </Grid>
        </Grid>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Add new payment</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SendRounded />
                </IconButton>
              </InputAdornment>
            }
            label="Add new payment"
          />
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default TenantCard;
