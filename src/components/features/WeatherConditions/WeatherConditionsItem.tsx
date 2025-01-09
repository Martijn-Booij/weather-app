import React from 'react'

type WeatherConditionsItemProps = {
    Image?: string;
    Label: string;
    Value: string;
    IsLoading: boolean;
}

const WeatherConditionsItem = ({ Image, Label, Value, IsLoading}: WeatherConditionsItemProps) => {
  if(IsLoading) {
    return (
      <div className='flex items-start gap-2 text-xl'>
        <img className='w-8 h-8' src={Image} alt="icon" />
        <div className='flex flex-col gap-2 w-full'>
            <span className=''>{Label}</span>
            <span className='w-full rounded-full h-6 bg-gray-300/30 animate-pulse' />
        </div>
      </div>
    )
  }
  return (
    <div className='flex items-start gap-2 text-xl'>
        <img className='w-8 h-8' src={Image} alt="icon" />
        <div className='flex flex-col'>
            <span>{ Label }</span>
            <span className='font-bold'>{ Value }</span>
        </div>
        
    </div>
  )
}

export default WeatherConditionsItem