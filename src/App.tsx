import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Concept from './pages/Concept';
import Practice from './pages/Practice';
import Session from './pages/Session';
import Mocks from './pages/Mocks';
import Progress from './pages/Progress';
import QuestionPage from './pages/QuestionPage';
import Guide from './pages/Guide';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:section" element={<Learn />} />
        <Route path="/concept/:id" element={<Concept />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/session" element={<Session />} />
        <Route path="/mocks" element={<Mocks />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
