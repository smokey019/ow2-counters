import React from 'react'

type Props = {
    notes: string | undefined
}

function Notes({ notes }: Props) {
    return (
        <div className='flex justify-center w-1/2 mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold mb-2'>Notes</h1>
                <p className='opacity-50 w-96'>{notes ? notes : 'Nothing but a gust of wind.'}</p>
            </div>
        </div>
    )
}

export default Notes