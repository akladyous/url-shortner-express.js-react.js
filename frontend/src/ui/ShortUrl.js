import { useParams, Navigate } from 'react-router-dom'
// import { UAParser } from 'ua-parser-js'
import DeviceDetector from "device-detector-js";
import { useGetDataQuery, useSetDataMutation } from '../app/api/apiSlice.js'
import { useEffect } from 'react';

export default function ShortUrl() {

    // const parser = new UAParser()
    const params = useParams()

    const [setData, { isLoading, isError }] = useSetDataMutation();
    // const device = new DeviceDetector()
    // const ua = device.parse(window.navigator.userAgent)
    // console.log('params.shorturl ', params.shorturl)
    // console.log('UAParser : ', parser.getResult())
    // delete ua.bot
    // console.log('DeviceDetector : ', ua)


    // <Navigate to={`/http://localhost:4000/${params.shorturl}`} />
    // window.location.replace(`/http://localhost:4000/${params.shorturl}`)
    // window.location.href = `/http://localhost:4000/${params.shorturl}`
    // return <Redirect route={params.shorturl} />

    // const userAgentData = async () => {

    // }

    useEffect(() => {

        (async () => {
            if (params.shorturl.length === 8) {
                const device = new DeviceDetector()
                const ua = device.parse(window.navigator.userAgent)
                delete ua.bot
                console.log('DeviceDetector : ', ua)
                // const res = await setData({ url: params.shorturl, data: ua })
                window.location.href = `http://localhost:4000/${params.shorturl}`
                // debugger
                // console.log(res)
            }

        })()
        // window.location.href = `http://localhost:4000/${params.shorturl}`
    }, [])
    return null;
};
