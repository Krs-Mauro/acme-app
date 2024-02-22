"use client";
import { Heading, Button, Box } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PageLayout from "@/components/PageLayout";
import InputField from "@/components/InputField";
import schema from "@/lib/zodSchema";
import useStore from "@/lib/store";

type formData = z.infer<typeof schema>;

const FormPage = () => {
  const { addItem } = useStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: formData) => addItem(data);

  return (
    <PageLayout source="form">
      <Box>
        <Heading p={10}>Create your request here:</Heading>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center" }}>
          <InputField
            name="name"
            placeholder="Name"
            register={register}
            errors={errors}
          />
          <InputField
            name="description"
            placeholder="Description"
            register={register}
            errors={errors}
          />
          <InputField
            name="owner"
            placeholder="Owner"
            register={register}
            errors={errors}
          />
          <InputField
            name="email"
            placeholder="Email"
            register={register}
            errors={errors}
          />
          <Button m={2} type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </PageLayout>
  );
};

export default FormPage;
