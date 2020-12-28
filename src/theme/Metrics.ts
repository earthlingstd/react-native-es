import { Platform, PlatformIOSStatic, useWindowDimensions } from 'react-native'

let IS_IPAD = false
if (Platform.OS === 'ios') {
  const platformIOS = Platform as PlatformIOSStatic
  IS_IPAD = platformIOS.isPad
}

const headerHeight = () => {
  const dim = useWindowDimensions()
  const IS_LANSCAPE = dim.width > dim.height

  let headerHeight = 44
  if (Platform.OS === 'android') {
    // TODO: Need to handle translucent status bar.
    headerHeight = 50
  } else if (IS_LANSCAPE && !IS_IPAD) {
    headerHeight = 52
  }
  return headerHeight
}

export default {
  layout: {
    insets: {
      horizontal: 16,
    },
  },
  header: {
    height: headerHeight,
  },
}
