import React, {Component} from "react";
import { FixedSizeList as List } from "react-window";
import Select from 'react-select';
import '../styles/multiSelectLargeList.css'
import { useState } from "react";

const height = 35;

class MenuList extends Component {
    render() {
      const { options, children, maxHeight, getValue } = this.props;
      const [value] = getValue();
      const initialOffset = options.indexOf(value) * height;
      const customStyle = this.props.selectProps.styles.menuList();
  
      return (
        <List
          style={customStyle}
          height={180}
          itemCount={children.length}
          itemSize={height}
          initialScrollOffset={initialOffset}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
      );
    }
}

const MultiSelectLargeList = (props) => {
    const [placeholder] = useState(props.placeholder)
    const [defaultValue] = useState(props.defaultValue)
    const [options] = useState(props.options)
    const [maxHeight] = useState(props.maxHeight)
    return (
        <>
            <Select
                components={{ MenuList }}
                placeholder={placeholder}
                defaultValue={defaultValue}
                isMulti
                name="multi-select"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={props.onUpdate}
                styles={{
                    menuList: (baseStyles) => ({
                        ...baseStyles,
                        maxHeight: maxHeight,
                        color: 'rgb(0,0,0)'
                        }),
                }}
            />
        </>
    );
};

export default MultiSelectLargeList;