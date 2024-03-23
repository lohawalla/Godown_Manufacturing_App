import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useReducer, useRef} from 'react';

import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackCardStyleInterpolator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {ApplicationParamList} from '../types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Dashboard} from '../screens';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {Path, Svg} from 'react-native-svg';
import Lottie from 'lottie-react-native';
import {Image} from '@gluestack-ui/themed';
import ImageIndex from '../theme/AssestIndex';
import Feather from 'react-native-vector-icons/Ionicons';
import Assign from '../screens/Assign/Assign';
import History from '../screens/History/History';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Page1 from '../screens/reconciliation/Page1';
import GodownList from '../screens/Assign/GodownList';
import AisleList from '../screens/Assign/AisleList';
import ShelfList from '../screens/Assign/ShelfList';
import Popup from '../screens/Assign/Popup';
import QRAssign from '../screens/Assign/QRAssign';
import Purchase from '../screens/purchase/PurchaseList';
import BillInfo from '../screens/purchase/BillInfo';
import AssignConfirm from '../screens/Assign/AssignConfirm';
import Transfer from '../screens/Transfer/Transfer';
import ConfirmDialogue from '../screens/Assign/ConfirmDialogue';
import CapturePhoto from '../screens/Assign/CapturePhoto';
import CapturePhotoConfirmation from '../screens/Assign/CapturePhotoConfirmation';
import PurchaseGodown from '../screens/purchase/PurchaseGodown';
import PurchaseCamera from '../screens/purchase/PurchaseCamera';
import PurchaseAislePhotoCapture from '../screens/purchase/PurchaseAislePhotoCapture';
import PurchaseAislePhoto from '../screens/purchase/PurchaseAislePhoto';

const Stack = createStackNavigator<any>();
const Tab = createBottomTabNavigator();
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const Home: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <AnimatedTabBar {...props} />}
      initialRouteName="Dashboard"
      screenOptions={({route}) =>
        ({
          tabBarOptions: {},
        } as BottomTabNavigationOptions)
      }>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: 'white'},
          // @ts-ignore
          tabBarIcon: () => (
            <Feather
              name="home"
              style={{alignSelf: 'center'}}
              size={30}
              color={'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Assign"
        component={GodownList}
        options={{
          headerShown: false,
          tabBarLabel: 'Assign',
          tabBarLabelStyle: {color: 'white'},
          tabBarIcon: () => (
            <Feather
              name="qr-code"
              style={{alignSelf: 'center'}}
              size={30}
              color={'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          headerShown: false,
          tabBarLabel: 'Transfer',
          tabBarLabelStyle: {color: 'white'},
          tabBarIcon: () => (
            <Feather
              name="swap-vertical"
              style={{alignSelf: 'center'}}
              size={30}
              color={'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarLabel: 'History',
          tabBarLabelStyle: {color: 'white'},
          tabBarIcon: () => (
            <Feather
              name="time"
              style={{alignSelf: 'center'}}
              size={30}
              color={'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const ApplicationNavigator = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animationTypeForReplace: 'push'}}>
          <Stack.Screen name="HomeTabs" component={Home} />
          <Stack.Screen
            name="Page1"
            component={Page1}
            options={{
              title: 'Reconciliation Page',
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={Purchase}
            options={{
              title: 'purchage Page',
            }}
          />
          <Stack.Screen
            name="BillInfo"
            component={BillInfo}
            options={{
              title: 'Bill Info',
            }}
          />
          <Stack.Screen
            name="purchaseGodown"
            component={PurchaseGodown}
            options={{
              title: 'purchaseGodownInfo',
            }}
          />
          <Stack.Screen
            name="purchaseGodownCamera"
            component={PurchaseCamera}
            options={{
              title: 'purchaseGodownCamera',
            }}
          />
          <Stack.Screen
            name="PurchaseAislePhoto"
            component={PurchaseAislePhoto}
            options={{
              title: 'PurchaseAislePhoto',
            }}
          />
          <Stack.Screen name="ShelfList" component={ShelfList} />
          <Stack.Screen name="AisleList" component={AisleList} />
          <Stack.Screen name="Popup" component={Popup} />
          <Stack.Screen name="QRAssign" component={QRAssign} />
          <Stack.Screen name="CapturePhoto" component={CapturePhoto} />
          <Stack.Screen
            name="CapturePhotoConfirmation"
            component={CapturePhotoConfirmation}
          />
          <Stack.Screen name="AssignConfirm" component={AssignConfirm} />
          <Stack.Screen name="ConfirmDialogue" component={ConfirmDialogue} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
const PlaceholderScreen = () => {
  return <View style={{flex: 1, backgroundColor: 'white'}} />;
};

// ------------------------------------------------------------------

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };
  const [layout, dispatch] = useReducer(reducer, []);
  console.log(layout);
  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };
  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({index}) => index === activeIndex)!.x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <View style={[styles.tabBar, {paddingBottom: bottom}]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}>
        <Path
          fill="white"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>
      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              label={label}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

// ------------------------------------------------------------------

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
  label: any;
};

const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
  label,
}: TabBarComponentProps) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null);
  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);
  // animations ------------------------------------------------------
  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 0.9 : 0, {duration: 250}),
        },
      ],
    };
  });
  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
    };
  });
  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}>
        {/* @ts-ignore */}
        {options.tabBarIcon ? options.tabBarIcon({ref}) : <Text>?</Text>}
      </Animated.View>
      <Text style={{color: 'white', textAlign: 'center'}}>{label}</Text>
    </Pressable>
  );
};

// ------------------------------------------------------------------

export default ApplicationNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1E293B',
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 80,
    width: 60,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#0078FB',
    width: 60,
    marginBottom: 6,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    marginLeft: 15,
    flex: 1,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
