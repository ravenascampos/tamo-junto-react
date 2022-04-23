import React from "react";
import { apiTamoJunto } from "../../../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  Label,
  Input,
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

export function FormStep3({ handleNext, activeStep, steps }) {
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("number");
      });
  };

  const {
    setFocus,
    setValue,
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
        <Label>CEP</Label>
        <InputCep
          placeholder="0000-00"
          type="text"
          {...register("cep")}
          onBlur={checkCEP}
        />
        <Error>{errors.cep?.message}</Error>

        <Label>Endereço</Label>
        <Input
          placeholder="Insira seu endereço"
          type="text"
          {...register("address")}
        />
        <Error>{errors.address?.message}</Error>
        <Grid>
          <Wrapper>
            <Label>Número</Label>
            <Input placeholder="XXXX" type="text" {...register("number")} />
            <Error>{errors.number?.message}</Error>
          </Wrapper>
          <Wrapper>
            <Label>
              Complemento <span>Opcional</span>
            </Label>
            <Input placeholder="Ap XX" />
          </Wrapper>
        </Grid>
        <Grid>
          <Wrapper>
            <Label>Estado</Label>
            <Input
              placeholder="Estado"
              type="text"
              {...register("uf")}
              disabled
            />
          </Wrapper>
          <Wrapper>
            <Label>Municipio</Label>
            <Input
              placeholder="Município"
              type="text"
              {...register("city")}
              disabled
            />
          </Wrapper>
        </Grid>

        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          {activeStep === steps.length ? "FINALIZAR CADASTRO" : "CONTINUAR"}
        </Button>
      </Form>
    </>
  );
}
