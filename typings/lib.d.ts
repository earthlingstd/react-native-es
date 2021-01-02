/// <reference types="typescript" />
// Lib
declare namespace L {
  // Key-Value
  export type KV<T> = { [key: string]: T }

  export type Font = {
    fontFamily: string
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
  }

  export type Fonts = {
    thin: Font
    light: Font
    regular: Font
    medium: Font
    semiBold: Font
    bold: Font
  }

  export type FeatherIcons =
    | 'activity'
    | 'airplay'
    | 'alert-circle'
    | 'alert-octagon'
    | 'alert-triangle'
    | 'align-center'
    | 'align-justify'
    | 'align-left'
    | 'align-right'
    | 'anchor'
    | 'aperture'
    | 'archive'
    | 'arrow-down'
    | 'arrow-down-circle'
    | 'arrow-down-left'
    | 'arrow-down-right'
    | 'arrow-left'
    | 'arrow-left-circle'
    | 'arrow-right'
    | 'arrow-right-circle'
    | 'arrow-up'
    | 'arrow-up-circle'
    | 'arrow-up-left'
    | 'arrow-up-right'
    | 'at-sign'
    | 'award'
    | 'bar-chart'
    | 'bar-chart-2'
    | 'battery'
    | 'battery-charging'
    | 'bell'
    | 'bell-off'
    | 'bluetooth'
    | 'bold'
    | 'book'
    | 'book-open'
    | 'bookmark'
    | 'box'
    | 'briefcase'
    | 'calendar'
    | 'camera'
    | 'camera-off'
    | 'cast'
    | 'check'
    | 'check-circle'
    | 'check-square'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'chevrons-down'
    | 'chevrons-left'
    | 'chevrons-right'
    | 'chevrons-up'
    | 'chrome'
    | 'circle'
    | 'clipboard'
    | 'clock'
    | 'cloud'
    | 'cloud-drizzle'
    | 'cloud-lightning'
    | 'cloud-off'
    | 'cloud-rain'
    | 'cloud-snow'
    | 'code'
    | 'codepen'
    | 'codesandbox'
    | 'coffee'
    | 'columns'
    | 'command'
    | 'compass'
    | 'copy'
    | 'corner-down-left'
    | 'corner-down-right'
    | 'corner-left-down'
    | 'corner-left-up'
    | 'corner-right-down'
    | 'corner-right-up'
    | 'corner-up-left'
    | 'corner-up-right'
    | 'cpu'
    | 'credit-card'
    | 'crop'
    | 'crosshair'
    | 'database'
    | 'delete'
    | 'disc'
    | 'divide'
    | 'divide-circle'
    | 'divide-square'
    | 'dollar-sign'
    | 'download'
    | 'download-cloud'
    | 'dribbble'
    | 'droplet'
    | 'edit'
    | 'edit-2'
    | 'edit-3'
    | 'external-link'
    | 'eye'
    | 'eye-off'
    | 'facebook'
    | 'fast-forward'
    | 'feather'
    | 'figma'
    | 'file'
    | 'file-minus'
    | 'file-plus'
    | 'file-text'
    | 'film'
    | 'filter'
    | 'flag'
    | 'folder'
    | 'folder-minus'
    | 'folder-plus'
    | 'framer'
    | 'frown'
    | 'gift'
    | 'git-branch'
    | 'git-commit'
    | 'git-merge'
    | 'git-pull-request'
    | 'github'
    | 'gitlab'
    | 'globe'
    | 'grid'
    | 'hard-drive'
    | 'hash'
    | 'headphones'
    | 'heart'
    | 'help-circle'
    | 'hexagon'
    | 'home'
    | 'image'
    | 'inbox'
    | 'info'
    | 'instagram'
    | 'italic'
    | 'key'
    | 'layers'
    | 'layout'
    | 'life-buoy'
    | 'link'
    | 'link-2'
    | 'linkedin'
    | 'list'
    | 'loader'
    | 'lock'
    | 'log-in'
    | 'log-out'
    | 'mail'
    | 'map'
    | 'map-pin'
    | 'maximize'
    | 'maximize-2'
    | 'meh'
    | 'menu'
    | 'message-circle'
    | 'message-square'
    | 'mic'
    | 'mic-off'
    | 'minimize'
    | 'minimize-2'
    | 'minus'
    | 'minus-circle'
    | 'minus-square'
    | 'monitor'
    | 'moon'
    | 'more-horizontal'
    | 'more-vertical'
    | 'mouse-pointer'
    | 'move'
    | 'music'
    | 'navigation'
    | 'navigation-2'
    | 'octagon'
    | 'package'
    | 'paperclip'
    | 'pause'
    | 'pause-circle'
    | 'pen-tool'
    | 'percent'
    | 'phone'
    | 'phone-call'
    | 'phone-forwarded'
    | 'phone-incoming'
    | 'phone-missed'
    | 'phone-off'
    | 'phone-outgoing'
    | 'pie-chart'
    | 'play'
    | 'play-circle'
    | 'plus'
    | 'plus-circle'
    | 'plus-square'
    | 'pocket'
    | 'power'
    | 'printer'
    | 'radio'
    | 'refresh-ccw'
    | 'refresh-cw'
    | 'repeat'
    | 'rewind'
    | 'rotate-ccw'
    | 'rotate-cw'
    | 'rss'
    | 'save'
    | 'scissors'
    | 'search'
    | 'send'
    | 'server'
    | 'settings'
    | 'share'
    | 'share-2'
    | 'shield'
    | 'shield-off'
    | 'shopping-bag'
    | 'shopping-cart'
    | 'shuffle'
    | 'sidebar'
    | 'skip-back'
    | 'skip-forward'
    | 'slack'
    | 'slash'
    | 'sliders'
    | 'smartphone'
    | 'smile'
    | 'speaker'
    | 'square'
    | 'star'
    | 'stop-circle'
    | 'sun'
    | 'sunrise'
    | 'sunset'
    | 'tablet'
    | 'tag'
    | 'target'
    | 'terminal'
    | 'thermometer'
    | 'thumbs-down'
    | 'thumbs-up'
    | 'toggle-left'
    | 'toggle-right'
    | 'tool'
    | 'trash'
    | 'trash-2'
    | 'trello'
    | 'trending-down'
    | 'trending-up'
    | 'triangle'
    | 'truck'
    | 'tv'
    | 'twitch'
    | 'twitter'
    | 'type'
    | 'umbrella'
    | 'underline'
    | 'unlock'
    | 'upload'
    | 'upload-cloud'
    | 'user'
    | 'user-check'
    | 'user-minus'
    | 'user-plus'
    | 'user-x'
    | 'users'
    | 'video'
    | 'video-off'
    | 'voicemail'
    | 'volume'
    | 'volume-1'
    | 'volume-2'
    | 'volume-x'
    | 'watch'
    | 'wifi'
    | 'wifi-off'
    | 'wind'
    | 'x'
    | 'x-circle'
    | 'x-octagon'
    | 'x-square'
    | 'youtube'
    | 'zap'
    | 'zap-off'
    | 'zoom-in'
    | 'zoom-out'

