import { Modal } from "./styles";
import user from "../../assets/user.svg";
import doctor from "../../assets/doctor.svg";
import logout from "../../assets/logout.svg";
import { useData } from "../../Global/UserContext";

const ModalDoctor = () => {
  const { userLogout } = useData();

  return (
    <Modal>
      <div>
        <img src={doctor} alt="" />
        <p>Meu Perfil</p>
      </div>
      <div>
        <img src={user} alt="" />
        <p>Pacientes</p>
      </div>
      <div onClick={userLogout}>
        <img src={logout} alt="" />
        <p>Sair</p>
      </div>
    </Modal>
  );
};

export default ModalDoctor;
