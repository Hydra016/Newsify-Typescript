import { useState } from "react";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

const NewsList: React.FC = () => {
    const dispatch = useDispatch();

    const dispatchEvent = () => {
        console.log(dispatch(actionCreators.searchNews()))
    }
    // console.log('data')

    return (
        <div>
            <button onClick={dispatchEvent}>click</button>
        </div>
    )
}

export default NewsList;