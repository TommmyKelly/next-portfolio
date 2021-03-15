import React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='app__global'>
      <div className='app__container'>{children}</div>
    </div>
  );
};

export default Layout;