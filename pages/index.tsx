interface HomeProps {
  poolsCount: number;
}

interface GetServerSideProps {
  props: HomeProps
}

export default function Home(props: HomeProps) {
  return (
    <main>
      <h1>Hello NLW</h1>
      <p>
        Número de bolões criados: {props.poolsCount}
      </p>
    </main>
  )
}

export async function getServerSideProps(): Promise<GetServerSideProps> {
  const endpoint = 'http://localhost:3333/pools/count';
  const response = await fetch(endpoint);
  const data = await response.json();

  return {
    props: {
      poolsCount: data.count
    }
  }
}