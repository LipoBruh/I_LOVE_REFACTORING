export default class Roller {
    constructor() {
        this.reroll_value=false
        this.amount=1
        this.crit_fail=1
        this.crit_success=20
        this.dieName=null
        this.dieValue=null
        this.reroll_on_die=[]
        this.skill=false
    }


    setDie(value){
        if(value && [2,4,6,8,10,12,20,100].includes(value)){
            if (value==20){
                this.skill=true
            }
            else{
                this.skill=false
                this.reroll_value=false
            }
            this.dieName = "d"+value
            this.dieValue=value
        }
    }

    //reroll every die with that value
    reroll_on_die(value){
        if(value && value>0 && value<=this.dieValue){
            if (!this.reroll_on_die.includes(value))
            this.reroll_on_die.push(value)
        }
    }
    setReroll(value){
        if(!value)
            return
        //
        value = (value+"").toLowerCase()
        console.log(value)
        //
        switch(value.toLowerCase()){
            case "advantage":
                this.advantage()
                break
            case "disadvantage":
                this.disadvantage()
                break
            case "elvenaccuracy":
                this.elvenAccuracy()
                break
            default:
                this.reroll_value=false
        }



    }
    /* Will induce rerolls on d20 checks */
    advantage(){
        if(this.dieValue==20){
            this.skill=true
            this.reroll_value = "advantage"
        }
    }
    disadvantage(){
        if(this.dieValue==20){
            this.skill=true
            this.reroll_value = "disadvantage"
        }
    }
    elvenAccuracy(){
        if(this.dieValue==20){
            this.skill=true
            this.reroll_value = "elvenAccuracy"
        }
    }


    /* Increase the amount of dice rolled */
    setAmount(value){
        if(value>0 && value<=100000){
            this.amount = value
        }
    }
    incAmount(){
        this.setAmount(this.amount+1)
    }
    decAmount(){
        this.setAmount(this.amount-1)
    }

    /*Will roll the dice with the specified attributes */
    roll(){
        //we assume that the amount of dice dictates the nb of d20s
        let list = []
        let critical=false
        let total = 0
        //
        if(!this.skill){
            /* roll */
            for(let i=0; i<this.amount; i++){
                //roll die
                let value = Math.floor(Math.random() * this.dieValue)+1

                /* Reroll once for values explicitely asked for */
                if (this.reroll_on_die.includes(value)){
                    value = Math.floor(Math.random() * this.dieValue)+1
                }
                
                list.push(value)
                total+=value
            }

        }
        else{
            /*roll die */

            /* How many rerolls */
            let rounds=1
            if(this.reroll_value){
                switch(this.reroll_value){
                    case "advantage":
                        rounds = 2;
                        break;
                    case "disadvantage":
                        rounds = 2
                        break
                    case "elvenAccuracy":
                        rounds = 3
                        break;
                }
            }
            for(let i=0; i<this.amount; i++){
                
                //reroll list
                let short_list = []
                let value = null
                for(let j=0;j<rounds;j++){
                    
                    //roll die
                    value = Math.floor(Math.random() * this.dieValue)+1
                    /* Reroll once for values explicitely asked for */
                    if (this.reroll_on_die.includes(value)){
                        value = Math.floor(Math.random() * this.dieValue)+1
                    }
                //reroll list
                short_list.push(value)
                }
                /* final reroll die */
                if(this.reroll_value){
                    switch(this.reroll_value){
                        case "advantage":
                            value = Math.max(...short_list);
                            break;
                        case "disadvantage":
                            value = Math.min(...short_list);
                            break;
                        case "elvenAccuracy":
                            value = Math.max(...short_list);
                            break;
                    }
                }
                /* Added to list */
                if (value==20){
                    critical="success"
                }
                if (value==1){
                    critical="fail"
                }
                list.push(value)
                total+=value
                }
            }

            
            const result_dict = {
              quantity: this.amount,
              modifier: this.modifier,
              dice_list: list,
              max: Math.max(...list),
              min: Math.min(...list),
              total: total,
              skill:this.skill,
              reroll: this.reroll_value,
              critical:critical,
              dieName : this.dieName,
              dieValue : this.dieValue,

            };
    
            console.log(result_dict)
            return result_dict
    
        }

    
}
