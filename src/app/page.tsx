import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/home/hero";
import { Phone } from "lucide-react";

export default async function Home() {
  const data: HomeProps = await getDataHome();
  console.log(data);
  
  return (
    <main>
      <Submenu/>
      <Hero
        heading={data.object.metadata.heading}
        buttonTitle={data.object.metadata.cta_button.title}
        buttonUrl={data.object.metadata.cta_button.url}
        bannerUrl={data.object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF"/>}
      />
    </main>
  );
}
