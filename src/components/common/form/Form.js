import { useState } from "react";

import { InputField } from "./InputField";
import { Label } from "./Label";

const BasicForm = () => {
  const [formData, setFormData] = useState({});
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmiData, setBmiData] = useState("");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "weight") {
      setWeight(e.target.value);
      console.log("Weight:", weight);
    }
    if (e.target.name === "height") {
      setHeight(e.target.value);
      console.log("Height:", height);
    }
  };

  // console.log(formData);

  return (
    <div>
      <h1>FORM COMPONENT</h1>
      <div>
        <div>
          <label
            for="height"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Your Weight
          </label>
          <input
            name="weight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            onChange={onChange}
          />
        </div>
        <div>
          <label
            for="height"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Your Height
          </label>
          <input
            name="height"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            onChange={onChange}
          />
        </div>
      </div>
      <div>🏄🏻‍♂️{(Number(height) + Number(weight)) / 5}</div>
    </div>
  );
};

export default BasicForm;
