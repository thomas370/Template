import './home.scss';
import DefaultNav from '../../components/nav/Default_Nav';
import DefaultHeader from "../../components/header/Default_Header";
import Default_Footer from "../../components/footer/Default_Footer";
import Default_newsletter from "../../components/newsletter/Default_newsletter";
const Home = () => {
    return (
        <div className="home">
            <DefaultNav />
            <DefaultHeader text="Titre" text2='phrase numéro 2' />
            <div className="wrapper">
                <Default_newsletter text='Join the newsletter' petittext='Subscribe to get lastest content by mail'/>
            </div>
            <Default_Footer />
        </div>
    )
}

export default Home