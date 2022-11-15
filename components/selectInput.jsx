import React from "react";
import "../styles/select.scss";
const SelectInput = React.forwardRef(
  ({ onChange, onBlur, name, label, errors }, ref) => {
    return (
      <>
        <div className="select">
          <select
            className="mySelectArrow"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option value="" disabled defaultValue="selected" hidden>
              Your Role/Designation
            </option>
            <option value="developer">developer</option>
            <option value="seller">seller</option>
            <option value="project_manager">project manager</option>
          </select>
          {errors[label] && (
            <span style={{ color: "red" }}>{errors[label]?.message}</span>
          )}
        </div>
      </>
    );
  }
);

export default SelectInput;
