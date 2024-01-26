import React from 'react'
import { useDispatch } from 'react-redux'
import {oneNumber, twoNumber , threeNumber , fourNumber , fiveNumber , sixNumber , sevenNumber , eightNumber , nineNumber , zeroNumber , plus , minus , impact , divide ,percentage , deletes , comma , clear , equal} from '../reducer/calculatorSlice'


function Box() {

  const dispatch = useDispatch()
  const equall = () =>{
    dispatch(equal())
  }
  const pluss = () =>{
    dispatch(plus())
  }
  const minuss = () =>{
    dispatch(minus())
  }
  const impactt = () =>{
    dispatch(impact())
  }
  const dividee = () =>{
    dispatch(divide())
  }
  const persentagee = () =>{
    dispatch(percentage())
  }
  const commaa = () =>{
    dispatch(comma())
  }
  const deletedd = () =>{
    dispatch(deletes())
  }
  const oneNumberButton = ()=>{
      dispatch(oneNumber(1))
  }
  const twoNumberButton = ()=>{
    dispatch(twoNumber(2))
  }
  const threeNumberButton = ()=>{
    dispatch(threeNumber(3))
  }
  const fourNumberButton = ()=>{
    dispatch(fourNumber(4))
  }
  const fiveNumberButton = ()=>{
    dispatch(fiveNumber(5))
  }
  const sixNumberButton = ()=>{
    dispatch(sixNumber(6))
  }
  const sevenNumberButton = ()=>{
    dispatch(sevenNumber(7))
  }
  const eightNumberButton = ()=>{
    dispatch(eightNumber(8))
  }
  const nineNumberButton = ()=>{
    dispatch(nineNumber(9))
  }
  const zeroNumberButton = ()=>{
    dispatch(zeroNumber(0))
  }

  return (
    <>
      <div className='flex-row grid grid-cols-4 '>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={persentagee}>%</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={() => dispatch(clear())}>CE</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={dividee}>/</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black items-center flex' onClick={deletedd}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-300 -350 1200 1200"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={sevenNumberButton}>7</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={eightNumberButton}>8</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={nineNumberButton}>9</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={impactt}>x</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={fourNumberButton}>4</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={fiveNumberButton}>5</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={sixNumberButton}>6</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={minuss}>-</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={oneNumberButton}>1</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={twoNumberButton}>2</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={threeNumberButton}>3</button>
          <button className='mb-1 text-center shadow-2xl w-[94px] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={pluss}>+</button>
          <button className='mb-1 col-span-2 text-center shadow-2xl w-[98%] h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={zeroNumberButton}>0</button>
          <button className='mb-1 text-center w-[94px] shadow-2xl h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={commaa}>,</button>
          <button className='mb-1 text-center w-[94px] shadow-2xl h-20 text-2xl rounded-xl justify-center bg-violet-100 hover:text-3xl text-black' onClick={equall}>=</button>
      </div>
    </>
  )
}

export default Box