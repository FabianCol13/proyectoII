import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="https://fb.me/videogames" circular color="facebook" icon="facebook" />
            <Button as="a" href="https://www.twitter.com/videogames" circular color="twitter" icon="twitter" />
            <Button as="a" href="https://www.linkedin.com/videogames" circular color="linkedin" icon="linkedin" />
            <Button as="a" href="https://www.youtube.com/videogames" circular color="youtube" icon="youtube" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2024 VideoGames Store DH </span>
        </div>
      </Container>
    </div>
  );
}
