import { handleSubmit } from './js/formHandler';
import { getCoordinates } from './js/findCoordinates';
import { addData } from './js/addDataToServer';
import { getData } from './js/displayData';
import { getWeather } from './js/findWeather';
import { evaluateDate } from './js/setDateConditions';
import { getImage } from './js/findImage';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

export {
    handleSubmit,
    getCoordinates,
    addData,
    getData,
    getWeather,
    evaluateDate,
    getImage
}
