import pick1 from "../image/restauranfood.jpg"
import delivery from "../image/delivery.jpg"
import ensalada from "../image/ensalada.jpg"
import fritada from "../image/bruchetta.svg"
import parrillada from "../image/lemon dessert.jpg"
import guadalupe from "../image/guadalupe.jpg"
import ricardo from "../image/ricardo.jpg"
import jacob from "../image/jacob.jpg"
import viviana from "../image/viviana.jpg"
import pick2 from "../image/Mario and Adrian A.jpg"
import pick3 from "../image/Mario and Adrian b.jpg"

const Main = () => {
    const items = [
        {
            img: ensalada,
            title: "Ensaladas",
            description: "La mejor ensalada que podrás encontrar en Esmeraldas",
            price: "$2.50"
        },
        {
            img: fritada,
            title: "Fritada",
            description: "Un precio módico, creo que podríamos de estar hablando de algo equilibrado",
            price: "$5.00"
        },
        {
            img: parrillada,
            title: "Postres",
            description: "Lo mejor para comer en familia, no dudes en pedir los toppings",
            price: "$1.50"
        },
    ]
    const testigos = [
        {
            img: guadalupe,
            nombre: "Guadalupe",
            comentario: "Son los mejores"
        },
        {
            img: ricardo,
            nombre: "Ricardo",
            comentario: "Me gusta mucho la ensalada"
        },
        {
            img: jacob,
            nombre: "Jacob",
            comentario: "Me encanta el lugar, muy acogedor"
        },
        {
            img: viviana,
            nombre: "Viviana",
            comentario: "El mejor servicio a docmilio que conozco"
        },
    ]
    return (
        <>
        <section className="section1">
            <div className="landing">
                <div className="landing-data">
                    <h1>Litle Lemon</h1>
                    <h2>Esmeraldas</h2>
                    <p>La mejor comida del mundo mundial, contamos con la experiencia de la abuela.</p>
                    <button>Reservar Mesa</button>
                </div>
                <figure><img src={pick1} width="100%"/></figure>
            </div>
        </section>
        
        <section className="section2">
            <div className="specials">
                <div className="specials-head">
                    <h2>Especiales de la casa</h2>
                    <button>Online Menu</button>
                </div>
                <div className="specials-items">
                    {items.map((item)=>(
                        <div className="item">
                            <figure><img src={item.img}/></figure>
                            <label><h2>{item.title}</h2><span>{item.price}</span></label>
                            <p>{item.description}</p>
                            <label><span>Pedir a domicilio</span><img src={delivery} alt="delivery-logo"/></label>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section3">
            <div className="testimonios">
                <h1>Testimonios</h1>
                <div className="testigos">
                    {testigos.map((testigo)=>(
                        <div className="testimonio">
                            <label><img src={testigo.img} alt="testigo-img"/><span>{testigo.nombre}</span></label>
                            <p>{testigo.comentario}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section4">
            <div className="about">
                <div className="about-data">
                    <h1>Litle Lemon</h1>
                    <h2>Esmeraldas</h2>
                    <p>Contamos con años de experiencia, nuestro amor por la gastronomía tradicional es nuestra herencia.
                        De Esmeraldas para el mundo.
                    </p>
                </div>
                <div className="about-img">
                    <figure><img src={pick2} width="100%"/></figure>
                    <figure><img src={pick3} width="100%"/></figure>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Main