import React from 'react';
import WebView from "./WebView";

import { IOSWebViewProps, AndroidWebViewProps, WindowsWebViewProps } from './WebViewTypes';

export interface InvirtuWebViewProps  {
    id?: string;
}

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps & WindowsWebViewProps & InvirtuWebViewProps;

const VideoConferencing = (props: WebViewProps) => {

    /* eslint-disable no-param-reassign */

    props.source={ uri: `https://widgets.bingewave.com/webrtc/${props.id}` };
    props.allowsInlineMediaPlayback=true;

    return <WebView {...props} />
}

export {VideoConferencing};
export default VideoConferencing;