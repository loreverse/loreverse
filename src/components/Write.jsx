import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "antd";

const styles = {
  label: {
    fontSize: "20px",
    fontWeight: "500",
  }
}

function Write() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: '',
      body: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data.title,data.body);
    reset({
      title: '',
      body: ''
    })
  };

  return (
    <div style={{ width: "50vw" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "20px"}}>
          <label style={styles.label}>Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} placeholder="Title" />}
            style={{ padding: "10px" }}
          />
          {errors.title && <span style={{ color: "red" }}>Title is required</span>}
        </div>
        <div style={{ marginBottom: "20px"}}>
          <label style={styles.label}>Body</label>
          <Controller
            name="text"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input.TextArea rows={10} {...field} placeholder="Body"  />}
          />
          {errors.body && <span style={{ color: "red" }}>Body is required</span>}
        </div>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          shape="round"
          loading=""
          style={{ marginTop: "10px", fontWeight: 500 }}
        >
          Mint
        </Button>
      </form>
    </div>
  );
};

export default Write;
