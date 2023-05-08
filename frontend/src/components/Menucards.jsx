import { NavLink } from "react-router-dom";
import { Fade } from 'react-reveal';

const Card = (props) => {
    const {menucards} = props;
    return (
        <>
        <Fade top timeout={1300} delay={1000} distance='60px'>
        <div className={menucards.utilities}>
                <article className={`menu-card ${menucards.class} mx-auto`}>
                    <div className="place-holder">Visaully Hidden</div>
                    <NavLink to={`/${menucards.link}`} className="card-link">
                        <div className="card-img-hover"></div>
                        <span className="visually-hidden">PlaceHolder</span>
                    </NavLink>
                    <div className="card-info text-center">
                        <span className="card-title text-capitalize">{menucards.name}</span>
                    </div>
                </article>
            </div>
        </Fade>
        </>
    )
}

    const Menucards = (props) => {
    const {cards} = props;
    return (
        <>
        {cards.map((menucards) => {
            return <Card key={menucards._id} menucards={menucards}/>
        })}
        </>
)
}

export default Menucards;
