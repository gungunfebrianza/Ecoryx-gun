import React, { useState, type HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';
import ty from 'typy';

interface InputI {
  multiple?: boolean;
  withShowPassword?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  name?: string;
  accept?: any;
  invalid?: any;
  warnMessage?: any;
  invalidKey?: any;
  size?: 'sm';
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  hideHelperText?: boolean;
  type?: HTMLInputTypeAttribute;
  minLength?: number;
  maxLength?: number;
  className?: string;
  onKeyUp?(param: any): void;
  onFocus?(param: any): void;
  onBlur?(param: any): void;
  onValueChange?(param: any): void;
}

export const inputSizeClassNames = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
};

function Input(props: InputI) {
  const { onValueChange = () => null, type = 'text', size = 'md', hideHelperText = false } = props;
  const [showPassword, setShowPassword] = useState(false);

  const selectedSize = ty(inputSizeClassNames, props.size).safeString;

  return (
    <div className="relative">
      <input
        accept={props.accept}
        onFocus={props.onFocus}
        readOnly={props.readOnly}
        onBlur={props.onBlur}
        disabled={props.disabled}
        onKeyUp={props.onKeyUp}
        autoComplete={props.autoComplete}
        type={props.withShowPassword && showPassword ? 'text' : props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(val) => onValueChange(val.target.value)}
        minLength={props.minLength}
        maxLength={props.maxLength}
        className={classNames([
          'input input-bordered w-full',
          selectedSize,
          props.className,
          props.invalid ? 'input-error' : '',
        ])}
      />
      {props.withShowPassword && (
        <div className="absolute flex input-height items-center right-2 top-0">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="font-semibold rounded-sm text-xs btn btn-ghost btn-xs "
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      )}

      <div className={classNames(hideHelperText ? '' : 'h-5')}>
        {props.invalid ? (
          <span key={props.invalidKey} className="block text-xs text-red-600 leading-3">
            {props.invalid}
          </span>
        ) : (
          ''
        )}
        {props.warnMessage ? <span className="">{props.warnMessage}</span> : ''}
      </div>
    </div>
  );
}

export default Input;
