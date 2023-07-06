import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>La pagina solicitada no fue encontrada</h2>
      <button onClick={goBackHandler}>Volver a iniciar sesión</button>
    </div>
  );
};
export default PageNotFound;
