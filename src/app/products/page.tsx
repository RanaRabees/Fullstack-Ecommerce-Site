import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Myfooter from '@/app/components/Myfooter'

export default function Products() {
    return (
        <>
            <div className="w-full my-20">
                <div className='grid grid-cols-1 text-center md:grid-cols-4 gap-10 px-6'>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy1.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Flex-Push-Button-Bomber">
                            <Image src="/slide7.png"
                                width={600}
                                height={800}
                                alt="Flex Push Button Bomber"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Flex Push Button Bomber</h3>
                            <span className="font-extrabold text-xl tracking-widest">$225</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Raglan-Sweatshirt">
                            <Image src="/slide10.png"
                                width={600}
                                height={800}
                                alt="Raglan Sweatshirt"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Raglan Sweatshirt</h3>
                            <span className="font-extrabold text-xl tracking-widest">$195</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Cameryn-Sash-Tie-Dress">
                            <Image src="/slide1.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Cameryn Sash Tie Dress</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$545</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Brushed-Raglan-Sweatshirt">
                            <Image src="/slide0.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Brushed Raglan Sweatshirt</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$195</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Flex-Sweatshirt">
                            <Image src="/slide2.png"
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Flex Sweatshirt</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$175</span>
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