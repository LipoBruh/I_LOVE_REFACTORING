import React, {useState} from 'react'
import {Button,Label,ListBox,ListBoxItem,Popover,Select,SelectValue} from 'react-aria-components';
  
export default function SelectForm({entries,className,labelText,labelStyle,dropdownStyle, hoverStyle,inputStyle,arrowIcon, placeholderText,placeholderStyle,hook}) {

    const [selected, setSelected] = useState(null);

    function handleSelectionChange(selectedKey) {
        setSelected(selectedKey);
        hook(selectedKey)
    }

    function render(entries=[]){


        let list = (entries).map((e,index)=>{
            return <ListBoxItem id={e.id} key={e.id} className={hoverStyle?hoverStyle:""}>{e.value+""}</ListBoxItem>
        })
        console.log(list)
        return <ListBox>{list}</ListBox>

    }


    const entry_component = render(entries)


  return (
    <div className={className?className:''}>
    <Select selectedKey={selected} onSelectionChange={handleSelectionChange}>
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
