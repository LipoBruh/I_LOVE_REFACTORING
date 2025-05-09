import React from 'react'
import {Button,Label,ListBox,ListBoxItem,Popover,Select,SelectValue} from 'react-aria-components';
  
export default function SelectForm({entries,className,labelText,labelStyle,dropdownStyle, hoverStyle,inputStyle,arrowIcon, placeholderText,placeholderStyle}) {


    function render(entries=[]){


        let list = Object.keys(entries).map((e,index)=>{
            return <ListBoxItem key={index} className={hoverStyle?hoverStyle:""}>{e+""}</ListBoxItem>
        })
        console.log(list)
        return <ListBox>{list}</ListBox>

    }


    const entry_component = render(entries)


  return (
    <div className={className?className:''}>
    <Select>
        {labelText?<Label className={labelStyle?labelStyle:""}>{labelText}</Label>:""}
        
        <div className='inline '>
        <Button className={inputStyle?inputStyle:""}>
            <div className='flex flex-row justify-between '>

                <SelectValue>
                                {({ defaultChildren, isPlaceholder }) => {
                        return isPlaceholder
                        ? (
                            <>
                            {placeholderText?  <p className={placeholderStyle?placeholderStyle:""}>{placeholderText}</p>  :""}
                            </>
                        )
                        : defaultChildren;
                    }}
                </SelectValue>
                <div>{arrowIcon}</div>


            </div>
        </Button>

        <Popover className={dropdownStyle?dropdownStyle:""}>
                {entry_component}
        </Popover>
        </div>
    </Select>
    </div>
  )
}
