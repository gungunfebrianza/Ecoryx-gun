import React, { FocusEventHandler, Key, KeyboardEventHandler, ReactPortal } from "react";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import ty from "typy";
import numeral from "numeral";
import classNames from "classnames";

interface InputNumberI {
  phone?: boolean;
  onValueChange: (arg: number | null) => void;
  readOnly?: boolean;
  thousandSeparator?: string | boolean;
  decimalSeparator?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  autoComplete?: string;
  value: string | number | null;
  name?: string;
  format?: string;
  allowNegative?: boolean;
  postfix?: string;
  hideHelperText?: boolean;
  maxLength?: number;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  invalid?: boolean | ReactPortal | null;
  invalidKey?: Key | null;
  isAllowed?: (values: NumberFormatValues) => boolean;
  warnMessage?: boolean | ReactPortal | null;
  inputClassName?: any;
}

const sizeClassNames = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

function InputNumber(props: InputNumberI) {
  const {
    inputClassName = "",
    thousandSeparator = ",",
    size = "md",
    decimalSeparator = ".",
    hideHelperText = false,
    onBlur = () => null,
    onValueChange = () => null,
  } = props;

  const config: any = {};

  const selectedSize = ty(sizeClassNames, size).safeString;

  return (
    <div className="relative">
      <NumericFormat
        isAllowed={props.isAllowed}
        format={props.format}
        maxLength={props.maxLength}
        suffix={props.postfix}
        readOnly={props.readOnly}
        thousandSeparator={thousandSeparator}
        decimalSeparator={decimalSeparator}
        onBlur={onBlur}
        allowNegative={props.allowNegative}
        onKeyUp={props.onKeyUp}
        autoComplete={props.autoComplete}
        value={props.value}
        renderText={(formattedValue: any) => <span>{numeral(formattedValue).format("0,0.[000]")}</span>}
        name={props.name}
        placeholder={props.placeholder}
        onValueChange={(val) => onValueChange(val?.floatValue || null)}
        className={classNames(["input input-bordered", inputClassName, selectedSize, props.invalid ? "input-error" : ""])}
        {...config}
        disabled={props.disabled}
      />

      <div className={classNames(hideHelperText ? "" : "h-5")}>
        {props.invalid ? (
          <span key={props.invalidKey} className="block text-xs text-red-600 leading-3">
            {props.invalid}
          </span>
        ) : (
          <></>
        )}
        {props.warnMessage && !props.invalid ? <span className="block text-xs text-gray-400">{props.warnMessage}</span> : ""}
      </div>
    </div>
  );
}

export default InputNumber;
