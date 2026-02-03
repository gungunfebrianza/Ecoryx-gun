import classNames from 'classnames';

import ty from 'typy';

interface TextAreaI {
  multiple?: boolean;
  withShowPassword?: boolean;
  disabled?: boolean;
  spellCheck?: boolean;
  autoComplete?: string;
  name?: string;
  invalid?: any;
  warnMessage?: any;
  invalidKey?: any;
  size?: 'sm';
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  hideHelperText?: boolean;
  minLength?: number;
  maxLength?: number;
  className?: string;
  onKeyUp?(param: any): void;
  onBlur?(param: any): void;
  onValueChange?(param: any): void;
  rows?: any;
}

const sizeClassNames = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
};
function TextArea(props: TextAreaI) {
  const { onValueChange = () => null, size = 'md', hideHelperText = false, spellCheck = false } = props;

  const selectedSize = ty(sizeClassNames, size).safeString;

  return (
    <div className="relative">
      <textarea
        spellCheck={spellCheck}
        readOnly={props.readOnly}
        onBlur={props.onBlur}
        disabled={props.disabled}
        onKeyUp={props.onKeyUp}
        autoComplete={props.autoComplete}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => onValueChange(e.target.value)}
        minLength={props.minLength}
        maxLength={props.maxLength}
        rows={props.rows}
        className={classNames([
          'textarea textarea-bordered resize-none w-full',
          selectedSize,
          props.invalid ? 'textarea-error' : '',
          props.className,
        ])}
      />
      {!hideHelperText && (
        <div className="h-5">
          {props.invalid ? (
            <span key={props.invalidKey} className="block text-xs text-red-600 leading-3">
              {props.invalid}
            </span>
          ) : (
            ''
          )}
        </div>
      )}
      {props.warnMessage ? <span className="">{props.warnMessage}</span> : ''}
    </div>
  );
}

export default TextArea;
