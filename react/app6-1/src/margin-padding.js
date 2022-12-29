import React from 'react'

export default function MarginPadding() {
    return (
        <div className="mx-auto mt-3" style={{width:'400px'}}>
            <div className="p-0 mb-0 bg-dark text-white">p-0, mb-0</div>
            <div className="p-1 mb-1 bg-dark text-white">p-1, mb-1</div>
            <div className="p-2 mb-2 bg-dark text-white">p-2, mb-2</div>
            <div className="p-3 mb-3 bg-dark text-white">p-3, mb-3</div>
            <div className="p-4 mb-4 bg-dark text-white">p-4, mb-4</div>
            <div className="p-5 mb-5 bg-dark text-white">p-5, mb-5</div>
            <div className="p-auto mb-auto bg-dark text-white">
                p-auto, mb-auto
            </div>
        </div>
    )
}