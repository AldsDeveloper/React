import React from 'react'

export default function Font() {
    return (
        <div style={{width:'400px', margin:'10px auto'}}>
            <div className="fw-normal">Font Weight Normal - ปกติ</div>
            <div className="fw-light">Font Weight Light - บาง</div>
            <div className="fw-bold">Font Weight Bold - หนา</div>
            <div className="fst-italic">Font Italic - เอียง</div>
            <div className="fw-bold fst-italic">
                Font Weight Bold + Italic - หนาเอียง
            </div>
        </div>
    )
}