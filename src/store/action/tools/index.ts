import getAPI from "../../../network/network";
import {AxiosResponse} from "axios";

 const getTools: any = () => (dispatch: any) => {
        return getAPI('tools').then((res: AxiosResponse)=>{
                dispatch({type : 'GET_TOOL', payload: res?.data?.tools});
                console.log('res.......', res);
        }).catch((err) => {
                console.log('err....', err)
        })
}

export default getTools;