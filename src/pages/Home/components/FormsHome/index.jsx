import React from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Input, Label, Textarea, Button, Error } from "./formsHome.style";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "O campo deve ter, no mínimo, 3 caracteres")
    .required("O campo é obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O campo é obrigatório"),
  message: yup
    .string()
    .min(5, "O campo deve ter, no mínimo, 5 caracteres")
    .required("O campo é obrigatório"),
});

export function FormsHome() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
    setValue("message", "");
  };
  return (
    <>
      <Form>
        <Label htmlFor="name">Nome</Label>
        <Input
          placeholder="Informe seu nome completo"
          id="name"
          type="text"
          {...register("name")}
        />
        <Error>{errors.name?.message}</Error>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="email@email.com.br"
          id="email"
          type="email"
          {...register("email")}
        />
        <Error>{errors.email?.message}</Error>
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <span>Opcional</span>
        </div>
        <Input
          id="phone"
          mask="(99) 9999-9999"
          type="text"
          {...register("phone")}
          placeholder="(00) 0000-0000"
        />
        <Error>{errors.phone?.message}</Error>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          placeholder="Insira sua mensagem aqui"
          id="message"
          type="text"
          {...register("message")}
        />
        <Error>{errors.message?.message}</Error>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          ENVIAR
        </Button>
      </Form>
    </>
  );
}
