import React from 'react'
import { CgSpinnerTwo } from "react-icons/cg";

type Props = {}

function Spinner({}: Props) {
    return (
        <div className='flex items-center'>
            <CgSpinnerTwo className='w-5 h-5 animate-spin mr-2 text-accent' />
            <p>Fetching heroes...</p>
        </div>
    )
}

export default Spinner