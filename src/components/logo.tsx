import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export default function Logo(props: { className?: string }) {
  return (
    <div className={classNames(twMerge('text-2xl font-black flex text-primary-600', props.className))}>
      ESG<span className="font-light">REPORT</span>
      <span className="font-black -translate-x-1">.AI</span>
    </div>
  );
}
