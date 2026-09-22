import { LoaderIcon } from 'lucide-react'
import React from 'react'

const AuthLoading = ({ label = "Verifying Account" }: { label?: string }) => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex gap-3'>
                <LoaderIcon className="size-6 animate-spin" />
            </div>
            {label}
        </div>
    )
}

export default AuthLoading