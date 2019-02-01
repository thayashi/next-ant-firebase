import App from "../components/App";
import "isomorphic-unfetch";

const Isomorphic = ({ stars }) =>
  <App>
    <h1>Isomorphic Data fetch example</h1>
    <p>
      <a href="https://github.com/zeit/next.js/tree/master/examples/data-fetch">
        Same as this example
      </a>
    </p>
    <a href="https://github.com/zeit/next.js">Next</a> Github stars: ⭐️{stars}
  </App>;

Isomorphic.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Isomorphic;
