import { Modal } from './ModalDoctor.styles';
import user from '../../assets/user.svg';
import doctor from '../../assets/doctor.svg';
import logout from '../../assets/logout.svg';
import { useData } from '../../global/UserContext';
import { useNavigate } from 'react-router-dom';

const ModalDoctor = () => {
  const { userLogout } = useData();
  const navigate = useNavigate();

  return (
    <Modal>
      <div onClick={() => navigate('/menu-medico/perfil')}>
        <img src={doctor} alt="" />
        <p>Meu Perfil</p>
      </div>
      <div onClick={() => navigate('/menu-medico')}>
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
