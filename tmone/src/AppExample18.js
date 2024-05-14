import React from 'react'
const AppExample18 = ()=>{
    // initial copy of state
    const listOfItems = [
        {code :101, name:"Printer", stockInHand: 50},
        {code :102, name:"Laptop", stockInHand: 40},
        {code :103, name:"Desktop", stockInHand: 60},
    ];


    // pure function transtionReduceer
    const transactionReducer = (state, action)=>{
        const i = [];
        let e = 0;
        while(e<state.length){
            if(state[e].code == action.code){
                if(action.transactionType == "PURCHASE"){
                    i.push({...state[e], stockInHand: state[e].stockInHand+1});
                }
                else
                if(action.transactionType == "SALE"){
                    i.push({...state[e], stockInHand: state[e].stockInHand-1});
                }
                else{
                    i.push({...state[e]})
                }
            }else{
                i.push({...state[e]})
            }
            e++;
        }
        return i;
    }
    const [inventory, dispatchTransaction] = React.useReducer(transactionReducer, listOfItems);
    // here listOfItems will be initially assigne to inventory
    // whenever dispatchTeranstion will be called, it will call transactionReducer and   pass 2 element
    // 1st is data of inventory, 2nd data we will pass to displatchTranstion while calling. 
    return (
        <div>
            <h1>Example 18 | Lecture 22</h1>
            <ul>
                {
                    inventory.map((item)=>{
                        return (
                            <li key={item.code}> 
                            {item.name} ({item.stockInHand}) &nbsp;&nbsp;
                            <button onClick={()=>{
                                dispatchTransaction({code: item.code, transactionType: "PURCHASE"})
                            }}>PURCHASE</button> &nbsp;&nbsp;
                            <button onClick={()=>{
                                dispatchTransaction({code:item.code, transactionType: "SALE"})
                            }}>Sale</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default AppExample18;