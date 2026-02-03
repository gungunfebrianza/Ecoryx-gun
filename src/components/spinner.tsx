import cn from 'classnames';
import { CgSpinner } from 'react-icons/cg';

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export function Spinner({ size = 'md' }: { size?: SpinnerSize }) {
  const sizes = {
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
    xl: 'loading-xl',
  };
  const selectedSize = sizes[size];

  return <span className={cn('loading loading-spinner bg-primary', selectedSize)}></span>;
}
export function ButtonSpinner(props: { className?: string }) {
  return <CgSpinner className={cn('animate-spin', props.className)} />;
}

export function SpinnerOverlay({
  rounded = 'none',
  opacity = 0.6,
}: {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  opacity?: number;
}) {
  const roundedLabel = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-white z-100 flex justify-center items-center ${roundedLabel[rounded]}`}
      style={{ opacity }}
    >
      <Spinner size="lg" />
    </div>
  );
}
