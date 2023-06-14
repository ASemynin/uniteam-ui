import axios from "axios";
import { IFormsList, IForm, IAnalytic } from "./models";



export async function ListForms(url:string, setData:React.Dispatch<React.SetStateAction<IFormsList[]>>){
    await axios.get(url)
    .then((data) => {
       setData(data.data)
    })
}

export async function FormReq(url:string, id:string, setData:React.Dispatch<React.SetStateAction<IForm | undefined>>){
    await axios.get(url + "/" + id)
    .then((data) => {
       setData(data.data)
    })
}


// FORM FUNCTION

export async function CreateForm(url:string, title:string, desc:string, type:number){
    return await axios.post(url, {
        "title":title, 
        "description":desc, 
        "type":type
    })
}

export async function DeleteForm(id:string, url:string){
    await axios.delete(url + "/" + id)
}

export async function UpdateForm(id:string, url:string, type:number, title?:string, desc?:string,){
    await axios.put(url + "/" + id, {
        "title":title, 
        "description":desc,
        "type":type
    })
}


// QUESTIONS FUNCTION


export async function CreateQuestion(url:string, formId:string, title:string, description:string, required:boolean, type:number){    
    return await axios.post(url, {
        "form":formId, 
        "title": title, 
        "description":description,
        "required":required, 
        "type":type 
    })
}

export async function DeleteQuestion(url:string, questionId:string){
    await axios.delete(url + "/" + questionId)
}

export async function UpdateQuestion(url:string, questionId:string, title:string, description:string, required:boolean, type:number){
    await axios.put(url + "/" + questionId, {
        "id":questionId,
        "title":title,
        "description":description,
        "required":required,
        "type":type
    })
}


// ANSWER FUNCTION


export async function CreateAnswer(url:string, questionId:string, content:string, right:boolean, cost:number){
    return await axios.post(url, {
        "question":questionId, 
        "content": content, 
        "right":right, 
        "cost":cost
    })
}

export async function DeleteAnswer(url:string, answerId:string){
    await axios.delete(url + "/" + answerId)
}

export async function UpdateAnswer(url:string, answerId:string, content:string, right:boolean, cost:number){
    await axios.put(url + "/" + answerId, {
        "content": content,
        "right":right,
        "cost":cost
    })
}

export async function PushHistory(url:string, formId:string, selected:string){
    await axios.post(url, {
        "form": formId,
        "selected":selected,
    })
}



export async function GetAnalytics(url:string, formId:string, setData:React.Dispatch<React.SetStateAction<IAnalytic | undefined>>){
    await axios.get(url + "/" + formId )
    .then(data => {
        setData(data.data)
    })
}