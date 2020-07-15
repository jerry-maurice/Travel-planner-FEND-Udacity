import { handleSubmit, handleReset } from './js/formHandler'
import { intialization, main_display_result, removeChilds } from './js/app'

/*style*/
import './styles/main.scss'

/**
 * initialization
 */
intialization();

export{
    handleReset,
    handleSubmit,
    intialization,
    removeChilds,
    main_display_result,
}
