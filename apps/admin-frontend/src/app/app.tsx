import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Posts = React.lazy(() => import('posts/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="admin-frontend" />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
