import BorderButton from "../components/BorderButton"


const Links = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-lg font-semibold pt-20 pb-7">Linki</h1>
        <div className="flex flex-row gap-5">
            <div className="felx flex-col divide-y border-y">
                <BorderButton label="Kariera" />
                <BorderButton label="Firma" />
            </div>
            <div className="felx flex-col divide-y border-y">
                <BorderButton label="Biuro prasowe" />
                <BorderButton label="Kolekcja lifestyle" />
            </div>
        </div>

    </section>
  )
}

export default Links