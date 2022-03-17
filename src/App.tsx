import { useEffect } from 'preact/hooks';
import LeftPane from './components/LeftPane/LeftPane';
import RightPane from './components/RightPane/RightPane';
import pages from './pages';
import { store } from './store/store';

export default function App() {
  useEffect(() => {
    store.navigator.changeTab(pages.AllMusic);
  }, []);
  return (
    <>
      <LeftPane />
      <RightPane />
    </>
  );
}
