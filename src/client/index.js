import { evaluateDate } from './js/setDateConditions';
import { handleSubmit } from './js/formHandler';
import { getCoordinates } from './js/findCoordinates';
import { getWeather } from './js/findWeather';
import { getImage } from './js/findImage';
import { addData } from './js/addDataToServer';
import { getData } from './js/getDataFromServer';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

export {
    evaluateDate,
    handleSubmit,
    getCoordinates,
    getWeather,
    getImage,
    addData,
    getData,
}
