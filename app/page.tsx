// const inter = Inter({ subsets: ['latin'] })
import Link from "next/link";
import TopSection from "@/compoenets/topSection"
import PriceBox from "@/compoenets/priceBox";
import BottomSection from "@/compoenets/bottomSection";
export default function Home() {
  return (
    <>
    <TopSection/>
    <PriceBox/>
    <BottomSection/>
    <footer className={"app-footer row"}>
      <div className={"col-12 text-center"}>
        <strong>
          <Link href="https://github.com/kashifumar">Kashif Umar</Link><span>&copy; 2023.</span>
          <Link href="https://github.com/kashifumar/kas-pricing-ui">Project Repo</Link>
        </strong>
      </div>
        
    </footer>
    </>
  )
}
