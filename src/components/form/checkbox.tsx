import classNames from "classnames";
import React from "react";

function Checkbox(props: CheckboxProps) {
  const size = props.size || "base";
  return (
    <div className="relative">
      <div
        className={classNames("form-check flex items-center justify-start", size === "sm" ? "gap-1" : "gap-1.5", {
          "cursor-not-allowed": props.disabled,
          "opacity-50": props.disabled,
        })}
      >
        <input
          disabled={props.disabled}
          className={classNames("checkbox checkbox-sm checkbox-primary")}
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
          }}
          checked={props.checked}
          onChange={(e) => props.setChecked(e.target.checked)}
          value=""
          id={props.id}
        />

        {props.label && (
          <label
            className={classNames("inline-block cursor-pointer font-semibold text-sm", props.labelClassNames)}
            htmlFor={props.id}
          >
            {props.label}
          </label>
        )}
      </div>
    </div>
  );
}

interface CheckboxProps {
  setChecked(checked: boolean): any;
  label?: string | any;
  id: string;
  invalid?: string | null | boolean;
  warnMessage?: string;
  checked: boolean;
  disabled?: boolean;
  hideHelperText?: boolean;
  labelClassNames?: string;
  size?: "sm" | "base";
}

export default Checkbox;
