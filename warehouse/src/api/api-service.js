class ApiService {
  url = "https://localhost:5001/api/car";

  getResource = async () => {
    const res = await fetch(this.url);

    if (!res.ok) {
      throw new Error(`Coudnt't fetch ${this.url} , recieved ${res.status}`);
    }

    return await res.json();
  };
}

export default ApiService;