import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Female() {
    return (
        <>
            <div className="w-full my-20">
                <div className='grid grid-cols-1 text-center md:grid-cols-3 gap-10 px-6'>
                    <div className="item py-4">
                        <Link href="/Brushed-Raglan-Sweatshirt">
                            <Image
                                src="/slide0.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Brushed Raglan Sweatshirt</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$195</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Cameryn-Sash-Tie-Dress">
                            <Image
                                src="/slide1.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Cameryn Sash Tie Dress</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$545</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Flex-Sweatshirt">
                            <Image
                                src="/slide2.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Flex Sweatshirt</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$175</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Flex-Sweatpants">
                            <Image
                                src="/slide3.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Flex Sweatpants</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$175</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Pink-Fleece-Sweatpants">
                            <Image
                                src="/slide4.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Pink Fleece Sweatpants</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$195</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Lite-Sweatpants">
                            <Image
                                src="/slide5.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Lite Sweatpants</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$150</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Muscle-Tank">
                            <Image
                                src="/slide8.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Muscle Tank</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$525</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Brushed-Bomber">
                            <Image
                                src="/slide9.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Brushed Bomber</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$75</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}