import styles from "./User.module.css";

const Home = ({ posts }) => {
  return (
    <div>
      <h1>User Details</h1>
      <div>
        {posts.map((item) => {
          return (
            <div key={item.id} className={styles.name}>
              <h2>{item.name}</h2>
              <h4>{item.website}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { posts: data },
  };
};

export default Home;
