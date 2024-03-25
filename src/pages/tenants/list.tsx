import { Grid } from "@mui/material";
import React from "react";
import TenantCard from "./components/card";

const mockTenants = [
  {
    id: 1,
    name: "John Doe",
    contact_number: "123-456-7890",
    rent_amount: "$1000",
    current_payment: "$500",
  },
  {
    id: 2,
    name: "Jane Smith",
    contact_number: "987-654-3210",
    rent_amount: "$1200",
    current_payment: "$600",
  },
  {
    id: 3,
    name: "Alice Johnson",
    contact_number: "123-456-7890",
    rent_amount: "$800",
    current_payment: "$400",
  },
  {
    id: 4,
    name: "Bob Brown",
    contact_number: "987-654-3210",
    rent_amount: "$1100",
    current_payment: "$550",
  },
  {
    id: 5,
    name: "Charlie White",
    contact_number: "123-456-7890",
    rent_amount: "$900",
    current_payment: "$450",
  },
  {
    id: 6,
    name: "David Black",
    contact_number: "987-654-3210",
    rent_amount: "$1300",
    current_payment: "$650",
  },
];

const TenantList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {mockTenants.map((tenant) => (
        <Grid item xs={12} sm={12} md={4} key={tenant.id}>
          <TenantCard tenantData={tenant} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TenantList;
