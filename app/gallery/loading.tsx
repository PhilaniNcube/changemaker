import Back from '@/components/back'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import React from 'react'

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-bold md:text-4xl text-slate-700">
            Our Gallery
          </h1>
          <div className="items-center space-x-3 flx">
            <Back />
            <Link href={`/gallery`}>
              <Button type="button">Next</Button>
            </Link>
          </div>
        </div>
        <div className="grid grdi-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* add an array of 15 skeleton elements */}
            {Array.from({ length: 15 }, (_, index) => (
                <div key={index} className="w-full h-64">
                    <Skeleton className="h-full w-full" />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default loading