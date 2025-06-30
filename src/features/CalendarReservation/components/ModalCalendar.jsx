import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { InputField, InputSelect } from "../../../components";
import { useGlobalStore, useReservationStore } from "../../../stores";
import {
  areasOfStudy,
  typesOfActivities,
  pruebasPorArea,
} from "../../../const/itemsInputSelect";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import moment from "moment";

export const ModalCalendar = ({ block, date }) => {
  const navigate = useNavigate();
  const { roomId } = useGlobalStore();
  const { loading, error, postReservation } = useReservationStore();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [areaTestOptions, setAreaTestOptions] = useState([]);

  const initialValues = {
    activity_type: "",
    other_activity: "",
    study_area: "",
    area_test: "",
    user_quantity: 0,
    partners: [],
    teachers_name: "",
  };

  // En tu handleReservation del componente ModalCalendar
  const handleReservation = async (values) => {
    const bookingDate = moment(date).format("YYYY-MM-DD");
    const bookingTimeBlockId = block.block_id;

    // Filtrar y validar partners
    const partners = values.partners.map((p) => ({
      name: p.name.trim(),
      last_name: p.last_name.trim(),
    }));

    const data = {
      activity_type: values.activity_type,
      study_area: values.study_area,
      area_test: values.area_test,
      user_quantity: partners.length + 1,
      teachers_name: values.teachers_name,
      bookingDate,
      roomId,
      partners,
      bookingTimeBlockId,
      ...(values.activity_type === "Otro" && {
        other_activity: values.other_activity,
      }),
    };

    const success = await postReservation(data);
    if (success) {
      onOpenChange(false);
      navigate("/reservations");
    }
  };

  return (
    <>
      <div
        className="bg-white hover:bg-slate-100 hover:shadow-lg cursor-pointer shadow p-2 rounded-lg mb-2"
        onClick={onOpen}
      >
        <p className="text-sm font-semibold text-primary">
          {moment(block.start_time, "HH:mm:ss").format("hh:mm A")} -{" "}
          {moment(block.end_time, "HH:mm:ss").format("hh:mm A")}
        </p>
        <p className="text-xs text-gray-600">
          Cupos disponibles: {block.total_quotas_available}
        </p>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Formulario de reserva {block.block_id}
              </ModalHeader>

              {error && (
                <ModalBody>
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                    <p className="text-sm">{error}</p>
                  </div>
                </ModalBody>
              )}

              <Formik
                initialValues={initialValues}
                onSubmit={handleReservation}
              >
                {({ values, handleChange, setFieldValue }) => {
                  useEffect(() => {
                    if (values.study_area) {
                      setAreaTestOptions(
                        pruebasPorArea[values.study_area] || []
                      );
                      setFieldValue("area_test", "");
                    } else {
                      setAreaTestOptions([]);
                      setFieldValue("area_test", "");
                    }
                  }, [values.study_area]);

                  useEffect(() => {
                    const quantity = Math.min(
                      4,
                      parseInt(values.user_quantity) || 0
                    );
                    const updated = [...values.partners];

                    while (updated.length < quantity) {
                      updated.push({ name: "", last_name: "" });
                    }
                    while (updated.length > quantity) {
                      updated.pop();
                    }

                    setFieldValue("partners", updated);
                  }, [values.user_quantity]);

                  return (
                    <Form>
                      <ModalBody>
                        <InputSelect
                          label="Tipo de actividad"
                          name="activity_type"
                          value={values.activity_type}
                          onChange={(value) =>
                            setFieldValue("activity_type", value)
                          }
                          options={typesOfActivities}
                          placeholder="Selecciona un tipo de actividad"
                        />

                        {values.activity_type === "Otro" && (
                          <InputField
                            label="Otro tipo de actividad a realizar"
                            name="other_activity"
                            value={values.other_activity}
                            onChange={handleChange}
                          />
                        )}

                        <InputSelect
                          label="Área de estudio"
                          name="study_area"
                          value={values.study_area}
                          onChange={(value) =>
                            setFieldValue("study_area", value)
                          }
                          options={areasOfStudy}
                          placeholder="Selecciona un área de estudio"
                        />

                        <InputSelect
                          label="Área de prueba"
                          name="area_test"
                          value={values.area_test}
                          onChange={(value) =>
                            setFieldValue("area_test", value)
                          }
                          options={areaTestOptions}
                          placeholder={
                            values.study_area
                              ? "Selecciona un área de prueba"
                              : "Primero selecciona un área de estudio"
                          }
                          disabled={!values.study_area}
                        />

                        <InputField
                          type="number"
                          name="user_quantity"
                          label="Cantidad de acompañantes (máx 4)"
                          value={values.user_quantity}
                          onChange={handleChange}
                        />

                        {values.partners.map((partner, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-2 gap-2"
                          >
                            <InputField
                              label={`Nombre acompañante ${index + 1}`}
                              value={partner.name}
                              onChange={(e) =>
                                setFieldValue(
                                  `partners[${index}].name`,
                                  e.target.value
                                )
                              }
                            />
                            <InputField
                              label={`Apellido acompañante ${index + 1}`}
                              value={partner.last_name}
                              onChange={(e) =>
                                setFieldValue(
                                  `partners[${index}].last_name`,
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        ))}

                        <InputField
                          label="Nombre del docente que asignó la actividad"
                          name="teachers_name"
                          value={values.teachers_name}
                          onChange={handleChange}
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Cerrar
                        </Button>
                        <Button
                          color="primary"
                          isLoading={loading}
                          type="submit"
                        >
                          Reservar
                        </Button>
                      </ModalFooter>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
