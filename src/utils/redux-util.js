import React from "react";
import { Iterable } from "immutable";
import getDisplayName from "recompose/getDisplayName";
import { toPairs } from "lodash";

export function propsToJS(WrappedComponent) {
  function PropsToJS(wrappedComponentProps) {
    const KEY = 0;
    const VALUE = 1;

    const propsJS = toPairs(wrappedComponentProps).reduce(
      (newProps, wrappedComponentProp) => {
        newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
          wrappedComponentProp[VALUE]
        )
          ? wrappedComponentProp[VALUE].toJS()
          : wrappedComponentProp[VALUE];
        return newProps;
      },
      {}
    );

    return <WrappedComponent {...propsJS} />;
  }

  PropsToJS.displayName = `PropsToJS${getDisplayName(WrappedComponent)}`;

  return PropsToJS;
}
