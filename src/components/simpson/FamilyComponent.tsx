import {simpsons} from "../../data/simpson.ts";
import CharacterComponent from "./CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <>
            {
                simpsons.map(
                    (simpson, index) =>
                        <CharacterComponent
                            key={index} simpson={simpson}>
                            {simpson.info}
                        </CharacterComponent>)
            }
        </>
    );
};

export default FamilyComponent;