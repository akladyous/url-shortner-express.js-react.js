import { useSelector, useDispatch } from "react-redux";
import {
    useGetUsersQuery,
    useLazyGetUsersQuery,
    useSetUsersMutation,
} from "../app/api/testApiSlice.js";

import { tokenState } from "../features/token/tokenSlice.js";
import { testAction } from "../app/thunkAPI/test/testAction.js";
import { useState } from "react";

export default function Test() {
    const { token } = useSelector(tokenState);
    const dispatch = useDispatch();

    let [setUsers, { isError, isLoading }] = useSetUsersMutation();
    // let {data, error} =  useGetUsersQuery()
    const [getusers, result, lastPromiseInfo] = useLazyGetUsersQuery();
    // let [getUsers, {isLoading, isError, error}] = useGetUsersQuery()

    const [url, setUrl] = useState("");

    const handleTest = (e) => {
        e.preventDefault();

        // dispatch(testAction());
        // getusers()
        // console.log('result : ', result)
        // console.log('lastPromiseInfo : ', lastPromiseInfo)
    };

    return (
        <div className="container">
            <h1>Test page</h1>
            <div>
                <input
                    type="text"
                    name="originalUrl"
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}
                />
                <br />
                <br />
                <button onClick={handleTest}>test route</button>
            </div>
        </div>
    );
}
