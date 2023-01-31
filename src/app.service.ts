import axios from "axios";

class AppService {
  public base_url = "http://localhost:5000/api/";

  public async uploadFile(file: any) {
    return axios.post(`${this.base_url}rentals/upload`, file);
  }
}

export const appService = new AppService();
