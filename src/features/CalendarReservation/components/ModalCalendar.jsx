import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import moment from "moment";
import { InputField, InputSelect } from "../../../components";
import { useFormFields } from "../../../hooks";
import { useState } from "react";
import {
  areasOfStudy,
  testAreas,
  typesOfActivities,
} from "../../../const/itemsInputSelect";

export const ModalCalendar = ({ block }) => {
  const [activity_type, setActivityType] = useState("");
  const [study_area, setStudyArea] = useState("");
  const [area_test, setAreaTest] = useState("");
  const [user_quantity, setUserQuantity] = useState(0);
  const [partners, setPartners] = useState([]);

  const initialState = {
    other_activity: "",
    area_test: "",
    teachers_name: "",
    bookingDate: "",
    roomId: "",
    bookingTimeBlockId: "",
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { getFieldProps } = useFormFields(initialState);

  // Función para manejar la cantidad de acompañantes
  const handleUserQuantityChange = (e) => {
    const quantity = Math.min(4, parseInt(e.target.value) || 0);
    setUserQuantity(quantity);

    // Ajustar el array partners según la nueva cantidad
    const updatedPartners = [...partners];
    while (updatedPartners.length < quantity) {
      updatedPartners.push({ name: "", last_name: "" });
    }
    while (updatedPartners.length > quantity) {
      updatedPartners.pop();
    }
    setPartners(updatedPartners);
  };

  // Función para manejar cambios en los inputs de nombre/apellido
  const handlePartnerChange = (index, field, value) => {
    const updatedPartners = [...partners];
    updatedPartners[index][field] = value;
    setPartners(updatedPartners);
  };

  return (
    <>
      <div
        className="bg-white hover:bg-slate-100 hover:shadow-lg cursor-pointer shadow p-2 rounded-lg mb-2"
        onClick={onOpen}
      >
        <>
          <p className="text-sm font-semibold text-primary">
            {moment(block.start_time, "HH:mm:ss").format("hh:mm A")} -{" "}
            {moment(block.end_time, "HH:mm:ss").format("hh:mm A")}
          </p>
          <p className="text-xs text-gray-600">
            Cupos disponibles: {block.total_quotas_available}
          </p>
        </>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Formulario de reserva {block.block_id}
              </ModalHeader>

              <ModalBody>
                <InputSelect
                  label="Tipo de actividad"
                  name="activity_type"
                  value={activity_type}
                  onChange={setActivityType}
                  options={typesOfActivities}
                  placeholder="Selecciona un tipo de actividad"
                />

                {activity_type === "Otro" && (
                  <InputField
                    label="Otro tipo de actividad a realizar"
                    {...getFieldProps("other_activity")}
                  />
                )}

                <InputSelect
                  label="Área de estudio"
                  name="study_area"
                  value={study_area}
                  onChange={setStudyArea}
                  options={areasOfStudy}
                  placeholder="Selecciona un área de estudio"
                />

                <InputSelect
                  label="Área de prueba"
                  name="area_test"
                  value={area_test}
                  onChange={setAreaTest}
                  options={testAreas}
                  placeholder="Selecciona un área de prueba"
                />

                <InputField
                  type="number"
                  label="Cantidad de acompañantes (máx 4)"
                  value={user_quantity}
                  onChange={handleUserQuantityChange}
                />

                {partners.map((partner, index) => (
                  <div key={index} className="grid grid-cols-2 gap-2">
                    <InputField
                      label={`Nombre acompañante ${index + 1}`}
                      value={partner.name}
                      onChange={(e) =>
                        handlePartnerChange(index, "name", e.target.value)
                      }
                    />
                    <InputField
                      label={`Apellido acompañante ${index + 1}`}
                      value={partner.last_name}
                      onChange={(e) =>
                        handlePartnerChange(index, "last_name", e.target.value)
                      }
                    />
                  </div>
                ))}

                <InputField
                  label="Nombre del docente que asignó la actividad"
                  {...getFieldProps("teachers_name")}
                />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    console.log({
                      user_quantity,
                      partners,
                    });
                    onClose();
                  }}
                >
                  Reservar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
