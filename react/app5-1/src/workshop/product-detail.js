
import React from 'react'
import {data} from './data'
import './product-detail.css'

export default function ProductDetail(props) {
    const id = props.match.params.id
    const file = data[id][0]
    const name = data[id][1]
    const price = data[id][2]
    const descr = 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

    return (
        <div id="main">
            <div id="imgContainer">
                <img src={'/images/' + file} alt=""/>
            </div>
            <div id="detail">
                <div id="name">{name}</div>
                <div id="description">{descr}</div>
                <div id="price">Price: {price}</div>
            </div>
        </div>
    )
    
}