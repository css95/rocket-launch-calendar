import axios from 'axios'

const BASE_URL = 'https://ll.thespacedevs.com/2.3.0'

export async function getUpcomingLaunches() {
  const response = await axios.get(`${BASE_URL}/launches/upcoming/`)
  return response.data
}