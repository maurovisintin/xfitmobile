import { AsyncStorage } from 'react-native'
import {create} from 'apisauce'
import Reactotron from 'reactotron'

const BASE_API_URL = 'https://xfit-be.herokuapp.com/v1'

const STUB_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im9uaXRzdWthOTBAZ21haWwuY29tIiwic2NvcGUiOlsiQWRtaW4iXSwiaWQiOiI1Nzc2MGU0MzkxYjUxM2RiMGMwZTUyMDUiLCJpYXQiOjE0Njk4MDg4Mzd9.Vy5_amuTf8YcMSQ3-3v_nEum-usRd6frsJcCYdkd-c4"

const XfitApi = create({
  baseURL: BASE_API_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': "Bearer " + STUB_TOKEN
  }
});

XfitApi.addMonitor(Reactotron.apiLog)

export default XfitApi
