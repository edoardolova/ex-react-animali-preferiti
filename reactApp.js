const ReactApp = () =>{
    const {useState} = React;
    const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];
    const [animals, setAnimals] = useState([])

    function addRandomAnimal(){
        const rand = Math.floor(Math.random()*animalsChoices.length)
        const animalToAdd = animalsChoices[rand];
        console.log(animalToAdd, rand)
        const updatedAnimals =[...animals, animalToAdd]
        setAnimals(updatedAnimals)

    }

    return(
        <section>
            <button onClick={addRandomAnimal}>Agiungi Animale</button>
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