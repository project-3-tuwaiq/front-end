import Header from "./header"
import Footer from "./Footer"
import myHome from '../styles/Home.module.css'

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}