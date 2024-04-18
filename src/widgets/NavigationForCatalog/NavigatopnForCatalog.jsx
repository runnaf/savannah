import { ButtonNumberOfPage } from "../../shared/ui/ButtonNumberOfPage/ButtonNumberOfPage"

export const NavigationForCatalog = () => {
    return (
        <div>
            <TurningButton />
            <ol>
              <ButtonNumberOfPage />
            </ol>
            <TurningButton />
        </div>
    )
}