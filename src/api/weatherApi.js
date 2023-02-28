import axios from "axios";

const base_url = "https://api.openweathermap.org/data/2.5/";
const key = "d45a965c6d363d0478228680c2924541";

export async function getWeather(location) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `${base_url}weather`, {
        params: {
            q: location,
            appid: key,
        }
      }
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
