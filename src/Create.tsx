import { Link } from "react-router-dom";
import { useAppDispatch } from "./store/app/hook";
import { createUser } from "./store/features/users/users-slice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "./services/mirage";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
});

const About = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, email }: User) => {
    dispatch(
      createUser({
        name,
        email,
        createdAt: new Date().toISOString(),
      })
    );

    reset({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="nome" {...register("name")} />
        <p style={{ color: "red", fontSize: "0.7rem", marginTop: "2px" }}>
          {errors.name?.message}
        </p>
        <input type="text" placeholder="email" {...register("email")} />
        <p style={{ color: "red", fontSize: "0.7rem", marginTop: "2px" }}>
          {errors.email?.message}
        </p>
        <button type="submit">Enviar</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </>
  );
};

export default About;
