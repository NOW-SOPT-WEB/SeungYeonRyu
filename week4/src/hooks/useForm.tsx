import { useState } from "react";

const useForm = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChange] as const;
};

export default useForm;
