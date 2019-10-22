import React, { FC, Fragment, useState, ReactNode } from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { DropdownMenu, Menu, MenuItem, MenuRenderer } from "@react-md/menu";
import scssVariables from "@react-md/list/dist/scssVariables";
import { Text } from "@react-md/typography";
import { unitToNumber, useAppSize } from "@react-md/utils";

import Code from "components/Code/Code";

const mobileHeight = unitToNumber(scssVariables["rmd-list-item-large-height"]);
const desktopHeight = unitToNumber(
  scssVariables["rmd-list-item-dense-large-height"]
);

interface Item {
  leftAvatar: ReactNode;
  children: string;
}

const VirtualizedMenu: FC<{ items: Item[] }> = ({ items }) => {
  const { isDesktop } = useAppSize();
  const [value, setValue] = useState("None");

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => (
    <MenuItem
      key={key}
      style={style}
      {...items[index]}
      aria-setsize={items.length}
      aria-posinset={index + 1}
      onClick={() => setValue(items[index].children)}
    />
  );

  const menuRenderer: MenuRenderer = (
    { horizontal, children, ...props },
    // this is really just added to show that it is provided as the second argument.
    // it isn't really required for these examples
    items
  ) => {
    const height = isDesktop ? desktopHeight : mobileHeight;
    return (
      <Menu {...props}>
        <List
          height={height * 5.6}
          rowCount={items.length}
          rowRenderer={rowRenderer}
          rowHeight={height}
          tabIndex={null}
          width={200}
          className="rmd-list"
        />
      </Menu>
    );
  };

  return (
    <Fragment>
      <Text>
        Last clicked value: <Code>{value}</Code>
      </Text>
      <DropdownMenu
        id="virtualized-example"
        items={items}
        menuRenderer={menuRenderer}
        theme="secondary"
      >
        Virtualized
      </DropdownMenu>
    </Fragment>
  );
};

export default VirtualizedMenu;
