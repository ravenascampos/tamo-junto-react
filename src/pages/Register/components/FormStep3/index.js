import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  Label,
  Input,
  Select,
  Option,
  Button,
  Error,
  Wrapper,
  Grid,
  InputCep,
} from "../../register.style";

const schema = yup
  .object({
    cep: yup
      .string()
      .min(8, "No mínimo 8 caracteres")
      .required("O campo é obrigatório"),
    address: yup
      .string()
      .min(5, "No mínimo 5 caracteres")
      .required("O campo é obrigatório"),
    number: yup.string().required("O campo é obrigatório"),
  })
  .required();

export default function FormStep3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>CEP</Label>
      <InputCep {...register("cep")} />
      <Error>{errors.cep?.message}</Error>

      <Label>Endereço</Label>
      <Input {...register("address")} />
      <Error>{errors.address?.message}</Error>
      <Grid>
        <Wrapper>
          <Label>Número</Label>
          <Input {...register("number")} />
          <Error>{errors.number?.message}</Error>
        </Wrapper>
        <Wrapper>
          <Label>
            Complemento <span>Opcional</span>
          </Label>
          <Input />
        </Wrapper>
      </Grid>
      <Grid>
        <Wrapper>
          <Label>Estado</Label>
          <Select {...register("state", { required: true })}>
            <Option>Estado1</Option>
            <Option>Estado2</Option>
            <Option>Estado3</Option>
          </Select>
          <Error>
            {errors.state?.type === "required" && "Selecione uma opção"}
          </Error>
        </Wrapper>
        <Wrapper>
          <Label>Municipio</Label>
          <Select>
            <Option>Município</Option>
          </Select>
        </Wrapper>
      </Grid>

      <Button>FINALIZAR CADASTRO</Button>
    </Form>
  );
}
