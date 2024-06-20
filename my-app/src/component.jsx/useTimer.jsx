import { useState } from "react"

export function useTimer(){

    let [wait,set]=useState("")
    let [second,setSec]=useState(0)
    let [minute,setMin]=useState(0)
    function start(){
        set(setInterval(calculate,1000))
    }
    function calculate(){
        setSec(second => {
            if (second < 60) {
                return second + 1;
            } else {
                setMin(minute => minute + 1);
                return 0;
            }})
    }
    function stop(){
        clearInterval(wait)
    }
    function reset(){
        setSec(0)
        setMin(0)
        clearInterval(wait)
    }
    return [minute,second,start,stop,reset]
}