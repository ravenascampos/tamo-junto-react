import React from "react";
import { apiTamoJunto } from "../../../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiChevronRight } from "react-icons/fi";
import { Form, Input, Label, Error, Button, Text } from "../../register.style";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("O campo é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("O campo é obrigatório"),
    phone: yup
      .string()
      .min(11, "No mínimo 11 digitos")
      .required("O campo é obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("O campo é obrigatório"),
    passwordConfirmation: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("O campo é obrigatório")
      .oneOf([yup.ref("password"), null], "A senha deve ser a mesma"),
  })
  .required();

export function FormStep1({ activeStep, steps, handleNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    handleNext();
    apiTamoJunto.post("/users", data, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*",
      },
    });
  };

  return (
    <>
      <Form>
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" type="text" {...register("name")} />
        <Error>{errors.name?.message}</Error>
        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" type="text" {...register("phone")} />
        <Error>{errors.phone?.message}</Error>

        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        <Error>{errors.email?.message}</Error>
        <Label htmlFor="password">Defina sua senha</Label>
        <Input type="password" id="password" {...register("password")} />
        <Error>{errors.password?.message}</Error>
        <Label htmlFor="passwordConfirmation">Confirme sua senha</Label>
        <Input
          type="password"
          id="passwordConfirmation"
          {...register("passwordConfirmation")}
        />
        <Error>{errors.passwordConfirmation?.message}</Error>
        <Text>Todos os campos são obrigatórios</Text>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          <span>
            {activeStep === steps.length ? "Finish" : "CONTINUAR"}
            <FiChevronRight />
          </span>
        </Button>
      </Form>
    </>
  );
}
