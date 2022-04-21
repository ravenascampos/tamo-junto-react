import React from "react";
import { useForm } from "react-hook-form";
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

export default function FormStep2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="company">Nome fantasia</Label>
        <Input id="company" type="text" {...register("company")} />
        <Error>{errors.company?.message}</Error>
        <Label htmlFor="cnpj">CNJP</Label>
        <Input id="cnpj" type="text" {...register("cnpj")} />
        <Error>{errors.cnpj?.message}</Error>
        <Label htmlFor="business">Ramo de atuação</Label>
        <Select name="business" id="business">
          <Option>Selecione um ramo de atuação</Option>
          <Option>restaurante</Option>
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
        <Button>
          CONTINUAR
          <span>
            <FiChevronRight />
          </span>
        </Button>
      </Form>
    </>
  );
}
