// import React from 'react';
// import './wrapper.styles.scss';

//--- Styles for .page-transition are applied globally from index.scss file --- //

const PageWrapper = ({ children }) => {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
};

export default PageWrapper;