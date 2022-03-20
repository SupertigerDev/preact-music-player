import { render } from 'preact';
import App from './App';
import './index.css';
import 'react-virtualized/styles.css';

render(<App />, document.getElementById('app')!);
