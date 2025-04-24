import Image from 'next/image';
import styles from './styles.module.scss';
import { HomeProps } from '@/utils/home.type';


export function Services({ object }: HomeProps){
  return(
    <section className={styles.containerAbout}>
      <article className={styles.innerAbout}>
        <h1 className={styles.title}></h1>
        <p>{object.metadata.about.description}</p>
      </article>

      <div className={styles.bannerAbout}>
        <Image
          className={styles.imageAbout}
          alt='Imagem ilustrativa sobre a empresa'
          quality={100}
          fill={true}
          src={object.metadata.about.banner.url}
        />
      </div>
    </section>
  )
}