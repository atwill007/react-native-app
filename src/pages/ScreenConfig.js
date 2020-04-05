import MovieScreen from './Movie/MovieTopScreen';
import ProfileScreen from './Profile/ProfileScreen';
import DemoScreen from './Demo/DemoScreen';

const screenConfig = {
  tabs: [
    {
      name: 'TabVideo',
      components: [
        {
          name: MovieScreen.customName,
          component: MovieScreen,
        },
        {
          name: 'Demo',
          component: DemoScreen,
        },
      ],
    },
    {
      name: 'TabProfile',
      components: [
        {
          name: ProfileScreen.customName,
          component: ProfileScreen,
        },
      ],
    },
  ],
};

export default screenConfig
