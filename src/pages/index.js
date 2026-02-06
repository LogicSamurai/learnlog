import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title} - Developer Portfolio`}
      description="Personal learning log and portfolio - documenting my journey in software development">
      
      <div className={styles.viewport}>
        <main className={styles.heroContainer}>
          <div className={styles.heroContentCentered}>
            
            <Heading as="h1" className={styles.heroTitle}>
              Guru Patel
            </Heading>
            
            <p className={styles.heroSubtitle}>
              Developer • Learner • Creator
            </p>
            
            <p className={styles.heroDescription}>
              Welcome to my digital space where I document code, share insights,
              and build things that matter.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Years</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Learning</span>
              </div>
            </div>
            
            <div className={styles.heroActions}>
              <Link
                className={styles.ctaButton}
                to="/docs">
                <span>📚 Tutorials</span>
              </Link>
              <Link
                className={styles.ctaButton}
                to="/blog">
                <span>✍️ Read Blog</span>
              </Link>
              <a
                className={styles.ctaButton}
                href="mailto:gurupatel.dev@email.com"
                target="_blank"
                rel="noopener noreferrer">
                <span>💬 Get in Touch</span>
              </a>
            </div>
            
            <div className={styles.heroSkills}>
              <div className={styles.skillTag}>Go</div>
              <div className={styles.skillTag}>Node.js</div>
              <div className={styles.skillTag}>Python</div>
              <div className={styles.skillTag}>Git</div>
              <div className={styles.skillTag}>Linux</div>
              <div className={styles.skillTag}>Cpp</div> 
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
