# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.7.1](https://github.com/mlaursen/react-md/compare/v2.7.0...v2.7.1) (2021-03-23)


### Bug Fixes

* **@react-md/form:** `Select` correctly respects the `readOnly` prop ([d9a0262](https://github.com/mlaursen/react-md/commit/d9a0262d24eaac49127092f2b6df3eb71bdf8843)), closes [#1089](https://github.com/mlaursen/react-md/issues/1089)
* **@react-md/form:** `Select` correctly updates for the `dense` spec ([2930595](https://github.com/mlaursen/react-md/commit/29305959f0a128376895b6106700226856c7b78b)), closes [#1089](https://github.com/mlaursen/react-md/issues/1089)
* **@react-md/utils:** useTabFocusWrap when only one element ([25178d7](https://github.com/mlaursen/react-md/commit/25178d7c691e3e6fbb2ccaf93cf3c96a0e7c5380))
* **umd:** now correctly use production string for UMD bundles ([a9b78ad](https://github.com/mlaursen/react-md/commit/a9b78ad29807c0264b6ab0d99737eb8899501b33))


### Documentation

* **react-md.dev:** fixed build error after upgrading `next` ([1861731](https://github.com/mlaursen/react-md/commit/18617317d79f400865fbd249af23d4ba17e00b49))


### Other Internal Changes

* **@react-md/dev-utils:** GitHub release surrounds libsize in code block ([d3d122a](https://github.com/mlaursen/react-md/commit/d3d122a8c2ab7d4ebb14a09118f071b07601f5c4))
* **@react-md/utils:** Added a simple `useOnUnmount` hook ([96f3cc0](https://github.com/mlaursen/react-md/commit/96f3cc04beacacd3a5ffb64ce50c42646f7e9e7d))
* **react-md.dev:** fixed Demo name replacement ([70e60e1](https://github.com/mlaursen/react-md/commit/70e60e1b64325782abd10e8fbc044dcd2fda3a9b))
* **ts:** stopped using FC type ([c5daa47](https://github.com/mlaursen/react-md/commit/c5daa47d73516e075c036fd745e7228d7f155a62))
* **workflow:** added develop branch to workflow triggers ([c379ce3](https://github.com/mlaursen/react-md/commit/c379ce3ee13d1108f191e7da1c7760b55cc7d6d6))






# [2.7.0](https://github.com/mlaursen/react-md/compare/v2.6.0...v2.7.0) (2021-02-28)


### Bug Fixes

* **@react-md/alert:** fixed alert color when dark theme elevation is enabled ([99cc271](https://github.com/mlaursen/react-md/commit/99cc2710dbc9618b40595cd903697fed8e5651c0)), closes [#1075](https://github.com/mlaursen/react-md/issues/1075)
* **@react-md/card:** fixed card color when dark theme elevation is enabled ([e5da5f5](https://github.com/mlaursen/react-md/commit/e5da5f55de9b6fdd669b03157fbae38dd7f223cc)), closes [#1075](https://github.com/mlaursen/react-md/issues/1075)
* **@react-md/dialog:** fixed dialog color when dark theme elevation is enabled ([e79993d](https://github.com/mlaursen/react-md/commit/e79993d3b07072cf1c379677eea3f40b3e149eb7)), closes [#1075](https://github.com/mlaursen/react-md/issues/1075)
* **@react-md/form:** fixed listbox color when dark theme elevation is enabled ([b68ac04](https://github.com/mlaursen/react-md/commit/b68ac04e781787269293e5f63cc8032e2a4382f9)), closes [#1075](https://github.com/mlaursen/react-md/issues/1075)
* **@react-md/menu:** fixed menu color when dark theme elevation is enabled ([52c752d](https://github.com/mlaursen/react-md/commit/52c752d05a4a3cb3fb0119e213db7b58218fbfa9)), closes [#1075](https://github.com/mlaursen/react-md/issues/1075)
* **@react-md/sheet:** fixed sheet color when dark theme elevation is enabled ([0abe05e](https://github.com/mlaursen/react-md/commit/0abe05e8231f3dec3306e23e577b81505b94631f)), closes [#1075](https://github.com/mlaursen/react-md/issues/1075)


### Features

* **@react-md/layout:** added support for mini layouts ([36b3cbc](https://github.com/mlaursen/react-md/commit/36b3cbc02a059cae20d7495ff369570003bc0a47))
* **@react-md/utils:** added a low level `RadioGroup` widget for the radiogroup role ([76d6d27](https://github.com/mlaursen/react-md/commit/76d6d27d050b0d85a5dfa8e91fb55b0d0b7283cb))


### Documentation

* updated Used By/Requires SassDoc to be collapsible ([37a7536](https://github.com/mlaursen/react-md/commit/37a7536f7984ceea0d27244981d7caf01a265707))
* **@react-md/theme:** added additional dark-theme-elevation SassDoc examples ([172ee40](https://github.com/mlaursen/react-md/commit/172ee40e60ca687a6a35413afacab64654823ca0))
* **react-md.dev:** added information about Noninteractable Chips demo ([42e929b](https://github.com/mlaursen/react-md/commit/42e929b27f58432d498cb22d094d4e43433761bc))
* **react-md.dev:** updated layout demos for mini layout support ([1065688](https://github.com/mlaursen/react-md/commit/1065688482a627a7dc0557a8c9bf7b1b69586f82))
* **tsdoc:** fixed remaining tsdoc syntax warnings ([946f4dd](https://github.com/mlaursen/react-md/commit/946f4dddf380b9f2313fb76d54d969aa2adbff53))
* **tsdoc:** fixed some tsdoc annotations and styling ([0449b86](https://github.com/mlaursen/react-md/commit/0449b86e4e51793710b35a452b7ebcbb6e7b5b2e))
* **tsdoc:** updated \@since annotations ([c62027e](https://github.com/mlaursen/react-md/commit/c62027ebf2223167a2fde0378882e4b934d61971))


### Other Internal Changes

* updated test coverage to not include conditional component PropTypes ([24e5df1](https://github.com/mlaursen/react-md/commit/24e5df14c731411d7691253383435036326407b5))
* **@react-md/dev-utils:** release script will now automatically create github release ([83c2b65](https://github.com/mlaursen/react-md/commit/83c2b653ebbbf6fd164562c5518d26d2e4abfe12))
* **@react-md/utils:** added `tryToSubmitRelatedForm` util to help with additional a11y ([0566e14](https://github.com/mlaursen/react-md/commit/0566e1497f2ab6f23f7e5acb86464c37d3ee0d44))
* **@react-md/utils:** updated `loop` util to allow for a specific min value ([51bcf92](https://github.com/mlaursen/react-md/commit/51bcf92ebf0708531ecc4ae2abe42b957f299598))






# [2.6.0](https://github.com/mlaursen/react-md/compare/v2.5.5...v2.6.0) (2021-02-13)


### Bug Fixes

* **@react-md/layout:** floating layout has correct color in dark theme ([7fa6b0c](https://github.com/mlaursen/react-md/commit/7fa6b0c415b87aade6296b7c5083abe1e75abf24))
* **@react-md/layout:** toggleable layout title now aligns with persistent layouts ([8b8efb2](https://github.com/mlaursen/react-md/commit/8b8efb2ac6176975e4f3898956916350526487fa))


### Features

* **@react-md/chip:** added support for noninteractable chips ([9309985](https://github.com/mlaursen/react-md/commit/9309985a2efaafd731bbfb3e157d8b1443b297de)), closes [#1046](https://github.com/mlaursen/react-md/issues/1046)
* **@react-md/layout:** added prop to control toggleable layouts default visibility ([6e4a06d](https://github.com/mlaursen/react-md/commit/6e4a06db83d079bf67f75a1625e4375effd159b0)), closes [#1066](https://github.com/mlaursen/react-md/issues/1066)


### Documentation

* **react-md.dev:** slightly better search results ([0e3d3f7](https://github.com/mlaursen/react-md/commit/0e3d3f79bf71450f49cc67df88a56af0dde72359))


### Other Internal Changes

* **@react-md/divider:** updated test to use the correct act ([a621625](https://github.com/mlaursen/react-md/commit/a621625d7f6229fb91fea91b5c30e82e27a3f45c))
* **@react-md/link:** added new tests for `SkipToMainContent` ([3f6e866](https://github.com/mlaursen/react-md/commit/3f6e866bb0b97ec3a4be08dc9744592e9c8443cb))
* **@react-md/utils:** Added better dev display names for UserInteractionMode context parts ([01f6e3d](https://github.com/mlaursen/react-md/commit/01f6e3dbc91086b2c76099e8ba75f595480c8302))
* **@react-md/utils:** refactored UserInteractionMode hooks and components ([af72791](https://github.com/mlaursen/react-md/commit/af7279154bf8d5b4d4c8ee83e8e0815354e5eee0))
* **changelog:** fixed some more changelog/release behavior ([e11c0ea](https://github.com/mlaursen/react-md/commit/e11c0ea16e59167eb13746ad0160a8d00fb90ef1))
* **coverage:** fixed test coverage to include files without tests ([ba72630](https://github.com/mlaursen/react-md/commit/ba726304c4a9a55d5735b41faee8ad14449c07cb))






## [2.5.5](https://github.com/mlaursen/react-md/compare/v2.5.4...v2.5.5) (2021-01-30)

### Bug Fixes

- [@react-md/utils](./packages/utils): added missing classnames dependency
  ([8c34790](https://github.com/mlaursen/react-md/commit/8c347901167cd713bce178edf9e24f3c78b72e7e))

## [2.5.4](https://github.com/mlaursen/react-md/compare/v2.5.3...v2.5.4) (2021-01-27)

### Bug Fixes

- [@react-md/card](./packages/card): fixed the bordered background color when
  the dark elevation flag is enabled
  ([a9dd552](https://github.com/mlaursen/react-md/commit/a9dd5521d7eb58442bfc6110686d8f039b525e72)),
  closes [#1053](https://github.com/mlaursen/react-md/issues/1053)

## [2.5.3](https://github.com/mlaursen/react-md/compare/v2.5.2...v2.5.3) (2021-01-12)

### Bug Fixes

- [@react-md/form](./packages/form): fixed floating label behavior for
  `TextArea`
  ([80c22ba](https://github.com/mlaursen/react-md/commit/80c22ba841fc5370165d659a4c9b0e01a0f41017)),
  closes [#1043](https://github.com/mlaursen/react-md/issues/1043)
- [@react-md/layout](./packages/layout): Fixed scrollIntoView behavior for the
  layout tree
  ([4716c76](https://github.com/mlaursen/react-md/commit/4716c76cf98807de77ae7033206ec939230bf806))

## [2.5.2](https://github.com/mlaursen/react-md/compare/v2.5.1...v2.5.2) (2021-01-12)

### Bug Fixes

- **docs:** fixed some a11y issues in documentation site
  ([6fee23c](https://github.com/mlaursen/react-md/commit/6fee23c98fc931ef1d2b913aac6276e25afb0ab3))
- [@react-md/form](./packages/form): Added missing containerProps to `TextArea`
  ([695fd2a](https://github.com/mlaursen/react-md/commit/695fd2a589c0b2c8ebc4f17aa71a20346c4591e1))
- [@react-md/form](./packages/form): Fixed floating state for controlled text
  fields
  ([338d768](https://github.com/mlaursen/react-md/commit/338d76823eea919b3cca3689119306a73002f4f2)),
  closes [#1043](https://github.com/mlaursen/react-md/issues/1043)

## [2.5.1](https://github.com/mlaursen/react-md/compare/v2.5.0...v2.5.1) (2020-12-16)

### Bug Fixes

- [@react-md/list](./packages/list): fixed list icon spacing to work with sass
  ([369c206](https://github.com/mlaursen/react-md/commit/369c2066909176b5c5c8611f211cf129b60912c9)),
  closes [#1015](https://github.com/mlaursen/react-md/issues/1015)

# [2.5.0](https://github.com/mlaursen/react-md/compare/v2.4.3...v2.5.0) (2020-12-15)

### Bug Fixes

- [@react-md/form](./packages/form): better blur error cases for
  `useNumberField`
  ([8b927ab](https://github.com/mlaursen/react-md/commit/8b927ab93ddb5256d384c626c048748262a34642))
- [@react-md/form](./packages/form): fixed `FormMessage` counter prop-type
  validation
  ([9ece3e1](https://github.com/mlaursen/react-md/commit/9ece3e1199342a972d7079bd36de7f0ab849fc6c))
- [@react-md/form](./packages/form): fixed `messageProps` error from react when
  `disableMessage` is enabled
  ([e452aff](https://github.com/mlaursen/react-md/commit/e452aff2fd5bd8f8b75769a6a38bbe5378214be6))
- [@react-md/form](./packages/form): Floating Label for controlled value Invalid
  numbers
  ([ef1d764](https://github.com/mlaursen/react-md/commit/ef1d76461047b75ae771c442a3f721286a3542a2))
- [@react-md/form](./packages/form): Maintain Floating Label for Invalid Numbers
  ([2443f9a](https://github.com/mlaursen/react-md/commit/2443f9abb459f9100812c37793d3de2ddbcf36c2))
- [@react-md/form](./packages/form): More fixes for number inputs being
  considered valued
  ([1832e69](https://github.com/mlaursen/react-md/commit/1832e697b1eafddec82a9e2dcccc62acc35c6285))
- [@react-md/form](./packages/form): updated `TextField` `PropTypes` to allow
  for search input type
  ([23d92dd](https://github.com/mlaursen/react-md/commit/23d92dd8449588ba5ea1a2ee99fdbf4de0e7995e))
- [@react-md/utils](./packages/utils): `GridCell` now correctly uses
  `largeDesktop` when desktop is also provided
  ([fd26b8b](https://github.com/mlaursen/react-md/commit/fd26b8b64bc20fd78e3f366208f690b38a2dfa29))
- [@react-md/utils](./packages/utils): nearest ensures min and max range for
  value
  ([48181b3](https://github.com/mlaursen/react-md/commit/48181b3a6b8efa311b97152c1bcf989d7f0a9ba3))
- [@react-md/utils](./packages/utils): updated nearest to support a custom range
  for sliders
  ([6cfc67e](https://github.com/mlaursen/react-md/commit/6cfc67e728059cc36aa71d942f5966f4371125a3))

### Features

- [@react-md/form](./packages/form): added a new `useTextField` hook to validate
  the `TextField` and `TextArea` values
  ([578257c](https://github.com/mlaursen/react-md/commit/578257c6cf0d875a57a8d16fe8f5fcaf4a6cdc2b))
- [@react-md/form](./packages/form): added a number-recommended type for
  validation
  ([18c772e](https://github.com/mlaursen/react-md/commit/18c772e48ff8eedba3d1030a708cb3729afabac7))
- [@react-md/form](./packages/form): added a `PasswordWithMessage` component to
  be used with `useTextField` Hook
  ([f6d84f2](https://github.com/mlaursen/react-md/commit/f6d84f2bf1631b3d0ddf23bbafa6b7845bf892a1))
- [@react-md/form](./packages/form): added a `TextAreaWithMessage` component to
  be used with `useTextField` Hook
  ([e358799](https://github.com/mlaursen/react-md/commit/e358799379f1a0633b3d7643c37035cba81e4885))
- [@react-md/form](./packages/form): added a `TextFieldWithMessage` component to
  be used with `useTextField` Hook
  ([f2d7e5d](https://github.com/mlaursen/react-md/commit/f2d7e5d495fe3f117bca689b25ace095bb600ffe))
- [@react-md/form](./packages/form): added a `useNumberField` hook to control
  number field values
  ([c705f2c](https://github.com/mlaursen/react-md/commit/c705f2c41fa3a6add76a9ef6d3e93f4f9aaeac13))
- [@react-md/form](./packages/form): better defaults for validation
  ([4003a07](https://github.com/mlaursen/react-md/commit/4003a07cb3396f50268bb50ac108a11d50f41a45))
- [@react-md/icon](./packages/icon): added an error icon to the `IconProvider`
  Component and `useIcon` Hook
  ([4dfd50a](https://github.com/mlaursen/react-md/commit/4dfd50a3c41d450b88ff2f417b27113724813bb3))
- [@react-md/icon](./packages/icon): added `flexReverse` prop to
  `TextIconSpacing`
  ([c4ee05b](https://github.com/mlaursen/react-md/commit/c4ee05b1d0f8b8f6ed4de51f904dce2995787b81))
- [@react-md/utils](./packages/utils): added a `withinRange` util for number
  validation
  ([e8fb252](https://github.com/mlaursen/react-md/commit/e8fb2529a63572b1654bd5aa6a12b6fc12d20b50))
- [@react-md/utils](./packages/utils): changed the default `@include` order for
  easier overrides
  ([4705b09](https://github.com/mlaursen/react-md/commit/4705b098ada805c9fb3a48ffa1b6e93ad3bc6fd9))

## [2.4.3](https://github.com/mlaursen/react-md/compare/v2.4.2...v2.4.3) (2020-11-14)

### Bug Fixes

- [@react-md/list](./packages/list): fixed `ListItem` disabled colors to
  optionally include addons
  ([a40b6b3](https://github.com/mlaursen/react-md/commit/a40b6b3f4b25c5c8e714081ebeb147ccf019ac01)),
  closes [#997](https://github.com/mlaursen/react-md/issues/997)
- [@react-md/list](./packages/list): `ListItem` no longer focusable by default
  when disabled
  ([06e91ca](https://github.com/mlaursen/react-md/commit/06e91cafd91a2b666d728acf134c0652696715c9)),
  closes [#997](https://github.com/mlaursen/react-md/issues/997)
- **sandbox:** fixed missing versions for sandboxes
  ([09c97ee](https://github.com/mlaursen/react-md/commit/09c97ee835cea7dc4a219d29e58f62457921c9bf))
- **sandbox:** fixed sandboxes that have additional files
  ([f45aab1](https://github.com/mlaursen/react-md/commit/f45aab105eb86f4a328b0438bd26b10cb2593eff))

## [2.4.2](https://github.com/mlaursen/react-md/compare/v2.4.1...v2.4.2) (2020-10-23)

### Bug Fixes

- [@react-md/menu](./packages/menu): fixed DropdownMenu not being able to
  provide style and className to Menu
  ([7823fea](https://github.com/mlaursen/react-md/commit/7823fea2ff2979792942534b0bc6cf753bd5ac9a)),
  closes [#989](https://github.com/mlaursen/react-md/issues/989)

## [2.4.1](https://github.com/mlaursen/react-md/compare/v2.4.0...v2.4.1) (2020-10-17)

- this is a re-release of v2.4.0 to ensure that all the themes are created
  correctly for CDNs

# [2.4.0](https://github.com/mlaursen/react-md/compare/v2.3.1...v2.4.0) (2020-10-17)

### Bug Fixes

- [@react-md/form](./packages/form): added missing scss variables
  ([ec8d675](https://github.com/mlaursen/react-md/commit/ec8d675c5436e92245ea0a8d07b35345ad30794c))
- [@react-md/states](./packages/states): fixed usedPressStates to pass onClick
  like other state hooks
  ([82cd676](https://github.com/mlaursen/react-md/commit/82cd67695c2ecd6e9a710d5fbfce97ae4dfeda80))
- [@react-md/table](./packages/table): table border color uses hex values to fix
  chrome colSpan rendering issue
  ([#982](https://github.com/mlaursen/react-md/issues/982))
  ([2138284](https://github.com/mlaursen/react-md/commit/213828454b15cee8d257ee82182e5869127f7661))

### Features

- **a11y:** improved `LabelRequiredForA11y` type definition
  ([b7aa4fa](https://github.com/mlaursen/react-md/commit/b7aa4fadb7b4f1a23fba4008e42d2f4a4bd47c07))
- [@react-md/alert](./packages/alert): created and exported the default timeout
  and classnames
  ([32bacc9](https://github.com/mlaursen/react-md/commit/32bacc9000ea7c9633e437ce6eabb27606c7d7f0))
- [@react-md/button](./packages/button): added built-in support for rendering
  `CircularProgress`
  ([c6c616b](https://github.com/mlaursen/react-md/commit/c6c616b72866cc1533b7f83c4d9f031354319dfc))
- [@react-md/button](./packages/button): added support for disabled theme
  without disabling button
  ([6a647e2](https://github.com/mlaursen/react-md/commit/6a647e23831c7b3c97eb12baa47dfd5dd074271a))
- **examples:** added a simple umd example to show CDN usage
  ([ed6b62e](https://github.com/mlaursen/react-md/commit/ed6b62e169fd92ca9870be85cb6794d5e0fea2e5))
- [@react-md/form](./packages/form): updated `TextArea` to use the new
  useResizeObserver API
  ([2c2dd27](https://github.com/mlaursen/react-md/commit/2c2dd27576aeeecb2baba12ef616af45197037db))
- **grid:** added hook to access grid list size
  ([a448816](https://github.com/mlaursen/react-md/commit/a44881602de57447e9cb5ba720f5f2c031936863))
- **grid:** added new `cloneStyles` prop so grid styles can be applied to any
  child
  ([ca913e7](https://github.com/mlaursen/react-md/commit/ca913e75926a6d665c6aeed56faa292d201a5287))
- [@react-md/overlay](./packages/overlay): created and exported the default
  timeout and classnames
  ([48cd9d5](https://github.com/mlaursen/react-md/commit/48cd9d584342d2050ce154755ca7927cd9f90a72))
- [@react-md/progress](./packages/progress): added a `small` state to the
  `CircularProgress`
  ([6884a3a](https://github.com/mlaursen/react-md/commit/6884a3ab762216313330dfb01f386c87a5cd5b88))
- [@react-md/tabs](./packages/tabs): updated tabs to use the new resize observer
  API
  ([052b3f2](https://github.com/mlaursen/react-md/commit/052b3f25db47077c53091bd1fb63f3e0b56a7fee))
- [@react-md/theme](./packages/theme): Better Contrast Colors by Default and
  dev-utils refactor ([#955](https://github.com/mlaursen/react-md/issues/955))
  ([519b128](https://github.com/mlaursen/react-md/commit/519b128522de944d55ff96a1e1125447665ed586))
- **themes:** updated sandboxes to use new CDN for pre-compiled themes
  ([e83f47e](https://github.com/mlaursen/react-md/commit/e83f47edb7401a81af6e3669745815cb85f565a8))
- [@react-md/tree](./packages/tree): updated defaultTreeItemRenderer for class
  names
  ([3c61f3c](https://github.com/mlaursen/react-md/commit/3c61f3cd77764e32de6e093bc61813a6b9e45c6f)),
  closes [#920](https://github.com/mlaursen/react-md/issues/920)
- [@react-md/utils](./packages/utils): added `Dir` component to help determine
  current writing direction
  ([a929e04](https://github.com/mlaursen/react-md/commit/a929e04b20bf41c3bff109714d9cf850bac99eb3))
- [@react-md/utils](./packages/utils): added `useGridList` hook
  ([56ecc19](https://github.com/mlaursen/react-md/commit/56ecc19d748e3c63b6d27180ceedb385364fba43))
- [@react-md/utils](./packages/utils): added useIsomorphicLayoutEffect from
  react-redux
  ([deacf1c](https://github.com/mlaursen/react-md/commit/deacf1c01f62adebbfbfbb3f0d5709cdab0cc537))
- [@react-md/utils](./packages/utils): created a new useResizeObserver
  implementation
  ([dc3f4df](https://github.com/mlaursen/react-md/commit/dc3f4df744e4357c21e527986f4b762351345dfe))
- [@react-md/utils](./packages/utils): more verbose useAppSize usage error
  message
  ([2c81982](https://github.com/mlaursen/react-md/commit/2c81982c6aef1a28c774b5b8263b141a44ab0949))

## [2.3.1](https://github.com/mlaursen/react-md/compare/v2.2.0...v2.3.1) (2020-09-15)

**Note:** Version bump only for all packages.

# [2.3.0](https://github.com/mlaursen/react-md/compare/v2.2.0...v2.3.0) (2020-09-10)

### Bug Fixes

- [@react-md/form](./packages/form): added missing scss variables
  ([ec8d675](https://github.com/mlaursen/react-md/commit/ec8d675c5436e92245ea0a8d07b35345ad30794c))
- [@react-md/states](./packages/states): fixed usedPressStates to pass onClick
  like other state hooks
  ([82cd676](https://github.com/mlaursen/react-md/commit/82cd67695c2ecd6e9a710d5fbfce97ae4dfeda80))

### Features

- **a11y:** improved `LabelRequiredForA11y` type definition
  ([b7aa4fa](https://github.com/mlaursen/react-md/commit/b7aa4fadb7b4f1a23fba4008e42d2f4a4bd47c07))
- [@react-md/alert](./packages/alert): created and exported the default timeout
  and classnames
  ([32bacc9](https://github.com/mlaursen/react-md/commit/32bacc9000ea7c9633e437ce6eabb27606c7d7f0))
- [@react-md/button](./packages/button): added built-in support for rendering
  `CircularProgress`
  ([c6c616b](https://github.com/mlaursen/react-md/commit/c6c616b72866cc1533b7f83c4d9f031354319dfc))
- [@react-md/button](./packages/button): added support for disabled theme
  without disabling button
  ([6a647e2](https://github.com/mlaursen/react-md/commit/6a647e23831c7b3c97eb12baa47dfd5dd074271a))
- **examples:** added a simple umd example to show CDN usage
  ([ed6b62e](https://github.com/mlaursen/react-md/commit/ed6b62e169fd92ca9870be85cb6794d5e0fea2e5))
- [@react-md/form](./packages/form): updated `TextArea` to use the new
  useResizeObserver API
  ([2c2dd27](https://github.com/mlaursen/react-md/commit/2c2dd27576aeeecb2baba12ef616af45197037db))
- **grid:** added hook to access grid list size
  ([a448816](https://github.com/mlaursen/react-md/commit/a44881602de57447e9cb5ba720f5f2c031936863))
- **grid:** added new `cloneStyles` prop so grid styles can be applied to any
  child
  ([ca913e7](https://github.com/mlaursen/react-md/commit/ca913e75926a6d665c6aeed56faa292d201a5287))
- [@react-md/overlay](./packages/overlay): created and exported the default
  timeout and classnames
  ([48cd9d5](https://github.com/mlaursen/react-md/commit/48cd9d584342d2050ce154755ca7927cd9f90a72))
- [@react-md/progress](./packages/progress): added a `small` state to the
  `CircularProgress`
  ([6884a3a](https://github.com/mlaursen/react-md/commit/6884a3ab762216313330dfb01f386c87a5cd5b88))
- [@react-md/tabs](./packages/tabs): updated tabs to use the new resize observer
  API
  ([052b3f2](https://github.com/mlaursen/react-md/commit/052b3f25db47077c53091bd1fb63f3e0b56a7fee))
- **themes:** updated sandboxes to use new CDN for pre-compiled themes
  ([e83f47e](https://github.com/mlaursen/react-md/commit/e83f47edb7401a81af6e3669745815cb85f565a8))
- [@react-md/tree](./packages/tree): updated defaultTreeItemRenderer for class
  names
  ([3c61f3c](https://github.com/mlaursen/react-md/commit/3c61f3cd77764e32de6e093bc61813a6b9e45c6f)),
  closes [#920](https://github.com/mlaursen/react-md/issues/920)
- [@react-md/utils](./packages/utils): added `Dir` component to help determine
  current writing direction
  ([a929e04](https://github.com/mlaursen/react-md/commit/a929e04b20bf41c3bff109714d9cf850bac99eb3))
- [@react-md/utils](./packages/utils): added `useGridList` hook
  ([56ecc19](https://github.com/mlaursen/react-md/commit/56ecc19d748e3c63b6d27180ceedb385364fba43))
- [@react-md/utils](./packages/utils): added useIsomorphicLayoutEffect from
  react-redux
  ([deacf1c](https://github.com/mlaursen/react-md/commit/deacf1c01f62adebbfbfbb3f0d5709cdab0cc537))
- [@react-md/utils](./packages/utils): created a new useResizeObserver
  implementation
  ([dc3f4df](https://github.com/mlaursen/react-md/commit/dc3f4df744e4357c21e527986f4b762351345dfe))
- [@react-md/utils](./packages/utils): more verbose useAppSize usage error
  message
  ([2c81982](https://github.com/mlaursen/react-md/commit/2c81982c6aef1a28c774b5b8263b141a44ab0949))

## [2.2.2](https://github.com/mlaursen/react-md/compare/v2.2.1...v2.2.2) (2020-09-02)

**Note:** Version bump only for package react-md

## [2.2.1](https://github.com/mlaursen/react-md/compare/v2.2.0...v2.2.1) (2020-09-02)

**Note:** Version bump only for package react-md

# [2.2.0](https://github.com/mlaursen/react-md/compare/v2.1.2...v2.2.0) (2020-08-11)

### Bug Fixes

- **listbox:** render `0` as a valid display value
  ([d02b7a9](https://github.com/mlaursen/react-md/commit/d02b7a9042786e4d4c4a46d286b62e6d80afc621))

### Features

- [@react-md/avatar](./packages/avatar): Added ability to pass props to `<img>`
  ([11848ee](https://github.com/mlaursen/react-md/commit/11848ee80b5aca0416ea3e0f4812746dd47d90b7)),
  closes [#908](https://github.com/mlaursen/react-md/issues/908)
- [@react-md/form](./packages/form): Added props to style `Checkbox` and `Radio`
  input element
  ([b6d2318](https://github.com/mlaursen/react-md/commit/b6d23186b7355bacc198d5187d50c10a7186f4ca))
- [@react-md/form](./packages/form): Updated toggle inactive and active colors
  to be configurable
  ([49319e6](https://github.com/mlaursen/react-md/commit/49319e65e7bf29380469b567b893a3cc775b2720))

## [2.1.2](https://github.com/mlaursen/react-md/compare/v2.1.1...v2.1.2) (2020-08-01)

### Bug Fixes

- [@react-md/transition](./packages/transition): `useCSSTransition` now
  correctly forwards refs
  ([36f832f](https://github.com/mlaursen/react-md/commit/36f832f82ada222f337d413a7044d055d5a57d58))

### Reverts

- Revert "chore(deps-dev): bump eslint-plugin-react from 7.20.3 to 7.20.4
  (#893)"
  ([4db7c31](https://github.com/mlaursen/react-md/commit/4db7c317b707e21ac5b170c1eca20c82c8e9b47f)),
  closes [#893](https://github.com/mlaursen/react-md/issues/893)

## [2.1.1](https://github.com/mlaursen/react-md/compare/v2.1.0...v2.1.1) (2020-07-21)

### Bug Fixes

- [@react-md/theme](./packages/theme): Fixed `rmd-theme-get-swatch` to loop over
  all `rmd-theme-colors` instead of the primaries only
  ([353de23](https://github.com/mlaursen/react-md/commit/353de2368f9aad74add60559bb6489692b1e2c62)),
  closes [#884](https://github.com/mlaursen/react-md/issues/884)

# [2.1.0](https://github.com/mlaursen/react-md/compare/v2.0.4...v2.1.0) (2020-07-12)

### Bug Fixes

- `AppBar` text color now defaults to
  `rmd-theme-var(text-primary-on-background)`
  ([2c3ea5e](https://github.com/mlaursen/react-md/commit/2c3ea5e984b033b05098d01499a41a24790b639c))
- Booleans in `dist/scssVariables`
  ([f6d43a3](https://github.com/mlaursen/react-md/commit/f6d43a31a13647e0b92c256975652913fb8bb34e))
- `ListItem` disabled states
  ([7b37292](https://github.com/mlaursen/react-md/commit/7b372926289d0c1cdab76dbea9cb298e7594dfa9))
- Scroll active element into view while focusing
  ([a9a0902](https://github.com/mlaursen/react-md/commit/a9a090268f8aecb8b7478dc3fb6c06eec346c62a))
- `Tree` focused index after expanding all with asterisk
  ([8547629](https://github.com/mlaursen/react-md/commit/854762991dfab43a89191ee29cd2acc7e43ec236))
- `Tree` keyboard movement for child items that are expanded
  ([fadddc7](https://github.com/mlaursen/react-md/commit/fadddc7798be9179a9db8a937455b9d989e38c79))
- `Tree` scrolling elements into view
  ([eef48dc](https://github.com/mlaursen/react-md/commit/eef48dcc547dae6146a3b2fd04c7a2ad13043036))

### Features

- Added new mixin for optional css-modules
  ([28ba828](https://github.com/mlaursen/react-md/commit/28ba8281489ddfa794a61749cb32817a9bd64311))
- Exported the `useAutoComplete` hook
  ([cac5cd1](https://github.com/mlaursen/react-md/commit/cac5cd16a1452130ba600833c8ad1180d7ec4918))
- Improved Dark Mode using Raising Elevation
  ([547877c](https://github.com/mlaursen/react-md/commit/547877c51217a544fdaad9c77e2469a45f30336e)),
  closes [#860](https://github.com/mlaursen/react-md/issues/860)
- Render non-searchable items in `AutoComplete`
  ([e7a82ac](https://github.com/mlaursen/react-md/commit/e7a82acf874f46b56e8427cdb389ff1f18f12927))

## [2.0.4](https://github.com/mlaursen/react-md/compare/v2.0.3...v2.0.4) (2020-07-10)

### Bug Fixes

- Added [@react-md/form](./packages/form) as a dependency to
  [@react-md/layout](./packages/layout)
  ([e83b296](https://github.com/mlaursen/react-md/commit/e83b2969b38e012d27eac27b69fce506497aa79b))

## [2.0.3](https://github.com/mlaursen/react-md/compare/v2.0.2...v2.0.3) (2020-07-07)

### Bug Fixes

- [@react-md/form](./packages/form): `Select` disabled styling
  ([d79d007](https://github.com/mlaursen/react-md/commit/d79d0079307ccc735ebac0730d1d45aabe1419bd))
- [@react-md/form](./packages/form): `TextArea` disabled styles
  ([ef118bf](https://github.com/mlaursen/react-md/commit/ef118bf325e68e9ae8c988f9f93a1e19e1468084))
- [@react-md/form](./packages/form): `TextField` and `Select` disabled behavior
  ([e8f2c57](https://github.com/mlaursen/react-md/commit/e8f2c579a1ee502674bfddbcc10713d4b50d7cc4))

## [2.0.2](https://github.com/mlaursen/react-md/compare/v2.0.1...v2.0.2) (2020-06-30)

### Bug Fixes

- Main `README` `Layout` example
  ([bcc8405](https://github.com/mlaursen/react-md/commit/bcc84056351821fb55cc21327de191f65fe7958a))
- **LICENSE:** Removed the time range from license since it was incorrect
  ([50c9021](https://github.com/mlaursen/react-md/commit/50c9021cedc0d642758b9fd541bb6c93d2fe1786))
- Added `sideEffects` field to `package.json`
  ([31820b9](https://github.com/mlaursen/react-md/commit/31820b9b43705e5849664500a17b6849eb6dc2a9))
- Added unpkg url for base react-md package
  ([d0efc59](https://github.com/mlaursen/react-md/commit/d0efc59aed0b0ccaa9acadb4e8cf8037bad1f3b3))
- `sideEffects` formatting
  ([78a7b6b](https://github.com/mlaursen/react-md/commit/78a7b6b0e40c7daefb749835670705f21bd21720))

The combined changelog for this project is available on the
[documentation site's blog](https://react-md.dev/blog) as well as on the
[GitHub releases page](https://github.com/mlaursen/react-md/releases). However,
since this project uses scoped packages, you can check out each individual
changelog as well which are linked below:

- [@react-md/alert](./packages/alert/CHANGELOG.md)
- [@react-md/app-bar](./packages/app-bar/CHANGELOG.md)
- [@react-md/autocomplete](./packages/autocomplete/CHANGELOG.md)
- [@react-md/avatar](./packages/avatar/CHANGELOG.md)
- [@react-md/badge](./packages/badge/CHANGELOG.md)
- [@react-md/button](./packages/button/CHANGELOG.md)
- [@react-md/card](./packages/card/CHANGELOG.md)
- [@react-md/chip](./packages/chip/CHANGELOG.md)
- [@react-md/dialog](./packages/dialog/CHANGELOG.md)
- [@react-md/divider](./packages/divider/CHANGELOG.md)
- [@react-md/elevation](./packages/elevation/CHANGELOG.md)
- [@react-md/expansion-panel](./packages/expansion-panel/CHANGELOG.md)
- [@react-md/form](./packages/form/CHANGELOG.md)
- [@react-md/icon](./packages/icon/CHANGELOG.md)
- [@react-md/layout](./packages/layout/CHANGELOG.md)
- [@react-md/link](./packages/link/CHANGELOG.md)
- [@react-md/list](./packages/list/CHANGELOG.md)
- [@react-md/material-icons](./packages/material-icons/CHANGELOG.md)
- [@react-md/media](./packages/media/CHANGELOG.md)
- [@react-md/menu](./packages/menu/CHANGELOG.md)
- [@react-md/overlay](./packages/overlay/CHANGELOG.md)
- [@react-md/portal](./packages/portal/CHANGELOG.md)
- [@react-md/progress](./packages/progress/CHANGELOG.md)
- [@react-md/sheet](./packages/sheet/CHANGELOG.md)
- [@react-md/states](./packages/states/CHANGELOG.md)
- [@react-md/table](./packages/table/CHANGELOG.md)
- [@react-md/tabs](./packages/tabs/CHANGELOG.md)
- [@react-md/theme](./packages/theme/CHANGELOG.md)
- [@react-md/tooltip](./packages/tooltip/CHANGELOG.md)
- [@react-md/transition](./packages/transition/CHANGELOG.md)
- [@react-md/tree](./packages/tree/CHANGELOG.md)
- [@react-md/typography](./packages/typography/CHANGELOG.md)
- [@react-md/utils](./packages/utils/CHANGELOG.md)
