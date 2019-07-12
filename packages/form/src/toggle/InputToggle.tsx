import React, {
  CSSProperties,
  FC,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import cn from "classnames";
import {
  InteractionStatesOptions,
  useInteractionStates,
} from "@react-md/states";
import { bem } from "@react-md/theme";
import { Omit, WithForwardedRef } from "@react-md/utils";

import useFocusState from "../useFocusState";
import Label from "../label/Label";

import ToggleContainer from "./ToggleContainer";

/**
 * The props for a checkbox or radio input element.
 *
 * Note: The `readOnly` attribute is not valid for these input types since they
 * update the `checked` property while `readOnly` is specific to `value` itself.
 */
export interface InputToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "readOnly">,
    Pick<
      InteractionStatesOptions,
      | "rippleTimeout"
      | "disableRipple"
      | "disableProgrammaticRipple"
      | "disablePressedFallback"
      | "rippleClassNames"
    > {
  /**
   * The id for the radio or checkbox. This is required for a11y and will
   * be used as the `for` attribute if the `label` prop is provided.
   */
  id: string;

  /**
   * The icon to use for either a radio or a checkbox.
   */
  icon?: ReactNode;

  /**
   * An optional style to apply to the `<span>` surrounding the toggle icon.
   */
  iconStyle?: CSSProperties;

  /**
   * An optional className to apply to the `<span>` surrounding the toggle icon.
   */
  iconClassName?: string;

  /**
   * An optional style to apply to the toggle `<span>` element. The `style` prop will
   * be applied to the container `<div>` element instead.
   */
  toggleStyle?: CSSProperties;

  /**
   * An optional className to apply to the toggle `<span>` element. The `className` prop will
   * be applied to the container `<div>` element instead.
   */
  toggleClassName?: string;

  /**
   * Boolean if the icon's overlay should be disabled. The way the Checkbox and Radio input
   * elements work is by applying different opacity to the `::before` and `::after` pseudo
   * selectors and animating it. If you want to use a custom icon that is not a material-icon
   * checkbox outline or radio button, you should probably enable this prop.
   */
  disableIconOverlay?: boolean;

  /**
   * Boolean if the input toggle is currently errored. This will update the label and the
   * input to gain error colors.
   */
  error?: boolean;

  /**
   * Boolean if the container element should be rendered as `inline-flex` instead of `flex`.
   */
  inline?: boolean;

  /**
   * Boolean if the label should be stacked above/below the input toggle instead of inline.
   */
  stacked?: boolean;

  /**
   * An optional label to display with the input. If this prop is omitted, you **should** apply
   * an `aria-label` or `aria-labelledby` for a11y.
   */
  label?: ReactNode;

  /**
   * An optional style to apply to the `<label>` when the `label` prop is used.
   */
  labelStyle?: CSSProperties;

  /**
   * An optional className to apply to the `<label>` when the `label` prop is used.
   */
  labelClassName?: string;

  /**
   * An optional boolean if the label should gain the disabled style. When this is `undefined`,
   * the `disabled` prop will be used instead. This is really just useful when you want to disable
   * the switch from being toggled while some async action is being called, but not changing styles
   * during the wait.
   */
  labelDisabled?: boolean;

  /**
   * Boolean if the input toggle should appear after the label instead of before.
   */
  iconAfter?: boolean;

  /**
   * Optional content to render after the icon element.
   */
  children?: ReactNode;
}

type Props = InputToggleProps & { type: "radio" | "checkbox" };
type WithRef = WithForwardedRef<HTMLInputElement>;
type DefaultProps = Required<
  Pick<
    Props,
    | "error"
    | "disabled"
    | "inline"
    | "stacked"
    | "iconAfter"
    | "disableIconOverlay"
  >
>;
type WithDefaultProps = Props & DefaultProps & WithRef;

const block = bem("rmd-toggle");

const InputToggle: FC<Props & WithRef> = providedProps => {
  const {
    style,
    className,
    iconStyle,
    iconClassName,
    toggleStyle,
    toggleClassName: propToggleClassName,
    icon,
    forwardedRef,
    onFocus: propOnFocus,
    onBlur: propOnBlur,
    error,
    inline,
    stacked,
    label,
    labelStyle,
    labelClassName,
    labelDisabled,
    iconAfter,
    disableIconOverlay,
    disableRipple,
    disableProgrammaticRipple,
    rippleTimeout,
    rippleClassNames,
    children,
    ...props
  } = providedProps as WithDefaultProps;
  const { id, type, disabled } = props;

  const {
    ripples,
    handlers,
    className: toggleClassName,
  } = useInteractionStates({
    handlers: props,
    disabled,
    className: propToggleClassName,
    disableRipple,
    disableProgrammaticRipple,
    rippleTimeout,
    rippleClassNames,
  });
  const [focused, onFocus, onBlur] = useFocusState({
    onFocus: propOnFocus,
    onBlur: propOnBlur,
  });

  const labelEl = (
    <Label
      style={labelStyle}
      className={labelClassName}
      htmlFor={id}
      error={error}
      disabled={typeof labelDisabled === "boolean" ? labelDisabled : disabled}
    >
      {label}
    </Label>
  );

  return (
    <ToggleContainer
      style={style}
      className={className}
      inline={inline}
      stacked={stacked}
    >
      {iconAfter && labelEl}
      <span
        style={toggleStyle}
        className={cn(
          block({
            focused,
            disabled,
          }),
          toggleClassName
        )}
      >
        <input
          {...props}
          {...handlers}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={forwardedRef}
          className={block("input")}
        />
        <span
          style={iconStyle}
          className={cn(
            block("icon", {
              circle: !disableIconOverlay && type === "radio",
              disabled,
              overlay: !disableIconOverlay,
            }),
            iconClassName
          )}
        >
          {icon}
        </span>
        {ripples}
        {children}
      </span>
      {!iconAfter && labelEl}
    </ToggleContainer>
  );
};

const defaultProps: DefaultProps = {
  error: false,
  inline: false,
  stacked: false,
  disabled: false,
  iconAfter: false,
  disableIconOverlay: false,
};

InputToggle.defaultProps = defaultProps;

if (process.env.NODE_ENV !== "production") {
  InputToggle.displayName = "InputToggle";

  let PropTypes = null;
  try {
    PropTypes = require("prop-types");
  } catch (e) {}

  if (PropTypes) {
    InputToggle.propTypes = {
      id: PropTypes.string.isRequired,
      icon: PropTypes.node,
      iconStyle: PropTypes.object,
      iconClassName: PropTypes.string,
      toggleStyle: PropTypes.object,
      toggleClassName: PropTypes.string,
      error: PropTypes.bool,
      label: PropTypes.node,
      inline: PropTypes.bool,
      stacked: PropTypes.bool,
      disabled: PropTypes.bool,
      iconAfter: PropTypes.bool,
      disableIconOverlay: PropTypes.bool,
    };
  }
}

export default forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputToggle {...props} forwardedRef={ref} />
));
