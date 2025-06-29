import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {children}
    </div>
  );
};

export default PageContainer;
