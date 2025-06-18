import { useState, useCallback } from "react";

export const useFormFields = (initialState = {}, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const setField = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }, []);

  const getFieldProps = useCallback(
    (name, customOnChange) => ({
      name,
      value: formData[name] || "",
      onChange: customOnChange
        ? (val) => {
            setField(name, val);
          }
        : (e) => setField(name, e.target.value),
    }),
    [formData, setField]
  );

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    setErrors({});
    setMessage(null);

    if (validate) {
      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const res = await onSubmit(formData);
      setMessage(res?.message || "Formulario enviado con éxito.");
      setFormData(initialState);
    } catch (err) {
      setErrors({ general: err?.message || "Ocurrió un error." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    getFieldProps,
    handleSubmit,
    errors,
    isSubmitting,
    message,
  };
};
