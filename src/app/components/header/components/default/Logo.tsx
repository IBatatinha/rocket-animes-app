import { HeaderComponent } from "../..";
import { Zen_Dots } from 'next/font/google'

import Image from "next/image";
import Link from "next/link";
import logo from '@/../public/logo.svg'

const zenDots = Zen_Dots({ subsets: ['latin'], weight: '400' })

export default function Logo() { 
  return <HeaderComponent.Button title="Logo da RocketAnimes" asChild>
    <Link passHref href="/">
      <Image src={logo} style={{ filter: 'drop-shadow(0px 3.453px 10.242px rgba(119, 81, 255, 0.58)) drop-shadow(0px 8.028px 23.814px rgba(119, 81, 255, 0.43)) drop-shadow(0px 14.416px 42.764px rgba(119, 81, 255, 0.36)) drop-shadow(0px 23.925px 70.972px rgba(119, 81, 255, 0.31)) drop-shadow(0px 39.416px 116.924px rgba(119, 81, 255, 0.27)) drop-shadow(0px 68.887px 204.35px rgba(119, 81, 255, 0.22)) drop-shadow(0px 149px 442px rgba(119, 81, 255, 0.15));'}} width={26} height={26} alt=""/>
      <h1 className={`${zenDots.className} `} style={{ textShadow: '0px 4px 331px rgba(119, 81, 255, 0.19), 0px 1.671px 138.284px rgba(119, 81, 255, 0.27), 0px 0.893px 73.933px rgba(119, 81, 255, 0.34), 0px 0.501px 41.446px rgba(119, 81, 255, 0.40), 0px 0.266px 22.012px rgba(119, 81, 255, 0.48), 0px 0.111px 9.16px rgba(119, 81, 255, 0.67)'}}>ocket<span className="text-rocket">Animes</span></h1>
    </Link>
  </HeaderComponent.Button>
}