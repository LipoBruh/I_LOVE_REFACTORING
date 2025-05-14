import React, { useState } from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Line} from "react-chartjs-2"
import Roller from '../business/diceroller'
import SelectForm from './SelectForm'
import { useEffect } from 'react'
import SliderForm from './SliderForm'


export default function Plotter() {
    const [selection, setSelection] = useState(null)
    const [diceRolls, setDiceRolls] = useState(null)
    const [obj, setObj] = useState(null)


    useEffect(() => {
        console.log("useEffect")
        //Runs only on the first render
        const roller = new Roller()
        roller.setDie(20)
        roller.setReroll(selection)
        roller.setAmount(20)
        let rolls = roller.roll()
        //console.log(diceRolls)
        //dict
        let obj1 = {}
        for (let i = 1; i <= rolls.dieValue; i++) {
            obj1[i] = 0;
          }
        //count occurences
        let keys = Object.keys(obj1)
        rolls.dice_list.forEach((e)=>{
            //inc if occurs
            if(keys.includes(e+"")){
                obj1[e]+=1
            }
        })
        //update states
        setDiceRolls(rolls)
        setObj(obj1)
        //console.log(selection)

      }, [selection]);





  return (
    <div>
        <h2></h2>

        <SliderForm />

        <SelectForm 
            entries={[
                {id : "Disadvantage",value:"Disadvantage"},
                {id : "Normal",value:"Normal"},
                {id : "Advantage",value:"Advantage"},
                {id : "ElvenAccuracy",value:"ElvenAccuracy"}
            ]}
            hook={setSelection}
            className={""}
            labelText={"Augmentez vos chances: "} 
            dropdownStyle={"bg-base-200 rounded-b-xl w-[200px] overflow-hidden"}
            hoverStyle={"px-2 py-1 hover:bg-base-300 "}
            inputStyle={"w-[200px] overflow-hidden border-1 border-base-300 rounded "}
            arrowIcon={<p className='text-base-300 px-2'>•••</p>}
            placeholderText={"Select option"}
            placeholderStyle={"text-base-300 italic px-1 "}
            />

        <Bar data={{
            labels:Object.keys(obj?obj:[]),
            datasets:[
                {
                label:`${diceRolls?diceRolls.quantity:""} Dice rolls (${diceRolls?diceRolls.dieName:""}) the following distribution:`,
                data:Object.values(obj?obj:[])
                }
            ]

        }}/>


    <h2>Odds of rolling a ten or above: {obj?100*Object.values(obj).slice(9).reduce((sum, num) => sum + num)/diceRolls.quantity:""}%</h2>
    </div>
  )
}
