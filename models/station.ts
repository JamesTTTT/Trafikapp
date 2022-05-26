import config from "../config/config.json";

const station = {
    getStations: async function getStations() {
        const response = await fetch(`${config.base_url}/stations`);
        const result = await response.json();

        return result.data;
    },

    getStationByAcr: async function getStationName(acronym:string) {
        const result = await this.getStations()

        let res = result.filter(function(item){
            return item.LocationSignature == acronym;
         })
        return res
    }
}

export default station