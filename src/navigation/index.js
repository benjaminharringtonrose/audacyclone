import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

function HomeScreenTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="ExploreScreen" component={ExploreScreen} />
      <BottomTab.Screen name="PlayerScreen" component={PlayerScreen} />
      <BottomTab.Screen name="PodcastsScreen" component={PodcastsScreen} />
      <BottomTab.Screen name="SettingsScreen" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}
