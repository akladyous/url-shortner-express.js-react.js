import { useState } from "react";
import { useSetUrlMutation } from "../app/api/urlApiSlice.js";
import { useSelector, useDispatch } from "react-redux";
// import {
//     useGetUsersQuery,
//     useLazyGetUsersQuery,
//     useSetUsersMutation,
// } from "../app/api/testApiSlice.js";

// import { tokenState } from "../features/token/tokenSlice.js";
// import { testAction } from "../app/thunkAPI/test/testAction.js";

export default function Test() {
    const dispatch = useDispatch();
    const [originalUrl, setOriginalUrl] = useState("");

    // const { token } = useSelector(tokenState);
    // let [setUsers, { isError, isLoading }] = useSetUsersMutation();
    // let {data, error} =  useGetUsersQuery()
    // const [getusers, result, lastPromiseInfo] = useLazyGetUsersQuery();
    // let [getUsers, {isLoading, isError, error}] = useGetUsersQuery()
    let [setUrl, { isError, isLoading }] = useSetUrlMutation();

    const handleTest = async (e) => {
        e.preventDefault();

        const res = await setUrl({ url: "url", data: { originalUrl: originalUrl }, });
        console.log('response : ', res)
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
                    value={originalUrl}
                    onChange={(e) => {
                        setOriginalUrl(e.target.value);
                    }}
                />
                <br />
                <br />
                <button onClick={handleTest}>test route</button>
            </div>
        </div>
    );
}
