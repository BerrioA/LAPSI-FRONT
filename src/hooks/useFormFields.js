import { useState, useCallback } from "react";

export const useFormFields = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const setField = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const getFieldProps = useCallback(
    (name) => ({
      name,
      value: formData[name],
      onChange: (e) => setField(name, e.target.value),
    }),
    [formData, setField]
  );

  return {
    formData,
    setFormData,
    getFieldProps,
  };
};
