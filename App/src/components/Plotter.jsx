import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Line} from "react-chartjs-2"
import Roller from '../business/diceroller'
import SelectForm from './SelectForm'


export default function Plotter() {


    const roller = new Roller()
    roller.setDice(20)
    roller.advantage()
    roller.setAmount(800)
    let diceRolls = roller.roll()
    console.log(diceRolls)
    //dict
    let obj = {}
    for (let i = 1; i <= diceRolls.dieValue; i++) {
        obj[i] = 0;
      }
    //count occurences
    let keys = Object.keys(obj)
    diceRolls.dice_list.forEach((e)=>{
        //inc if occurs
        if(keys.includes(e+"")){
            obj[e]+=1
        }
    })


  return (
    <div>
        <h2></h2>

        <SelectForm 
            entries={
                {
                    "Disadvantage":null,
                    "Normal":null,
                    "Advantage":null,
                    "ElvenAccuracy":null,
                }
        } 
            className={"bg-red-100"}
            labelText={"Augmentez vos chances: "} 
            dropdownStyle={"bg-base-200 rounded-b-xl w-[200px] overflow-hidden"}
            hoverStyle={"px-2 py-1 hover:bg-base-300 "}
            inputStyle={"w-[200px] overflow-hidden border-1 border-base-300 rounded "}
            arrowIcon={<p className='text-base-300 px-2'> •••</p>}
            placeholderText={"Select choice"}
            placeholderStyle={"text-base-300 italic px-1 "}
            />

        <Bar data={{
            labels:Object.keys(obj),
            datasets:[
                {
                label:`${diceRolls.quantity} Dice rolls (${diceRolls.dieName}) the following distribution:`,
                data:Object.values(obj)
                }
            ]

        }}/>


    <h2>Odds of rolling a ten or above: {100*Object.values(obj).slice(9).reduce((sum, num) => sum + num)/diceRolls.quantity}%</h2>
    </div>
  )
}
