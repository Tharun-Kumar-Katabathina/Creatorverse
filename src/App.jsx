
import React from 'react';
import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  let routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "add", element: <AddCreator /> },
    { path: "edit/:id", element: <EditCreator /> },
    { path: "view/:id", element: <ViewCreator /> },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {routes}
    </div>
  );
}

export default App;

