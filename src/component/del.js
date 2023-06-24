import { redirect } from "react-router-dom";
import { delData } from "../helper/helper";

export async function delAction() {
    delData('name')
    return redirect('/')
}