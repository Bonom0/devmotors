import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/home/hero";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";
import { MenuProps } from "@/utils/menu.type";

export default async function Home() {
  const data: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();
  
  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu}/>}

      <Hero
        heading={data.object.metadata.heading}
        buttonTitle={data.object.metadata.cta_button.title}
        buttonUrl={data.object.metadata.cta_button.url}
        bannerUrl={data.object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF"/>}
      />

      <Container>
        <Services 
          object={data.object}
        />

        <Footer
          object={data.object}
        />
      </Container>
    </main>
  );
}
