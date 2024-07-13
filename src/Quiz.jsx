import React, { useState } from 'react'

const Quiz = () => {
    let [que,setQue]=useState("")
    let [opitionA,setOPtionA]=useState("")
    let [opitionB,setOPtionB]=useState("")
    let [opitionC,setOPtionC]=useState("")
    let [opitionD,setOPtionD]=useState("")
    let [ans,setAns]=useState("")
    let [selectans,setSelectans]=useState(false)
   
    let [list,setList]=useState([])

const handleData=()=>{
    let data={
        que:que,
        opitionA:opitionA,
        opitionB:opitionB,
        opitionC:opitionC,
        opitionD:opitionD,
        ans:ans,
        

    }
    console.log(data)
    setList([...list,data])
    // setOPtionA([...list,data])
    // setOPtionB([...list,data])
    // setOPtionC([...list,data])
    // setOPtionD([...list,data])
    console.log(list)
}

const handleAns=(opitionA,ans)=>{

    if(opitionA==ans){
        
        setSelectans(true)
        console.log("right");
        
    }
    else{
        
        setSelectans(false)
        console.log(false);
    }
    
}
const handleoptB=(opitionB,ans)=>{

    if(opitionB==ans){
        
        setSelectans(true)
        console.log("right");
        
    }
    else{
        
        setSelectans(false)
        console.log(false);
    }
    
}
const handleoptC=(opitionC,ans)=>{

    if(opitionC==ans){
        
        setSelectans(true)
        console.log("right");
        
    }
    else{
        
        setSelectans(false)
        console.log(false);
    }
    
}
const handleoptD=(opitionD,ans)=>{

    if(opitionD==ans){
        
        setSelectans(true)
        console.log("right");
        
    }
    else{
        
        setSelectans(false)
        console.log(false);
    }
    
}

  return (
    <div className='quetion'>
        Question:
        <input type="text" onChange={(e)=>setQue(e.target.value)} />
    
        <br />
        A:
        <input type="text" onChange={(e)=>setOPtionA(e.target.value)} />
        <br />
        B:
        <input type="text" onChange={(e)=>setOPtionB(e.target.value)} />
        <br />
        c:
        <input type="text" onChange={(e)=>setOPtionC(e.target.value)} />
        <br />
        D:
        <input type="text" onChange={(e)=>setOPtionD(e.target.value)} />
        <br />
        Ans:
        <input type="text" onChange={(e)=>setAns(e.target.value)} />
        <br />
        <button onClick={handleData}>Add</button>
        <div>
            {
                list.map((ele)=>(
                  <div>
                   
                    <p>Quetion:{ele.que}</p>
                    <button onClick={()=>handleAns(opitionA,ans)} style={{color:selectans?"green":"red"}}>A:{ele.opitionA}</button>
                    <br />
                    <button onClick={()=>handleoptB(opitionB,ans)} style={{color:selectans?"green":"red"}}>B:{ele.opitionB}</button>
                    <br />
                    <button onClick={()=>handleoptC(opitionC,ans)} style={{color:selectans?"green":"red"}}>C:{ele.opitionC}</button>
                    <br />
                    <button onClick={()=>handleoptD(opitionD,ans)} style={{color:selectans?"green":"red"}}>D:{ele.opitionD}</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Quiz