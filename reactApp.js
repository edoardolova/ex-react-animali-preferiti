const ReactApp = () =>{
    const {useState} = React;
    // const animalsChoices = ["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"];
    const [animals, setAnimals] = useState([])
    const [show, setShow] = useState(false)
    const [animalToAdd, setAnimalToAdd] = useState('');

    // function addRandomAnimal(){
    //     const rand = Math.floor(Math.random()*animalsChoices.length)
    //     const animalToAdd = animalsChoices[rand];
    //     console.log(animalToAdd, rand)
    //     const updatedAnimals =[...animals, animalToAdd]
    //     setAnimals(updatedAnimals)
    // }

    function addAnimal(animalName){
        const updatedAnimals =[...animals, animalName]
        setAnimals(updatedAnimals)
    }

    return(
        <section>
            <button onClick={()=>setShow(true)}>Aggiungi Animale</button>
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
            <Modal
                title="Aggiungi un animale"
                show={show}
                content={
                    <input
                    type="text"
                    placeholder="Nome animale"
                    value={animalToAdd}
                    onChange={e => setAnimalToAdd(e.target.value)}
                    />
                }
                onConfirm={() => {
                    addAnimal(animalToAdd);
                    setAnimalToAdd('');
                    setShow(false);
                }}
                onClose={() => setShow(false)}
            />
        </section>
    )
}