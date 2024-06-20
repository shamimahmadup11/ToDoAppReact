
import { useSelector , useDispatch} from "react-redux"

const Counter = () => {
    const store=useSelector(store=>store);
    // console.log(store)
    const dispatch=useDispatch()

     const increment=()=>{
        dispatch({type:"increment" })
     }
     const decrement=()=>{
        dispatch({type:'decrement'})
     }
     const reset=()=>{
        dispatch({type:'reset'})
     }

  return (
    <div>
       <button className=" bg-red-800 w-24 h-12 text-white rounded " onClick={increment}>  increment </button>
       <button className=" bg-red-800 w-24 h-12 text-white rounded " onClick={decrement}>  decrement</button>
       <button className=" bg-red-800 w-24 h-12 text-white rounded " onClick={reset}> reset </button>
    <div>
    {store.counter.count}

    </div>

    </div>
  )
}

export default Counter
