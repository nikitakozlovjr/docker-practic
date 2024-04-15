import axios from 'axios';

class FootballStatService {
    constructor(paramStatistic) {
        this.paramStatistic = paramStatistic;
    };

    async getStat() {
        const { data } = await axios.get(`http://localhost:8000/api/${this.paramStatistic}`);
        return data;
    }
}

export default FootballStatService;