  export type AccessibilityTrait =
    | 'none'
    | 'button'
    | 'link'
    | 'header'
    | 'search'
    | 'image'
    | 'selected'
    | 'plays'
    | 'key'
    | 'text'
    | 'summary'
    | 'disabled'
    | 'frequentUpdates'
    | 'startsMedia'
    | 'adjustable'
    | 'allowsDirectInteraction'
    | 'pageTurn'

  export type TextProps = {
    accessible?: boolean
    accessibilityTraits?: AccessibilityTrait | AccessibilityTrait[]
    align?: 'left' | 'center' | 'right'
    color?: string | keyof Theme.Color
    numberOfLines?: number
    style?: StyleProp<TextStyle>
    weight?: keyof L.Fonts
  }

  export type ImageURISource = {
    /**
     * `uri` is a string representing the resource identifier for the image, which
     * could be an http address, a local file path, or the name of a static image
     * resource (which should be wrapped in the `require('./path/to/image.png')`
     * function).
     */
    uri?: string
    /**
     * `bundle` is the iOS asset bundle which the image is included in. This
     * will default to [NSBundle mainBundle] if not set.
     * @platform ios
     */
    bundle?: string
    /**
     * `method` is the HTTP Method to use. Defaults to GET if not specified.
     */
    method?: string
    /**
     * `headers` is an object representing the HTTP headers to send along with the
     * request for a remote image.
     */
    headers?: { [key: string]: string }
    /**
     * `cache` determines how the requests handles potentially cached
     * responses.
     *
     * - `default`: Use the native platforms default strategy. `useProtocolCachePolicy` on iOS.
     *
     * - `reload`: The data for the URL will be loaded from the originating source.
     * No existing cache data should be used to satisfy a URL load request.
     *
     * - `force-cache`: The existing cached data will be used to satisfy the request,
     * regardless of its age or expiration date. If there is no existing data in the cache
     * corresponding the request, the data is loaded from the originating source.
     *
     * - `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of
     * its age or expiration date. If there is no existing data in the cache corresponding
     * to a URL load request, no attempt is made to load the data from the originating source,
     * and the load is considered to have failed.
     *
     * @platform ios
     */
    cache?: 'default' | 'reload' | 'force-cache' | 'only-if-cached'
    /**
     * `body` is the HTTP body to send with the request. This must be a valid
     * UTF-8 string, and will be sent exactly as specified, with no
     * additional encoding (e.g. URL-escaping or base64) applied.
     */
    body?: string
    /**
     * `width` and `height` can be specified if known at build time, in which case
     * these will be used to set the default `<Image/>` component dimensions.
     */
    width?: number
    height?: number
    /**
     * `scale` is used to indicate the scale factor of the image. Defaults to 1.0 if
     * unspecified, meaning that one image pixel equates to one display point / DIP.
     */
    scale?: number
  }
  export type IconSource = string | ImageURISource | number
}
