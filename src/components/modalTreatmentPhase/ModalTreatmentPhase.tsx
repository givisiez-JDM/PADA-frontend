import { BoxButton, Dosage, DosageBox, Frequency, FrequencyBox, MdButton, Modal, ModalBox, ModalContent, TreatmentDuration } from "./ModalTreatmentPhase.styles";
import X from '../../assets/X.svg'

const ModalTreatmentPhase = ( {setModal} : {setModal: React.Dispatch<React.SetStateAction<boolean>>} ) => {

  return (
    <Modal>
      <ModalBox>
        <ModalContent>
          <TreatmentDuration>
            <div onClick={() => setModal(false)}>
              <img src={X}/>
            </div>
            <h1>Duração da fase</h1>

            <label htmlFor="">Inicio</label>
            <input type="date" />

            <label htmlFor="">Fim</label>
            <input type="date" />
          </TreatmentDuration>
          <Frequency>
            <h1>Periodicidade</h1>
            <FrequencyBox>
              <div>
                <input type="checkbox"/>
                <label htmlFor="">A cada 7 dias</label>
              </div>

              <div>
                <input type="checkbox"  />
                <label htmlFor="">A cada 2 semanas</label>
              </div>

              <div>
                <input type="checkbox"  />
                <label htmlFor="">A cada 3 semanas</label>
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="">A cada 4 semanas</label>
              </div>
            </FrequencyBox>
          </Frequency>
          <Dosage>
            <h1>Dosagem do medicamento</h1>
            <DosageBox>
                <div>
                  <input type="checkbox"/>
                  <p>1.3ml</p>
                </div>
                <div>
                  <input type="checkbox"/>
                  <p>1.98ml</p>
                </div>
                <div>
                  <input type="checkbox"/>
                  <p>1.985ml</p>
                </div>
                <div>
                  <input type="checkbox"/>
                  <p>1.53ml</p>
                </div>
            </DosageBox>
          </Dosage>
          <BoxButton>
            <MdButton>Adicionar</MdButton>
          </BoxButton>
        </ModalContent>
      </ModalBox>
    </Modal>
  );
};

export default ModalTreatmentPhase;
