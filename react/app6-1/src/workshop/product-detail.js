
import React from 'react'
import {data} from './data'
//import './product-detail.css'

export default function ProductDetail(props) {
    const id = props.match.params.id
    const file = data[id][0]
    const name = data[id][1]
    const price = data[id][2]
    const descr = 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

    return (
        <div className="mx-auto" style={{width:'500px'}}>
            <div className="text-center">
                <img src={'/images/' + file} alt=""/>
            </div>
            <div className="mt-2">
                <div className="text-center text-success fw-bold lead">{name}</div>
                <div className="my-3 p-2" style={{backgroundColor:'#def'}}>{descr}</div>
                <div className="fw-bold text-danger">
                    <div className="d-inline-block mt-1">Price: {price}</div>
                    <a href={'/cart?id='+id} class="btn btn-sm btn-primary float-end mr-5">หยิบใส่รถเข็น</a>
                </div>
            </div>
        </div>
    )
    
}