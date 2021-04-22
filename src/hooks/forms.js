import React, {useEffect, useState} from "react";
import {formStyles} from "../shared/styles";

export const useForms = ({disabled, error, readOnly}) => {
  const [formClass, setFormClass] = useState(formStyles.default);

  useEffect(() => {
      setFormClass(formStyles[
        disabled ? "disabled" : readOnly ? "readOnly" : error ? "error" : "default"
        ])
    }, [{disabled, error, readOnly}]
  );

  return {formClass}
}