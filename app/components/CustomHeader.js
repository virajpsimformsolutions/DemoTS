import { View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/CustomHeaderStyles';

const leftSection = (leftIcon, leftIconStyle, leftOnPress) => (
  <TouchableOpacity
    activeOpacity={0.7}
    hitSlop={styles.hitSlop}
    onPress={leftOnPress}
  >
    <Image source={leftIcon} style={[styles.iconStyle, leftIconStyle]} />
  </TouchableOpacity>
);

const centerSection = (title, titleStyle) => (
  <Text
    numberOfLines={1}
    ellipsizeMode={'tail'}
    style={[styles.title, titleStyle]}
  >
    {title}
  </Text>
);

const rightSection = (rightIcon, rightIconStyle, rightOnPress) => (
  <TouchableOpacity
    activeOpacity={0.7}
    hitSlop={styles.hitSlop}
    onPress={rightOnPress}
  >
    <Image source={rightIcon} style={[styles.iconStyle, rightIconStyle]} />
  </TouchableOpacity>
);

const CustomHeader = ({
  title = 'Header',
  left = false,
  center = true,
  right = false,
  leftIcon,
  rightIcon,
  leftOnPress,
  rightOnPress,
  rightIconStyle,
  leftIconStyle,
  titleStyle,
  headerStyle
}) => (
  <SafeAreaView
    style={[styles.headerContainer, headerStyle]}
    edges={['right', 'top', 'left']}
  >
    <View style={styles.iconView}>
      {left && leftSection(leftIcon, leftIconStyle, leftOnPress)}
    </View>
    {center && centerSection(title, titleStyle)}
    <View style={styles.iconView}>
      {right && rightSection(rightIcon, rightIconStyle, rightOnPress)}
    </View>
  </SafeAreaView>
);

CustomHeader.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  title: PropTypes.string,
  leftIcon: PropTypes.number,
  rightIcon: PropTypes.number,
  leftOnPress: PropTypes.func,
  rightOnPress: PropTypes.func,
  titleStyle: PropTypes.object,
  rightIconStyle: PropTypes.object,
  leftIconStyle: PropTypes.object,
  headerStyle: PropTypes.object
};

export default CustomHeader;
