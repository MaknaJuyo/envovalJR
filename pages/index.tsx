import { GetServerSideProps } from "next";
import { Enxoval, getAllEnxoval } from "../lib/db";
import { getCheckbox, getItem } from "../lib/checkbox";

export const getServerSideProps: GetServerSideProps = async () => {
  const enxoval = await getAllEnxoval();
  return {
    props: {
      enxoval,
    },
  };
};

interface PostProps {
  enxoval: Enxoval[];
}

const Home = ({ enxoval }: PostProps) => {

  const postTrousseau = async () => {

    await fetch("/api/enxoval", {
      method: 'POST',
      body: getCheckbox(),
    })
  }

  return (
    <div>
      <body id="cozinha">
        <div className="main-container">
          <h1>Cozinha</h1>
          <form id="register-form">
            {
              enxoval?.map((enx) => (
                getItem(enx.ite, enx.tem)
              ))
            }
            <div className="full-box">
                <button onClick={()=>postTrousseau()} type="submit" id="btn-submit" title="Registrar o enxoval do apartamentinho">
                    <div className="submitIcon"></div>      
                </button>
            </div>
          </form>
        </div>
        <div className="main-container">
          <form action="">
            <div className="full-box">
              <div id="valorProgresso">
                0%
              </div>
            </div>
            <div className="barra">
              <div></div>
            </div>
          </form>
        </div>
      </body>
    </div>
  )
}

export default Home
