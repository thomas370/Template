import Nav from '../../components/nav/Default_Nav';
import Card from "../../components/content/card/Default_Card";

const Admin = () => {
    return (
        <div>
            <Nav />
            <div className="cards-container">
                <Card />
            </div>
        </div>
    )
}

export default Admin;