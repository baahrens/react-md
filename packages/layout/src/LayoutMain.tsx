import React, { forwardRef, HTMLAttributes, useCallback } from "react";
import cn from "classnames";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import { DEFAULT_SHEET_TIMEOUT } from "@react-md/sheet";
import { TransitionTimeout, useCSSTransition } from "@react-md/transition";
import { applyRef, bem, useIsUserInteractionMode } from "@react-md/utils";

import { DEFAULT_LAYOUT_MAIN_CLASS_NAMES } from "./constants";
import { useLayoutConfig } from "./LayoutProvider";
import { isTemporaryLayout } from "./utils";

export interface LayoutMainProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The component to render the main element as. This should normally stay as
   * the default of `"main"`, but if you want to have multiple `Layout` on the
   * page for some reason, you'll need to use `"div"` for the other `Layout`s
   * since you can only have one `<main>` per page (unless you set the `hidden`
   * attribute on all the others).
   */
  component?: "div" | "main";

  /**
   * Boolean if the main element should be offset by the current navigation
   * tree's width.
   */
  navOffset?: boolean;

  /**
   * Boolean if the main element should be ofset by the `AppBar`'s height
   */
  headerOffset?: boolean;

  /**
   * The transition timeout to use for the toggleable `LayoutNavigation` either
   * comes into view or expands from mini to full-width. The transition can be
   * disabled by setting this value to `0`.
   */
  timeout?: TransitionTimeout;

  /**
   * The transition classnames to use for the toggleable `LayoutNavigation`
   * either comes into view or expands from mini to full-width.
   */
  classNames?: CSSTransitionClassNames;
}

const styles = bem("rmd-layout-main");

/**
 * This is the `<main>` element for your app that has some built in styles to be
 * able to update based on the current layout types.
 */
const LayoutMain = forwardRef<HTMLDivElement, LayoutMainProps>(
  function LayoutMain(
    {
      className: propClassName,
      tabIndex: propTabIndex,
      component: Component = "main",
      navOffset: propNavOffset,
      headerOffset = false,
      timeout = DEFAULT_SHEET_TIMEOUT,
      classNames = DEFAULT_LAYOUT_MAIN_CLASS_NAMES,
      ...props
    },
    forwardedRef
  ) {
    // this makes it so that the SkipToMainContent button can still
    // focus the `<main>` element, but the `<main>` will no longer be
    // focused if the user clicks inside. This is super nice since one
    // of my bigger patterns is to click somewhere then press tab to
    // focus a specific element. Without this fix, the first element in
    // the `<main>` tag would be focused instead of the closest focusable
    // element to the click area.
    let tabIndex = propTabIndex;
    if (
      useIsUserInteractionMode("keyboard") &&
      typeof propTabIndex === "undefined"
    ) {
      tabIndex = -1;
    }

    const { layout, visible } = useLayoutConfig();
    let navOffset = propNavOffset;
    if (typeof navOffset === "undefined") {
      navOffset = visible && !isTemporaryLayout(layout);
    }

    const [, { ref, className }] = useCSSTransition<HTMLDivElement>({
      transitionIn: !!navOffset,
      temporary: false,
      className: propClassName,
      timeout,
      classNames,
    });

    const refHandler = useCallback(
      (instance: HTMLDivElement | null) => {
        applyRef(instance, forwardedRef);
        ref.current = instance;
      },
      [ref, forwardedRef]
    );

    return (
      <Component
        {...props}
        ref={refHandler}
        tabIndex={tabIndex}
        className={cn(styles({ "header-offset": headerOffset }), className)}
      />
    );
  }
);

if (process.env.NODE_ENV !== "production") {
  try {
    const PropTypes = require("prop-types");

    LayoutMain.propTypes = {
      component: PropTypes.oneOf(["div", "main"]),
      className: PropTypes.string,
      tabIndex: PropTypes.number,
      navOffset: PropTypes.bool,
      headerOffset: PropTypes.bool,
      timeout: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
          appear: PropTypes.number,
          enter: PropTypes.number,
          exit: PropTypes.number,
        }),
      ]),
      classNames: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          appear: PropTypes.string,
          appearActive: PropTypes.string,
          enter: PropTypes.string,
          enterActive: PropTypes.string,
          enterDone: PropTypes.string,
          exit: PropTypes.string,
          exitActive: PropTypes.string,
          exitDone: PropTypes.string,
        }),
      ]),
    };
  } catch (error) {}
}

export default LayoutMain;
