import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';
import React from 'react';

export default function SliderForm() {
  return (
    <Slider defaultValue={30} className="flex flex-col gap-2  w-full px-2">
      <div className={"flex flex-row justify-between items-center w-full"}>
      <Label className="text-sm font-medium text-gray-700">Opacity</Label>
      <SliderOutput className="text-sm text-gray-500" />
      </div>
      <SliderTrack className="relative h-2 bg-gray-300 rounded-full w-full">
        <SliderThumb
          className={({
            isDragging,
            isFocused
          }) =>
            `absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-md transition 
            ${isDragging ? 'scale-110' : ''} 
            ${isFocused ? 'ring-2 ring-blue-400' : ''}`
          }
        />
      </SliderTrack>
    </Slider>
  );
}
