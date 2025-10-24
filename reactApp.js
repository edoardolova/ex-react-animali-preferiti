const ReactApp = () =>{
    const animals = ['gatto', 'cane', 'topo', 'scimmia', 'capra', 'serpente']
    return(
        <section>
            <details>
                <summary>Animali</summary>
                <ul>
                   { animals.map((animal, index) => {
                        return(
                            <li key={index}>{animal}</li>
                        )
                    })}
                </ul>
            </details>
        </section>
    )
}