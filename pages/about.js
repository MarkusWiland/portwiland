import Layout from '@/components/Layout';
import { About, Section, Languages, GithubCard } from '@/elements/index';
import AboutLanguages from '@/components/AboutLanguages/index';
import { FiInstagram } from 'react-icons/fi';
import { client } from '@/utils/client';
import { Img } from '@/elements/index';
export default function about({ posts, github }) {
  console.log(github);
  return (
    <Layout>
      <h1>About</h1>
      <About>
        <span className="about-info">
          Jag heter Markus Wiland och brinner för programmering och sport. Jag
          är en driven kille som älskar att utveckla och utvecklas. Jag har
          spelat fotboll hela mitt liv, men efter att ha dragit sönder
          korsbandet på båda min knän så har jag valt att gå över till golfen
          helt. Jag tog grönt kort i golf den 17-18 april 2021. Mitt handikapp i
          golf är <b>{posts.golf}</b>
        </span>
        <span className="about-img">
          <Img src="/markuswiland.jpg" />
        </span>
      </About>
      <Section>
        <Languages>
          <AboutLanguages
            icon={<FiInstagram fontSize={30} />}
            lang={'språk'}
            text={'HTML, CSS, JavaScript'}
          />
          <AboutLanguages
            icon={<FiInstagram fontSize={30} />}
            lang={'språk'}
            text={'HTML, CSS, JavaScript'}
          />
          <AboutLanguages
            icon={<FiInstagram fontSize={30} />}
            lang={'språk'}
            text={'HTML, CSS, JavaScript'}
          />
          <AboutLanguages
            icon={<FiInstagram fontSize={30} />}
            lang={'språk'}
            text={'HTML, CSS, JavaScript'}
          />
          <AboutLanguages
            icon={<FiInstagram fontSize={30} />}
            lang={'språk'}
            text={'HTML, CSS, JavaScript'}
          />
          <AboutLanguages
            icon={<FiInstagram fontSize={30} />}
            lang={'språk'}
            text={'HTML, CSS, JavaScript'}
          />
        </Languages>
      </Section>
      <Section>
        <GithubCard>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Img src={github.avatar_url} />
              </div>
              <div className="flip-card-back">
                <h2>{github.login}</h2>
                <p>
                  GitHub: <a href={github.html_url}>{github.html_url}</a>
                </p>
                <p>
                  hur många repos: <b>{github.public_repos}</b>
                </p>
              </div>
            </div>
          </div>
        </GithubCard>
      </Section>
    </Layout>
  );
}
export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'golfHc',
  });
  const res = await fetch('https://api.github.com/users/MarkusWiland');
  const github = await res.json();

  return {
    props: {
      posts: data.items[0].fields,
      github,
    },
  };
}
