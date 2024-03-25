import { Card, Typography } from "@mui/material";
import { Tenants_Insert_Input } from "../../interfaces";
import TenantForm from "./components/input-form";

export default function TenantEdit() {

  //get the data from the server
  const formData: Tenants_Insert_Input & { house_id: any } = {
    name: "",
    contact_number: "",
    house_id: "",
    room_id: "",
    entered_date: new Date().toISOString().split("T")[0],
  };

  const handleSubmit = async (
    data: Tenants_Insert_Input & { house_id: any }
  ) => {
    console.log(data);
  };

  return (
    <Card style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Edit {formData.name}
      </Typography>
      <TenantForm initialData={formData} onSubmit={handleSubmit} />
    </Card>
  );
}
