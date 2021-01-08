/**
 * Text Field
 *
 * @format
 *
 */

import React, { useState } from 'react'
import {
  ImageStyle,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native'
import useTheme from '../theme/useTheme'
import Footnote from './Typography/Footnote'
import Icon from './Icon'

interface Props {
  name?: string
  editable?: boolean
  style?: StyleProp<ViewStyle>
  label?: string
  defaultValue?: string
  maxLength?: number
  showCharacterCounter?: boolean
  multiline?: boolean
  numberOfLines?: number
  required?: boolean
  icon?: L.IconSource
  iconStyle?: StyleProp<ImageStyle>
  onChangeText?: (text: string, name: string, required?: boolean) => void
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  onFocus?: () => void
  onBlur?: () => void
}

const TextField: React.FC<Props> = props => {
  const { color, typography } = useTheme()
  const {
    editable = true,
    defaultValue,
    label,
    keyboardType,
    maxLength,
    multiline,
    name,
    numberOfLines,
    onChangeText,
    placeholder,
    required,
    showCharacterCounter,
  } = props
  const [focused, setFocused] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentValue, setCurrentValue] = useState(defaultValue)

  const onFocus = () => {
    setFocused(true)
    setHasError(false)
    props.onFocus && props.onFocus()
  }

  const onBlur = () => {
    setFocused(false)

    // Show error
    if (required && (!currentValue || currentValue?.length === 0)) {
      setHasError(true)
    } else {
      setHasError(false)
    }

    props.onBlur && props.onBlur()
  }

  const handleOnChangeText = (text: string) => {
    setCurrentValue(text)
    if (onChangeText) {
      onChangeText(text, name || label || 'unknown', required)
    }
  }

  return (
    <View style={[s.container, props.style]}>
      {(placeholder || label) && (
        <Footnote style={[s.label]} weight="semiBold" color={focused ? color.primary : color.text}>
          {label || placeholder}
          {required && <Footnote style={s.fr}>*</Footnote>}
        </Footnote>
      )}
      <View
        style={[
          s.input__container,
          {
            backgroundColor: `${color.gray6}AA`,
            borderColor: focused ? color.primary : color.background,
          },
          hasError ? { borderColor: 'red' } : {},
        ]}
      >
        {props.icon && (
          <Icon
            style={[{ marginLeft: 10, marginRight: -2, alignSelf: 'center' }, props.iconStyle]}
            source={props.icon}
            size={typography.body + 2}
          />
        )}
        <TextInput
          keyboardType={keyboardType}
          editable={editable}
          defaultValue={defaultValue?.toString()}
          placeholder={placeholder}
          maxLength={maxLength}
          underlineColorAndroid="transparent"
          placeholderTextColor={color.gray4}
          clearButtonMode="never"
          multiline={multiline}
          numberOfLines={numberOfLines || 1}
          onChangeText={handleOnChangeText}
          style={[
            s.input,
            {
              flex: 1,
              fontSize: typography.body,
              // lineHeight: typography.body * 1.2,
              color: editable ? color.text : color.gray2,
            },
            numberOfLines
              ? {
                  minHeight: typography.body * 1.2 * numberOfLines + 22,
                  maxHeight: typography.body * 1.2 * numberOfLines * 2 + 22,
                }
              : s.singleLine,
          ]}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
      {maxLength && showCharacterCounter && (
        <Footnote style={[s.counter]} align="right" weight="regular" color="gray3">
          {`${currentValue?.length} / ${maxLength}`}
        </Footnote>
      )}
    </View>
  )
}

TextField.defaultProps = {}

const s = StyleSheet.create({
  container: {},
  fr: { color: 'red' },
  label: {
    marginBottom: 4,
    marginLeft: 3,
  },
  input__container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    // paddingTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  input: {
    minHeight: 48,
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 10,
  },
  singleLine: {
    paddingBottom: 10,
  },
  counter: {
    marginTop: 3,
    marginRight: 3,
  },
})

export default TextField
