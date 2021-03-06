import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList94814Navigator from '../features/ArticleList94814/navigator';
import ArticleList94813Navigator from '../features/ArticleList94813/navigator';
import ArticleList94812Navigator from '../features/ArticleList94812/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList94814: { screen: ArticleList94814Navigator },
ArticleList94813: { screen: ArticleList94813Navigator },
ArticleList94812: { screen: ArticleList94812Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
