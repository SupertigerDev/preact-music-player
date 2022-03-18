import { BsFileMusicFill } from 'react-icons/bs';
import { AiFillStar, AiFillFolder } from 'react-icons/ai';

import AllMusicPage from './components/AllMusicPage/AllMusicPage';

const pages = {
  AllMusic: {
    id: 'allMusic',
    name: 'All Music',
    Icon: BsFileMusicFill,
    component: AllMusicPage,
  },
  folders: {
    id: 'folders',
    name: 'Folders',
    Icon: AiFillFolder,
    component: AllMusicPage,
  },
  favorites: {
    id: 'favorites',
    name: 'Favorites',
    Icon: AiFillStar,
    component: AllMusicPage,
  },
};

export default pages;
