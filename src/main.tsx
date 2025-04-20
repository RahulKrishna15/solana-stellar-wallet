import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Wallet } from './Wallet.tsx';

createRoot(document.getElementById("root")!).render(<Wallet />);
