import ReactDOM from 'react-dom/client';
import init from './Init';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(await init());
};

app();