import classNames from 'classnames';
import Header from './header';

export type ProtectedLayoutProps = {
  menuId: string;
  children?: any;
};

export default function ProtectedLayout(props: ProtectedLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <>
        <div className={classNames('')}>
          <Header />
          <main className="">
            <div className="container">{props.children}</div>
          </main>
        </div>
      </>
    </div>
  );
}
