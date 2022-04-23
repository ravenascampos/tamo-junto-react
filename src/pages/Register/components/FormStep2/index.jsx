import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { useForm } from "react-hook-form";
import { apiTamoJunto } from "../../../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiChevronRight } from "react-icons/fi";
import {
  Form,
  Input,
  Label,
  Error,
  Button,
  InputCheckbox,
  CheckboxDiv,
  LabelCheckbox,
  Select,
  Option,
  Text,
} from "../../register.style";

const schema = yup
  .object({
    company: yup
      .string()
      .min(3, "No mínimo 5 caracteres")
      .required("O campo é obrigatório"),
    cnpj: yup
      .string()
      .min(14, "No mínimo 14 caracteres")
      .required("O campo é obrigatório"),
    responsibility: yup
      .boolean()
      .required()
      .oneOf([true], "O campo é obrigatório"),
    terms: yup.boolean().required().oneOf([true], "O campo é obrigatório"),
    privacy: yup.boolean().required().oneOf([true], "O campo é obrigatório"),
  })
  .required();

export function FormStep2({ activeStep, steps, handleNext }) {
  const { businessList } = useContext(AppContext);

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
        <Label htmlFor="company">Nome fantasia</Label>
        <Input
          placeholder="Nome que seus clientes conhecem"
          id="company"
          type="text"
          {...register("company")}
        />
        <Error>{errors.company?.message}</Error>
        <Label htmlFor="cnpj">CNJP</Label>
        <Input
          placeholder="00.000.000/0000-00"
          id="cnpj"
          type="text"
          {...register("cnpj")}
        />
        <Error>{errors.cnpj?.message}</Error>
        <Label htmlFor="business">Ramo de atuação</Label>
        <Select
          placeholder="Selecione seu ramo de atuação"
          name="business"
          id="business"
          required
        >
          {businessList.map((buss) => {
            return <Option key={buss.value}>{buss.label}</Option>;
          })}
        </Select>
        <CheckboxDiv>
          <InputCheckbox
            type="checkbox"
            id="responsibility"
            {...register("responsibility")}
          />
          <LabelCheckbox htmlFor="responsibility">
            Declaro que sou responsável legal pela empresa.
          </LabelCheckbox>
        </CheckboxDiv>
        <Error>{errors.responsibility?.message}</Error>
        <CheckboxDiv>
          <InputCheckbox type="checkbox" id="terms" {...register("terms")} />
          <LabelCheckbox htmlFor="terms">
            Concordo com os Termos e Condições do tamo<span>junto</span>.
          </LabelCheckbox>
        </CheckboxDiv>
        <Error>{errors.terms?.message}</Error>
        <CheckboxDiv>
          <InputCheckbox
            type="checkbox"
            id="privacy"
            {...register("privacy")}
          />
          <LabelCheckbox htmlFor="privacy">
            Concordo com a Política de Privacidade do tamo<span>junto</span>.
          </LabelCheckbox>
        </CheckboxDiv>

        <Error>{errors.privacy?.message}</Error>
        <Text>Todos os campos são obrigatórios</Text>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          {activeStep === steps.length ? "Finish" : "CONTINUAR"}
          <span>
            <FiChevronRight />
          </span>
        </Button>
      </Form>
    </>
  );
}
