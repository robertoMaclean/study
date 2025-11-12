import { FormProvider, useForm } from "react-hook-form";
import { userSchema, userForm } from "../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";

function Form() {
  const methods = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: userForm) => {
    try {
      const x = userSchema.parse(data);
      console.log(x);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </FormProvider>
  );
}

export default Form;
