import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Themeroutes from './routes/Router';
import Loader from './layouts/loader/Loader';

const App = () => {
  const routing = useRoutes(Themeroutes);
  const isMode = useSelector((state) => state.news.isDark);
  return (
    <Suspense fallback={<Loader />}>
      <div
        className={`${isMode ? 'dark' : ''}`}
      >
        {routing}
      </div>
    </Suspense>
  );
};

export default App;
