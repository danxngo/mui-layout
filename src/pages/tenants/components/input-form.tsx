import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import { Tenants_Insert_Input } from "../../../interfaces";

interface FormProps {
  initialData: Tenants_Insert_Input & { house_id: any };
  onSubmit: (data: Tenants_Insert_Input & { house_id: any }) => void;
}

const TenantForm: React.FC<FormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);
  const [houseSelected, setHouseSelected] = useState(false);

  const handleChange = (event: any) => {
    const name = event.target.name as keyof typeof formData;
    if (name === "house_id") {
      // Reset room_id when house changes
      setFormData({
        ...formData,
        room_id: "",
        [name]: event.target.value as string,
      });
      setHouseSelected(!!event.target.value);
    } else {
      setFormData({
        ...formData,
        [name]: event.target.value as string,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contact Number"
        variant="outlined"
        name="contact_number"
        value={formData.contact_number}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Entered Date"
        variant="outlined"
        type="date"
        name="entered_date"
        value={formData.entered_date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="house-select-label">House</InputLabel>
        <Select
          labelId="house-select-label"
          label="House"
          name="house_id"
          value={formData.house_id}
          onChange={handleChange}
        >
          <MenuItem value="house_id_1">House 1</MenuItem>
          <MenuItem value="house_id_2">House 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        variant="outlined"
        margin="normal"
        disabled={!houseSelected}
      >
        <InputLabel id="room-select-label">Room</InputLabel>
        <Select
          labelId="room-select-label"
          label="Room"
          name="room_id"
          value={formData.room_id}
          onChange={handleChange}
        >
          {/* You should map over available rooms here to generate MenuItem */}
          <MenuItem value="room_id_1">Room 1</MenuItem>
          <MenuItem value="room_id_2">Room 2</MenuItem>
          {/* Add more MenuItems as per available rooms */}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size={"large"}
      >
        Submit
      </Button>
    </form>
  );
};

export default TenantForm;
