import Layout from "../../component/MyLayout";
import about from '../../styles/about.module.css'
export default function index() {
  return (
    
    <Layout>
      <div className={about.aboutPage}>
      <h1 className={about.aboutH1}> About Us </h1>
      <p className={about.aboutP}>
        Our main goal is to help people who needs health care .<br/>
        Through our world-class services focused on serving patients and their
        needs in the best way,<br/> our team has improved the lives of more than
        17,000 people to date.

      </p>
      </div>
    </Layout>
    
  );
}
